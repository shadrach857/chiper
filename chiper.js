const alphabets1 = 'abcdefghijklmnopqrstuvwxyz';
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

const alphabets = 'abcdefghijklmnopqrstuvwxyz';

const decrypt = (letter, value) => {
    const shift = (alphabets.indexOf(letter) - value + alphabets.length) % alphabets.length;
    return alphabets[shift];
}

const decryptMessage = (word, value) => {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        const decryptValue = decrypt(word[i], value);  
        result += decryptValue;   
    }
    return result;
}

 
console.log(decryptMessage("dpef", 1));   

