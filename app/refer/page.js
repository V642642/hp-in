import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Dropdowns from '@/components/refer/Dropdowns'
import Referbanner from '@/components/refer/Referbanner'
import Refercontent from '@/components/refer/Refercontent'
import React from 'react'

export default function page() {
  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <Header />
        <Referbanner />
        <Refercontent />
        <Dropdowns />
        <Footer />
    </div>
  )
}
