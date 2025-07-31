import { BarChart } from '@mui/x-charts/BarChart';
import {chartData} from '../../../../../chartData'
import { useState } from 'react';

const BarChart5 = () => {

    // const [value, setValues] = useState(chartData);
    // const barMap = value.map(function(item){
    //     return (
    //         <BarChart
    //         xAxis={[{ id: 'names', data: [item.name], scaleType: 'band' }]}
    //         series={[{ data: [item.salary] }]}
    //         height={400}
    //         />

    //     )
    // })
    const chartNames = chartData.map((i) => i.name);
    const chartSalary = chartData.map((s) => s.salary);
    console.log(chartSalary);



    return (
        <div className='bg-white rounded-2xl p-5 mt-5'>
            <BarChart
                xAxis={[
                    {
                    id: 'barCategories',
                    data: chartNames ,
                    label: "Friends"
                    },
                ]}
                series={[
                    {
                    data: chartSalary,
                    colorByCategory: true,
                    },
                ]}
                height={500}
            />
        </div>
    )
}

export default BarChart5