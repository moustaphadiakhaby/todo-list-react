const Task = ({ index, text, setTab, tab }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        value={text.name}
        checked={text.isDone}
        onChange={() => {
          const newTab = [...tab];
          newTab[index].isDone = !newTab[index].isDone;
          if (newTab[index].isDone) {
            newTab.splice(index, 1);
            newTab.push(text);
          }
          setTab(newTab);
        }}
      />
      <p className={text.isDone ? "lined" : ""}>{text.name}</p>
      <div
        onClick={() => {
          const newTab = [...tab];
          newTab.splice(index, 1);
          setTab(newTab);
        }}
        className="trash"
      ></div>
    </div>
  );
};

export default Task;
