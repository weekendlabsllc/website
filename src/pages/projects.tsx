import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Projects – Weekend Labs</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta
          name="description"
          content="Featured projects that Weekend Labs has worked on."
        />
        <meta name="author" content="Weekend Labs" />
      </Head>
      <Header></Header>
      <Layout>
        <section className="hero">
          <div className="container">
            <h1>Featured Projects</h1>
          </div>
        </section>

        <section className="portfolio">
          <div className="container">
            <div className="portfolio__list">
              <Link
                className="portfolio__item"
                href="https://discountdrugnetwork.com"
                target="_blank"
                rel="nofollow"
              >
                <Image
                  src="/static/discountdrugnetwork.png"
                  width="400"
                  height="150"
                  alt="Discount Drug Network."
                />
                <div className="portfolio__meta">
                  <blockquote>
                    Building an enterprise-grade pharmaceutical API
                  </blockquote>
                  <h3>Discount Drug Network</h3>
                  <p>Strategy / Design / Engineering</p>
                </div>
              </Link>
              <Link
                className="portfolio__item"
                href="https://bostonjuniorbruins.com"
                target="_blank"
                rel="nofollow"
              >
                <Image
                  src="/static/bjb.png"
                  width="225"
                  height="125"
                  alt="Boston Junior Bruins."
                />
                <div className="portfolio__meta">
                  <h3>Boston Junior Bruins</h3>
                  <p>Design / Engineering</p>
                </div>
              </Link>
              <Link
                className="portfolio__item"
                href="https://palmerpads.com"
                target="_blank"
                rel="nofollow"
              >
                <Image
                  src="/static/palmerpads.png"
                  width="400"
                  height="400"
                  alt="Palmer Pads."
                />
                <div className="portfolio__meta">
                  <h3>Palmer Pads</h3>
                  <p>Design / Engineering</p>
                </div>
              </Link>
              <Link
                className="portfolio__item"
                href="https://lavidascholars.org"
                target="_blank"
                rel="nofollow"
              >
                <Image
                  src="/static/la-vida-logo.png"
                  width="400"
                  height="400"
                  alt="FlossTime."
                />
                <div className="portfolio__meta">
                  <h3>LaVida Scholars</h3>
                  <p>Design / Engineering</p>
                </div>
              </Link>
              <Link
                className="portfolio__item"
                href="https://flosstime.io"
                target="_blank"
                rel="nofollow"
              >
                <Image
                  src="/static/flosstime.png"
                  width="400"
                  height="400"
                  alt="FlossTime."
                />
                <div className="portfolio__meta">
                  <blockquote>
                    "Seriously, the best. There is no better team to help you
                    build some internal applications. They are fast, efficient, and have a great eye for design."
                  </blockquote>
                  <h3>FlossTime</h3>
                  <p>Strategy / Design / Engineering</p>
                </div>
              </Link>
              {/* <Link className="portfolio__item" href="https://causehairsalon.com" target="_blank" rel="nofollow">
                <Image src="https://cdn.weekendlabs.net/cause.webp" alt="CAUSE Hair Salon." />
                <h3>CAUSE</h3>
                <p>Strategy / Design / Engineering</p>
              </Link> */}
            </div>
          </div>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}
