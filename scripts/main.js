document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector("#hero-section");
    const videoContainer = heroSection.querySelector(".video-container");

    if (videoContainer) {
        // Créer la vidéo et la configurer
        const video = document.createElement("video");
        video.src = "assets/videos/header-background.mp4";
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;

        // Ajouter la vidéo dans le conteneur
        videoContainer.appendChild(video);
    } else {
        console.error("Le conteneur de la vidéo est introuvable");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const articlesGrid = document.querySelector(".articles-grid");

    if (articlesGrid) {
        articlesGrid.style.overflowX = "auto";
        articlesGrid.style.scrollSnapType = "x mandatory";
        articlesGrid.childNodes.forEach((child) => {
            if (child.nodeType === 1) {
                child.style.scrollSnapAlign = "start";
            }
        });
    }
});










