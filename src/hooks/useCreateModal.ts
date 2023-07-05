import { useId } from "react";
import { ModalComponent, useModalDispatch } from "../contexts/ModalContext";

export const useCreateModal = (Component: ModalComponent) => {
  const dispatch = useModalDispatch();

  const id = useId();
  const payload = { id, Component };

  const showModal = () => {
    dispatch({ type: "CREATE_MODAL", payload });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL", payload });
  };

  return {
    showModal,
    closeModal,
  };
};
