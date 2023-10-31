import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAccount, signInWithGoogle } from "../../services/user.api";
// import AuthPageImg from "../../assets/img/auth_img.png";
import GoogleSvg from "../../assets/svg/google.svg";
import Input from "../../ui/shared/Input";
import Button from "../../ui/shared/Button";

function SignUp() {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    const createAccountStatus = await createAccount(inputData);
    if (createAccountStatus) {
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
  return (
    <section className=" p-4 xl:py-10 xl:px-0">
      <div className="max-w-[1000px] flex justify-center h-auto bg-[#EAECF6] rounded-2xl my-10 mx-auto">
        <div className="hidden w-full md:w-1/2 md:flex items-center justify-center p-10">
          {/* <img src={AuthPageImg} alt="AuthPageImg" /> */}
        </div>
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-4xl font-bold mb-10">Sign Up</h1>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
              <Input
                type="text"
                title="Username"
                placeholder="Username"
                id="username"
                onChange={onChange}
              />
              <Input
                type="email"
                title="Email"
                placeholder="email@gmail.com"
                id="email"
                onChange={onChange}
              />
              <Input
                type="password"
                title="Password"
                placeholder="******"
                id="password"
                onChange={onChange}
              />
              <Input
                type="password"
                title="Confirm Password"
                placeholder="******"
                id="confirmPassword"
                onChange={onChange}
              />
              <Button title="Sign Up" customClass="w-full my-6" />
            </div>
          </form>
          <div className="my-6 flex justify-center">
            <p>
              Already Have An Account?{" "}
              <Link to="/signin" className="underline hover:text-[#5E17EB]">
                LOG IN
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
              <img src={GoogleSvg} alt="Google Logo" className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
