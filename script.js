// ================= MUSIC =================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if (isPlaying) {

        music.pause();
        isPlaying = false;

    } else {

        music.play();
        isPlaying = true;

    }

});

// ================= LOADING =================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading-screen").style.display = "none";

    }, 1800);

});

// ================= INTRO HEART =================

const heartFill =
document.getElementById("heart-fill");

let introStep = 0;

const introHearts = [
    "🤍",
    "🩷",
    "💖",
    "❤️"
];

if (heartFill) {

    heartFill.addEventListener("click", () => {

        introStep++;

        if (introStep < introHearts.length) {

            heartFill.innerHTML =
            introHearts[introStep];

        }

        if (introStep === 1) {

            music.volume = 0;

            music.play();

            isPlaying = true;

            let fade = setInterval(() => {

                if (music.volume < 0.9) {

                    music.volume += 0.1;

                } else {

                    clearInterval(fade);

                }

            }, 300);

        }

        if (introStep >= 3) {

            setTimeout(() => {

                document
                .getElementById("intro-screen")
                .classList.remove("active");

                document
                .getElementById("password-screen")
                .classList.add("active");

            }, 700);

        }

    });

}

// ================= PASSWORD =================

let currentPassword = "";

const display =
document.getElementById("passwordDisplay");

function updatePasswordDisplay() {

    display.textContent =
    "●".repeat(currentPassword.length);

}

function pressNumber(number) {

    if (currentPassword.length >= 6) return;

    currentPassword += number;

    updatePasswordDisplay();

    checkPassword();

}

function clearPassword() {

    currentPassword = "";

    updatePasswordDisplay();

}

function deleteNumber() {

    currentPassword =
    currentPassword.slice(0, -1);

    updatePasswordDisplay();

}

function checkPassword() {

    if (currentPassword.length !== 6) return;

    if (currentPassword === "031120") {

        document
        .getElementById("mainHeart")
        .innerHTML = "❤️";

        setTimeout(() => {

            document
            .getElementById("password-screen")
            .classList.remove("active");

            document
            .getElementById("gift-screen")
            .classList.add("active");

        }, 800);

    } else {

        alert("รหัสไม่ถูกต้องนะคะ ❤️");

        currentPassword = "";

        updatePasswordDisplay();

    }

}

// ================= GIFT =================

document.addEventListener("DOMContentLoaded", () => {

    const gift =
    document.getElementById("giftBox");

    if (gift) {

        gift.addEventListener("click", () => {

            gift.innerHTML = "💖";

            gift.style.transform =
            "scale(1.3)";

            setTimeout(() => {

                document
                .getElementById("gift-screen")
                .classList.remove("active");

                document
                .getElementById("welcome-screen")
                .classList.add("active");

            }, 1000);

        });

    }

});

// ================= WELCOME =================

function goToTimeline() {

    document
    .getElementById("welcome-screen")
    .classList.remove("active");

    document
    .getElementById("timeline-screen")
    .classList.add("active");

}

// ================= FLOWERS =================

function createFlower() {

    const flower =
    document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML = "🌸";

    flower.style.left =
    Math.random() * 100 + "vw";

    flower.style.animationDuration =
    (Math.random() * 5 + 6) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 12000);

}

setInterval(createFlower, 1200);

// ================= PHOTO FLOAT =================

const photos =
document.querySelectorAll(".heart-photo");

photos.forEach(photo => {

    const randomX =
    (Math.random() * 1000) - 500;

    const randomY =
    (Math.random() * 800) - 400;

    photo.style.transform =
    `translate(${randomX}px,${randomY}px)
     rotate(${Math.random()*90-45}deg)`;

    photo.style.opacity = "0";

});

setTimeout(() => {

    photos.forEach(photo => {

        photo.style.opacity = "1";

        photo.style.transform =
        "translate(0,0) rotate(0deg)";

    });

}, 500);
