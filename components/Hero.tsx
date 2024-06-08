import styles from "@/styles/components/hero.module.scss";

type HeroProps = {
    type: string;
};
export default function Hero({type}: HeroProps) {
    const heroClass = type === "home" ? `${styles.hero} ${styles.home}` : styles.hero;

    return (
        <section className={heroClass}>
            <div className="container">
                <h1>
                    Weekend Labs is a full-service software consultancy, working closely with founders and innovators to
                    build the internet companies of tomorrow.
                </h1>
            </div>
        </section>
    );
};