import Image from "next/image";
import { accounts } from "co-mission/data/accountsdata";
import styles from "co-mission/styles/Account.module.css";

export default function Account({ accountData }) {
    return (
        <div className={styles.main}>
            <div>
                <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={accountData.pfp} fill alt="" />
                </div>
                <h1>{accountData.id}</h1>
                <h4>{accountData.name}</h4>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <h2>Basic Info</h2>
                    <p>Age: {accountData.age}</p>
                    <p>{accountData.description}</p>
                </div>
                <div className={styles.info}>
                    <h2>Commission Me!</h2>
                    <p>Rates: {accountData.rates}</p>
                    <p>{accountData.contact}</p>
                </div>
            </div>
        </div>
    );
}

function getAccountIds() {
    return accounts.map((account) => {
        return {
            params: {
                id: account.id,
            },
        };
    });
}

export async function getStaticPaths() {
    const paths = getAccountIds();

    return {
        paths,
        fallback: false,
    };
}

function getAccountData(id) {
    return accounts.find((account) => account.id == id);
}

export async function getStaticProps({ params }) {
    const accountData = getAccountData(params.id);
    return {
        props: {
            accountData,
        },
    };
}
