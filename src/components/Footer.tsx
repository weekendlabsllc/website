import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';


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
                        <Link href="/careers" className="footer__list__link">
                            Careers
                        </Link>
                    </li>
                    <li className="footer__list__item">
                        <Link href="/contact" className="footer__list__link">
                            Contact
                        </Link>
                    </li>
                    <li className="footer__list__item footer__list__social footer__list__social-margin">
                        <Link href="https://twitter.com/weekendlabsllc" className="footer__list__link" target="_blank" rel="nofollow">
                            <FaTwitter />
                        </Link>
                    </li>
                    <li className="footer__list__item footer__list__social">
                        <Link href="https://github.com/weekendlabsllc" className="footer__list__link" target="_blank" rel="nofollow">
                            <FaGithub />
                        </Link>
                    </li>
                    <li className="footer__list__item footer__list__social">
                        <Link href="https://linkedin.com/company/weekend-labs" className="footer__list__link" target="_blank" rel="nofollow">
                            <FaLinkedin />
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