// ====== 課題文（ここに文章を貼り付けてOK：改行もOK）======
const targetText = `2010年代に入ると、日本でも人種や民族に係るいわゆるヘイトスピーチが社会問題となり、
国や地方自治体がヘイトスピーチの禁止や拡散防止の取組みを始めた。その過程で、未成年者がヘイ
トスピーチに接する機会を減少させる必要性が指摘されるようになった。精神的に未成熟な未成年者
は環境から負の影響を受けやすいためである。そこで国は、20XX年、一定の要件を満たす図書
（電子書籍を含む）を「有害差別図書」として指定し、青少年（18歳に満たない者を指す）に
閲覧させること等を禁止するとともに、その販売方法に規制を加える法律を制定した。
新法の目的は、有害差別図書によって青少年の健全な育成が阻害されることの防止にある。新法
によれば、有害差別図書の指定方法には、個別指定と包括指定の2種類がある。`;
// ===========================================

const targetDiv = document.getElementById("target");
const input = document.getElementById("input");
const errorSound = document.getElementById("errorSound");
const message = document.getElementById("message");

let currentIndex = 0;
let isComposing = false;

let flashIndex = -1;
let flashTimer = null;

function escapeHTML(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function showError(msg) {
  targetDiv.innerHTML =
    `<div style="color:red; white-space:pre-wrap;">${escapeHTML(msg)}</div>`;
}

function render() {
  const before = escapeHTML(targetText.slice(0, currentIndex));
  const curChar = currentIndex < targetText.length ? escapeHTML(targetText[currentIndex]) : "";
  const after = escapeHTML(targetText.slice(currentIndex + 1));

  const shouldFlash = (flashIndex === currentIndex) && currentIndex < targetText.length;

  targetDiv.innerHTML =
    `<span class="correct">${before}</span>` +
    (shouldFlash
      ? `<span class="flash-error">${curChar || " "}</span>`
      : `${curChar}`) +
    `${after}`;

  if (message) message.textContent = `${currentIndex} / ${targetText.length}`;
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
      localStorage.setItem("clear_A_mode", "true");
      alert("クリア！");
    }
  } else {
    beep();
    flashHere();
    input.value = targetText.slice(0, currentIndex); // 正しいところまで戻す
  }
}

try {
  // 最初に必ず表示
  render();

  input.addEventListener("compositionstart", () => {
    isComposing = true;
  });

  input.addEventListener("compositionend", () => {
    isComposing = false;
    validateInput(); // 確定した瞬間に判定
  });

  input.addEventListener("input", (e) => {
    // 変換中は判定しない（A型の肝）
    if (isComposing || e.isComposing) return;
    validateInput();
  });
} catch (e) {
  showError("スクリプトでエラーが発生しました。\n\n" + (e?.message || String(e)));
}
