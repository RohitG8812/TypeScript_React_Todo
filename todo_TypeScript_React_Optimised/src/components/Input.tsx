import React, { useState } from "react";
import { useTodos } from "../store/TodoContext";

function Input() {
  const [value, setValue] = useState("");

  const { handleAddTodo } = useTodos();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputText = e.target.value;
    setValue(inputText);
  };

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(value);
    setValue("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmitForm}>
        <div className="inputSection">
          <input
            type="text"
            name="text"
            className="input"
            placeholder="add ToDo Tasks..."
            value={value}
            onChange={handleInputChange}
          />
          <button className="button" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
