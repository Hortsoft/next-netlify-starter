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
        <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}>
  <h1 className="title">
    Wubba Lubba Dub Dub!
  </h1>
</motion.div>
        </p>
      </main>

      <Footer />
    </div>
  )
}
