import EarningsGraph from "../../components/admin/EarningsGraph"
import GigsGraph from "../../components/admin/GigsGraph"
import GlassBarChart from "../../components/admin/GlassBarChart"
import UsersGraph from "../../components/admin/UsersGraph"

function AdminDashboard() {
    return (
      <div className="flex justify-center lg:justify-start">
  <div className="min-h-screen lg:w-[75%] p-5 flex flex-col lg:flex-row mt-[8rem] lg:ml-[20rem]">
    {/* Main Content */}
    <div className="right-content w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-5">
      {/* Earnings Graph */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-2 glass rounded-xl flex flex-col p-4">
        <EarningsGraph />
      </div>

      {/* Users Graph */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-2 glass rounded-xl flex flex-col p-4">
        <UsersGraph />
      </div>

      {/* Gigs Graph */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-2 glass rounded-xl flex flex-col p-4">
        <GigsGraph />
      </div>

      {/* Bar Chart (Larger Graph) */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 glass rounded-xl flex items-center p-4">
        <GlassBarChart />
      </div>

      {/* Placeholder for Additional Content */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 glass rounded-xl p-4"></div>
    </div>
  </div>
</div>

    )
  }
  
  export default AdminDashboard
  