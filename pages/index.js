import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
        <motion.div initial="hidden" animate="visible">
          Get started by editing <code>pages/index.js</code>
          </motion.div>
        </p>
      </main>

      <Footer />
    </div>
  )
}
