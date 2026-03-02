let bgMusic;

function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "1103") {

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainContent").style.display = "block";

        launchFireworks();

        // ✅ PLAY MUSIC (USER ACTION SAFE)
        const bgMusic = document.getElementById("bgMusic");
        bgMusic.volume = 0.6;

        bgMusic.play().catch(error => {
            console.log("Autoplay blocked:", error);
        });

    } else {
        alert("Wrong Password 💔 Try again!");
    }
}
let fireworksInterval;

function launchFireworks() {
    const canvas = document.getElementById("fireworksCanvas");
    const ctx = canvas.getContext("2d");

    canvas.style.display = "block";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function createFirework() {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height / 2;

        for (let i = 0; i < 60; i++) {
            particles.push({
                x: x,
                y: y,
                radius: 2,
                color: "white",
                speedX: (Math.random() - 0.5) * 8,
                speedY: (Math.random() - 0.5) * 8,
                alpha: 1
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, index) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.alpha -= 0.015;

            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowColor = "white";
            ctx.shadowBlur = 10;
            ctx.fill();

            if (p.alpha <= 0) {
                particles.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    animate();

    // 💥 Continuous explosions every 800ms
    fireworksInterval = setInterval(createFirework, 800);
}
const petalContainer = document.querySelector(".petals");

for (let i = 0; i < 25; i++) {
    let petal = document.createElement("span");
    petal.innerHTML = "🌹";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = (Math.random() * 5 + 5) + "s";
    petalContainer.appendChild(petal);
}

/* PHOTO SLIDER */
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block";
}

showSlides();
setInterval(showSlides, 2000);
// SPARKLES
const sparkContainer = document.querySelector(".sparkles");

for (let i = 0; i < 50; i++) {
    let spark = document.createElement("span");
    spark.style.left = Math.random() * window.innerWidth + "px";
    spark.style.top = Math.random() * window.innerHeight + "px";
    spark.style.animationDuration = (Math.random() * 3 + 2) + "s";
    sparkContainer.appendChild(spark);
}
// TYPING EFFECT
const text = "You are my forever, my always, my everything ❤️";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 70);
    }
}

typingEffect();
