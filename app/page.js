"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "./components/Navbar/Navbar"
import Layout from "./components/Layout/Layout"


export default function Home() {
 return <Layout>
  Layout Test
 </Layout>
}


