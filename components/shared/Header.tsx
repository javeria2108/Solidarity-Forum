import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import SignOutButton from '../SignOutButton'

const Header = async () => {
  const session=await getServerSession(authOptions)
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex items-center justify-between px-10'>
          
            <Link href="/" className='w-36 '>
            <div className='flex gap-2 px-5'>
            <Image src="/assets/images/logo.png" alt='logo' width={80} height={38}></Image>
            <h1 className="m-auto text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-purple-400 to-green-500">
  Solidarity <span className="text-purple-600">Forum</span>
</h1>
            </div>
            </Link>
          
            <div className='flex w-32 justify-end gap-3 md:px-10'>
              {session?.user? (
                <SignOutButton/>
              ):
              <Link href='/sign-in'>
                <Button>Sign In</Button>
              </Link>}

            </div>
        </div>
    </header>
  )
}

export default Header