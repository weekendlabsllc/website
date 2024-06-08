import Link from "next/link";
import styles from "@/styles/components/social.module.scss";

export default function Social() {
    return (
        <section className={styles.social}>
            <div className="container">
                <h3>Follow Us</h3>
                <span>X: </span>
                <Link href="https://x.com/wkndlabs" target="_blank">
                    @wkndlabs
                </Link>
                <br/>
                <span>LinkedIn: </span>
                <Link href="https://linkedin.com/in/wkndlabs" target="_blank">
                    @wkndlabs
                </Link>
                <br/>
                <span>GitHub: </span>
                <Link href="https://github.com/wkndlabs" target="_blank">
                    @wkndlabs
                </Link>
            </div>
        </section>
    );
};