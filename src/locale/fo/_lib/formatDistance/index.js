var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'minni enn 1 sekund',
    other: 'minni enn {{count}} sekund',
  },

  xSeconds: {
    one: '1 sekund',
    other: '{{count}} sekund',
  },

  halfAMinute: 'hálvur minuttur',

  lessThanXMinutes: {
    one: 'minni enn 1 minuttur',
    other: 'minni enn {{count}} minuttir',
  },

  xMinutes: {
    one: '1 minuttur',
    other: '{{count}} minuttir',
  },

  aboutXHours: {
    one: 'uml. 1 tíma',
    other: 'uml. {{count}} tímar',
  },

  xHours: {
    one: '1 tími',
    other: '{{count}} tímar',
  },

  xDays: {
    one: '1 dagur',
    other: '{{count}} dagar',
  },

  aboutXWeeks: {
    one: 'um 1 viku',
    other: 'um {{count}} vikur',
  },

  xWeeks: {
    one: '1 vika',
    other: '{{count}} vikur',
  },

  aboutXMonths: {
    one: 'uml. 1 mánaður',
    other: 'uml. {{count}} mánaðir',
  },

  xMonths: {
    one: '1 mánaður',
    other: '{{count}} mánaðir',
  },

  aboutXYears: {
    one: 'uml. 1 ár',
    other: 'uml. {{count}} ár',
  },

  xYears: {
    one: '1 ár',
    other: '{{count}} ár',
  },

  overXYears: {
    one: 'meira enn 1 ár',
    other: 'meira enn {{count}} ár',
  },

  almostXYears: {
    one: 'næstan 1 ár',
    other: 'næstan {{count}} ár',
  },
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'í ' + result
    } else {
      return result + ' síðan'
    }
  }

  return result
}
