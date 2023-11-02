import React from "react";
import Layout from "../components/layout";


export default function Home() {
  return (
    <>
      <Layout>
        <div className={`background h-screen w-full grid place-content-center`}>
          <span className={`text text-[4rem] font-thin text-cyan-300 tracking-wider`}>
            Hello Gatsby
          </span>
        </div>
      </Layout>
    </>
  );
};