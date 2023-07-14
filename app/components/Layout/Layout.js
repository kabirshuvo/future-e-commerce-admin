"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "../Navbar/Navbar"



export default function Layout ({children}) {
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
              {children}
                    

              </div>
        </header>
   </div>
  )
}


