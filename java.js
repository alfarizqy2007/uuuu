// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.opacity = "0";
        document.getElementById("loading").style.visibility = "hidden";
    }, 2000);
});

// Efek mengetik
const text = "Terima kasih sudah hadir dalam hidupku. Semoga di hari ulang tahunmu ini kamu selalu sehat, bahagia, dan semua impianmu tercapai. ❤️";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 50);
    }
}

typingEffect();

// Tombol buka hadiah
document.getElementById("mulai").addEventListener("click", () => {
    document.getElementById("surat").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("musik").play();

    for (let i = 0; i < 40; i++) {
        buatHati();
    }
});

// Efek hati
function buatHati() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.querySelector(".love-bg").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

// Hati terus muncul
setInterval(() => {
    buatHati();
}, 500);

// Slideshow Foto
let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlides() {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].classList.add("active");

}

setInterval(showSlides, 3000);

// Firework sederhana
document.getElementById("fire").addEventListener("click", () => {

    for (let i = 0; i < 120; i++) {

        const fire = document.createElement("div");

        fire.classList.add("firework");

        fire.style.left = window.innerWidth / 2 + "px";
        fire.style.top = window.innerHeight / 2 + "px";

        fire.style.background =
            `hsl(${Math.random()*360},100%,60%)`;

        document.body.appendChild(fire);

        const x = (Math.random() - 0.5) * 700;
        const y = (Math.random() - 0.5) * 700;

        fire.animate([
            {
                transform: "translate(0,0)",
                opacity: 1
            },
            {
                transform: `translate(${x}px,${y}px)`,
                opacity: 0
            }
        ], {
            duration: 1500,
            easing: "ease-out"
        });

        setTimeout(() => {
            fire.remove();
        }, 1500);

    }

    alert("❤️ Happy Birthday Sayang ❤️");
});

// Efek klik di mana saja
document.addEventListener("click", (e) => {

    const love = document.createElement("div");

    love.innerHTML = "💖";

    love.style.position = "fixed";
    love.style.left = e.clientX + "px";
    love.style.top = e.clientY + "px";
    love.style.fontSize = "25px";
    love.style.pointerEvents = "none";

    document.body.appendChild(love);

    love.animate([
        {
            transform: "translateY(0)",
            opacity: 1
        },
        {
            transform: "translateY(-80px)",
            opacity: 0
        }
    ], {
        duration: 1200
    });

    setTimeout(() => {
        love.remove();
    }, 1200);

});
