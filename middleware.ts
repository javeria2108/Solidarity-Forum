// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const supabase = createMiddlewareClient({ req, res })

  await supabase.auth.getSession() // refreshes the user's session

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'], // all routes except static
}
