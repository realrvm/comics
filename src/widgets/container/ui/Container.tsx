import { FC, PropsWithChildren } from "react";

import styles from "./styles.module.css";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles["container"]}>{children}</div>;
};
