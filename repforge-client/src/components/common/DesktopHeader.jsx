import { BellSimple, UserCircle } from "phosphor-react";

const DesktopHeader = ({title}) => {
  return (
    <header className="hidden lg:flex justify-between items-center h-22 border-b border-border bg-surface px-8">

      <h1 className="text-2xl font-bold text-text-primary">
       {title}
      </h1>

      <div className="flex items-center gap-4">

        <button className="w-11 h-11 rounded-full bg-background flex items-center justify-center hover:bg-primary transition">
          <BellSimple
            size={20}
            className="text-text-primary"
          />
        </button>

        <button className="w-11 h-11 rounded-full bg-background flex items-center justify-center hover:bg-primary transition">
          <UserCircle
            size={26}
            weight="fill"
            className="text-text-primary"
          />
        </button>

      </div>

    </header>
  );
};

export default DesktopHeader;