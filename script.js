document.addEventListener("DOMContentLoaded", () => {
  // 🌙/☀️ Thème et 🔊/🔇 Volume
  const themeToggle = document.getElementById("theme-toggle");
  const volumeToggle = document.getElementById("volume-toggle");
  const body = document.body;
  const bgMusic = document.getElementById("bgMusic");
  const projectList = document.getElementById("project-list");
  const projects = [];

  // 🎨 Toggle thème clair/sombre
  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // 🔊 Musique
  if (bgMusic) {
    bgMusic.volume = 0.2;
    bgMusic.loop = true;
  }

  let isMuted = true;
  volumeToggle?.addEventListener("click", async () => {
    if (!bgMusic) return;
    isMuted = !isMuted;
    bgMusic.muted = isMuted;
    if (!isMuted && bgMusic.paused) {
      try {
        await bgMusic.play();
      } catch {
        console.warn("Lecture automatique bloquée.");
      }
    }
    volumeToggle.textContent = isMuted ? "🔇" : "🔊";
  });

  // 📦 Ajout dynamique des projets (optionnel)
  if (projectList && projects.length > 0) {
    projects.forEach(proj => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>`;
      projectList.appendChild(div);
    });
  }

  // 🖼️ Toggle entre les deux images (prime et affiche)
  const primeImage = document.getElementById("prime-image");
  const afficheImage = document.getElementById("affiche-image");

  if (!primeImage || !afficheImage) {
    console.warn("Les images ne sont pas trouvées.");
    return;
  }

  function toggleImages() {
    const isPrimeVisible = primeImage.style.display !== "none";
    primeImage.style.display = isPrimeVisible ? "none" : "block";
    afficheImage.style.display = isPrimeVisible ? "block" : "none";
  }

  primeImage.addEventListener("click", toggleImages);
  afficheImage.addEventListener("click", toggleImages);
});
