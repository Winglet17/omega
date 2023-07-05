import { FC, InputHTMLAttributes } from "react";
import styles from "./AppInput.module.scss";

export const AppInput: FC<Props> = ({ ...otherProps }) => {
  return <input className={styles.input} {...otherProps} />;
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {}
