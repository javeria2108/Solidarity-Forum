'use client'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

// Destructure children from the props object
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Provider
