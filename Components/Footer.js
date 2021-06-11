import Link from "next/link"
import styles from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p> Copyright &copy;  2021 Fallen Angle Tattoo</p>
            <Link href='about'><a>About</a></Link>
    
        </footer>
    )
}
