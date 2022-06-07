import { useRouter } from 'next/router';
import React from 'react'
import data from '../../utils/data';
import Layout from '../../components/Layout/Layout';
import NextLink from 'next/link'
import { Link } from '@material-ui/core';

export default function ProductScreen() {
    const router =useRouter();
    const {slug}=router.query
    const product = data.products.find(a => a.slug === slug) 

    if(!product) {
        return <div>Product not found</div>
    }
  return (
    <Layout title={product.name}>
        <div>
            <NextLink href="/" passHref>
                <Link>back to products</Link>
            </NextLink>
        </div>

    </Layout>
  )
}
