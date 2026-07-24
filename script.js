// ==============================
// CodeStrider Script v2.0
// ==============================

// ---------- Typing Effect ----------

const text = "Build. Learn. Create. Innovate.";
const typingElement = document.getElementById("typing");

let index = 0;

function typeWriter() {
    if (typingElement && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 70);
    }
}

// ---------- Smooth Scroll ----------

function scrollToSection(id) {
    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// ---------- Complete Lesson ----------

function completeLesson() {

    localStorage.setItem("lesson1", "completed");
    localStorage.setItem("xp", "20");
    localStorage.setItem("progress", "20");

    alert("🎉 Lesson 1 Completed!\n\n+20 XP\n\nLesson 2 Unlocked!");

    window.location.href = "python.html";
}

// ---------- Page Load ----------

window.onload = function () {

    // Typing Animation
    typeWriter();

    // XP
    const xp = localStorage.getItem("xp") || "0";
    const xpText = document.getElementById("xp");

    if (xpText) {
        xpText.innerHTML = xp;
    }

    // Progress
    const progress = localStorage.getItem("progress") || "0";

    const progressBar = document.querySelector(".progress-fill");

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

    const progressText = document.getElementById("progressText");

    if (progressText) {
        progressText.innerHTML = progress + "% Completed";
    }

   // Lesson 2

const lesson2 = document.getElementById("lesson2btn");

if(localStorage.getItem("lesson1")=="completed" && lesson2){

    lesson2.disabled=false;
    lesson2.innerHTML="Start Learning";

}

// Lesson 3

const lesson3=document.getElementById("lesson3btn");

if(localStorage.getItem("lesson2")=="completed" && lesson3){

    lesson3.disabled=false;
    lesson3.innerHTML="Start Learning";

}

// Lesson 4

const lesson4=document.getElementById("lesson4btn");

if(localStorage.getItem("lesson3")=="completed" && lesson4){

    lesson4.disabled=false;
    lesson4.innerHTML="Start Learning";

}

// Lesson 5

const lesson5=document.getElementById("lesson5btn");

if(localStorage.getItem("lesson4")=="completed" && lesson5){

    lesson5.disabled=false;
    lesson5.innerHTML="Start Learning";

}
}

function completeLesson2(){

    localStorage.setItem("lesson2","completed");
    localStorage.setItem("xp","40");
    localStorage.setItem("progress","40");

    alert("🎉 Lesson 2 Completed!\n\n+20 XP\n\nLesson 3 Unlocked!");

    window.location.href="python.html";

}

function completeLesson3(){

    localStorage.setItem("lesson3","completed");
    localStorage.setItem("xp","60");
    localStorage.setItem("progress","60");

    alert("🎉 Lesson 3 Completed!\n\n+20 XP\n\nLesson 4 Unlocked!");

    window.location.href="python.html";

}

function completeLesson4(){

    localStorage.setItem("lesson4","completed");
    localStorage.setItem("xp","80");
    localStorage.setItem("progress","80");

    alert("🎉 Lesson 4 Completed!\n\n+20 XP\n\nLesson 5 Unlocked!");

    window.location.href="python.html";

}

function completeLesson5(){

    localStorage.setItem("lesson5","completed");
    localStorage.setItem("xp","100");
    localStorage.setItem("progress","100");

    alert("🎉 Congratulations!\n\nYou completed the Python Beginner Course!\n\n🏆 Badge Unlocked: Python Explorer\n⭐ Total XP: 100");

    window.location.href="python-project.html";

}
