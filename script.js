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

const primeImage = document.getElementById("prime-image");
const afficheImage = document.getElementById("affiche-image");
const afficheText = document.getElementById("affiche-text");

if (!primeImage || !afficheImage || !afficheText) {
  console.warn("Les éléments requis ne sont pas trouvés.");
  // On arrête le script si les éléments manquent
  throw new Error("Elements manquants");
}

let hasTyped = false;
let typingInterval = null;

function toggleImages() {
  const isPrimeVisible = primeImage.style.display !== "none";

  // Toggle display images
  primeImage.style.display = isPrimeVisible ? "none" : "block";
  afficheImage.style.display = isPrimeVisible ? "block" : "none";

  // Toggle display text
  afficheText.style.display = isPrimeVisible ? "block" : "none";

  if (isPrimeVisible && !hasTyped) {
    hasTyped = true;
    typeWriterEffect(
      "Amine El Mir, le légendaire codeur des mers numériques. Sa prime augmente à chaque ligne de code déployée.” ",
      afficheText 
    );
  }

  if (!isPrimeVisible) {
    // Reset typing
    clearInterval(typingInterval);
    afficheText.innerText = "";
    hasTyped = false;
  }
}

function typeWriterEffect(text, element, speed = 50) {
  if (!element) return;

  let i = 0;
  let displayedText = "";

  const interval = setInterval(() => {
    if (i < text.length) {
      displayedText += text[i];  // ajoute le caractère normal
      element.innerText = displayedText;  // met à jour tout le texte à chaque fois
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}


primeImage.addEventListener("click", toggleImages);
afficheImage.addEventListener("click", toggleImages);
});