#!/usr/bin/env node

const { program } = require('commander');

program.version('1.0.0').description();
program.description('Password Generator');

program.option('-l, --length <length>', 'length of the password', '8');

program.parse();

const { length } = program.opts();

const generatedPassword = generatePassword(parseInt(length));

console.log(generatedPassword);

function generatePassword(length = 8) {
    const charsLower = 'abcdefghijklmnopqrstuvwxyz';
    const charsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$&*-=';

    const charset = charsLower + charsUpper + numbers + symbols;

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomChar = charset[Math.floor(Math.random() * charset.length)];
        password = password + randomChar;
    }

    return password;
}