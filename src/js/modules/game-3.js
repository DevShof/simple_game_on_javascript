// GameThree
// ===================================================================

import { selectGameMenu } from "./menu";

export function runGameThree() {
    alert(`Game "Click it"`);
    alert(`
        I will show you 10 system windows.
        You shoud click it as fast as you can.
        Note: in window "confirm" press "cancel".
        Are you ready?
    `)
    let errAnswerClick = 0;
    for (let i = 0; i < 10; i++) {
        const userAnswerClick = generateWindow();
        if (userAnswerClick) {
            errAnswerClick++;
        }
    }
    alert(`Wrong clicks: ${errAnswerClick}`);
    selectGameMenu();
}

function clickConfirm() {
    const userClick = confirm(`Press "cancel"`);
    const errClick = 1;
    if (userClick == true) {
        return errClick;
    }
}

function clickAlert() {
    alert(`Press "ok"`);
}

function generateWindow() {
    const randomWindow = generateRandomNum();
    switch(randomWindow) {
        case 0:
            return clickConfirm();
        case 1:
            return clickAlert();
        default:
            getFatalErr();
    }
}

function generateRandomNum() {
    const randomNum = Math.random() * 1;
    const randomNumRound = Math.round(randomNum);
    return randomNumRound;
}

function getFatalErr() {
    alert(`fatal error`);
}

