import React from "react";
import Link from "next/link";
import { FaMusic } from "react-icons/fa";
import Button from "../user interface/Button"
import styles from "../styles/Header.module.css";
import {useRouter} from "next/router";
import Logo from "@/user interface/Logo";


function Header() {
    const router = useRouter();
    const path = router.pathname.substring(1)


    const page = [
        {id :1 , name: "About" ,  link : "about"} ,
        {id :2 , name: "Contact" ,  link : "contact"} ,
    ]




    page.map((item)=>{
        console.log(item.link)
    })

    console.log(path)


  return (
    <>
      <div className={styles.container}>
          <Logo/>
        <div
          className="flex justify-center
         items-center gap-3"
        >
         {/*<Link href="/about">*/}
         {/*  <h2>About</h2>*/}
         {/*</Link>*/}
         {/*<Link href="/contact">*/}
         {/*    <h2>Contact</h2>*/}
         {/*</Link>*/}
            {
                page.map((item)=>(

                    <Link className={` ${item.link == path ? "bg-red-300 p-3" +
                        "text-white" : ""}`} href={item.link
                    }>{item.name}</Link>
                ))
            }
          <Button>
            Login / Register
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
