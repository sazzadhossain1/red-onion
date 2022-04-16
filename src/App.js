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
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route
          path="/breakfast"
          element={
            <RequireAuth>
              <BreakFast></BreakFast>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="lunch"
          element={
            <RequireAuth>
              <Lunch></Lunch>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dinner"
          element={
            <RequireAuth>
              <Dinner></Dinner>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
