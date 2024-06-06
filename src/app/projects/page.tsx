import { Button } from "antd";
import styles from "../base.module.scss";

export default function Home() {
  return (
    <div>
      <div className={styles.tittle}>
        <h1>Projects</h1>
      </div>

      <div className={styles.button}>
        <a href="/">
          <Button type="primary" size="large" shape="round">
            Back
          </Button>
        </a>
      </div>
    </div>
  );
}
