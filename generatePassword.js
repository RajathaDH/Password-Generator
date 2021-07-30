const charsLower = 'abcdefghijklmnopqrstuvwxyz';
const charsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$&*-=';

const charset = charsLower + charsUpper + numbers + symbols;

function generatePassword(length = 8) {
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomChar = charset[Math.floor(Math.random() * charset.length)];
        password = password + randomChar;
    }

    return password;
}

module.exports = generatePassword;