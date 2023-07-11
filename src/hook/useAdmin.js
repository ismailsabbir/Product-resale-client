import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setisAdmin] = useState(false);
  const [adminloding, setadminloding] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_HOST_LINK}/user/admin/${email}`)
        .then((req) => req.json())
        .then((data) => {
          console.log(data);
          setisAdmin(data.isAdmin);
          setadminloding(false);
        });
    }
  }, [email]);
  return [isAdmin, adminloding];
};
export default useAdmin;
