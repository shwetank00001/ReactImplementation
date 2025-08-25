import BarChart5 from "./admin/BarChart"

const AdminPage = () => {
  return (
    <div className='p-15'>
      <section className="text-white  font-semibold">
        <p className="text-xl md:text-3xl">Only users with <span className="text-yellow-500">'Admin Rights'</span> can see this page!</p>
        <p >Bar chart from MUI charts and data set generated using fakerJS.</p>
      </section>
      <div>
        <BarChart5 />
      </div>
    </div>
  )
}

export default AdminPage