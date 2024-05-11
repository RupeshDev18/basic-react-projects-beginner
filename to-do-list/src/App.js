import './App.css';
import {useState, useRef} from "react";

function App() {
  const [toDo,setToDo]=useState([]);
  const [currTask,setCurrTask]=useState("");

  const inputTask=useRef(null);
  const addTask=()=>{
    setToDo([...toDo , {task:currTask, completed:false}]);
    inputTask.current.value="";
    setCurrTask("");
  }

  const deleteTask=(taskToDelete)=>{
    setToDo(toDo.filter((task)=>{
      return task.task!==taskToDelete;
    }))
  }

  const completeTask=(taskToComplete)=>{
    setToDo(
      toDo.map((task)=>{
      return task.task === taskToComplete
       ? {task:taskToComplete,completed:true}
       :{task:task.task,completed:task.completed?true:false};
    })
    );
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input ref={inputTask}
        onKeyDown={(e)=>{
          if(e.keyCode===13) addTask();
        }}
        type="text" placeholder="Task..." onChange={(event)=>{setCurrTask(event.target.value)}}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul>
        {toDo.map((val,key)=>{
          return (
          <div id="task">
            <li key={key}>{val.task}</li>
            <button onClick={()=>completeTask(val.task)}>completed</button>
            <button onClick={()=>deleteTask(val.task)}>X</button>
            {val.completed ?<h1>Task completed</h1> : <h1>Task Not completed</h1>}
          </div>
          
          )
        })}
      </ul>
    </div>
  );
}

export default App;
