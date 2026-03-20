import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <div>
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodo} />

      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
