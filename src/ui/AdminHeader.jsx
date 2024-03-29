import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../services/user.api";
import Logo from "../assets/img/Logo 240 x 56.png";

function AdminHeader({ onClick, handleUser }) {
  const navigate = useNavigate();
  const logOut = () => {
    const response = signOutUser();
    handleUser();
    if (response) {
      navigate("/");
    }
  };
  return (
    <header className="flex justify-between items-center bg-[#EAECF6] p-4 md:p-6 sticky top-0 left-0 z-40">
      <button onClick={onClick} className="hidden xl:flex">
        <FontAwesomeIcon icon={faBars} className="text-[#5E17EB]" />
      </button>
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          className="block xl:hidden w-[200px] md:w-full"
        />
      </Link>
      <button
        onClick={logOut}
        className="block xl:hidden bg-red-500 px-3 py-2 rounded-xl"
      >
        <FontAwesomeIcon icon={faRightFromBracket} className="text-white" />
      </button>
    </header>
  );
}

export default AdminHeader;
