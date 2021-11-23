import "./styles.css";
import { useState } from "react";

export default function App() {
  const [task, settasks] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h2>Simple Todo List App</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          settasks([input, ...task]);
          setInput("");
        }}
      >
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
      <div className="container">
        {task.map((item, index) => {
          return (
            <p
              className="task"
              key={index}
              onClick={() => {
                settasks(
                  task.filter((del, ind) => {
                    return ind !== index;
                  })
                );
              }}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
