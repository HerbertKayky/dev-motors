"use client";

import Link from "next/link";
import styles from "./notfound.module.scss";

export default function ErrorPage() {
  return (
    <div className={styles.error}>
      <h1>Ops essa página não existe!</h1>
      <Link href="/">Voltar para página inicial</Link>
    </div>
  );
}
