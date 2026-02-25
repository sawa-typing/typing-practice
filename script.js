// ===== 例文をここに5本入れる =====
const TEXTS = [
  { id: "t1", title: "例文1", text: `ここに1本目の文章を入れてください。` },
  { id: "t2", title: "例文2", text: `ここに2本目の文章を入れてください。` },
  { id: "t3", title: "例文3", text: `ここに3本目の文章を入れてください。` },
  { id: "t4", title: "例文4", text: `ここに4本目の文章を入れてください。` },
  { id: "t5", title: "例文5", text: `ここに5本目の文章を入れてください。` },
];
// ====================================

const targetDiv = document.getElementById("target");
const input = document.getElementById("input");
const errorSound = document.getElementById("errorSound");
const message = document.getElementById("message");
const textSelect = document.getElementById("textSelect");

// resetBtn は「無い」前提で安全に扱う（あってもOK）
const resetBtn = document.getElementById("resetBtn");

let currentTextIndex = 0;
let targetText = TEXTS[0].text;
let currentIndex = 0;
let isComposing = false;

let flashIndex = -1;
let flashTimer = null;

function escapeHTML(s) {
  return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

function showError(msg) {
  if (!targetDiv) return;
  targetDiv.innerHTML = `<div style="color:red; white-space:pre-wrap;">${escapeHTML(msg)}</div>`;
}

function render() {
  if (!targetDiv) return;

  const before = escapeHTML(targetText.slice(0, currentIndex));
  const curChar = currentIndex < targetText.length ? escapeHTML(targetText[currentIndex]) : "";
  const after = escapeHTML(targetText.slice(currentIndex + 1));

  const shouldFlash = (flashIndex === currentIndex) && currentIndex < targetText.length;

  targetDiv.innerHTML =
    `<span class="correct">${before}</span>` +
    (shouldFlash ? `<span class="flash-error">${curChar || " "}</span>` : `${curChar}`) +
    `${after}`;

  if (message) {
    message.textContent = `${TEXTS[currentTextIndex].title}：${currentIndex} / ${targetText.length}`;
  }
}

function beep() {
  if (!errorSound) return;
  errorSound.currentTime = 0;
  errorSound.play();
}

function flashHere() {
  flashIndex = currentIndex;
  render();

  if (flashTimer) clearTimeout(flashTimer);
  flashTimer = setTimeout(() => {
    flashIndex = -1;
    render();
  }, 600);
}

function validateInput() {
  const value = input.value;
  const expected = targetText.slice(0, value.length);

  if (value === expected) {
    currentIndex = value.length;
    render();

    if (currentIndex === targetText.length && targetText.length > 0) {
      localStorage.setItem(`clear_${TEXTS[currentTextIndex].id}`, "true");
      alert("クリア！");
    }
  } else {
    beep();
    flashHere();
    input.value = targetText.slice(0, currentIndex);
  }
}

function resetCurrent() {
  currentIndex = 0;
  input.value = "";
  flashIndex = -1;
  render();
}

function setTextByIndex(idx) {
  currentTextIndex = idx;
  targetText = TEXTS[currentTextIndex].text;

  localStorage.setItem("selected_text_id", TEXTS[currentTextIndex].id);
  resetCurrent();
}

function initSelect() {
  if (!textSelect) {
    showError("エラー：index.html に id=\"textSelect\" の <select> が見つかりません。");
    return;
  }

  // 選択肢を作る（空なら必ずここで入る）
  textSelect.innerHTML = "";
  TEXTS.forEach((t, i) => {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = t.title;
    textSelect.appendChild(opt);
  });

  // 前回選択を復元
  const savedId = localStorage.getItem("selected_text_id");
  const savedIndex = TEXTS.findIndex(t => t.id === savedId);
  const startIndex = savedIndex >= 0 ? savedIndex : 0;

  textSelect.value = String(startIndex);
  setTextByIndex(startIndex);

  textSelect.addEventListener("change", () => {
    const idx = Number(textSelect.value);
    setTextByIndex(Number.isFinite(idx) ? idx : 0);
  });

  // resetBtn がある場合だけイベントを付ける（無くても落ちない）
  if (resetBtn) {
    resetBtn.addEventListener("click", resetCurrent);
  }

  // 初回描画の保険
  requestAnimationFrame(() => render());
}

try {
  if (!targetDiv) throw new Error("id='target' が見つかりません（index.htmlを確認）");
  if (!input) throw new Error("id='input' が見つかりません（index.htmlを確認）");

  initSelect();

  input.addEventListener("compositionstart", () => { isComposing = true; });
  input.addEventListener("compositionend", () => { isComposing = false; validateInput(); });

  input.addEventListener("input", (e) => {
    if (isComposing || e.isComposing) return;
    validateInput();
  });

  render();
} catch (e) {
  showError("スクリプトが停止しました。\n\n" + (e?.message || String(e)));
}
