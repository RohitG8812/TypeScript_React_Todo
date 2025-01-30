import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Todo = {
  id: string;
  task: string;
  isDone: boolean;
  date: Date;
};

interface InputProps {
  children: ReactNode;
}

interface TodosContext {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  handleCheckBox: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleClearAllTodos: () => void;
}

export const todoContext = createContext<TodosContext | null>(null);

export const TodoProvider = ({ children }: InputProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (todos.length > 0) {
      console.log("Todos saved to LocalStorage");
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    let storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      console.log("Todos get from LocalStorage");
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleAddTodo = (task: string) => {
    setTodos((prev: Todo[]) => [
      {
        id: (Math.random() * 11).toString(),
        task: task,
        isDone: false,
        date: new Date(),
      },
      ...prev,
    ]);
  };

  const handleCheckBox = (id: string) => {
    const updatedTodo = todos.map((todo) => {
      return id == todo.id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(updatedTodo);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
  };

  const handleClearAllTodos = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };
  console.log(todos);
  return (
    <todoContext.Provider
      value={{
        todos,
        handleAddTodo,
        handleCheckBox,
        handleDeleteTodo,
        handleClearAllTodos,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useTodos = () => {
  const todoConsumer = useContext(todoContext);
  if (!todoConsumer) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return todoConsumer;
};
