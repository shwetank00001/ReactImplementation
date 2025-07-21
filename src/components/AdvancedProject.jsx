import { Link } from 'react-router';


const AdvancedProject = () => {

  const advancedList = [
    {
      label:"ChatApp",
      name: "Chat Application with Socket.io and useCallbacks"
    },
    {
      label:"zustandEcom",
      name: "Zustand E Commerce with Stripe integration"
    },
    {
      label:"chartDashboard",
      name: "Dashboard with multiple charts"
    }]
  
  const ele = advancedList.map(function(item){
    return (
      <div>
        <Link to={`/advanced/project/${item.label}`}>{item.name}</Link>
        
      </div>
    )
  })
  return (
    <div className='p-15 text-5xl grid grid-cols-2 gap-5'>
      {ele}
    </div>
  )
}

export default AdvancedProject