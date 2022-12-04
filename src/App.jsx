import { createSignal } from 'solid-js'
import { Route, Routes } from '@solidjs/router'
import QuizCategory from './pages/QuizCategory'
import Home from './pages/Home'
import Resource from './pages/Resource'




function App() {

  return (

    <div class="container">
      <Routes>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/quizcategory" component={QuizCategory} />
        <Route path="/resource" component={Resource} />
      </Routes>

    </div>



  )
}

export default App
