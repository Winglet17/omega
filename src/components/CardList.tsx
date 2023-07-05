import { useAppSelector } from "../hooks/useAppStore";
import { selectCards } from "../stores/cards/cardsSlice";
import { Card } from "./Card";
import styles from "./CardList.module.scss";

export const CardList = () => {
  const { cards } = useAppSelector(selectCards);

  return (
    <div className={styles["card-list"]}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};
