import React from "react";
import './CreateTodoButton.css';


function CreateTodobutton (props){
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState)
  }
  
  return(
    <button className="CreateTodoButton" 
    onClick={onClickButton}
    >
      +
    </button>
  )
}

export { CreateTodobutton }