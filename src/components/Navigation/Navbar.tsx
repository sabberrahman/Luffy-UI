import Link from 'next/link'
import React from 'react'
import Icons from '../global/icons'
import { buttonVariants } from '../ui/button';
import Image from 'next/image';

export const Navbar = () => {
    const user = false;
  return (
    <header className='px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50'>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
            <div className="flex items-start ">
                <Link href={"/"} className='flex items-center gap-2'>
                {/* <Icons.logo  className='w-8 h-8 '/> */}
                <Image src="/icons/Logo.png" alt='icon' width={40} height={40} className='rounded-md'/>
                <span className='text-lg font-medium'>Luffy</span>
                </Link>
            </div>

            <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <ul className='flex gap-8 items-center'>
                    <li className="hover:text-foreground/80 text-sm">
                    <Link href="#">Pricing</Link>
                    </li>
                    <li className="hover:text-foreground/80 text-sm">
                    <Link href="#">Features</Link>
                    </li>
                    <li className="hover:text-foreground/80 text-sm">
                    <Link href="#">Blog</Link>
                    </li>
                    <li className="hover:text-foreground/80 text-sm">
                    <Link href="#">About</Link>
                    </li>
                </ul>
           </nav>

           <div className="flex items-center gap-4">
            {user?("User Button"):(
                <>
                <Link href="#" className={buttonVariants({size:"sm", variant:"ghost"})}>Login
                </Link>

                <Link href="#" className={buttonVariants({size:"sm", className:""})}>Start Free Trail
                </Link>
                </>
            )}
           </div>
        </div>
    </header>
  )
}
