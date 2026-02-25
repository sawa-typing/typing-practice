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

function render() {
  const before = escapeHTML(targetText.slice(0, currentIndex));
  const curChar = currentIndex < targetText.length ? escapeHTML(targetText[currentIndex]) : "";
  const after = escapeHTML(targetText.slice(currentIndex + 1));

  const shouldFlash = flashIndex === currentIndex;

  targetDiv.innerHTML =
    `<span class="correct">${before}</span>` +
    (shouldFlash
      ? `<span class="flash-error">${curChar}</span>`
      : `${curChar}`) +
    `${after}`;

  if (message) {
    message.textContent = `${TEXTS[currentTextIndex].title}：${currentIndex} / ${targetText.length}`;
  }
}

function beep() {
  errorSound.currentTime = 0;
  errorSound.play();
}

function flashHere() {
  flashIndex = currentIndex;
  render();
  clearTimeout(flashTimer);
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

    if (currentIndex === targetText.length) {
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
  render();
}

function setText(index) {
  currentTextIndex = index;
  targetText = TEXTS[index].text;
  resetCurrent();
}

// プルダウン初期化
function initSelect() {
  TEXTS.forEach((t, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = t.title;
    textSelect.appendChild(option);
  });

  textSelect.addEventListener("change", () => {
    setText(Number(textSelect.value));
  });

  resetBtn.addEventListener("click", resetCurrent);
}

input.addEventListener("compositionstart", () => {
  isComposing = true;
});

input.addEventListener("compositionend", () => {
  isComposing = false;
  validateInput();
});

input.addEventListener("input", (e) => {
  if (isComposing || e.isComposing) return;
  validateInput();
});

initSelect();
render();
