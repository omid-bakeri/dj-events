import React from "react";
import Head from "next/head"
import Layout from "@/features/Layout";
function HomePage() {
  // const HeaderComponent = dynamic(() => import("../features/Header"));

  return (
    <>
     <Layout>
         <div className="text-2xl font-bold text-blue-500
          p-4">Hello World</div>

     </Layout>
    </>
  )
}

export default HomePage;
