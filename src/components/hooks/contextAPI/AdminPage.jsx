import BarChart5 from "./admin/BarChart"

const AdminPage = () => {
  return (
    <div className='p-15'>
      <section className="text-yellow-200 text-3xl font-semibold">
        <p>Only admins can see this page!</p>
        <p>Bar chart from MUI charts and data set generated using fakerJS.</p>
      </section>
      <div>
        <BarChart5 />
      </div>
    </div>
  )
}

export default AdminPage