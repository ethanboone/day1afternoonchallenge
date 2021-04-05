import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";


//Private
function _draw() {
    let questions = ProxyState.questions;
    let template = ''
    questions.forEach(q => template += q.Template)
    document.getElementById("app").innerHTML = /*html*/`  
      ${template}
    `
}

function _drawCorrect() {
    document.getElementById('header').innerHTML = `<h5>Correct: ${ProxyState.correct} Incorrect: ${ProxyState.incorrect}</h5>`
}

//Public
export default class TriviaController {
    constructor() {
        ProxyState.on("questions", _draw);
        ProxyState.on("correct", _drawCorrect)
        ProxyState.on("incorrect", _drawCorrect)
        this.getTrivia()
        _drawCorrect()
    }

    getTrivia() {
        triviaService.getTrivia()
    }

    isCorrect(id, a) {
        triviaService.isCorrect(id, a)
    }
}