import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  // const [state, dispatch] = useReducer(initialState);
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("Error"));
  }, []);
  return (
    <div className="app">
      <Header>The React Quiz</Header>
      <Main className="main">
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}
