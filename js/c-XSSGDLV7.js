var Q = function () {
    var V0 = true;
    return function (V1, V2) {
      var V3 = V0 ? function () {
        if (V2) {
          var V4 = V2.apply(V1, arguments);
          return V2 = null, V4;
        }
      } : function () {};
      return V0 = false, V3;
    };
  }(),
  L = Q(this, function () {
    if (L.bind().toString().indexOf('\x0a') !== -0x1) return;
    return L.toString().search(".*").toString().constructor(L).search(".*");
  });
L();
var S = Object.create,
  o = Object.defineProperty,
  D = Object.getOwnPropertyDescriptor,
  N = Object.getOwnPropertyNames,
  z = Object.getPrototypeOf,
  C = Object.prototype.hasOwnProperty,
  Y = (V0, V1, V2) => V1 in V0 ? o(V0, V1, {
    'enumerable': !0x0,
    'configurable': !0x0,
    'writable': !0x0,
    'value': V2
  }) : V0[V1] = V2,
  Z = (V0, V1) => o(V0, 'name', {
    'value': V1,
    'configurable': !0x0
  }),
  q = (V0, V1, V2) => () => {
    if (V2) throw V2[0x0];
    try {
      return V0 && (V1 = V0(V0 = 0x0)), V1;
    } catch (V3) {
      throw V2 = [V3], V3;
    }
  },
  P = (V0, V1) => () => {
    try {
      return V1 || V0((V1 = {
        'exports': {}
      }).exports, V1), V1.exports;
    } catch (V2) {
      throw V1 = 0x0, V2;
    }
  },
  O = (V0, V1) => {
    for (var V2 in V1) o(V0, V2, {
      'get': V1[V2],
      'enumerable': !0x0
    });
  },
  t = (V0, V1, V2, V3) => {
    if (V1 && typeof V1 == 'object' || typeof V1 == 'function') {
      for (let V4 of N(V1)) !C.call(V0, V4) && V4 !== V2 && o(V0, V4, {
        'get': () => V1[V4],
        'enumerable': !(V3 = D(V1, V4)) || V3.enumerable
      });
    }
    return V0;
  },
  U = (V0, V1, V2) => (V2 = V0 != null ? S(z(V0)) : {}, t(V1 || !V0 || !V0.__esModule ? o(V2, 'default', {
    'value': V0,
    'enumerable': !0x0
  }) : V2, V0)),
  J = (V0, V1, V2) => Y(V0, typeof V1 != 'symbol' ? V1 + '' : V1, V2);
function e() {
  throw new TypeError("Assignment to constant variable.");
}
function n(V0, V1) {
  typeof V0 == 'function' && X.set(V0, (X.get(V0) || '') + V1);
}
function H(V0) {
  return X.get(V0) || '';
}
function j(V0, V1) {
  typeof V0 == 'function' && K.set(V0, V1);
}
function F(V0) {
  return typeof V0 == 'function' ? K.get(V0) : void 0x0;
}
var X,
  h,
  K,
  I = q(() => {
    Z(e, '__dr_ro'), X = new WeakMap(), Z(n, '__dr_src_reg'), Z(H, '__dr_src_get'), h = {}, K = new WeakMap(), Z(j, '__dr_fsrc_reg'), Z(F, '__dr_fsrc_get');
  });
export { Z as a, P as b, O as c, U as d, J as e, e as f, n as g, H as h, h as i, j, F as k, I as l };