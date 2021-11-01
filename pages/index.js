import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import { motion } from 'framer-motion';

export default function Home() {

  const styles = {
    background: "darkgreen",
    borderRadius: 20,
    width: 100,
    height: 100,
    margin: "auto"
  };
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
       
        
        <motion.div
    style={styles}
    
    transition={{ duration: 0.5 }}
    animate={{ scale: 6 , backgroundColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'] }} 
  /></p>
      </main>
<pre>"I don't trust those trees. They seem kind of shady."</pre>
      <Footer />
    </div>
  )
}
