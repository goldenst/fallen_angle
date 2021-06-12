import Layout from "../../Components/Layout";
import { useRouter } from "next/router";

import { API_URL } from "../../config/index";

export default function ArtistPage({ art }) {
  const router = useRouter();

  console.log(router);
  return (
    <Layout title="Fallen angle | Artist Bio Page">
      <h1>Artist Bio</h1>
      <h2>{art.name}</h2>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/artist/${slug}`);
  const artist = await res.json();

  return {
    props: {
      art: artist[0],
    },
  };
}
