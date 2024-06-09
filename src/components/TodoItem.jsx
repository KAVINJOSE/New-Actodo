function TodoItem(props){

    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    const handleDelete = (removeid)=> {

        var temparr = activityarr.filter((item)=> {
            if(item.id == removeid){
                return false
            }

            else{
                return true
            }
        })

        setactivityarr(temparr)
    }


    return(

        <div className="flex justify-between">

           <p>{props.index+1}. {props.item}</p>
           <button className="text-red-500" onClick={()=> handleDelete(props.id)}>Delete</button>

        </div>

    )
        
}

export default TodoItem