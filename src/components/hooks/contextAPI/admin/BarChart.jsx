import { BarChart } from '@mui/x-charts/BarChart';
import {chartData} from '../../../../../public/chartData'
import { useState } from 'react';

const BarChart5 = () => {
    const chartNames = chartData.map((i) => i.name);
    const chartSalary = chartData.map((s) => s.salary);
    console.log(chartSalary);


  const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#84cc16', '#e11d48'];

    return (
        <div className='bg-white rounded-2xl p-5 mt-5'>
            <BarChart
                xAxis={[
                    {
                    id: 'barCategories',
                    data: chartNames ,
                    label: "Friends",
                    },
                ]}
                series={[
                    {
                    data: chartSalary,
                    },
                ]}
                height={500}
                grid={{ vertical: true, horizontal: true }}
                
            />
        </div>
    )
}

export default BarChart5