import React from "react";
import Button from "@/user interface/Button";
import Link from "next/link"
import Tag from "../user interface/tagFile";


import {FaExclamationTriangle} from "react-icons/fa"
function PageNotFound() {
  return <div className="text-xl font-bold
   mx-auto text-center p-5
    w-full flex flex-col justify-center items-center
   h-screen">
    <h1 className="text-4xl mb-10 flex gap-3"><FaExclamationTriangle/>
      404 Error</h1>
    <h3>Sorry , We not found something in this link</h3>
    <Link href="/">
      <Button>
        Go Back To Home
      </Button>

    </Link>

    <Tag>
      this is a tag for 404 page
    </Tag>
  </div>;
}

export default PageNotFound;
