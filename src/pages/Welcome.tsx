import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/ContextProvider";
import { ContextValue } from "../types/contextValue";
import { getUniqueId } from "../utils/getUniqueId";
import WelcomeForm from "../components/ui/WelcomeForm";

function Welcome() {
  const { setUserName, setUserId, token, setToken } = useContext(
    Context
  ) as ContextValue;
  const [error, setError] = useState<null | string>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (token) navigate("/");
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value.trim();
    if (!inputValue) {
      setError("Please enter your name");
      return;
    }
    navigate("/");
    const uniqueId = getUniqueId();
    setUserId(uniqueId);
    setUserName(inputValue);
    setToken(null);
  };

  return (
    <div className="flex items-center justify-center w-full ">
      <img
        className="fixed -right-4 bg-transparent -bottom-2 max-h-32 md:max-h-none -rotate-[35deg] h-2/5"
        src="\rose2.png"
        alt=""
      />
      <WelcomeForm handleSubmit={handleSubmit} error={error} ref={inputRef} />
    </div>
  );
}

export default Welcome;
