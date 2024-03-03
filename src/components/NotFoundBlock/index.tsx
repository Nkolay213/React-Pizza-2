import React from "react";
import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>Ого!!!</span>
        <br />
        Ничего не найдено
      </h1>
      <br />
      <p className={styles.description}>
        К сожалению, данная страница отсутствует в нашем магазине.
      </p>
    </div>
  );
};
