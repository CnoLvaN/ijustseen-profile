import { Button, Card } from "antd";
import styles from "../base.module.scss";

export default function Home() {
  return (
    <main>
      <div className={styles.tittle}>
        <h1>Last News</h1>
      </div>

      <ul className={styles.list}>
        <li>
          <Card
            style={{ width: 320 }}
            cover={<img alt="example" src="/news-images/news2.jpg" />}
          >
            <h1>Journey to Spain</h1>
            <p>I am in Spain currently, see u later</p>
          </Card>
        </li>
        <li>
          <Card
            style={{ width: 320 }}
            cover={<img alt="example" src="/news-images/news2.jpg" />}
          >
            <h1>Last Interview</h1>
            <p>Interview on TONight</p>
          </Card>
        </li>
        <li>
          <Card
            style={{ width: 320 }}
            cover={<img alt="example" src="/news-images/news2.jpg" />}
          >
            <h1>Last Interview</h1>
            <p>Interview on TONight</p>
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
    </main>
  );
}
