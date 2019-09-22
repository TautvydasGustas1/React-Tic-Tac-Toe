import React, { Component } from 'react'
import styles from './Info.module.css';

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
                
            }
    }

    render() {
        return (
            <div className={styles['info-container']}>
                <div className={styles['info-container_inner']}>
                    Tic-Tac-Toe
                </div>
            </div>
        )
    }
}
