// MATRIX IN THE BACKGROUND

const canvas = document.getElementById("matrixCanvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array of Japanese words including "ikigai"
const japaneseWords = [
  "生きがい",
  "愛",
  "夢",
  "勇気",
  "自由",
  "希望",
  "平和",
  "友情",
  "幸せ",
  "挑戦",
  "成功",
  "成長",
  "感謝",
  "絆",
  "冒険",
  "夢中",
  "人生",
  "喜び",
  "楽しみ",
  "目標",
  "情熱",
  "調和",
  "努力",
  "可能性",
  "奇跡",
  "真理",
  "思いやり",
  "未来",
  "繁栄",
  "満足",
  "謙虚",
  "癒し",
  "教訓",
  "生命",
  "創造",
  "目的",
];

const fontSize = 16;
const columns = canvas.width / fontSize;

// Array to store drop positions
let drops = new Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#42a5f5"; // Green text
  context.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    // Randomly select a Japanese word
    const text =
      japaneseWords[Math.floor(Math.random() * japaneseWords.length)];
    context.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 30);
