import React, {Component} from 'react'
import {Stage} from 'react-konva'

class TicTacToe extends Component {

  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  }

  componentWillMount() {
    let height = window.innerHeight
    let width = window.innerWidth
    let size = (height < width) ? height * .8 : width * .8
    let rows = this.state.rows
    let unit = size / rows

    this.setState({
      size,
      rows,
      unit
    })
  }

  move = () => {
    //placeholder
  }

  makeAiMove = () => {
    //placeholder
  }

  turingTest = () => {

  }

  recordGame = () => {

  }

  render() {
    let {
      size
    } = this.state
    return (
      <div>
        <Stage
          width={size}
          height={size}
        >
          {/* <Board/>*/}
          {/*<Squares/>*/}
        </Stage>
      </div>
    )
  }
}

export default TicTacToe
