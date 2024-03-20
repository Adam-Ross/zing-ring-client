import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const grabTodos = async () => {
    try {
      const res = await fetch(`http://jsonplaceholder.typicode.com/todos`)
      const data = await res.json()
      console.log(data)
      setTodos([...data])
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <button onClick={grabTodos}>Grab</button>
      {todos.map((todo) => (
        <h1>{todo.title}</h1>
      ))}
    </>
  )
}

export default App



