import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router";
import { toast } from "sonner"
import LoginImage from '../../../assets/Login.png'

const Login = () => {

    const [email, setEmail] = useState('');
    const passwordRef = useRef(null);

    const nav = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      if(email === window.localStorage.getItem("email") && passwordRef.current.value === window.localStorage.getItem("password")){
        toast("Authorization Granted!");
        setTimeout(() => {
          nav('/project/admin')
        }, 1000) 
      }

      else if(!email){
        toast("Invalid Email Address")
      }

      else if(passwordRef.current.value !== window.localStorage.getItem("password")){
        toast("Invalid credentials entered. Re-type!");
      }
    }

    //bg-[url("/assets/SignupSnippet.png")] bg-cover bg-center w-full

    return (
        <div className='p-15 h-dvh '>   
          <form onSubmit={handleSubmit} >
            <div className=" grid lg:grid-cols-2 gap-5 font-semibold">
              <div>
                  <Label htmlFor="email" className=" text-3xl sm:text-5xl md:text-6xl text-sky-400 font-bold">Email:</Label>
                  <Input id="email" className='mt-3 border-2' placeholder = "Enter user name" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                  <Label htmlFor="pass" className=" text-3xl sm:text-5xl md:text-6xl  text-indigo-500 font-bold">Password:</Label>
                  <Input htmlFor="pass" className='mt-3 border-2' placeholder="Password :D" type="text" ref={passwordRef} required />
              </div>
            </div>
              <Button type="submit" className= "mt-5 sm:text-xl bg-indigo-600 hover:bg-sky-400 hover:text-black hover:cursor-pointer" >Login</Button>
          </form>
          <div className="mt-5">
            <p className="text-white">New user? Create your account <Link className="underline font-semibold text-fuchsia-600" to={'/project/signup'}>here</Link>.</p>
          </div>

        <div className="mt-5">
            <img src={LoginImage} />
        </div>
      </div>
    )
}

export default Login