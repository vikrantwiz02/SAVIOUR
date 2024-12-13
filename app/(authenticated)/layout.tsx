'use client'

import AuthenticatedHeader from "@/components/authenticated-header"
import Footer from "@/components/footer"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <AuthenticatedHeader />
      <div className="flex flex-1">
        <main className="flex-1 p-6">{children}</main>
      </div>
      <Footer />
    </div>
  )
}