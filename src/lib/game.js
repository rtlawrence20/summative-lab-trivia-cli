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
        return array
            .map(item => ({ value: item, sortFactor: Math.random() }))
            .sort((a, b) => a.sortFactor - b.sortFactor) // use sortFactor added, to randomize questions
            .map(obj => obj.value); // get back original values only (we no longer care about obj.sortValue)
    }

    /**
     * Method to get userInput
     * @param {string} prompt 
     */
    askInput(prompt) {
        return new Promise(resolve => {
            this.rl.question(prompt, answer => resolve(answer.trim()));
        });
    }

    /**
     * Method to house a timer that will keep game time
     * and return when the game is expired.
     */
    startTimer() {
        this.timer = setTimeout(() => {
        this.timeUp = true;
        }, this.minutes * 60 * 1000);
    }

    /**
     * Method to start the game and house the main logic
     * of the game flow.
     */
    async start() {
        this.ui.showStart(this.minutes);
        this.endTime = Date.now() + this.minutes * 60 * 1000;
        this.startTimer();
        while (!this.timeUp && this.currentIndex < this.questions.length) {
            /* --- NOTE:--- 
            // I attempted setInterval() first, but getting that to write
            // caused buggy behavior, so I'm holding an estimate seperate
            // that can be printed to the user at each question.*/
            const remaining = Math.max(0, Math.ceil((this.endTime - Date.now()) / 1000)); //show remaining time independent from timer
            this.ui.showRemainingTime(remaining);
            const q = this.questions[this.currentIndex]; // get the question
            this.ui.showQuestion(q, this.currentIndex); // display the question
            const input = await this.askInput("\nAnswer [1,2,3,4]: "); // get answer from user

            if (this.timeUp) break; // check if time is up before answer
            const playerAnswer = parseInt(input) - 1;

            // update points based on whether answer was correct and display result
            if (playerAnswer === q.answer) {
                this.score += q.points;
                this.ui.showCorrect();
            } else {
                this.ui.showWrong(q.choices[q.answer]);
            }
            this.currentIndex++;
        }
        this.endGame(this.timeUp ? "Time has ran out!" : "You finished all the questions!"); // if there is still time, then currentIndex = questions.length
    }

    /**
     * Method to end the game and send message to user.
     * @param {string} message 
     */
    endGame(message) {
        this.ui.showEnd(message, this.score);
        this.rl.close();
        process.exit(0);
    }
}