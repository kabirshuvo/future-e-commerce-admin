import React from 'react'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'

function Products() {
  return (
    <Layout>
      <Link  href={'/products/new'} className='bg-blue-900 text-white riunded-lg py-2 px-4 h-9'>Add New Products</Link>
    </Layout>
  )
}

export default Products