import Head from "next/head";
import Link from "next/link";
import { API_URL } from "../../config/index";

import Layout from "../../Components/Layout";
import Artists from '../../Components/Artists'

export default function ArtistPage({ bios }) {
   console.log(bios)
  return (
    <Layout>
      <Head></Head>
      <h1> Artist Page</h1>

      {bios.map ((bio => 
        <Artists key={bio.id} bio={bio} />
        ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/bios`);
  const bios = await res.json();

  // console.log(bios)

  return {
    props: { bios },
  };
}
