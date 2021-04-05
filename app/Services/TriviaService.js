import { ProxyState } from "../AppState.js";
import Trivia from "../Models/Trivia.js";
import { api } from "./AxiosService.js"

class TriviaService {
    async getTrivia(url = api.baseURL) {
        let res = await api.get(url)

        console.log(res.data.results)

        let questions = res.data.results.map(q => new Trivia(q))
        ProxyState.questions = questions
    }
}

export const triviaService = new TriviaService();

