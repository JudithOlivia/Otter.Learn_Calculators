function calculateAPUSH() {
  // Grab values
  let mcq = parseInt(document.getElementById("mcq").value) || 0;
  let saq1 = parseInt(document.getElementById("saq1").value) || 0;
  let saq2 = parseInt(document.getElementById("saq2").value) || 0;
  let saq3 = parseInt(document.getElementById("saq3").value) || 0;
  let dbq = parseInt(document.getElementById("dbq").value) || 0;
  let leq = parseInt(document.getElementById("leq").value) || 0;

  // Convert to composite score
  let mcqComp = (mcq / 55) * 52;
  let saqComp = ((saq1 + saq2 + saq3) / 9) * 27; // 9 each = 27 total
  let dbqComp = (dbq / 7) * 33;
  let leqComp = (leq / 6) * 20;

  let total = Math.round(mcqComp + saqComp + dbqComp + leqComp);

  // Determine AP score
  let apScore = 1;
  if (total >= 97) apScore = 5;
  else if (total >= 80) apScore = 4;
  else if (total >= 63) apScore = 3;
  else if (total >= 44) apScore = 2;

  // Display results
  document.getElementById("composite").innerText = total;
  document.getElementById("ap-score").innerText = apScore;
}
