import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {

    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()
    
    const users = props.users
    const setusers = props.setusers

    const navigate = useNavigate()

    const handleusername = (e)=> {
        seteusername(e.target.value)
    }

    const handlepassword = (e)=> {
        setepassword(e.target.value)
    }

    const handleAdd = ()=> {
       setusers([...users,{username:eusername,password:epassword}])
       navigate("/")
    }

  return (
    <div>
      <div className="bg-black p-10">
        <div className="bg-white p-10 rounded-md">
          <h1 className="text-3xl font-medium">Hey Hii</h1>
          <p>You can signup here:</p>

          <div className="my-5 flex flex-col gap-2">
            <input type="text"  placeholder="username" className="border border-black bg-transparent p-1 w-52 rounded-md" onChange={handleusername}/>
            <input type="text"  placeholder="password" className="border border-black bg-transparent p-1 w-52 rounded-md" onChange={handlepassword}/>
            <input type="text"  placeholder="confirm password" className="border border-black bg-transparent p-1 w-52 rounded-md"/>
            <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={handleAdd}>Signup</button>
            <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Signup;
