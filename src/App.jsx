import { createSignal, lazy } from "solid-js";
import { Route, Routes } from "@solidjs/router";
const QuizCategory = lazy(() => import("./pages/QuizCategory"));
const Home = lazy(() => import("./pages/Home"));
const Resource = lazy(() => import("./pages/Resource"));
const Landing = lazy(() => import("./pages/Landing"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Instructions = lazy(() => import("./pages/Instructions"));



// const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Routes>
      <Route path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/quizcategory" component={QuizCategory} />
      <Route path="/resource" component={Resource} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/instructions" component={Instructions} />
    </Routes>
  );
}

export default App;