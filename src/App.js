import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "mow lawn", time: "Tuesday" },
    { id: 2, text: "feed fish", time: "Wednesday" },
    { id: 3, text: "watch F1", time: "Sunday" },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
