import { useLocation } from "react-router-dom";
import MainRoutes from "../../routes/MainRoutes";
import Navbar from "./Navbar";

function Layout() {
  const location = useLocation().pathname;
  const backgroundColor =
    location === "/welcome"
      ? "roseToWhiteGradient"
      : location === "/sign-up"
      ? "tealToWhiteGradient"
      : " movingBackgroundSlow bg-gradient-to-br from-rose-100 via-white to-teal-100 ";
  return (
    <div className={`${backgroundColor} fixed inset-0 overflow-y-auto `}>
      <Navbar />
      <MainRoutes />
    </div>
  );
}
export default Layout;
