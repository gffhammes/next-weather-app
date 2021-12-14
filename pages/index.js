import Head from 'next/head';
import SearchBox from '../components/SearchBox';

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App - Next.js</title>
      </Head>
      
      <div className="home">
        <div className="container">
          <SearchBox />
        </div>
      </div>
    </>
  )
}
