import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import Welcomemsg from "./Components/Welcomemsg";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleAddTodo = (itemName, dueDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: dueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteTodo = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <div className=" border-slate-600 border-solid border-2 ">
        <AppName />
        <AddTodo onhandle={handleAddTodo} />
        {todoItems.length <= 0 && <Welcomemsg />}

        <TodoItems todoItems={todoItems} onclickhandler={handleDeleteTodo} />
      </div>
    </>
  );
}

export default App;
