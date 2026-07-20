import { useState } from "react";
import { Link } from "react-router-dom";
import { List, X } from "phosphor-react";

import logo from "../../assets/images/repforge-logo.png";
import Button from "../../components/common/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="RepForge" className="w-11 h-11" />
          <h1 className="text-2xl font-bold text-text-primary">
            RepForge
          </h1>
        </Link>

        {/* Desktop Nav */}

        <nav className="hidden lg:flex items-center gap-8 text-text-secondary">

          <a href="#features" className="hover:text-primary transition">
            Features
          </a>

          <a href="#how" className="hover:text-primary transition">
            How it Works
          </a>

          <Link to="/workouts" className="hover:text-primary transition">
            Workouts
          </Link>

        </nav>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex gap-3">

          <Link to="/login" className="w-28">
            <Button variant="outline">Login</Button>
          </Link>

          <Link to="/signup" className="w-32">
            <Button>Get Started</Button>
          </Link>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-text-primary"
        >
          {open ? <X size={30} /> : <List size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden border-t border-border bg-surface">

          <nav className="flex flex-col p-6 gap-5">

            <a href="#features" onClick={() => setOpen(false)}>
              Features
            </a>

            <a href="#how" onClick={() => setOpen(false)}>
              How it Works
            </a>

            <Link to="/workouts" onClick={() => setOpen(false)}>
              Workouts
            </Link>

            <Link to="/login" onClick={() => setOpen(false)}>
              <Button variant="outline">
                Login
              </Button>
            </Link>

            <Link to="/signup" onClick={() => setOpen(false)}>
              <Button>
                Get Started
              </Button>
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
};

export default Navbar;