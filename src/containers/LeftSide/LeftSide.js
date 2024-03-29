import React from 'react';
import styles from './LeftSide.module.css';

const leftSide = (props) => (
        <div className={styles.container}>
            {props.children}
        </div>
);

export default leftSide;