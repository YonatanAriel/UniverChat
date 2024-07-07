import { useContext, lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "../context/ContextProvider";
import { ContextValue } from "../types/contextValue";
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Welcome = lazy(() => import("../pages/Welcome"));
import Home from "../pages/Home";
import Loading from "../components/ui/Loading";

function MainRoutes() {
  const { userId, token } = useContext(Context) as ContextValue;
  useEffect(() => console.log(token), [token]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          userId || token ? <Home /> : <Navigate to="/welcome" replace />
        }
      />
      <Route
        path="/welcome"
        element={
          token ? (
            <NotFound />
          ) : (
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-full">
                  <Loading />
                </div>
              }
            >
              <Welcome />
            </Suspense>
          )
        }
      />
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
      <Route
        path="*"
        element={
          <Suspense
            fallback={
              <div className="flex items-center justify-center w-full h-full">
                <Loading />
              </div>
            }
          >
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
}
export default MainRoutes;
