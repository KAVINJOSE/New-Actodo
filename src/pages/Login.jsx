import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props){

    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()
    const [ruser,setruser] = useState(true)

    const users = props.users
    const setusers = props.setusers

    const navigate = useNavigate()

    const checkuser = ()=> {

        var userfound = false

        users.forEach((item)=> {
            
            if(item.username === eusername && item.password === epassword){
                console.log("Login successful")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }

            if(userfound === false){
                console.log("Login failed")
                setruser(false)
            }


    })

}



    const handleusername = (e)=> {
        seteusername(e.target.value)
    }

    const handlepassword = (e)=> {
        setepassword(e.target.value)
    }


    return(
        <div>
        <div className="bg-black p-10">
          <div className="bg-white p-10 rounded-md">
            <h1 className="text-3xl font-medium">Hey Hii</h1>

            {
                ruser? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please signup before login :)</p>
            }
           
  
            <div className="my-5 flex flex-col gap-2">
              <input type="text"  placeholder="username" className="border border-black bg-transparent p-1 w-52 rounded-md" onChange={handleusername}/>
              <input type="text"  placeholder="password" className="border border-black bg-transparent p-1 w-52 rounded-md " onChange={handlepassword}/>
             
              <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>
              <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
            </div>
  
            
          </div>
        </div>
      </div>
    )
}

export default Login