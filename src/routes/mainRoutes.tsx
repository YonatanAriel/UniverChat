import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { ContextValue } from "../types/contextValue";

function MainRoutes() {
  const { userName } = useContext(Context) as ContextValue;
  return (
    <Routes>
      <Route
        path="/"
        element={
          userName ? <Home /> : <a href="/welcome">Start using UniverChat!</a>
        }
      />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default MainRoutes;
