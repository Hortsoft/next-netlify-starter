import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import { motion } from 'framer-motion';

export default function Home() {

  const styles = {
    background: "darkgreen",
    borderRadius: 30,
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
    animate={{ scale: 8 }}
    transition={{ duration: 0.5 }}
    animate={{ backgroundColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'] }}
  /></p>
      </main>

      <Footer />
    </div>
  )
}
