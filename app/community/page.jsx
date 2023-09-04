import React from 'react'
import Com from './components/Com'
import getImages from '@/actions/get-images'


async function page() {
  
  const results = await getImages();
  
  return (
    <Com images={results.results}/> 
  )
}

export default page