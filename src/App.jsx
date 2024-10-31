// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TodosContainer } from './components/containers/TodoContainer'
import { TodoFormContainer } from './components/containers/TodoFormContainer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <TodosContainer />
          <TodoFormContainer />
        </header>
      </div>
    </>
  )
}

export default App
