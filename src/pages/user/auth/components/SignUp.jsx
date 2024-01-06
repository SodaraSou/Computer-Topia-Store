import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccount, signInWithGoogle } from "../../../../services/user.api";
import GoogleSvg from "../../../../assets/svg/google.svg";
import Input from "../../../../ui/shared/Input";
import Button from "../../../../ui/shared/Button";

function SignUp({ setAuthOption, setLoading }) {
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
    setLoading(true);
    const createAccountStatus = await createAccount(inputData);
    setLoading(false);
    if (createAccountStatus) {
      navigate("/profile");
    }
  };
  const googleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    const googleLoginStatus = await signInWithGoogle();
    setLoading(false);
    if (googleLoginStatus) {
      navigate("/profile");
    }
  };
  return (
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
            isRequired={true}
          />
          <Input
            type="email"
            title="Email"
            placeholder="email@gmail.com"
            id="email"
            onChange={onChange}
            isRequired={true}
          />
          <Input
            type="password"
            title="Password"
            placeholder="********"
            id="password"
            onChange={onChange}
            isRequired={true}
          />
          <Input
            type="password"
            title="Confirm Password"
            placeholder="********"
            id="confirmPassword"
            onChange={onChange}
            isRequired={true}
          />
          <Button type="submit" customClass="md:w-full mt-6">
            Sign Up
          </Button>
        </div>
      </form>
      <div className="my-6 flex justify-center">
        <p>
          Already Have An Account?{" "}
          <button
            onClick={() => setAuthOption("Sign In")}
            className="underline hover:text-[#5E17EB]"
          >
            LOG IN
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
          <img src={GoogleSvg} alt="Google Logo" className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}

export default SignUp;
