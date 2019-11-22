import inquirer from 'inquirer';
import { output, reverseString } from '../utils';
import { Messages } from './constants';

// https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/

type Answers = {
    stringToRevers: string,
    askAgain: boolean
};

const questions = [
    {
        type: 'input',
        name: 'stringToRevers',
        message: Messages.REVERSE_STRING
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: Messages.ASK_AGAIN,
        default: true
    }
];

const runTask = async () => {
    const { stringToRevers, askAgain }: Answers = await inquirer.prompt(questions);

    output.message(reverseString(stringToRevers));

    if (askAgain) {
        runTask();
    }
}

runTask();
