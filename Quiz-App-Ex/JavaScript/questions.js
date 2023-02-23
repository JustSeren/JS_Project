function Question(questionText, questionOptions, correctAnswer) {
    this.questionText = questionText;
    this.questionOptions = questionOptions;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function (answer) {
    return answer === this.correctAnswer;
}

let questions = [
    new Question("1- How do you find the largest number of 2 and 4?", { a: "Math.ceil(2,4)", b: "Math.max(2,4)", c: "ceil(2,4)", d: "top(2,4)" }, "b"),
    new Question("2- What is the correct JavaScript syntax to write \"Hello World\"?", { a: "document.write(\"Hello World\")", b: "response.write(\"Hello World\")", c: "\"Hello World\"", d: "(Hello World)" }, "a"),
    new Question("3-  How do you create a function?", { a: "function:myFunction()", b: "function=myFunction()", c: "myFunction():function", d: "function myFunction()" }, "d"),
    new Question("4- How do you write a conditional statement for executing some statements only if \"i\" is equal to 5?", { a: "if i==5 then", b: "if (i==5)", c: " if i=5 then", d: " if i=5" }, "b")
];