import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Footer from '../src/components/Main/Footer/Footer'
import Main from '../src/components/Main/Main'
import NavBar from '../src/components/NavBar/NavBar'

const Home: NextPage = () => {

  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    setIsConnected(localStorage.getItem("user") !== null)
  }, [])

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") ?? "{}"));
  }, [isConnected])

  return (<>
    <NavBar isConnected={isConnected} />
    <Main user={user} />
    <Footer />
  </>)
}

export default Home
