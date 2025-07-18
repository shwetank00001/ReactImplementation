import React, {useState} from 'react';
import { chartData } from '../../../../chartData'

const AdminPage = () => {
  const [chartList, setList] = useState(chartData);
  console.log(chartList)

  return (
    <div>AdminPage</div>
  )
}

export default AdminPage