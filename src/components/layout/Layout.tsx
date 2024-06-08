import { useLocation } from "react-router-dom";
import MainRoutes from "../../routes/MainRoutes";
import Navbar from "./Navbar";

function Layout() {
  const location = useLocation().pathname;
  const backgroundColor = location === "/welcome" ? "roseToWhiteGradient" : "";
  return (
    <div
      className={`${backgroundColor} absolute inset-0 w-full h-full flex items-center justify-center `}
    >
      <Navbar />
      <MainRoutes />
    </div>
  );
}
export default Layout;
