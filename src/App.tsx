import React, { FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [todoNumber, setTodoNumber] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  // console.log(todoData)

  const addTodo = (): void => {
    // console.log("prin")
    const newTodo = { todoText: todoText, todoNumber: todoNumber };
    setTodoList([...todoList, newTodo]);
    setTodoText("");
    setTodoNumber(0);
  };

  const deleteTodo = (todoToDelete: string): void =>{
setTodoList(todoList.filter((todo) =>{
  return todo.todoText !== todoToDelete
}))
  }

  return (
    <div className="App">
      <div className="todo__container">
        <h3>Todo App</h3>
        <div className="input__container">
          <input
            type="text"
            onChange={e => setTodoText(e.target.value)}
            value={todoText}
          />
            <input
            type="number"
            onChange={e => setTodoNumber(Number((e.target.value)))}
            value={todoNumber}
          />
          <p className="input__container__add__button" onClick={addTodo}>+</p>
        </div>
        {todoList &&
          todoList.map((todo: ITask, key: number) => {
            return (
              <div className="todo__input__render__container">
                <p className="todo__input__data__container">
                  {todo.todoText}
                </p>
                <p className="todo__input__data__container">
                  {todo.todoNumber}
                </p>
                <p
                  className="todo__input__container__delete__button"
                  onClick={()=>{
                    deleteTodo(todo.todoText)
                  }}
                >
                  X
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
