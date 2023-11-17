import React from "react";
import Link from "next/link";
import { FaMusic } from "react-icons/fa";
import Button from "../user interface/Button"
import styles from "../styles/Header.module.css";
function Header() {
  return (
    <>
      <div className={styles.container}>
        <Link className={styles.Nav} href="/">
          <i className="text-xl mt-2">
            <FaMusic />
          </i>
          <h1 className="">DJ Events</h1>
        </Link>

        <div
          className="flex justify-center
         items-center gap-3"
        >
          <h2>About</h2>
          <h2>Contact</h2>
          <Button>
            Login / Register
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
