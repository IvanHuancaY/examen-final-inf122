import Image from "next/image";
import styles from "./page.module.css";
import Pokemon from "./components/caterpie";

export default function Home() {
  return (
    <div className={styles.main}>
      <Pokemon />
    </div>
  );
}
