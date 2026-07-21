import { Link } from "react-router-dom";
import logo from "../../assets/images/repforge-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="RepForge"
                className="w-10 h-10"
              />

              <h2 className="text-2xl font-bold">
                RepForge
              </h2>

            </div>

            <p className="text-text-secondary mt-5 leading-7 max-w-sm">
              AI powered fitness platform helping you build
              personalized workouts, track progress and stay
              consistent.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 mt-5">

              <Link
                to="/login"
                className="text-text-secondary hover:text-primary transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="text-text-secondary hover:text-primary transition"
              >
                Sign Up
              </Link>

              <Link
                to="/workouts"
                className="text-text-secondary hover:text-primary transition"
              >
                Workout Library
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-5 space-y-3">

              <p className="text-text-secondary">
                hlopradeep7@gmail.com.com
              </p>

              <p className="text-text-secondary">
                Made with ❤️ using React + Tailwind CSS
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-border mt-12 pt-6 text-center">

          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} RepForge. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;