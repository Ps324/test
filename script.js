const quotes = [
    {
        quote: "Ich denke, also bin ich.",
        author: "René Descartes",
        hints: ["🇫🇷", "📚", "💭"],
    },
    {
        quote: "I have a dream.",
        author: "Martin Luther King Jr.",
        hints: ["🇺🇸", "🎤", "✊"],
    },
    {
        quote: "Der Ball ist rund.",
        author: "Sepp Herberger",
        hints: ["🇩🇪", "⚽", "🏆"],
    },
    {
        quote: "To be, or not to be: that is the question.",
        author: "William Shakespeare",
        hints: ["🇬🇧", "🎭", "💀"],
    },
    {
        quote: "Das ist ein kleiner Schritt für einen Menschen, aber ein riesiger Sprung für die Menschheit.",
        author: "Neil Armstrong",
        hints: ["🇺🇸", "👨‍🚀", "🌕"],
    },
    {
        quote: "Energie = Masse mal Lichtgeschwindigkeit zum Quadrat.",
        author: "Albert Einstein",
        hints: ["🇩🇪", "🔬", "💡"],
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt",
        hints: ["🇺🇸", "🏛️", "😱"],
    },
    {
        quote: "In der Mitte der Schwierigkeit liegt die Möglichkeit.",
        author: "Albert Einstein",
        hints: ["🇩🇪", "🔬", "✨"],
    },
];

let availableQuotes = [];
let currentQuote = null;
let hintIndex = 0;
let score = 0;

const quoteEl = document.getElementById("quote");
const hintsEl = document.getElementById("hints");
const guessInput = document.getElementById("guess-input");
const checkBtn = document.getElementById("check-btn");
const hintBtn = document.getElementById("hint-btn");
const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

function startGame() {
    score = 0;
    availableQuotes = [...quotes];
    startBtn.style.display = "none";
    scoreEl.textContent = "";
    nextBtn.style.display = "none";
    loadNextQuote();
}

function loadNextQuote() {
    if (availableQuotes.length === 0) {
        quoteEl.textContent = "Du hast alle Zitate gelöst!";
        hintsEl.textContent = "";
        guessInput.disabled = true;
        checkBtn.disabled = true;
        hintBtn.disabled = true;
        nextBtn.style.display = "none";
        startBtn.textContent = "Neu starten";
        startBtn.style.display = "inline-block";
        feedbackEl.textContent = `Deine Endpunktzahl: ${score} / ${quotes.length}`;
        return;
    }

    const idx = Math.floor(Math.random() * availableQuotes.length);
    currentQuote = availableQuotes.splice(idx, 1)[0];
    hintIndex = 0;

    quoteEl.textContent = currentQuote.quote;
    hintsEl.textContent = "";
    feedbackEl.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    checkBtn.disabled = false;
    hintBtn.disabled = false;
    nextBtn.style.display = "none";
    scoreEl.textContent = `Punkte: ${score}`;
    guessInput.focus();
}

function showHint() {
    if (!currentQuote || hintIndex >= currentQuote.hints.length) return;

    const span = document.createElement("span");
    span.textContent = currentQuote.hints[hintIndex] + " ";
    hintsEl.appendChild(span);

    hintIndex++;

    if (hintIndex >= currentQuote.hints.length) {
        hintBtn.disabled = true;
    }
}

function normalize(text) {
    return text
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ");
}

function checkAnswer() {
    if (!currentQuote) return;

    const guess = normalize(guessInput.value);
    const correct = normalize(currentQuote.author);

    if (guess === correct) {
        feedbackEl.textContent = "Richtig!";
        feedbackEl.style.color = "#388e3c";
        score++;
    } else {
        feedbackEl.textContent = `Leider falsch. Richtige Antwort: ${currentQuote.author}`;
        feedbackEl.style.color = "#d32f2f";
    }

    guessInput.disabled = true;
    checkBtn.disabled = true;
    hintBtn.disabled = true;
    nextBtn.style.display = "inline-block";
    scoreEl.textContent = `Punkte: ${score}`;
}

guessInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !checkBtn.disabled) {
        checkAnswer();
    }
});

startBtn.addEventListener("click", startGame);
hintBtn.addEventListener("click", showHint);
checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", loadNextQuote);