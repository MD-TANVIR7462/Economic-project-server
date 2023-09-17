import React, { useContext } from 'react';
import {
   PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line,
} from 'recharts';
import { AuthContext } from '../../Components/Provider/Authprovider';
import SheardBenner from '../AdminDashRoutes/AddaProduct/SheardBenner';


const Dashboard = () => {
   const { user } = useContext(AuthContext)
   const pieData = [
      { name: 'Men', value: 300 },
      { name: 'Women', value: 450 },
      { name: 'Kids', value: 200 },
   ];

   const barData = [
      { month: 'Jan', sales: 350, men: 120, women: 90, kids: 140 },
      { month: 'Feb', sales: 420, men: 150, women: 120, kids: 150 },
      { month: 'Mar', sales: 560, men: 200, women: 120, kids: 240 },
      { month: 'Apr', sales: 300, men: 100, women: 80, kids: 120 },
      { month: 'May', sales: 650, men: 220, women: 170, kids: 260 },
      { month: 'Jun', sales: 500, men: 180, women: 120, kids: 200 },
   ];

   const lineChartData = [
      { month: 'Jan', sales: 350 },
      { month: 'Feb', sales: 420 },
      { month: 'Mar', sales: 560 },
      { month: 'Apr', sales: 300 },
      { month: 'May', sales: 650 },
      { month: 'Jun', sales: 500 },
   ];

   const customerData = [
      { category: 'Men', count: 450 },
      { category: 'Women', count: 650 },
      { category: 'Kids', count: 300 },
   ];

   const weeklyProgress = 60;
   const monthlyProgress = 75;
   const yearlyProgress = 50;

   return (
      <div className=" min-h-screen ">
        <SheardBenner
        name={user?.displayName}
        subtitle={"Wellcome"}
        img={"https://i.ibb.co/cN24B75/banner.png"}
      ></SheardBenner>
        {
         user?<>
          <div className="md:grid grid-cols-3 mx-auto w-[96%] md:w-[96%] md:space-x-8 my-5 md:my-12">
            <div className=" mb-8">
               <div className="bg-[#171618] p-6 rounded-lg shadow-lg flex flex-col items-center">
                  <h2 className="text-sm md:text-xl font-semibold mb-4  ">Sales Distribution by Category</h2>
                  <div className="chart-container">
                     <PieChart width={300} height={300}>
                        <Pie
                           dataKey="value"
                           data={pieData}
                           cx="50%"
                           cy="50%"
                           outerRadius={80}
                           fill="#8884d8"
                           label={({ name, value }) => `${name} (${((value / pieData.reduce((acc, curr) => acc + curr.value, 0)) * 100).toFixed(0)}%)`}
                        />
                        <Tooltip />
                     </PieChart>
                  </div>
               </div>


            </div>
            <div className="mb-8">
               <div className="bg-[#171618] m-0 flex flex-col items-center md:p-6 rounded-lg  text-sm shadow-md">
                  <h2 className="text-sm md:text-xl  pt-3 font-semibold mb-2">Sales Trends</h2>
                  <BarChart className="w-full" width={300} height={300} data={barData}>
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="month" />
                     <YAxis />
                     <Tooltip />
                     <Legend />
                     <Bar dataKey="men" fill="#6EE7B7" name="Men" />
                     <Bar dataKey="women" fill="#5C67E5" name="Women" />
                     <Bar dataKey="kids" fill="#FEBB2E" name="Kids" />
                  </BarChart>
               </div>
            </div>



            <div className=" mb-8">
               <div className="bg-[#171618] flex flex-col items-center md:p-6 rounded-lg shadow-md">
                  <h2 className="md:text-xl  font-semibold mb-2 pt-2  text-sm">Monthly Sales Trend</h2>
                  <LineChart width={300} height={300} data={lineChartData} >
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="month" />
                     <YAxis />
                     <Tooltip />
                     <Legend />
                     <Line type="monotone" dataKey="sales" stroke="#F3705A" name="Sales" />
                  </LineChart>
               </div>
            </div>




         </div>

         <div className="flex flex-col w-[96%] mx-auto md:flex-row md:space-x-8">
            <div className="w-full md:w-1/3 mb-8">
               <div className="bg-[#171618] p-6 rounded-lg shadow-md">
                  <h2 className="md:text-xl text-sm  font-semibold mb-4   text-center ">Weekly Sales Progress</h2>
                  <div className="relative h-4 bg-[#171618] rounded-lg overflow-hidden">
                     <div
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg"
                        style={{ width: `${weeklyProgress}%`, transition: 'width 0.5s ease-in-out' }}
                     />
                  </div>
                  <p className="mt-2 text-center   text-sm md:text-md">{`${weeklyProgress}%`}</p>
               </div>
            </div>
            <div className="w-full md:w-1/3 mb-8">
               <div className="bg-[#171618] p-6 rounded-lg shadow-md">
                  <h2 className="md:text-xl  text-sm font-semibold mb-4    text-center ">Monthly Sales Progress</h2>
                  <div className="relative h-4 bg-gray-300 rounded-lg overflow-hidden">
                     <div
                        className="absolute top-0 left-0 h-full bg-green-500 rounded-lg"
                        style={{ width: `${monthlyProgress}%`, transition: 'width 0.5s ease-in-out' }}
                     />
                  </div>
                  <p className="mt-2 text-center  text-sm md:text-md">{`${monthlyProgress}%`}</p>
               </div>
            </div>
            <div className="w-full md:w-1/3">
               <div className="bg-[#171618] p-6 rounded-lg shadow-md">
                  <h2 className="md:text-xl  text-sm  font-semibold mb-4   text-center  ">Yearly Sales Progress</h2>
                  <div className="relative h-4 bg-gray-300 rounded-lg overflow-hidden">
                     <div
                        className="absolute top-0 left-0 h-full bg-yellow-500 rounded-lg"
                        style={{ width: `${yearlyProgress}%`, transition: 'width 0.5s ease-in-out' }}
                     />
                  </div>
                  <p className="mt-2 text-center  text-sm md:text-md ">{`${yearlyProgress}%`}</p>
               </div>
            </div>
         </div>
         </>: (
        <p className="flex items-center justify-center h-[45dvh] md:h-[60dvh]   text-center ">
          {" "}
          <button className="btn bg-gray-400 ">
            <span className="loading loading-spinner"></span>
            loading
          </button>
        </p>
      )}
      {!user&& (
        <div className="flex items-center h-[45dvh] md:h-[60dvh] justify-center font-semibold text-primary-300 text-center">
          <span className="  text-center text-gray-500 btn no-animation  text-sm md:text-xl ">
            You Did't Bookmark Any Product Yet.
          </span>
        </div>
      )}
        
        <footer className="footer footer-center p-4 bg-[#171618]  mt-5">
  <aside>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
      </div>
   );
};

export default Dashboard;
