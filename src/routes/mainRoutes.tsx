import { useContext, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "../context/ContextProvider";
import { ContextValue } from "../types/contextValue";
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import Loading from "../components/ui/Loading";

function MainRoutes() {
  const { userId } = useContext(Context) as ContextValue;

  return (
    <Routes>
      <Route
        path="/"
        element={
          userId ? <Home /> : <a href="/welcome">Start using UniverChat!</a>
        }
      />
      <Route path="/welcome" element={<Welcome />} />
      <Route
        path="sign-in"
        element={
          <Suspense
            fallback={
              <div className="flex items-center justify-center w-full h-full">
                <Loading />
              </div>
            }
          >
            <SignIn />
          </Suspense>
        }
      />
      <Route
        path="sign-up"
        element={
          <Suspense
            fallback={
              <div className="flex items-center justify-center w-full h-full">
                <Loading />
              </div>
            }
          >
            <SignUp />
          </Suspense>
        }
      />
    </Routes>
  );
}
export default MainRoutes;
