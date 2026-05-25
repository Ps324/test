const quotes = [
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs",
        hints: ["🇺🇸", "💻", "🍎"],
    },
    {
        quote: "Float like a butterfly, sting like a bee.",
        author: "Muhammad Ali",
        hints: ["🇺🇸", "🥊", "🦋"],
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky",
        hints: ["🇨🇦", "🏒", "🥅"],
    },
    {
        quote: "Imagination is more important than knowledge.",
        author: "Albert Einstein",
        hints: ["🇩🇪", "🔬", "🧠"],
    },
    {
        quote: "That’s one small step for man, one giant leap for mankind.",
        author: "Neil Armstrong",
        hints: ["🇺🇸", "👨‍🚀", "🌕"],
    },
    {
        quote: "The journey of a thousand miles begins with a single step.",
        author: "Laozi",
        hints: ["🇨🇳", "📜", "👣"],
    },
    {
        quote: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
        hints: ["🇬🇷", "🏛️", "🤔"],
    },
    {
        quote: "Veni, vidi, vici.",
        author: "Julius Caesar",
        hints: ["🇮🇹", "⚔️", "🏛️"],
    },
    {
        quote: "I think, therefore I am.",
        author: "René Descartes",
        hints: ["🇫🇷", "📚", "💭"],
    },
    {
        quote: "To be, or not to be, that is the question.",
        author: "William Shakespeare",
        hints: ["🇬🇧", "🎭", "💀"],
    },
    {
        quote: "I have a dream.",
        author: "Martin Luther King Jr.",
        hints: ["🇺🇸", "🎤", "✊"],
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        hints: ["🇺🇸", "🏛️", "💭"],
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
        hints: ["🇮🇪", "✍️", "🎭"],
    },
    {
        quote: "Not all those who wander are lost.",
        author: "J. R. R. Tolkien",
        hints: ["🇬🇧", "📖", "🧙"],
    },
    {
        quote: "It does not do to dwell on dreams and forget to live.",
        author: "J. K. Rowling",
        hints: ["🇬🇧", "📖", "⚡"],
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        hints: ["🇺🇸", "🎬", "🐭"],
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        hints: ["🇿🇦", "🏛️", "🕊️"],
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr.",
        hints: ["🇺🇸", "🎤", "🤝"],
    },
    {
        quote: "The important thing is not to stop questioning.",
        author: "Albert Einstein",
        hints: ["🇩🇪", "🔬", "❓"],
    },
    {
        quote: "Life is what happens when you’re busy making other plans.",
        author: "John Lennon",
        hints: ["🇬🇧", "🎸", "🟡"],
    },
    {
        quote: "The show must go on.",
        author: "Freddie Mercury",
        hints: ["🇬🇧", "🎤", "👑"],
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
        hints: ["🇺🇸", "🏛️", "💪"],
    },
    {
        quote: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein",
        hints: ["🇩🇪", "🔬", "🧪"],
    },
    {
        quote: "If you judge people, you have no time to love them.",
        author: "Mother Teresa",
        hints: ["🇦🇱", "🙏", "❤️"],
    },
    {
        quote: "Peace begins with a smile.",
        author: "Mother Teresa",
        hints: ["🇦🇱", "🙏", "😊"],
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt",
        hints: ["🇺🇸", "🏛️", "😨"],
    },
    {
        quote: "Ask not what your country can do for you; ask what you can do for your country.",
        author: "John F. Kennedy",
        hints: ["🇺🇸", "🏛️", "🌎"],
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche",
        hints: ["🇩🇪", "📚", "💪"],
    },
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche",
        hints: ["🇩🇪", "📚", "🎵"],
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
        hints: ["🇺🇸", "✍️", "🚀"],
    },
    {
        quote: "If you tell the truth, you don’t have to remember anything.",
        author: "Mark Twain",
        hints: ["🇺🇸", "✍️", "🤥"],
    },
    {
        quote: "I am the one who knocks.",
        author: "Walter White",
        hints: ["🇺🇸", "📺", "🧪"],
    },
    {
        quote: "May the Force be with you.",
        author: "Obi-Wan Kenobi",
        hints: ["🌌", "🎬", "⚔️"],
    },
    {
        quote: "I’ll be back.",
        author: "Arnold Schwarzenegger",
        hints: ["🇦🇹", "🎬", "🤖"],
    },
    {
        quote: "Why so serious?",
        author: "The Joker",
        hints: ["🇺🇸", "🎬", "🃏"],
    },
    {
        quote: "Elementary, my dear Watson.",
        author: "Sherlock Holmes",
        hints: ["🇬🇧", "📖", "🔍"],
    },
    {
        quote: "It always seems impossible until it’s done.",
        author: "Nelson Mandela",
        hints: ["🇿🇦", "🏛️", "✅"],
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
        hints: ["🇹🇼", "🙏", "☸️"],
    },
    {
        quote: "Do or do not. There is no try.",
        author: "Yoda",
        hints: ["🌌", "🎬", "🟢"],
    },
    {
        quote: "I’m gonna make him an offer he can’t refuse.",
        author: "Vito Corleone",
        hints: ["🇮🇹", "🎬", "🍊"],
    },
    {
        quote: "Houston, we have a problem.",
        author: "Jim Lovell",
        hints: ["🇺🇸", "👨‍🚀", "🚀"],
    },
    {
        quote: "Power tends to corrupt, and absolute power corrupts absolutely.",
        author: "Lord Acton",
        hints: ["🇬🇧", "📚", "👑"],
    },
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
        hints: ["🇺🇸", "💡", "⚙️"],
    },
    {
        quote: "The unexamined life is not worth living.",
        author: "Socrates",
        hints: ["🇬🇷", "🏛️", "🔎"],
    },
    {
        quote: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
        hints: ["🇮🇹", "🎨", "🪽"],
    },
    {
        quote: "I came, I saw, I conquered.",
        author: "Julius Caesar",
        hints: ["🇮🇹", "⚔️", "👑"],
    },
    {
        quote: "The pen is mightier than the sword.",
        author: "Edward Bulwer-Lytton",
        hints: ["🇬🇧", "✍️", "🖋️"],
    },
    {
        quote: "Knowledge is power.",
        author: "Francis Bacon",
        hints: ["🇬🇧", "📚", "🧠"],
    },
    {
        quote: "Time is money.",
        author: "Benjamin Franklin",
        hints: ["🇺🇸", "⚡", "⏰"],
    },
    {
        quote: "Cogito, ergo sum.",
        author: "René Descartes",
        hints: ["🇫🇷", "📚", "💭"],
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
