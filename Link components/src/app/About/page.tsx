import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
        <h1>About Page</h1>
        <button><Link href="/Contact">Go to Contact page</Link></button>
    </div>
  )
}

export default About