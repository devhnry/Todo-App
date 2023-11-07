import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoFilter from "./Components/TodoFilter";
import Header from "./Components/Header";

export default function App() {
  const [category, setCategory] = useState("All");
  const [todo, setTodo] = useState([
    {
      id: 1,
      task: "Complete online JavaScript course",
      checked: false,
    },
    {
      id: 2,
      task: "Jog around the park 3x",
      checked: false,
    },
  ]);

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
    console.log(category);
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
            console.log(todo);
          }}
        />
        <TodoList
          todo={renderedTodo(category)}
          onClick={handleTodoCheck}
          onDelete={handleDeleteTask}
          onClear={handleClearTask}
        />
        <TodoFilter onClick={toggleCategory} selectedCategory={category} />
      </div>
    </main>
  );
}
