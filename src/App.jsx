import { useState,useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response )=> response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  return (
    <>
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} {todo.completed ? "(Completed)" : "(Pending)"}
              
            </li> 
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
