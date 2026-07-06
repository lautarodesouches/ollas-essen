'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useMemo } from 'react'
import ProductFilter from '../ProductFilter'
import ProductListWrapper from '../ProductListWrapper'
import { Product } from '../../types'

interface Props {
    allProducts: Product[]
    lines: string[]
    servings: string[]
}

function ProductsClientContent({ allProducts, lines, servings }: Props) {
    const searchParams = useSearchParams()

    const linea = searchParams.get('linea') || undefined
    const comensales = searchParams.get('comensales') ? Number(searchParams.get('comensales')) : undefined
    const medida = searchParams.get('medida') || undefined
    const nombre = searchParams.get('nombre') || undefined

    // Filter products on the client side based on query parameters
    const filteredProducts = useMemo(() => {
        return allProducts.filter(p => {
            if (linea && p.linea?.toLowerCase() !== linea.toLowerCase()) return false
            if (comensales && p.comensales !== comensales) return false
            if (medida && !p.medida?.toLowerCase().includes(medida.toLowerCase()))
                return false
            if (nombre && !p.nombre.toLowerCase().includes(nombre.toLowerCase()))
                return false
            return true
        })
    }, [allProducts, linea, comensales, medida, nombre])

    return (
        <>
            <ProductFilter
                currentFilters={{ linea, comensales, medida, nombre }}
                lines={lines}
                servings={servings}
            />
            <ProductListWrapper products={filteredProducts} />
        </>
    )
}

export default function ProductsClient(props: Props) {
    return (
        <Suspense fallback={<div>Cargando productos...</div>}>
            <ProductsClientContent {...props} />
        </Suspense>
    )
}
