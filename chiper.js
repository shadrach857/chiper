const alphabets = 'abcdefghijklmnopqrstuvwxyz';
const encrypt = (letter, value) => {
    const shift = (alphabets.indexOf(letter) + value) % alphabets.length;
    return alphabets[shift];
}


const encryptMessage = (word, value) => {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        const encryptValue = encrypt(word[i], value);
        result += encryptValue;
    }
    return result;
}
