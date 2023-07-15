"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "./components/Navbar/Navbar"
import Layout from "./components/Layout/Layout"
import Image from 'next/image';


export default function Home() {
    const {data: session} = useSession()
 return <Layout>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
  </svg>
    
    {session && (
        <>
          <span className="ps-1">  Wellcome <span className="p-1 font-bold">  {session?.user?.name}</span> </span>
          {/* <Image
            src={session?.user?.image}
            alt="User Image"
            width={100}
            height={100}
          /> */}
        </>
      )}

 </Layout>
}


