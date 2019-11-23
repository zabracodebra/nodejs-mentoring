import process from 'process';

function reverseText(text: string): string {
    return text
        .split('')
        .reverse()
        .join('');
}

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
    const input: string = process.stdin.read();
    const output: string = reverseText(input);
    process.stdout.write(output);
});
