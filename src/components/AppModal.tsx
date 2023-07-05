import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./AppModal.module.scss";

export const AppModal: FC<Props> = ({ children }) => {
  return createPortal(
    <div className={styles["modal-backdrop"]}>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.querySelector("#root") as HTMLElement
  );
};

interface Props {
  children: ReactNode;
}
