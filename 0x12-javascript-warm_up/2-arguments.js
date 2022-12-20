#!/usr/bin/node

import { argv } from 'node:process';
const length = argv.length;
if (length === 2) {
  console.log('No argument');
} else if (length === 3) {
  console.log('Argument found');
} else if (length > 3) {
  console.log('Arguments found');
}
