import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInUser } from "../../contexts/user/UserAction";
import InputGroup from "../../components/shared/InputGroup";
import Button from "../../components/shared/Button";
import Logo from "../../assets/img/Logo 150 x 100.png";

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
    const repsonse = await signInUser(inputData);
    if (repsonse) {
      navigate("/");
      toast.success("Welcome Admin!");
    } else {
      toast.error("Not Admin");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen p-4 md:p-0">
      <div className="w-full md:w-[500px] bg-[#EAECF6] flex flex-col gap-4 p-10 rounded-2xl">
        <div className="flex flex-col items-center gap-4">
          <img src={Logo} alt="Logo" width={150} height={100} />
          <h1 className="text-4xl font-bold">Login</h1>
        </div>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <InputGroup
            type="email"
            title="Email"
            placeholder="example@gmail.com"
            onChange={onChange}
            id="email"
          />
          <InputGroup
            type="password"
            title="Password"
            placeholder="********"
            onChange={onChange}
            id="password"
          />
          <Button customClass="md:w-full mt-4">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
