import { memo, useCallback, useMemo, useState } from "react";


const Task = memo(({ task, onToggle, onDelete, onEdit }) => {
  console.log(`Rendering Task: ${task.id}`);


  return (
    <div className="flex items-center mb-2">
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} className="mr-2" />
      <span className={task.completed ? "line-through text-gray-500" : "text-black"}>{task.text}</span>
      <button onClick={() => onDelete(task.id)} className="bg-slate-600 w-24 rounded-md h-6 ml-2 text-white">Delete</button>
      <button onClick={() => onEdit(task.id, task.text)} className="bg-slate-600 w-24 rounded-md h-6 ml-2 text-white">Edit</button>
    </div>
  );
});


const TaskList = () => {  
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false }
    // Add more initial tasks as needed
  ]);


  const [newTaskText, setNewTaskText] = useState("");
  const [editedTaskId, setEditedTaskId] = useState(null);



  const toggleTask = useCallback((taskId) => {
    setTasks(prevTasks => prevTasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  }, []
  )

  const deleteTask = useCallback((taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
  }, [])

  const editTask = useCallback((taskId, initialText) => {
    setEditedTaskId(taskId);
    setNewTaskText(initialText);
  }, []);

  const handleSave = () => {
    if (editedTaskId !== null) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editedTaskId ? { ...task, text: newTaskText } : task
        )
      );
      setEditedTaskId(null);
      setNewTaskText(""); 
    }
  } 
  
  
  
  
  
  const addTask = () => {
    if (newTaskText.trim() !== "") {
      setTasks(prevTasks => [...prevTasks, { id: prevTasks.length + 1, text: newTaskText, completed: false }]);
      setNewTaskText("");
    }
  };




  const memoizedTaskList = useMemo(() => tasks.map(task => <Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />), [tasks])


  return (
    <div className="flex flex-col space-y-5 w-[50vw] mx-auto mt-8 p-4 bg-gray-100 rounded shadow">
      <h2 className="text-2xl mb-4">To-Do List</h2>
      <div className="mt-4 flex">
        <input type="text" value={newTaskText} onChange={e => setNewTaskText(e.target.value)} className="flex-1 p-2 border" />
        {editedTaskId !== null ? (
          <button onClick={handleSave} className="ml-2 p-2 bg-slate-500 text-white rounded">
            Save
          </button>
        ) : (
          <button onClick={addTask} className="ml-2 p-2 bg-slate-500 text-white rounded">
            Add Task
          </button>
        )}

      </div>
      <hr />
      <div>{memoizedTaskList}</div>
    </div>
  );
};


export default memo(TaskList);
