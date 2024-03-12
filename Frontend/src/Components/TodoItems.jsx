import React from "react";

const TodoItems = ({ todoItems, onclickhandler }) => {
  return (
    <>
      {todoItems.map((Items, key) => (
        <div key={key} className="grid grid-cols-3 gap-2">
          <h6>{Items.name}</h6>
          <h6>{Items.dueDate}</h6>
          <button
            className="h-8  bg-red-600 border-solid border-2"
            onClick={() => onclickhandler(Items.name)}
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoItems;
