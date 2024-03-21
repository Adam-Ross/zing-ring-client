import { useState } from 'react'



function App() {
  const [todos, setTodos] = useState([])

  const grabTodos = async () => {
    try {
      const res = await fetch(`https://zing-ring-server.onrender.com/todos`)
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
        <h1 key={todo.id}>{todo.body}</h1>
      ))}
    </>
  )
}

export default App



