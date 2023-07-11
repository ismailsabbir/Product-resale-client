import React, { useContext } from "react";
import "./BuyersDashborde.css";
import DashboardLeft from "../../Component/DashboardLeft/DashboardLeft";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { useQuery } from "react-query";
import { AuthContext } from "../../Context/UserContest";
const BuyersDashborde = () => {
  const { user, userlogout, loading } = useContext(AuthContext);
  const userId = user?.uid;

  const { data: orders = [], refetch } = useQuery(
    {
      queryKey: ["orderproduct"],
      queryFn: async () => {
        const res = await fetch(
          `${process.env.REACT_APP_HOST_LINK}/orderproduct?email=${user?.email}`,
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
      enabled: !!userId,
    },
    [user?.email]
  );

  console.log(orders);
  const cancleorder = (order) => {
    Swal.fire({
      title: "Do you want to cancel order?",
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
              toast("order cancel!", {
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
        <div className="dashboard-left col col-6 col-sm-3 col-md-3 col-lg-3">
          <DashboardLeft></DashboardLeft>
        </div>
        <div className="dashboard-right col col-6 col-sm-3 col-md-3 col-lg-8 ">
          <h5 className="mb-4 text-inherit">My Orders</h5>
          <div className="my-order-con">
            {orders?.map((order) => (
              <div className="order-info-con">
                <div className="order-info-top">
                  <div>
                    <p>
                      order: <span className="order-id">{order._id}</span>{" "}
                    </p>
                    <p>Placed on:</p>
                  </div>

                  {/* <p>{order.totaldoler}</p> */}
                  <button
                    onClick={() => cancleorder(order)}
                    className="cancle-order-btn"
                  >
                    Cancle order
                  </button>
                </div>

                {order.productinfo.map((prod) => (
                  <div className="order-main-info-con">
                    <div className="order-main-img-name">
                      <img src={prod.picture} alt="not found" />
                      <p>{prod.service}</p>
                    </div>
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

export default BuyersDashborde;
