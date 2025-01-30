import { useEffect, useState } from "react";
import Home from "./components/Home";
import TabNavigation from "./components/TabNavigation";
import Input from "./components/Input";
import DisplayTasks from "./components/DisplayTasks";

interface TodoData {
  todoTask: string;
  isDone: boolean;
}

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [todos, setTodos] = useState<TodoData[]>([]);

  //? setting todos to LocalStorage
  useEffect(() => {
    if (todos.length > 0) {
      console.log("Todos Saved on LocalStorage");
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  //? getting Todos from LocalStorage
  useEffect(() => {
    let storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div className="mainSection">
      <Home />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <Input todos={todos} setTodos={setTodos} name={"ROhit"}/>
      <DisplayTasks todos={todos} setTodos={setTodos} activeTab={activeTab} />
    </div>
  );
}

export default App;
