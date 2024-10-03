// import React, { useState, useEffect, useMemo } from "react";
import React from "react";
// import CommonLoading from "./components/common/CommonLoading";
import App from "./App";
import { useLocation } from "react-router-dom";
import { getTitleFromRoute } from "./utils/appTitles";
import { Helmet } from "react-helmet";
import MyContextProvider from "./utils/MainContextProvider";

// const ErrorComponent = ({ errorMessage }) => (
//   <div className="text-red-500 font-bold text-center">{errorMessage}</div>
// );

const AppContainer = () => {
  // const [loading, setLoading] = useState(true);
  
  const location = useLocation();

  const pageTitle = getTitleFromRoute(location.pathname);

  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const checkServerStatus = async () => {
  //     try {
  //       await axios.get("https://socialecho.netlify.app/server-status");
  //     } catch (err) {
  //       setError("Server is down. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkServerStatus();
  // }, []);

  // if (loading || error) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       {loading ? <CommonLoading /> : <ErrorComponent errorMessage={error} />}
  //     </div>
  //   );
  // }

  return (
    <React.Fragment>
      <Helmet >
        <title > { pageTitle } </title>
      </Helmet>
      <MyContextProvider >
      <App />
      </MyContextProvider>
    </React.Fragment>
  );
};

export default AppContainer;
