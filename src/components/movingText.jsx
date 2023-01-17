import styles from '../styles/TV.module.css'

export default function MovingText({ text }) {

    return (
        <div className={styles.movingTextContainer}>
            <span className={styles.movingText}>
                {text}
            </span>
        </div>
    )
}