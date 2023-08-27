import React from 'react'
import Com from './components/Com'
import getImages from '@/actions/get-images'


async function page() {
  const results = await getImages();
 
  return (
    <div><Com images={results.resources}/></div>
  )
}

export default page