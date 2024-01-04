import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  // useEffect(() => {
  //   const pathsToScrollUp = [
  //     /^\/product\//,
  //     /^\/productList\/type\/Laptop/,
  //     /^\/productList\/type\/PC-Hardware/,
  //     /^\/productList\/type\/Peripherals/,
  //     /^\/productList\/type\/Accessories/,
  //   ];
  //   if (pathsToScrollUp.some((pattern) => pattern.test(pathname))) {
  //     window.scrollTo(0, 0);
  //   }
  // }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
