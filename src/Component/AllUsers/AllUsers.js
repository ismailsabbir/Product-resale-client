import React from "react";
import AdminDashLeft from "../AdminDashLeft/AdminDashLeft";
import "./AllUsers.css";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
import { useQuery } from "react-query";
const AllUsers = () => {
  const { user, userlogout } = useContext(AuthContext);
  const { data: alluser = [], refetch } = useQuery({
    queryKey: ["alluser"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_HOST_LINK}/alluser`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "reseall_product_token"
          )}`,
        },
      });
      console.log(res);
      if (res?.status === 401 || res.status === 403) {
        return userlogout();
      }
      const data = res.json();
      return data;
    },
    // enabled: !!userId,
  });
  console.log(alluser);
  const handledelateuser = (id) => {
    Swal.fire({
      title: "Do you want to delete user?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_HOST_LINK}/alluser/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "reseall_product_token"
            )}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast("Delate user!", {
                position: "top-center",
                autoClose: 500,
              });
            }
            refetch();
          });
      }
    });
  };
  const handleadmin = (id) => {
    fetch(`${process.env.REACT_APP_HOST_LINK}/user/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "reseall_product_token"
        )}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("Admin Created Sucessfully!", {
            position: "top-center",
            autoClose: 500,
          });
        }
        refetch();
      });
  };
  return (
    <div className="dashboards-container">
      <div className="row">
        <div className="dashboard-left col col-6 col-sm-1 col-md-3 col-lg-3">
          {/* <DashboardLeft></DashboardLeft> */}
          <AdminDashLeft></AdminDashLeft>
        </div>
        <div className="dashboard-right col col-6 col-sm-11 col-md-8 col-lg-8 ">
          <div className="alluser-con">
            <h5>Alluser</h5>
            <div className="all-user-info-con">
              {alluser?.map((user) => (
                <div className="all-user-info">
                  <img className="user-photo" src={user.photoURL} alt="not" />
                  <p>{user.email}</p>
                  <p>{user.displayName}</p>
                  <button
                    onClick={() => handledelateuser(user._id)}
                    className="delete-user"
                  >
                    Delete user
                  </button>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleadmin(user._id)}
                      className="delete-user"
                    >
                      Make Admin
                    </button>
                  )}
                  {/* <button
                    onClick={() => handleadmin(user._id)}
                    className="delete-user"
                  >
                    Make Admin
                  </button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AllUsers;
