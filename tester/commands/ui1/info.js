import { SingleBar } from 'cli-progress';
import { setTimeout } from 'timers/promises';
import { getUi1Info } from '../../services/api-caller.js';
import { csvToArray } from '../../services/csv-parser.js';
import { reportUi1Info } from '../../services/report-writer.js';

const uiInfo = async (options) => {
  const summary = {};
  const bar = new SingleBar({});
  bar.start(options.count, 0);

  for (let i = 0; i < options.count; i++) {
    let ui1;
    let ejb1;
    try {
      const responseData = await getUi1Info();
      const parsedData = csvToArray(responseData);
      ui1 = parsedData[0][1];
      ejb1 = parsedData[1][1];
    } catch (err) {
      ui1 = 'ERROR';
      ejb1 = 'ERROR';
    }
    
    if (!summary[ui1]) {
      summary[ui1] = {};
    }
    if (!summary[ui1][ejb1]) {
      summary[ui1][ejb1] = 1
    } else {
      summary[ui1][ejb1]++;
    }

    bar.increment();
    await setTimeout(options.span);
  }

  const summaryString = JSON.stringify(summary, null, "\t");
  reportUi1Info(summaryString);

  bar.stop();
  console.log(summaryString);
};

export default uiInfo;
