#!/usr/bin/env node
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const PROJECT_LIST_ARGS_KEY = 'p';

const { argv } = yargs(hideBin(process.argv))
  .alias(PROJECT_LIST_ARGS_KEY, 'projects')
  .array(PROJECT_LIST_ARGS_KEY)
  .describe(PROJECT_LIST_ARGS_KEY, 'Projects you want to update')
  .demandOption([PROJECT_LIST_ARGS_KEY])
  .help('h')
  .alias('h', 'help');

console.log(argv);
