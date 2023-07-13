import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
import { useQuery } from "react-query";
import AdminDashLeft from "../AdminDashLeft/AdminDashLeft";
import { ToastContainer, toast } from "react-toastify";
import "./Allorders.css";
import Swal from "sweetalert2";

const AllOrders = () => {
  const { user, userlogout } = useContext(AuthContext);
  const { data: allorder = [], refetch } = useQuery({
    queryKey: ["alluser"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_HOST_LINK}/allorderproduct`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "reseall_product_token"
            )}`,
          },
        }
      );
      console.log(res);
      if (res?.status === 401 || res.status === 403) {
        return userlogout();
      }
      const data = res.json();
      return data;
    },
    // enabled: !!userId,
  });
  console.log(allorder);
  const cancleorder = (order) => {
    Swal.fire({
      title: "Do you want to delete order?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_HOST_LINK}/orderproduct/${order._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast("order delete!", {
                position: "top-center",
                autoClose: 500,
              });
            }
            refetch();
          });
      }
    });
  };
  return (
    <div className="dashboards-container">
      <div className="row">
        <div className="dashboard-left col col-12 col-sm-12 col-md-3 col-lg-3">
          <AdminDashLeft></AdminDashLeft>
        </div>
        <div className="dashboard-right col col-12 col-sm-12 col-md-3 col-lg-8 ">
          <h5 className="mb-4 text-inherit">My Orders</h5>
          <div className="my-order-con">
            {allorder?.map((order) => (
              <div className="order-info-con">
                <div className="order-info-top">
                  <div>
                    <p>
                      order: <span className="order-id">{order._id}</span>{" "}
                    </p>
                    <p>Placed on:</p>
                  </div>
                  <button
                    onClick={() => cancleorder(order)}
                    className="cancle-order-btn"
                  >
                    Cancle order
                  </button>
                </div>

                {order.productinfo?.map((prod) => (
                  <div className="order-main-info-con">
                    <div className="order-main-img-name">
                      <img src={prod.picture} alt="not found" />
                      <p className="all-order-serv-name">{prod.service}</p>
                    </div>
                    <p>{order.firstname}</p>
                    <p>QTY: {prod.quentity}</p>
                    {order.transactionId ? (
                      <p>Payment Complete</p>
                    ) : (
                      <p>payment pending</p>
                    )}
                    <p>{prod.balance}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AllOrders;
