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
        <meta name="description" content="Featured projects that Weekend Labs has worked on." />
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
              {/* <Link className="portfolio__item" href="https://spoteasy.com" target="_blank" rel="nofollow">
                <Image src="https://cdn.weekendlabs.net/spoteasy.webp" alt="Spot Easy." />
                <h3>Spot Easy</h3>
                <p>Strategy / Design / Engineering</p>
              </Link> */}
              <Link className="portfolio__item" href="https://discountdrugnetwork.com" target="_blank" rel="nofollow">
                <Image src="https://cdn.weekendlabs.net/discountdrugnetwork.webp" alt="Discount Drug Network." />
                <h3>Discount Drug Network</h3>
                <p>Strategy / Design / Engineering</p>
              </Link>
              <Link className="portfolio__item" href="https://bostonjuniorbruins.com" target="_blank" rel="nofollow">
                <Image src="https://cdn.weekendlabs.net/bostonjuniorbruins.webp" alt="Boston Junior Bruins." />
                <h3>Boston Junior Bruins</h3>
                <p>Design / Engineering</p>
              </Link>
              <Link className="portfolio__item" href="https://palmerpads.com" target="_blank" rel="nofollow">
                <Image src="https://cdn.weekendlabs.net/palmer-pads.webp" alt="Palmer Pads." />
                <h3>Palmer Pads</h3>
                <p>Design / Engineering</p>
              </Link>
              <Link className="portfolio__item" href="https://flosstime.io" target="_blank" rel="nofollow">
                <Image src="https://cdn.weekendlabs.net/flosstime.webp" alt="FlossTime." />
                <h3>FlossTime</h3>
                <p>Strategy / Design / Engineering</p>
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
