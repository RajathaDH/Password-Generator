#!/usr/bin/env node

const { program } = require('commander');

const generatePassword = require('./generatePassword');

program.version('1.0.0').description();
program.description('Password Generator');

program.option('-l, --length <length>', 'length of the password', '8');
program.option('-n, --numbers', 'allow numbers');
program.option('-s, --symbols', 'allow symbols');

program.parse();

const { length, ...opts } = program.opts();

const generatedPassword = generatePassword(length, opts);

console.log(generatedPassword);