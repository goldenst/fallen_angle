import Layout from "../../Components/Layout";
import { useRouter } from "next/router";

import { API_URL } from "../../config/index";

export default function ArtistPage({ bio }) {
  const router = useRouter();

  console.log(router);
  return (
    <Layout title="Fallen angle | Artist Bio Page">
      <h1>Artist Bio</h1>
      <h2>{bio.name}</h2>
      <img src={bio.profileImg.url}></img>
      

      <h3>About:</h3> 
      <p>{bio.about}</p>

<h3> Contact Info</h3>
     <p>{bio.facebook}</p> 
     <p>{bio.instagram}</p> 
     <p>{bio.twitter}</p> 
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/bios?slug=${slug}`);
  const bios = await res.json();

  return {
    props: {
      bio: bios[0],
    },
  };
}
