import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  narrow: ['f.Kr.', 'e.Kr.'],
  abbreviated: ['f.Kr.', 'e.Kr.'],
  wide: ['fyri Krist', 'eftir Krist'],
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1F', '2F', '3F', '4F'],
  wide: [
    '1. ársfjórðingur',
    '2. ársfjórðingur',
    '3. ársfjórðingur',
    '4. ársfjórðingur',
  ],
}

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: [
    'jan.',
    'feb.',
    'mars',
    'apríl',
    'mai',
    'juni',
    'juli',
    'august',
    'sept.',
    'okt.',
    'nov.',
    'des.',
  ],
  wide: [
    'januar',
    'februar',
    'mars',
    'apríl',
    'mai',
    'juni',
    'juli',
    'agust',
    'septembur',
    'oktobur',
    'novembur',
    'desembur',
  ],
}

var dayValues = {
  narrow: ['S', 'M', 'T', 'M', 'F', 'F', 'L'],
  short: ['Su', 'Má', 'Tý', 'Mi', 'Hó', 'Fr', 'Ley'],
  abbreviated: ['sun.', 'mán.', 'týs.', 'mik.', 'hós.', 'frí.', 'ley'],
  wide: [
    'sunnudagur',
    'mánadagur',
    'týsdagur',
    'mikudagur',
    'hósdagur',
    'fríggjadagur',
    'leygardagur',
  ],
}

var dayPeriodValues = {
  narrow: {
    am: 'f',
    pm: 'e',
    midnight: 'miðnátt',
    noon: 'miðdagur',
    morning: 'morgun',
    afternoon: 'seinnapartur',
    evening: 'kvöld',
    night: 'nátt',
  },
  abbreviated: {
    am: 'f.m.',
    pm: 'e.m.',
    midnight: 'miðnátt',
    noon: 'miðdagur',
    morning: 'morgun',
    afternoon: 'seinnapartur',
    evening: 'kvöld',
    night: 'nátt',
  },
  wide: {
    am: 'fyri miðdag',
    pm: 'eftir miðdag',
    midnight: 'miðnátt',
    noon: 'miðdagur',
    morning: 'morgun',
    afternoon: 'seinnapartur',
    evening: 'kvöld',
    night: 'nátt',
  },
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'f',
    pm: 'e',
    midnight: 'á miðnátt',
    noon: 'á miðdegi',
    morning: 'á morgni',
    afternoon: 'seinnapart',
    evening: 'á kvöldi',
    night: 'á nátt',
  },
  abbreviated: {
    am: 'f.m.',
    pm: 'e.m.',
    midnight: 'á miðnátt',
    noon: 'á miðdegi',
    morning: 'á morgni',
    afternoon: 'seinnapart',
    evening: 'á kvöldi',
    night: 'á nátt',
  },
  wide: {
    am: 'fyri miðdag',
    pm: 'eftir miðdag',
    midnight: 'á miðnátt',
    noon: 'á miðdegi',
    morning: 'á morgni',
    afternoon: 'seinnapart',
    evening: 'á kvöldi',
    night: 'á nátt',
  },
}

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber)

  return number + '.'
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1
    },
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

export default localize
