import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <div>Igor is een frietje</div>
    </>
  );
};

export default App;
