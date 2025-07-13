//libraries
import { Route, Routes } from "react-router"

//My routing of components
import Homepage from "./components/Homepage"
import Project from "./components/Project"
import SingleProject from "./components/SingleProject"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/project/:name" element={<SingleProject />} />
    </Routes>
  )
}

export default App
