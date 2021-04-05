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
        <div class="card p-2 value">
            ${this.title}
        </div>
        `
    }
    get q()
}