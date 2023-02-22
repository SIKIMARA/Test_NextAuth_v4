"use client";
import './globals.css'
import { SessionProvider } from 'next-auth/react'
export default function RootLayout({
  children,session
}: {
  children: React.ReactNode,session: any
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
        {children}
        </SessionProvider>
      </body>
    </html>
  )
}
