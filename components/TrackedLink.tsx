'use client'

import Link, { LinkProps } from 'next/link'
import { trackConversion } from '@/utils/gtag'
import { ReactNode } from 'react'

interface Props extends LinkProps {
    children: ReactNode
    className?: string
    target?: string
    rel?: string
}

export default function TrackedLink({
    children,
    onClick,
    ...props
}: Props & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        trackConversion()
        if (onClick) {
            onClick(e)
        }
    }

    return (
        <Link {...props} onClick={handleClick}>
            {children}
        </Link>
    )
}
