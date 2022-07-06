import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>African Business Ideas | African Trends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />

      {/* Posts */}
    </div>
  );
};

export default Home;
