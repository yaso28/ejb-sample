import { parse } from 'csv/sync'

export const csvToArray = (data) => parse(data);
