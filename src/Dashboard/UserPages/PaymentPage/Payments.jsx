import { useContext, useEffect, useState } from "react";
import { FaUserEdit, FaRegTrashAlt } from "react-icons/fa";
import SheardBenner from "../../AdminDashRoutes/AddaProduct/SheardBenner";
import { AuthContext } from "../../../Components/Provider/Authprovider";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [img,setImage]=useState([]);

  const { user } = useContext(AuthContext);


  const openModal = (img) => {
   
    setImage(img)
    setIsOpen(true);
   };

  const closeModal = () => {
    setIsOpen(false);

  };
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/tranjection?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setPayments(data));
    }
  }, [user]);

  const convertDateTimeToYear = (dateTimeString)=>{
    const date = new Date(dateTimeString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const year = date.getFullYear().toString().slice(-2);
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
  }

  return (
    <div>
      <SheardBenner
        name={" Payment History"}
        subtitle={user?.displayName}
        img={"https://i.ibb.co/7SN0S6z/b2.jpg"}
      ></SheardBenner>
      {user && payments ? (
        <div>
          <div className="w-full  bg-white shadow-lg overflow-x-auto">
            <table className=" table table-xs  md:table-sm">
              <thead>
                <tr className="text-white bg-gray-900">
                  <th>
                    Image <span className="pr-5"></span>
                  </th>
                  <th>
                    Name <span className="pr-12"></span>
                  </th>
                  <th>
                    Price <span className="pr-4"></span>
                  </th>
                  <th>
                    Brand <span className="pr-2"></span>
                  </th>
                  <th>
                    Subcetegory <span className="pr-2"></span>
                  </th>
                  <th>
                    Size <span className="pr-2"></span>
                  </th>
                  <th>
                    Tranject ID <span className="pr-2"></span>
                  </th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((singleProduct, index) => (
                  <tr
                    key={singleProduct?._id}
                    className='"border-b border-indigo-800 " '
                  >
                    <td>
                      <label
                        
                        className="btn btn-ghost   avatar"
                      >
                        <div onClick={()=>openModal(singleProduct.image)}  className="md:w-24 w-20 h-12 md:h-16 rounded-lg ">
                          <img
                            src={singleProduct?.image}
                            alt="IMG"
                          />
                        </div>
                      </label>
                    </td>
                    <td className="font-semibold">{singleProduct?.name}</td>
                    <td className="font-semibold">
                      {singleProduct?.price}{" "}
                      <span className="text-green-500">$</span>
                    </td>
                    <td className="font-semibold">{singleProduct?.brand}</td>
                    <td className="font-semibold">
                      {singleProduct?.subcategory}
                    </td>
                    <td className="font-semibold">
                      {singleProduct?.selectedSize}
                    </td>
                    <td className="font-semibold">
                      {singleProduct?.tranjectId}
                    </td>
                    <td className="font-semibold"> {convertDateTimeToYear(singleProduct?.date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* image-modal */}
          {isOpen && (
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
              <div className="modal-box ">
                <span className="flex justify-between items-center mb-4">
                  <p className="text-lg md:text-3xl font-bold ">
                    Product Image
                  </p>
                  <button
                    className="btn btn-square hover:bg-[#11715e]  bg-[#168a73] text-white"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </span>
            
               <img src={img} alt="IMG" className="rounded-lg w-full" />
          
              </div>
            </div>
          )}
        </div>
      ) : (
         <p className="flex items-center justify-center h-[45dvh] md:h-[60dvh]   text-center ">
           {" "}
           <button className="btn bg-gray-400 text-white">
             <span className="loading loading-spinner"></span>
             loading
           </button>
         </p>
       )}
       {payments.length === 0 && (
          <p className="flex items-center justify-center h-[45dvh] md:h-[60dvh]   text-center ">
          {" "}
          <button className="btn bg-gray-400 text-white">
            <span className="loading loading-spinner"></span>
          No payment's
          </button>
        </p>
       )}
    </div>
  );
};

export default Payments;
