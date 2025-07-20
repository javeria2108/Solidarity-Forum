// src/app/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">
                Solidarity Forum
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                How it Works
              </a>
              <a
                href="#categories"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Categories
              </a>
              <a
                href="#impact"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Impact
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Link href="/signin">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-emerald-600"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Unite Your Skills
                  <span className="text-emerald-600 block">For Gaza</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect your expertise with those who need it most. From
                  medical counseling to educational support, your skills can
                  make a real difference in the lives of those affected by the
                  ongoing crisis.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto"
                  >
                    Start Volunteering
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Free to join</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Secure platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Real impact</span>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-orange-100 rounded-3xl p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-4">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                        <Heart className="h-4 w-4 text-emerald-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">
                        Medical Support
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        1,247 volunteers
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-4">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                        <Users className="h-4 w-4 text-orange-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">
                        Mental Health
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        892 volunteers
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">
                          Global Community
                        </p>
                        <p className="text-sm text-gray-500">
                          Making impact together
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to start making a difference with your unique skills
              and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sign Up & Share Your Skills
              </h3>
              <p className="text-gray-600">
                Create your profile and tell us about your expertise,
                availability, and how you&apos;d like to help.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get Matched
              </h3>
              <p className="text-gray-600">
                Organizations and individuals in need will connect with you
                based on your skills and availability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Make Impact
              </h3>
              <p className="text-gray-600">
                Provide your services, whether remotely or on-site, and see the
                direct impact of your contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ways to Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your skills are needed across multiple areas - find where you can
              make the biggest impact
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Medical Support",
                icon: Heart,
                color: "emerald",
                description: "Telemedicine, counseling, health education",
              },
              {
                title: "Mental Health",
                icon: Users,
                color: "orange",
                description: "Therapy, trauma support, wellness programs",
              },
              {
                title: "Education",
                icon: Globe,
                color: "blue",
                description:
                  "Online tutoring, skill workshops, language classes",
              },
              {
                title: "Emergency Aid",
                icon: Shield,
                color: "red",
                description: "Crisis response, logistics, coordination",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-${category.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <category.icon
                      className={`h-6 w-6 text-${category.color}-600`}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        id="impact"
        className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Together We Make a Difference
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Join thousands of volunteers who are already making an impact
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-emerald-100">Active Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-emerald-100">People Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-emerald-100">Partner Organizations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-emerald-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every skill matters. Every hour counts. Every person helped makes
              our collective effort worthwhile.
            </p>
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Join Solidarity Forum Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-xl">Solidarity Forum</span>
              </div>
              <p className="text-gray-400">
                Connecting volunteers with those in need to create lasting
                positive impact.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Safety
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Guidelines
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Solidarity Forum. Built with ❤️ for humanitarian aid.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
