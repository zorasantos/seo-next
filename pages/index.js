import IndexPage from './components/IndexPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <IndexPage
      title="SEO Next"
      description="Custom SEO with Next"
      className={styles.container}
    >
      
      <h1>SEO with Next.JS</h1>
      <p>
        A renderização dessa página é um exemplo de Static Generation sem uso de dados externos.
      </p>
    </IndexPage>
  )
}
