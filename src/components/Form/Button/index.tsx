export const Button = ({
  label,
  className,
  handleClick,
  disabled = false,
}: {
  label: string;
  className: string;
  handleClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <>
      <div
        className={`${className} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:opacity-70"}`}
        onClick={!disabled ? handleClick : undefined}
      >
        {label}
      </div>
    </>
  );
};
