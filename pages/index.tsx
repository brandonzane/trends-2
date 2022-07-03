import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>African Trends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
    </div>
  );
};

export default Home;
