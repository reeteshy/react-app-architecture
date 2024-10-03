import { Route, Routes } from "react-router-dom";
import './App.css'
import { SignIn, SignUp, Dashboard, PageNotFound, ServerError } from "./pages";
import Users from "./pages/admin/Users";
import AllModels from "./pages/admin/AllModels";
import FormInputs from "./pages/admin/FormInputs";

export default function App() {


  return (
    <>
    <Routes >
      <Route path={'/'} element={<SignIn />} />
      <Route path={'/signUp'} element={<SignUp />} />
      <Route path={'/dashboard'} element={<Dashboard />} />
      <Route path={'/serverError'} element={<ServerError />} />
      <Route path={'/datatable'} element={<Users />} />
      <Route path={'/models'} element={<AllModels />} />
      <Route path={'/formInput'} element={<FormInputs />} />
      <Route path={'/*'} element={<PageNotFound />} />
    </Routes>
    </>
  );
}
