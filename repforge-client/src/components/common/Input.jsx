import { useState } from "react";
import { Eye, EyeSlash } from "phosphor-react";

const Input = ({ label, type, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-medium text-text-primary">{label}</label>

      <div className="relative">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full h-[52px] px-4 pr-12 rounded-xl border border-border bg-background text-text-primary placeholder:text-text-secondary outline-none focus:border-primary transition-all"
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition-colors"
          >
            {showPassword ? <EyeSlash size={22} /> : <Eye size={22} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
