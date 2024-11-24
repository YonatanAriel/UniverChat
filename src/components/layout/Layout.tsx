import { useLocation } from "react-router-dom";
import MainRoutes from "../../routes/MainRoutes";
import Navbar from "./Navbar";

function Layout() {
  const location = useLocation().pathname;
  const backgroundColor = ["/welcome", "/sign-in"].includes(location)
    ? "roseToWhiteGradient"
    : location === "/sign-up"
    ? "tealToWhiteGradient"
    : " movingBackgroundSlow bg-gradient-to-br from-rose-100 via-white to-teal-100 ";
  return (
    <div
      className={`${backgroundColor} fixed inset-0  ${
        ["/sign-up", "/sign-in"].includes(location) ? "overflow-y-auto" : ""
      } 
      `}
    >
      {/* ${
        location === "/sign-up" ? "overflow-y-auto" : ""
      } */}
      <Navbar />
      <MainRoutes />
    </div>
  );
}
export default Layout;
