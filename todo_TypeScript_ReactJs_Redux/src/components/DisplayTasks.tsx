import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { deleteAllTodo, deleteTodo, toggleTodo } from "../redux/TodoSlice";

function DisplayTasks() {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

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
                onClick={() => dispatch(toggleTodo(task.id))}
              />
              <p
                key={index}
                className={task.isDone == true ? "hideTExt" : "taskPara"}
              >
                {task.task}
              </p>
              <button
                className={task.isDone == true ? "VisibleBtn" : "HideBtn"}
                onClick={() => dispatch(deleteTodo(task.id))}
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
          onClick={() => dispatch(deleteAllTodo())}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default DisplayTasks;
