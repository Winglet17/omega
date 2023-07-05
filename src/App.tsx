import { CardList } from "./components/CardList";
import { AppButton } from "./components/AppButton";
import { CardModal } from "./components/CardModal";
import { useCreateModal } from "./hooks/useCreateModal";
import styles from "./App.module.scss";

function App() {
  const { showModal } = useCreateModal(CardModal);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Список покупок</h1>
        <AppButton text="Создать" onClick={showModal} />
      </header>
      <CardList />
    </div>
  );
}

export default App;
