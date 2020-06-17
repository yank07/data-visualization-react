import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = '[Rodrigo Valdez]'
export const siteTitle = 'React Data Visualization Project'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/Profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h3>Rodrigo Valdez</h3>
            <ul>
            <li> <b>linkedin:</b> <a href="https://linkedin.com/in/rodrivaldez5">rodrivaldez5</a></li>
              <li> <b>instagram:</b> <a href="https://instagram.com/rodrivaldez5">rodrivaldez5</a></li>
              <li> <b>github:</b> <a href="https://github.com/yank07">yank07</a></li>

            </ul>
           
            
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
            <p>This project presents basic data visualizacitions and data filtering using  data from <a href="https://open-data-demo.mtc.ca.gov/browse?tags=vital+signs">Vital Signs </a>   using <a href=""> Next.js</a> and <a href="https://formidable.com/open-source/victory/">Victory Framework </a>.
             I fetched the data from the API <a href="https://data.bayareametro.gov/resource/7e6t-2y8x.json">https://data.bayareametro.gov/resource/7e6t-2y8x.json</a>. 
             
            </p>
            <h3>Spended time, approach and process  </h3>
            <p>I spended 1 hour understanding the excercise and selecting the dataset.
             I did a previous investigation of the selected technology stack, that took me 1 hour. 
             It took me 2 hours to build the starter project and the basics functionalities and 2 more hours for the details. 
             It was a 6 hours project, but with 4 hours more I could do a dynamic barchart to select the year of visualization and a heatmap of the incomes with the counties using an tool like <a href="https://www.react-simple-maps.io/">React Simple Maps</a>.</p>
            
     
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}