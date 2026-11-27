(function () {
  var g = {
    'ecFKW': "4|1|2|0|3",
    'xZWCV': function (h) {
      return h();
    },
    'bQWSk': function (h, b, H) {
      return h(b, H);
    },
    'VKjpE': function (h, b) {
      return h === b;
    },
    'LfhIe': "deltarunesim.com",
    'LpGZj': "www.deltarunesim.com",
    'xRzIl': "drsim.localhost",
    'XoxFx': "localhost",
    'CWnzq': function (h, b) {
      return h === b;
    },
    'RjmtK': "127.0.0.1",
    'qamdq': "https://deltarunesim.com/api/clone",
    'nyUTH': "inline",
    'rejOn': function (h, b) {
      return h + b;
    },
    'IGfVt': "https://deltarunesim.com/api/clone?h=",
    'KItSd': function (h, b) {
      return h(b);
    },
    'MVptn': function (h, b) {
      return h !== b;
    },
    'vJxCG': "undefined",
    'aSgBv': "object",
    'DlcVL': "function",
    'DtaLK': "log",
    'EGcls': "warn",
    'doUPc': "info",
    'faTln': "error",
    'lrUBw': "exception",
    'dBLsh': "table",
    'SQMqI': "trace",
    'WdIJN': function (h, b) {
      return h < b;
    },
    'OYkon': "3|0|1|2|4|5"
  };
  var Z = "4|1|2|0|3".split('|'),
    o = 0;
  while (true) {
    switch (Z[o++]) {
      case '0':
        continue;
      case '1':
        continue;
      case '2':
        continue;
      case '3':
        try {
          var T = (location.hostname || '').toLowerCase(),
            Q = T && (T === "deltarunesim.com" || T === "www.deltarunesim.com" || T === "drsim.localhost" || T === "localhost" || T === "127.0.0.1" || /\.local$/.test(T) || /(^|\.)deltarunesim\.pages\.dev$/.test(T) || /^127\./.test(T) || /^192\.168\./.test(T) || /^10\./.test(T) || /^172\.(1[6-9]|2\d|3[01])\./.test(T));
          if (Q) return;
          try {
            navigator.sendBeacon && navigator.sendBeacon("https://deltarunesim.com/api/clone", JSON.stringify({
              'host': T,
              'href': (location.href || '').slice(0, 300),
              'ref': (document.referrer || '').slice(0, 300),
              'build': "inline",
              't': Date.now()
            }));
          } catch (h) {}
          location.replace("https://deltarunesim.com/api/clone?h=" + encodeURIComponent(T));
        } catch (b) {}
        continue;
      case '4':
        var i = {
          'gBPtq': function (H, M) {
            return H !== M;
          },
          'HRcSq': "undefined",
          'kpTXN': function (H, M) {
            return H === M;
          },
          'Cjnam': "object",
          'DCcvL': "function",
          'WOFdV': "log",
          'YkyLw': "warn",
          'SCNmd': "info",
          'QiEkz': "error",
          'USAlK': "exception",
          'MMGwb': "table",
          'VRSjx': "trace",
          'hnwBB': function (H, M) {
            return H < M;
          },
          'eGkLE': "3|0|1|2|4|5"
        };
        continue;
    }
    break;
  }
})();