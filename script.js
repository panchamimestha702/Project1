function showPage(page) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(item) {
    item.classList.add("hidden");
  });

  document.getElementById(page).classList.remove("hidden");

  document.getElementById("pageTitle").innerText =
    page.charAt(0).toUpperCase() + page.slice(1);
}

function addJob() {
  const job = prompt("Enter job title:");
  if (job) {
    alert(job + " added successfully!");
  }
}

function addCandidate() {
  const name = prompt("Enter candidate name:");
  if (name) {
    alert(name + " added successfully!");
  }
}

function scheduleInterview() {
  const name = prompt("Enter candidate name:");
  if (name) {
    alert("Interview scheduled for " + name);
  }
}

function logout() {
  alert("Logged out successfully!");
}