const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  count++;
  attendeeCount.textContent = count;

  const percentage = Math.round((count / maxCount) * 100);
  progressBar.style.width = `${percentage}%`;

  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent, 10) + 1;

  greeting.textContent = `🎉 Welcome, ${name}! You checked in for ${teamName}.`;
  greeting.classList.add("success-message");
  greeting.style.display = "block";

  form.reset();
});
