const Button = ({
  children,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        h-[52px]
        rounded-xl
        bg-primary
        text-text-primary
        font-semibold
        cursor-pointer
        transition-all
        hover:opacity-90
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;