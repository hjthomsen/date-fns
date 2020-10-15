import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'
import buildMatchFn from '../../../_lib/buildMatchFn/index'

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(f\.Kr\.|e\.Kr\.)/i,
  abbreviated: /^(f\.Kr\.|e\.Kr\.)/i,
  wide: /^(fyri Krist|eftir Krist)/i,
}

var parseEraPatterns = {
  any: [/^(f\.Kr\.|e\.Kr\.)/i],
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234] ársfjórðingur/i,
}
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
}

var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan\.|feb\.|mars\.|apríl\.|mai|juni|juli|august|sep\.|okt\.|nov\.|des\.)/i,
  wide: /^(januar|februar|mars|apríl|mai|juni|juli|august|septembur|oktobur|novembur|desembur)/i,
}

var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
}

var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|má|tý|mi|hó|fr|ley)/i,
  abbreviated: /^(sun|mán|týs|mik|hós|frí|ley)\.?/i,
  wide: /^(sunnudagur|mánadagur|týsdagur|mikudagur|hósdagur|fríggjadagur|leygardagur)/i,
}

var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^m/i, /^h/i, /^f/i, /^l/i],
  any: [/^su/i, /^má/i, /^tý/i, /^mi/i, /^hó/i, /^fr/i, /^le/i],
}

var matchDayPeriodPatterns = {
  narrow: /^(f|e|seinapart|(á|að|um) (morgni|kvöld|nátt|miðnætti))/i,
  any: /^(fyri miðdag|eftir miðdag|[ef]\.?h\.?|seinapart|morgun|(á|að|um) (morgni|kvöld|nátt|miðnátt))/i,
}

var parseDayPeriodPatterns = {
  any: {
    am: /^f/i,
    pm: /^e/i,
    midnight: /^mi/i,
    noon: /^mi/i,
    morning: /morgun/i,
    afternoon: /seinnapart/i,
    evening: /kvöld/i,
    night: /nátt/i,
  },
}

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10)
    },
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any',
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1
    },
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any',
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any',
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any',
  }),
}

export default match
