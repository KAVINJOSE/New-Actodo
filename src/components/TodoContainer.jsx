import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import {useState } from "react";

function TodoContainer() {

    const [activityarr,setactivityarr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },

        {
            id:2,
            activity:"Go for a run"
        }
    ])

  return (
    <div>

        <div className="flex gap-3 flex-wrap">

        
           <AddTodoForm activityarr = {activityarr} setactivityarr = {setactivityarr} />
           <TodoList activityarr = {activityarr} setactivityarr = {setactivityarr}/>

        </div>
     
    </div>
  );
}

export default TodoContainer;
