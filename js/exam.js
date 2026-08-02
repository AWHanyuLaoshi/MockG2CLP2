// =========================================
// G2华文试卷二电子考试模拟练习
// exam.js
// Main Initialiser
// =========================================

document.addEventListener("DOMContentLoaded", initialiseExam);

async function initialiseExam() {

    try {

        // ---------------------------------
        // Load student information
        // ---------------------------------

        state.student.name =
            localStorage.getItem("studentName") || "";

        state.student.paperCode =
            localStorage.getItem("paperCode") || "";

        // ---------------------------------
        // Load paper
        // ---------------------------------

        const paperFile =
            localStorage.getItem("paperFile");

        if (!paperFile) {

            alert("找不到试卷。");

            window.location.href = "index.html";

            return;

        }

        const response =
            await fetch(paperFile);

        state.paper =
            await response.json();

        // ---------------------------------
        // Timer
        // ---------------------------------

        state.timer.duration =
            state.paper.duration;

        state.timer.remaining =
            state.paper.duration;

        // ---------------------------------
        // Display page information
        // ---------------------------------

        document.getElementById("paperTitle").textContent =
            state.paper.title;

        document.getElementById("studentName").textContent =
            state.student.name;

        // ---------------------------------
        // Build navigation
        // ---------------------------------

        buildSectionDropdown();

        buildNavigationMap();

        buildQuestionPalette();

        // ---------------------------------
        // Navigation buttons
        // ---------------------------------

        document
            .getElementById("previousButton")
            .addEventListener("click", previousQuestion);

        document
            .getElementById("nextButton")
            .addEventListener("click", nextQuestion);

        // ---------------------------------
        // Load first question
        // ---------------------------------

        loadCurrentQuestion();

        console.log("Exam initialised.");

        console.log(state);

    }

    catch (error) {

        console.error(error);

        alert("无法载入试卷。");

    }

}

// =========================================
// Temporary loader
// (Will later move to question.js + passage.js)
// =========================================

function loadCurrentQuestion() {

    if (state.navigation.length === 0) return;

    const nav = state.navigation[state.current.navigationIndex];

    document.getElementById("questionContent").innerHTML = `
        <h2>第 ${nav.display} 题</h2>
        <p>题目将在下一步显示。</p>
    `;

}
