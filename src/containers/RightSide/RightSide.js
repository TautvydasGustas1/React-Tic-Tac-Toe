import React from 'react';
import styles from './RightSide.module.css';

const RightSide = (props) => (
        <div className={styles.container}>
            {props.children}
        </div>
);

export default RightSide;