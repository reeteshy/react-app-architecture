import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function ErrorAlert({error}) {

  const [toggleAlerts, setToggleAlerts] = useState(true);
  console.log("errorerror ", error)

  return (
    <>
    {
        toggleAlerts ?  (<div className="alert alert-danger alert-dismissible">
            <button
              type="button"
              className="close"
              onClick={() => setToggleAlerts(false)}
            >
              ×
            </button>
            <FontAwesomeIcon icon={faBan} />{" "}
            {error?.data?.message || "Signup Failed!"}
          </div> ) : null
    }
      
    </>
  );
}

export default ErrorAlert;
