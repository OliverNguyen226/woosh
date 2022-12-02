import { createSignal } from 'solid-js'

function App() {
  const [count, setCount] = createSignal(0)

  return (
      <p>Hello World</p>
  )
}

export default App
