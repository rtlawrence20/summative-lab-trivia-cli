import readline from "readline";
import TriviaUI from "./ui.js";
import questions from "./triviaQuestions.js";

/**
 * TriviaGame class holds a triviaGame logic and
 * a triviaUI as a property to display the game.
 */
export default class TriviaGame {
    constructor(minutes) {
        this.minutes = minutes;
        this.ui = new TriviaUI();
        this.questions = this.shuffleArray([...questions]);
        this.score = 0;
        this.currentIndex = 0;
        this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
        this.timeUp = false;
    }
  
    /**
     * Method to shuffle and return a random stack
     * of questions from the test bank for 
     * a different setup each game.
     * @param {array} questions 
     */
    shuffleArray(array) {
    }

    /**
     * Method to get userInput
     * @param {string} prompt 
     */
    askInput(prompt) {
    }

    /**
     * Method to house a timer that will keep game time
     * and return when the game is expired.
     */
    startTimer() {
    }

    /**
     * Method to start the game and house the main logic
     * of the game flow.
     */
    async start() {
    }

    /**
     * Method to end the game and send message to user.
     * @param {string} message 
     */
    endGame(message) {
    }
}