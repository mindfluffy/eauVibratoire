import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    // Effet de parallaxe sur la vidéo dans le main
    gsap.to(".video-container video", {
        scrollTrigger: {
            trigger: ".video-container",
            start: "top center", // Début de l'animation lorsque la vidéo arrive au milieu de l'écran
            end: "bottom top",   // Fin de l'animation lorsque la vidéo atteint le haut de l'écran
            scrub: true,         // Synchronisation de l'animation avec le défilement
        },
        y: "-20%",                // Déplacement de la vidéo vers le haut
        ease: "none",             // Pas de courbe d'animation, effet linéaire
    });
});

// Animation d'apparition des sections lors du scroll
gsap.utils.toArray(".section-content").forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%", // L'animation commence quand la section est visible à 80% de l'écran
            end: "top 30%",   // Fin de l'animation lorsqu'on a scrollé à 30% du haut de la section
            scrub: 1,         // Douce transition synchronisée avec le défilement
        },
        opacity: 0,           // Apparition progressive
        y: 50,                // Déplacement du bas vers le haut pour une entrée subtile
        duration: 1.5,        // Durée de l'animation
        ease: "power2.out",   // Courbe d'animation douce
    });
});

// Animation au survol des boutons CTA
const buttons = document.querySelectorAll(".cta-button");

buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            scale: 1.1,              // Le bouton grandit de 10% au survol
            duration: 0.3,           // Durée de 0,3 seconde
            ease: "power1.out",      // Transition douce
        });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            scale: 1,                // Retour à la taille normale
            duration: 0.3,
            ease: "power1.out",
        });
    });
});


