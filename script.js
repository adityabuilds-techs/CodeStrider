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

    // Lesson Unlock
    const lesson2 = document.getElementById("lesson2btn");

    if (localStorage.getItem("lesson1") === "completed" && lesson2) {

        lesson2.disabled = false;
        lesson2.innerHTML = "Start Lesson";

    }

};
