import { FC, PropsWithChildren } from "react";
import styles from "./footer.module.scss";
import { Button } from "antd";

type Props = {};

export const Footer: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <span>Want to support me?</span>
      <Button type="primary" size="large" shape="round">
        Support
      </Button>
    </footer>
  );
};
