// afficher questions
console.log(questions.length + "questions" + "id" + "reponses")

questions.forEach((question, index) => {

    console.log("id " + (index + 1) + "")
    console.log("questions " + (index + 1) + " : " + question.question)
    console.log("reponses" + (index + 1) + " : " + question.reponses)
    console.log("bonne reponse : " + question.reponses[question.bonne_reponse])

})