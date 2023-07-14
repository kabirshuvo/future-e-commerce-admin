"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "./components/Navbar/Navbar"


export default function Home() {
  const { data: session } = useSession()
  if (!session){
    return (
      <div className='bg-blue-900 w-screen h-screen flex items-center'>
     <div className="text-center w-full">
      <button onClick={()=> signIn('google')} className="bg-white p-4 rounded-lg text-blue-900 font-semibold">LogIn with Google</button>
     </div>
    </div>
    )
  }

  return(
   <div >
    <header className='bg-blue-900 w-screen h-screen flex text-white p-4'>
<Navbar/>

<div className='bg-blue-900 w-screen h-screen flex grow-1 bg-white text-blue-950 p-1 rounded-lg'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>

    <span className="ps-1"><span className="p-1 font-bold">{session?.user?.name}</span> Logged in </span>
    </div>
    </header>
   
   </div>
  )
}


