import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { Link } from "react-router-dom";
import { UserPlus } from "phosphor-react";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-10">
      <div className="w-full max-w-md bg-surface rounded-2xl p-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
            <UserPlus size={40} weight="fill" className="text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-text-primary text-center">
          Create Account
        </h1>
        <p className="text-text-secondary text-center mt-2">
          Start your fitness journey today
        </p>
        <div className="mt-8">
          <Input
            label="FullName"
            type="email"
            placeholder="Enter your FullName"
          />
          <div className="mt-5">
            <Input label="Email" type="email" placeholder="Enter your Email" />
          </div>
          <div className="mt-5">
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-5">
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <div className="mt-6">
            <Button onClick={() => alert("Login Clicked!")}>
              Create Account
            </Button>
          </div>
          <p className="text-center text-text-secondary mt-6">
            Already have an account?
            <span className="text-text-primary font-semibold cursor-pointer">
              {" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
