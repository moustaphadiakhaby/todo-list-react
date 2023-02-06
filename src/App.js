import "./App.css";
import { useState } from "react";
import Task from "./components/Task";

import calculator from "./img/task.png";

function App() {
  const [tab, setTab] = useState([]);
  const [text, setText] = useState("");

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={calculator} alt="" />
        </div>
        <h1>Todo List</h1>
      </header>

      <div className="container">
        <div className="tasks">
          {tab.map((elem, index) => {
            return (
              <Task
                key={elem + " " + index}
                index={index}
                setTab={setTab}
                tab={tab}
                text={tab[index]}
              />
            );
          })}
        </div>
        <div className="inputask">
          <input
            onChange={(event) => {
              setText(event.target.value);
            }}
            className="textinput"
            type="text"
            name="task"
            placeholder="new task"
          />
          <button
            onClick={() => {
              const newTab = [...tab];
              newTab.push({ name: text, isDone: false });
              setTab(newTab);
            }}
            className="addtask"
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
