
import { initialState } from "../page";


const SECS_PER_QUESTION = 60;



export const reducer = (state,action) => {

    switch (action.type) {
      case "data-recieved":
        return {
          ...state, questions: action.payload,
          status : "ready"
        }
      case "data-faild":
        return {
          ...state , status : "Error"
        }
      case "start":
        return {
          ...state, status: "active",
          secondRemaining :state.questions.length * SECS_PER_QUESTION
        }
      case "newAnswer":
        const question=state.questions.at(state.index)
        return {
          ...state, answer: action.payload,
          points:
            action.payload === question.correctOption ? state.points + question.points : state.points,
          
        }
      case "nextQuestion":
        return {
          ...state, index :state.index+1,answer:null
        }
      case "finished":
        return {
          ...state, status: "finished",
          highscore: state.point > state.highscore ? state.point : state.highscore
        }
      case "restart":
        return {
          ...initialState,questions:state.questions,status:"ready"
        }
      case "tick":
        return {
          ...state, secondRemaining: state.secondRemaining - 1,
          status:state.secondRemaining=== 0 ?"finished":state.status
        }
      default:
        throw new Error ("Action is unknown")
        }
  
    }