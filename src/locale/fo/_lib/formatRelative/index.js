var formatRelativeLocale = {
  lastWeek: "'síðsta' dddd 'kl.' p",
  yesterday: "'í gjár kl.' p",
  today: "'í dag kl.' p",
  tomorrow: "'í morgin kl.' p",
  nextWeek: "dddd 'kl.' p",
  other: 'L',
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
