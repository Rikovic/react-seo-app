import styles from '../styles/Home.module.css'
import Head from 'next/head'

// Inside "pages/users.js"
export default function Users( {data} ){
    return (
        <div className={styles.container}>
        <Head>
            <title>About - My Clothing Store</title>
            <meta name="description" content="The story behind My Clothing Store!" />
            <meta property="og:title" content="About - My Clothing Store" />
            <meta property="og:description" content="The story behind My Clothing Store!" />
            <meta property="og:url" content="https://myclothingstore.com/about" />
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
          <main className={styles.main}>
            <div>
                <h1 className={styles.title}>List of Users</h1>
                <ul>
                    {data.map((user,index)=>{
                    return <li key={index}>Id : {user.id} , 
                        Name : {user.name} , Email : {user.email}
                    </li>   
                    })}
                </ul>
            </div>
        </main>
    </div>
    )
}
  
export async function getServerSideProps() {
      
    // Fetching data
    const res = await fetch(
    'https://jsonplaceholder.typicode.com/users');
    const data = await res.json() ;
  
    // Passing data to the Product Page using props
    return {
        props : {data}
    }
}