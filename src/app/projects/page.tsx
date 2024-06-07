import { Button, Card } from "antd";
import styles from "../base.module.scss";
import { Container } from "@/components/Container/Container";
const { Meta } = Card;

export default function Home() {
  return (
    <Container>
      <div className={styles.tittle}>
        <h1>Last News</h1>
      </div>

      <ul className={styles.list}>
        <li>
          <Card
            style={{ width: 320 }}
            cover={<img alt="example" src="/news-images/news1.jpg" />}
          >
            <h1>Last Interview</h1>
          </Card>
        </li>
        <li>
          <Card
            style={{ width: 320 }}
            cover={<img alt="example" src="/news-images/news2.jpg" />}
          >
            <h1>Last Interview</h1>
          </Card>
        </li>
      </ul>

      <div className={styles.button}>
        <a href="/">
          <Button type="primary" size="large" shape="round">
            Back
          </Button>
        </a>
      </div>
    </Container>
  );
}
