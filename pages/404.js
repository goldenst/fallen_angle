import { FaExclamationTriangle } from 'react-icons/fa'

import Layout from '../Components/Layout'
import styles from '../styles/404.module.css'
import Link from 'next/link'

export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className={styles.error}>
                <h1> <FaExclamationTriangle/> 404</h1>
                <h4>Sorry, There is nothing Here!</h4>
                <Link href='/' ><a>Go back Home</a></Link>
            </div>
            
        </Layout>
    )
}
