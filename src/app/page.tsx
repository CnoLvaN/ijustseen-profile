import Image from "next/image";
import styles from "./base.module.scss";
import { Button, Typography } from "antd";
import { Container } from "@/components/Container/container";

export default function Home() {
  const { Title } = Typography;
  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.tittle}>
          <h1>Our Team</h1>
        </div>

        <div className={styles.img}>
          <Image src="/me.png" width={320} height={320} alt="me" />
        </div>

        <div className={styles.tittle}>
          <h2>Andrew Eroshenkov</h2>
          <p>React, Next, Vue, Python, C#, Blueprints, etc.</p>
        </div>

        <div className={styles.button}>
          <a href="/projects">
            <Button type="primary" size="large" shape="round">
              Main Page
            </Button>
          </a>
        </div>
      </Container>
    </main>
  );
}
