import React, { useContext } from "react";
import "./SeallerDashborde.css";
import DashboardLeft from "../../Component/DashboardLeft/DashboardLeft";
import { AuthContext } from "../../Context/UserContest";
import { useQuery } from "react-query";
import "./SeallerDashborde.css";
const SeallerDashborde = () => {
  const { user, userlogout } = useContext(AuthContext);
  const userId = user?.uid;
  const { data: sellerproduct = [] } = useQuery(
    {
      queryKey: ["sellerproduct"],
      queryFn: async () => {
        const res = await fetch(
          `${process.env.REACT_APP_HOST_LINK}/sellerproduct?email=${user?.email}`,
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

  console.log(sellerproduct);
  const handleremoveproduct = (id) => {
    console.log(id);
  };
  return (
    <div className="dashboards-container">
      <div className="row">
        <div className="dashboard-left col col-6 col-sm-3 col-md-3 col-lg-3">
          <DashboardLeft></DashboardLeft>
        </div>
        <div className="dashboard-right col col-6 col-sm-3 col-md-3 col-lg-8 ">
          <div className="myproduct-container">
            <h5>My Product</h5>
            {sellerproduct?.map((sellprod) => (
              <div className="my-product-info">
                <div className="myproduct-img-sev">
                  <img src={sellprod.picture} alt="not found" />
                  <div>
                    <h6 className="my-pro-tit">{sellprod.service}</h6>
                    <p>
                      <span className="myp-title">category:</span>{" "}
                      {sellprod.Categories}
                    </p>
                    <p>
                      {" "}
                      <span className="myp-title">color: </span> "
                      {sellprod.color}
                    </p>
                  </div>
                </div>

                <p>
                  <span className="myp-title">Price: </span>
                  {sellprod.balance}
                </p>
                <p>
                  <span className="myp-title">sold: </span>:10
                </p>
                <button
                  onClick={() => handleremoveproduct(sellprod._id)}
                  className="delete-pro-btn"
                >
                  Delate Product
                </button>
                {/* <button>Updated info</button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeallerDashborde;
