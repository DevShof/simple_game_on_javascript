// GameTwo
// ===================================================================

import { selectGameMenu } from "./menu";

export function runGameTwo() {
    alert(`Game "Count it"`);
    alert(`
        I will give you the Math task.
        You shoud get right 5 tasks.
        Are you ready?
    `);
    let correctAnswer = 0;
    for (let i = 0; i < 5; i++) {
        const isCorrectAnswer = calcMathAction();
        if(isCorrectAnswer) {
            correctAnswer++;
        }
    }
    alert(`Correct answers: ${correctAnswer} from 5`);
    selectGameMenu();
}

function generateRandomMathAction() {
    const randomNum = generateRandomAction();
    switch (randomNum) {
        case 0:
            return '+';
        case 1:
            return '-';
        case 2:
            return '*';
        default:
            getFatalErr();
    }
}

function calcMathAction() {
    const randomA = generateRandomNum();
    const randomB = generateRandomNum();
    const mathAction = generateRandomMathAction();
    const inputAnswer = +prompt(`${randomA} ${mathAction} ${randomB}`);
    switch (mathAction) {
        case '+':
            return randomA + randomB == inputAnswer;
        case '-':
            return randomA - randomB == inputAnswer;
        case '*':
            return randomA * randomB == inputAnswer;
        default:
            getFatalErr();
    }
}

function generateRandomNum() {
    const randomNum = Math.random() * 20;
    const randomMathRound = Math.round(randomNum);
    return randomMathRound;
}

function generateRandomAction() {
    const randomNum = Math.random() * 2;
    const randomMathRound = Math.round(randomNum);
    return randomMathRound;
}

function getFatalErr() {
    alert(`fatal error`);
}

