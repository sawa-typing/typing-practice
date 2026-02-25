// ===== 例文をここに5本入れる =====
const TEXTS = [
  { id: "t1", title: "商法の要点", text: `商法とは、企業に関する法。商売（営業・取引）を円滑かつ公正に行うためのルールを定めた法律です。会社だけでなく、個人事業主も含めた「商人」が行う売買や取引の基本ルールであり、一般的な個人間の取引に適用される「民法」よりも優先される「特別法」。
商法は経済活動全般を支える「民法」を補完する役割を持っている。

商法の科目＝会社法、有価証券法、商法総則・商行為の3つ。
会社法では株式会社と持分会社・合名会社、合資会社、合同会社。
この4つの会社は社員の責任の態様が違う。

間接有限責任＝株式会社
直接無限責任＝合名会社
無限責任社員と出資額を限度とする有限責任社員＝合資会社
出資者全員が間接有限責任＝合同会社・llc

株主平等の原則は、会社が株主をその持つ株式の内容と数に応じて平等に取り扱うべきという、会社法109条1項に明記された原則。
保有株式数に比例した取扱い: 100株持つ株主は1株の株主の100倍の議決権・配当を受ける権利を持つ
株式会社では「株主有限責任」の原則により、会社は株主に出資の払い戻しをする義務がないため、株主は株式譲渡が唯一の資金回収手段となる。

株式譲渡自由の原則（会社法127条）とは、株主が所有する株式を会社の許可なく第三者へ自由に売却・譲渡できるという株式会社の根本原則です。これは株主の投下資本回収の手段（離脱の自由）を保障し、円滑な資金調達と投資促進を図るためです。

「所有と経営の分離」とは、株式会社において出資者（株主＝所有）と実務を行う取締役（経営者＝経営）を分ける仕組み。株式会社の所有者（株主）が直接の経営をせず、経営を専門の取締役に委任する構造。

株主総会とは、会社法に基づき、経営方針、取締役の選任、配当の決定など、株主が意思決定を行う会合であり、監査役が職務執行にあたる。
公開会社とは、株式譲渡に関する規制を設けていない会社のこと。
非公開会社（株式譲渡制限会社）

株式会社には、会計参与、会計監査人を置く
　　　　　　　他には、3委員会（指名委員会、監査委員会、報酬委員会）
資本金とは、会社設立時や増資時に出資者（主に経営者）が払い込んだ、事業運営の元手となる資金（純資産）

配当とは、企業が事業活動で得た利益の一部を、株主に対して現金（配当金）として還元する仕組みです。株式投資における主な収益の1つで、企業への投資家に対するリターンとして支払われます。

手形とは、企業間の取引において、現金に代わり将来の一定期日に代金を支払うことを約束する有価証券です。「信用取引」の一種であり、主に「約束手形」と「為替手形」があります。支払期日に銀行へ持ち込むか、それ以前に銀行へ買い取ってもらう（手形割引）ことで現金化します。

手形の交付欠缺（こうふけんけつ）とは、手形に振出人としての署名・押印はしたものの、それを相手方に渡す（交付する）前に、盗難や紛失などによって手形が意に反して流出してしまった状態のことです。この場合、手形法上の本来的な意思表示がないため、原則として手形上の責任を負いません。

有価証券とは、株式・債券・投資信託など、それ自体が財産的価値を持ち、譲渡することでその権利を移転できる証書（または電子記録）のこと


有価証券法とは、株式、債券、手形などの財産的価値を持つ権利（有価証券）の権利の移転や行使、売買ルールなどを定めた法律の総称。

金融商品取引法（旧・証券取引法）は、株式、社債、投資信託などの「有価証券」の募集・売買、情報開示、市場の公正性、投資家保護に関する総合的な法律です。2007年の改正により、従来の金融商品に加え、信託受益権やファンド持分など幅広い「二項有価証券」も規制対象となっています。

商人とは「商行為」を継続して行う個人や法人のこと。
商業登記とは、株式会社などの法人について、商号（社名）、所在地、役員、資本金といった重要事項を法務局の登記簿に記載し、一般に公開（公示）する制度。9条

商号とは、会社や個人事業主が営業活動で自らを表示するために使用する「正式な名称」。
商行為法は、商人（商売人・企業）が営業として行う取引（商行為）に適用される（私法・特別法）。
債権とは、債務者に対して、金銭の支払いや物品の引き渡し、サービスの提供など、特定の行為を要求できる権利のことです。お金を貸した人が返済を求める権利（貸金債権）や、商品を売った人が代金を請求する権利（売掛金）などが代表例です。 
債務との関係: 債権は「受け取る権利」、債務は「支払う・行う義務」であり、表裏一体の関係です。

債権の発生原因: 主に契約（売買、貸借）、不法行為、事務管理、不当利得などから発生します。
人に対する権利: 特定の人（債務者）にのみ主張できる権利です。
財産権: 債権もお金に換算できる財産の一つであり、売却や譲渡（債権譲渡）が可能です。

企業法は、会社の設立・運営・組織改編などを規定する会社法を中核とし、商法、金融商品取引法など企業活動に関わる法律の総称。

設権性（設権証券性）とは、手形や小切手などの有価証券において、その証券の作成（振出・発行）という法律行為によって初めて権利や法律関係が発生する性質のこと。

無因証券性とは、手形や小切手において、その発行原因となった取引（売買契約など）が後から無効・取消・解除されても、証券上の権利（支払義務）には影響しないという性質です。証券の取引が安全で迅速に行われるよう、原因関係から切り離された独立した権利として扱われます。
` },
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

