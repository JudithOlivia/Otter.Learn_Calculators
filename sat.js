// SAT Calculator
class SATCalculator {
    constructor() {
        this.rawToScaled = {
            reading: this.createReadingConversion(),
            writing: this.createWritingConversion(),
            math: this.createMathConversion()
        };
    }

    createReadingConversion() {
        const conversion = {};
        for (let i = 0; i <= 52; i++) {
            if (i >= 0 && i <= 5) conversion[i] = 10;
            else if (i >= 6 && i <= 7) conversion[i] = 10 + (i - 5) * 2;
            else if (i >= 8 && i <= 11) conversion[i] = 15 + (i - 8);
            else if (i >= 12 && i <= 15) conversion[i] = 19 + (i - 12);
            else if (i >= 16 && i <= 18) conversion[i] = 23 + (i - 16);
            else if (i >= 19 && i <= 22) conversion[i] = 26 + (i - 19);
            else if (i >= 23 && i <= 25) conversion[i] = 30 + (i - 23);
            else if (i >= 26 && i <= 29) conversion[i] = 33 + (i - 26);
            else if (i >= 30 && i <= 32) conversion[i] = 37 + (i - 30);
            else if (i >= 33 && i <= 35) conversion[i] = 40 + (i - 33);
            else if (i >= 36 && i <= 37) conversion[i] = 43 + (i - 36) * 2;
            else if (i >= 38 && i <= 40) conversion[i] = 47 + (i - 38);
            else conversion[i] = 40; // Default
        }
        return conversion;
    }

    createWritingConversion() {
        const conversion = {};
        for (let i = 0; i <= 44; i++) {
            if (i >= 0 && i <= 5) conversion[i] = 10;
            else if (i >= 6 && i <= 7) conversion[i] = 10 + (i - 5) * 2;
            else if (i >= 8 && i <= 9) conversion[i] = 15 + (i - 8);
            else if (i >= 10 && i <= 12) conversion[i] = 17 + (i - 10);
            else if (i >= 13 && i <= 15) conversion[i] = 20 + (i - 13);
            else if (i >= 16 && i <= 18) conversion[i] = 23 + (i - 16);
            else if (i >= 19 && i <= 21) conversion[i] = 26 + (i - 19);
            else if (i >= 22 && i <= 24) conversion[i] = 29 + (i - 22);
            else if (i >= 25 && i <= 27) conversion[i] = 32 + (i - 25);
            else if (i >= 28 && i <= 30) conversion[i] = 35 + (i - 28);
            else if (i >= 31 && i <= 33) conversion[i] = 38 + (i - 31);
            else if (i >= 34 && i <= 35) conversion[i] = 41 + (i - 34) * 2;
            else if (i >= 36 && i <= 38) conversion[i] = 45 + (i - 36);
            else conversion[i] = 40; // Default
        }
        return conversion;
    }

    createMathConversion() {
        const conversion = {};
        for (let i = 0; i <= 58; i++) {
            if (i >= 0 && i <= 1) conversion[i] = 200;
            else if (i >= 2 && i <= 3) conversion[i] = 210 + (i - 2) * 10;
            else if (i >= 4 && i <= 5) conversion[i] = 230 + (i - 4) * 10;
            else if (i >= 6 && i <= 7) conversion[i] = 260 + (i - 6) * 20;
            else if (i >= 8 && i <= 9) conversion[i] = 300 + (i - 8) * 10;
            else if (i >= 10 && i <= 11) conversion[i] = 320 + (i - 10) * 10;
            else if (i >= 12 && i <= 13) conversion[i] = 340 + (i - 12) * 10;
            else if (i >= 14 && i <= 15) conversion[i] = 360 + (i - 14) * 10;
            else if (i >= 16 && i <= 17) conversion[i] = 380 + (i - 16) * 10;
            else if (i >= 18 && i <= 19) conversion[i] = 410 + (i - 18) * 20;
            else if (i >= 20 && i <= 21) conversion[i] = 450 + (i - 20) * 10;
            else if (i >= 22 && i <= 23) conversion[i] = 470 + (i - 22) * 10;
            else if (i >= 24 && i <= 25) conversion[i] = 490 + (i - 24) * 10;
            else if (i >= 26 && i <= 27) conversion[i] = 510 + (i - 26) * 10;
            else if (i >= 28 && i <= 29) conversion[i] = 530 + (i - 28) * 10;
            else if (i >= 30 && i <= 31) conversion[i] = 550 + (i - 30) * 10;
            else if (i >= 32 && i <= 33) conversion[i] = 570 + (i - 32) * 10;
            else if (i >= 34 && i <= 35) conversion[i] = 590 + (i - 34) * 10;
            else if (i >= 36 && i <= 37) conversion[i] = 610 + (i - 36) * 10;
            else if (i >= 38 && i <= 39) conversion[i] = 630 + (i - 38) * 10;
            else if (i >= 40 && i <= 41) conversion[i] = 650 + (i - 40) * 10;
            else if (i >= 42 && i <= 43) conversion[i] = 670 + (i - 42) * 10;
            else if (i >= 44 && i <= 45) conversion[i] = 690 + (i - 44) * 10;
            else if (i >= 46 && i <= 47) conversion[i] = 710 + (i - 46) * 10;
            else if (i >= 48 && i <= 49) conversion[i] = 730 + (i - 48) * 10;
            else if (i >= 50 && i <= 51) conversion[i] = 750 + (i - 50) * 10;
            else if (i >= 52 && i <= 53) conversion[i] = 770 + (i - 52) * 10;
            else conversion[i] = 800; // Perfect score
        }
        return conversion;
    }

    calculateScore(readingCorrect, writingCorrect, mathCorrect) {
        // Convert raw scores to scaled scores
        const readingScaled = this.rawToScaled.reading[readingCorrect] || 10;
        const writingScaled = this.rawToScaled.writing[writingCorrect] || 10;
        const mathScaled = this.rawToScaled.math[mathCorrect] || 200;

        // Calculate Reading and Writing score
        const ebrwScore = (readingScaled + writingScaled) * 10;

        // Calculate total score
        const totalScore = ebrwScore + mathScaled;

        return {
            reading: readingScaled,
            writing: writingScaled,
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

    // Calculate raw scores (correct answers minus 1/4 point for wrong answers)
    const readingRaw = Math.max(0, readingCorrect - (readingWrong * 0.25));
    const writingRaw = Math.max(0, writingCorrect - (writingWrong * 0.25));
    const mathRaw = Math.max(0, mathCorrect - (mathWrong * 0.25));

    // Round raw scores to nearest whole number
    const readingRounded = Math.round(readingRaw);
    const writingRounded = Math.round(writingRaw);
    const mathRounded = Math.round(mathRaw);

    // Calculate final scores
    const scores = satCalculator.calculateScore(readingRounded, writingRounded, mathRounded);

    // Display results
    document.getElementById('reading-score').textContent = scores.reading;
    document.getElementById('writing-score').textContent = scores.writing;
    document.getElementById('ebrw-score').textContent = scores.ebrw;
    document.getElementById('math-score').textContent = scores.math;
    document.getElementById('total-score').textContent = scores.total;

    // Show results section
    document.getElementById('results').style.display = 'block';
}

function resetCalculator() {
    // Clear all inputs
    document.getElementById('reading-correct').value = '';
    document.getElementById('reading-wrong').value = '';
    document.getElementById('writing-correct').value = '';
    document.getElementById('writing-wrong').value = '';
    document.getElementById('math-correct').value = '';
    document.getElementById('math-wrong').value = '';

    // Hide results
    document.getElementById('results').style.display = 'none';
}

// Add event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate-btn').addEventListener('click', calculateSATScore);
    document.getElementById('reset-btn').addEventListener('click', resetCalculator);

})

function updateValue(id) {
  let slider = document.getElementById(id);
  let valueSpan = document.getElementById(id + "-value");
  valueSpan.textContent = slider.value;
};