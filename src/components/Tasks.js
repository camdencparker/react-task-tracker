import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "mow lawn" },
    { id: 2, text: "feed fish" },
    { id: 3, text: "watch F1" },
  ]);
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
