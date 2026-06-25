/* =========================================================================
   CONFIG — everything you might want to edit lives here.
   ========================================================================= */
const CONFIG = {
  // The name the visitor has to guess (case-insensitive).
  name: "Anna",

  // Hints are revealed one at a time. The chronometer starts when the first
  // hint is shown and stops on a correct guess.
  hints: [
    'It starts and ends with the letter "A".',
    "It has exactly 4 letters.",
    "It's a palindrome — same forwards and backwards.",
    'It means "grace".',
  ],

  // The big reveal.
  reveal: {
    fullName: "Anna Tâm Sophie Xuân Doan",
    photo: "photos/anna-1.jpg",
    photoAlt: "Baby Anna",
    facts: [
      { label: "Born", value: "June 22, 2026 at 9:39 PM" },
      { label: "Place", value: "Le Chesnay-Rocquencourt, France" },
      { label: "Weight", value: "2.995 kg" },
      { label: "Height", value: "49 cm" },
    ],
    story:
      "After a long wait, our little Anna arrived to fill our world with " +
      "grace. Her name reads the same forwards and backwards — a small, " +
      "perfect symmetry for a perfectly loved little girl. Welcome to the " +
      "family, Anna. We can't wait to watch you grow.",
  },

  // localStorage key for the scoreboard.
  storageKey: "baby-doan-scoreboard",
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
  if (hintsShown >= CONFIG.hints.length) {
    $("#hint-btn").disabled = true;
    $("#hint-btn").textContent = "No more hints";
  }
}

function checkGuess(e) {
  e.preventDefault();
  if (solved) return;
  const guess = $("#guess-input").value.trim();
  const feedback = $("#guess-feedback");
  if (!guess) return;

  if (guess.toLowerCase() === CONFIG.name.toLowerCase()) {
    solved = true;
    stopTimer();
    feedback.textContent = `🎉 Yes! It's ${CONFIG.name}!`;
    feedback.className = "feedback correct";
    $("#guess-input").disabled = true;
    $("#guess-submit").disabled = true;
    $("#hint-btn").disabled = true;
    $("#save-score").classList.remove("hidden");
    $("#final-time").textContent = formatTime(elapsedMs);
  } else {
    feedback.textContent = "Not quite — try again, or reveal a hint.";
    feedback.className = "feedback wrong";
    $("#guess-input").select();
  }
}

/* =========================================================================
   Screen 2 — Scoreboard (localStorage)
   ========================================================================= */
function loadScores() {
  try {
    return JSON.parse(localStorage.getItem(CONFIG.storageKey)) || [];
  } catch {
    return [];
  }
}

function saveScores(scores) {
  localStorage.setItem(CONFIG.storageKey, JSON.stringify(scores));
}

function renderScoreboard() {
  const scores = loadScores().sort((a, b) => a.ms - b.ms);
  const tbody = $("#scoreboard-body");
  tbody.innerHTML = "";
  if (scores.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="3" class="empty">No scores yet — be the first!</td>`;
    tbody.appendChild(tr);
    return;
  }
  scores.forEach((s, i) => {
    const tr = document.createElement("tr");
    const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1;
    tr.innerHTML = `<td>${medal}</td><td>${escapeHtml(
      s.player
    )}</td><td>${formatTime(s.ms)}</td>`;
    tbody.appendChild(tr);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function handleSaveScore() {
  const player = $("#player-name").value.trim();
  if (!player) {
    $("#player-name").focus();
    return;
  }
  const scores = loadScores();
  scores.push({ player, ms: elapsedMs, at: Date.now() });
  saveScores(scores);
  renderScoreboard();
  $("#save-confirm").textContent = `Saved! Thanks, ${player}.`;
  $("#player-name").value = "";
  $("#player-name").disabled = true;
  $("#save-score-btn").disabled = true;
}

/* =========================================================================
   Screen 3 — Reveal
   ========================================================================= */
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
  div.innerHTML = `<span>👶</span><small>Add the photo at<br><code>${CONFIG.reveal.photo}</code></small>`;
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

  // Scoreboard
  $("#save-score-btn").addEventListener("click", handleSaveScore);
  renderScoreboard();

  // Reveal
  renderReveal();

  showScreen("screen-guess");
});
