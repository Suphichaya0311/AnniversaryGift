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

// ================= INTRO PHOTO =================

const startPhoto =
document.getElementById("startPhoto");

if(startPhoto){

    startPhoto.addEventListener("click",()=>{

        music.volume = 0;

        music.play();

        isPlaying = true;

        let fade = setInterval(()=>{

            if(music.volume < 0.9){

                music.volume += 0.1;

            }else{

                clearInterval(fade);

            }

        },300);

        startPhoto.style.transform =
        "scale(1.1)";

        setTimeout(()=>{

            document
            .getElementById("intro-screen")
            .classList.remove("active");

            document
            .getElementById("password-screen")
            .classList.add("active");

        },1000);

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
