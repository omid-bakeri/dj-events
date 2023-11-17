import React from "react";
import Link from "next/link"
import styles from "../styles/Header.module.css";
function Header() {
  return (
    <>
      <div className={styles.container}>
          <Link href="/">
              <h1>DJ Events</h1>
          </Link>
          <h3>Events</h3>
      </div>
    </>
  );
}

export default Header;
