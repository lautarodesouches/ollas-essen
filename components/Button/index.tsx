import styles from './styles.module.css'

interface Props {
    children?: React.ReactNode
    customStyle?: string
    onClick?: () => void
}

export default function Button({
    children,
    customStyle,
    onClick = () => {},
}: Props) {
    const buttonClass = [styles.button, customStyle].filter(Boolean).join(' ')

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    )
}
