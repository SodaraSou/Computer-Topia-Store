import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleSvg from "../../assets/svg/google.svg";
import {
  signInUser,
  resetPassword,
  signInWithGoogle,
} from "../../services/user.api";
// import AuthPageImg from "../../assets/img/auth_img.png";
import Input from "../../ui/shared/Input";
import Button from "../../ui/shared/Button";
import ForgotPassword from "./ForgotPassword";

function SignIn() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const loginStatus = await signInUser(inputData);
    if (loginStatus) {
      navigate("/profile");
    }
  };
  const googleAuth = async (e) => {
    e.preventDefault();
    const googleLoginStatus = await signInWithGoogle();
    if (googleLoginStatus) {
      navigate("/profile");
    }
  };
  const [forgetPassword, setForgetPassword] = useState(false);
  const showForgetPassword = () => {
    setForgetPassword(!forgetPassword);
  };
  return forgetPassword ? (
    <ForgotPassword showForgetPassword={showForgetPassword} />
  ) : (
    <div className="max-w-7xl mx-auto">
      <section className="p-4 xl:py-10 xl:px-0">
        <div className="max-w-[1000px] flex justify-center h-auto bg-[#EAECF6] rounded-2xl my-10 mx-auto">
          <div className="hidden w-full md:w-1/2 md:flex items-center justify-center p-10">
            {/* <img src={AuthPageImg} alt="AuthPageImg" /> */}
          </div>
          <div className="w-full md:w-1/2 p-10">
            <h1 className="text-4xl font-bold mb-10">Login</h1>
            <div className="flex flex-col gap-2">
              <Input
                title="Email"
                type="email"
                placeholder="example@gmail.com"
                id="email"
                onChange={onChange}
              />
              <Input
                title="Password"
                type="password"
                placeholder="******"
                id="password"
                onChange={onChange}
              />
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setForgetPassword(true)}
                  className="underline hover:text-[#5E17EB]"
                >
                  Forgot Password?
                </button>
              </div>
              <Button title="Login" onClick={onSubmit} customClass="w-full" />
              <div className="my-6 flex justify-center">
                <p>
                  Don't Have Account?{" "}
                  <Link to="/signup" className="underline hover:text-[#5E17EB]">
                    SIGN UP
                  </Link>
                </p>
              </div>
              <div className="relative flex items-center justify-center py-2">
                <div className="h-[1px] bg-black flex-grow"></div>
                <p className="absolute text-lg bg-[#EAECF6] px-3">
                  or sign in with
                </p>
              </div>
              <div className="flex justify-center mt-6 gap-10">
                <button onClick={googleAuth}>
                  {" "}
                  <img
                    src={GoogleSvg}
                    alt="Facebook Logo"
                    className="w-7 h-7"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
