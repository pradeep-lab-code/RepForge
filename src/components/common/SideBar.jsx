import { Link, useLocation } from "react-router-dom";
import { House, Barbell, ChartBar, User, SignOut, X } from "phosphor-react";

import logo from "../../assets/images/repforge-logo.png";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: House,
    },
    {
      name: "Workouts",
      path: "/workouts",
      icon: Barbell,
    },
    {
      name: "Progress",
      path: "/progress",
      icon: ChartBar,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-all duration-300
        ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50

          w-64
          h-screen

          bg-surface
          border-r border-border

          flex flex-col

          transition-transform duration-300 ease-in-out

          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}

        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RepForge" className="w-10 h-10" />

            <h1 className="text-2xl font-bold text-text-primary">RepForge</h1>
          </div>

          {/* Close Button (Mobile Only) */}

          <button onClick={onClose} className="lg:hidden">
            <X size={28} className="text-text-primary" />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-4 p-4 rounded-xl mb-2 transition-all duration-200
                ${
                  active
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:bg-background hover:text-text-primary"
                }`}
              >
                <Icon size={22} />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}

        <div className="p-4 border-t border-border">
          <button className="w-full flex items-center gap-4 p-4 rounded-xl text-red-400 hover:bg-background transition">
            <SignOut size={22} />

            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
