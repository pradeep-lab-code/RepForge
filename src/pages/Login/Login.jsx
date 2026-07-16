import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import logo from "../../assets/images/repforge-logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md bg-surface rounded-2xl p-8">
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="RepForge Logo"
            className="w-16 h-16 bg-black rounded-full p-2"
          />
        </div>
        <h1 className="text-3xl font-bold text-text-primary text-center">
          Welcome Back
        </h1>
        <p className="text-text-secondary text-center mt-2">
          Login to continue your fitness journey
        </p>
        <div className="mt-8">
          <Input label="Email" type="email" placeholder="Enter your email" />
          <div className="mt-5">
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="text-right mt-5">
            <Link
              to="/forgot-password"
              className="text-primary cursor-pointer hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-6">
            <Button onClick={() => alert("Login Clicked!")}>Login</Button>
          </div>
          <p className="text-center text-text-secondary mt-6">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-semibold hover:underline transition-colors"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
