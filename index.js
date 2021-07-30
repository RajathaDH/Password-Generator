#!/usr/bin/env node

const { program } = require('commander');

const generatePassword = require('./generatePassword');

program.version('1.0.0').description();
program.description('Password Generator');

program.option('-l, --length <length>', 'length of the password', '8');

program.parse();

const { length } = program.opts();

const generatedPassword = generatePassword(parseInt(length));

console.log(generatedPassword);