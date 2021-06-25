import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Gallery.module.css";

export default function Tattoos({ tattoo }) {
  return (
  <div className={styles.card}>
          <img
            src={tattoo.image.url}
            className={styles.img}
            alt={tattoo.name}
          />
          <div className={styles.card_body}>
            <h5 className="card-title">{tattoo.name}</h5>
            <p className="card-text">
              Artist: {tattoo.artist} </p>
            <p>Tags:  {tattoo.tags}</p>
           
            
           
          </div>
    </div>
  );
}
