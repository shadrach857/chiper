const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Function to shift letters
const encrypt = (letter, value) => {
    const index = alphabets.indexOf(letter);
    if (index === -1) return letter; 
    const shift = (index + (value % alphabets.length)) % alphabets.length; 
    return alphabets[shift];
};

const decrypt = (letter, value) => {
    const index = alphabets.indexOf(letter);
    if (index === -1) return letter; 
    const shift = (index - (value % alphabets.length) + alphabets.length) % alphabets.length; 
    return alphabets[shift];
};

// Function to get a random letter
function getRandomLetter() {
    return alphabets[Math.floor(Math.random() * alphabets.length)];
}

// Encrypt Message (adds a random letter after every 2 letters)
function encryptMessage(word, value) {
    let result = '';
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        result += encrypt(word[i], value);
        counter++;

        if (counter === 2) {
            result += getRandomLetter(); // Add random letter after every 2
            counter = 0;
        }
    }

    return result;
}

// Decrypt Message (removes every 3rd letter which was added randomly)
function decryptMessage(word, value) {
    let result = '';
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        // Skip the 3rd character (the random one)
        if ((i + 1) % 3 === 0) continue;

        result += decrypt(word[i], value);
    }

    return result;
}

// Example Usage
const shiftValue = 42; // You can change this to any value, e.g.,
const encrypted = encryptMessage("Hello Brutus, meet me at the high gardens.", 42);
console.log("Encrypted Message:", encrypted);

// Use the encrypted message for decryption
const decrypted = decryptMessage("Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.", shiftValue);
console.log("Decrypted Message:", decrypted);
