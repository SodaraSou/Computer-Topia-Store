import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleSvg from "../../assets/svg/google.svg";
import {
  signInUser,
  resetPassword,
  signInWithGoogle,
} from "../../services/user.api";
import Input from "../../ui/shared/Input";
import Button from "../../ui/shared/Button";
// import AuthPageImg from "../../assets/img/auth_img.png";

function SignIn() {
  const [showForgetPassword, setShowForgetPassword] = useState(false);
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
  const [resetEmail, setResetEmail] = useState("");
  const onChangeResetEmail = (e) => {
    setResetEmail(e.target.value);
  };
  const forgetPassword = (e) => {
    e.preventDefault();
    resetPassword(resetEmail);
  };
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const loginStatus = await signInUser(inputData);
    if (loginStatus) {
      navigate("/");
    }
  };
  const googleAuth = async (e) => {
    e.preventDefault();
    const googleLoginStatus = await signInWithGoogle();
    if (googleLoginStatus) {
      navigate("/profile");
    }
  };
  return showForgetPassword ? (
    <section className="p-4 xl:py-10 xl:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[500px] h-auto flex flex-col gap-4 bg-[#D9D9D9] rounded-2xl my-10 p-5 mx-auto">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <div className="h-[1px] bg-white flex-grow"></div>
          <h2 className="text-lg ">
            Please put your email to search for your account.
          </h2>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="rounded-xl w-full h-[38px] px-4"
            onChange={onChangeResetEmail}
          />
          <div className="h-[1px] bg-white flex-grow"></div>
          <div className="w-ful flex justify-end">
            <button
              onClick={() => setShowForgetPassword(false)}
              className="text-xl px-4 h-[38px] w-[90px]  ml-3 bg-white rounded-lg font-semibold hover:bg-sky-400 hover:duration-200"
            >
              Cancel
            </button>
            <button
              onClick={forgetPassword}
              className="text-xl ml-3  px-4 h-[38px] w-[90px]  bg-white rounded-lg font-semibold hover:bg-sky-400 hover:duration-200"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="max-w-7xl mx-auto">
      <section className="p-4 xl:py-10 xl:px-0">
        <div className="max-w-[1000px] flex justify-center h-auto bg-[#D9D9D9] rounded-2xl my-10 mx-auto">
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
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setShowForgetPassword(true)}
                  className="underline hover:text-sky-400"
                >
                  Forgot Password?
                </button>
              </div>
              <Button title="Login" onClick={onSubmit} />
              <div className="mb-6 flex justify-center">
                <p>
                  Don't Have Account?{" "}
                  <Link to="/signup" className="underline hover:text-sky-400">
                    SIGN UP
                  </Link>
                </p>
              </div>
              <div className="relative flex items-center justify-center py-2">
                <div className="h-[1px] bg-black flex-grow"></div>
                <p className="absolute text-lg bg-[#D9D9D9] px-3">
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
