import { FaGoogle, FaShoppingCart } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import Swal from "sweetalert2";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import {
  FiHome,
  FiShoppingCart,
  FiGrid,
  FiPhoneOutgoing,
  FiDatabase,
} from "react-icons/fi";
import { FaBuffer } from "react-icons/fa6";

const ImageHosting = import.meta.env.VITE_Image_Upload_Key;

const NAvbar = () => {
  const {   
    CreatUSerEmail,
    user,
    SignInUSer,
    signOutUSer,
    updateUser,
    loading,
    googleCreatUSer,
  } = useContext(AuthContext);

  //Image hosting========>>>>

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${ImageHosting}`;
  //End Image hosting=====>>>>

  const [isOpen, setIsOpen] = useState(false);
  const [resiterModal, setResisterModal] = useState(false);
  const [Error, setEror] = useState("");
  const [dbUser, setDbUser] = useState({});

  //Modal function===========>>
  const openModal = () => {
    // setSelectedId();
    setEror("");
    setIsOpen(true);
  };

  const closeModal = () => {
    // setSelectedId(null);
    setIsOpen(false);
    setEror("");
  };

  const ModalResister = () => {
    setResisterModal(true);
    setIsOpen(false);
    setEror("");
  };
  const closeResisterModal = () => {
    setResisterModal(false);
    setEror("");
  };

  // Authintication Function====>>>

  //resister function =====>>>>
  const handleResister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageUrl = form.image.files;

    const fromdata = new FormData();
    fromdata.append("image", imageUrl[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: fromdata,
    })
      .then((res) => res.json())
      .then((data) => {
        const profileImage = data.data.display_url;
        const user = {
          name: name,
          image: profileImage,
          email: email,
          role: "user",
        };
        CreatUSerEmail(email, password)
          .then(() => {
            updateUser(name, profileImage)
              .then(() => {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Successfully Resistered",
                  showConfirmButton: false,
                  timer: 1500,
                  customClass: {
                    popup:
                      "bg-base-300 rounded-lg shadow-md p-3 md:p-8   md:max-w-md",
                    title: "text-sm md:text-2xl  font-semibold mb-4",
                    content: "text-gray-700",
                  },
                });

                fetch("https://ecommerce-projects-server.vercel.app/allusers", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(user),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    form.reset();
                    setEror("");
                    closeResisterModal();
                  });
              })
              .catch((error) => {
                setEror(error.message);
              });
          })
          .catch((error) => {
            setEror(error.message);
          });
      });
  };

  //Login Function ====>>>>>
  const login = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    SignInUSer(email, password)
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully Logged In",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "rounded-lg text-base-300 shadow-md p-3 md:p-8   md:max-w-md",
            title: "text-sm  md:text-2xl  font-semibold mb-4",
            content: "text-gray-700",
          },
        });
        form.reset();
        setEror("");
        closeModal();
      })
      .catch((error) => {
        setEror(error.message);
      });
  };
  //google login ======>>>>
  const LoginWithGoogle = () => {
    googleCreatUSer()
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const Googleuser = {
          name: displayName,
          image: photoURL,
          email: email,
          role: "user",
        };

        fetch("https://ecommerce-projects-server.vercel.app/allusers", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(Googleuser),
        })
          .then((res) => res.json())
          .then((data) => {});

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully Logged In",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "bg-base-300 rounded-lg shadow-md p-3 md:p-8   md:max-w-md",
            title: "text-sm  md:text-2xl font-semibold mb-4",
            content: "text-gray-700",
          },
        });
        setEror("");
        closeModal();
      })
      .catch((error) => {
        setEror(error.message);
      });
  };

  //Logout ====>>>
  const logout = () => {
    signOutUSer()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully Logged Out!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "bg-base-300 rounded-lg shadow-md p-3 md:p-8   md:max-w-md",
            title: "text-sm md:text-2xl font-semibold mb-4",
            content: "text-gray-700",
          },
        });

        setEror("");
      })
      .catch((error) => {
        setEror(error.message);
      });
  };

  //user form DB
  useEffect(() => {
    fetch(
      `https://ecommerce-projects-server.vercel.app/user?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDbUser(data);
      });
  }, [user]);

  //navbar Scroll ======>>>>

  const navOptions = (
    <>
      <li className="text-xl font-semibold ">
        <Link to={"/"}>
          <FiHome></FiHome> Home
        </Link>
      </li>
      <li className="text-xl font-semibold ">
        <Link to={"/shop/all"}>
          {" "}
          <FiShoppingCart />
          Shop
        </Link>
      </li>
      <li className="text-xl font-semibold  ">
        <Link to={"/blog"}>
          {" "}
          <FiGrid />
          Blog
        </Link>
      </li>
      <li className="text-xl font-semibold ">
        <Link to={"/contact"}>
          {" "}
          <FiPhoneOutgoing />
          Contact
        </Link>
      </li>
    </>
  );

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar   ${
        isScrolled ? " bg-[#2f2d31] shadow-md" : "bg-none"
      } md:py-6 md:px-16 fixed top-0 z-10`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-60 p-2 shadow  rounded-box w-48 bg-[#171618]"
          >
            {navOptions}
            {user && !loading && (
              <li className="text-xl font-semibold ">
                <Link to={"/dashboard"}>
                  {" "}
                  <FiDatabase /> Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>

        <label tabIndex={0} className="btn btn-ghost  ">
          <div className="w-24 md:w-32  inline-flex rounded-lg">
            <p className="text-sm md:text-lg">Swift Mart</p>
          </div>
        </label>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
          {user && !loading && (
            <li className="text-xl font-semibold ">
              <Link to={"/dashboard"}>
                {" "}
                <FiDatabase />
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end ">
        {user && (
          <div className="dropdown dropdown-end z-10">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar mr-2 md:mr-4"
            >
              <div className="md:w-16 w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-xs md:menu-sm  bg-[#171618] dropdown-content mt-3 z-10 p-2 shadow  rounded-box w-40  md:w-52"
            >
              <li>
                {dbUser?.role === "user" ? (
                  <Link to={"dashboard/orders"}>
                    <span className="font-semibold flex items-center gap-1">
                      <FaShoppingCart></FaShoppingCart> Book Mark's
                    </span>
                  </Link>
                ) : (
                  <Link to={"dashboard/myproducts"}>
                    <span className="font-semibold flex items-center gap-1">
                      <FaBuffer /> My Product's
                    </span>
                  </Link>
                )}
              </li>

              <li>
                <span
                  onClick={logout}
                  className="font-semibold flex items-center gap-1"
                >
                  <BiLogOut />
                  Logout
                </span>
              </li>
            </ul>
          </div>
        )}

        {loading && <span className="loading loading-ring loading-lg"></span>}
        {!user && !loading && (
          <button
            className="btn btn-circle  btn-ghost text-[#168a73]  md:border-2 md:border-[#168a73] text-3xl md:mr-2 "
            onClick={openModal}
          >
            <BsBoxArrowInRight></BsBoxArrowInRight>
          </button>
        )}
      </div>
      {isOpen && (
        <div className={`modal ${isOpen ? "modal-open" : ""}`}>
          <div className="modal-box bg-base-300">
            <span className="flex justify-between items-center">
              <p className="pl-[5%] text-3xl font-bold ">Login</p>
              <button
                className="btn btn-square border-none hover:bg-[#11715e]  bg-[#168a73] text-white"
                onClick={closeModal}
              >
                X
              </button>
            </span>
            <form onSubmit={login} className="md:p-[2%]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  required
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  required
                  name="password"
                  className="input input-bordered"
                />
                <span className=" mt-3 flex justify-between">
                  <label className="label">
                    <span
                      className="label-text-alt text-green-600 hover:text-blue-600"
                      onClick={ModalResister}
                    >
                      {" "}
                      Resister Now
                    </span>
                  </label>
                  <label className="label">
                    <span className="label-text-alt link link-hover">
                      Forgot password?
                    </span>
                  </label>
                </span>
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
                    Login
                  </span>
                  <span class="relative invisible">Login</span>
                </button>
              </div>
            </form>
            {Error && (
              <p className="text-md text-center text-red-500">{Error}</p>
            )}
            <div className="mt-4 flex flex-col items-center ">
              <p className="text-sm text-center  mb-3">Sign Up With</p>
              <button
                onClick={LoginWithGoogle}
                className="btn btn-circle border-none hover:bg-[#11715e]  bg-[#168a73] px-4 text-center text-white "
              >
                <FaGoogle></FaGoogle>
              </button>
            </div>
          </div>
        </div>
      )}

      {resiterModal && (
        <div className={`modal ${resiterModal ? "modal-open" : ""}`}>
          <div className="modal-box bg-base-300 ">
            <span className="flex justify-between items-center">
              <p className="pl-[5%] text-3xl font-bold ">Resister</p>
              <button
                className="btn btn-square border-none hover:bg-[#0d5345]  bg-[#11715e] text-white"
                onClick={closeResisterModal}
              >
                X
              </button>
            </span>
            <form className="md:p-[2%]" onSubmit={handleResister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="text"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Profile</span>
                </label>
                <input
                  type="file"
                  required
                  name="image"
                  className="file-input file-input-bordered file-input-accent file-input-sm w-full max-w-xs"
                />
              </div>

              <div className="form-control mt-6">
                <button class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#11715e] transition duration-300 ease-out border-2 border-[#11715e] rounded-full shadow-md group">
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
                  <span class="absolute flex items-center justify-center w-full h-full text-[#11715e]transition-all duration-300 transform group-hover:translate-x-full ease">
                    Resister
                  </span>
                  <span class="relative invisible">Resister</span>
                </button>
              </div>
            </form>
            {Error && (
              <p className=" text-sm md:text-md text-center text-red-500">
                {Error}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NAvbar;
