import Link from "next/link";
import Image from "next/image";

import styles from "../styles/ArtistBio.module.css";

export default function Artists({ art }) {
  return (
    <div className={styles.artist}>
      <div className={styles.img}>
        <Image
          src={art.image ? art.image : "\images\derault.jpg"}
          width={170}
          height={170}
        />
      </div>
      <div className={styles.info}>
          {art.name}

      </div>
      <div className={styles.link} >
          <Link href={`/artist/${art.slug}`} >
              <a className='btn'>Bio</a>
          </Link>
      </div>
    </div>
  );
}
