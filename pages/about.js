import Layout from "../Components/Layout";
import styles from '../styles/Home.module.css'

export default function AboutPage() {
    return (
        <Layout title="Fallen Angle | About">
            <h1> About Page</h1>
                  <div className={styles.main}>
        <p> Established by Tom Cooney (Boss Tom) March 5th 2001,</p>{" "}
        <p>
          Fallen Angel Tattoo is Sacramento and Citrus Heights most referred and
          award-winning custom studio.
        </p>{" "}
        <p>
          {" "}
          Our male and female artists love to draw custom tattoos, so everyone
          leaves with a unique piece of art (no flash). Each of our artists
          specializes in a specific art style, from realism to neo-traditional
          to graffiti, so check out the photos and find which artist best fits
          your style.{" "}
        </p>{" "}
        <p>
          They also excel at cover-ups and can get rid of ANY unwanted tattoo,
          no matter how big and dark!{" "}
        </p>{" "}
        <p>
          Fallen Angel's piercer Carrie is highly skilled with over 17 years of
          piercing experience.{" "}
        </p>
        <p>
          {" "}
          We also have an extensive body jewelry collection featuring hand-made
          organic pieces you won't find anywhere else.{" "}
        </p>{" "}
        <p>
          We sell our original paintings and artwork, so all of the art you see
          is for sale! We also have a #getwhatyouget gumball machine for awsome
          random $100 tattoos!{" "}
        </p>{" "}
        <p>
          So come on in and check out our portfolios and custom artwork, and
          remember, everyone gets the tattoo they deserve!!!
        </p>
        Call us at (916)344-1012 or e-mail <span className='strong' >bosstomtattoos@gmail.com </span>
        <p>

        </p>
      </div>
            
            <p>About fallen angle tattoo</p>
            <p>Version 0.01</p>
        </Layout>
    )
}
