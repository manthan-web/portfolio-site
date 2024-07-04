import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import AIChatButton from './AIChatButton'

const Navbar = () => {
  return (
    <header className='sticky top-0 bg-background '>
        <div className='max-w-3xl mx-auto flex flex-wrap justify-between px-3 py-4 gap-3'>
            <nav className='space-x-4 font-medium '>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/socials">Social Media</Link>
            </nav>
            <div className='flex items-center gap-4'>
                <AIChatButton />
                <ThemeToggle />
            </div>

        </div>

    </header>
  )
}

export default Navbar