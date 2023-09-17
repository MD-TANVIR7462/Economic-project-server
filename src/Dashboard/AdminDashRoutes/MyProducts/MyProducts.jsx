import { useContext, useEffect, useState } from "react";
import { FaUserEdit, FaRegTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../../Components/Provider/Authprovider";
import Swal from "sweetalert2";
import UseProducts from "../../../Components/Hooks/UseProducts";
import SheardBenner from "../AddaProduct/SheardBenner";

const MyProducts = () => {
  const [Adminproducts, setadminProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setID] = useState([]);
  const { user } = useContext(AuthContext);
  const { refetch, products } = UseProducts();
  const [isIMG, setIMG] = useState(false);
  const [image, setImage] = useState("");

  //Update product===>
  const openModal = (_id) => {
    setIsOpen(true);
    setID(_id);
  };

  const closeModal = () => {
    setIsOpen(false);
    setID(null);
  };

  const openIMG = (img) => {
    setImage(img);
    setIMG(true);
  };

  const closeIMG = () => {
    setIMG(false);
  };
  //update the product details===>
  const updatedData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = parseInt(form.price.value);
    const brand = form.brand.value;
    const Quantity = parseInt(form.Quantity.value);
    const updatedProduct = { name, price, brand, Quantity };
    console.log(updatedProduct);

    fetch(`http://localhost:5000/updateProduct/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product Updated",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "bg-indigo-50 rounded-lg shadow-md p-3 md:p-8   md:max-w-md",
            title: "text-sm  md:text-2xl text-blue-600 font-semibold mb-4",
            content: "text-gray-700",
          },
        });
        form.reset();
        closeModal();
        refetch();
      });
  };

  const DeleteProduct = (id) => {
    Swal.fire({
      position: "top-center",
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085dg",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      customClass: {
        popup: "bg-white border-4 border-gray-300 rounded-lg",
        title: "text-black text-lg font-bold text-center mb-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();

            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Bookmark Removed!!",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: "bg-white border-4 border-gray-300 rounded-lg",
                title: "text-black text-lg font-bold text-center mb-2",
              },
            });
          });
      }
    });
  };

  useEffect(() => {
    if (user && products) {
      setadminProduct(
        products?.filter((product) => product.email === user?.email)
      );
    }
  }, [user, products]);

  return (
    <div>
      <SheardBenner
        name={"Your Product's"}
        subtitle={user?.displayName}
        img={"https://i.ibb.co/7SN0S6z/b2.jpg"}
      ></SheardBenner>
      {user && Adminproducts ? (
        <div>
          <div className="w-full  bg-white shadow-lg overflow-x-auto">
            <table className=" table table-xs  md:table-sm">
              <thead>
                <tr className="text-white bg-gray-900">
                  <th>Product Img</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Brand</th>
                  <th>Cetegory</th>
                  <th>Subcetegory</th>
                  <th>Update It</th>
                  <th>Delete It</th>
                </tr>
              </thead>
              <tbody>
                {Adminproducts?.map((singleProduct, index) => (
                  <tr
                    key={singleProduct?._id}
                    className='"border-b border-indigo-800 " '
                  >
                    <td>
                      <label className="btn btn-ghost   avatar">
                        <div
                          onClick={() => openIMG(singleProduct.image)}
                          className="md:w-24 w-20 h-12 md:h-16 rounded-lg "
                        >
                          <img src={singleProduct?.image} alt="IMG" />
                        </div>
                      </label>
                    </td>
                    <td className="font-semibold">{singleProduct?.name}</td>
                    <td className="font-semibold">
                      {singleProduct?.price}{" "}
                      <span className="text-green-500">$</span>
                    </td>
                    <td className="font-semibold">{singleProduct?.brand}</td>
                    <td className="font-semibold">{singleProduct?.category}</td>
                    <td className="font-semibold">
                      {singleProduct?.subcategory}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          openModal(singleProduct?._id);
                        }}
                        className="rounded px-4 py-2 md:px-5 md:py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                      >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">
                          <FaUserEdit />
                        </span>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          DeleteProduct(singleProduct?._id);
                        }}
                        className="rounded  px-4 py-2 md:px-5 md:py-2.5 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
                      >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">
                          <FaRegTrashAlt />
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Edit-modal */}
          {isOpen && (
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
              <div className="modal-box ">
                <span className="flex justify-between items-center">
                  <p className="pl-[5%] text-lg md:text-3xl font-bold ">
                    UPDATE NOW
                  </p>
                  <button
                    className="btn btn-square hover:bg-[#11715e]  bg-[#168a73] text-white"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </span>
                <form className="md:p-[2%]" onSubmit={updatedData}>
                  <div className="md:flex gap-2 ">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text ">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="product name"
                        required
                        name="name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Price"
                        required
                        name="price"
                        className="input input-bordered"
                      />
                    </div>
                  </div>
                  <div className="md:flex gap-2 ">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text ">Brand</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Brand name"
                        required
                        name="brand"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Quantity</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Quantity"
                        required
                        name="Quantity"
                        className="input input-bordered"
                      />
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <button class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#11715e] rounded-full shadow-md group">
                      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#11715e] group-hover:translate-x-0 ease">
                        <svg
                          class="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span class="absolute flex items-center justify-center w-full h-full text-[#11715e] transition-all duration-300 transform group-hover:translate-x-full ease">
                        UPDATE
                      </span>
                      <span class="relative invisible ">UPDATE</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {isIMG && (
            <div className={`modal ${isIMG ? "modal-open" : ""}`}>
              <div className="modal-box ">
                <span className="flex justify-between items-center mb-4">
                  <p className="text-lg md:text-3xl font-bold ">
                    Product Image
                  </p>
                  <button
                    className="btn btn-square hover:bg-[#11715e]  bg-[#168a73] text-white"
                    onClick={closeIMG}
                  >
                    X
                  </button>
                </span>

                <img src={image} alt="IMG" className="rounded-lg w-full" />
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
      {Adminproducts.length === 0 && (
         <p className="flex items-center justify-center h-[45dvh] md:h-[60dvh]   text-center ">
         {" "}
         <button className="btn bg-gray-400 text-white">
           <span className="loading loading-spinner"></span>
         No Product's
         </button>
       </p>
      )}
    </div>
  );
};

export default MyProducts;
