import { Command, InvalidArgumentError } from 'commander';
import dotenv from 'dotenv';
import { existsSync } from 'fs';
import uiInfo from './commands/ui1/info.js';

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
    .description('tests ui1 info api')
    .option('-c, --count [value]', 'api call count', parseIntOption, 100)
    .option('-s, --span [value]', 'api handle time span (milliseconds)', parseIntOption, 100)
    .action(async (options) => {
      await uiInfo(options);
    });
  
  program.parse();
};

run().catch((err) => {
  console.error(err);
});
