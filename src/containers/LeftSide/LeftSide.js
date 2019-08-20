import React from 'react';
import styles from './LeftSide.module.css';

const leftSide = (props) => (
    <div>
        <main className={styles.container}>
            {props.children}
        </main>
    </div>
);

export default leftSide;