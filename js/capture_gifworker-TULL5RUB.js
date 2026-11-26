const C = function () {
    let i = true;
    return function (m, j) {
      const O = i ? function () {
        if (j) {
          const r = j.apply(m, arguments);
          return j = null, r;
        }
      } : function () {};
      return i = false, O;
    };
  }(),
  c = C(this, function () {
    if (c.bind().toString().indexOf('\x0a') !== -0x1) return;
    return c.toString().search(".*").toString().constructor(c).search(".*");
  });
c();
import { a as f, l as d } from './c-XSSGDLV7.js';
d();
var T = class M {
  constructor(i = 0x10000) {
    this.buf = new Uint8Array(i), this.n = 0x0;
  }
  ["grow"](i) {
    if (this.n + i <= this.buf.length) return;
    let m = this.buf.length * 0x2;
    for (; m < this.n + i;) m *= 0x2;
    let j = new Uint8Array(m);
    j.set(this.buf.subarray(0x0, this.n)), this.buf = j;
  }
  ["byte"](i) {
    this.grow(0x1), this.buf[this.n++] = i & 0xff;
  }
  ["word"](i) {
    this.grow(0x2), this.buf[this.n++] = i & 0xff, this.buf[this.n++] = i >> 0x8 & 0xff;
  }
  ["str"](i) {
    for (let m = 0x0; m < i.length; m++) this.byte(i.charCodeAt(m));
  }
  ["bytes"](i) {
    this.grow(i.length), this.buf.set(i, this.n), this.n += i.length;
  }
  ["result"]() {
    return this.buf.slice(0x0, this.n);
  }
};
f(T, 'Bytes');
var G = T;
function F(j) {
  let O = new Map(),
    I = !0x0,
    L = -0x1;
  i: for (let X1 of j) {
    let X2 = X1;
    for (let X3 = 0x0; X3 < X2.length; X3 += 0x4) {
      let X4 = X2[X3] << 0x10 | X2[X3 + 0x1] << 0x8 | X2[X3 + 0x2];
      if (X4 !== L && (L = X4, !O.has(X4))) {
        if (O.size >= 0xff) {
          I = !0x1;
          break i;
        }
        O.set(X4, O.size);
      }
    }
  }
  let q = new Uint8Array(768);
  if (I) {
    for (let [X7, X8] of O) q[X8 * 0x3] = X7 >> 0x10, q[X8 * 0x3 + 0x1] = X7 >> 0x8 & 0xff, q[X8 * 0x3 + 0x2] = X7 & 0xff;
    let X5 = -0x1,
      X6 = 0x0;
    return {
      'palette': q,
      'colours': O.size,
      'exact': !0x0,
      'map': (X9, XX, XQ) => {
        let XV = X9 << 0x10 | XX << 0x8 | XQ;
        return XV !== X5 && (X5 = XV, X6 = O.get(XV)), X6;
      }
    };
  }
  let Z = new Uint32Array(0x8000);
  for (let X9 of j) for (let XX = 0x0; XX < X9.length; XX += 0x4) Z[X9[XX] >> 0x3 << 0xa | X9[XX + 0x1] >> 0x3 << 0x5 | X9[XX + 0x2] >> 0x3]++;
  let v = [];
  for (let XQ = 0x0; XQ < 0x8000; XQ++) Z[XQ] && v.push(XQ);
  let N = (XV, XU) => XU === 0x0 ? XV >> 0xa : XU === 0x1 ? XV >> 0x5 & 0x1f : XV & 0x1f,
    x = [{
      'bins': v,
      'lo': 0x0,
      'hi': v.length
    }],
    E = XV => {
      let XU = [0x1f, 0x1f, 0x1f],
        Xo = [0x0, 0x0, 0x0],
        XB = 0x0;
      for (let XK = XV.lo; XK < XV.hi; XK++) {
        let XC = XV.bins[XK];
        for (let Xc = 0x0; Xc < 0x3; Xc++) {
          let Xf = N(XC, Xc);
          Xf < XU[Xc] && (XU[Xc] = Xf), Xf > Xo[Xc] && (Xo[Xc] = Xf);
        }
        XB += Z[XC];
      }
      let Xs = [Xo[0x0] - XU[0x0], Xo[0x1] - XU[0x1], Xo[0x2] - XU[0x2]],
        Xi = Xs[0x0] >= Xs[0x1] && Xs[0x0] >= Xs[0x2] ? 0x0 : Xs[0x1] >= Xs[0x2] ? 0x1 : 0x2;
      return {
        'axis': Xi,
        'range': Xs[Xi],
        'cnt': XB
      };
    };
  for (; x.length < 0xff;) {
    let XV = -0x1,
      XU = -0x1;
    for (let Xc = 0x0; Xc < x.length; Xc++) {
      let Xf = x[Xc];
      if (Xf.hi - Xf.lo < 0x2) continue;
      Xf.info = Xf.info || E(Xf);
      let Xd = Xf.info.range * Math.log2(0x1 + Xf.info.cnt);
      Xf.info.range > 0x0 && Xd > XU && (XU = Xd, XV = Xc);
    }
    if (XV < 0x0) break;
    let Xo = x[XV],
      XB = Xo.info.axis,
      Xs = Xo.bins.slice(Xo.lo, Xo.hi).sort((XT, XG) => N(XT, XB) - N(XG, XB)),
      Xi = Xo.info.cnt / 0x2,
      XK = 0x0,
      XC = 0x1;
    for (let XT = 0x0; XT < Xs.length - 0x1; XT++) {
      if (XK += Z[Xs[XT]], XK >= Xi) {
        XC = XT + 0x1;
        break;
      }
      XC = XT + 0x1;
    }
    x.splice(XV, 0x1, {
      'bins': Xs,
      'lo': 0x0,
      'hi': XC
    }, {
      'bins': Xs,
      'lo': XC,
      'hi': Xs.length
    });
  }
  x.forEach((XG, XF) => {
    let XR = 0x0,
      Xy = 0x0,
      XH = 0x0,
      XY = 0x0;
    for (let XW = XG.lo; XW < XG.hi; XW++) {
      let Xt = XG.bins[XW],
        Xl = Z[Xt];
      XR += ((Xt >> 0xa) * 0x8 + 0x4) * Xl, Xy += ((Xt >> 0x5 & 0x1f) * 0x8 + 0x4) * Xl, XH += ((Xt & 0x1f) * 0x8 + 0x4) * Xl, XY += Xl;
    }
    q[XF * 0x3] = Math.round(XR / XY), q[XF * 0x3 + 0x1] = Math.round(Xy / XY), q[XF * 0x3 + 0x2] = Math.round(XH / XY);
  });
  let z = x.length,
    X0 = new Int16Array(0x8000).fill(-0x1);
  return {
    'palette': q,
    'colours': z,
    'exact': !0x1,
    'map': (XG, XF, XR) => {
      let Xy = XG >> 0x3 << 0xa | XF >> 0x3 << 0x5 | XR >> 0x3,
        XH = X0[Xy];
      if (XH >= 0x0) return XH;
      let XY = 0x3b9aca00;
      XH = 0x0;
      for (let XW = 0x0; XW < z; XW++) {
        let Xt = q[XW * 0x3] - XG,
          Xl = q[XW * 0x3 + 0x1] - XF,
          Xm = q[XW * 0x3 + 0x2] - XR,
          Xj = Xt * Xt * 0x3 + Xl * Xl * 0x4 + Xm * Xm * 0x2;
        Xj < XY && (XY = Xj, XH = XW);
      }
      return X0[Xy] = XH, XH;
    }
  };
}
f(F, 'buildPalette');
var R = new Int32Array(1048576),
  y = 0x0;
function H(i, j, O) {
  let I = 0x1 << j,
    L = I + 0x1,
    a = j + 0x1,
    q = L + 0x1,
    Z = 0x0,
    A = 0x0,
    v = new Uint8Array(0xff),
    N = 0x0,
    x = X1 => {
      v[N++] = X1, N === 0xff && (O.byte(0xff), O.bytes(v), N = 0x0);
    },
    z = X1 => {
      for (Z |= X1 << A, A += a; A >= 0x8;) x(Z & 0xff), Z >>>= 0x8, A -= 0x8;
    },
    X0 = () => {
      y++, y >= 0x1 << 0x13 && (R.fill(0x0), y = 0x1), a = j + 0x1, q = L + 0x1;
    };
  if (O.byte(j), X0(), z(I), !i.length) z(L);else {
    let X1 = i[0x0],
      X2 = () => y * 0x1000,
      X3 = X2();
    for (let X4 = 0x1; X4 < i.length; X4++) {
      let X5 = i[X4],
        X6 = X1 * 0x100 + X5,
        X7 = R[X6];
      if (X7 >= X3 && X7 < X3 + 0x1000) {
        X1 = X7 - X3;
        continue;
      }
      z(X1), q < 0x1000 ? (R[X6] = X3 + q, q === 0x1 << a && a < 0xc && a++, q++) : (z(I), X0(), X3 = X2()), X1 = X5;
    }
    z(X1), z(L);
  }
  A > 0x0 && x(Z & 0xff), N && (O.byte(N), O.bytes(v.subarray(0x0, N))), O.byte(0x0);
}
f(H, 'lzwEncode');
function Y(i, j, O, I, L) {
  if (!i.length) throw new Error("no frames");
  let q = F(i),
    Z = new G(0x1 << 0x14);
  Z.str('GIF89a'), Z.word(j), Z.word(O), Z.byte(0xf7), Z.byte(0x0), Z.byte(0x0), Z.bytes(q.palette), Z.byte(0x21), Z.byte(0xff), Z.byte(0xb), Z.str("NETSCAPE2.0"), Z.byte(0x3), Z.byte(0x1), Z.word(0x0), Z.byte(0x0);
  let v = j * O,
    N = null,
    x = new Uint8Array(v);
  for (let X0 = 0x0; X0 < i.length; X0++) {
    let X1 = i[X0];
    for (let XX = 0x0, XQ = 0x0; XX < v; XX++, XQ += 0x4) x[XX] = q.map(X1[XQ], X1[XQ + 0x1], X1[XQ + 0x2]);
    let X2 = 0x0,
      X3 = 0x0,
      X4 = j - 0x1,
      X5 = O - 0x1,
      X6 = !0x1;
    if (N) {
      X2 = j, X3 = O, X4 = -0x1, X5 = -0x1;
      for (let XV = 0x0; XV < O; XV++) {
        let XU = XV * j;
        for (let Xo = 0x0; Xo < j; Xo++) x[XU + Xo] !== N[XU + Xo] && (Xo < X2 && (X2 = Xo), Xo > X4 && (X4 = Xo), XV < X3 && (X3 = XV), XV > X5 && (X5 = XV));
      }
      X6 = !0x0, X4 < 0x0 && (X2 = 0x0, X3 = 0x0, X4 = 0x0, X5 = 0x0);
    }
    let X7 = X4 - X2 + 0x1,
      X8 = X5 - X3 + 0x1,
      X9 = new Uint8Array(X7 * X8);
    for (let XB = 0x0; XB < X8; XB++) {
      let Xs = (XB + X3) * j + X2,
        Xi = XB * X7;
      for (let XK = 0x0; XK < X7; XK++) {
        let XC = x[Xs + XK];
        X9[Xi + XK] = X6 && N[Xs + XK] === XC ? 0xff : XC;
      }
    }
    Z.byte(0x21), Z.byte(0xf9), Z.byte(0x4), Z.byte(0x4 | (X6 ? 0x1 : 0x0)), Z.word(I[X0] ?? 0x7), Z.byte(0xff), Z.byte(0x0), Z.byte(0x2c), Z.word(X2), Z.word(X3), Z.word(X7), Z.word(X8), Z.byte(0x0), H(X9, 0x8, Z), N || (N = new Uint8Array(v)), N.set(x), L && L((X0 + 0x1) / i.length);
  }
  Z.byte(0x3b);
  let z = Z.result();
  return z.colours = q.colours, z.exact = q.exact, z;
}
f(Y, 'encodeGif');
function t(Z) {
  let X0 = 0x0,
    X1 = () => Z[X0++],
    X2 = () => {
      let XU = Z[X0] | Z[X0 + 0x1] << 0x8;
      return X0 += 0x2, XU;
    },
    X3 = String.fromCharCode(...Z.subarray(0x0, 0x6));
  if (X3 !== 'GIF89a' && X3 !== 'GIF87a') throw new Error("not a GIF");
  X0 = 0x6;
  let X4 = X2(),
    X5 = X2(),
    X6 = X1();
  X1(), X1();
  let X7 = null;
  if (X6 & 0x80) {
    let XU = 0x2 << (X6 & 0x7);
    X7 = Z.subarray(X0, X0 + XU * 0x3), X0 += XU * 0x3;
  }
  let X8 = new Uint8ClampedArray(X4 * X5 * 0x4),
    X9 = [],
    XX = [],
    XQ = -0x1,
    XV = 0x0;
  for (;;) {
    let Xo = X1();
    if (Xo === 0x3b || Xo === void 0x0) break;
    if (Xo === 0x21) {
      if (X1() === 0xf9) {
        X1();
        let XM = X1();
        XV = X2();
        let Xw = X1();
        XQ = XM & 0x1 ? Xw : -0x1, X1();
      } else {
        for (let Xh = X1(); Xh; Xh = X1()) X0 += Xh;
      }
      continue;
    }
    if (Xo !== 0x2c) throw new Error("bad block " + Xo);
    let XB = X2(),
      Xs = X2(),
      Xi = X2(),
      XK = X2(),
      XC = X1(),
      Xc = X7;
    if (XC & 0x80) {
      let XI = 0x2 << (XC & 0x7);
      Xc = Z.subarray(X0, X0 + XI * 0x3), X0 += XI * 0x3;
    }
    let Xf = X1(),
      Xd = [];
    for (let Xu = X1(); Xu; Xu = X1()) {
      for (let XP = 0x0; XP < Xu; XP++) Xd.push(Z[X0 + XP]);
      X0 += Xu;
    }
    let XT = 0x1 << Xf,
      XG = XT + 0x1,
      XF = Xf + 0x1,
      XR = XG + 0x1,
      Xy = 0x0,
      XH = -0x1,
      XY = new Int32Array(0x1000),
      XW = new Uint8Array(0x1000),
      Xt = new Uint16Array(0x1000);
    for (let Xn = 0x0; Xn < XT; Xn++) XY[Xn] = -0x1, XW[Xn] = Xn, Xt[Xn] = 0x1;
    let Xl = new Uint8Array(Xi * XK),
      Xm = 0x0,
      Xj = () => {
        let XL = 0x0;
        for (let Xa = 0x0; Xa < XF; Xa++, Xy++) Xd[Xy >> 0x3] & 0x1 << (Xy & 0x7) && (XL |= 0x1 << Xa);
        return XL;
      },
      XO = XL => {
        for (; XY[XL] >= 0x0;) XL = XY[XL];
        return XW[XL];
      },
      Xr = XL => {
        let Xa = Xt[XL],
          Xb = Xm + Xa - 0x1;
        for (; XL >= 0x0;) Xb < Xl.length && (Xl[Xb] = XW[XL]), Xb--, XL = XY[XL];
        Xm += Xa;
      };
    for (; Xy + XF <= Xd.length * 0x8;) {
      let XL = Xj();
      if (XL === XT) {
        XF = Xf + 0x1, XR = XG + 0x1, XH = -0x1;
        continue;
      }
      if (XL === XG) break;
      if (XH < 0x0) {
        Xr(XL), XH = XL;
        continue;
      }
      XL < XR ? (Xr(XL), XR < 0x1000 && (XY[XR] = XH, XW[XR] = XO(XL), Xt[XR] = Xt[XH] + 0x1, XR++)) : (XR < 0x1000 && (XY[XR] = XH, XW[XR] = XO(XH), Xt[XR] = Xt[XH] + 0x1, XR++), Xr(XL)), XR === 0x1 << XF && XF < 0xc && XF++, XH = XL;
    }
    for (let Xa = 0x0; Xa < XK; Xa++) for (let Xb = 0x0; Xb < Xi; Xb++) {
      let Xq = Xl[Xa * Xi + Xb];
      if (Xq === XQ) continue;
      let XZ = ((Xa + Xs) * X4 + Xb + XB) * 0x4;
      X8[XZ] = Xc[Xq * 0x3], X8[XZ + 0x1] = Xc[Xq * 0x3 + 0x1], X8[XZ + 0x2] = Xc[Xq * 0x3 + 0x2], X8[XZ + 0x3] = 0xff;
    }
    X9.push(X8.slice()), XX.push(XV), XQ = -0x1;
  }
  return {
    'w': X4,
    'h': X5,
    'frames': X9,
    'delays': XX
  };
}
f(t, 'decodeGif');
var l = typeof self < 'u' && typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope;
l && (self.onmessage = i => {
  let m = i.data || {};
  if (m.type === 'encode') try {
    let j = m.frames.map(u => new Uint8Array(u)),
      O = -0x1,
      w = Y(j, m.w, m.h, m.delays, u => {
        let L = Math.floor(u * 0x64);
        L !== O && (O = L, self.postMessage({
          'type': 'progress',
          'p': u
        }));
      }),
      I = w.buffer.slice(w.byteOffset, w.byteOffset + w.byteLength);
    self.postMessage({
      'type': 'done',
      'bytes': I,
      'colours': w.colours,
      'exact': w.exact
    }, [I]);
  } catch (u) {
    self.postMessage({
      'type': 'error',
      'message': u && u.message || String(u)
    });
  }
});
export { F as buildPalette, t as decodeGif, Y as encodeGif, H as lzwEncode };