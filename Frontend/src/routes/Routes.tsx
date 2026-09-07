import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Login from "../pages/auth/Login/Index";
import Signup from "../pages/auth/Signup/Index";
import Home from "../pages/app/home/Index";
import AppLayout from "../components/layout/AppLayout";


export const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

        <Route element={<AppLayout />}>
            
            <Route index path="/" element={<Home/>} />
            
            <Route path="/" element={<PrivateRoute />}></Route>

        </Route>

        </>
    )
)