// Passages for each difficulty
const passages = {
  easy: [
    "The cat sat on the mat.",
    "Dogs love to play in the park.",
    "It is a sunny day today.",
  ],
  medium: [
    "Typing quickly and accurately is a valuable skill for everyone.",
    "Practice makes perfect, so keep working on your typing speed.",
    "The quick brown fox jumps over the lazy dog every morning.",
  ],
  hard: [
    "Success is not the result of spontaneous combustion. You must set yourself on fire.",
    "She sells seashells by the seashore, and the shells she sells are surely seashells.",
    "Amazingly few discotheques provide jukeboxes.",
  ],
};

// DOM Elements
const difficultySelect = document.getElementById("difficulty");
const referenceTextDiv = document.getElementById("referenceText");
const userInput = document.getElementById("userInput");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const retryBtn = document.getElementById("retryBtn");
const resultLevel = document.getElementById("resultLevel");
const resultTime = document.getElementById("resultTime");
const resultWPM = document.getElementById("resultWPM");
const resultAccuracy = document.getElementById("resultAccuracy");
const resultErrors = document.getElementById("resultErrors");
const instructionsBtn = document.getElementById("instructionsBtn");
const instructionsModal = document.getElementById("instructionsModal");
const closeInstructions = document.getElementById("closeInstructions");

let currentPassage = "";
let timer = null;
let startTime = null;
let elapsed = 0;
let testActive = false;
let firstKey = false;

function pickPassage(level) {
  const arr = passages[level];
  return arr[Math.floor(Math.random() * arr.length)];
}

function loadTest(level) {
  currentPassage = pickPassage(level);
  referenceTextDiv.textContent = currentPassage;
  userInput.value = "";
  userInput.disabled = true;
  userInput.placeholder = "Click the start button to begin the test";
  stopBtn.disabled = true;
  retryBtn.disabled = true;
  startBtn.disabled = false;
  resultLevel.textContent = level.charAt(0).toUpperCase() + level.slice(1);
  resultTime.textContent = "0s";
  resultWPM.textContent = "0";
  resultAccuracy.textContent = "0%";
  resultErrors.textContent = "0";
  elapsed = 0;
  testActive = false;
  firstKey = false;
  clearInterval(timer);
}

difficultySelect.addEventListener("change", () => {
  loadTest(difficultySelect.value);
});

startBtn.addEventListener("click", () => {
  userInput.disabled = false;
  userInput.value = "";
  userInput.focus();
  startBtn.disabled = true;
  stopBtn.disabled = false;
  retryBtn.disabled = false;
  testActive = true;
  firstKey = false;
  elapsed = 0;
  resultTime.textContent = "0s";
  resultWPM.textContent = "0";
  resultAccuracy.textContent = "0%";
  resultErrors.textContent = "0";
  clearInterval(timer);
});

userInput.addEventListener("keydown", (e) => {
  if (!testActive) return;
  if (!firstKey && userInput.value.length === 0 && e.key.length === 1) {
    // Start timer on first character
    startTime = Date.now();
    timer = setInterval(() => {
      elapsed = Math.floor((Date.now() - startTime) / 1000);
      resultTime.textContent = `${elapsed}s`;
    }, 1000);
    firstKey = true;
  }
});

userInput.addEventListener("input", () => {
  if (!testActive) return;
  // End test if passage is completed
  if (userInput.value === currentPassage) {
    finishTest();
  }
});

stopBtn.addEventListener("click", () => {
  if (testActive) finishTest();
});

retryBtn.addEventListener("click", () => {
  loadTest(difficultySelect.value);
  userInput.disabled = false;
  userInput.focus();
  startBtn.disabled = true;
  stopBtn.disabled = false;
  retryBtn.disabled = false;
  testActive = true;
  firstKey = false;
  elapsed = 0;
  resultTime.textContent = "0s";
  resultWPM.textContent = "0";
  resultAccuracy.textContent = "0%";
  resultErrors.textContent = "0";
  clearInterval(timer);
});

function finishTest() {
  testActive = false;
  userInput.disabled = true;
  stopBtn.disabled = true;
  startBtn.disabled = false;
  clearInterval(timer);
  if (firstKey) {
    elapsed = Math.floor((Date.now() - startTime) / 1000);
  }
  resultTime.textContent = `${elapsed}s`;
  // Calculate WPM, accuracy, errors
  const userText = userInput.value;
  const refText = currentPassage;
  const wordsTyped = userText.trim().split(/\s+/).length;
  const wpm = elapsed > 0 ? Math.round((wordsTyped / elapsed) * 60) : 0;
  resultWPM.textContent = wpm;
  // Accuracy and errors
  let correct = 0,
    total = refText.length,
    errors = 0;
  for (let i = 0; i < userText.length; i++) {
    if (userText[i] === refText[i]) correct++;
    else errors++;
  }
  errors += Math.max(0, refText.length - userText.length);
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  resultAccuracy.textContent = `${accuracy}%`;
  resultErrors.textContent = errors;
}

// Instructions Modal Logic
instructionsBtn.addEventListener("click", () => {
  instructionsModal.setAttribute("aria-hidden", "false");
});
closeInstructions.addEventListener("click", () => {
  instructionsModal.setAttribute("aria-hidden", "true");
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    instructionsModal.setAttribute("aria-hidden", "true");
  }
});
window.addEventListener("click", (e) => {
  if (e.target === instructionsModal) {
    instructionsModal.setAttribute("aria-hidden", "true");
  }
});

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  loadTest(difficultySelect.value);
});
