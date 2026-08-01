// =========================================
// G2华文试卷二电子考试模拟练习
// instructions.js
// =========================================
if (!localStorage.getItem("paperFile")) {
    window.location.href = "index.html";
}
// Read information saved by login.js
const studentName = localStorage.getItem("studentName");
const paperTitle = localStorage.getItem("paperTitle");
const duration = parseInt(localStorage.getItem("duration"));
const instructions = JSON.parse(localStorage.getItem("instructions"));

// Display student name
document.getElementById("studentName").textContent = studentName;

// Display paper title
document.getElementById("paperTitle").textContent = paperTitle;

// Convert seconds to hours and minutes
const hours = Math.floor(duration / 3600);
const minutes = (duration % 3600) / 60;

if (hours > 0) {
    document.getElementById("duration").textContent =
        `${hours}小时${minutes}分钟`;
} else {
    document.getElementById("duration").textContent =
        `${minutes}分钟`;
}

// Display instructions
const list = document.getElementById("instructionList");

instructions.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});

// Start Exam button
function beginExam() {

    // Save exam start time
    localStorage.setItem("examStart", Date.now());

    // Go to exam page
    window.location.href = "exam.html";
}
