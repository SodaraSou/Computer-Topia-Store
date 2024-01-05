import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GoogleSvg from "../../../assets/svg/google.svg";
import { signInUser, signInWithGoogle } from "../../../services/user.api";
import { useAuthStatus } from "../../../hooks/useAuthStatus";
import AuthPageImg from "../../../assets/img/auth_img.webp";
import Input from "../../../ui/shared/Input";
import Button from "../../../ui/shared/Button";
import ForgotPassword from "./ForgotPassword";
import Spinner from "../../../ui/Spinner";

function SignIn() {
  const { loggedIn } = useAuthStatus();
  const [loading, setLoading] = useState(false);
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
  const onSubmit = async () => {
    setLoading(true);
    const loginStatus = await signInUser(inputData);
    setLoading(false);
    if (loginStatus) {
      navigate("/");
    }
  };
  const googleAuth = async () => {
    setLoading(true);
    const googleLoginStatus = await signInWithGoogle();
    setLoading(false);
    if (googleLoginStatus) {
      navigate("/");
    }
  };
  const [forgetPassword, setForgetPassword] = useState(false);
  const showForgetPassword = () => {
    setForgetPassword(!forgetPassword);
  };
  if (loggedIn) {
    return <Navigate to="/" />;
  }
  if (loading) {
    return <Spinner fullScreenSpinner={true} />;
  }
  return forgetPassword ? (
    <ForgotPassword showForgetPassword={showForgetPassword} />
  ) : (
    <section className="max-w-7xl mx-auto flex flex-col justify-center p-4">
      <div className="max-w-[1000px] flex justify-center h-auto bg-[#EAECF6] rounded-2xl my-10 mx-auto">
        <div className="hidden w-full md:w-1/2 md:flex items-center justify-center p-10">
          <img src={AuthPageImg} alt="AuthPageImg" />
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
            <Button onClick={onSubmit} customClass="md:w-full">
              Login
            </Button>
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
                <img src={GoogleSvg} alt="Facebook Logo" className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
