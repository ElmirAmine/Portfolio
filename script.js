document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
  });



  projects.forEach((proj) => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>`;
    projectList.appendChild(div);
  });
});
