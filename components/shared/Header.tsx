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
        <div className='wrapper flex items-center justify-between'>
            <Link href="/" className='w-36'>
            <Image src="/assets/images/logo.png" alt='logo' width={80} height={38}></Image>
            </Link>
            <div className='flex w-32 justify-end gap-3'>
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