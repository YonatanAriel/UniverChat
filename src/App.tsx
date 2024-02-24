import { useEffect } from "react";
import "./App.css";
import { getAudio } from "./services/apiCalls";

function App() {
  useEffect(() => {
    getAudio("Hello, world!", "en-us", "0");
  }, []);
  return <span className="bg-red-300">sg</span>;
}

export default App;
