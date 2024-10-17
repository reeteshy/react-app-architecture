import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../services/authSlice";

const AppLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = async() => {
    await dispatch(logout());
    navigate('/')
  };

  return (
    <Link className="nav-link btn-m-5" onClick={handleLogout}>
      Logout <FontAwesomeIcon icon={faRightFromBracket} />
    </Link>
  );
};

export default AppLogout;
