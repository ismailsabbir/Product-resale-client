import React from "react";
import { ToastContainer } from "react-toastify";
import AdminDashLeft from "../AdminDashLeft/AdminDashLeft";
import { useQuery } from "react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
import { BiCategory } from "react-icons/bi";

const AllCategory = () => {
  const { userlogout } = useContext(AuthContext);
  const { data: allcategory = [], refetch } = useQuery({
    queryKey: ["alluser"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_HOST_LINK}/allcategory`,
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
  return (
    <div className="dashboards-container">
      <div className="row">
        <div className="dashboard-left col col-12 col-sm-12 col-md-3 col-lg-3">
          {/* <DashboardLeft></DashboardLeft> */}
          <AdminDashLeft></AdminDashLeft>
        </div>
        <div className="dashboard-right col col-12 col-sm-12 col-md-8 col-lg-8 ">
          <div className="alluser-con">
            <h5> Product Category</h5>
            <div className="all-user-info-con">
              {allcategory?.map((category) => (
                <div className="all-user-info">
                  <img className="user-photo" src={category.image} alt="not" />
                  <p>{category.name}</p>
                  <p>{category._id}</p>

                  <button
                    //   onClick={() => handledelateproduct(product._id)}
                    className="delete-user"
                  >
                    Delete category
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

export default AllCategory;
