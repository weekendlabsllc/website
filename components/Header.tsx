import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import { FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "@/styles/components/header.module.scss";
import Logo from "@/components/Logo";

export default function Header() {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <header className={styles.header}>
            <div className="container flex items-center">
                <div className={styles.header__logo}>
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <ul className={styles.header__list}>
                    <li className={styles.header__item}>
                        <Link
                            href="/projects"
                            className={
                                currentRoute === "/#projects"
                                    ? `${styles.header__link} ${styles.header__active}`
                                    : styles.header__link
                            }
                        >
                            Projects
                        </Link>
                    </li>
                    <li className={styles.header__item}>
                        <Link
                            href="/about"
                            className={
                                currentRoute === "/about"
                                    ? `${styles.header__link} ${styles.header__active}`
                                    : styles.header__link
                            }
                        >
                            About
                        </Link>
                    </li>
                    <li className={styles.header__item}>
                        <Link
                            href="/careers"
                            className={
                                currentRoute === "/careers"
                                    ? `${styles.header__link} ${styles.header__active}`
                                    : styles.header__link
                            }
                        >
                            Careers
                        </Link>
                    </li>
                    <li className={styles.header__item}>
                        <Link
                            href="/contact"
                            className={
                                currentRoute === "/careers"
                                    ? `${styles.header__link} ${styles.header__active}`
                                    : styles.header__link
                            }
                        >
                            Contact
                        </Link>
                    </li>
                    <li className={styles.header__item}>
                        <Link
                            href="https://twitter.com/wkndlabs"
                            target="_blank"
                            rel="nofollow"
                            className={`${styles.header__link} ${styles.header__social}`}
                        >
                            <FaXTwitter/>
                        </Link>
                    </li>
                    <li className={styles.header__item}>
                        <Link
                            href="https://linkedin.com/in/bick"
                            target="_blank"
                            rel="nofollow"
                            className={`${styles.header__link} ${styles.header__social}`}
                        >
                            <FaLinkedin/>
                        </Link>
                    </li>
                    <li className={styles.header__item}>
                        <Link
                            href="/contact"
                            className={styles.header__button}
                        >
            <span className="hidden md:block">
            🤩&nbsp;&nbsp;Start A Project
              </span>
                            <span className="md:hidden">
              Contact
            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
