// =========================================
// G2华文试卷二电子考试模拟练习
// exam.js
// =========================================

let paper = null;

let currentSection = 0;
let currentGroup = 0;
let currentQuestion = 0;

document.addEventListener("DOMContentLoaded", initialiseExam);

async function initialiseExam() {

    try {

        // Read paper location
        const paperFile = localStorage.getItem("paperFile");

        if (!paperFile) {
            alert("找不到试卷资料。");
            window.location.href = "index.html";
            return;
        }

        // Load paper JSON
        const response = await fetch(paperFile);

        paper = await response.json();

        // Display header information
        document.getElementById("paperTitle").textContent = paper.title;

        document.getElementById("studentName").textContent =
            localStorage.getItem("studentName");

        // Build section dropdown
        buildSectionDropdown();

        // Load first question
        loadCurrentQuestion();

    }

    catch(error){

        console.error(error);

        alert("无法载入试卷。");

    }

}

function buildSectionDropdown(){

    const dropdown = document.getElementById("sectionSelector");

    dropdown.innerHTML = "";

    paper.sections.forEach((section,index)=>{

        const option = document.createElement("option");

        option.value = index;

        option.textContent = section.name;

        dropdown.appendChild(option);

    });

}
async function loadCurrentQuestion() {

    console.log("=== loadCurrentQuestion ===");

    console.log("Current section:", currentSection);
    console.log("Current group:", currentGroup);

    const group = paper.sections[currentSection].groups[currentGroup];

    console.log("Group:", group);

    if (group.passage.type === "html") {

        console.log("Loading:", group.passage.file);

        const response = await fetch(group.passage.file);

        console.log("HTTP Status:", response.status);

        const html = await response.text();

        console.log("First 100 characters:", html.substring(0, 100));

        document.getElementById("passageContent").innerHTML = html;

        console.log("Passage inserted.");

    }

}
