import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import ToDoItem from "./ToDoItem";
import { useState } from "react";

function LiftUpstate() {
  const [todos, setTodos] = useState([
    { title: "exercise", id: 0, selected: false },
    { title: "laundry", id: 1, selected: false },
    { title: "dishes", id: 2, selected: false },
    { title: "study", id: 3, selected: false },
  ]);
  const handleToClick = (id) => {
    const newTodos = [...todos];

    const todo = newTodos.find((todo) => todo.id === id);
    todo.selected = !todo.selected;
    setTodos(newTodos);
  };

  const deleteSelected = () => {
    const newTodos = todos.filter((todo) => todo.selected === false);
    setTodos(newTodos);
  };

  return (
    <div>
      {todos.map((object) => (
        <ToDoItem todo={object} onClick={handleToClick} />
      ))}
      <div className="delete-button">
        <p onClick={deleteSelected}>delete</p>
      </div>
    </div>
  );
}

export default LiftUpstate;
