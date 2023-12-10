import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  let [todoList, setTodoList] = useState([]);

  function handleAddItem(newItem) {
    setTodoList((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title: newItem }];
    });
  }

  return (
    <>
      <TodoForm addItem={handleAddItem} />
      <h2>To Do List</h2>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
