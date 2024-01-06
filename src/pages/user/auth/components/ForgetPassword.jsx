import { useState } from "react";
import { resetPassword } from "../../../../services/user.api";
import Input from "../../../../ui/shared/Input";
import Button from "../../../../ui/shared/Button";

function ForgetPassword({ setAuthOption, setLoading }) {
  const [resetEmail, setResetEmail] = useState("");
  const onChangeResetEmail = (e) => {
    setResetEmail(e.target.value);
  };
  const forgetPassword = (e) => {
    e.preventDefault();
    setLoading(true);
    resetPassword(resetEmail);
    setLoading(false);
  };
  return (
    <div className="w-full md:w-1/2 p-10">
      <h1 className="text-4xl font-bold mb-10">Reset Password</h1>
      <form onSubmit={forgetPassword} className="flex flex-col gap-4">
        <Input
          title="Please put your email to search for your account."
          type="email"
          placeholder="example@gmail.com"
          onChange={onChangeResetEmail}
          isRequired={true}
        />
        <div className="w-full flex justify-end gap-2">
          <Button type="button" onClick={() => setAuthOption("Sign In")}>
            Cancel
          </Button>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default ForgetPassword;
