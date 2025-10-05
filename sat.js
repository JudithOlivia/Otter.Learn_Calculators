// SAT Calculator
class SATCalculator {
    constructor() {
        this.rawToScaled = {
            reading: this.createEnglishConversion(27),
            writing: this.createEnglishConversion(27),
            math: this.createMathConversion(22)
        };
    }

    // Generic conversion for Reading/Writing (0–27 range)
    createEnglishConversion(maxScore) {
        const conversion = {};
        for (let i = 0; i <= maxScore; i++) {
            if (i <= 5) conversion[i] = 10 + i;
            else if (i <= 10) conversion[i] = 16 + (i - 5);
            else if (i <= 15) conversion[i] = 21 + (i - 10);
            else if (i <= 20) conversion[i] = 26 + (i - 15);
            else conversion[i] = 31 + (i - 20);
        }
        return conversion;
    }

    // Math conversion (0–22 range)
    createMathConversion(maxScore) {
        const conversion = {};
        for (let i = 0; i <= maxScore; i++) {
            if (i <= 3) conversion[i] = 200 + i * 20;
            else if (i <= 7) conversion[i] = 280 + (i - 3) * 30;
            else if (i <= 12) conversion[i] = 400 + (i - 7) * 40;
            else if (i <= 17) conversion[i] = 600 + (i - 12) * 30;
            else conversion[i] = 750 + (i - 17) * 10;
        }
        return conversion;
    }

    calculateScore(readingCorrect, writingCorrect, mathCorrect) {
    // Clamp raw scores
    readingCorrect = Math.min(Math.max(readingCorrect, 0), 27);
    writingCorrect = Math.min(Math.max(writingCorrect, 0), 27);
    mathCorrect = Math.min(Math.max(mathCorrect, 0), 22);

    // Reading/Writing each scaled 0–400 (so combined = 200–800)
    const readingScaled = 200 + (readingCorrect / 27) * 300; // 200–500
    const writingScaled = 200 + (writingCorrect / 27) * 300; // 200–500

    // Average them and double to get EBRW out of 800
    const ebrwScore = Math.round(((readingScaled + writingScaled) / 2) * 2);

    // Math scaled 200–800
    const mathScaled = Math.round(200 + (mathCorrect / 22) * 600);

    // Total (400–1600)
    const totalScore = Math.min(ebrwScore + mathScaled, 1600);

    return {
        reading: Math.round(readingScaled),
        writing: Math.round(writingScaled),
        ebrw: ebrwScore,
        math: mathScaled,
        total: totalScore
    };
}

}

// Initialize calculator
const satCalculator = new SATCalculator();

// DOM handling functions
function calculateSATScore() {
    const readingCorrect = parseInt(document.getElementById('reading-correct').value) || 0;
    const readingWrong = parseInt(document.getElementById('reading-wrong').value) || 0;
    const writingCorrect = parseInt(document.getElementById('writing-correct').value) || 0;
    const writingWrong = parseInt(document.getElementById('writing-wrong').value) || 0;
    const mathCorrect = parseInt(document.getElementById('math-correct').value) || 0;
    const mathWrong = parseInt(document.getElementById('math-wrong').value) || 0;

    // Raw score calculation (no penalty)
    const readingRaw = Math.max(0, readingCorrect);
    const writingRaw = Math.max(0, writingCorrect);
    const mathRaw = Math.max(0, mathCorrect);

    const readingRounded = Math.min(27, Math.round(readingRaw));
    const writingRounded = Math.min(27, Math.round(writingRaw));
    const mathRounded = Math.min(22, Math.round(mathRaw));

    const scores = satCalculator.calculateScore(readingRounded, writingRounded, mathRounded);

    // Display results
    document.getElementById('reading-score').textContent = scores.reading;
    document.getElementById('writing-score').textContent = scores.writing;
    document.getElementById('ebrw-score').textContent = scores.ebrw;
    document.getElementById('math-score').textContent = scores.math;
    document.getElementById('total-score').textContent = scores.total;

    document.getElementById('results').style.display = 'block';
}

function resetCalculator() {
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById('results').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate-btn').addEventListener('click', calculateSATScore);
    document.getElementById('reset-btn').addEventListener('click', resetCalculator);
});

function updateValue(id) {
    let slider = document.getElementById(id);
    let valueSpan = document.getElementById(id + "-value");
    valueSpan.textContent = slider.value;
};

