
import React from 'react'

export default function ScoreBoard(props) {
    const { timeLeft, cpm, correctTypedWords } = props;
    return (
        <div id="scoreboard">
            <table className="table  is-fullwidth">
                <thead>
                    <tr>
                        <th>Time Left</th>
                        <th>CPM</th>
                        <th>correct Typed Words</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{timeLeft}</th>
                        <th>{cpm}</th>
                        <th>{correctTypedWords}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}