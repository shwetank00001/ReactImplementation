import { useParams } from "react-router"
import ChatApp from "@/advanced/ChatApp/ChatApp";
import DashGraph from "@/advanced/DashGraph";
import ZustandEcom from "@/advanced/ZustandEcom";



const AdvancedSingleProject = () => {
  const {appName} = useParams();

  console.log(appName);

  switch(appName){
    case 'ChatApp':
      return <ChatApp />

    case 'zustandEcom':
      return <ZustandEcom />
    
    case 'chartDashboard':
      return <DashGraph/>
  }


}

export default AdvancedSingleProject