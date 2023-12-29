import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../contexts/user/UserAction";
import LogoSvg from "../assets/svg/Logo-40x40.svg";

function AdminHeader({ onClick, handleUser }) {
  const navigate = useNavigate();
  const logOut = async () => {
    const response = await signOutUser();
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
        <img src={LogoSvg} alt="Logo" className="block xl:hidden w-5 h-5" />
      </Link>
      <button onClick={logOut} className="block xl:hidden">
        <FontAwesomeIcon icon={faRightFromBracket} className="text-[#5E17EB]" />
      </button>
    </header>
  );
}

export default AdminHeader;
