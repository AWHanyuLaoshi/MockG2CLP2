// =========================================
// G2华文试卷二电子考试模拟练习
// login.js
// =========================================

async function startLogin() {

    // Get the student's input
    const studentName = document.getElementById("studentName").value.trim();
    const paperCode = document.getElementById("paperCode").value.trim();

    // Check that both fields are filled
    if (studentName === "" || paperCode === "") {
        alert("请输入姓名和试卷码。");
        return;
    }

    try {

        // Read the list of available papers
        const response = await fetch("data/papers.json");
        const papers = await response.json();

        // Check if the paper code exists
        if (!(paperCode in papers)) {
            alert("试卷码无效，请重新输入。");
            return;
        }
        
        // Get the selected paper
        const selectedPaper = papers[paperCode];
        
        // Save information for later pages
        localStorage.setItem("studentName", studentName);
        localStorage.setItem("paperCode", paperCode);
        localStorage.setItem("paperTitle", selectedPaper.paperTitle);
        localStorage.setItem("paperFile", selectedPaper.file);
        localStorage.setItem("duration", selectedPaper.duration);
        localStorage.setItem("instructions", JSON.stringify(selectedPaper.instructions));

        // Go to the instruction page
        window.location.href = "instructions.html";

    } catch (error) {

        console.error(error);
        alert("无法读取试卷资料，请稍后再试。");

    }
}
