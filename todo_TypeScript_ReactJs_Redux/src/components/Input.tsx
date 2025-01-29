import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";

function Input() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputText = e.target.value;
    setValue(inputText);
  };

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value !== "") {
      dispatch(addTodo(value));
      setValue("");
    } else {
      alert("Please Enter Something in Input Box first");
    }
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
