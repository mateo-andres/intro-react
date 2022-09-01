import React from "react";
import { TodoCounter } from '../TodoCounter/index.js'
import { TodoContext } from "../TodoContext/index.js";
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodobutton } from '../CreateTodoButton/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoForm } from '../TodoForm/index.js';
import { TodoSearch } from '../TodoSearch/index.js'
import { Modal } from '../Modal'

function AppUI () {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

  return(
    <React.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {error && <p>Desesperate hubo un error</p>}
        {loading && <p>Estamos cargando, no desesperes ...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p> }


        {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
      <CreateTodobutton
        setOpenModal= {setOpenModal}
      />     
   </React.Fragment>
  )
}

export { AppUI }
