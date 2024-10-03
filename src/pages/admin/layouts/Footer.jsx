import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <strong>
          Copyright &copy; 2023-2024{" "}
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.0.0
        </div>
      </footer>
    </>
  );
}

export default Footer;
