import React from 'react'
import styles from './Col.module.css';

const Col = (props) => {
    return (
        <div className={styles.col} onClick={props.handleClick} >
            <div className={styles['col-inner']}>
                {props.value}
            </div>
        </div>
    )
}

export default Col
