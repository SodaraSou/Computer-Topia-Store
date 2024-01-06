import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStatus } from "../../../hooks/useAuthStatus";
import AuthPageImg from "../../../assets/img/auth_img.webp";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";

function Authentication({ setLoading }) {
  const { loggedIn } = useAuthStatus();
  const [authOption, setAuthOption] = useState("Sign In");
  let authToShow = null;
  switch (authOption) {
    case "Sign In":
      authToShow = (
        <SignIn setAuthOption={setAuthOption} setLoading={setLoading} />
      );
      break;
    case "Sign Up":
      authToShow = (
        <SignUp setAuthOption={setAuthOption} setLoading={setLoading} />
      );
      break;
    case "Forget Password":
      authToShow = (
        <ForgetPassword setAuthOption={setAuthOption} setLoading={setLoading} />
      );
      break;
    default:
      break;
  }
  if (loggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <section className="max-w-[1000px] mx-auto flex flex-col justify-center p-4">
      <div className="flex bg-[#EAECF6] rounded-2xl my-10">
        <div className="hidden w-full md:w-1/2 md:flex items-center justify-center p-10">
          <img src={AuthPageImg} alt="AuthPageImg" />
        </div>
        {authToShow}
      </div>
    </section>
  );
}

export default Authentication;
