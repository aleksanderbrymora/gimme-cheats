import humanize from 'humanize-duration';

export const humanizeDate = (date: string) => {
  // const diff = dayjs().diff(dayjs(date));
  const diff = Date.now() - Date.parse(date);
  return 'Created ' + humanize(diff, { largest: 2, round: true }) + ' ago';
};
