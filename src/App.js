import Header from "./Header";
import Main from "./Main";

export default function App() {
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
