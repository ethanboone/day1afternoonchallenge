import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export default class Trivia {
    constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {
        this.id = generateId()
        this.category = category
        this.type = type
        this.difficulty = difficulty
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers
    }

    get Template() {

        return /*html*/`
        <div class="col-10 col-md-8 d-flex card p-2 my-3 text-center">
            <h3>${this.question}</h3>
            <p>
                ${this.Answers}
            </p>
        </div>
        `
    }

    get Answers() {
        let answers = [...this.incorrectAnswers, this.correctAnswer]
        answers = shuffle(answers)
        let template = ''
        answers.forEach(a =>
            template += `
            <button class="btn-sm btn-md btn-dark" onclick="app.triviaController.isCorrect('${this.id}', '${a}')">${a}</button>
        `
        )
        return template
    }
}