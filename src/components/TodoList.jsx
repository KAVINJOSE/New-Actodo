import { useState } from "react"
import TodoItem from "./TodoItem"

function TodoList(props){

    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    return(
        
      <div className="bg-[#BDB4EA] rounded-md p-3 flex-grow">
      <h1 className="text-2xl font-medium">Today's Activity</h1>

      {
        activityarr.length===0 ? <p>You haven't added anything</p> : " "
      }

      {
        activityarr.map((item,index)=> {
           return <TodoItem  index = {index} id={item.id} item = {item.activity} activityarr = {activityarr} setactivityarr = {setactivityarr} />
        })
      }
      
      </div>
    )
}

export default TodoList