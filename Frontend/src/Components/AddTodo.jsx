import React, { useState } from "react";

const AddTodo = ({ onhandle }) => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const handledate = (event) => {
    setDate(event.target.value);
  };
  const handlename = (event) => {
    setName(event.target.value);
  };
  const handleadditem = () => {
    onhandle(name, date);
    setName("");
    setDate("");
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <input
          type="text"
          value={name}
          className="border-solid border-2 "
          onChange={handlename}
        />
        <input
          type="date"
          value={date}
          className="border-solid border-2 "
          onChange={handledate}
        />
        <button
          className="h-8  bg-green-600 border-solid border-2"
          onClick={handleadditem}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddTodo;
