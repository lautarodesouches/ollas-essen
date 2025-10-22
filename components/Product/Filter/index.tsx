'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { ROUTES } from '@/routes'

interface Props {
    currentFilters: {
        linea?: string
        comensales?: number
        medida?: string
        nombre?: string
    }
    lines: string[]
    servings: string[]
}

export default function Filters({ currentFilters, lines, servings }: Props) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [linea, setLinea] = useState(currentFilters.linea || '')
    const [comensales, setComensales] = useState(
        currentFilters.comensales?.toString() || ''
    )
    const [medida, setMedida] = useState(currentFilters.medida || '')
    const [nombre, setNombre] = useState(currentFilters.nombre || '')

    useEffect(() => {
        setLinea(currentFilters.linea || '')
        setComensales(currentFilters.comensales?.toString() || '')
        setMedida(currentFilters.medida || '')
        setNombre(currentFilters.nombre || '')
    }, [currentFilters])

    const updateUrl = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (value) params.set(key, value)
        else params.delete(key)
        router.push(`${ROUTES.PRODUCTOS}?${params.toString()}`)
    }

    return (
        <div className={styles.filters}>
            {/* Línea */}
            <div className={styles.field}>
                <label>Línea</label>
                <select
                    value={linea}
                    onChange={e => {
                        setLinea(e.target.value)
                        updateUrl('linea', e.target.value)
                    }}
                >
                    <option value="">Todos</option>
                    {lines.map((item, index) => (
                        <option value={item} key={index}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            {/* Comensales */}
            <div className={styles.field}>
                <label>Comensales</label>
                <select
                    value={comensales}
                    onChange={e => {
                        setComensales(e.target.value)
                        updateUrl('comensales', e.target.value)
                    }}
                >
                    <option value="">Todos</option>
                    {servings.map((item, index) => (
                        <option value={item} key={index}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            {/* Medida */}
            <div className={styles.field}>
                <label>Medida</label>
                <input
                    type="text"
                    placeholder="Ej: 24cm"
                    value={medida}
                    onChange={e => {
                        setMedida(e.target.value)
                        updateUrl('medida', e.target.value)
                    }}
                />
            </div>

            {/* Nombre */}
            <div className={styles.field}>
                <label>Nombre</label>
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={nombre}
                    onChange={e => {
                        setNombre(e.target.value)
                        updateUrl('nombre', e.target.value)
                    }}
                />
            </div>
        </div>
    )
}
