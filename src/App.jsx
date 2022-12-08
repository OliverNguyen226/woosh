import { createSignal } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import QuizCategory from "./pages/QuizCategory";
import Resource from "./pages/Resource";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div class="container">
      <Routes>
        <Route path="/quiz" component={Quiz} />
        {/* <Route path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/quizcategory" component={QuizCategory} />
        <Route path="/resource" component={Resource} /> */}
      </Routes>
    </div>
  );
}

export default App;


            {/* {questions[currentQuestion()].answers.map((answer) => {
              return (
              
                <li
                class="option"
                  key={answer.id}
                  onClick={() => answerClicked(answer.isCorrect)}
                >
                  {answer.text}
                </li>

              );
            })} */}