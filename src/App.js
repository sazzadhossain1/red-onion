import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import BreakFast from "./components/BreakFast/BreakFast";
import Lunch from "./components/Lunch/Lunch";
import Dinner from "./components/Dinner/Dinner";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/breakfast" element={<BreakFast></BreakFast>}></Route>
        <Route path="lunch" element={<Lunch></Lunch>}></Route>
        <Route path="dinner" element={<Dinner></Dinner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
