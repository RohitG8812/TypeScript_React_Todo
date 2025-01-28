import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/TodoContext";

function DisplayTasks() {
  const { todos, handleCheckBox, handleDeleteTodo, handleClearAllTodos } = useTodos();
  const [searchParams] = useSearchParams();
  const data = searchParams.get("todos");
  let filteredTodos = !data
    ? todos
    : data == "active"
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
                onClick={() => handleCheckBox(task.id)}
              />
              <p
                key={index}
                className={task.isDone == true ? "hideTExt" : "taskPara"}
              >
                {task.task}
              </p>
              <button
                className={task.isDone == true ? "VisibleBtn" : "HideBtn"}
                onClick={() => handleDeleteTodo(task.id)}
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
        <button
          className="button clearButton"
          onClick={handleClearAllTodos}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default DisplayTasks;
