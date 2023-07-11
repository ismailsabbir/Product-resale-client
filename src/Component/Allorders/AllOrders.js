import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContest";
import { useQuery } from "react-query";
import AdminDashLeft from "../AdminDashLeft/AdminDashLeft";
import { ToastContainer } from "react-toastify";

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
              {allorder?.map((product) => (
                <div className="all-user-info">
                  <img className="user-photo" src={product.picture} alt="not" />
                  <p>{product.firstname}</p>
                  {/* <p>{user.displayName}</p> */}

                  {/* <button
                      onClick={() => handledelateuser(user._id)}
                      className="delete-user"
                    >
                      Delete user
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

export default AllOrders;
