import { FC, ReactNode } from "react";
interface IButtonProps {
  variant?: "primary" | "secondary" | "outline";
  isFontSize?: boolean;
  children: ReactNode;
}
const Button: FC<IButtonProps> = ({
  variant = "primary",
  isFontSize,
  children,
}) => {
  return (
    <button
      className={`btn ${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : "btn-outline"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
