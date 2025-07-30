import { useContext } from "react"
import { projectData } from "./projectArr"
import { Link } from "react-router"
import { globalContext } from "./globalContext"

const Project = () => { 

      // const arr = ["red","blue", "amber", "sky", "emerald", "purple"];
    // const randColor = Math.floor(Math.random() * arr.length);
    const {lightMode} = useContext(globalContext);
    console.log(lightMode)

    const projectList =  projectData.map((item)=> {
      return (
        <div>
          <Link to={`/project/${item}`} className={`text-5xl sm:text-5xl md:text-6xl xl:text-8xl font-extrabold text-white `}>{item}</Link>
        </div>
      )
    })

    // const bgColor = lightMode ? "#ffffff":"#0f0f0f";
    // const textColor = lightMode ? "red":"blue";

    // const styles = {
    //   backgroundColor: bgColor,
    //   color: textColor
    // }
  return (
    <div  className={`p-15 grid grid-cols-1 sm:grid-cols-2 gap-5`}>
      {projectList}
    </div>
  )
}

export default Project