import { useState } from "react"

function AddTodoForm(props){

    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr
    const [newactivity,setnewactivity] = useState("")

    const handleChange = (e)=> {
        setnewactivity(e.target.value)
    }

    const handleAdd = ()=> {

        setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
        setnewactivity("")
    }

    return(

        <div className="flex flex-col gap-3">
        <h1 className="font-medium text-2xl">Manage Activities</h1>

        <div>
            <input type="text" value={newactivity} onChange={handleChange} placeholder="Next activity" className="p-1 border border-black bg-transparent" />
            <button className="border border-black p-1 bg-black text-white" onClick={handleAdd}>Add</button>
        </div>
      </div>
    )
}

export default AddTodoForm