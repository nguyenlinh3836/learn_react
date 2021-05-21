import React,{useState} from "react";
import './App.css';
import Todolist from "./components/TodoList";
function App() {
  return (
    <div className="todo-app">
      <Todolist/>
    </div>
  );
}

export default App;
