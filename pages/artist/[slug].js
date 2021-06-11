import Layout from '../../Components/Layout'
import { useRouter } from 'next/router'

export default function ArtistPage() {

    const router = useRouter()

    console.log(router)
    return (
        <Layout title='Fallen angle | Artist Bio Page'>
            <p>{router.query.slug}</p>
            <h1>Artist Bio</h1>
        </Layout>
    )
}
