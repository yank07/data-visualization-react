import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import fetch from 'node-fetch'
import React from 'react'
import Table from '../components/table'
import BarChart from '../components/barChart'
 





export default function Home ({ 
  fullData,
  data2017,
  
}: {
  fullData:Object[],
  data2017:Object[]
  
}) {

  return (
   
     
   <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}> 
        <h2 className={utilStyles.heading1Xl} >List of median income per year</h2>
        <p>Income reflects the median earnings of individuals and households from employment, as well as the income distribution by quintile. Income data highlight how employees are being compensated for their work on an inflation-adjusted basis.</p>
        <p className={utilStyles.obs}><i>Obs. You can order the data by column clicking at the column's name, you can also search any row by County name in the search box. The list is paginated by 10 rows per page by default.</i></p>
     
        <Table data={fullData}></Table>

        <h2 className={utilStyles.heading1Xl} >Median income per County in 2017</h2>
        <p>Here we can see the media income per County in 2017. For the visualization was necesary to filter all rows by the year 2017</p>
        <p className={utilStyles.obs}><i>Obs. For this visualization I use the <a href="https://formidable.com/open-source/victory/">Victory Framework </a> to make de barchart</i></p>


        <BarChart data={data2017}></BarChart>
       
      </section>
    
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  // Call an external API endpoint to get Data.
  // You can use any data fetching library
  //const res = await fetch('https://data.bayareametro.gov/resource/kbci-qkrr.json')
  const res = await fetch('https://data.bayareametro.gov/resource/7e6t-2y8x.json')
  
  const fullData = await res.json()
  const data2017 = fullData.filter(item => item.year && item.year==2017);
  for (let index = 0; index < data2017.length; index++) {
    data2017[index].median_hh_inc_placeofresidence_ia = Number(data2017[index].median_hh_inc_placeofresidence_ia);
    
  }  
  return {
    props: {

      fullData,
      data2017,
     
    }
  }
}