import { a as f, l as d } from "./c-XSSGDLV7.js";
d();
var T = class M {
  constructor(i = 65536) {
    this.buf = new Uint8Array(i);
    this.n = 0;
  }
  grow(i) {
    if (this.n + i <= this.buf.length) {
      return;
    }
    let m = this.buf.length * 2;
    while (m < this.n + i) {
      m *= 2;
    }
    let j = new Uint8Array(m);
    j.set(this.buf.subarray(0, this.n));
    this.buf = j;
  }
  byte(i) {
    this.grow(1);
    this.buf[this.n++] = i & 255;
  }
  word(i) {
    this.grow(2);
    this.buf[this.n++] = i & 255;
    this.buf[this.n++] = i >> 8 & 255;
  }
  str(i) {
    for (let m = 0; m < i.length; m++) {
      this.byte(i.charCodeAt(m));
    }
  }
  bytes(i) {
    this.grow(i.length);
    this.buf.set(i, this.n);
    this.n += i.length;
  }
  result() {
    return this.buf.slice(0, this.n);
  }
};
f(T, "Bytes");
var G = T;
function F(j) {
  let O = new Map();
  let I = true;
  let L = -1;
  i: for (let X1 of j) {
    let X2 = X1;
    for (let X3 = 0; X3 < X2.length; X3 += 4) {
      let X4 = X2[X3] << 16 | X2[X3 + 1] << 8 | X2[X3 + 2];
      if (X4 !== L && (L = X4, !O.has(X4))) {
        if (O.size >= 255) {
          I = false;
          break i;
        }
        O.set(X4, O.size);
      }
    }
  }
  let q = new Uint8Array(768);
  if (I) {
    for (let [X7, X8] of O) {
      q[X8 * 3] = X7 >> 16;
      q[X8 * 3 + 1] = X7 >> 8 & 255;
      q[X8 * 3 + 2] = X7 & 255;
    }
    let X5 = -1;
    let X6 = 0;
    return {
      palette: q,
      colours: O.size,
      exact: true,
      map: (X9, XX, XQ) => {
        let XV = X9 << 16 | XX << 8 | XQ;
        if (XV !== X5) {
          X5 = XV;
          X6 = O.get(XV);
        }
        return X6;
      }
    };
  }
  let Z = new Uint32Array(32768);
  for (let X9 of j) {
    for (let XX = 0; XX < X9.length; XX += 4) {
      Z[X9[XX] >> 3 << 10 | X9[XX + 1] >> 3 << 5 | X9[XX + 2] >> 3]++;
    }
  }
  let v = [];
  for (let XQ = 0; XQ < 32768; XQ++) {
    if (Z[XQ]) {
      v.push(XQ);
    }
  }
  let N = (XV, XU) => XU === 0 ? XV >> 10 : XU === 1 ? XV >> 5 & 31 : XV & 31;
  let x = [{
    bins: v,
    lo: 0,
    hi: v.length
  }];
  let E = XV => {
    let XU = [31, 31, 31];
    let Xo = [0, 0, 0];
    let XB = 0;
    for (let XK = XV.lo; XK < XV.hi; XK++) {
      let XC = XV.bins[XK];
      for (let Xc = 0; Xc < 3; Xc++) {
        let Xf = N(XC, Xc);
        if (Xf < XU[Xc]) {
          XU[Xc] = Xf;
        }
        if (Xf > Xo[Xc]) {
          Xo[Xc] = Xf;
        }
      }
      XB += Z[XC];
    }
    let Xs = [Xo[0] - XU[0], Xo[1] - XU[1], Xo[2] - XU[2]];
    let Xi = Xs[0] >= Xs[1] && Xs[0] >= Xs[2] ? 0 : Xs[1] >= Xs[2] ? 1 : 2;
    return {
      axis: Xi,
      range: Xs[Xi],
      cnt: XB
    };
  };
  while (x.length < 255) {
    let XV = -1;
    let XU = -1;
    for (let Xc = 0; Xc < x.length; Xc++) {
      let Xf = x[Xc];
      if (Xf.hi - Xf.lo < 2) {
        continue;
      }
      Xf.info = Xf.info || E(Xf);
      let Xd = Xf.info.range * Math.log2(1 + Xf.info.cnt);
      if (Xf.info.range > 0 && Xd > XU) {
        XU = Xd;
        XV = Xc;
      }
    }
    if (XV < 0) {
      break;
    }
    let Xo = x[XV];
    let XB = Xo.info.axis;
    let Xs = Xo.bins.slice(Xo.lo, Xo.hi).sort((XT, XG) => N(XT, XB) - N(XG, XB));
    let Xi = Xo.info.cnt / 2;
    let XK = 0;
    let XC = 1;
    for (let XT = 0; XT < Xs.length - 1; XT++) {
      XK += Z[Xs[XT]];
      if (XK >= Xi) {
        XC = XT + 1;
        break;
      }
      XC = XT + 1;
    }
    x.splice(XV, 1, {
      bins: Xs,
      lo: 0,
      hi: XC
    }, {
      bins: Xs,
      lo: XC,
      hi: Xs.length
    });
  }
  x.forEach((XG, XF) => {
    let XR = 0;
    let Xy = 0;
    let XH = 0;
    let XY = 0;
    for (let XW = XG.lo; XW < XG.hi; XW++) {
      let Xt = XG.bins[XW];
      let Xl = Z[Xt];
      XR += ((Xt >> 10) * 8 + 4) * Xl;
      Xy += ((Xt >> 5 & 31) * 8 + 4) * Xl;
      XH += ((Xt & 31) * 8 + 4) * Xl;
      XY += Xl;
    }
    q[XF * 3] = Math.round(XR / XY);
    q[XF * 3 + 1] = Math.round(Xy / XY);
    q[XF * 3 + 2] = Math.round(XH / XY);
  });
  let z = x.length;
  let X0 = new Int16Array(32768).fill(-1);
  return {
    palette: q,
    colours: z,
    exact: false,
    map: (XG, XF, XR) => {
      let Xy = XG >> 3 << 10 | XF >> 3 << 5 | XR >> 3;
      let XH = X0[Xy];
      if (XH >= 0) {
        return XH;
      }
      let XY = 1000000000;
      XH = 0;
      for (let XW = 0; XW < z; XW++) {
        let Xt = q[XW * 3] - XG;
        let Xl = q[XW * 3 + 1] - XF;
        let Xm = q[XW * 3 + 2] - XR;
        let Xj = Xt * Xt * 3 + Xl * Xl * 4 + Xm * Xm * 2;
        if (Xj < XY) {
          XY = Xj;
          XH = XW;
        }
      }
      X0[Xy] = XH;
      return XH;
    }
  };
}
f(F, "buildPalette");
var R = new Int32Array(1048576);
var y = 0;
function H(i, j, O) {
  let I = 1 << j;
  let L = I + 1;
  let a = j + 1;
  let q = L + 1;
  let Z = 0;
  let A = 0;
  let v = new Uint8Array(255);
  let N = 0;
  let x = X1 => {
    v[N++] = X1;
    if (N === 255) {
      O.byte(255);
      O.bytes(v);
      N = 0;
    }
  };
  let z = X1 => {
    Z |= X1 << A;
    A += a;
    while (A >= 8) {
      x(Z & 255);
      Z >>>= 8;
      A -= 8;
    }
  };
  let X0 = () => {
    y++;
    if (y >= 524288) {
      R.fill(0);
      y = 1;
    }
    a = j + 1;
    q = L + 1;
  };
  O.byte(j);
  X0();
  z(I);
  if (!i.length) {
    z(L);
  } else {
    let X1 = i[0];
    let X2 = () => y * 4096;
    let X3 = X2();
    for (let X4 = 1; X4 < i.length; X4++) {
      let X5 = i[X4];
      let X6 = X1 * 256 + X5;
      let X7 = R[X6];
      if (X7 >= X3 && X7 < X3 + 4096) {
        X1 = X7 - X3;
        continue;
      }
      z(X1);
      if (q < 4096) {
        R[X6] = X3 + q;
        if (q === 1 << a && a < 12) {
          a++;
        }
        q++;
      } else {
        z(I);
        X0();
        X3 = X2();
      }
      X1 = X5;
    }
    z(X1);
    z(L);
  }
  if (A > 0) {
    x(Z & 255);
  }
  if (N) {
    O.byte(N);
    O.bytes(v.subarray(0, N));
  }
  O.byte(0);
}
f(H, "lzwEncode");
function Y(i, j, O, I, L) {
  if (!i.length) {
    throw new Error("no frames");
  }
  let q = F(i);
  let Z = new G(1048576);
  Z.str("GIF89a");
  Z.word(j);
  Z.word(O);
  Z.byte(247);
  Z.byte(0);
  Z.byte(0);
  Z.bytes(q.palette);
  Z.byte(33);
  Z.byte(255);
  Z.byte(11);
  Z.str("NETSCAPE2.0");
  Z.byte(3);
  Z.byte(1);
  Z.word(0);
  Z.byte(0);
  let v = j * O;
  let N = null;
  let x = new Uint8Array(v);
  for (let X0 = 0; X0 < i.length; X0++) {
    let X1 = i[X0];
    for (let XX = 0, XQ = 0; XX < v; XX++, XQ += 4) {
      x[XX] = q.map(X1[XQ], X1[XQ + 1], X1[XQ + 2]);
    }
    let X2 = 0;
    let X3 = 0;
    let X4 = j - 1;
    let X5 = O - 1;
    let X6 = false;
    if (N) {
      X2 = j;
      X3 = O;
      X4 = -1;
      X5 = -1;
      for (let XV = 0; XV < O; XV++) {
        let XU = XV * j;
        for (let Xo = 0; Xo < j; Xo++) {
          if (x[XU + Xo] !== N[XU + Xo]) {
            if (Xo < X2) {
              X2 = Xo;
            }
            if (Xo > X4) {
              X4 = Xo;
            }
            if (XV < X3) {
              X3 = XV;
            }
            if (XV > X5) {
              X5 = XV;
            }
          }
        }
      }
      X6 = true;
      if (X4 < 0) {
        X2 = 0;
        X3 = 0;
        X4 = 0;
        X5 = 0;
      }
    }
    let X7 = X4 - X2 + 1;
    let X8 = X5 - X3 + 1;
    let X9 = new Uint8Array(X7 * X8);
    for (let XB = 0; XB < X8; XB++) {
      let Xs = (XB + X3) * j + X2;
      let Xi = XB * X7;
      for (let XK = 0; XK < X7; XK++) {
        let XC = x[Xs + XK];
        X9[Xi + XK] = X6 && N[Xs + XK] === XC ? 255 : XC;
      }
    }
    Z.byte(33);
    Z.byte(249);
    Z.byte(4);
    Z.byte((X6 ? 1 : 0) | 4);
    Z.word(I[X0] ?? 7);
    Z.byte(255);
    Z.byte(0);
    Z.byte(44);
    Z.word(X2);
    Z.word(X3);
    Z.word(X7);
    Z.word(X8);
    Z.byte(0);
    H(X9, 8, Z);
    N ||= new Uint8Array(v);
    N.set(x);
    if (L) {
      L((X0 + 1) / i.length);
    }
  }
  Z.byte(59);
  let z = Z.result();
  z.colours = q.colours;
  z.exact = q.exact;
  return z;
}
f(Y, "encodeGif");
function t(Z) {
  let X0 = 0;
  let X1 = () => Z[X0++];
  let X2 = () => {
    let XU = Z[X0] | Z[X0 + 1] << 8;
    X0 += 2;
    return XU;
  };
  let X3 = String.fromCharCode(...Z.subarray(0, 6));
  if (X3 !== "GIF89a" && X3 !== "GIF87a") {
    throw new Error("not a GIF");
  }
  X0 = 6;
  let X4 = X2();
  let X5 = X2();
  let X6 = X1();
  X1();
  X1();
  let X7 = null;
  if (X6 & 128) {
    let XU = 2 << (X6 & 7);
    X7 = Z.subarray(X0, X0 + XU * 3);
    X0 += XU * 3;
  }
  let X8 = new Uint8ClampedArray(X4 * X5 * 4);
  let X9 = [];
  let XX = [];
  let XQ = -1;
  let XV = 0;
  while (true) {
    let Xo = X1();
    if (Xo === 59 || Xo === undefined) {
      break;
    }
    if (Xo === 33) {
      if (X1() === 249) {
        X1();
        let XM = X1();
        XV = X2();
        let Xw = X1();
        XQ = XM & 1 ? Xw : -1;
        X1();
      } else {
        for (let Xh = X1(); Xh; Xh = X1()) {
          X0 += Xh;
        }
      }
      continue;
    }
    if (Xo !== 44) {
      throw new Error("bad block " + Xo);
    }
    let XB = X2();
    let Xs = X2();
    let Xi = X2();
    let XK = X2();
    let XC = X1();
    let Xc = X7;
    if (XC & 128) {
      let XI = 2 << (XC & 7);
      Xc = Z.subarray(X0, X0 + XI * 3);
      X0 += XI * 3;
    }
    let Xf = X1();
    let Xd = [];
    for (let Xu = X1(); Xu; Xu = X1()) {
      for (let XP = 0; XP < Xu; XP++) {
        Xd.push(Z[X0 + XP]);
      }
      X0 += Xu;
    }
    let XT = 1 << Xf;
    let XG = XT + 1;
    let XF = Xf + 1;
    let XR = XG + 1;
    let Xy = 0;
    let XH = -1;
    let XY = new Int32Array(4096);
    let XW = new Uint8Array(4096);
    let Xt = new Uint16Array(4096);
    for (let Xn = 0; Xn < XT; Xn++) {
      XY[Xn] = -1;
      XW[Xn] = Xn;
      Xt[Xn] = 1;
    }
    let Xl = new Uint8Array(Xi * XK);
    let Xm = 0;
    let Xj = () => {
      let XL = 0;
      for (let Xa = 0; Xa < XF; Xa++, Xy++) {
        if (Xd[Xy >> 3] & 1 << (Xy & 7)) {
          XL |= 1 << Xa;
        }
      }
      return XL;
    };
    let XO = XL => {
      while (XY[XL] >= 0) {
        XL = XY[XL];
      }
      return XW[XL];
    };
    let Xr = XL => {
      let Xa = Xt[XL];
      let Xb = Xm + Xa - 1;
      while (XL >= 0) {
        if (Xb < Xl.length) {
          Xl[Xb] = XW[XL];
        }
        Xb--;
        XL = XY[XL];
      }
      Xm += Xa;
    };
    while (Xy + XF <= Xd.length * 8) {
      let XL = Xj();
      if (XL === XT) {
        XF = Xf + 1;
        XR = XG + 1;
        XH = -1;
        continue;
      }
      if (XL === XG) {
        break;
      }
      if (XH < 0) {
        Xr(XL);
        XH = XL;
        continue;
      }
      if (XL < XR) {
        Xr(XL);
        if (XR < 4096) {
          XY[XR] = XH;
          XW[XR] = XO(XL);
          Xt[XR] = Xt[XH] + 1;
          XR++;
        }
      } else {
        if (XR < 4096) {
          XY[XR] = XH;
          XW[XR] = XO(XH);
          Xt[XR] = Xt[XH] + 1;
          XR++;
        }
        Xr(XL);
      }
      if (XR === 1 << XF && XF < 12) {
        XF++;
      }
      XH = XL;
    }
    for (let Xa = 0; Xa < XK; Xa++) {
      for (let Xb = 0; Xb < Xi; Xb++) {
        let Xq = Xl[Xa * Xi + Xb];
        if (Xq === XQ) {
          continue;
        }
        let XZ = ((Xa + Xs) * X4 + Xb + XB) * 4;
        X8[XZ] = Xc[Xq * 3];
        X8[XZ + 1] = Xc[Xq * 3 + 1];
        X8[XZ + 2] = Xc[Xq * 3 + 2];
        X8[XZ + 3] = 255;
      }
    }
    X9.push(X8.slice());
    XX.push(XV);
    XQ = -1;
  }
  return {
    w: X4,
    h: X5,
    frames: X9,
    delays: XX
  };
}
f(t, "decodeGif");
var l = typeof self !== "undefined" && typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (l) {
  self.onmessage = i => {
    let m = i.data || {};
    if (m.type === "encode") {
      try {
        let j = m.frames.map(u => new Uint8Array(u));
        let O = -1;
        let w = Y(j, m.w, m.h, m.delays, u => {
          let L = Math.floor(u * 100);
          if (L !== O) {
            O = L;
            self.postMessage({
              type: "progress",
              p: u
            });
          }
        });
        let I = w.buffer.slice(w.byteOffset, w.byteOffset + w.byteLength);
        self.postMessage({
          type: "done",
          bytes: I,
          colours: w.colours,
          exact: w.exact
        }, [I]);
      } catch (u) {
        self.postMessage({
          type: "error",
          message: u && u.message || String(u)
        });
      }
    }
  };
}
export { F as buildPalette, t as decodeGif, Y as encodeGif, H as lzwEncode };
