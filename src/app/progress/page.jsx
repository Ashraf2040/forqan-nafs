"use client";

import Error from "@/components/Error";
import FinisheScreen from "@/components/FinisheScreen";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import NextButton from "@/components/NextButton";
import Progress from "@/components/Progress";
import Questions from "@/components/Questions";
import StartScreen from "@/components/StartScreen";
import Timer from "@/components/Timer";
import React, { useEffect, useReducer } from "react";
import { reducer } from "../utils/reducer";


export const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondRemaining: null,

};

const QuestionScreen = () => {
  const [
    { questions, status, index, answer, points, highscore, secondRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (curr, accu) => curr + accu.points,
    0
  );

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "data-recieved", payload: data }))
      .catch((err) => dispatch({ type: "data-failed" }));
  }, []);
  return (
    <div className="w-3/5 ">
      {status === "loading" && <Loader />}
      {status === "Error" && <Error />}
      {status === "ready" && (
        <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
      )}
      {status === "active" && (
        <>
          <Progress
            index={index}
            numQuestions={numQuestions}
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            answer={answer}
          />
          <Questions
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          <Footer>
            <Timer dispatch={dispatch} secondRemaining={secondRemaining} />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestions={numQuestions}
            />
          </Footer>
        </>
      )}
      {status === "finished" && (
        <FinisheScreen
          points={points}
          maxPossiblePoints={maxPossiblePoints}
          highscore={highscore}
          dispatch={dispatch}
        />
      )}
      {status === "restart" && (
        <>
          <Progress
            index={index}
            numQuestions={numQuestions}
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            answer={answer}
          />
          <Questions
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          <NextButton
            dispatch={dispatch}
            answer={answer}
            index={index}
            numQuestions={numQuestions}
          />
        </>
      )}
    </div>
  );
};

export default QuestionScreen;
