import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Starbucks clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
        <div className='container mx-auto'>
          <h1 className="title">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>    

          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        </div>
      </main>

      <Footer/>
    </div>
  )
}
