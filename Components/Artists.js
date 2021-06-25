import Link from "next/link";
import Image from "next/image";

import styles from "../styles/ArtistBio.module.css";

export default function Artists({ bio }) {
  return (
    <div className={styles.artist}>
      <div className={styles.img}>
        <Image
          src={bio.image ? bio.image.formats.thumbnail.url : "/images/default.png"}
          width={170}
          height={170}
        />
      </div>
      <div className={styles.info}>
          <h1>{bio.name}</h1>
      
          {bio.facebook}

      </div>
      <div className={styles.link} >
          <Link href={`/artist/${bio.slug}`} >
              <a className='btn'>About</a>
          </Link>
      </div>
    </div>
  );
}
