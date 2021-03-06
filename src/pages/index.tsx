import Banner from 'components/home/Banner'
import Course from 'components/home/Course'
import Navbar from 'components/shared/Navbar'
import { MainCourse } from 'components/types'
import { NextPage } from 'next'
import Head from 'next/head'





const Home: NextPage<{data:MainCourse[]}> = ({data}) => {
 
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Banner/>
      <Course data={data}/>
      
    </div>
  )
}

export default Home
export const getServerSideProps = async () => {
 try{
  const res = await fetch('https://fake-udemy-dashboard.vercel.app/assets/data.json')
  const data = await res.json()
  return {
    props: {
      data: data
    }
  }
 }
 catch(err){
   console.log('error',err)
 }
}
// https://jsonkeeper.com/b/WWJT
// http://localhost:3000/assets/data.json
// https://fake-udemy-dashboard.vercel.app/assets/data.json'