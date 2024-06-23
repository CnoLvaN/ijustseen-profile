import Image from "next/image";
import styles from "./base.module.scss";
import { Button, Typography } from "antd";

export default function Home() {
  const { Title } = Typography;
  return (
    <main className={styles.main}>
      <div className={styles.tittle}>
        <h1>
          <b>
            <span className={styles.colored}>{"ijustseen's"}</span>
          </b>
          <br />p o r t f o l i o
        </h1>
      </div>

      <div className={styles.img}>
        <Image src="/me.png" width={160} height={160} alt="me" />
      </div>

      <div className={styles.button}>
        <a href="/projects">
          <Button type="primary" size="large" shape="round">
            Last News
          </Button>
        </a>
      </div>
      <div className={styles.button}>
        <a href="/about">
          <Button type="primary" size="large" shape="round">
            About Me
          </Button>
        </a>
      </div>
    </main>
  );
}
