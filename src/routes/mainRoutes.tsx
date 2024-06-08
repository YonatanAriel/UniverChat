import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Welcome from "../pages/Welcome";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default MainRoutes;
