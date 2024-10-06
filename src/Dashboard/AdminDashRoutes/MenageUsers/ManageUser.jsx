import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Components/Provider/Authprovider";
import SheardBenner from "../AddaProduct/SheardBenner";
import UseUsers from "../../../Components/Hooks/UseUsers";
import MenageUserRow from "./MenageUserRow";
import Swal from "sweetalert2";
import UseTitle from "../../../Components/Hooks/UseTitle";
import Loader from "../../../Components/Loadin/Loader";

const ManageUser = () => {
  const { user } = useContext(AuthContext);
  const { allUsers, refetch } = UseUsers();
  const [isIMG, setIMG] = useState(false);
  const [image, setImage] = useState("");

  const openIMG = (img) => {
    setImage(img);
    setIMG(true);
  };

  const closeIMG = () => {
    setIMG(false);
  };
  const handleUsers = (id, promoteOrDemote) => {
    let text = "Protome To Admin ?";
    if (promoteOrDemote === "user") {
      text = "Demote To User ?";
    }
    Swal.fire({
      position: "top-center",
      title: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085dg",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      customClass: {
        popup: "bg-base-300 border-4 border-gray-300 rounded-lg",
        title: " text-lg font-bold text-center mb-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (promoteOrDemote === "user") {
          fetch(`https://ecommerce-projects-server.vercel.app/user/${id}`, {
            method: "PATCH",
          })
            .then((res) => res.json())
            .then((data) => refetch());
        } else {
          fetch(`https://ecommerce-projects-server.vercel.app/admin/${id}`, {
            method: "PATCH",
          })
            .then((res) => res.json())
            .then((data) => refetch());
        }
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successflully Done!!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "bg-base-300 border-4 border-gray-300 rounded-lg",
            title: " text-lg font-bold text-center mb-2",
          },
        });
      }
    });
  };

  return (
    <div>
      {UseTitle("MANAGE USER'S")}
      <SheardBenner
        name={"Manage User's"}
        subtitle={user?.displayName}
        img={"https://i.ibb.co/7SN0S6z/b2.jpg"}
      ></SheardBenner>
      {user && allUsers ? (
        <div>
          <div className="w-full  bg-[#1e1d1f]  shadow-lg overflow-x-auto">
            <table className=" table table-xs  md:table-sm">
              <thead>
                <tr className="text-white bg-[#363339]">
                  <th>User Img</th>
                  <th>
                    User Name <span className="px-12"></span>
                  </th>
                  <th>
                    User Email <span className="px-4"></span>
                  </th>
                  <th>
                    Position <span className="px-4"></span>
                  </th>
                  <th>Make User</th>
                  <th>Make Admin</th>
                </tr>
              </thead>
              <tbody>
                {allUsers?.map((singleUser, index) => (
                  <MenageUserRow
                    singleUser={singleUser}
                    key={singleUser._id}
                    handleUsers={handleUsers}
                    openIMG={openIMG}
                  ></MenageUserRow>
                ))}
              </tbody>
            </table>
          </div>
          {isIMG && (
            <div className={`modal ${isIMG ? "modal-open" : ""}`}>
              <div className="modal-box bg-base-300 ">
                <span className="flex justify-between items-center mb-4">
                  <p className="text-lg md:text-3xl font-bold ">Image</p>
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
        <Loader/>
      )}
    </div>
  );
};

export default ManageUser;
