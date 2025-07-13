import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useRef } from "react"
import { useNavigate } from "react-router";
import { toast } from "sonner"
import SignupImage from '../../../assets/Sign.png'

const SignUp = () => {

    const [email, setEmail] = useState('');
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const nav = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      if(email && passwordRef.current.value === confirmPasswordRef.current.value){
        window.localStorage.setItem("email", email)
        window.localStorage.setItem("password", passwordRef.current.value)
        window.localStorage.setItem("confirmedPassword", confirmPasswordRef.current.value);
        toast("Sucess. Redirecting you in 1second.");
        setTimeout(() => {
          nav('/project/login')
        }, 1000) 
      }


      if(passwordRef.current.value !== confirmPasswordRef.current.value){
        toast("Passwords Don't match. Re-type!")
      }
    }

    //bg-[url("/assets/SignupSnippet.png")] bg-cover bg-center w-full

    return (
          <div className='p-15 h-dvh '>   
          <form onSubmit={handleSubmit} >
            <div className=" grid :grid-cols-2 lg:grid-cols-3 gap-5 font-semibold">
              <div>
                  <Label htmlFor="email" className=" text-3xl sm:text-5xl md:text-6xl text-fuchsia-600 font-bold">Email:</Label>
                  <Input id="email" className='mt-3 border-2' placeholder = "Enter user name" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div>
                  <Label htmlFor="pass" className=" text-3xl sm:text-5xl md:text-6xl  text-indigo-500 font-bold">Password:</Label>
                  <Input htmlFor="pass" className='mt-3 border-2' placeholder="Password :D" type="text" ref={passwordRef} required />
              </div>
              <div>
                  <Label htmlFor="cnf" className=" text-3xl sm:text-5xl md:text-6xl  text-indigo-500 font-bold">Confirm:</Label>
                  <Input htmlFor="cnf" className='mt-3 border-2' placeholder="Re-type your Password" type="text" ref={confirmPasswordRef}  required/>
              </div>
            </div>
              <Button type="submit" className= "mt-5 sm:text-xl bg-indigo-600 hover:bg-amber-200 hover:text-black hover:cursor-pointer" >Submit</Button>
          </form>
          <div className="mt-5">
            <img src={SignupImage} />
          </div>
      </div>
    )
}

export default SignUp