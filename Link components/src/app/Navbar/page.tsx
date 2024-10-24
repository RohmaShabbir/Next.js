import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <h1>Navbar Page</h1>
        <button><Link href="/Footer">Go to Footer page</Link></button>
    </div>
  )
}

export default Navbar