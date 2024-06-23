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
            className="Card"
            style={{ width: 320 }}
            cover={
              <img
                height={220}
                alt="example"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQ-ZhFFTG_ww40p7PlUEZesS5cwYWp_e26g&s"
              />
            }
          >
            <h1>Journey to Spain</h1>
            <p>I am in Spain currently, see u later</p>
          </Card>
        </li>
        <li>
          <Card
            style={{ width: 320 }}
            cover={
              <img
                height={220}
                alt="example"
                src="https://accent.su/wp-content/uploads/2022/05/shkolnyj-dnevnik-mem-600x375.jpg"
              />
            }
          >
            <h1>School Year End</h1>
            <p>Илья уже подходит</p>
          </Card>
        </li>
        <li>
          <Card
            style={{ width: 320 }}
            cover={
              <img height={220} alt="example" src="/news-images/news2.jpg" />
            }
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
