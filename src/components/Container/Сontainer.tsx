import { FC, PropsWithChildren } from "react";
import styles from "./container.module.scss";

type Props = {};

export const Container: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
