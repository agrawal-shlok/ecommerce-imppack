import React from 'react'
import Hero from '../Components/Hero'
import Latestcollection from '../Components/Latestcollection'
import Bestseller from '../Components/Bestseller'
import Ourpolicy from '../Components/Ourpolicy'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Latestcollection/>
        <Bestseller/>
        <Ourpolicy/>
    </div>
  )
}

export default Home