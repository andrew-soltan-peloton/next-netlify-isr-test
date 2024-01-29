import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function SSG({ buildTime, dogeSRC }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SSG page" />
        <span>Build time: {buildTime}</span>
        <span>no doge here ☹️</span>
      </main>

      <Footer />
    </div>
  );
}
