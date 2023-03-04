import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
            <Head>
                <title>Careers – Weekend Labs</title>
                <link rel="icon" href="./static/favicon.ico" />
                <meta name="description" content="About Weekend Labs" />
                <meta name="author" content="Weekend Labs" />
            </Head>
            <Header></Header>
            <Layout>
                <section className="hero">
                    <div className="container">
                        <img src="./static/wework.webp" />
                        <h1>Work @ Weekend Labs</h1>
                    </div>
                </section>
                <section className="about">
                    <div className="container">
                        <h3>About Weekend Labs</h3>
                        <p>Weekend Labs is a software consulting and investment collective based in Boston. Founded in 2021, Weekend Labs is a tight-knit collective of industry insiders, analysts, and innovators. We are open, collaborative, and use our collective experience, design and technical expertise to create meaningful and compelling content for all mediums. We take a hands-on approach to consulting and investing in a way to help elevate the success rate of our investments; both time and money.</p>
                    </div>
                </section>
                <section className="careers">
                    <div className="container">
                        <h3>We're hiring for...</h3>
                        <div className="careers__list">
                            <div className="careers__item">
                                <h3>Ruby on Rails Engineer</h3>
                                <span>🇺🇸 U.S. only, freelance</span>
                                <p>We are looking to work with a talented freelance Ruby on Rails engineer on a SaaS startup based in Boston. We are looking for people who want to join a fast-paced startup environment building a fast growing community of real estate transactions in the second largest real estate market in the country.</p>
                                <div><Link href="mailto:apply@weekendlabs.net?subject=Ruby%20on%20Rails%20Engineer">Apply here</Link></div>
                            </div>
                            <div className="careers__item">
                                <h3>Frontend Engineer</h3>
                                <span>🇺🇸 U.S. only, freelance</span>
                                <p>We're looking to collaborate with some frontend developers who have experience working with React, NextJS, SASS, RESTful APIs, GraphQL, and strong TypeScript knowledge.</p>
                                <div><Link href="mailto:apply@weekendlabs.net?subject=Frontend%20Engineer">Apply here</Link></div>
                            </div>
                            <div className="careers__item">
                                <h3>Backend Engineer</h3>
                                <span>🇺🇸 U.S. only, freelance</span>
                                <p>We're looking to bring on board a backend developer who may be an artist in Python, Ruby, C#, JavaScript, TypeScript, and Go.</p>
                                <div><Link href="mailto:apply@weekendlabs.net?subject=Backend%20Engineer">Apply here</Link></div>
                            </div>
                            <div className="careers__item">
                                <h3>Graphic Designer</h3>
                                <span>🇺🇸 U.S. only, freelance</span>
                                <p>We have multiple projects where we need some help with branding, illustrations, etc. and it would be nice to work with someone on an ongoing basis.</p>
                                <div><Link href="mailto:apply@weekendlabs.net?subject=Graphic%20Designer">Apply here</Link></div>
                            </div>
                        </div>
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
