import React, { SetStateAction, useState } from "react";

interface TodoData {
  todoTask: string;
  isDone: boolean;
}

interface InputProps {
  todos: TodoData[];
  setTodos: React.Dispatch<SetStateAction<TodoData[]>>;
}

function Input({ setTodos }: InputProps) {
  const [value, setValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputText = e.target.value;
    setValue(inputText);
  };

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, { todoTask: value, isDone: false }]);
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
