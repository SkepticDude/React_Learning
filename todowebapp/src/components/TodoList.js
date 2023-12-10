import React from "react";

export default function TodoList(props) {
  function deleteItem(id) {
    props.setTodoList((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <ul className="list">
      {props.todoList.map((todo) => {
        return (
          <li key={todo.id}>
            <label>{todo.title}</label>
            <button
              className="btn btn-danger"
              onClick={() => deleteItem(todo.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
