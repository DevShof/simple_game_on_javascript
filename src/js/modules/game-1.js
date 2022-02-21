// GameOne
// ===================================================================

import { selectGameMenu } from "./menu";

export function runGameOne() {
    alert(`Game "Think of a number"`);
    alert(`
        I will think of a number between 1 and 100.
        Try to guess it that few attempts as possible.
        After each of your attempt, I will reply you if
        your number is higher or lower.
        Are you ready?
    `);
    const correctNum = generateRandomNum();
    for (let i = 1; i <= 100; i++) {
        const inputNum = +prompt('Try to guess');
        if (inputNum == correctNum) {
            alert('Great!');
            alert(`
                You succeed from ${i}th attempt
            `);
            break;
        } else if (inputNum < correctNum && inputNum > 0) {
            alert('Higher');
            continue;
        } else if (inputNum > correctNum && inputNum < 101) {
            alert('Lower');
            continue;
        } else {
            alert('Wrong input');
            continue;
        }
    }
    selectGameMenu();
}

function generateRandomNum() {
    const randomNum = Math.random() * 100;
    const randomNumRound = Math.round(randomNum);
    console.log(randomNumRound);
    return randomNumRound;
}