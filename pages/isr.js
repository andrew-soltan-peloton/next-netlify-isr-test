import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function ISR({ buildTime, dogeSRC }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="ISR page" />
        <span>Build time: {buildTime}</span>
        <span>doge to prove it: </span>
        <img style={{ maxWidth: '200px', marginTop: '20px' }} src={dogeSRC} />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const data = await res.json();

  return {
    props: { buildTime: new Date().toISOString(), dogeSRC: data.message },
    revalidate: 10*60,
  };
}
