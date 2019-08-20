import React, { Component } from 'react'
import styles from './Board.module.css';
import Col from '../collumn/Col';

const PLAYER = "X"; // Player sign
const COMPUTER = "O"; // Computer sign

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
                board: Array(9).fill(null),
                turn: PLAYER,
            }
    }

    changeTurns(turn) {
        let tempTurn;
        turn === PLAYER ? tempTurn = COMPUTER : tempTurn = PLAYER; 
        return tempTurn;
    }

    checkIfTurnValid(indx) {
        if(this.state.board[indx] === null)
        return true;
        return false;
    }


    handleClick(indx, turn) {
        if(this.checkIfTurnValid(indx))
        {
            let newBoard = this.state.board;
            newBoard[indx] = turn;
            
            this.setState({
                board: newBoard,
                turn: this.changeTurns(turn), // Changes turn to next player
            })
            this.checkforWinCondition();
            console.log(this.state.board);
        }
    }

    checkforWinCondition() {
        const WINCONDITIONS = [
            ['0', '1', '2'],
            ['3', '4', '5'],
            ['6', '7', '8'],
            ['0', '3', '6'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['0', '4', '8'],
            ['2', '4', '6'],
        ];

        for (let i = 0; i < WINCONDITIONS.length; i++) {
            const [a, b, c] = WINCONDITIONS[i];
            if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c])
            {
                return "WINNER WINNER CHICKEN DINNER";
            }
        }
    }

    render() {
        const cols = this.state.board.map((col, index) => <Col value={col} key={index} handleClick={() => this.handleClick(index, this.state.turn)}/>)
        return (
            <div className={styles.outer_container}>
                <div className={styles.row}>
                    {cols}
                </div>
            </div>
        )
    }
}
