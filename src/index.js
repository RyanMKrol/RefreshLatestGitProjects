#!/usr/bin/env node
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import shell from 'shelljs';

const PROJECT_LIST_ARGS_KEY = 'p';

const { argv } = yargs(hideBin(process.argv))
  .alias(PROJECT_LIST_ARGS_KEY, 'projects')
  .array(PROJECT_LIST_ARGS_KEY)
  .describe(PROJECT_LIST_ARGS_KEY, 'Projects you want to update')
  .demandOption([PROJECT_LIST_ARGS_KEY])
  .help('h')
  .alias('h', 'help');

const projectList = argv[PROJECT_LIST_ARGS_KEY];

projectList.forEach((projectName) => {
  shell.cd(`../${projectName}`);

  if (shell.exec('git commit --allow-empty -m "Blank Update"').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  }

  if (shell.exec('git push').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  }

  shell.echo(`Added empty commit for project: ${projectName}`);
});
