export const reverseString = (text: string | undefined = '') => {
    return text
        ? text.split('').reverse().join('')
        : '';
};