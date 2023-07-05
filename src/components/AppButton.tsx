import { ButtonHTMLAttributes, FC } from "react";
import styles from "./AppButton.module.scss";

export const AppButton: FC<Props> = ({
  text,
  color = "default",
  ...otherProps
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button-${color}`]}`}
      {...otherProps}
    >
      {text}
    </button>
  );
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: "default" | "red";
}
