import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='container'>
        <Link to="/">Go back</Link>
      <h1 className='text-4xl m-10'>Not Found</h1>
    </div>
  )
}

export default ErrorPage
