import React from "react";
import AdminDashLeft from "../AdminDashLeft/AdminDashLeft";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
import Swal from "sweetalert2";
import "./AllProduct.css";
const AllProduct = () => {
  const { user, userlogout } = useContext(AuthContext);
  const { data: allproduct = [], refetch } = useQuery({
    queryKey: ["alluser"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_HOST_LINK}/products`, {
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
  const handledelateproduct = (id) => {
    Swal.fire({
      title: "Do you want to delete product?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_HOST_LINK}/product/${id}`, {
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
              toast("Delate product!", {
                position: "top-center",
                autoClose: 500,
              });
            }
            refetch();
          });
      }
    });
  };
  console.log(allproduct);
  return (
    <div className="dashboards-container">
      <div className="row">
        <div className="dashboard-left col col-12 col-sm-12 col-md-3 col-lg-3">
          {/* <DashboardLeft></DashboardLeft> */}
          <AdminDashLeft></AdminDashLeft>
        </div>
        <div className="dashboard-right col col-12 col-sm-12 col-md-8 col-lg-8 ">
          <div className="alluser-con">
            <h5>Alluser</h5>
            <div className="all-user-info-con">
              {allproduct?.map((product) => (
                <div className="all-user-info">
                  <img className="user-photo" src={product.picture} alt="not" />
                  <p className="allproduct-sev-name">{product.service}</p>
                  <p>Type: {product.Categories}</p>
                  <p>{product.balance}</p>

                  <button
                    onClick={() => handledelateproduct(product._id)}
                    className="delete-user"
                  >
                    Delete product
                  </button>
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

export default AllProduct;
