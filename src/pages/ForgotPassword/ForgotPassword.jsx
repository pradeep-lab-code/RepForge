import { Key } from "phosphor-react";
import Input from "../../components/common/Input";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="bg-background min-h-screen flex justify-center items-center p-10">
      <div className="w-full max-w-md bg-surface rounded-2xl p-8 ">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
            <Key size={40} weight="fill" className="text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-text-primary text-center">
          Forgot Password?
        </h1>
        <p className="text-text-secondary text-center mt-2">
          No worries! Enter your email to receive a reset link.
        </p>
        <div className="mt-8">
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email"
          ></Input>
          <div className="mt-8 text-center ">
            <Link to='/check-email' className="bg-primary rounded-2xl p-4 min-w-full text-text-primary ">Send Reset Link</Link>
          </div>
          <div className="mt-5 text-center">
            <Link to="/login" className="text-primary hover:underline ">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
