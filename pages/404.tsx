import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Error() {
  return (
    <>
      <Head>
        <title>404 – Weekend Labs</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta name="description" content="404 Not Found - Weekend Labs" />
        <meta name="author" content="Weekend Labs" />
      </Head>
      <Header></Header>
      <Layout>
        <section className="hero">
          <div className="container">
            <h1>404 - Not Found</h1>
          </div>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}
