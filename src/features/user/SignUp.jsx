import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAccount, signInWithGoogle } from "../../services/user.api";
// import AuthPageImg from "../../assets/img/auth_img.png";
import GoogleSvg from "../../assets/svg/google.svg";

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
      <div className="max-w-[1000px] flex justify-center h-auto bg-[#D9D9D9] rounded-2xl my-10 mx-auto">
        <div className="hidden w-full md:w-1/2 md:flex items-center justify-center p-10">
          {/* <img src={AuthPageImg} alt="AuthPageImg" /> */}
        </div>
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-4xl font-bold mb-10">Sign Up</h1>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="firstName" className="text-lg font-semibold">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  onChange={onChange}
                  className="rounded-xl w-full h-[38px] px-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-lg font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  id="email"
                  onChange={onChange}
                  className="rounded-xl w-full h-[38px] px-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-lg font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  id="password"
                  onChange={onChange}
                  className="rounded-xl w-full h-[38px] px-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-lg font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  id="confirmPassword"
                  onChange={onChange}
                  className="rounded-xl w-full h-[38px] px-4"
                />
              </div>
              <button className="w-full my-6 bg-white p-2 rounded-xl font-semibold hover:bg-sky-400 hover:duration-200">
                Sign Up
              </button>
              <div className="mb-6 flex justify-center">
                <p>
                  Already Have An Account?{" "}
                  <Link to="/signin" className="underline hover:text-sky-400">
                    LOG IN
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
                  <img src={GoogleSvg} alt="Google Logo" className="w-7 h-7" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
