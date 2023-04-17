import React from 'react';
import SideBar from "./components/SideBar";
import {Navigate, Route, Routes} from "react-router-dom";
import Total from "./pages/Total";
import Calendar from "./pages/Calendar";
import Report from "./pages/Report";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Auth from "./components/login/Auth";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const user = JSON.parse(localStorage.getItem("profile"));
    return (
        <>
          <Header/>
          <SideBar>
              <ToastContainer/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/user"} element={<Total/>}/>
                <Route path={"/total"} element={<Total/>}/>
                <Route path={"/calendar"} element={<Calendar/>}/>
                <Route path={"/report"} element={<Report/>}/>
                <Route path={"/auth"} element={<Auth/>}/>
                <Route
                    path="/auth"
                    element={!user ? <Auth /> : <Navigate replace to="/" />}
                />
            </Routes>
          </SideBar>
        </>
    );
};

export default App;