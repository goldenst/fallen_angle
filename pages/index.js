import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { API_URL } from "../config/index";

import Layout from "../Components/Layout";


export default function HomePage({ bios }) {
  // console.log(artist)
  return (
    <Layout>
      <Head></Head>
      <div className={styles.container}>
    
      </div>

    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/bios`);
  const bios = await res.json();

  // console.log(artist)

  return {
    props: { bios },
  };
}
