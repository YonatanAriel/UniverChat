import { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import { ContextValue } from "../../types/contextValue";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { isUserLoggedIn, setToken, setUserId } = useContext(
    Context
  ) as ContextValue;

  const handleSignOut = () => {
    setUserId(null);
    setToken(null);
    navigate("/welcome");
  };

  return (
    <div className="sticky top-0 left-0 flex w-full gap-5 p-6 pl-3 xs:w-fit backdrop-blur-sm xs:backdrop-blur-none sm:pl-6 sm:gap-12 ">
      <h2 className="text-2xl font-bold">UniverChat</h2>
      {isUserLoggedIn ? (
        <p
          className="mt-1 text-lg transition duration-100 cursor-pointer hover:scale-95"
          onClick={handleSignOut}
        >
          Sign out
        </p>
      ) : (
        <>
          <a
            className="mt-1 text-lg transition duration-100 hover:scale-95 "
            href="/sign-in"
          >
            Sign in
          </a>
          <a
            className="mt-1 text-lg transition duration-300 hover:scale-95"
            href="sign-up"
          >
            Sign up
          </a>
        </>
      )}
    </div>
  );
}

export default Navbar;
