import Image from "next/image";
import styles from "./base.module.scss";
import { Button, Typography } from "antd";

export default function Home() {
  const { Title } = Typography;
  return (
    <main className={styles.main}>
      <div className={styles.tittle}>
        <h1>Telegram miniApp</h1>
      </div>

      <div className={styles.img}>
        <Image src="/me.png" width={320} height={320} alt="me" />
      </div>

      <div className={styles.button}>
        <a href="/projects">
          <Button type="primary" size="large" shape="round">
            See the Projects
          </Button>
        </a>
      </div>
    </main>
  );
}
