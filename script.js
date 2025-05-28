document.addEventListener("DOMContentLoaded", () => { 
  const themeToggle = document.getElementById("theme-toggle");
  const volumeToggle = document.getElementById("volume-toggle");
  const body = document.body;
  const bgMusic = document.getElementById("bgMusic"); // <audio id="bgMusic">
  const projectList = document.getElementById("project-list"); // Adapter ou supprimer si inutilisé
  const projects = []; // À remplir si besoin

  // 🌙 Thème clair/sombre
  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // Initialisation musique
  if (bgMusic) {
    bgMusic.volume = 0.2;
    bgMusic.loop = true;
  }

  // 🔊 Bouton volume qui mute/démute et lance la musique au premier clic
  let isMuted = true;
  volumeToggle?.addEventListener("click", async () => {
    if (!bgMusic) return;
    isMuted = !isMuted;
    bgMusic.muted = isMuted;

    // Lance la musique si elle est en pause et qu'on vient de démuter
    if (!isMuted && bgMusic.paused) {
      try {
        await bgMusic.play();
      } catch {
        console.warn("Lecture automatique bloquée, besoin d'interaction utilisateur.");
      }
    }

    volumeToggle.textContent = isMuted ? "🔇" : "🔊";
  });

  // Ajout dynamique de projets (facultatif)
  if (projectList && projects.length > 0) {
    projects.forEach(proj => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>`;
      projectList.appendChild(div);
    });
  }
});
