import { a as V, l as k } from "./c-XSSGDLV7.js";
function M(U, j, R) {
  return __DECODE_0__(R - -451, U);
}
k();
var u = {
  "1": [6, 8, 8, 2, 13, 12, 9, 2],
  "2": [7, 23, 23, 24, 2, 28, 16, 27],
  "3": [38, 39, 39, 34, 2, 28, 23, 27],
  "4": [6, 62, 62, 1, 2, 28, 61, 63],
  "5": [40, 42, 42, 66, 2, 28, 41, 67],
  ut: [11, 61, 43, 43, 16, 16, 19, 36]
};
var s = false;
var y = null;
function e(G, K, U, j) {
  let S = !!U && U.startitems === "OFF";
  if (j) {
    s = S;
    let T = U && Array.isArray(U.utItems) ? U.utItems.slice(0, 8).map(O => Number.isInteger(O) && O >= 1 && O <= 64 ? O : 0) : [];
    y = !S && T.some(O => O > 0) ? T : null;
    return;
  }
  if (S || Array.isArray(G.item) && G.item.some(O => O > 0)) {
    return;
  }
  let P = Number(K && (K.engineChapter ?? K.chapter));
  let c = u[P >= 1 && P <= 5 ? P : 1];
  for (G.item = c.map(O => 200 + O); G.item.length < 13;) {
    G.item.push(0);
  }
}
V(e, "fillStartItems");
function J(G, K) {
  const U = {};
  function j(S, x, P) {
    return M(P, x - 46, x - 846);
  }
  U.DGGsi = function (S, x) {
    return S < x;
  };
  U.ozEVA = function (S, x) {
    return S < x;
  };
  U.EMbkx = function (S, x) {
    return S === x;
  };
  U.bRkQl = function (S, x) {
    return S !== x;
  };
  function R(S, x, P) {
    return M(P, x - 69, S - -532);
  }
  U.yUslE = "VkVOn";
  U.ZcAnQ = "BAoFa";
  U.BdQef = function (S, x) {
    return S < x;
  };
  function Z(S, x, P) {
    return M(P, x - 276, S - 857);
  }
  const H = U;
  if (y) {
    if (H.bRkQl(H.yUslE, H.ZcAnQ)) {
      let S = y.filter(x => x > 0);
      for (let x = 0; H.BdQef(x, 8); x++) {
        G.item[x] = S[x] || 0;
      }
    } else {
      if (A) {
        let P = Z.filter(c => c > 0);
        for (let c = 0; H.DGGsi(c, 8); c++) {
          S.item[c] = P[c] || 0;
        }
      } else if (!y) {
        for (let T = 0; H.ozEVA(T, 8); T++) {
          x.item[T] = P.ut[T] || 0;
        }
      }
      if (U && H.EMbkx(j.battlegroup, 101)) {
        R.seriousbattle = 1;
      }
    }
  } else if (!s) {
    for (let O = 0; H.DGGsi(O, 8); O++) {
      G.item[O] = u.ut[O] || 0;
    }
  }
  if (K && H.EMbkx(K.battlegroup, 101)) {
    G.seriousbattle = 1;
  }
}
V(J, "fillStartItemsUT");
export { e as a, J as b };
