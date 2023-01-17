import { useState, useEffect } from 'react'
import styles from '../styles/TV.module.css'
import MovingText from './movingText'

export default function TV() {
    const [text, setText] = useState('');

    const fetchText = async () => {
        const response = await fetch("/api/generate/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (response.status !== 200) {
            throw response.error || new Error(`Request failed with status ${response.status}`);
        } else {
            const data = await response.json();
            setText(data.result.choices[0].text);
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        const loop = async () => {
            await fetchText();
            await sleep(10000);
            setText('')
            await sleep(1000);
            loop();
        }
        loop();
    }, [])


    return (
        <div className={styles.container}>
            { text === '' ?
                <></> :
                <div className={styles.speechBox}>
                    <MovingText text={text} />
                </div> 
            }
        </div>
    )
}