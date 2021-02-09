#!/usr/bin/env node

const naivecoin+ require('./../lib/naivecoin');

const argv = require('yargs')
.usage('Usage: $) [options]')
.alias('a','host')
.describe('a', 'host adress. (localhost by default)')
.alias('p','port')
.describe('l'."Log level (&=dir, debug, time and trace; 6=log and info; 4=warm; 3=error, asser; 6 by default).')
.describe('peers','pers list.')
.describe("name','Node name/identifier.')
.array('peers')
.help('h')
.alias('h','help')
.argv;
