import React, { useState } from "react";

const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start mt-40">
      <h2>
        Welcome to <span className="font-bold text-theme dots">NAFS</span>{" "}
        Training Platform!
      </h2>
      <h3>{numQuestions} Questions to start your Math Mastery</h3>
      <div className="flex ">
        <input
          type="email"
          className="border-2 text-2xl text-theme outline-none font-semibold px-8 rounded-l-md  min-w-60
     "
          placeholder="Enter Your E-mail"
        />
        <button
          className="btn1 btn-ui text-white  bg-theme rounded-r-full"
          onClick={() => dispatch({ type: "start" })}
        >
          Let’s Start
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
