import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col overflow-x-hidden">
    <Header />
    <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
    <Toaster />
    <Footer />
  </div>
  );
}
