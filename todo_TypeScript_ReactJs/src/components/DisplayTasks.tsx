import React, { SetStateAction } from "react";

interface TodoData {
  todoTask: string;
  isDone: boolean;
}

interface InputProps {
  todos: TodoData[];
  setTodos: React.Dispatch<SetStateAction<TodoData[]>>;
  activeTab: number;
}
function DisplayTasks({ todos, setTodos, activeTab }: InputProps) {
  const handleCheckBox = (index: number) => {
    const updatedTodos = todos.map((todo, i) => {
      return i == index ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index: number) => {
    setTodos((prev) => prev.filter((_todo, i) => i !== index));
  };

  const handleClearAllTodos = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };

  const filteredTodos =
    activeTab === 0
      ? todos
      : activeTab == 1
      ? todos.filter((todo) => todo.isDone == false)
      : todos.filter((todo) => todo.isDone == true);
  return (
    <div>
      <div className="displayTaskMainDiv">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((task, index) => (
            <div className="todoTaskSingle">
              <input
                type="checkbox"
                checked={task.isDone}
                onClick={() => handleCheckBox(index)}
              />
              <p
                key={index}
                className={task.isDone == true ? "hideTExt" : "taskPara"}
              >
                {task.todoTask}
              </p>
              <button
                className={task.isDone == true ? "VisibleBtn" : "HideBtn"}
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="noTodoAvailable">No Todos Available</p>
        )}
      </div>
      <div className="clearBtnDiv">
        <button className="button clearButton" onClick={handleClearAllTodos}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default DisplayTasks;
