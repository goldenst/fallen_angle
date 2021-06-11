import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Layout from "../Components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head></Head>
      <h1> Home Page</h1>
    </Layout>
  );
}
