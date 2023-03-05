import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Weekend Labs – A software consultancy based in Boston
        </title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta name="description" content="Weekend Labs is a full-service software consultancy based in Boston." />
        <meta name="author" content="Weekend Labs" />
      </Head>
      <Header></Header>
      <Layout>
        <section className="hero home">
          <div className="container">
            <h1>Weekend Labs is a full-service software consultancy, working closely with founders and innovators to build the internet companies of tomorrow.</h1>
          </div>
        </section>
        <section className="bullets">
          <div className="container">
            <h3>Featured Projects</h3>
            <ul className="bullets__list">
              <li>
                <Link href="https://spoteasy.com" target="_blank">Spot Easy</Link>
                <span>, Boston's #1 apartment rentals directory</span>
              </li>
              <li>
                <Link href="https://discountdrugnetwork.com" target="_blank">Discount Drug Network</Link>
                <span>, A pharmaceutical drug pricing API</span>
              </li>
              <li>
                <Link href="https://bostonjuniorbruins.com" target="_blank">Boston Junior Bruins</Link>
                <span>, Nationally-ranked AAU youth hockey team</span>
              </li>
              <li>
                <Link href="https://impossiblechess.com" target="_blank">Impossible Chess</Link>
                <span>, How long can you last against the world's best chess engine?</span>
              </li>
              <li>
                <Link href="https://github.com/weekendlabsllc/skeleton" target="_blank">Skeleton</Link>
                <span>, An open source WordPress starter theme for developers</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <h3>About Weekend Labs</h3>
            <p>Weekend Labs is a software consulting and investment collective based in Boston. Founded in 2021, Weekend Labs is a tight-knit collective of industry insiders, analysts, and innovators. We are open, collaborative, and use our collective experience, design and technical expertise to create meaningful and compelling content for all mediums. We take a hands-on approach to consulting in a way that truly feels like a business partner.</p>
            <Link href="/about">
              Read more &#8594;
            </Link>
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
