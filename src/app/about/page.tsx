import Image from "next/image";
import styles from "../base.module.scss";
import { Button, Typography } from "antd";
import cn from "classnames";

export default function Home() {
  const { Title } = Typography;
  return (
    <main>
      <>
        <div className={cn(styles.tittle)}>
          <h1>About Me</h1>
        </div>

        <div className={styles.img}>
          <Image src="/me.png" width={160} height={160} alt="me" />
        </div>

        <div className={styles.tittle}>
          <h2>Andrew Eroshenkov</h2>
        </div>

        <div className={cn(styles.aboutParagraph)}>
          <p className={styles.white}>
            {
              "Hello there! I am 17 years old and as you notice - I am Andrew. I'm studying in Jovan Jovanovic Zmaj Gymnasium on 2nd year. "
            }
            <span className={styles.pastWhite}></span>
          </p>
          <h3 className={styles.tittle}>Skills</h3>
          <p className={styles.white}>
            React, Next, Vue, Python, C#, Blueprints, etc.
            <span className={styles.pastWhite}></span>
          </p>
        </div>

        <div className={styles.button}>
          <a href="/">
            <Button type="primary" size="large" shape="round">
              Main Page
            </Button>
          </a>
        </div>
      </>
    </main>
  );
}
