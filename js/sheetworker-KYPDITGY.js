const J = function () {
    let e = true;
    return function (T, R) {
      const z = e ? function () {
        if (R) {
          const P = R.apply(T, arguments);
          return R = null, P;
        }
      } : function () {};
      return e = false, z;
    };
  }(),
  t = J(this, function () {
    if (t.bind().toString().indexOf('\x0a') !== -0x1) return;
    return t.toString().search(".*").toString().constructor(t).search(".*");
  });
t();
import { l as G } from './c-XSSGDLV7.js';
G(), self.onmessage = e => {
  let {
    id: T,
    blob: R
  } = e.data || {};
  createImageBitmap(R).then(z => self.postMessage({
    'id': T,
    'bm': z
  }, [z]), z => self.postMessage({
    'id': T,
    'err': String(z && z.message || z)
  }));
};