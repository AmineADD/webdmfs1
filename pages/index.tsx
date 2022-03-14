import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Footer from '../src/components/Main/Footer/Footer'
import Main from '../src/components/Main/Main'
import NavBar from '../src/components/NavBar/NavBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setIsConnected(localStorage.getItem("user") !== null)
  })

  return (
    <div className={styles.container}>
      <NavBar isConnected={isConnected} />
      <Main isConnected={isConnected} />
      <Footer />
    </div>
  )
}

export default Home
