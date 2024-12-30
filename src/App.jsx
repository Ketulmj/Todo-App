import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdFormatListBulletedAdd } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on initial load or refresh
  useEffect(() => {
    const storedTodos = localStorage.getItem("todolist");
    if (storedTodos) {
      const todolist = JSON.parse(storedTodos);
      setTodos(todolist);
    }
  }, []);

  // Update localStorage whenever todos change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todolist", JSON.stringify(todos));
    } else {
      localStorage.removeItem("todolist");
    }
  }, [todos]);

  const addTodo = () => {
    if (todo.length > 0) {
      const newTodo = { id: uuidv4(), todo, isDone: false };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const editTodo = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    setTodo(todos[index].todo);
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      const newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);
    }
  };

  const changeDone = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    const updatedTodos = [...todos];
    updatedTodos[index].isDone = !updatedTodos[index].isDone;
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="mt-20 my-12 text-5xl md:text-7xl text-white font-mono">JUST DO IT!</div>
      <input
        type="text"
        className="w-60 md:w-80 my-5 mx-2 p-2 text-indigo-50 bg-black rounded"
        placeholder="Enter Your Task"
        onChange={handleTodo}
        value={todo}
      />
      <button
        className="mx-1 p-2.5 bg-black text-indigo-50 border rounded hover:border-slate-500 focus:border-indigo-300"
        onClick={addTodo}
      >
        <MdFormatListBulletedAdd />
      </button>

      {todos.map((item) => (
        <div key={item.id} className="relative flex m-auto my-2 max-w-2xl">
          <div className="flex w-10 md:max-w-30">
            <input
              type="checkbox"
              className="h-5 w-5 ml-3 p-4 self-center"
              checked={item.isDone}
              onChange={() => {
                changeDone(item.id);
              }}
            />
            </div>
            <div
              className={`todo-list p-2.5 text-lg font-sans ${item.isDone ? "line-through" : ""}`}
            >
              {item.todo}
          </div>
          <div className="absolute buttons self-center right-5">
            <button
              className="m-1 p-1.5 bg-black text-indigo-50 border rounded hover:border-slate-500 focus:border-indigo-300"
              onClick={() => {
                editTodo(item.id);
              }}
            >
              <CiEdit />
            </button>
            <button
              className="m-1 p-1.5 bg-black text-indigo-50 border rounded hover:border-slate-500 focus:border-indigo-300"
              onClick={() => {
                deleteTodo(item.id);
              }}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
