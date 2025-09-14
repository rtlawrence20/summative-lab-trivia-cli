/**
 * TriviaUI class contains methods to display
 * a TriviaGame.
 */
export default class TriviaUI {
    /**
     * Method to display start of game
     * @param {number} minutes 
     */
    showStart(minutes) {
        process.stdout.write('\x1Bc'); //clear screen
        console.log(`\n\x1b[93m%s\x1b[0m`, `You have ${minutes} minute(s). Good luck!\n`);
    }

    /**
     * Method to display time remaining in seconds
     * @param {number} seconds 
     */
    showRemainingTime(seconds) {
        console.log(`Time left: ${seconds} seconds`);
    }

    /**
     * Method to take question and index and display
     * the question at index and the choices.
     * @param {*} q 
     * @param {*} index 
     */
    showQuestion(q, index) {
        console.log(`\x1b[4m%s\x1b[0m`, `\nQuestion ${index + 1}:`)
        console.log(`${q.question}`);
        q.choices.forEach((choice, choiceIndex) => console.log(`[${choiceIndex + 1}] : ${choice}`));
    }

    /**
     * Method to display that the user input was
     * correct.
     */
    showCorrect() {
        process.stdout.write('\x1Bc'); //clear screen to setup answer and next question
        console.log('\x1b[32m%s\x1b[0m', 'Correct'); //print green
    }

    /**
     * Method to display that the user input was 
     * incorrect and display the correct answer to the question.
     * @param {string} correctAnswer 
     */
    showWrong(correctAnswer) {
        process.stdout.write('\x1Bc'); //clear screen to setup answer and next question
        console.log('\x1b[31m%s\x1b[0m', `Wrong\nThe correct answer: ${correctAnswer}`); //print red
    }

    /**
     * Method to display after game results.
     * @param {string} message 
     * @param {number} score 
     */
    showEnd(message, score) {
        console.log(`\n${message}`);
        console.log(`\x1b[1m%s\x1b[0m`, `Your Final Score:\n${score} points!`);
    }
}