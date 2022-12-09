import { createSignal } from "solid-js";
import Nav from "../components/Nav";
import "../App.css";


function Quiz() {
  // Properties
  const [showResults, setShowResults] = createSignal(false);
  const [currentQuestion, setCurrentQuestion] = createSignal(0);
  // const [questions, setQuestions] = createSignal()
   let questions =  [
    {
      text: "How many times a day should you brush your teeth?",
      answers: [
        { id: 0, text: "2", isCorrect: true },
        { id: 1, text: "3", isCorrect: false },
        { id: 2, text: "0", isCorrect: false },
        { id: 3, text: "1", isCorrect: false },
      ],
    },
    {
      text: "how long should you brush your teeth for?",
      answers: [
        { id: 0, text: "2 Mins", isCorrect: false },
        { id: 1, text: "3 Mins", isCorrect: true },
        { id: 2, text: "4 Mins", isCorrect: false },
        { id: 3, text: "5 Mins", isCorrect: false },
      ],
    },
    {
      text: "How many times a day should you floss your teeth?",
      answers: [
        { id: 0, text: "2", isCorrect: true },
        { id: 1, text: "3", isCorrect: false },
        { id: 2, text: "0", isCorrect: false },
        { id: 3, text: "1", isCorrect: false },
      ],
    },
    {
      text: "How long should you floss your teeth for?",
      answers: [
        { id: 0, text: "2 mins", isCorrect: false },
        { id: 1, text: "3 mins", isCorrect: true },
        { id: 2, text: "4 mins", isCorrect: false },
        { id: 3, text: "5 mins", isCorrect: false },
      ],
    },
    {
      text: "How many times a day should you use mouthwash?",
      answers: [
        { id: 0, text: "1", isCorrect: false },
        { id: 1, text: "2", isCorrect: true },
        { id: 2, text: "8", isCorrect: true },
        { id: 3, text: "3", isCorrect: false },
      ],
    },
  ]

  const [score, setScore] = createSignal(0);


  

  const answerClicked = (isCorrect) => {
    console.log("answer clicked", isCorrect);
    // Increment the score
    if (isCorrect) {
      // maybe u wanna do something here with the color 
      setScore(score() + 1);
    }

    if (currentQuestion() + 1 < questions.length) {
      setCurrentQuestion(currentQuestion() + 1);
    } else {
      setShowResults(true);
    }
  };

  // q: how do i place all contents in the middle of the page?
  // a: 

  return (
    <div class="App">
      {/* 1. Header  */}
      <div class="header">
        <img  class="logo" src="SmallLogo.png" alt=""  />
      <h1>Quiz - Hand Hygiene </h1>
      </div>

      {/* 2. Current Score  */}
      {/* <h2>Score: {score()}</h2> */}
      

      {/* 3. Show results or show the question game  */}
      {showResults() ? (
        /* 4. Final Results */
        //Restuls
        <div>
            <h2>Results</h2>
            <p>You scored {score()} out of {questions.length}</p>
        </div>
      ) : (
        /* 5. Question Card  !!!!!! */ 
        <div class="question-card">
          {/* Current Question  */}
          <h2>
            {/* Question: {currentQuestion() + 1} out of {questions.length} */}
          </h2>
          <h3 class="question-text">{questions[currentQuestion()].text}</h3>

          {/* List of possible answers  */}
          <ul class="options">
          {questions[currentQuestion()].answers.map((answer) => (
  <li
  class="option">
    <input
      type="radio"
      id={`answer-${answer.id}`}
      name="answer"
      onClick={() => answerClicked(answer.isCorrect)}
    />
    <label for={`answer-${answer.id}`}>{answer.text}</label>
  </li>
))}

          </ul>
          <div className="buttons">
    <button class="back">Back</button>
    <button class="next">Next </button>
      </div>
        </div>
        
      )}
      <Nav></Nav>

    </div>
  );
}

export default Quiz;
