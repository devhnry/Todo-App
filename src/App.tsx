import { useState, useEffect} from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoFilter from "./Components/TodoFilter";
import Header from "./Components/Header";

export default function App() {
  const [theme, setTheme] = useState("");
  const [category, setCategory] = useState("All");
  const [todo, setTodo] = useState<TodoItem[]>([]);

  type TodoItem = {
    id: number;
    task: string;
    checked: boolean;
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme : dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleTodoCheck = (id: number) => {
    setTodo((todo) => {
      return todo.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
    });
  };

  const handleDeleteTask = (id: number) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const handleClearTask = () => {
    const updatedTodo = todo.filter((item) => !item.checked);
    setTodo(updatedTodo);
  };

  const toggleCategory = (category: string) => {
    setCategory(category);
  };

  const renderedTodo = (selectedCategory: string) => {
    let filteredTodo = todo;
    if (selectedCategory === "All") {
      filteredTodo = todo;
    } else if (selectedCategory === "Active") {
      filteredTodo = todo.filter((item) => !item.checked);
    } else if (selectedCategory === "Completed") {
      filteredTodo = todo.filter((item) => item.checked);
    }
    if (filteredTodo.length > 0) {
      return filteredTodo;
    } else {
      return [];
    }
  };

  return (
    <main>
      <Header />
      <div className="px-6 sm:px-0 pt-12 sm:pt-14 md:pt-16 lg:pt-18 xl:pt-20 max-w-[540px] w-full mx-auto">
        <TodoForm
          onSubmit={(data) => {
            setTodo([
              ...todo,
              {
                id: todo.length + 1,
                ...data,
                checked: false,
              },
            ]);
          }}
          onClick={handleThemeSwitch}
          mode={theme}
        />
        <TodoList
          todo={renderedTodo(category)}
          onClick={handleTodoCheck}
          onDelete={handleDeleteTask}
          onClear={handleClearTask}
          filterClick={toggleCategory} 
          selectCategory={category}
        />
        <div className="sm:hidden">
          <TodoFilter onClick={toggleCategory} selectedCategory={category} />
        </div>
      </div>
    </main>
  );
}
