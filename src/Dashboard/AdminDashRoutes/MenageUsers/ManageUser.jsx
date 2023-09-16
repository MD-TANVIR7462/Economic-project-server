import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Components/Provider/Authprovider";
import SheardBenner from "../AddaProduct/SheardBenner";
import UseUsers from "../../../Components/Hooks/UseUsers";
import MenageUserRow from "./MenageUserRow";
import Swal from "sweetalert2";

const ManageUser = () => {
  const { user } = useContext(AuthContext);
  const { allUsers, refetch } = UseUsers();

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
        popup: "bg-white border-4 border-gray-300 rounded-lg",
        title: "text-black text-lg font-bold text-center mb-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (promoteOrDemote === "user") {
          fetch(`http://localhost:5000/user/${id}`,{
            method:"PATCH"
          })
            .then((res) => res.json())
            .then((data) => refetch());
        } else {
          fetch(`http://localhost:5000/admin/${id}`,{
            method:"PATCH"
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
            popup: "bg-white border-4 border-gray-300 rounded-lg",
            title: "text-black text-lg font-bold text-center mb-2",
          },
        });
      }
    });
  };

  return (
    <div>
      <SheardBenner
        name={"Manage User's"}
        subtitle={user?.displayName}
        img={"https://i.ibb.co/7SN0S6z/b2.jpg"}
      ></SheardBenner>
      {user && allUsers && (
        <div>
          <div className="w-full  bg-white shadow-lg overflow-x-auto">
            <table className=" table table-xs  md:table-sm">
              <thead>
                <tr className="text-white bg-gray-900">
                  <th >User Img</th>
                  <th >User Name <span className="px-12"></span></th>
                  <th>User Email <span className="px-4"></span></th>
                  <th>Position <span className="px-4"></span></th>
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
                   
                  ></MenageUserRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUser;
