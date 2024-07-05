import { Card } from "antd";
import styles from "../base.module.scss";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jfavontasktzvucgnijl.supabase.co";
const supabase = createClient(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmYXZvbnRhc2t0enZ1Y2duaWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxNzQ5NzEsImV4cCI6MjAzNDc1MDk3MX0.dAnbxk8A5hwKM8SCQ-gfY9YrrR9Ux40JzLqma0H7oSI"
);

const data = supabase.from("dogs").select(`
      id, breed,
      owner (id, name)
  `);

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
          <button className={styles.btnHuge}>Main Page</button>
        </a>
      </div>
    </main>
  );
}
