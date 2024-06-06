import Image from "next/image";
import styles from "./base.module.scss";
import { Button, Typography } from "antd";

export default function Home() {
  const { Title } = Typography;
  return (
    <main className={styles.main}>
      <div className={styles.img}>
        <h1>Telegram miniApp</h1>
      </div>

      <div className={styles.img}>
        <Image src="/cat.png" width={320} height={320} alt="me" />
      </div>

      <div className={styles.button}>
        <a href="/projects">
          <Button type="primary" size="large" shape="round">
            Primary Button
          </Button>
        </a>
      </div>
    </main>
  );
}
