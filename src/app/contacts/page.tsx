import styles from "../base.module.scss";
import { Typography } from "antd";
import cn from "classnames";

export default function Home() {
  const { Title } = Typography;
  return (
    <main>
      <div className={cn(styles.tittle)}>
        <h1>My contacts</h1>
      </div>

      <div className={cn(styles.contacts)}>
        <div className={styles.contact}>
          <h3 className={styles.contactView}>
            <a href="https://t.me/andr_ewtf" className={styles.contactLink}>
              <img
                src="https://www.svgrepo.com/show/343522/telegram-communication-chat-interaction-network-connection.svg"
                className={styles.networkIMG}
              />
              Telegram
            </a>
          </h3>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.contactView}>
            <a
              href="https://www.instagram.com/andrew_snol/"
              className={styles.contactLink}
            >
              <img
                src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                className={styles.networkIMG}
              />
              Instagram
            </a>
          </h3>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.contactView}>
            <a
              href="https://www.linkedin.com/in/andrew-eroshenkov-27235a30b/"
              className={styles.contactLink}
            >
              <img
                src="https://www.svgrepo.com/show/448234/linkedin.svg"
                className={styles.networkIMG}
              />
              LinkedIn
            </a>
          </h3>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.contactView}>
            <a href="https://github.com/CnoLvaN" className={styles.contactLink}>
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                className={styles.networkIMG}
              />
              GitHub
            </a>
          </h3>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.contactView}>
            <a href="anordgame@gmail.com" className={styles.contactLink}>
              <img
                src="https://www.svgrepo.com/show/349378/gmail.svg"
                className={styles.networkIMG}
              />
              anordgame@gmail.com
            </a>
          </h3>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.contactView}>
            <a href="anordgame@gmail.com" className={styles.contactLink}>
              <img
                src="https://www.svgrepo.com/show/491468/phone.svg"
                className={styles.networkIMG}
              />
              +381621921089
            </a>
          </h3>
        </div>
      </div>

      <div className={styles.button}>
        <a href="/">
          <button className={styles.btnHuge}>Main Page</button>
        </a>
      </div>
    </main>
  );
}
