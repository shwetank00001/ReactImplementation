import { Button } from "@/components/ui/button";
import { Link } from "react-router";


const Homepage = () => {
  return (
    <div className=" p-15 flex flex-col gap-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold text-white ">Welcome to <span className="text-purple-600">Shwetank's </span><span className="text-blue-500">React ⚛️</span> cluster!🛸</h1>
        <p className="text-xl">This website contains my idea and logic of everything that I have learnt in the past year. This is my best project and this has every <span className="text-white">React Hook.</span></p>
        <div>
          <Button className="hover:cursor-pointer" variant="homepage"><Link to={'/projects'}>Click here</Link></Button>
        </div>
    </div>
  )
}

export default Homepage