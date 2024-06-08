import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/portfolio.module.scss";

export default function Portfolio() {
    return (
        <section className={styles.portfolio} id="projects">
            <div className="container">
                <h3>Featured Project</h3>
                <Link
                    className={styles.portfolio__item}
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
                    <div className={styles.portfolio__meta}>
                        <blockquote>
                            Building an enterprise-grade pharmaceutical API
                        </blockquote>
                        <h3>Discount Drug Network</h3>
                    </div>
                </Link>
            </div>
        </section>
    )
};