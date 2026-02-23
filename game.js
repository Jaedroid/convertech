// ========== GAME DATA ==========
const CHEMISTRY_QUESTIONS = [
    {
        question: "What is the chemical formula for Water?",
        answer: ["H", "H", "O"],
        explanation: "Water is H₂O - two hydrogen atoms bonded to one oxygen atom.",
        points: 100
    },
    {
        question: "What is the formula for Carbon Dioxide?",
        answer: ["C", "O", "O"],
        explanation: "Carbon dioxide is CO₂ - one carbon atom double-bonded to two oxygen atoms.",
        points: 120
    },
    {
        question: "Build the formula for Sodium Chloride (table salt)",
        answer: ["Na", "Cl"],
        explanation: "Sodium chloride is NaCl - ionic compound of sodium and chloride ions.",
        points: 150
    },
    {
        question: "What is the formula for Methane (natural gas)?",
        answer: ["C", "H", "H", "H", "H"],
        explanation: "Methane is CH₄ - simplest hydrocarbon with one carbon and four hydrogens.",
        points: 200
    },
    {
        question: "Build the formula for Sulfuric Acid",
        answer: ["H", "H", "S", "O", "O", "O", "O"],
        explanation: "Sulfuric acid is H₂SO₄ - strong acid used in batteries and industry.",
        points: 300
    },
    {
        question: "What is the formula for Ammonia?",
        answer: ["N", "H", "H", "H"],
        explanation: "Ammonia is NH₃ - common cleaner and important nitrogen compound.",
        points: 180
    },
    {
        question: "Build the formula for Calcium Carbonate (chalk)",
        answer: ["Ca", "C", "O", "O", "O"],
        explanation: "Calcium carbonate is CaCO₃ - found in limestone, shells, and antacids.",
        points: 250
    },
    {
        question: "What is the formula for Glucose (sugar)",
        answer: ["C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "O", "O", "O", "O", "O", "O"],
        explanation: "Glucose is C₆H₁₂O₆ - essential sugar for cellular respiration.",
        points: 500
    }
];

// ========== METRIC CONVERSION QUESTIONS ==========
const METRIC_QUESTIONS = [
    {
        question: "Convert 1 meter to centimeters",
        answer: ["1", "m", "=", "100", "cm"],
        explanation: "1 meter = 100 centimeters (1 m × 100 = 100 cm)",
        points: 100
    },
    {
        question: "Convert 2 kilometers to meters",
        answer: ["2", "km", "=", "2000", "m"],
        explanation: "2 kilometers = 2000 meters (2 km × 1000 = 2000 m)",
        points: 120
    },
    {
        question: "Convert 500 grams to kilograms",
        answer: ["500", "g", "=", "0.5", "kg"],
        explanation: "500 grams = 0.5 kilograms (500 g ÷ 1000 = 0.5 kg)",
        points: 150
    },
    {
        question: "Convert 3 liters to milliliters",
        answer: ["3", "L", "=", "3000", "mL"],
        explanation: "3 liters = 3000 milliliters (3 L × 1000 = 3000 mL)",
        points: 140
    },
    {
        question: "Convert 0.75 kilograms to grams",
        answer: ["0.75", "kg", "=", "750", "g"],
        explanation: "0.75 kilograms = 750 grams (0.75 kg × 1000 = 750 g)",
        points: 160
    },
    {
        question: "Convert 2500 meters to kilometers",
        answer: ["2500", "m", "=", "2.5", "km"],
        explanation: "2500 meters = 2.5 kilometers (2500 m ÷ 1000 = 2.5 km)",
        points: 180
    },
    {
        question: "Convert 150 centimeters to meters",
        answer: ["150", "cm", "=", "1.5", "m"],
        explanation: "150 centimeters = 1.5 meters (150 cm ÷ 100 = 1.5 m)",
        points: 130
    },
    {
        question: "Convert 4.2 kilograms to grams",
        answer: ["4.2", "kg", "=", "4200", "g"],
        explanation: "4.2 kilograms = 4200 grams (4.2 kg × 1000 = 4200 g)",
        points: 200
    }
];

// ========== QUIZ QUESTIONS (Appear when losing a life) ==========
const CHEMISTRY_QUIZZES = [
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: 2,
        explanation: "Gold's symbol is Au (from Latin 'aurum')."
    },
    {
        question: "What is the atomic number of Hydrogen?",
        options: ["1", "2", "6", "8"],
        answer: 0,
        explanation: "Hydrogen has atomic number 1 - it's the first element."
    },
    {
        question: "What does CO₂ represent?",
        options: ["Carbon Monoxide", "Carbon Dioxide", "Calcium Oxide", "Copper Oxide"],
        answer: 1,
        explanation: "CO₂ is Carbon Dioxide, a greenhouse gas."
    },
    {
        question: "Which element is essential for life and found in all organic compounds?",
        options: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
        answer: 2,
        explanation: "Carbon is the backbone of all organic compounds."
    },
    {
        question: "What is the pH of pure water?",
        options: ["5", "6", "7", "8"],
        answer: 2,
        explanation: "Pure water has a neutral pH of 7."
    },
    {
        question: "Which of these is a noble gas?",
        options: ["Chlorine", "Neon", "Fluorine", "Oxygen"],
        answer: 1,
        explanation: "Neon is a noble gas, known for being chemically inert and stable."
    },
];

const METRIC_QUIZZES = [
    {
        question: "How many centimeters are in a meter?",
        options: ["10", "100", "1000", "10000"],
        answer: 1,
        explanation: "There are 100 centimeters in 1 meter."
    },
    {
        question: "What is the SI unit for mass?",
        options: ["Gram", "Kilogram", "Pound", "Liter"],
        answer: 1,
        explanation: "The kilogram (kg) is the SI base unit for mass."
    },
    {
        question: "How many milliliters are in a liter?",
        options: ["10", "100", "1000", "10000"],
        answer: 2,
        explanation: "There are 1000 milliliters in 1 liter."
    },
    {
        question: "What does 'kilo' prefix mean?",
        options: ["One hundred", "One thousand", "One million", "One tenth"],
        answer: 1,
        explanation: "Kilo means 1000 (e.g., kilogram = 1000 grams)."
    },
    {
        question: "Which unit would you use to measure the length of a room?",
        options: ["Millimeters", "Centimeters", "Meters", "Kilometers"],
        answer: 2,
        explanation: "Meters are used for room dimensions."
    },
    {
        question: "How many grams are in 2.5 kilograms?",
        options: ["25", "250", "2500", "25000"],
        answer: 2,
        explanation: "Since 1 kg = 1000 g, 2.5 kg is 2500 grams."
    },
];

// ========== GAME VARIABLES ==========
let currentMode = 'chemistry';
let score = 0;
let level = 1;
let lives = 3;
let correctAnswers = 0;
let currentQuestionIndex = 0;
let selectedTiles = [];
let currentQuestion = {};
let questions = [];
let timer = 45;
let timerInterval;
let totalTimePlayed = 0;
let gameStarted = false;
let waitingForQuizAnswer = false;

// ========== DOM ELEMENTS ==========
const homeScreen = document.getElementById('home-screen');
const gameContainer = document.getElementById('game-container');
const gameGrid = document.getElementById('game-grid');
const modeText = document.getElementById('mode-text');
const modeIndicator = document.getElementById('mode-indicator');
const questionText = document.getElementById('question-text');
const timeWarning = document.getElementById('time-warning');
const timeRemaining = document.getElementById('time-remaining');
const selectedAnswer = document.getElementById('selected-answer');
const feedbackPanel = document.getElementById('feedback-panel');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackContent = document.getElementById('feedback-content');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const gameOverModal = document.getElementById('game-over');
const quizModal = document.getElementById('quiz-modal');
const quizTopic = document.getElementById('quiz-topic');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const submitQuizBtn = document.getElementById('submit-quiz');
const timerDisplay = document.getElementById('timer-display');
const timerProgress = document.getElementById('timer-progress');
const livesCount = document.getElementById('lives-count');
const hintBtn = document.getElementById('hint-btn');

// ========== GAME INITIALIZATION ==========
function startGame(mode) {
    currentMode = mode;
    questions = mode === 'chemistry' ? CHEMISTRY_QUESTIONS : METRIC_QUESTIONS;
    
    // Update UI
    if (mode === 'chemistry') {
        modeText.textContent = 'Chemistry Mode';
        modeIndicator.innerHTML = '<i class="fas fa-flask"></i> Chemistry Mode';
    } else {
        modeText.textContent = 'Metric Mode';
        modeIndicator.innerHTML = '<i class="fas fa-ruler"></i> Metric Mode';
    }
    
    // Switch screens
    homeScreen.style.display = 'none';
    gameContainer.style.display = 'block';
    
    // Initialize game
    initGame();
}

function goHome() {
    stopTimer();
    gameContainer.style.display = 'none';
    homeScreen.style.display = 'flex';
    quizModal.style.display = 'none';
    waitingForQuizAnswer = false;
}

function initGame() {
    // Reset game state
    score = 0;
    level = 1;
    lives = 3;
    correctAnswers = 0;
    currentQuestionIndex = 0;
    selectedTiles = [];
    totalTimePlayed = 0;
    gameStarted = false;
    waitingForQuizAnswer = false;
    
    // Update displays
    updateStats();
    updateLivesDisplay();
    updateProgress();
    
    // Load first question
    loadQuestion();
    
    // Generate game grid
    generateGrid();
    
    // Hide feedback and modals
    feedbackPanel.style.display = 'none';
    gameOverModal.style.display = 'none';
    quizModal.style.display = 'none';
    
    // Reset hint button
    hintBtn.disabled = false;
    hintBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Hint (-50)';
}

function updateStats() {
    document.getElementById('score').textContent = score;
    document.getElementById('level').textContent = level;
    livesCount.textContent = lives;
}

function updateLivesDisplay() {
    const livesContainer = document.getElementById('lives-display');
    livesContainer.innerHTML = '';
    
    for (let i = 0; i < 3; i++) {
        const life = document.createElement('div');
        life.className = 'life';
        if (i < lives) {
            life.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            life.classList.add('lost');
            life.innerHTML = '<i class="fas fa-heart-broken"></i>';
        }
        livesContainer.appendChild(life);
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

// ========== TIMER SYSTEM ==========
function startTimer() {
    timer = 45;
    updateTimerDisplay();
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timer--;
        totalTimePlayed++;
        updateTimerDisplay();
        
        if (timer <= 0) {
            timeUp();
        }
        
        // Warning when time is low
        if (timer <= 10) {
            timeWarning.style.color = '#ff5252';
            timeWarning.innerHTML = `⏰ Hurry! <span id="time-remaining" style="color:#ff5252">${timer}</span> seconds left!`;
        } else if (timer <= 20) {
            timeWarning.style.color = '#ffdd59';
            timeWarning.innerHTML = `⏰ Time running out: <span id="time-remaining" style="color:#ffdd59">${timer}</span> seconds`;
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.textContent = timer;
    timerProgress.style.width = `${(timer / 45) * 100}%`;
    timeRemaining.textContent = timer;
}

function stopTimer() {
    clearInterval(timerInterval);
}

function timeUp() {
    stopTimer();
    
    // Time's up - show quiz instead of immediately losing life
    showQuizForLife();
}

// ========== QUESTION SYSTEM ==========
function loadQuestion() {
    currentQuestion = questions[currentQuestionIndex];
    
    // Update question display
    questionText.textContent = currentQuestion.question;
    
    // Reset time warning
    timeWarning.style.color = '#ffdd59';
    timeWarning.innerHTML = `⏰ Time remaining: <span id="time-remaining">45</span> seconds`;
    
    // Clear previous selection
    clearSelection();
    
    // Hide feedback
    feedbackPanel.style.display = 'none';
    
    // Update progress
    updateProgress();
    
    // Start timer if game has started
    if (gameStarted) {
        startTimer();
    } else {
        gameStarted = true;
        startTimer();
    }
    
    // Reset hint button
    hintBtn.disabled = false;
    hintBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Hint (-50)';
}

// ========== GRID GENERATION ==========
function generateGrid() {
    gameGrid.innerHTML = '';
    
    // Get all possible answers for current mode
    const allAnswers = [];
    questions.forEach(q => {
        allAnswers.push(...q.answer);
    });
    
    // Create unique set of possible tiles
    const uniqueTiles = [...new Set(allAnswers)];
    
    // Create 6x6 grid (36 tiles)
    const totalTiles = 36;
    const answerTiles = [...currentQuestion.answer];
    
    for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.dataset.index = i;
        
        let value;
        
        // Ensure all answer tiles are in the grid
        if (i < answerTiles.length) {
            value = answerTiles[i];
        } else {
            // Randomly select from unique tiles or add random ones
            if (Math.random() < 0.7) {
                value = uniqueTiles[Math.floor(Math.random() * uniqueTiles.length)];
            } else {
                const randomTiles = currentMode === 'chemistry' 
                    ? ['He', 'Li', 'Be', 'B', 'F', 'Ne', 'Mg', 'Al', 'Si', 'P', 'K', 'Ar']
                    : ['mm', 'km', 'g', 'kg', 'mg', 'L', 'mL', '0.1', '0.01', '10', '100', '1000'];
                value = randomTiles[Math.floor(Math.random() * randomTiles.length)];
            }
        }
        
        tile.dataset.value = value;
        
        // Add appropriate class based on value type
        if (value === '=') {
            tile.classList.add('equals');
        } else if (['m', 'cm', 'km', 'mm', 'g', 'kg', 'mg', 'L', 'mL'].includes(value)) {
            tile.classList.add('unit');
        } else if (['1', '2', '3', '4', '5', '10', '100', '1000', '0.1', '0.01', '0.5', '0.75', '2.5', '4.2'].includes(value)) {
            tile.classList.add('value');
        } else if (['k', 'c', 'm', 'd'].includes(value)) {
            tile.classList.add('prefix');
        }
        
        // Create tile content
        const symbol = document.createElement('div');
        symbol.className = 'tile-symbol';
        symbol.textContent = value;
        
        const name = document.createElement('div');
        name.className = 'tile-name';
        name.textContent = getTileName(value);
        
        tile.appendChild(symbol);
        tile.appendChild(name);
        
        // Add atomic number for chemical elements
        if (currentMode === 'chemistry' && isElement(value)) {
            const atomic = document.createElement('div');
            atomic.className = 'tile-atomic';
            atomic.textContent = getAtomicNumber(value);
            tile.appendChild(atomic);
        }
        
        // Add click event
        tile.addEventListener('click', () => selectTile(tile));
        
        gameGrid.appendChild(tile);
    }
    
    // Shuffle the tiles
    shuffleGrid();
}

function shuffleGrid() {
    const tiles = Array.from(gameGrid.children);
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        gameGrid.appendChild(tiles[j]);
    }
}

function getTileName(value) {
    const chemistryNames = {
        'H': 'Hydrogen', 'C': 'Carbon', 'O': 'Oxygen', 'N': 'Nitrogen',
        'Na': 'Sodium', 'Cl': 'Chlorine', 'S': 'Sulfur', 'Ca': 'Calcium',
        'He': 'Helium', 'Li': 'Lithium', 'Be': 'Beryllium', 'B': 'Boron',
        'F': 'Fluorine', 'Ne': 'Neon', 'Mg': 'Magnesium', 'Al': 'Aluminum',
        'Si': 'Silicon', 'P': 'Phosphorus', 'K': 'Potassium', 'Ar': 'Argon'
    };
    
    const metricNames = {
        'm': 'Meter', 'cm': 'Centimeter', 'km': 'Kilometer', 'mm': 'Millimeter',
        'g': 'Gram', 'kg': 'Kilogram', 'mg': 'Milligram', 'L': 'Liter', 'mL': 'Milliliter',
        '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five',
        '10': 'Ten', '100': 'Hundred', '1000': 'Thousand',
        '0.1': 'Tenth', '0.01': 'Hundredth', '0.5': 'Half', '0.75': 'Three Quarters',
        '2.5': 'Two Point Five', '4.2': 'Four Point Two',
        '=': 'Equals', 'k': 'Kilo', 'c': 'Centi', 'd': 'Deci'
    };
    
    if (currentMode === 'chemistry') {
        return chemistryNames[value] || 'Element';
    } else {
        return metricNames[value] || value;
    }
}

function isElement(value) {
    const elements = ['H', 'C', 'O', 'N', 'Na', 'Cl', 'S', 'Ca', 'He', 'Li', 'Be', 'B', 'F', 'Ne', 'Mg', 'Al', 'Si', 'P', 'K', 'Ar'];
    return elements.includes(value);
}

function getAtomicNumber(element) {
    const atomicNumbers = {
        'H': 1, 'He': 2, 'Li': 3, 'Be': 4, 'B': 5, 'C': 6, 'N': 7, 'O': 8,
        'F': 9, 'Ne': 10, 'Na': 11, 'Mg': 12, 'Al': 13, 'Si': 14, 'P': 15,
        'S': 16, 'Cl': 17, 'Ar': 18, 'K': 19, 'Ca': 20
    };
    return atomicNumbers[element] || '';
}

// ========== TILE SELECTION ==========
function selectTile(tile) {
    if (waitingForQuizAnswer) return;
    
    const value = tile.dataset.value;
    
    if (tile.classList.contains('selected')) {
        // Deselect
        tile.classList.remove('selected');
        selectedTiles = selectedTiles.filter((item, index) => {
            if (item.value === value && item.index === tile.dataset.index) {
                return false;
            }
            return true;
        });
    } else {
        // Select
        tile.classList.add('selected');
        selectedTiles.push({
            value: value,
            index: tile.dataset.index
        });
    }
    
    updateSelectedAnswerDisplay();
}

function updateSelectedAnswerDisplay() {
    selectedAnswer.innerHTML = '';
    
    if (selectedTiles.length === 0) {
        selectedAnswer.innerHTML = '<div class="placeholder-text">Select tiles to build your answer...</div>';
        return;
    }
    
    selectedTiles.forEach(tile => {
        const tileDiv = document.createElement('div');
        tileDiv.className = 'selected-tile';
        tileDiv.textContent = tile.value;
        selectedAnswer.appendChild(tileDiv);
    });
}

function clearSelection() {
    // Clear all selected tiles
    document.querySelectorAll('.tile.selected').forEach(tile => {
        tile.classList.remove('selected');
    });
    
    selectedTiles = [];
    updateSelectedAnswerDisplay();
    
    // Reset tile colors
    document.querySelectorAll('.tile.correct, .tile.incorrect').forEach(tile => {
        tile.classList.remove('correct', 'incorrect');
    });
}

// ========== HINT SYSTEM ==========
function buyHint() {
    if (score < 50) {
        showNotification("You need at least 50 points to buy a hint!", "error");
        return;
    }
    
    // Deduct points
    score -= 50;
    updateStats();
    
    // Disable hint button
    hintBtn.disabled = true;
    hintBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Hint Used';
    
    // Show hint by highlighting correct tiles
    const correctAnswer = currentQuestion.answer;
    let hintCount = Math.min(2, correctAnswer.length); // Show up to 2 hints
    
    // Find and highlight correct tiles
    const tiles = document.querySelectorAll('.tile');
    let hintsShown = 0;
    
    for (const tile of tiles) {
        if (hintsShown >= hintCount) break;
        
        const value = tile.dataset.value;
        if (correctAnswer.includes(value) && !tile.classList.contains('selected')) {
            // Flash the tile
            tile.style.boxShadow = '0 0 20px #ffdd59';
            tile.style.transform = 'scale(1.1)';
            
            // Remove highlight after 2 seconds
            setTimeout(() => {
                tile.style.boxShadow = '';
                tile.style.transform = '';
            }, 2000);
            
            hintsShown++;
        }
    }
    
    showNotification("💡 Hint: Correct tiles are highlighted!", "info");
}

// ========== ANSWER SUBMISSION ==========
function submitAnswer() {
    if (waitingForQuizAnswer) return;
    if (selectedTiles.length === 0) {
        showNotification("Please select some tiles first!", "error");
        return;
    }
    
    stopTimer();
    
    // Get selected values
    const selectedValues = selectedTiles.map(tile => tile.value);
    const correctAnswer = [...currentQuestion.answer];
    
    // Check if answers match (order doesn't matter)
    const isCorrect = arraysEqual(selectedValues.sort(), correctAnswer.sort());
    
    // Visual feedback on tiles
    document.querySelectorAll('.tile').forEach(tile => {
        const value = tile.dataset.value;
        if (selectedTiles.some(t => t.index === tile.dataset.index)) {
            tile.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    });
    
    if (isCorrect) {
        // Correct answer
        const basePoints = currentQuestion.points;
        const timeBonus = Math.floor(timer * 2); // 2 points per second remaining
        const totalPoints = (basePoints + timeBonus) * level;
        
        score += totalPoints;
        correctAnswers++;
        
        showFeedback(
            `✅ Correct! ${currentQuestion.explanation}<br><br>` +
            `Points: ${basePoints} × Level ${level} = ${basePoints * level}<br>` +
            `Time Bonus: +${timeBonus}<br>` +
            `Total: +${totalPoints} points`,
            true
        );
        
        // Level up every 3 correct answers
        if (correctAnswers % 3 === 0) {
            level++;
            showNotification(`🎉 Level Up! You're now Level ${level}. Points multiplier increased!`, "success");
        }
        
        showNotification(`✅ Correct! +${totalPoints} points`, "success");
        
        // Move to next question after delay
        setTimeout(() => {
            nextQuestion();
        }, 3000);
    } else {
        // Incorrect answer - show quiz instead of immediately losing life
        showFeedback(
            `❌ Incorrect. The correct answer is: ${formatAnswer(correctAnswer)}<br><br>${currentQuestion.explanation}`,
            false
        );
        
        // Show correct answer on grid
        highlightCorrectAnswer(correctAnswer);
        
        // Show quiz to potentially save life
        setTimeout(() => {
            showQuizForLife();
        }, 2000);
    }
    
    // Update stats
    updateStats();
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    const sorted1 = [...arr1].sort();
    const sorted2 = [...arr2].sort();
    
    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i] !== sorted2[i]) return false;
    }
    return true;
}

function formatAnswer(answerArray) {
    if (currentMode === 'chemistry') {
        // Group identical elements for chemistry
        const counts = {};
        answerArray.forEach(item => {
            counts[item] = (counts[item] || 0) + 1;
        });
        
        let formula = '';
        for (const [element, count] of Object.entries(counts)) {
            if (count === 1) {
                formula += element;
            } else {
                // Convert number to subscript
                const subscript = count.toString().split('').map(d => 
                    ['₀','₁','₂','₃','₄','₅','₆','₇','₈','₉'][parseInt(d)]
                ).join('');
                formula += element + subscript;
            }
        }
        return formula;
    } else {
        // Metric conversions
        return answerArray.join(' ');
    }
}

function highlightCorrectAnswer(correctAnswer) {
    // Create a copy to track which correct values we've highlighted
    const remainingAnswer = [...correctAnswer];
    
    document.querySelectorAll('.tile').forEach(tile => {
        const value = tile.dataset.value;
        const index = remainingAnswer.indexOf(value);
        
        if (index !== -1) {
            tile.classList.add('correct');
            remainingAnswer.splice(index, 1);
        }
    });
}

function showFeedback(message, isCorrect) {
    feedbackPanel.style.display = 'block';
    feedbackTitle.textContent = isCorrect ? 'Correct!' : 'Incorrect';
    feedbackContent.innerHTML = message;
    feedbackContent.className = `feedback-content ${isCorrect ? 'correct' : 'incorrect'}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= questions.length) {
        // Game complete
        showGameComplete();
    } else {
        // Load next question
        loadQuestion();
        generateGrid();
    }
}

// ========== QUIZ SYSTEM (When losing a life) ==========
function showQuizForLife() {
    waitingForQuizAnswer = true;
    stopTimer();
    
    // Select appropriate quiz
    const quizzes = currentMode === 'chemistry' ? CHEMISTRY_QUIZZES : METRIC_QUIZZES;
    const quiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    
    // Update quiz UI
    quizTopic.textContent = currentMode === 'chemistry' ? 'Chemistry Quiz' : 'Metric Quiz';
    quizQuestion.textContent = quiz.question;
    
    // Clear and add options
    quizOptions.innerHTML = '';
    
    quiz.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionDiv.dataset.index = index;
        
        optionDiv.addEventListener('click', function() {
            // Remove selection from all options
            document.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            // Select this option
            this.classList.add('selected');
        });
        
        quizOptions.appendChild(optionDiv);
    });
    
    // Update submit button
    submitQuizBtn.onclick = function() {
        submitQuizAnswer(quiz);
    };
    
    // Show quiz modal
    quizModal.style.display = 'flex';
}

function submitQuizAnswer(quiz) {
    const selectedOption = document.querySelector('.quiz-option.selected');
    
    if (!selectedOption) {
        showNotification("Please select an answer!", "error");
        return;
    }
    
    const selectedIndex = parseInt(selectedOption.dataset.index);
    
    if (selectedIndex === quiz.answer) {
        // Correct quiz answer - don't lose a life
        quizModal.style.display = 'none';
        waitingForQuizAnswer = false;
        
        showNotification("✅ Quiz correct! You keep your life. +100 points", "success");
        score += 100;
        updateStats();
        
        // Move to next question
        setTimeout(() => {
            nextQuestion();
        }, 1500);
    } else {
        // Wrong quiz answer - lose a life
        quizModal.style.display = 'none';
        waitingForQuizAnswer = false;
        
        lives--;
        updateStats();
        updateLivesDisplay();
        
        showNotification("❌ Quiz failed! You lost a life.", "error");
        
        // Check if game over
        if (lives <= 0) {
            setTimeout(() => {
                gameOver();
            }, 2000);
        } else {
            // Continue with remaining lives
            setTimeout(() => {
                nextQuestion();
            }, 2000);
        }
    }
}

// ========== GAME OVER ==========
function showGameComplete() {
    stopTimer();
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-correct').textContent = correctAnswers;
    document.getElementById('final-level').textContent = level;
    document.getElementById('final-time').textContent = `${totalTimePlayed}s`;
    gameOverModal.style.display = 'flex';
}

function gameOver() {
    stopTimer();
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-correct').textContent = correctAnswers;
    document.getElementById('final-level').textContent = level;
    document.getElementById('final-time').textContent = `${totalTimePlayed}s`;
    gameOverModal.style.display = 'flex';
}

function restartGame() {
    gameOverModal.style.display = 'none';
    quizModal.style.display = 'none';
    waitingForQuizAnswer = false;
    initGame();
}


// ========== HELPER FUNCTIONS ==========
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.background = type === 'success' 
        ? 'linear-gradient(to right, #0be881, #05c46b)'
        : type === 'error'
        ? 'linear-gradient(to right, #ff7979, #ff5252)'
        : 'linear-gradient(to right, #4bcffa, #0fbcf9)';
    
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '12px';
    notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    notification.style.zIndex = '1002';
    notification.style.fontWeight = 'bold';
    notification.style.maxWidth = '300px';
    notification.style.animation = 'slideIn 0.3s ease';
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add slideOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ========== INITIALIZE ==========
window.addEventListener('DOMContentLoaded', () => {
    console.log('ConverTech - Chemistry & Metric Conversion Game Loaded');
});