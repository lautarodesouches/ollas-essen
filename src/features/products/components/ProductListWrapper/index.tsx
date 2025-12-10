'use client'

import { useEffect, useState } from 'react'
import ProductList from '../ProductList'
import ProductSkeleton from '../ProductSkeleton'
import { Product } from '../../types'

interface ProductListWrapperProps {
    products: Product[]
}

export default function ProductListWrapper({ products }: ProductListWrapperProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [displayProducts, setDisplayProducts] = useState<Product[]>([])

    useEffect(() => {
        // Simular carga inicial con delay más largo para que se vea
        const timer = setTimeout(() => {
            setDisplayProducts(products)
            setIsLoading(false)
        }, 1500) // 1.5 segundos para visualización clara

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        // Actualizar productos cuando cambien los filtros
        if (!isLoading) {
            setDisplayProducts(products)
        }
    }, [products, isLoading])

    if (isLoading) {
        return <ProductSkeleton count={10} />
    }

    return <ProductList products={displayProducts} />
}
