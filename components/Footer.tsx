import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer__list">
                    <li className="footer__list__item">
                        <Link href="/" className="footer__list__link">
                            Index
                        </Link>
                    </li>
                    <li className="footer__list__item">
                        <Link href="/projects" className="footer__list__link">
                            Projects
                        </Link>
                    </li>
                    <li className="footer__list__item">
                        <Link href="/about" className="footer__list__link">
                            About
                        </Link>
                    </li>
                    <li className="footer__list__item">
                        <Link href="/careers" className="footer__list__link disabled">
                            Careers
                        </Link>
                    </li>
                    <li className="footer__list__item">
                        <Link href="/contact" className="footer__list__link">
                            Contact
                        </Link>
                    </li>
                </ul>
                <span>
                    Copyright &copy; {(new Date().getFullYear())} Weekend Labs. All Rights Reserved. Made with ❤️ and ☕ in Boston.
                </span>
            </div>
        </footer>
    )
}