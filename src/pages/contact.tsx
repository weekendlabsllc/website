import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Clock from 'react-live-clock';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – Weekend Labs</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta name="description" content="Contact Weekend Labs" />
        <meta name="author" content="Weekend Labs" />
      </Head>
      <Header></Header>
      <Layout>
        <section className="hero">
          <div className="container">
            <h1>Contact Weekend Labs</h1>
          </div>
        </section>
        <section className="contact">
          <div className="container">
            <h3>Email us</h3>
            <a href="mailto:owenbick@gmail.com">hello@weekendlabs.net</a>
          </div>
        </section>
        <section className="time">
          <div className="container">
            <Clock format={'MMMM Mo, YYYY, h:mm:ss A'} ticking={true} timezone={'US/Eastern'}></Clock>
            <span>UTC-05:00 - Boston, MA</span>
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
