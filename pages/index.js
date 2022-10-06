import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Clothing Store</title>
        <meta name="description" content="Come to my store for great apparel!" />
        <meta property="og:title" content="My Clothing Store" />
        <meta property="og:description" content="Come to my store for great apparel!" />
        <meta property="og:url" content="https://myclothingstore.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the store!
        </h1>

        <div className={styles.grid}>
          <a href="about" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Learn more about us.</p>
          </a>

          <a href="product/1" className={styles.card}>
            <h2>Products &rarr;</h2>
            <p>See our products.</p>
          </a>

          <a href="users" className={styles.card}>
            <h2>Users &rarr;</h2>
            <p>See our users.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
