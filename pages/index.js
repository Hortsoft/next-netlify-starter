import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import { motion } from 'framer-motion';

export default function Home() {

  const styles = {
    background: "red",
    borderRadius: 30,
    width: 50,
    height: 50,
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
    animate={{ scale: 3 }}
    transition={{ duration: 0.25 }}
  /></p>
      </main>

      <Footer />
    </div>
  )
}
