function UI() {
    this.btn_start = document.querySelector(".btn_start"),
        this.btn_next = document.querySelector(".next_btn"),

        this.quiz_box = document.querySelector(".quiz_box"),
        this.question_options = document.querySelector(".question_options")
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
        this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'

    this.btn_replay = document.querySelector(".btn_replay"),
        this.btn_quit = document.querySelector(".btn_quit"),
        this.time_text = document.querySelector(".time_text"),
        this.time_second = document.querySelector(".time_second"),
        this.time_line = document.querySelector(".time_line")

    this.score_box = document.querySelector(".score_box")
}

UI.prototype.showQuestion = function (questions) {
    let question = `<span>${questions.questionText}</span>`;
    let option = '';

    for (let answer in questions.questionOptions) {
        option += `
        <div class = "option">
            <span><b>${answer}</b>: ${questions.questionOptions[answer]}</span>
        </div>
        `;
    }

    document.querySelector(".question_header").innerHTML = question;
    this.question_options.innerHTML = option;

    const options = this.question_options.querySelectorAll(".option");

    for (let opt of options) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.showQuestionNumber = function (questionNum, totalQuestion) {
    let tag = `<span class="badge bg-warning">${questionNum} / ${totalQuestion}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

UI.prototype.showScore = function (totalQuestion, rigthAnswers) {
    let tag = `Total Score is <b>${rigthAnswers}</b> in <b>${totalQuestion}</b> Questions`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}