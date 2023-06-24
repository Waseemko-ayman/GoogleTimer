let darkMode = document.querySelector(".mode");
let body = document.body;

darkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// ---------------------------------------------------------------

let tab = document.querySelectorAll(".tab ul li");
let timeDivOne = document.querySelector(".timer1");
let timeDivTwo = document.querySelector(".timer2");
let volumeIcon = document.querySelector(".volume-icon");
let targetLine = document.querySelector(".targetLine");

tab.forEach((b, index) => {
    b.addEventListener("click", () => {
        if(index == "0") {
            timeDivOne.style.display = 'block';
            timeDivTwo.style.display = 'none';
            targetLine.style.transform = "translateX(0)";
        } else {
            timeDivOne.style.display = 'none';
            timeDivTwo.style.display = 'block';
            targetLine.style.transform = "translateX(100%)";
        }
    });
});

volumeIcon.addEventListener("click", () => {
    if(volumeIcon.classList.contains("fa-volume-high")) {
        volumeIcon.classList.remove("fa-volume-high");
        volumeIcon.classList.add("fa-volume-xmark");
    } else {
        volumeIcon.classList.remove("fa-volume-xmark");
        volumeIcon.classList.add("fa-volume-high");
    }
});


