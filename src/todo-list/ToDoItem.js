import React from "react";

function ToDoItem({ todo, onClick }) {
  return (
    <div onClick={() => onClick(todo.id)}>
      <p>{todo.title}</p>
    </div>
  );
}

export default ToDoItem;
