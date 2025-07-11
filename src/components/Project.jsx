import { projectData } from "./projectArr"
import { Link } from "react-router"

const Project = () => {
  const projectList =  projectData.map((item)=> {
    return (
      <div>
        <Link to={`/project/${item}`} className="text-5xl sm:text-5xl md:text-6xl xl:text-8xl font-extrabold text-white ">{item}</Link>
      </div>
    )
  })
  return (
    <div className="p-15 grid grid-cols-1 sm:grid-cols-2 gap-5">
      {projectList}
    </div>
  )
}

export default Project