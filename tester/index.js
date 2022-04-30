import { Command, InvalidArgumentError } from 'commander';
import dotenv from 'dotenv';
import { existsSync } from 'fs';

const parseIntOption = (value) => {
  const result = parseInt(value);
  if (isNaN(result)) {
    throw new InvalidArgumentError('not a number');
  }
  return result;
};

const run = async () => {
  // load env file
  if (existsSync('.env')) {
    dotenv.config();
  }

  // load command args
  const program = new Command('node index.js');
  
  const ui1 = program.command('ui1');
  ui1.command('info')
    .description('tests ui1 info')
    .option('-c, --count [value]', 'http request call count', parseIntOption, 100)
    .option('-s, --span [value]', 'http request time span (milliseconds)', parseIntOption, 100)
    .action((options) => {
      console.log('UI1 INFO');
      console.log(options.count);
      console.log(options.span);
    });
  
  program.parse();
};

run().catch((err) => {
  console.error(err);
});
