import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-emart-product-resale`;
  }, [title]);
};
export default UseTitle;
