import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <nav className='mx-auto flex max-w-3xl gap-3 p-3'>
            <Link href="/privacy">Privacy Policy</Link>

        </nav>
    </footer>
  )
}

export default Footer