import React from 'react'
import BannerPage from './banner'
import AnimationPage from './animation'
import WorkersSection from './workers'

export default function HomePage() {
  return (
    <div className='min-h-screen'>
      <AnimationPage />
      <BannerPage />
      <WorkersSection />
    </div>
  )
}
