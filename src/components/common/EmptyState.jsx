import Button from "./Button";

const EmptyState = ({
  icon,
  title,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">

      <div className="text-primary mb-6">
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-text-primary">
        {title}
      </h2>

      <p className="text-text-secondary mt-3 max-w-md">
        {description}
      </p>

      {buttonText && (
        <div className="mt-8 w-56">
          <Button onClick={onClick}>
            {buttonText}
          </Button>
        </div>
      )}

    </div>
  );
};

export default EmptyState;