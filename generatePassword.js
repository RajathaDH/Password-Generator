function generatePassword(length, opts) {
    const charset = getCharset(opts);

    const password = createPassword(parseInt(length), charset);

    return password;
}

function createPassword(length = 8, charset) {
    let password = '';

    for (let i = 0; i < length; i++) {
        // get random character from charset and append to password
        const randomChar = charset[Math.floor(Math.random() * charset.length)];
        password = password + randomChar;
    }

    return password;
}

function getCharset(opts = { numbers: false, symbols: false }) {
    const charsLower = 'abcdefghijklmnopqrstuvwxyz';
    const charsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // add numbers and symbols to charset if options passed in as arguments
    const numbers = opts.numbers ? '0123456789' : '';
    const symbols = opts.symbols ? '!@#$&*-=' : '';

    const charset = charsLower + charsUpper + numbers + symbols;

    return charset;
}

module.exports = generatePassword;