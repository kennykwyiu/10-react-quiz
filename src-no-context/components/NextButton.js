import React from "react";

function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button className="btn btn-ui">
        <div
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </div>
      </button>
    );
  }

  if (index === numQuestions - 1)
    return (
      <button className="btn btn-ui">
        <div
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </div>
      </button>
    );
}

export default NextButton;
