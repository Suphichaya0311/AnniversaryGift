
// Loading Screen

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
    }, 1800);
});

// Password

function checkPassword() {

    const password =
        document.getElementById("passwordInput").value;

    if(password === "031120"){

        document
            .getElementById("password-screen")
            .classList.remove("active");

        document
            .getElementById("gift-screen")
            .classList.add("active");

    }else{

        alert("Wrong Password ❤️");

    }
}

// Music

const music =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click",()=>{

    if(isPlaying){

        music.pause();
        isPlaying = false;

    }else{

        music.play();
        isPlaying = true;

    }

});

// Gift Open

document.addEventListener("DOMContentLoaded",()=>{

    const gift =
        document.getElementById("giftBox");

    if(gift){

        gift.addEventListener("click",()=>{

            gift.innerHTML = "💖";

            music.play();
            isPlaying = true;

            setTimeout(()=>{

                document
                    .getElementById("gift-screen")
                    .classList.remove("active");

                document
                    .getElementById("welcome-screen")
                    .classList.add("active");

            },1000);

        });

    }

});

// Welcome -> Timeline

function goToTimeline(){

    document
        .getElementById("welcome-screen")
        .classList.remove("active");

    document
        .getElementById("timeline-screen")
        .classList.add("active");

}
