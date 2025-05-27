document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
  });

  const projects = [
    {
      title: "Cafetière connectée (Arduino)",
      description: "Programmation via RTC, I2C, horloge, écran LCD.",
    },
    {
      title: "API Node.js sécurisée",
      description: "Connexion sécurisée avec token, base MongoDB, Docker.",
    },
    {
      title: "Site vitrine React",
      description: "Frontend moderne responsive avec React, GitHub Pages.",
    },
  ];

  const projectList = document.querySelector(".project-list");

  projects.forEach((proj) => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>`;
    projectList.appendChild(div);
  });
});
