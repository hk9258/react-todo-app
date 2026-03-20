import { useState } from "react";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (input.trim() === "") return;

    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoForm;
