var S = Object.create;
var o = Object.defineProperty;
var D = Object.getOwnPropertyDescriptor;
var N = Object.getOwnPropertyNames;
var z = Object.getPrototypeOf;
var C = Object.prototype.hasOwnProperty;
var Y = (V0, V1, V2) => V1 in V0 ? o(V0, V1, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: V2
}) : V0[V1] = V2;
var Z = (V0, V1) => o(V0, "name", {
  value: V1,
  configurable: true
});
var q = (V0, V1, V2) => () => {
  if (V2) {
    throw V2[0];
  }
  try {
    if (V0) {
      V1 = V0(V0 = 0);
    }
    return V1;
  } catch (V3) {
    V2 = [V3];
    throw V3;
  }
};
var P = (V0, V1) => () => {
  try {
    if (!V1) {
      V0((V1 = {
        exports: {}
      }).exports, V1);
    }
    return V1.exports;
  } catch (V2) {
    V1 = 0;
    throw V2;
  }
};
var O = (V0, V1) => {
  for (var V2 in V1) {
    o(V0, V2, {
      get: V1[V2],
      enumerable: true
    });
  }
};
var t = (V0, V1, V2, V3) => {
  if (V1 && typeof V1 == "object" || typeof V1 == "function") {
    for (let V4 of N(V1)) {
      if (!C.call(V0, V4) && V4 !== V2) {
        o(V0, V4, {
          get: () => V1[V4],
          enumerable: !(V3 = D(V1, V4)) || V3.enumerable
        });
      }
    }
  }
  return V0;
};
var U = (V0, V1, V2) => {
  V2 = V0 != null ? S(z(V0)) : {};
  return t(V1 || !V0 || !V0.__esModule ? o(V2, "default", {
    value: V0,
    enumerable: true
  }) : V2, V0);
};
var J = (V0, V1, V2) => Y(V0, typeof V1 != "symbol" ? V1 + "" : V1, V2);
function e() {
  throw new TypeError("Assignment to constant variable.");
}
function n(V0, V1) {
  if (typeof V0 == "function") {
    X.set(V0, (X.get(V0) || "") + V1);
  }
}
function H(V0) {
  return X.get(V0) || "";
}
function j(V0, V1) {
  if (typeof V0 == "function") {
    K.set(V0, V1);
  }
}
function F(V0) {
  if (typeof V0 == "function") {
    return K.get(V0);
  } else {
    return undefined;
  }
}
var X;
var h;
var K;
var I = q(() => {
  Z(e, "__dr_ro");
  X = new WeakMap();
  Z(n, "__dr_src_reg");
  Z(H, "__dr_src_get");
  h = {};
  K = new WeakMap();
  Z(j, "__dr_fsrc_reg");
  Z(F, "__dr_fsrc_get");
});
export { Z as a, P as b, O as c, U as d, J as e, e as f, n as g, H as h, h as i, j, F as k, I as l };
