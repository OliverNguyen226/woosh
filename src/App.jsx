import { createSignal } from "solid-js";
import { lazy } from "solid-js";
import { Route, Routes } from "@solidjs/router";
const QuizCategory = lazy(() => import("./pages/QuizCategory"));
const Home = lazy(() => import("./pages/home"));
const Resource = lazy(() => import("./pages/Resource"));
const Landing = lazy(() => import("./pages/Landing"));

function App() {
  return (
    <Routes>
      <Route path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/quizcategory" component={QuizCategory} />
      <Route path="/resource" component={Resource} />
    </Routes>
  );
}

export default App;