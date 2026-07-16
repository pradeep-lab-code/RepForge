import {  EnvelopeSimple } from "phosphor-react";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const CheckEmail = () => {
  return (
    <div className="bg-background min-h-screen flex justify-center items-center p-10">
      <div className="w-full max-w-md bg-surface rounded-2xl p-8 ">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
            <EnvelopeSimple size={40} weight="fill" className="text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-text-primary text-center">
         Check Your Email
        </h1>
        <p className="text-text-secondary text-center mt-2">
          We've sent a password reset link to your email
        </p>
        <div className="mt-8">
            <p className="text-text-primary font-medium text-center">Check your inbox and spam folder</p>
          <div className="mt-5">
            <Button>Open Email App</Button>
          </div>
           <p className="text-left text-text-secondary mt-6">
            Didn't Receive it?{" "}<br></br>
            <Link
              to="/signup"
              className="text-primary font-semibold hover:underline transition-colors"
            >
             Resend Again
            </Link>
          </p>
          <div className="mt-5 text-center">
            <Link to='/login' className="bg-transparent border border-border text-text-primary hover:bg-background">
  Back to Login
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
