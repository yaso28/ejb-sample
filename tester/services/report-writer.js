import dayjs from 'dayjs'
import { writeFileSync } from 'fs';

const report = (data, filenamePrefix, fileExtension) => {
  const now = dayjs().format('YYYY-MM-DD-HH-mm-ss');
  const filename = `./reports/${filenamePrefix}-${now}.${fileExtension}`;
  writeFileSync(filename, data);
};

export const reportUi1Info = (data) => report(data, 'ui1-info', 'json');
