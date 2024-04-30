import React from 'react'
import Hero from '../components/hero/Hero'
import RecentArticles from '../components/recentArticles/RecentArticles'
import Footer from '../components/footer/Footer'
import FeaturedArticles from '../components/recentArticles/FeaturedArticles'
import TopArticles from '../components/recentArticles/TopArticles'

function Home() {
  return (
    <>
        <Hero/>
        <RecentArticles/>
        <FeaturedArticles/>
        <TopArticles/>
        <Footer/>
    </>
  )
}

export default Home