// Letter grade to GPA map
const gradeMap = {
  "A+": 4.0, "A": 4.0, "A-": 3.7,
  "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0, "C-": 1.7,
  "D+": 1.3, "D": 1.0, "D-": 0.7,
  "F": 0.0
};

// Course level weight adjustments
const levelWeights = {
  "Regular": 0.0,
  "Honors": 0.5,
  "AP": 1.0,
  "IB": 1.0,
  "College": 1.0
};

// Switch tabs
function openTab(tabName) {
  let contents = document.querySelectorAll(".tabcontent");
  contents.forEach(c => c.classList.remove("active"));
  document.getElementById(tabName).classList.add("active");
}

// GPA Calculator
function addCourse() {
  const container = document.getElementById("courses");
  
  const div = document.createElement("div");
  div.className = "course";
  div.innerHTML = `
    <input type="text" placeholder="Subject" />
    <select class="grade">
      <option value="">Grade</option>
      <option>A+</option><option>A</option><option>A-</option>
      <option>B+</option><option>B</option><option>B-</option>
      <option>C+</option><option>C</option><option>C-</option>
      <option>D+</option><option>D</option><option>D-</option>
      <option>F</option>
    </select>
    <select class="level">
      <option value="Regular">Regular</option>
      <option value="Honors">Honors</option>
      <option value="AP">AP</option>
      <option value="IB">IB</option>
      <option value="College">College</option>
    </select>
    <button type="button" onclick="removeCourse(this)">X</button>
  `;
  
  container.appendChild(div);
}

function removeCourse(btn) {
  btn.parentElement.remove();
  calculateGPA();
}

document.getElementById("gpa-form").addEventListener("input", calculateGPA);

function calculateGPA() {
  const courses = document.querySelectorAll("#courses .course");
  let totalUnweighted = 0;
  let totalWeighted = 0;
  let count = 0;

  courses.forEach(course => {
    const grade = course.querySelector(".grade").value;
    const level = course.querySelector(".level").value;

    if (grade && gradeMap[grade] !== undefined) {
      let gpa = gradeMap[grade];
      totalUnweighted += gpa;
      totalWeighted += gpa + levelWeights[level]; // Weighted GPA bump
      count++;
    }
  });

  document.getElementById("unweighted").textContent = count ? (totalUnweighted / count).toFixed(2) : "0.00";
  document.getElementById("weighted").textContent = count ? (totalWeighted / count).toFixed(2) : "0.00";
}
