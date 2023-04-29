import Image from "next/image";
import Link from "next/link";
import styles from "co-mission/styles/Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Nunito_Sans } from "next/font/google";
import { accounts } from "co-mission/data/accountsdata";

const nunitoSans = Nunito_Sans({
    weight: "700",
    subsets: ["latin"],
});

export default function Card() {
    const accountId = accounts[Math.floor(Math.random() * accounts.length)].id;
    return (
        <Link href={`account/${accountId}`} className={styles.card}>
            <Image className={styles.img} src="/sky.jpg" fill alt="" />
            <div className={[styles.info, nunitoSans.className]}>
                <div className={styles.price}>
                    <FontAwesomeIcon className="fa-2xl" icon={faSackDollar} />
                    <div>
                        <p>Starting at...</p>
                        <p>$100</p>
                    </div>
                </div>
            </div>
            <div className={styles.filter}></div>
        </Link>
    );
}
