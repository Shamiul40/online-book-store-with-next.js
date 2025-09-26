import React from 'react'

export default function DynamicPage({params : {id}}) {
  
  console.log(id)

  return (
    <div>
      <h1> DynamicPage here</h1>
    </div>
  )
}
