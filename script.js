/* =========================================================================
   CONFIG — everything you might want to edit lives here.
   ========================================================================= */
const CONFIG = {
  // The name the visitor has to guess (case-insensitive).
  name: "Anna",

  // Hints are revealed one at a time. The chronometer starts when the first
  // hint is shown and stops on a correct guess.
  hints: [
    "Le prénom commence par un A.",
    "Le prénom se termine aussi par un A.",
    "Il signifie « grâce ».",
    "C'est un palindrome : il se lit pareil de gauche à droite et de droite " +
      "à gauche.",
    "Il n'utilise que 2 lettres différentes.",
    "Il compte 4 lettres au total.",
  ],

  // The big reveal. Shared bits live at the top; everything language-specific
  // lives under i18n (fr = the game's reveal; fr/en/vn = the standalone pages).
  reveal: {
    photo: "photos/anna-1.jpg",
    i18n: {
      fr: {
        fullName: "Anna Tâm Sophie Xuân Doan",
        photoAlt: "Bébé Anna",
        facts: [
          { label: "Née le", value: "22 juin 2026 à 21h39" },
          { label: "Lieu", value: "Le Chesnay-Rocquencourt, France" },
          { label: "Poids", value: "2,995 kg" },
          { label: "Taille", value: "49 cm" },
        ],
        structure: [
          { label: "Prénom", value: "Anna" },
          { label: "Autres prénoms", value: "Tâm, Sophie, Xuân" },
          { label: "Nom de famille", value: "Doan" },
        ],
        names: [
          {
            name: "Anna",
            meaning:
              "« grâce » en hébreu (dérivé de Hannah) — et « An » signifie " +
              "aussi « paix » en vietnamien. Anna se prononce exactement " +
              "pareil en vietnamien, en anglais et en français.",
          },
          {
            name: "Tâm",
            meaning:
              "prénom vietnamien (du sino-vietnamien 心) : le cœur, l'âme, " +
              "le centre intérieur d'une personne.",
          },
          {
            name: "Sophie",
            meaning: "en hommage à sa grand-mère maternelle.",
          },
          {
            name: "Xuân",
            meaning:
              "en hommage à sa grand-mère paternelle — « printemps » en " +
              "vietnamien.",
          },
          {
            name: "Doan",
            meaning: "le nom de famille — celui de son papa.",
          },
        ],
        note:
          "Et un joli clin d'œil : Anna Tâm → An Tâm (安心), « un cœur " +
          "paisible ». 💛",
        visit: [
          {
            text:
              "Vaccins à jour conseillés (coqueluche, grippe…) avant de " +
              "rencontrer le bébé —",
            href: "https://vaccination-info-service.fr",
            hrefLabel: "vaccination-info-service.fr",
          },
          { text: "Pas de bisous sur le visage du bébé 😘🚫" },
          { text: "On se lave les mains au savon avant les câlins 🧼" },
        ],
      },
      en: {
        fullName: "Anna Tâm Sophie Xuân Doan",
        photoAlt: "Baby Anna",
        facts: [
          { label: "Born", value: "June 22, 2026 at 9:39 PM" },
          { label: "Place", value: "Le Chesnay-Rocquencourt, France" },
          { label: "Weight", value: "2.995 kg" },
          { label: "Height", value: "49 cm" },
        ],
        structure: [
          { label: "Given name", value: "Anna" },
          { label: "Middle names", value: "Tâm, Sophie, Xuân" },
          { label: "Family name", value: "Doan" },
        ],
        names: [
          {
            name: "Anna",
            meaning:
              '"grace" in Hebrew (from Hannah) — and "An" also means ' +
              '"peace" in Vietnamese. "Anna" is pronounced exactly the same ' +
              "in Vietnamese, English and French.",
          },
          {
            name: "Tâm",
            meaning:
              "a Vietnamese name (from Sino-Vietnamese 心): the heart, the " +
              "soul, a person's inner core.",
          },
          {
            name: "Sophie",
            meaning: "in honour of her maternal grandmother (her mum's mother).",
          },
          {
            name: "Xuân",
            meaning:
              "in honour of her paternal grandmother (her dad's mother) — " +
              '"spring" in Vietnamese.',
          },
          {
            name: "Doan",
            meaning: "the family name — her father's.",
          },
        ],
        note:
          'A lovely touch: Anna Tâm → An Tâm (安心), "a peaceful heart". 💛',
        visit: [
          {
            text:
              "Up-to-date vaccines recommended (whooping cough, flu…) before " +
              "meeting the baby —",
            href: "https://vaccination-info-service.fr",
            hrefLabel: "French health site",
          },
          { text: "No kissing on the baby's face 😘🚫" },
          { text: "Wash your hands with soap before cuddles 🧼" },
        ],
      },
      vn: {
        fullName: "Anna Tâm Sophie Xuân Đoàn",
        photoAlt: "Bé Anna",
        facts: [
          { label: "Ngày sinh", value: "22/06/2026 lúc 21:39" },
          { label: "Nơi sinh", value: "Le Chesnay-Rocquencourt, Pháp" },
          { label: "Cân nặng", value: "2,995 kg" },
          { label: "Chiều dài", value: "49 cm" },
        ],
        structure: [
          { label: "Tên gọi", value: "Anna" },
          { label: "Tên đệm", value: "Tâm, Sophie, Xuân" },
          { label: "Họ", value: "Đoàn" },
        ],
        names: [
          {
            name: "Anna",
            meaning:
              'nghĩa là "ân điển" trong tiếng Hebrew (từ Hannah) — và "An" ' +
              'cũng có nghĩa là "bình an" trong tiếng Việt. "Anna" được phát ' +
              "âm giống hệt nhau trong tiếng Việt, tiếng Anh và tiếng Pháp. " +
              'Đừng nhầm Anna với "Ăn Na" nhé 😁',
          },
          {
            name: "Tâm",
            meaning:
              "tên Việt (Hán-Việt 心): trái tim, tấm lòng, tâm hồn, cốt lõi " +
              "bên trong của một con người.",
          },
          {
            name: "Sophie",
            meaning: "lấy từ tên bà ngoại của bé.",
          },
          {
            name: "Xuân",
            meaning: "tên của bà nội.",
          },
          {
            name: "Đoàn",
            meaning: "bé mang họ của bố.",
          },
        ],
        note:
          'Một điều thú vị: Anna Tâm → An Tâm (安心), "tâm hồn bình an". 💛',
        visit: [
          {
            text:
              "Nên tiêm phòng đầy đủ (ho gà, cúm…) trước khi gặp bé —",
            href: "https://vaccination-info-service.fr",
            hrefLabel: "trang y tế Pháp",
          },
          { text: "Không hôn lên mặt bé 😘🚫" },
          { text: "Rửa tay bằng xà phòng trước khi bế bé 🧼" },
        ],
      },
    },
  },

  // Liste de naissance (FR page only). Backed by a Google Sheet via an Apps
  // Script web app. Paste that web-app URL into `url` to switch it on — the
  // whole section stays hidden until then.
  giftList: {
    url: "https://script.google.com/macros/s/AKfycbwwBSD9WE6nHXhhz_PXR7WKWfwRQ8CeT75-eJBHQ_SQo5J9gzLu5js_pcSQU0177X8A/exec",
    title: "🎁 Liste de naissance",
    intro:
      "Merci d'être là pour accueillir Anna 💛 Touchez 🎁 pour réserver un " +
      "cadeau (seul·e ou à plusieurs), ou proposez votre propre idée.",
    loading: "Chargement de la liste…",
    error: "Impossible de charger la liste pour le moment.",
    empty: "La liste arrive bientôt 💛",
    takenPrefix: "Déjà pris",
    offerBtn: "🎁",
    offerLabel: "Offrir ce cadeau",
    chooseSolo: "Je m'en occupe",
    chooseJoin: "Je participe",
    cancelChoice: "Annuler",
    reserveBtnMulti: "Je participe",
    multiPrefix: "Déjà :",
    namePromptSolo: "Ton prénom (tu offres ce cadeau) :",
    namePromptJoin: "Ton prénom (tu participes) :",
    addToggle: "➕ Proposer une idée",
    addItemPlaceholder: "Idée de cadeau",
    addDetailsPlaceholder: "Détails (optionnel)",
    addNamePlaceholder: "Ton prénom (si tu l'offres)",
    addCategoryOther: "Autres idées",
    addSubmit: "Ajouter à la liste",
    addMissing: "Indique au moins le nom du cadeau.",
    addThanks: "Merci ! Ton idée a été ajoutée 💛",
    addError: "Impossible d'ajouter l'idée. Réessaie.",
    namePrompt: "Ton prénom (pour réserver ce cadeau) :",
    takenByOther: "Oups, ce cadeau vient d'être réservé par",
  },
};

/* =========================================================================
   State
   ========================================================================= */
let timerStart = null;
let timerInterval = null;
let elapsedMs = 0;
let hintsShown = 0;
let guesses = 0;
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
function startGame() {
  $("#play-btn").classList.add("hidden");
  $("#game").classList.remove("hidden");
  startTimer();
  $("#guess-input").focus();
}

function revealNextHint() {
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
  guesses += 1;

  if (normalize(guess) === normalize(CONFIG.name)) {
    solved = true;
    stopTimer();
    feedback.textContent = `🎉 Oui ! C'est ${CONFIG.name} !`;
    feedback.classList.remove("wrong");
    feedback.classList.add("correct");
    $("#guess-input").disabled = true;
    $("#guess-submit").disabled = true;
    $("#hint-btn").disabled = true;
    $("#result").classList.remove("hidden");
    $("#result-time").textContent = formatTime(elapsedMs);
    $("#result-guesses").textContent = guesses;
    $("#result-hints").textContent = `${hintsShown} / ${CONFIG.hints.length}`;
    // Unlock the reveal now that the name is known.
    renderReveal("fr");
    const navReveal = $("#nav-reveal");
    navReveal.disabled = false;
    navReveal.textContent = "Révélation";
  } else {
    feedback.textContent = "Pas tout à fait — réessaie, ou révèle un indice.";
    feedback.classList.remove("correct");
    feedback.classList.add("wrong");
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

function renderReveal(lang) {
  const r = CONFIG.reveal;
  const t = r.i18n[lang] || r.i18n.fr;
  const nameEl = $("#reveal-name");
  if (nameEl) nameEl.textContent = t.fullName;
  const img = $("#reveal-photo");
  img.src = r.photo;
  img.alt = t.photoAlt;
  img.onerror = () => {
    img.replaceWith(buildPhotoPlaceholder());
  };
  const facts = $("#reveal-facts");
  facts.innerHTML = "";
  t.facts.forEach((f) => {
    const div = document.createElement("div");
    div.className = "fact";
    div.innerHTML = `<span class="fact-label">${escapeHtml(
      f.label
    )}</span><span class="fact-value">${escapeHtml(f.value)}</span>`;
    facts.appendChild(div);
  });
  const structure = $("#reveal-structure");
  if (structure) {
    structure.innerHTML = "";
    (t.structure || []).forEach((s) => {
      const row = document.createElement("div");
      row.className = "structure-row";
      row.innerHTML = `<span class="structure-label">${escapeHtml(
        s.label
      )}</span><span class="structure-value">${escapeHtml(s.value)}</span>`;
      structure.appendChild(row);
    });
  }
  const names = $("#reveal-names");
  names.innerHTML = "";
  (t.names || []).forEach((n) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="name-word">${escapeHtml(
      n.name
    )}</span> <span class="name-meaning">${escapeHtml(n.meaning)}</span>`;
    names.appendChild(li);
  });
  const note = $("#reveal-name-note");
  if (t.note) {
    note.textContent = t.note;
    note.style.display = "";
  } else {
    note.style.display = "none";
  }
  const visit = $("#reveal-visit");
  if (visit) {
    visit.innerHTML = "";
    (t.visit || []).forEach((v) => {
      const li = document.createElement("li");
      let html = escapeHtml(v.text);
      if (v.href) {
        html += ` <a href="${escapeHtml(
          v.href
        )}" target="_blank" rel="noopener">${escapeHtml(
          v.hrefLabel || v.href
        )}</a>`;
      }
      li.innerHTML = html;
      visit.appendChild(li);
    });
  }
  setupRevealCollapsibles();
}

function setupRevealCollapsibles() {
  $$(".reveal-head").forEach((head) => {
    if (head.dataset.bound) return;
    head.dataset.bound = "1";
    head.addEventListener("click", () => {
      const section = head.closest(".reveal-section");
      const collapsed = section.classList.toggle("collapsed");
      head.setAttribute("aria-expanded", String(!collapsed));
    });
  });
}

function buildPhotoPlaceholder() {
  const div = document.createElement("div");
  div.className = "photo-placeholder";
  div.innerHTML = `<span>👶</span><small>Ajoute la photo à<br><code>${CONFIG.reveal.photo}</code></small>`;
  return div;
}

/* =========================================================================
   Gift list (FR page) — reads/writes a Google Sheet via an Apps Script.
   ========================================================================= */
async function initGiftList() {
  const cfg = CONFIG.giftList;
  const root = $("#gift-list");
  // Hidden unless the section exists AND a web-app URL is configured.
  if (!root || !cfg || !cfg.url) return;
  root.classList.remove("hidden");
  $("#gift-title").textContent = cfg.title;
  $("#gift-intro").textContent = cfg.intro;
  setupGiftAdd();
  await loadGiftItems();
}

function setupGiftAdd() {
  const cfg = CONFIG.giftList;
  const toggle = $("#gift-add-toggle");
  if (!toggle) return;
  toggle.textContent = cfg.addToggle;
  $("#gift-add-item").placeholder = cfg.addItemPlaceholder;
  $("#gift-add-details").placeholder = cfg.addDetailsPlaceholder;
  $("#gift-add-name").placeholder = cfg.addNamePlaceholder;
  $("#gift-add-submit").textContent = cfg.addSubmit;
  toggle.addEventListener("click", () =>
    $("#gift-add-form").classList.toggle("hidden")
  );
  $("#gift-add-submit").addEventListener("click", submitGiftIdea);
}

function populateAddCategories(items) {
  const sel = $("#gift-add-category");
  if (!sel) return;
  const cfg = CONFIG.giftList;
  const cats = [];
  items.forEach((it) => {
    const c = (it.category || "").trim();
    if (c && !cats.includes(c)) cats.push(c);
  });
  if (!cats.includes(cfg.addCategoryOther)) cats.push(cfg.addCategoryOther);
  sel.innerHTML = cats
    .map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`)
    .join("");
}

async function submitGiftIdea() {
  const cfg = CONFIG.giftList;
  const msg = $("#gift-add-msg");
  const item = $("#gift-add-item").value.trim();
  if (!item) {
    msg.textContent = cfg.addMissing;
    return;
  }
  const payload = {
    action: "add",
    item,
    details: $("#gift-add-details").value.trim(),
    category: $("#gift-add-category").value,
    name: $("#gift-add-name").value.trim(),
  };
  const btn = $("#gift-add-submit");
  btn.disabled = true;
  msg.textContent = "";
  try {
    const res = await fetch(cfg.url, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.ok) {
      msg.textContent = cfg.addThanks;
      $("#gift-add-item").value = "";
      $("#gift-add-details").value = "";
      $("#gift-add-name").value = "";
      await loadGiftItems();
    } else {
      msg.textContent = cfg.addError;
    }
  } catch (e) {
    msg.textContent = cfg.addError;
  }
  btn.disabled = false;
}

async function loadGiftItems() {
  const cfg = CONFIG.giftList;
  const list = $("#gift-items");
  list.innerHTML = `<div class="gift-loading"><span class="spinner" aria-hidden="true"></span><span>${escapeHtml(
    cfg.loading
  )}</span></div>`;
  try {
    const res = await fetch(cfg.url);
    const data = await res.json();
    renderGiftItems(data.items || []);
    populateAddCategories(data.items || []);
  } catch (e) {
    list.innerHTML = `<p class="gift-status">${escapeHtml(cfg.error)}</p>`;
  }
}

function renderGiftItems(items) {
  const cfg = CONFIG.giftList;
  const list = $("#gift-items");
  list.innerHTML = "";
  if (!items.length) {
    list.innerHTML = `<p class="gift-status">${escapeHtml(cfg.empty)}</p>`;
    return;
  }
  // Group by category, preserving order of first appearance.
  const order = [];
  const byCategory = {};
  items.forEach((it) => {
    const cat = (it.category || "").trim() || "—";
    if (!byCategory[cat]) {
      byCategory[cat] = [];
      order.push(cat);
    }
    byCategory[cat].push(it);
  });

  order.forEach((cat) => {
    const group = document.createElement("div");
    group.className = "gift-group collapsed"; // start folded

    const count = byCategory[cat].length;
    const header = document.createElement("button");
    header.type = "button";
    header.className = "gift-category";
    header.setAttribute("aria-expanded", "false");
    header.innerHTML = `<span class="gift-caret" aria-hidden="true">▾</span><span class="gift-cat-name">${escapeHtml(
      cat
    )}</span><span class="gift-count">(${count})</span>`;

    const ul = document.createElement("ul");
    ul.className = "gift-group-items";
    byCategory[cat].forEach((it) => ul.appendChild(buildGiftItem(it, cfg)));

    header.addEventListener("click", () => {
      const collapsed = group.classList.toggle("collapsed");
      header.setAttribute("aria-expanded", String(!collapsed));
    });

    group.appendChild(header);
    group.appendChild(ul);
    list.appendChild(group);
  });
}

function buildGiftItem(it, cfg) {
  const taken = (it.takenBy || "").trim();
  const details = it.details
    ? `<span class="gift-details">${escapeHtml(it.details)}</span>`
    : "";
  const word = `<span class="gift-word">${escapeHtml(it.item)}</span>`;
  const li = document.createElement("li");
  li.className = "gift-item";

  if (it.multi) {
    // Shared item: contributors + an always-open "Je participe" button.
    const contributors = taken
      ? `<span class="gift-contributors">👥 ${escapeHtml(
          cfg.multiPrefix
        )} ${escapeHtml(taken)}</span>`
      : "";
    li.innerHTML = `<span class="gift-name">${word}${details}${contributors}</span><button class="gift-reserve gift-join">${escapeHtml(
      cfg.reserveBtnMulti
    )}</button>`;
    li.querySelector(".gift-join").addEventListener("click", (e) =>
      reserveGift(it.row, "join", e.currentTarget)
    );
  } else if (taken) {
    // Taken entirely by one person.
    li.classList.add("taken");
    li.innerHTML = `<span class="gift-name">${word}${details}</span><span class="gift-badge taken">✅ ${escapeHtml(
      cfg.takenPrefix
    )} · ${escapeHtml(taken)}</span>`;
  } else {
    // Open: offer → choose to take it entirely or join.
    li.innerHTML =
      `<span class="gift-name">${word}${details}</span>` +
      `<button class="gift-reserve gift-offer" aria-label="${escapeHtml(
        cfg.offerLabel
      )}" title="${escapeHtml(cfg.offerLabel)}">${escapeHtml(
        cfg.offerBtn
      )}</button>` +
      `<div class="gift-choice">` +
      `<button class="gift-reserve gift-choice-solo">${escapeHtml(
        cfg.chooseSolo
      )}</button>` +
      `<button class="gift-reserve gift-choice-join">${escapeHtml(
        cfg.chooseJoin
      )}</button>` +
      `<button class="gift-cancel">${escapeHtml(cfg.cancelChoice)}</button>` +
      `</div>`;
    li.querySelector(".gift-offer").addEventListener("click", () =>
      li.classList.add("choosing")
    );
    li.querySelector(".gift-choice-solo").addEventListener("click", (e) =>
      reserveGift(it.row, "solo", e.currentTarget)
    );
    li.querySelector(".gift-choice-join").addEventListener("click", (e) =>
      reserveGift(it.row, "join", e.currentTarget)
    );
    li.querySelector(".gift-cancel").addEventListener("click", () =>
      li.classList.remove("choosing")
    );
  }
  return li;
}

async function reserveGift(row, mode, btn) {
  const cfg = CONFIG.giftList;
  const promptText =
    mode === "solo" ? cfg.namePromptSolo : cfg.namePromptJoin;
  const name = (prompt(promptText) || "").trim();
  if (!name) return;
  if (btn) btn.disabled = true;
  try {
    const res = await fetch(cfg.url, {
      method: "POST",
      body: JSON.stringify({ row, name, mode }),
    });
    const data = await res.json();
    if (data.ok === false && data.takenBy) {
      alert(`${cfg.takenByOther} ${data.takenBy}.`);
    }
  } catch (e) {
    alert(cfg.error);
  }
  // Re-sync with the sheet so everyone sees the same state.
  await loadGiftItems();
}

/* =========================================================================
   Init
   ========================================================================= */
function initGame() {
  // Navigation
  $$(".nav-btn").forEach((b) =>
    b.addEventListener("click", () => showScreen(b.dataset.target))
  );

  // Guess screen
  $("#play-btn").addEventListener("click", startGame);
  $("#hint-btn").addEventListener("click", revealNextHint);
  $("#guess-form").addEventListener("submit", checkGuess);

  // Blur the name so the result can be screenshotted without spoiling it.
  $("#share-btn").addEventListener("click", () => {
    $("#game").classList.add("shared");
    $("#share-btn").classList.add("hidden");
    $("#share-tip").classList.remove("hidden");
  });

  // Jump straight to the reveal after winning.
  $("#see-reveal-btn").addEventListener("click", () =>
    showScreen("screen-reveal")
  );

  // Reveal stays locked and unrendered until the name is guessed.

  showScreen("screen-guess");
}

document.addEventListener("DOMContentLoaded", () => {
  if ($("#play-btn")) {
    // Full guessing game (index.html).
    initGame();
  } else if ($("#reveal-photo")) {
    // Standalone details page — render in the page's language.
    renderReveal(document.body.dataset.lang || "fr");
    // Gift list only appears where the section exists (the FR page).
    initGiftList();
  }
});
