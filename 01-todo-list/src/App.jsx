import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const randomId = () => Date.now() + Math.random();

  const handleAddClick = () => {
    if (task.length > 0) {
      const newTodos = [
        ...todos,
        { id: randomId(), task: task.trim(), done: false },
      ];
      setTodos(newTodos);
      setTask("");
    } else {
      alert("Enter something you cant submit empty tasks");
    }
  };

  const handleDeletClick = (todoId) => {
    const newTodos = todos.filter((todo) => todoId !== todo.id);
    setTodos(newTodos);
  };

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditedTask(todo.task);
  };

  const handleSaveClick = (todoId) => {
    if (editedTask.length > 0) {
      const newTodos = todos.map((todo) =>
        todoId === todo.id ? { ...todo, task: editedTask.trim() } : todo
      );
      setTodos(newTodos);
      setEditId(null);
      setEditedTask("");
    } else {
      alert("Cant save empty tasks");
    }
  };

  const handleTaskDone = (todoId) => {
    const newTodos = todos.map((todo) => {
      return todo.id === todoId ? { ...todo, done: !todo.done } : todo;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <div id="main-body">
        <h1 className="title">Todo App</h1>

        <div id="add-task">
          <input
            type="text"
            placeholder="Add your task here..."
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button className="add-btn" onClick={handleAddClick}>
            Add
          </button>
        </div>
        <div id="todo-list">
          <ul>
            {todos.map((todo) => {
              return (
                <>
                  <li key={todo.id}>
                    <input
                      type="checkbox"
                      checked={todo.done}
                      onChange={() => handleTaskDone(todo.id)}
                    />
                    {editId === todo.id ? (
                      <>
                        <input
                          type="text"
                          value={editedTask}
                          onChange={(e) => setEditedTask(e.target.value)}
                        />
                        <button
                          className="save-btn"
                          onClick={() => handleSaveClick(todo.id)}
                        >
                          Save
                        </button>
                      </>
                    ) : (
                      <>
                        {todo.task}
                        <button
                          className="delete-btn"
                          onClick={() => handleDeletClick(todo.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="edit-btn"
                          onClick={() => handleEditClick(todo)}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
