'use client'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '@/component/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/component/Footer'
import './globals.css'
import { useEffect } from 'react';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'eSIMOK',
  description: 'Find the best prepaid eSIM plans for your travel destination',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []); 
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
