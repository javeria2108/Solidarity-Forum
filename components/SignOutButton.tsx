'use client'
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
    <div>
    <Button onClick={()=>signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/sign-in`
    })}>Sign Out</Button>
   </div> 
  )
}

export default SignOutButton