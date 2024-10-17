import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "./utils/OtherStyle.css";
import { SignIn, SignUp, Dashboard, PageNotFound, ServerError } from "./pages";
import Users from "./pages/admin/users/Users";
import AllModels from "./pages/admin/AllModels";
import FormInputs from "./pages/admin/FormInputs";
import ForgetPassword from "./pages/auth/ForgetPassword";
import RecoverPassword from "./pages/auth/RecoverPassword";
import BlankPage from "./pages/admin/BlankPage";
import MyProfile from "./pages/admin/MyProfile";
// import ProtectedRoute from "./pages/admin/components/ProtectedRoute.jsx";
import { useSelector } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";
import Products from "./pages/admin/product/Products";
import Categories from "./pages/admin/category/Categories";

export default function App() {

  const token = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate()


  return (
    <>
      <Routes>
        {/* List of Pages  */}
        <Route path={"/"} element={<SignIn />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route
          path={"/dashboard"}
          element={ <ProtectedRoute><Dashboard /></ProtectedRoute>  }
        />
        <Route path={"/forget-password"} element={<ForgetPassword />} />
        <Route path={"/recover-password"} element={<RecoverPassword />} />
        <Route path={"/my-profile"} element={<MyProfile />} />
        <Route path={"/products"} element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path={"/categories"} element={<ProtectedRoute><Categories /></ProtectedRoute>} />

        {/* Component Pages  */}
        <Route path={"/models"} element={<AllModels />} />
        <Route path={"/form-input"} element={<FormInputs />} />
        <Route path={"/blank-page"} element={<BlankPage />} />
        <Route path={"/add-new"} element={<FormInputs />} />
        <Route path={"/datatable"} element={<Users />} />

        {/* Handler Pages  */}
        <Route path={"/serverError"} element={<ServerError />} />
        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>
    </>
  );
}
