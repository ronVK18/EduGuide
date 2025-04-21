import React from 'react'

function Failed() {
  return (
    <div>
        <h1 className='text-3xl font-bold'>Payment Failed</h1>
        <p className='text-lg'>Your payment was not successful. Please try again.</p>
        <a href='/courses' className='text-blue-600 underline'>Retry Payment</a>
    </div>
  )
}

export default Failed