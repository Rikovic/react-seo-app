import styles from '../styles/Home.module.css'
import Head from 'next/head'
    
export default function About() {
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
        <h1 className={styles.title}>
          About My Clothing Store
        </h1>
        <div className={styles.description}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a purus ornare, interdum lectus sit amet, ultrices eros. Phasellus vel diam ligula. Nullam in purus eget elit commodo tempus ut ac nibh. Curabitur blandit fermentum eros, sit amet consequat turpis consequat ut. Suspendisse justo quam, congue vel dolor a, bibendum ornare nibh. Nullam sit amet orci ut elit mollis rutrum. Etiam tellus odio, tincidunt quis sagittis eget, tincidunt vel tellus. Nullam at lorem elementum felis iaculis dignissim. Sed eros quam, volutpat ac elit vel, ornare sagittis odio. Donec cursus mollis lobortis. Suspendisse aliquam erat ut sollicitudin tempor. 
            </p>
            <p>
                Aenean vel nibh ex. Proin venenatis dapibus tellus, accumsan sollicitudin lectus auctor ut. Phasellus eget mattis lorem. Aliquam erat volutpat. Nulla a orci in est tristique tincidunt. Mauris ultrices nisi vitae bibendum laoreet. Nullam interdum nisl tortor, ac pellentesque est efficitur eu. Cras tempor id ex non maximus. Mauris at aliquam turpis, a luctus lacus. Mauris eget leo in purus condimentum accumsan a vel tortor. Integer semper ligula magna, nec maximus sapien finibus vel. Aliquam condimentum tristique ligula quis volutpat. Nullam vitae dui vitae libero fermentum accumsan. Sed et iaculis ligula, nec dignissim erat. Vivamus accumsan massa in tellus dapibus ultricies. Suspendisse potenti. 
            </p>
            <p>
                Nam erat mauris, suscipit vitae congue eu, tempus sit amet metus. Sed ac neque non nisl tempus porttitor. In placerat leo urna. Vestibulum nec vulputate mi. Sed in ligula a ante porta imperdiet. Sed viverra ultrices pharetra. Nulla ultrices velit at molestie malesuada. Nulla facilisi. Sed fringilla leo urna. Cras lacinia, purus sit amet accumsan varius, ipsum nulla molestie urna, ut accumsan risus sapien eget diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius facilisis eros a accumsan. 
            </p>
        </div>
      </main>
    </div>
  )
}