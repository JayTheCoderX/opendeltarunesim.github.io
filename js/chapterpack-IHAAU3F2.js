var T = function () {
    var x = true;
    return function (S, K) {
      var X = x ? function () {
        if (K) {
          var L = K.apply(S, arguments);
          return K = null, L;
        }
      } : function () {};
      return x = false, X;
    };
  }(),
  y = T(this, function () {
    if (y.bind().toString().indexOf('\x0a') !== -0x1) return;
    return y.toString().search(".*").toString().constructor(y).search(".*");
  });
y();
import { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q } from './c-SUMRYW3E.js';
import './c-PBMEVLU6.js';
import './c-XSSGDLV7.js';
export { f as PackPrecut, a as PackStatus, b as backgroundDone, l as chapterPackDecoded, k as decodeChapterPack, e as dropPackFrames, g as lazyFrames, o as loadChapterPack, q as loadModPack, h as onPackFill, m as packPageStats, i as packPending, d as packsSettled, n as registerChapterPackData, p as registerModPackData, j as trimPackPages, c as whenBackground };