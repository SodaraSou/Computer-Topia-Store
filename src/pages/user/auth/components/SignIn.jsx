import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser, signInWithGoogle } from "../../../../services/user.api";
import UserContext from "../../../../contexts/user/UserContext";
import GoogleSvg from "../../../../assets/svg/google.svg";
import Input from "../../../../ui/shared/Input";
import Button from "../../../../ui/shared/Button";

function SignIn({ setAuthOption, setLoading }) {
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
  return (
    <div className="w-full md:w-1/2 p-10">
      <h1 className="text-4xl font-bold mb-10">Login</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <Input
          title="Email"
          type="email"
          placeholder="example@gmail.com"
          id="email"
          onChange={onChange}
          isRequired={true}
        />
        <Input
          title="Password"
          type="password"
          placeholder="********"
          id="password"
          onChange={onChange}
          isRequired={true}
        />
        <div className="flex justify-end mb-6">
          <button
            type="button"
            onClick={() => setAuthOption("Forget Password")}
            className="underline hover:text-[#5E17EB]"
          >
            Forgot Password?
          </button>
        </div>
        <Button type="submit" customClass="md:w-full">
          Login
        </Button>
      </form>
      <div className="my-6 flex justify-center">
        <p>
          Don't Have Account?{" "}
          <button
            onClick={() => setAuthOption("Sign Up")}
            className="underline hover:text-[#5E17EB]"
          >
            SIGN UP
          </button>
        </p>
      </div>
      <div className="relative flex items-center justify-center py-2">
        <div className="h-[1px] bg-black flex-grow"></div>
        <p className="absolute text-lg bg-[#EAECF6] px-3">or sign in with</p>
      </div>
      <div className="flex justify-center mt-6 gap-10">
        <button onClick={googleAuth}>
          {" "}
          <img src={GoogleSvg} alt="Facebook Logo" className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}

export default SignIn;
