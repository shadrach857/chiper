

// Function to shift letters
const encrypt = (letter, value) => {
    const index = alphabets.indexOf(letter);
    if (index === -1) return letter; // Keep non-alphabet characters unchanged
    const shift = (index + value) % alphabets.length;
    return alphabets[shift];
};

const decrypt = (letter, value) => {
    const index = alphabets.indexOf(letter);
    if (index === -1) return letter;
    const shift = (index - value + alphabets.length) % alphabets.length;
    return alphabets[shift];
};

// Function to get a random letter
function getRandomLetter() {
    return alphabets[Math.floor(Math.random() * alphabets.length)];
}

// Encrypt Message (with removable random letters)
function encryptMessage(word, value) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        result += encrypt(word[i], value); // Encrypt the letter
        result += getRandomLetter(); // Add a random lettergit
    }
    return result;
}

// Decrypt Message (removing the random letters)
function decryptMessage(word, value) {
    let result = '';
    for (let i = 0; i < word.length; i += 2) { // Skip every second character
        result += decrypt(word[i], value);
    }
    return result;
}

// Example Usage
const encrypted = encryptMessage("code", 1);
console.log("Encrypted Message:", encrypted);

const decrypted = decryptMessage(encrypted, 1);
console.log("Decrypted Message:", decrypted);