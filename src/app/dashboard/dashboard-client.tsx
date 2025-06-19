'use client'

import { User } from '@supabase/supabase-js'
import { Heart, Users, BookOpen, AlertCircle, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import { useToast } from '@/components/ui/use-toast'

interface DashboardClientProps {
  user: User
}

export function DashboardClient({ user }: DashboardClientProps) {
  const router = useRouter()
  const { toast } = useToast()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    toast({
      title: "Signed out successfully",
      description: "You have been signed out of your account.",
    })
    router.push('/')
    router.refresh()
  }

  const userName = user.user_metadata?.first_name || user.email?.split('@')[0] || 'User'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                Solidarity Forum
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <Link href="/crises" className="text-gray-600 hover:text-gray-900">
                  Crises
                </Link>
                <Link href="/organizations" className="text-gray-600 hover:text-gray-900">
                  Organizations
                </Link>
                <Link href="/education" className="text-gray-600 hover:text-gray-900">
                  Learn
                </Link>
              </nav>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {user.user_metadata?.full_name || user.email}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userName}!
          </h1>
          <p className="text-gray-600">
            Ready to make a difference? Explore ongoing crises and find ways to help.
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link href="/crises" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Explore Crises</h3>
                  <p className="text-sm text-gray-500">Current global issues</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/organizations" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Find NGOs</h3>
                  <p className="text-sm text-gray-500">Verified organizations</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/education" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Learn More</h3>
                  <p className="text-sm text-gray-500">Educational resources</p>
                </div>
              </div>
            </div>
          </Link>

          <div className="group cursor-pointer">
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">My Impact</h3>
                  <p className="text-sm text-gray-500">Track contributions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Updates</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-900 font-medium">Gaza Crisis Update</p>
                <p className="text-gray-600 text-sm">New organizations added to help with humanitarian aid</p>
                <p className="text-gray-400 text-xs">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-900 font-medium">Sudan Emergency Response</p>
                <p className="text-gray-600 text-sm">Updated donation channels available</p>
                <p className="text-gray-400 text-xs">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-900 font-medium">Educational Resource</p>
                <p className="text-gray-600 text-sm">New guide: "Understanding Humanitarian Crises"</p>
                <p className="text-gray-400 text-xs">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}