import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/about.module.scss";

export default function Social() {
    return (
        <section className={styles.about}>
            <div className="container">
                <h3>About Us</h3>
                <p>
                    Weekend Labs is a software consulting and investment collective based in Boston. Founded in 2021, Weekend Labs is a tight-knit collective of industry insiders, analysts, and innovators. We are open, collaborative, and use our collective experience, design and technical expertise to create meaningful and compelling content for all mediums. We take a hands-on approach to consulting in a way that truly feels like a business partner.
                </p>
            </div>
        </section>
    );
};