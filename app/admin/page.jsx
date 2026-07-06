"use client"
import React from 'react'

const page = () => {
  return (
   <button className='h-screen'
  onClick={async () => {
    const res = await fetch("api/certificate/data", {
      method: "POST",
    });

    console.log(await res.json());
  }}
>
  Import Data
</button>
  )
}

export default page