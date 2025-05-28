document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const volumeToggle = document.getElementById("volume-toggle");
  const body = document.body;
  const bgMusic = document.getElementById("bgMusic"); // L'élément <audio id="bgMusic">
  const projectList = document.getElementById("project-list"); // À adapter si tu l'utilises
  const projects = []; // À remplir avec tes projets ou à supprimer si inutilisé

  // 🌙 Thème clair/sombre
  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // 🎵 Musique d'ambiance
  if (bgMusic) {
    bgMusic.volume = 0.2;
    bgMusic.loop = true;
    bgMusic.play().catch((err) => {
      console.warn("Lecture automatique bloquée par le navigateur.");
    });
  }

  // 🔊 Bouton volume
  let isMuted = false;
  volumeToggle?.addEventListener("click", () => {
    if (!bgMusic) return;
    isMuted = !isMuted;
    bgMusic.muted = isMuted;
    volumeToggle.textContent = isMuted ? "🔇" : "🔊";
  });

  // 🧱 Ajout dynamique de projets (facultatif)
  if (projectList && projects.length > 0) {
    projects.forEach((proj) => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>`;
      projectList.appendChild(div);
    });
  }
});
