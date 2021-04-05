import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";


//Private
function _draw() {
    let questions = ProxyState.questions;
    let template = ''
    questions.forEach(q => template += q.Template)
    document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.questionsController.addValue()">Add Value</button>  
  <div className="card-columns questions">
      ${template}
  </div>
  `
}

//Public
export default class TriviaController {
    constructor() {
        ProxyState.on("questions", _draw);
        this.getTrivia()
    }

    getTrivia() {
        triviaService.getTrivia()
    }

}