import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import FunctionClick from '@components/FunctionClick' 
 

export default function Home() {

   
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description"> </p>
        <FunctionClick />
         
      </main>
<pre>"I don't trust those tomatoes. They seem kind of round."</pre>
      <Footer />
    </div>
  )
}
