// =========================================
// G2华文试卷二电子考试模拟练习
// navigation.js
// =========================================

// Build section dropdown
function buildSectionDropdown() {

    const selector = document.getElementById("sectionSelector");

    selector.innerHTML = "";

    state.paper.sections.forEach((section, index) => {

        const option = document.createElement("option");

        option.value = index;
        option.textContent = section.name;

        selector.appendChild(option);

    });

    selector.addEventListener("change", changeSection);

}

// ----------------------------------------
// Build navigation map
// ----------------------------------------

function buildNavigationMap() {

    state.navigation = [];

    const section = state.paper.sections[state.current.section];

    section.groups.forEach((group, groupIndex) => {

        group.questions.forEach((question, questionIndex) => {

            state.navigation.push({

                group: groupIndex,

                question: questionIndex,

                id: question.id,

                display: question.display

            });

        });

    });

}

// ----------------------------------------
// Build question palette
// ----------------------------------------

function buildQuestionPalette() {

    const palette = document.getElementById("questionPalette");

    palette.innerHTML = "";

    state.navigation.forEach((item, index) => {

        const button = document.createElement("button");

        button.className = "question-btn";

        button.textContent = item.display;

        if (index === state.current.navigationIndex) {

            button.classList.add("question-current");

        }

        else {

            button.classList.add("question-unanswered");

        }

        button.onclick = () => {

            state.current.navigationIndex = index;

            buildQuestionPalette();

            loadCurrentQuestion();

        };

        palette.appendChild(button);

    });

}

// ----------------------------------------
// Change section
// ----------------------------------------

function changeSection(event) {

    state.current.section = Number(event.target.value);

    state.current.navigationIndex = 0;

    buildNavigationMap();

    buildQuestionPalette();

    loadCurrentQuestion();

}

// ----------------------------------------
// Previous question
// ----------------------------------------

function previousQuestion() {

    if (state.current.navigationIndex > 0) {

        state.current.navigationIndex--;

        buildQuestionPalette();

        loadCurrentQuestion();

    }

}

// ----------------------------------------
// Next question
// ----------------------------------------

function nextQuestion() {

    if (state.current.navigationIndex < state.navigation.length - 1) {

        state.current.navigationIndex++;

        buildQuestionPalette();

        loadCurrentQuestion();

    }

}
