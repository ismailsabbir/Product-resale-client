import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isseller, setisseller] = useState(false);
  const [sellerloding, setsellerloding] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_HOST_LINK}/user/sellercheck/${email}`)
        .then((req) => req.json())
        .then((data) => {
          console.log(data);
          setisseller(data.isseller);
          setsellerloding(false);
        });
    }
  }, [email]);
  return [isseller, sellerloding];
};
export default useSeller;
