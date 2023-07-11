import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isbuyer, setisbuyer] = useState(false);
  const [buyerloding, setbuyerloding] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_HOST_LINK}/user/buyercheck/${email}`)
        .then((req) => req.json())
        .then((data) => {
          console.log(data);
          setisbuyer(data.isbuyer);
          setbuyerloding(false);
        });
    }
  }, [email]);
  return [isbuyer, buyerloding];
};

export default useBuyer;
