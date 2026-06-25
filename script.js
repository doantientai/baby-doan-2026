/* =========================================================================
   CONFIG — everything you might want to edit lives here.
   ========================================================================= */
const CONFIG = {
  // The name the visitor has to guess (case-insensitive).
  name: "Anna",

  // Hints are revealed one at a time. The chronometer starts when the first
  // hint is shown and stops on a correct guess.
  hints: [
    'Il commence et se termine par la lettre « A ».',
    "Il a exactement 4 lettres.",
    "C'est un palindrome — il se lit pareil dans les deux sens.",
    'Il signifie « grâce ».',
  ],

  // The big reveal.
  reveal: {
    fullName: "Anna Tâm Sophie Xuân Doan",
    photo: "photos/anna-1.jpg",
    photoAlt: "Bébé Anna",
    facts: [
      { label: "Née le", value: "22 juin 2026 à 21h39" },
      { label: "Lieu", value: "Le Chesnay-Rocquencourt, France" },
      { label: "Poids", value: "2,995 kg" },
      { label: "Taille", value: "49 cm" },
    ],
    story:
      "Après une longue attente, notre petite Anna est arrivée pour remplir " +
      "notre monde de grâce. Son prénom se lit pareil dans les deux sens — " +
      "une petite symétrie parfaite pour une petite fille parfaitement " +
      "aimée. Bienvenue dans la famille, Anna. On a hâte de te voir grandir.",
  },
};

/* =========================================================================
   State
   ========================================================================= */
let timerStart = null;
let timerInterval = null;
let elapsedMs = 0;
let hintsShown = 0;
let solved = false;

/* =========================================================================
   Helpers
   ========================================================================= */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// Lowercase + strip accents so "Anna", "anna", "ánna" all match.
function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const m = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  const cs = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
  return `${m}:${s}.${cs}`;
}

function startTimer() {
  if (timerStart !== null) return;
  timerStart = Date.now();
  timerInterval = setInterval(() => {
    elapsedMs = Date.now() - timerStart;
    $("#timer").textContent = formatTime(elapsedMs);
  }, 50);
}

function stopTimer() {
  if (timerStart === null) return;
  elapsedMs = Date.now() - timerStart;
  clearInterval(timerInterval);
  timerInterval = null;
  $("#timer").textContent = formatTime(elapsedMs);
}

function showScreen(id) {
  // The reveal is locked until the name has been guessed.
  if (id === "screen-reveal" && !solved) return;
  $$(".screen").forEach((s) => s.classList.remove("active"));
  $(`#${id}`).classList.add("active");
  $$(".nav-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.target === id)
  );
}

/* =========================================================================
   Screen 1 — Guess the name
   ========================================================================= */
function revealNextHint() {
  startTimer();
  if (hintsShown >= CONFIG.hints.length) return;
  const list = $("#hints");
  const li = document.createElement("li");
  li.textContent = CONFIG.hints[hintsShown];
  list.appendChild(li);
  hintsShown += 1;
  const total = CONFIG.hints.length;
  if (hintsShown >= total) {
    $("#hint-btn").disabled = true;
    $("#hint-btn").textContent = `Plus d'indices (${total}/${total})`;
  } else {
    $("#hint-btn").textContent = `💡 Indice suivant (${hintsShown}/${total})`;
  }
}

function checkGuess(e) {
  e.preventDefault();
  if (solved) return;
  const guess = $("#guess-input").value.trim();
  const feedback = $("#guess-feedback");
  if (!guess) return;

  if (normalize(guess) === normalize(CONFIG.name)) {
    solved = true;
    stopTimer();
    feedback.textContent = `🎉 Oui ! C'est ${CONFIG.name} !`;
    feedback.className = "feedback correct";
    $("#guess-input").disabled = true;
    $("#guess-submit").disabled = true;
    $("#hint-btn").disabled = true;
    $("#save-score").classList.remove("hidden");
    // Someone who never used a hint knew it already — celebrate that instead
    // of a flat 00:00.00.
    $("#solved-time-msg").innerHTML =
      elapsedMs > 0
        ? `Trouvé en <strong>${formatTime(elapsedMs)}</strong> !`
        : "Tu connaissais déjà ! 💕";
    // Unlock the reveal now that the name is known.
    renderReveal();
    const navReveal = $("#nav-reveal");
    navReveal.disabled = false;
    navReveal.textContent = "Révélation";
  } else {
    feedback.textContent = "Pas tout à fait — réessaie, ou révèle un indice.";
    feedback.className = "feedback wrong";
    $("#guess-input").select();
  }
}

/* =========================================================================
   Screen 2 — Reveal
   ========================================================================= */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderReveal() {
  const r = CONFIG.reveal;
  $("#reveal-name").textContent = r.fullName;
  const img = $("#reveal-photo");
  img.src = r.photo;
  img.alt = r.photoAlt;
  img.onerror = () => {
    img.replaceWith(buildPhotoPlaceholder());
  };
  const facts = $("#reveal-facts");
  facts.innerHTML = "";
  r.facts.forEach((f) => {
    const div = document.createElement("div");
    div.className = "fact";
    div.innerHTML = `<span class="fact-label">${escapeHtml(
      f.label
    )}</span><span class="fact-value">${escapeHtml(f.value)}</span>`;
    facts.appendChild(div);
  });
  $("#reveal-story").textContent = r.story;
}

function buildPhotoPlaceholder() {
  const div = document.createElement("div");
  div.className = "photo-placeholder";
  div.innerHTML = `<span>👶</span><small>Ajoute la photo à<br><code>${CONFIG.reveal.photo}</code></small>`;
  return div;
}

/* =========================================================================
   Init
   ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Navigation
  $$(".nav-btn").forEach((b) =>
    b.addEventListener("click", () => showScreen(b.dataset.target))
  );

  // Guess screen
  $("#hint-btn").addEventListener("click", revealNextHint);
  $("#guess-form").addEventListener("submit", checkGuess);

  // Jump straight to the reveal after winning.
  $("#see-reveal-btn").addEventListener("click", () =>
    showScreen("screen-reveal")
  );

  // Reveal stays locked and unrendered until the name is guessed.

  showScreen("screen-guess");
});
