import React from 'react'
import { print } from '../api/actions/sample'
async function page() {
  const data=await print()
  
  return (
    <div>page
      {data}
    </div>

  )
}

export default page