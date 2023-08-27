import React, { useContext } from 'react';
import {
   PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line,
} from 'recharts';
import { AuthContext } from '../../Components/Provider/Authprovider';
import SheardBenner from '../AdminDashRoutes/AddaProduct/SheardBenner';


const Dashboard = () => {
   const { user } = useContext(AuthContext)
   console.log(user);
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
        name={user.displayName}
        subtitle={"Wellcome"}
        img={"https://i.ibb.co/cN24B75/banner.png"}
      ></SheardBenner>
         <div className="md:grid grid-cols-3 mx-auto w-[96%] md:w-[96%] md:space-x-8 my-5 md:my-12">
            <div className=" mb-8">
               <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
                  <h2 className="text-sm md:text-xl font-semibold mb-4  text-white">Sales Distribution by Category</h2>
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
               <div className="bg-gray-900 m-0 flex flex-col items-center md:p-6 rounded-lg text-white text-sm shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Sales Trends</h2>
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
               <div className="bg-gray-900 flex flex-col items-center md:p-6 rounded-lg shadow-md">
                  <h2 className="md:text-xl font-semibold mb-4 text-white text-sm">Monthly Sales Trend</h2>
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
               <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                  <h2 className="md:text-xl text-sm  font-semibold mb-4 text-white  text-center ">Weekly Sales Progress</h2>
                  <div className="relative h-4 bg-gray-300 rounded-lg overflow-hidden">
                     <div
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg"
                        style={{ width: `${weeklyProgress}%`, transition: 'width 0.5s ease-in-out' }}
                     />
                  </div>
                  <p className="mt-2 text-center  text-white text-sm md:text-md">{`${weeklyProgress}%`}</p>
               </div>
            </div>
            <div className="w-full md:w-1/3 mb-8">
               <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                  <h2 className="md:text-xl  text-sm font-semibold mb-4 text-white   text-center ">Monthly Sales Progress</h2>
                  <div className="relative h-4 bg-gray-300 rounded-lg overflow-hidden">
                     <div
                        className="absolute top-0 left-0 h-full bg-green-500 rounded-lg"
                        style={{ width: `${monthlyProgress}%`, transition: 'width 0.5s ease-in-out' }}
                     />
                  </div>
                  <p className="mt-2 text-center text-white text-sm md:text-md">{`${monthlyProgress}%`}</p>
               </div>
            </div>
            <div className="w-full md:w-1/3">
               <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                  <h2 className="md:text-xl  text-sm text-white font-semibold mb-4   text-center  ">Yearly Sales Progress</h2>
                  <div className="relative h-4 bg-gray-300 rounded-lg overflow-hidden">
                     <div
                        className="absolute top-0 left-0 h-full bg-yellow-500 rounded-lg"
                        style={{ width: `${yearlyProgress}%`, transition: 'width 0.5s ease-in-out' }}
                     />
                  </div>
                  <p className="mt-2 text-center text-white text-sm md:text-md ">{`${yearlyProgress}%`}</p>
               </div>
            </div>
         </div>
         <footer className="footer items-center p-12 mt-12  text-gray-900 bg-base-300">
            <div className="items-center grid-flow-col mt-">
               <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
               <p>Copyright © 2023 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
               <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
               </a>
               <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
               <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
         </footer>
      </div>
   );
};

export default Dashboard;
