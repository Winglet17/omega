import { AppButton } from "./AppButton";
import styles from "./Card.module.scss";
import { remove, buy, ICard } from "../stores/cards/cardsSlice";
import { useAppDispatch } from "../hooks/useAppStore";
import { FC, useMemo } from "react";

export const Card: FC<Props> = ({ card }) => {
  const dispatch = useAppDispatch();

  const buyText = useMemo(
    () => (card.status === "available" ? "Купить" : "Куплено"),
    [card.status]
  );

  return (
    <div className={styles.card}>
      <div className={styles.description}>
        <div className={styles.fields}>
          <div>Название</div>
          <div>{card.name}</div>
          <div>Цена</div>
          <div>{card.price}</div>
          <div>Статус</div>
          <div>{card.status}</div>
          <div>Изображение</div>
          <div>{card.imgLink}</div>
          <div>Описание</div>
          <div>{card.description}</div>
        </div>
      </div>
      <div className={styles.actions}>
        <AppButton
          text={buyText}
          onClick={() => dispatch(buy(card.id))}
          color={card.status === "available" ? "default" : "red"}
        />
        <AppButton
          text="Удалить"
          onClick={() => dispatch(remove(card.id))}
          color="red"
        />
      </div>
    </div>
  );
};

interface Props {
  card: ICard;
}
