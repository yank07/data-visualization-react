import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import fetch from 'node-fetch'
import React, { useState } from 'react'
import Table from '../components/table'
import BarChart from '../components/barChart'
 





export default function Home ({ 
  initialData,
 
  
}: {
  initialData:Object[],
 
  
}) {

  const [fullData,setfullData] = useState(initialData)

  const initialFilter = initialData.filter(item => item.year && item.year==2017);
    for (let index = 0; index < initialFilter.length; index++) {
      initialFilter[index].median_hh_inc_placeofresidence_ia = Number(initialFilter[index].median_hh_inc_placeofresidence_ia);
     
    } 
  const [filtered,setFiltered] = useState(initialFilter)
 
  const onYearChange = (event)=> { console.log(event.target.value)
    
   const filtered2 = initialData.filter(item => item.year && item.year==event.target.value);
   setFiltered(filtered2)
  
  }
  

  

  
  
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

        <select name="" id="" onChange={onYearChange}>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </select>
        <BarChart data={filtered}></BarChart>
       
      </section>
    
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  // Call an external API endpoint to get Data.
  // You can use any data fetching library
  //const res = await fetch('https://data.bayareametro.gov/resource/kbci-qkrr.json')
  const res = await fetch('https://data.bayareametro.gov/resource/7e6t-2y8x.json')
  
  const initialData = await res.json()
 
  for (let index = 0; index < initialData.length; index++) {
    initialData[index].median_hh_inc_placeofresidence_ia = Number(initialData[index].median_hh_inc_placeofresidence_ia);
    
  }  
  return {
    props: {

      initialData
      
     
    }
  }
}