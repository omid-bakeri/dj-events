import React from "react";
import Link from "next/link"
import {FaMusic} from "react-icons/fa"
import styles from "../styles/Header.module.css";
function Header() {
  return (
    <>
      <div className={styles.container}>

              <Link className={styles.Nav} href="/">
                  <i className="text-xl mt-2"><FaMusic/></i>
                  <h1 className="z-10">DJ Events</h1>
              </Link>

          <h3>Events</h3>
      </div>
    </>
  );
}

export default Header;
