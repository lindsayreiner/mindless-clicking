import { useState } from 'react'

import Timer from './Timer';
import '../styles/MathGame.css';

export default function MathGame() {
    const [score, setScore] = useState(0);
    const [rn1, setRn1] = useState();
    const [rn2, setRn2] = useState();
    const [sign, setSign] = useState();
    const [answer, setAnswer] = useState();
    const [correctAnswer, setCorrectAnswer] = useState();

    setRn1 = getRandomInt();
    setRn2 = getRandomInt();

    const getRandomInt = () => {
        const minNum = 1;
        const maxNum = 9

        const rn = Math.round(Math.floor(Math.random() * (maxNum - minNum + 1) + minNum));


        return rn;

    }

    const getRandomSign = () => {
        const signs = ['+', '-', '*', '/'];
        const randomSign = Math.round(Math.floor(Math.random() * signs.length));
        return signs[randomSign];
    };

    const checkAnswer = (e) => {
        e.preventDefault();

        const answerCheck = eval(``)
    }

    return (
        <>
            <section className="mathGameWrapper">
                <h1 className="mathGameHeader">Get it right, earn a point. Get it wrong, lose a point. Repeat.</h1>
                <div className="scoreTimerWrapper">
                    <p className="score">Score: {score}</p>
                    <Timer />
                </div>
                <p className="calculate">Calculate:</p>
                <div className="problemWrapper">
                    <div className="randomNumber">{getRandomInt()}</div>
                    <div className="sign">{getRandomSign()}</div>
                    <div className="randomNumber">{getRandomInt()}</div>
                    <span className="sign">=</span>
                    <input type="number" className="answerInput" onSubmit={checkAnswer} />
                </div>

            </section>
        </>
    )
}
