import React, { useState } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

function App() {
  const [defaultTodo, setTodo] = useState([
    { id: 1, content: 'grocery shopping' },
    { id: 2, content: 'check email' }
  ]);
  
  const deleteTodo = (id) => {
    let remainingTodos = defaultTodo.filter(todo => todo.id !== id);
    let leftOverTodos = setTodo([...remainingTodos]);
    return leftOverTodos;
  }

  const addTodo = (todo) => {
    todo.id = Math.random() * 10;
    let addedTodos = setTodo([...defaultTodo, todo]);
    return addedTodos;
  }

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos defaultTodo={defaultTodo} deleteTodo={deleteTodo}/>
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
