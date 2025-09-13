#!/usr/bin/env node
import readline from "readline";
import TriviaGame from "../src/lib/game.js";
const messageWelcome = 'Welcome to my trivia game!\n';
const messagePrompt = "Choose amount of time you would like to have:\n\n"+
                        "[ 1 minute ], [ 2 minutes ], or [ 3 minutes ]\n\n"+
                        "Answer by typing '1', '2', or '3'\n";
/**
 * Run main program for triviaGame
 */
async function main() {
    //process.stdout.write('\x1Bc'); //clear screen
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.output.write('\x1Bc'); //clear screen
    console.log('\x1b[92m\x1b[4m%s\x1b[0m', messageWelcome);
    const input = await new Promise(resolve => {
        rl.question(messagePrompt, answer => resolve(answer.trim()));
    });
    rl.close();
    const minutes = [1, 2, 3].includes(parseInt(input)) ? parseInt(input) : 1;
    const game = new TriviaGame(minutes);
    await game.start();
}

main();