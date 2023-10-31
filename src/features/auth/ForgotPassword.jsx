import { useState } from "react";
import { resetPassword } from "../../services/user.api";
import Button from "../../ui/shared/Button";

function ForgotPassword({ showForgetPassword }) {
  const [resetEmail, setResetEmail] = useState("");
  const onChangeResetEmail = (e) => {
    setResetEmail(e.target.value);
  };
  const forgetPassword = (e) => {
    e.preventDefault();
    resetPassword(resetEmail);
  };
  return (
    <section className="p-4 xl:py-10 xl:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[500px] h-auto flex flex-col gap-4 bg-[#EAECF6] rounded-2xl my-10 p-5 mx-auto">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <div className="h-[1px] bg-white flex-grow"></div>
          <h2 className="text-lg ">
            Please put your email to search for your account.
          </h2>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="rounded-xl w-full px-4 py-2 border"
            onChange={onChangeResetEmail}
          />
          <div className="h-[1px] bg-white flex-grow"></div>
          <div className="w-ful flex justify-end gap-2">
            <Button
              title="Cancel"
              onClick={showForgetPassword}
              customClass="w-28"
            />
            <Button title="Send" onClick={forgetPassword} customClass="w-28" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
