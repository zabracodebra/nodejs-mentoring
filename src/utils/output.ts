import chalk from 'chalk';

const message = (text: string) => {
    console.log(chalk.white.bold(text));
};

export const output = {
    message,
};
