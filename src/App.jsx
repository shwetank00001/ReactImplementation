//libraries
import { Route, Routes } from "react-router"

//My routing of components
import Homepage from "./components/Homepage"
import Project from "./components/Project"
import SingleProject from "./components/SingleProject"
import { useState } from "react"

import AdvancedProject from "./components/AdvancedProject";
import AdvancedSingleProject from "./components/AdvancedSingleProject"

import { globalContext } from "./components/globalContext"



function App() {
    const [auth, setAuth] = useState(false);
  return (
    <globalContext.Provider value={{auth, setAuth}} >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/project/:name" element={<SingleProject />} />

        <Route path="/advanced/projectlist" element={<AdvancedProject />}/>
        <Route path="/advanced/project/:appName" element={<AdvancedSingleProject />} />
      </Routes>
    </globalContext.Provider>
  )
}

export default App
