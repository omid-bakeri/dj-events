import React from "react";
import Head from "next/head"
import Layout from "@/features/Layout";
function HomePage() {
  // const HeaderComponent = dynamic(() => import("../features/Header"));

  return (
    <>
     <Layout>
         <h1
             className="p-4 mt-32
      absolute"
         >
             Hello world!
         </h1>
     </Layout>
    </>
  );
}

export default HomePage;
