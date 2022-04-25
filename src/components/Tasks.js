const tasks = [{ text: 1 }, { text: 2 }, { text: 3 }];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
