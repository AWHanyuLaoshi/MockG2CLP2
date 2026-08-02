// =========================================
// G2华文试卷二电子考试模拟练习
// state.js
// Global Application State
// =========================================

const state = {

    // -------------------------------
    // Loaded paper
    // -------------------------------
    paper: null,

    // -------------------------------
    // Candidate information
    // -------------------------------
    student: {

        name: "",
        paperCode: ""

    },

    // -------------------------------
    // Current position
    // -------------------------------
    current: {

        section: 0,

        navigationIndex: 0

    },

    // -------------------------------
    // Navigation map
    // Example:
    //
    // [
    //   {group:0, question:0},
    //   {group:0, question:1},
    //   {group:1, question:0}
    // ]
    // -------------------------------
    navigation: [],

    // -------------------------------
    // Student answers
    // Example:
    //
    // {
    //   Q1:"B",
    //   Q2:"D",
    //   Q21:"答案"
    // }
    // -------------------------------
    answers: {},

    // -------------------------------
    // Review flags
    // Example:
    //
    // {
    //   Q5:true,
    //   Q18:true
    // }
    // -------------------------------
    review: {},

    // -------------------------------
    // Timer
    // -------------------------------
    timer: {

        duration: 0,

        remaining: 0,

        interval: null

    }

};
