import { ChangeEvent, useId, useState } from "react";
import { AppButton } from "./AppButton";
import { AppInput } from "./AppInput";
import styles from "./CardModal.module.scss";
import { useAppDispatch } from "../hooks/useAppStore";
import { add } from "../stores/cards/cardsSlice";
import { ModalComponent } from "../contexts/ModalContext";

export const CardModal: ModalComponent = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [description, setDescription] = useState("");

  const handleName = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setName(target.value);
  const handlePrice = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setPrice(target.value);
  const handleImgLink = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setImgLink(target.value);
  const handleDescription = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setDescription(target.value);

  const dispach = useAppDispatch();
  const id = useId();
  const createCard = () => {
    dispach(
      add({
        id,
        name,
        price,
        imgLink,
        description,
        status: "available",
      })
    );
    closeModal();
  };

  return (
    <>
      <div className={styles.modal}>
        <AppInput value={name} onChange={handleName} placeholder="Name" />
        <AppInput value={price} onChange={handlePrice} placeholder="Price" />
        <AppInput
          value={imgLink}
          onChange={handleImgLink}
          placeholder="Image Link"
        />
        <AppInput
          value={description}
          onChange={handleDescription}
          placeholder="description"
        />
      </div>
      <div className={styles.actions}>
        <AppButton text="Создать" onClick={createCard} />
        <AppButton text="Отменить" onClick={closeModal} color="red" />
      </div>
    </>
  );
};
