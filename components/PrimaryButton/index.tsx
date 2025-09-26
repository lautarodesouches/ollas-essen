import styles from './styles.module.css'
import Button from '../Button'

interface Props {
    children: React.ReactNode
    onClick?: () => void
}

export default function PrimaryButton({ children, onClick }: Props) {
    return (
        <Button customStyle={styles.button} onClick={onClick}>
            {children}
        </Button>
    )
}
