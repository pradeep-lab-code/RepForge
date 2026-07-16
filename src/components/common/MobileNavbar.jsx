import { List, Bell } from "phosphor-react";
import logo from "../../assets/images/repforge-logo.png";

const MobileNavbar = ({ onMenuClick }) => {
  return (
    <header className="lg:hidden bg-surface border-b border-border p-4 relative z-30">

      <div className="flex justify-between items-center">

        <button
          type="button"
          onClick={onMenuClick}
          className="relative z-30"
        >
          <List
            size={30}
            className="text-text-primary"
          />
        </button>

        <div className="flex items-center gap-2">
          <img
            src={logo}
            className="w-8 h-8"
            alt="RepForge"
          />
          <h2 className="text-xl font-bold text-text-primary">
            RepForge
          </h2>
        </div>

        <Bell
          size={24}
          className="text-text-primary"
        />

      </div>

    </header>
  );
};

export default MobileNavbar;