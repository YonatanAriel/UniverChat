import { useLocation } from "react-router-dom";
import MainRoutes from "../../routes/MainRoutes";
import Navbar from "./Navbar";

function Layout() {
  const location = useLocation().pathname;
  const backgroundColor =
    location === "/welcome"
      ? "roseToWhiteGradient"
      : " movingBackgroundSlow bg-gradient-to-br from-rose-100 via-white to-teal-100 ";
  return (
    <div className={`${backgroundColor} fixed inset-0 `}>
      <Navbar />
      <MainRoutes />
    </div>
  );
}
export default Layout;
