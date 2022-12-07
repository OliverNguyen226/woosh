import { createSignal, lazy } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import QuizCategory from "./pages/QuizCategory";
import Resource from "./pages/Resource";
import Home from "./pages/Home";
import Landing from "./pages/Landing";


// const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div class="container">
      <Routes>
        <Route path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/quizcategory" component={QuizCategory} />
        <Route path="/resource" component={Resource} />
      </Routes>
    </div>
  );
}

export default App;
