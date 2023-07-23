import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import TopCards from '@/components/TopCards'
import BarChart from '@/components/BarChart'
import RecentOrders from '@/components/RecentOrders'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen'>
      <Head>
        
        <title>User Dashboard</title>
        <meta name="description" content="A user dashboard application that provides a comprehensive overview of user data and interactions." />
        <meta name="keywords" content="user dashboard, data visualization, Next.js,Tailwind CSS," />
        <meta name="author" content="Sanjayshanmugam sk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
      </Head>
      <Header/>
      <TopCards/>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 p-4'>
        <BarChart/>
        <RecentOrders/>
      </div>
    </main>
  )
}
