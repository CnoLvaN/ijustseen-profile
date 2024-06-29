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
      <div className={styles.buttons}>
        <div className={styles.button}>
          <a href="/projects">
            <button className={styles.btnHuge}>Last News</button>
          </a>
        </div>
        <div className={styles.button}>
          <a href="/about">
            <button className={styles.btnHuge}>About Me</button>
          </a>
        </div>
        <div className={styles.button}>
          <a href="/about">
            <button className={styles.btnHuge}>My Projects</button>
          </a>
        </div>
        <div className={styles.button}>
          <a href="/about">
            <button className={styles.btnHuge}>Contact Me</button>
          </a>
        </div>
      </div>
    </main>
  );
}
