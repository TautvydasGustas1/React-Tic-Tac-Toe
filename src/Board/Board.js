import React, { Component } from 'react'
import styles from './Board.module.css';
import Col from '../collumn/Col';
import _ from 'lodash';

const PLAYER = "X"; // Player sign
const COMPUTER = "O"; // Computer sign

const WINCONDITIONS = [  // Winning conditions
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6'],
];

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

    minMax(currentBoard, depth, player) {
        const gameState = this.checkforWinCondition(currentBoard);
        
        if(gameState === undefined)
        {
            const values = [];

            for (let i = 0; i < currentBoard.length; i++) {
                const boardCopy = _.cloneDeep(currentBoard);
                if(boardCopy[i] !== null) continue;
                    boardCopy[i] = player;
                        const value = this.minMax(boardCopy, depth + 1, (player === COMPUTER) ? PLAYER : COMPUTER);
                        values.push({
                            cost: value,
                            index: i,
                        });
            }

            if(player === COMPUTER)
            {
                const max = _.maxBy(values, (v) => {
                    return v.cost;
                });
                if(depth === 0) {
                    return max.index;
                }
                else{
                    return max.cost;
                }
            }
            else
            {
                const min = _.minBy(values, (v) => {
                    return v.cost;
                });
                if(depth === 0) {
                    return min.index;
                }
                else{
                    return min.cost;
                }
            }
        }
        else if(gameState === null)
        {
            return 0;
        }
        else if(gameState === PLAYER)
        {
            return depth - 100;
        }
        else if(gameState === COMPUTER)
        {
            return depth - 100;
        }
    }

    moveAI(newTurn) {
        let index = this.minMax(this.state.board, 0, COMPUTER); // (board, depth, player)
        this.handleClick(index, newTurn);
    }

    handleClick(indx, turn) {
        if(this.checkIfTurnValid(indx))
        {
            let newBoard = this.state.board;
            newBoard[indx] = turn;
            let newTurn = this.changeTurns(turn);

            this.setState({
                board: newBoard,
                turn: newTurn, // Changes turn to next player
            })
           
            this.checkforWinCondition(this.state.board);
            //console.log(this.state.board);
            if(turn === PLAYER)
            this.moveAI(newTurn);
        }
    }

    checkforWinCondition(board) {
        //Check for winning condition
        for (let i = 0; i < WINCONDITIONS.length; i++) {
            const [a, b, c] = WINCONDITIONS[i];

            if(board[a] && board[a] === board[b] && board[a] === board[c])
            {
               return this.state.turn;
            }
        }   
        //Check if draw
        if(!board.includes(null))
        {
            return null;
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
