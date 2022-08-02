import React from 'react';
import { TodoCounter } from './TodoCounter.js'
import { TodoItem } from './TodoItem.js';
import { CreateTodobutton } from './CreateTodoButton.js';
import { TodoList } from './TodoList.js';
import { TodoSearch } from './TodoSearch.js'

const todos = [
  {text: 'terminar el curso', completed: true},
  {text: 'Crear proyectos con react', completed: false},
  {text: 'estudiar ingles', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}  
            />
        ))}
      </TodoList>
      <CreateTodobutton/>     
   </React.Fragment>

   );
}

export default App;
