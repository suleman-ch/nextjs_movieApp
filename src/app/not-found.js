import React from "react";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";

const Notfound = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.error_page}>
          <h1>404</h1>
          <h2>Not found</h2>
          <p>could not find requested resource</p>
          <Link href="/">
            <button>Go to Home page</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Notfound;
