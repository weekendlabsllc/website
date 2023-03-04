import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>About – Weekend Labs</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta name="description" content="About Weekend Labs" />
        <meta name="author" content="Weekend Labs" />
      </Head>
      <Header></Header>
      <Layout>
        <section className="hero">
          <div className="container">
            <h1>About <br className="mobile-only" />Weekend Labs</h1>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <h3>About Weekend Labs</h3>
            <p>Weekend Labs is a software consulting and investment collective based in Boston. Founded in 2021, Weekend Labs is a tight-knit collective of industry insiders, analysts, and innovators. We are open, collaborative, and use our collective experience, design and technical expertise to create meaningful and compelling content for all mediums. We take a hands-on approach to consulting in a way that truly feels like a business partner.</p>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>This website was built using NextJS, TypeScript, SASS, and Vercel.</h3>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>Follow us</h3>
            <span>Twitter: </span>
            <Link href="https://twitter.com/weekendlabs" target="_blank">@weekendlabs</Link>
            <br />
            <span>LinkedIn: </span>
            <Link href="https://linkedin.com/company/weekend-labs" target="_blank">@weekendlabs</Link>
            <br />
            <span>GitHub: </span>
            <Link href="https://github.com/weekendlabsllc" target="_blank">@weekendlabs</Link>
          </div>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}
