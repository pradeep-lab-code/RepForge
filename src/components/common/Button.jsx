
const Button = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
}) => {

  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90",

    secondary:
      "bg-secondary text-white hover:opacity-90",

    outline:
      "bg-transparent border border-border text-text-primary hover:bg-primary hover:text-white",

    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        h-[52px]
        w-full
        rounded-xl
        font-semibold
        transition-all
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;