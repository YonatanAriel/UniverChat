import { useContext, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "../context/ContextProvider";
import { ContextValue } from "../types/contextValue";
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";

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
      <Route
        path="sign-in"
        element={
          <Suspense fallback={"Loading..."}>
            <SignIn />
          </Suspense>
        }
      />
      <Route
        path="sign-up"
        element={
          <Suspense fallback={"Loading..."}>
            <SignUp />
          </Suspense>
        }
      />
    </Routes>
  );
}
export default MainRoutes;
