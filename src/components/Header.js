import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/navbar.module.css";
import Nav from "./Nav";
const Header = () => {
  return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Image
            src="/logo.png"
            alt="my logo"
            height={70}
            width={70}
          ></Image>
        </div>
        <Nav/>
      </header>
    </>
  );
};

export default Header;
