// GameMenu
// ===================================================================

import { runGameOne } from "./game-1";
import { runGameTwo } from "./game-2";
import { runGameThree } from "./game-3";

export function selectGameMenu() {
    const selectGame = prompt(`
        Choose the Game:
        1 - Think of a number;
        2 - Count it;
        3 - Click it;
        To quit press "Quit"
    `);

    switch (selectGame) {
        case 'Think of a number':
            loadingGameOne();
            break;
        case '1':
            loadingGameOne();
            break;
        case 'Count it':
            loadingGameTwo();
            break;
        case '2':
            loadingGameTwo();
            break;
        case 'Click it':
            loadingGameThree();
            break;
        case '3':
            loadingGameThree();
            break;

        default:
            if (selectGame == 'Quit') {
                quitGame();
            } else {
                wrongInput();
                selectGameMenu();
            }
    }
}

function loadingGameOne() {
    loadingGame();
    runGameOne();
}

function loadingGameTwo() {
    loadingGame();
    runGameTwo();
}

function loadingGameThree() {
    loadingGame();
    runGameThree();
}

function loadingGame() {
    alert(`Loading...`);
}

function quitGame() {
    alert(`Bye, bye`)
}

function wrongInput() {
    alert(`Wrong input, try again`)
}

