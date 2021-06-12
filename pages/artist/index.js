import Head from "next/head";
import Link from "next/link";
import { API_URL } from "../../config/index";

import Layout from "../../Components/Layout";
import Artists from '../../Components/Artists'

export default function ArtistPage({ artist }) {
  // console.log(artist)
  return (
    <Layout>
      <Head></Head>
      <h1> Artist Page</h1>

      {artist.map ((art => 
        <Artists key={art.id} art={art} />
        ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/artist`);
  const artist = await res.json();

  // console.log(artist)

  return {
    props: { artist },
  };
}
