import Layout from "../Components/Layout";
import Tattoos from '../Components/Tattoos'
import Head from "next/head";
import { API_URL } from "../config/index";
import styles from "../styles/Gallery.module.css";

export default function galery({ tattoos }) {
  return (
    <Layout>
      <Head></Head>
      <div className={styles.container}>
        {tattoos.map((tattoo) => (
          <Tattoos key={tattoo.id} tattoo={tattoo} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/tattoos`);
  const tattoos = await res.json();

//   console.log(tattoos);

  return {
    props: { tattoos },
  };
}
