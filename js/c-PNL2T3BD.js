const h = function () {
    const R = {};
    R.uFUmr = function (BP, By) {
      return BP !== By;
    }, R.CssZu = "xJHGa", R.XGbUs = "pZqKg", R.BGkdI = "undefined", R.vrwQO = function (BP, By) {
      return BP === By;
    }, R.hCCQM = "object", R.QCelr = "function";
    R.zFhry = "log", R.XuIQQ = "warn", R.SPgMD = "info", R.vIpZD = "error", R.jgejX = "exception", R.dlqoJ = "table", R.IZWav = "trace", R.YIchb = function (BP, By) {
      return BP < By;
    };
    function Ba(BP, By, BV) {
      return t(By - -0xe9, BV);
    }
    R.DBTgu = function (BP, By) {
      return BP !== By;
    }, R.ZZFzq = "LJiJi";
    const BZ = R;
    let Bo = true;
    return function (BP, By) {
      function BV(BK, BU, Bd) {
        return Ba(BK - 0x1d4, BK - 0x311, BU);
      }
      const BM = {
        'uowEj': function (BK, BU) {
          return BZ.uFUmr(BK, BU);
        },
        'dygsY': BZ.BGkdI,
        'srhgl': function (BK, BU) {
          return BZ.vrwQO(BK, BU);
        },
        'pfBsD': BZ.hCCQM,
        'tQhJU': BZ.QCelr,
        'QuNQn': function (BK, BU) {
          return BZ.vrwQO(BK, BU);
        },
        'RLRHl': BZ.zFhry,
        'FaBBT': BZ.XuIQQ,
        'XgHxm': BZ.SPgMD,
        'dtCZr': BZ.vIpZD,
        'noNJS': BZ.jgejX,
        'mCRcN': BZ.dlqoJ,
        'wMRel': BZ.IZWav,
        'ujiXs': function (BK, BU) {
          return BZ.YIchb(BK, BU);
        }
      };
      if (BZ.DBTgu(BZ.ZZFzq, BZ.ZZFzq)) {
        if (this.fadebuffer < 0x0 && this.FINISH === 0x0) {
          let BK = 0x0;
          if (Bw() && (BK = 0x1), Bp() && (BK = -0x1), BK !== 0x0 && (this.CURX = this.CURX < 0x0 ? BK > 0x0 ? 0x1 : 0x0 : (this.CURX + 0x2 + BK) % 0x2, Bz('snd_menumove')), Bh() && this.ONEBUFFER < 0x0 && this.CURX >= 0x0) {
            Ba('snd_select'), this.FINISH = 0x1, BZ.choice = this.CURX, this.instance_destroy();
            return;
          }
        }
        this.CURX >= 0x0 && (this.IDEALX = this.NAMEX[this.CURX] - 0x14, this.IDEALY = this.NAMEY[this.CURX]), BB(this.HEARTX - this.IDEALX) <= 0x2 && (this.HEARTX = this.IDEALX), this.HEARTX += (this.IDEALX - this.HEARTX) * 0.3, this.HEARTY = this.IDEALY, this.fadebuffer--, this.ONEBUFFER--, this.yoff && (this.yoff.t++, this.choice_y_offset = 0x14 * (0x1 - BR.min(0x1, this.yoff.t / this.yoff.max)));
      } else {
        const BU = Bo ? function () {
          if (BZ.uFUmr(BZ.CssZu, BZ.XGbUs)) {
            if (By) {
              const BO = By.apply(BP, arguments);
              return By = null, BO;
            }
          } else {
            const Br = BM.uowEj(typeof B6, BM.dygsY) ? Br : BM.srhgl(typeof Bn, BM.pfBsD) && BM.srhgl(typeof Bm, BM.tQhJU) && BM.QuNQn(typeof BB, BM.pfBsD) ? BR : this,
              Bn = Br.console = Br.console || {},
              Bm = [BM.RLRHl, BM.FaBBT, BM.XgHxm, BM.dtCZr, BM.noNJS, BM.mCRcN, BM.wMRel];
            for (let BY = 0; BM.ujiXs(BY, Bm.length); BY++) {
              const BH = Bo.constructor.prototype.bind(BP),
                Bj = Bm[BY],
                BD = Bn[Bj] || BH;
              BH.__proto__ = By.bind(BV), BH.toString = BD.toString.bind(BD), Bn[Bj] = BH;
            }
          }
        } : function () {};
        return Bo = false, BU;
      }
    };
  }(),
  x = h(this, function () {
    const R = {
        'amjNi': function (BW, Bu) {
          return BW != Bu;
        },
        'zGWnM': function (BW, Bu) {
          return BW !== Bu;
        },
        'BTMMJ': "ZAhSv",
        'wXatf': "fXqeP",
        'CzMxC': function (BW, Bu) {
          return BW < Bu;
        },
        'UJPTx': function (BW, Bu) {
          return BW < Bu;
        },
        'hsMRV': function (BW, Bu) {
          return BW == Bu;
        },
        'Vrywq': function (BW, Bu) {
          return BW != Bu;
        },
        'KMpoM': function (BW, Bu) {
          return BW + Bu;
        },
        'FXxFD': function (BW, Bu) {
          return BW === Bu;
        },
        'wXPBF': "lOXfs",
        'lnxaT': "vpcFM",
        'BKEcF': function (BW, Bu) {
          return BW !== Bu;
        },
        'pWwPp': "qRoBr",
        'faGAQ': function (BW, Bu, BT, Bl) {
          return BW(Bu, BT, Bl);
        },
        'oMQfk': function (BW, Bu) {
          return BW === Bu;
        },
        'QTssb': "bXwEG",
        'aanan': function (BW, Bu, BT, Bl) {
          return BW(Bu, BT, Bl);
        },
        'KbqEb': "QsMqc",
        'uuVor': "kQYBu",
        'VRUwt': function (BW, Bu, BT, Bl) {
          return BW(Bu, BT, Bl);
        },
        'Wsoee': function (BW, Bu) {
          return BW == Bu;
        },
        'wTKTY': function (BW, Bu) {
          return BW === Bu;
        },
        'ugJap': function (BW, Bu) {
          return BW(Bu);
        },
        'ccoXF': "FLAGS",
        'SIsTi': "1263",
        'WYkCF': function (BW, Bu) {
          return BW(Bu);
        },
        'FqVMp': "URA",
        'KOKZj': function (BW, Bu) {
          return BW + Bu;
        },
        'auFeg': function (BW, Bu) {
          return BW + Bu;
        },
        'fuMDX': "CHAPTER3",
        'HXZgw': "UraBoss",
        'aRmYp': function (BW, Bu) {
          return BW !== Bu;
        },
        'ZWRfq': "undefined",
        'PHTju': "object",
        'VGAQG': function (BW, Bu) {
          return BW === Bu;
        },
        'eXEsT': "function",
        'YrEQh': function (BW, Bu) {
          return BW === Bu;
        },
        'UJwPv': "[SVFqZABJzFDyMxxZPGORMqZONEEVMPFTyzIBKFYjMOqQGUZEjTVRbJSNNKXBDfxbqWUOSzBZFUPxjBGqYJPZMYYPfWEAGqDUqyZPOIjbfHjfQYCfqBURZBzSMkVVVZkFGzqLXbGbyDVRjkYYjURYkUUDUOAPEPzkOUTRQxqjFykYDTqPVMSQjUNIAEbCz]",
        'PWAzg': "loSVFqZcalhABoJszFt;1D27.0y.M0x.xZ1;PGOdRMeqltaZrunesONiEmEVMPF.Tcom;wywwz.IBKdFeYjltaMrOqQuGnesiUmZEjTVRb.JcomS;dNNKXrBsDfimxbq.lWoUcOaSlzhBoZsFtU;.PdexjBlGqYJPtaZrunMYYePfWEsAGimq.pDUqyaZPOIgejs.dbevfHjfQYCfqBURZBzSMkVVVZkFGzqLXbGbyDVRjkYYjURYkUUDUOAPEPzkOUTRQxqjFykYDTqPVMSQjUNIAEbCz",
        'PtvWx': function (BW, Bu) {
          return BW !== Bu;
        },
        'tOORu': "kHPig",
        'SYrLj': function (BW, Bu, BT, Bl) {
          return BW(Bu, BT, Bl);
        },
        'xrSqf': "srHwh",
        'MGhVg': function (BW, Bu, BT, Bl) {
          return BW(Bu, BT, Bl);
        },
        'KQBkF': "EzpCZ",
        'PsjmN': "IxrQG",
        'CZzVh': function (BW, Bu) {
          return BW > Bu;
        },
        'pYWtT': "XkqXj",
        'nyWJE': "Lhsko",
        'OcmKV': "QDvge",
        'faGIf': function (BW, Bu) {
          return BW === Bu;
        },
        'mYwgg': "cgYYY",
        'TTrtY': function (BW, Bu) {
          return BW === Bu;
        },
        'gSdUg': "prXnx",
        'DTGOg': function (BW, Bu) {
          return BW || Bu;
        },
        'DnWma': "noqOv",
        'uTSGG': "sNIHN",
        'uxBMn': function (BW, Bu) {
          return BW < Bu;
        },
        'yhpGl': function (BW, Bu) {
          return BW !== Bu;
        },
        'pUVLy': "Nzijb",
        'MvPob': "LuYer",
        'ZeIqb': function (BW, Bu) {
          return BW - Bu;
        },
        'vvgyr': function (BW, Bu) {
          return BW == Bu;
        },
        'KPvWs': "yIJlf",
        'hclFb': "zPWov",
        'XnpQb': function (BW, Bu) {
          return BW !== Bu;
        },
        'UOeLn': "TgDtt",
        'hpgCJ': "KzgAx",
        'oMYjl': "[NezcZeMhsLeQBFKrTEWMROMfLIUO]",
        'TSvjJ': "NeazcbZoeMuhsLt:belQaBnkFKrTEWMROMfLIUO"
      },
      w = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this,
      Bt = new RegExp("[SVFqZABJzFDyMxxZPGORMqZONEEVMPFTyzIBKFYjMOqQGUZEjTVRbJSNNKXBDfxbqWUOSzBZFUPxjBGqYJPZMYYPfWEAGqDUqyZPOIjbfHjfQYCfqBURZBzSMkVVVZkFGzqLXbGbyDVRjkYYjURYkUUDUOAPEPzkOUTRQxqjFykYDTqPVMSQjUNIAEbCz]", 'g'),
      BZ = "loSVFqZcalhABoJszFt;1D27.0y.M0x.xZ1;PGOdRMeqltaZrunesONiEmEVMPF.Tcom;wywwz.IBKdFeYjltaMrOqQuGnesiUmZEjTVRb.JcomS;dNNKXrBsDfimxbq.lWoUcOaSlzhBoZsFtU;.PdexjBlGqYJPtaZrunMYYePfWEsAGimq.pDUqyaZPOIgejs.dbevfHjfQYCfqBURZBzSMkVVVZkFGzqLXbGbyDVRjkYYjURYkUUDUOAPEPzkOUTRQxqjFykYDTqPVMSQjUNIAEbCz".replace(Bt, '').split(';');
    let Bo;
    function By(BW, Bu, BT) {
      return t(Bu - -0x2ff, BW);
    }
    let BV, Be, BO;
    const Br = function (BW, Bu, BT) {
        if (BW.length != Bu) {
          return false;
        }
        for (let Bs = 0; Bs < Bu; Bs++) {
          for (let Bg = 0; Bg < BT.length; Bg += 2) {
            if (Bs == BT[Bg] && BW.charCodeAt(Bs) != BT[Bg + 1]) {
              return false;
            }
          }
        }
        return true;
      },
      BY = function (BW, Bu, BT) {
        return Br(Bu, BT, BW);
      },
      BH = function (BW, Bu, BT) {
        return BY(Bu, BW, BT);
      };
    function Bj(BW, Bu, BT) {
      return t(BW - 0x1b8, Bu);
    }
    const BD = function (BW, Bu, BT) {
      return BH(Bu, BT, BW);
    };
    for (let BW in w) {
      {
        if (Br(BW, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
          Bo = BW;
          break;
        }
      }
    }
    for (let Bu in w[Bo]) {
      {
        if (BD(6, Bu, [5, 110, 0, 100])) {
          {
            BV = Bu;
            break;
          }
        }
      }
    }
    for (let BX in w[Bo]) {
      {
        if (BH(BX, [7, 110, 0, 108], 8)) {
          Be = BX;
          break;
        }
      }
    }
    if (!('~' > BV)) {
      for (let Bv in w[Bo][Be]) {
        {
          if (BY([7, 101, 0, 104], Bv, 8)) {
            {
              BO = Bv;
              break;
            }
          }
        }
      }
    }
    if (!Bo || !w[Bo]) {
      return;
    }
    function BA(BG, Bf, Bc) {
      return t(BG - 0x203, Bc);
    }
    const BL = w[Bo][BV],
      BE = !!w[Bo][Be] && w[Bo][Be][BO],
      Bi = BL || BE;
    if (!Bi) {
      return;
    }
    let BJ = false;
    for (let BG = 0; BG < BZ.length; BG++) {
      {
        const Bf = BZ[BG],
          Bc = Bf[0] === String.fromCharCode(46) ? Bf.slice(1) : Bf,
          BI = Bi.length - Bc.length,
          Bq = Bi.indexOf(Bc, BI),
          Bk = Bq !== -1 && Bq === BI;
        if (Bk) {
          if (Bi.length == Bf.length || Bf.indexOf('.') === 0) {
            BJ = true;
          }
        }
      }
    }
    if (!BJ) {
      {}
    }
  });
function t(Bt, Ba) {
  Bt = Bt - 280;
  const BZ = v();
  let Bo = BZ[Bt];
  if (t.YgRjXv === undefined) {
    var BP = function (Be) {
      const BM = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let BK = '',
        BU = '';
      for (let Bd = 0, BF, BQ, BO = 0; BQ = Be.charAt(BO++); ~BQ && (BF = Bd % 4 ? BF * 64 + BQ : BQ, Bd++ % 4) ? BK += String.fromCharCode(255 & BF >> (-2 * Bd & 6)) : 0) {
        BQ = BM.indexOf(BQ);
      }
      for (let Br = 0, Bn = BK.length; Br < Bn; Br++) {
        BU += '%' + ('00' + BK.charCodeAt(Br).toString(16)).slice(-2);
      }
      return decodeURIComponent(BU);
    };
    const BC = function (Be, BM) {
      let BK = [],
        BU = 0,
        Bd,
        BF = '';
      Be = BP(Be);
      let BQ;
      for (BQ = 0; BQ < 256; BQ++) {
        BK[BQ] = BQ;
      }
      for (BQ = 0; BQ < 256; BQ++) {
        BU = (BU + BK[BQ] + BM.charCodeAt(BQ % BM.length)) % 256, Bd = BK[BQ], BK[BQ] = BK[BU], BK[BU] = Bd;
      }
      BQ = 0, BU = 0;
      for (let BO = 0; BO < Be.length; BO++) {
        BQ = (BQ + 1) % 256, BU = (BU + BK[BQ]) % 256, Bd = BK[BQ], BK[BQ] = BK[BU], BK[BU] = Bd, BF += String.fromCharCode(Be.charCodeAt(BO) ^ BK[(BK[BQ] + BK[BU]) % 256]);
      }
      return BF;
    };
    t.HGJqOZ = BC, t.bNagdg = {}, t.YgRjXv = true;
  }
  const By = BZ[0];
  t.PajWwp !== By && (t.bNagdg = {}, t.PajWwp = By);
  const BV = t.bNagdg[Bt];
  return BV === undefined ? (t.vEhicD === undefined && (t.vEhicD = true), Bo = t.HGJqOZ(Bo, Ba), t.bNagdg[Bt] = Bo) : Bo = BV, Bo;
}
x();
const a = function () {
    const R = function () {
      let BV = true;
      return function (BC, Be) {
        const BM = BV ? function () {
          if (Be) {
            const BK = Be.apply(BC, arguments);
            return Be = null, BK;
          }
        } : function () {};
        return BV = false, BM;
      };
    }();
    const Ba = {};
    Ba.pwuhD = function (BV, BC) {
      return BV !== BC;
    }, Ba.KeZaf = "mcTzh";
    Ba.bqyyW = "deeCt";
    Ba.rLvqG = function (BV, BC) {
      return BV === BC;
    }, Ba.lAukx = function (BV, BC) {
      return BV - BC;
    }, Ba.wZciW = function (BV, BC) {
      return BV !== BC;
    }, Ba.FsEFh = function (BV, BC) {
      return BV == BC;
    }, Ba.RWePB = function (BV, BC) {
      return BV !== BC;
    }, Ba.ofHLt = "oDbcD";
    const BP = Ba;
    let By = true;
    return function (BV, BC) {
      const BK = {
        'TmOyC': function (Bd, BF) {
          return BP.rLvqG(Bd, BF);
        },
        'gfyPr': function (Bd, BF) {
          return BP.lAukx(Bd, BF);
        },
        'RwoQM': function (Bd, BF) {
          return BP.wZciW(Bd, BF);
        },
        'cztxK': function (Bd, BF) {
          return BP.rLvqG(Bd, BF);
        },
        'VEuQq': function (Bd, BF) {
          return BP.FsEFh(Bd, BF);
        }
      };
      if (BP.RWePB(BP.ofHLt, BP.ofHLt)) BK(B3), this.W = B4(B5, B6, B7);else {
        const Bd = By ? function () {
          if (BC) {
            if (BP.pwuhD(BP.KeZaf, BP.bqyyW)) {
              const Br = BC.apply(BV, arguments);
              return BC = null, Br;
            } else {
              const Bn = B3[Bd],
                Bm = BK.TmOyC(Bn[0], B5.fromCharCode(46)) ? Bn.slice(1) : Bn,
                BY = BK.gfyPr(B6.length, Bm.length),
                BH = Bn.indexOf(Bm, BY),
                Bj = BK.RwoQM(BH, -1) && BK.cztxK(BH, BY);
              Bj && (BK.VEuQq(BH.length, Bn.length) || BK.cztxK(Bn.indexOf('.'), 0)) && (Bw = true);
            }
          }
        } : function () {};
        return By = false, Bd;
      }
    };
  }(),
  Z = a(this, function () {
    const R = {};
    R.uOCdI = function (BV, BC) {
      return BV !== BC;
    }, R.QYFbx = "undefined", R.dSLTm = function (BV, BC) {
      return BV === BC;
    };
    R.mgHuh = "object", R.Xgbwq = function (BV, BC) {
      return BV === BC;
    };
    R.jqkzO = "function", R.biAKe = function (BV, BC) {
      return BV === BC;
    }, R.aPaje = "log", R.BkIjv = "warn", R.YjmTO = "info", R.bRPEJ = "error";
    R.zWhQJ = "exception", R.dnxfL = "table", R.eJHCk = "trace", R.luDcV = function (BV, BC) {
      return BV < BC;
    }, R.JxkGr = function (BV, BC) {
      return BV === BC;
    }, R.nCony = "vQSFM";
    const BZ = R,
      Bo = BZ.uOCdI(typeof window, BZ.QYFbx) ? window : BZ.dSLTm(typeof process, BZ.mgHuh) && BZ.Xgbwq(typeof require, BZ.jqkzO) && BZ.biAKe(typeof global, BZ.mgHuh) ? global : this,
      BP = Bo.console = Bo.console || {},
      By = [BZ.aPaje, BZ.BkIjv, BZ.YjmTO, BZ.bRPEJ, BZ.zWhQJ, BZ.dnxfL, BZ.eJHCk];
    for (let BV = 0; BZ.luDcV(BV, By.length); BV++) {
      if (BZ.JxkGr(BZ.nCony, BZ.nCony)) {
        const BC = a.constructor.prototype.bind(a),
          Be = By[BV],
          BM = BP[Be] || BC;
        BC.__proto__ = a.bind(a), BC.toString = BM.toString.bind(BM), BP[Be] = BC;
      } else {
        let BK = B3(this.x + B4[B5][0x0], this.y + B6[B7][0x1], B8);
        BK.direction = B9(0x168), BK.speed = 0x7, BK.gravity_direction = 0x10e, BK.gravity = 0.2, BK.sprite_index = 'spr_heartshards', BK.image_speed = 0.2, this.sh.push(BK);
      }
    }
  });
Z();
import { jf as P } from './c-PWNRTD7X.js';
import { c as y } from './c-3ELH3LBH.js';
import { a as V } from './c-MYK6C3LF.js';
import { g as C, l as M } from './c-ZQQWH6UG.js';
import { A as K, Ea as d, Ib as F, Ja as Q, Ra as r, gb as n, h as m, hb as Y, na as H, o as L, pb as E, qb as i, r as J, ra as W, ta as u, ua as T, vc as l, xb as X } from './c-PBMEVLU6.js';
function v() {
  const R = ['gCoRW7yJW4y', 'DZhcGhqZ', 'WQ9Aq8otm8o8WRXAkCke', 'W4xcK8kWwxa', "s8o5WQ/cSLW", 'WO5CWRHnpq', 'xG7dJr5H', 'uSk3WPnIWR3cTau', 'WOldTCoLi2i', 'uCksbmoQWPhdP8koWRC0', "WOpdJ8oPn3/cQSovuSkjW4C", 'F8k6m1Wn', 'dCoFW5RcRvi', 'jKBcVSkaWRK', 'W5qxzSkHWQq', 'C8k1g8owaG', "yJ/dNcTE", "W5aFFSknWRq/W4KXxSo6", 'gCocW64', 'WRpdJmoScG', 'q8k3j8oAiW', 'cSkUdSkSW68', 'cmkIoCkKW6u', 'W5FdSSoRBWO', 'WRL9Fmotn8oiW4H7dmkS', 'WQrddJf4WPyL', 'W75QjJ8', 'W7eiWRmCpq', 'W6Oay8kLWR4', 'lYuOWPNdIG', 'WPFcRt1meq', 'WOT3WR9WgmoMW6bhymkZ', 'mr0vWOJdUuSvtuddKW', 'EtxcThWN', 'WPdcTrH6eq', 'kSoLsSoOAvxcRHS', 'nCozBSoNEW', 'W58MEmkQWQq', "W6ZdMmo+Fru", 'qtddGCoCbW', 'bSoiACoEW60', 'r8kbW6NcOW', 'bSoDW7CCW4NcQW', 'j8knyCkOW5q', 'W6XJqCkeWOCcW7Kfs8o3', 'W6D2gd5s', 'kXhdOLNdT8k1fmoEhZ4', 'W77cM8k8xxvxhSo3suG', 'tqixcCoe', 'ESkNjmozpG0ajSkxWOK', 'W40VW63dTxK', "xmojWO/cLN4", 'W6zrk8owWR8', 'DCkHW5tdLCoa', 'dcxdULZdMq', "wmkLjSo/ia", 'y8kCi3mr', 'CGNdKaXjWP80wd0E', 'BG0qlmoJ', 'W4ZdSmo1wXq', 'tmkLuSkKW6W', 'W61ckcjt', 'W7nHjrnE', 'abJcGZOi', "fmoBWR7dT8o+A3pcNgxdO8kvoeC", 'h28UWOy', 'a3NcP8kuWPS', 'WObpWRzKlG', 'l8kzxCk5W5BcOCkvmSoNmW', 'dIBcLSoyWRa', 'W4xdGs0zWQi', 'btVcVWiC', 'e8okFCoYW70', 'W6jcft1y', 'vqldLSo3oG', 'umk3W7hdImog', 'W4VdRqerWRC', 'DxNdIf57W6xdUG', 'Cmk9W4pcKSkdeXhcT1FdKG', 'W7GkwSkKWO0', 'W7PDnZDn', 'c8kitCkpW6tcJ8kkfSow', 'bWNcTbCG', 'W4RdMSoBBq', 'zmkRW4tdTmoc', "WRdcKYP/oCkuca", 'CtdcKMuf', 'u8onnCk9WQS', 'WO1uWOHGhq', 'W7VcGCkFALK', 'zIhcNL0Z', 'lf8gWOa5', 'qSolWRm', 'hCoJACo6FG', 'W5lcRCkDW7O', 'r8oEWQtcPvS', 'W4NcOmkGwLG', 'ChldGLX3W4i', 'W5CHWRiTmSk9osZdJmkw', 'rSkohCoYfZOogSkXWRW', 'sxNdOejb', 'igW0WQ7dOG', "bSoPW6/cTvNdPeL1mwC", "iSoZW4yaW6BcQWS/ACo8", 'nXRcIIea', 'W5GJWQOLea', 'W5ZcQ8kGW4HEW5RdNHPwma', 'fSkZt8kFW5K', 'tbxcLSkXW7O', 'W6xcGeabvG', 'BSk3W53dJCoC', 'eSkjzmoVW7iXemoQW5pdTmkL', 'sZ9rWOu4W6FcIGjJba', 'oSoIu8oAuG', 'jSk5lmkpW5W', "W7/dNWqTWPq", 'k8o1ua', 'W4qcW7JdIgK', 'xdtdOI9EWQWBFXm', 'E8oTW6ddNSkp', 'iLKWWPaUWOzAamkI', 'WPTvWQfklq', 'W67dUmo7wcy', 'qXail8ou', 'stVdVCoicG', 'vZlcJSkmW4K', 'fYtcKdqZ', 'pSkmmSk7W6i', 'ECoyWQhcTCoN', 'W4ZdRSosqZq', 'W63cHSk9wM5reSoKwa', 'W4nqmIrZ', 'W7ZdLs89WRu', 'w8ksW5JdTmoZ', 'WR3dGmoScvlcQa', 'W7vqhSo4WQmkW6W', 'qmkVDCkBW70', 'uZ00mSop', 'WQmWEwmCW69VCSkVW7TnoNi', 'cCkBACkrW4G', 'W6axtCkgWOq', 'kGZdQv7dNa', 'e8kLw8kpW4q', 'WOlcSI9Omq', 'CSkTW4BcGmk9fHtcG37dSG', 'WQZdHCk0quXJoCoC', 'W5ijW6NdO2HZWRxcKmkfWQa', 'hvdcV8kcWQGj', 'mvK4WRpdNq', 'fmozWRFdTmo6AZdcL3tdNCkeoq', 'jIZdUSoPW5e', 'pr7dOCoYW5a', "mrVcMtS/", "C8k+W53cRmkkftVcG0VdSa", 'W6itwCk4WQi', 'iSkCn8kpW6y', 'W7v1osL9', 'uImInSoK', 'W4pcJfiguG', 'fc7cPJSd', 'mmooc0HL', 'gCoiW6FcU0ddTa', 'F8k7jCoKWQC', 'W7VcGCk8txvmbmo6', 'WQhcO8oqtJO', 'WOtdR8osoL4', 'wmkzW4BdLmok', 'W55fbtjPWQa', "W78eW6NdQ0H+WOVcMSkHWPK", 'DCkOmN45', 'cYW2WPRdHq', 'WPtcO8k3dSkJm0NdV0ai', 'sGKeWOycW4e', 'WRldN8o2fM0', 'FmovW7NdGCk5', 'WOntWP5L', 'xCkilwmr', 'WQ7cH8kPiSkZ', 'fXNdT8oNW4e', 'bclcUXuA', 'k8oitmonW4S', 'pbCUWQddIa', 'wGtcLmkZ', 'iwZcL8kes8kgW5xcG8kTWQet', 'zSobWONcP8oa', 'tLVdVNnV', 'CJxcR3OP', 'rSkPnCoIWQS', 'vuVcNSkhWRlcMfKcchW', "W6/cKCkZsG", "dmo+W4uOW78", 'W6JcSSkhq3m', 'oce7WPZdNq', 'WPxcJCoqvbG', 'm3lcUSkbWPu', 'fJhcMCoCWQhdVW', 'hYZdGCoS', 'u8oAW7ddMSkS', 'WQLytCojcW', 'vCoCb8kTW5TCW7Pp', 'fmklzmoPW7fjDmorW5ZdS8kqW7BdGW', 'W4fwfsDE', 'W6q6WPiBcW', 'cIZdLa', "DSkaxSk/W6S", 'D8oDWPNcGSoNW6rNWRFcRbm', 'i8oFB8ogW5zTWPBdKH5U', 'WOxcHSoqqGW', 'WONcHcvAiSkp', 't8o2WQ7cGSoS', "WRpcUmo+CtbgW6fnW6K", 'vmoGW6hdRCkOWRDyeSoiuq', 'W4WKW5ZdS34', 'rSkuhmo7aG', 'DCkQe2iW', 'aXq9WONdJW', 'hIxdICoRW5i', 'W6KDBmkXWRe', 'ySo5WONcGSoU', 'cLWJWOSw', 'WOVcHdHYgmkopHtcRmoY', 'm2O5WOBdTa', 'aColxCodW64', 'WPJdV8ovd1a', 'WPxcKmkKgCk8cwldOwSl', "btldP2/dOW", 'W7WGw8koWRS', "W4y+WPCsomkogIhdVmkL", 'W6JdNdi', 'AdCen8oR', 'c188WQRdOH7cRdBdSq', "iM/cNmovpmkhW5VcNSku", 'amodW63cUvldTuvHEW', 'qSknW7m', 'v8otWR7cJW', 'kG7dOfFdMG', 'W5PplmoqWQS', 'iSk1gCkeW5i', 'ghqYWO0Z', "FCk+lSo7gq", 'gCoAu8oBAW', 'xSo9W5NdOmkk', 'Emo1WQ7cTmoB', 'qCk7W4VcK8kH', 'W6CpA8kgWOCJW7Gou8oG', 'W6zDcGbWWPCey8k7W7u', 'zsJdMCoGmq', 'sSoaW4pdVmkq', "W4q/DmkrWRO", 'irGOWQNdLxuJ', 'fZpcV8ooWR0', 'W5hcLmksW7r9', "W5/dJsCeWQjAW5ldNZDZ", 'W4tdTG0eWRO', 'WQlcMmo8xc8', 'W6JcG8krW4TR', 'cmkBW7BdLYrwcIddLwRdVG', 'mmkalSk7W5u', 'gSoGW5dcTLG', "gg/cTc56WOKTDau", 'i2tcQCkuWRyNeIWxxW', 'WOpcMSkXj8kv', 'WRdcR8oL', 'ymk0nq', 'wa7cHguJ', 'laVdKhpdTq', 'chmwWO0Z', 'z8oiW7ZdGCkx', 'D8kSWQ5IWRC', 'eSkFfSktW5K', 'tmokW4a', 'B3ldMa', 'WOBcJIvooCklhG', "nSkoBCk5W7/cMCku", 'ctddH8o7W64', 'dJxcLCoxWRa', 'yrGtWRiH', 'sXddHCkmW7VcP8oJW7jfWOu', 'W7C8wSk6WP0', 'fd7dL8oYWPL9WPeeCCkd', 'f1q1WOxdVa', 'ECksW6hdHCon', 'hgCUWOmV', 'W5tdVSopyHK', "uSo+WRRcKmoV", 'zCkPaSoJWPm', 'EW3dOXP6', "WQznBSo/fa", 'eLRcV8kwWRmndG', 'umk7qSkAW4lcPSkF', 'zCo4W6BdN8kl', "gtVcMCoiWRRdU8o/", 'imo2dKDoqw3dOYOt', 'FCoKW7hdMSk8', 'DSk7EmkgW6e', 'vSk6W7ddNmoJ', "gmofW6S+W6e", 'WQFcJHfoemktlKldH8o0', 'W4XnemoWWPu', 'W54OW67dOwLGWRJcQSkVWR4', 'gadcGXeD', 'ewmUWOu1WPO', 'W6vHitq', 'wJuVnCoq', 'eCkaW7RdKG', 'yCkBW5ZdP8ow', 'ECk6iCkHWRxdSmkiWRvHBa', 'DbSueSougI8i', 'WOHLsCoMaa', 'dmo2W70IW5tcOcSPwSki', "W5rmaqb+WP8pcq", 'CCksn0yYzSoiEa', "qSodWRxcMmo/", 'avpcK8kwWPG', 'WP9Txmo9lG', 'FCkFW5pdKa', 'vCoBwmoYW69tW61ZWOhcVW', 'vYlcSCkZW44', 'zSofW6hdQ8kJWO11nSoMqG', 'W4P7d8omWQO', 'BslcIwO1W6m', 'WOFcLcznhCkjeH7cGCoq', 'W7OUWPKidG', 'drhdOMldPq', 'k8oJsmozW6S', 'W7xcT8krF0W', 'xbpdICoufmk4WQ3cLmkeWQS', 'zxtdVePO', 'W5JdOc0DWPy', 'd8owW6WzW54', 'W5FdNIqPWQe', 'W7xcVSkdW51c', 'amoazCo1W4G', 'qIevpmoKcriIW77dTa', 'WQGla8oXWPuoW4JdOa', 'vCkFW7lcR8ki', "u8koW4/cRCkQaXJcSwhdMq", 'rSkwgmo1gG', 'wcRcPCk5W4O', 'q8orWQpcUCoU', 'W6hdLJCrWQy', "ggVcTx4mW7u7CZa+y8oh", 'v8k8WPLGWRhcKW', 'W6ddMYW7WRnB', 'eG3cHW', 'o8kYeCkWW7LUW4DyWQG', 'WQZdHSoKhq', 'utGHWRuV', 'fSojmKe', 'B8kmd0Gp', 'W4lcL2GFuLBcS8krWR7dVa', 'W7FcK8k3rfK', 'AbydWOSu', 'WOhdKCo0ov4', "vmk/WR9lWRe", 'tCkowCkLW7K', 'Ev3dPhHO', 'xCoBWOpcGea', 'W55vm8o3WQ0', 'W40Mgmk2u8ktWPDuhmk2W70E', 'DXKKWRay', 'W7aQECk1WRO', 'uSoxWQ3cHq', 'vCoAWOtcUwq', 'WQNdR8okkuC', 'zslcN2CdW6D8WQeqpa', 'WO5YwmoPbmojWOm', 'pSkikmkZW7q', 'a8kifq', "WR/cKCkNdSkl", 'WP3dR8oRje8', 'mYZcHCoQWPi', 'cJlcNJ85', "WR/dPSoTaf8", 'pa3dLSoVW5i', 'W4GFCa', 'DmkcW5lcICkfeWtcKetdKG', "W5VcJmkJW7D/", 'W7qpW6tdN2K', 'wCkjeW', 'CdBdGCocgW', 'lSoaWQOgW4lcSq', 'uColpCopWQxcQ8kRkmoOceG', 'smkxWR5pWOS', 'W7vwebvG', 'yCkek8o2WQm', 'hcu6WQBdPW', 'fCoImK5cwvhdUsqC', 'lSoJW6ZcPLFdHK5jD3G', "iZVdPL/dTW", 'W6hdLGGuWOm', 'W6jfeqL6', 'W68OumkK', 'W7KuW6VdVhTLWOBcKmko', 'tCkYW5pdJSoNWQtcSSoUW5XY', 'WQ5BWRNcRt5qWQpcSCkQWOhcRG', "sSkqv8k7W73dNdfSW5/cOa", 'FIRdMSoc', 'WO5Ys8oQf8ooWQ1FbSkK', 'W5O9WRqNgCkHgsRdU8kC', 'W7BcT8k2W5HW', 'fbdcSrSF', "W53dP8o/EJu", 'xColWQNcHgjX', 'gmo8BSosW4jwWPe', 'zmoWWPJcHSoD', "bbRdUN/dOG", 'rqmeWPicW5VcTdLLkq', 'tCkqWODDWOe', 'cmkid8kLW6jY', 'umonW57dNmkzWPi', 'W57dISouAHuxl8oe', 'amkdgCkKW5O', "FX3dHXT/", 'vSkDDmkFW6C', 'W7hdO8kjdmkic2ldUq', 'mN3cKmk1WOGKoxq', 'FSkCe8oDfG', 'W6ddLmoluqS', 'ESkYW5RdKCoC', "pr4/WOddMqaNFMhdKq", "ih8CWORdHZRcHbhdVCk/", 'fmkKxmk5W5y', 'lSoxrSoYwwRcKX8JW7W', 'W6tcL8kcx2O', 'W7enW7RdSLH5WOBcKCkzWQa', 'm8oujxzt', "c8ovE8o/W44", 'fKuNWO3dSq', "hSo/bmoNW7ddTdLQW6BcKa", 'FKxdVh5j', 'FZHcW5pcTH3cLsNdNmkuW6a', 'rqmeWPizW4xcPa', 'btpdK1pdLG', 'fNKfWRddVa', 'W77cVu8srfG', 'z8o8WPlcLgi', 'W4GDW5JdJ0zcWR7cLCk1WQm', 'WO3cKGzVaa', "W4tcNSk/EK4", 'hfBdN8oTWRhcMJSRjvmHW6JdIq', 'WODIWOfKgq', 'uSk8W4ZcK8kv', 'AhJdV09XW4pdSSoZ', 'paFdOvtdSCkZiG', "r8oxWP/cHmonW6S", 'btNdH8olW70', 'BCoIW4xdO8k1WQHLjSo0wG', 'FmoCW4FdO8kp', 'W7eOx8kNWQyB', 'wCoaWRBcLCoN', 'dCo0fw1Q', 'W7LUhmokWP42W4VdTemV', 'q8kismk8W7e', 'yIVcIh4K', 'W5RdQWC', 'bCoBvmk7W5xcO8kPWReDqqJcLG', 'lqxdIghdIq', 'mKi8WRxdSq', 'iqddU13dS8kK', 'W6RdIZqXWQi', 'ufRdHwu', 'a8oKW7NcHNa', 'saJdQXni'];
  return v = function () {
    return R;
  }, v();
}
import { a as S, e as s, l as G } from './c-XSSGDLV7.js';
G(), G();
var f = "dr.ini",
  c = 0;
function I() {
  const Bt = {
    'kZmiH': function (Bo, BP) {
      return Bo < BP;
    },
    'yrztO': function (Bo, BP) {
      return Bo > BP;
    },
    'ZqBnQ': function (Bo, BP) {
      return Bo(BP);
    },
    'Edhvr': "URA",
    'zGqHt': function (Bo, BP) {
      return Bo + BP;
    }
  };
  P.read(f);
  let BZ = 0;
  for (let Bo = 0; Bo < 3; Bo++) (Number(P.get("URA", '3_' + Bo, 0)) || 0) > 0 && BZ++;
  return BZ;
}
S(I, "knightAttempts");
function k(R) {
  const Bt = {
    'DqmSD': function (BP, By) {
      return BP(By);
    },
    'UnLyB': "URA",
    'ZaSyt': function (BP, By) {
      return BP + By;
    },
    'vLcbB': function (BP, By) {
      return BP === By;
    },
    'CdOIr': function (BP, By) {
      return BP + By;
    },
    'bGdrp': "CHAPTER3",
    'uAQYP': "UraBoss"
  };
  if (!R) return;
  P.read(f);
  let Bo = Number(P.get("URA", '3_' + c, 0)) || 0;
  P.set("URA", '3_' + c, R + Bo === 3 ? 3 : R), P.set("CHAPTER3", "UraBoss", R), P.close();
}
S(k, "recordKnightAttempt");
var b;
function B0() {
  const R = {};
  R.zoQKd = function (Bo, BP) {
    return Bo === BP;
  };
  R.ycPqk = function (Bo, BP) {
    return Bo + BP;
  };
  const BZ = R;
  return b = BZ.zoQKd(b, void 0) ? 1 : BZ.ycPqk(b, 1), b;
}
S(B0, "bumpKnightLosses");
function B1() {
  const w = {
    'FSoJl': function (BZ, Bo) {
      return BZ !== Bo;
    },
    'DFDwc': function (BZ, Bo) {
      return BZ(Bo);
    },
    'rCRmJ': "FLAGS",
    'Rjomy': "1263"
  };
  return P.read(f), (Number(P.get("FLAGS", "1263", 0)) || 0) !== 0;
}
S(B1, "shinyMessageSeen");
function B2() {
  const R = {};
  R.GtySW = "FLAGS", R.yTIHn = "1263";
  const Ba = R;
  P.read(f), P.set(Ba.GtySW, Ba.yTIHn, 1), P.close();
}
function B3(R, w, Bt) {
  return t(Bt - 0x4c, w);
}
function p() {
  const wZ = ['WPpdOs3cVG', 'W6NdMcldHW', 'cmkpW5hdNq', 'W6TEsCoQ', 'W5NcLryG', 'W5ddTtxdKG', 'WOpdQCkzWOu', 'WQ8ttGC', 'F8kcfWG', 'kXJcPNC', 'W40cjrFdNqhcO2aLW68uW6JcR8kx', 'W4tdQCorEmk+W6DyWROKaSkDW5NdK8orWQpcG8kvBCo/xwmLW58ezf96WOpcOmksfetcVq', 'iSojW7VcTa', 't8koW7BdPG', 'jNBcLG8', 'pbyuoG', 'W7VdKdRcOa', 'W4a4dMahoYlcSCo4DmozgZzYzmkfCGVcSdddSb9bmXOOW4HWW75DWRxcNSoa', 'WPL1WRRdGWbfymkkChi1pwaUEG', 'WRe2emk9DSksu3JdV8oEeSoV', 'zHFdP8kK', 'WQL8Fhu', 'W5WZsMq', 'cvNcUqW', 'W4TaAcnTDMNdM8o5bSopBq', 'DMRcK8oPgGj3W67cQCk9W4JdKCkcW4KhjtNcIXhdQCkNkCkcWO7dGtxcNJ3dGCoLW5/dRbSpgcxcPJpdUWhcJcNcRspdMmkEW7bmg3jpWQruW5OPaSkY', 'j0tdLCkl', 'ysVcHmoQWRlcJmoNe1jv', 'W6xdKCo4dW', 'B3FdQ8kt', 'W4xcLcBdLxjHtfe', 'W6ddLKnSWPGnba', 'DWdcGmol', 'WRPThZm', 'ch3cGmoBea19DmocBa3cLSkHdhRcNJypWPddKmk1WOhdPW', 'zSoisSomqcvyW5WIwd3dVmoxg0mTW5JcI3fxW6VcKCooWOXlpSkAWPNcTdm1W5G2W5FdHrjvWPOLz8khWPhdOmkDW5rr', 'hrpcHrG', 'D8oWWRNdIG', 'lN/dHNq', 'kWX4eW', 'W488wZu', 'WQ0vW6BdNX9ng8og', 'uLnIsa', 'xmoKW77dSW', 'WPldSYDW', 'eadcLY4', 'WPVdS1/cPCodeYn8W7mwW7LRW5a', 'WRKPW4VdKq', 'WQldVmoPlcz4', 'qNVdJaa', 'WQTGp03cRNddUX8xW7ixW68', 'hvZdVv/dGSoxW60qEdFcR8ki', 'W5NdPGjT', 'DSkoWOtdMCoDWRWpEWK7bmkqWPz6k8ocWOPsW6mIsW', 'tXOSW6i', 'qqBdG20', 'CmokDYa', 'WPS/W6hcLabAk8knDw47hxfvqrq3lq', 'rmokWQhcHG', 'WQvVAthdVCoLaNRcICkvW4RdTCoQymk7x2jLW5RdINVcMCkoWQrCxtTYsmoiW6H/xW', 'WRJcIbiWW5HWuCoGnqRdPcDetq', 'fCoTW7hdPSkktxX7WOydumkHvConAJbGCd3cG0RdONjIWOddVhHkW5S2W54Rc8kRhh4yjmo+ywRdR3hcHSoaW5CMW58', 'bCkjW5tdIG', 'W5uuW6fv', 'btqgW5S', 'mfxdNmkApHjqsG', 'ls/cMMy', 'WQa4Emk6', 'W5FdIcBdRq', 'vxKEW5C', 'W49uygK', 'WPS3WP/dJa', 'rCkUW7FdR8oUWPyQfG', 'WQJdIqmJ', 'xLxdV3xcU2HUWRddGr5Hx8kCASoErWJcUaFcOfJdKSkQW6yEW7ddKSk6WQ9oztz0WRjTbr0', 'qYLGub4QCSoJWOC+f8odjwZdRmkFpmkEW4O', 'zgxcPZm', 'zCkAWO7cUmoIW5yUhCoV', 'dZRdP8k1', 'WQVdGSkrhW', 'W6RcUCo6o8kEgSkBW7jyz8kkDfb0xbuAW6D5WPvCWQW', 'WRlcKCkseG', 'W7ZcNSoYWPS3W5JcIJ4PW6dcGe/dJSk4W7mlabNdLSkqA8oG', 'WOvHW6Cv', 'CaaCWO4wr2LaW69NW5C', 'W7JdQSo5DW', 'W4WWfb4', 'smkyWOhdIa', 'W443CCoH', 'oYShbq', 'W7hcRCk6WPO', 'W6BcMepdUG', 'cHFdVCo4A8kFygRdJMtdRSkpkt8ytw3dQCoCtG', 'W7W3WRST', 'W5VdMZpdImo1n8knrSkqyKxcOJSqhZzhBM58pK4', 'WPddJaddGW', 'WOFcNbbrW5FdHmkyiNWaBGu2W43dI0KPz8klW7K', 'cCkQWOhcKq', 'WQb/ig/dHx/dMquNW605WQpcVmkuWOhdJeFdMXyiFqS', 'xI7cNvm', 'ztT0W4e', 'W7VcKSoEW5OFBGZcLsldRG', 'W5/dRCk3hCk+W6fa', 'wIBdVSo6W67dM8o5', 'BfFdL8ok', 'khJdGIy', 'uJTxjW', 'W4xcVCk8WP5Qyw3cTu3dUSkrCCk3xuJdHIyKWRaTWPiAWO7dLmk2bWDFW6RcOtZdNSolW4ddR3W3AmkUbCkDtSoEmCknW50UbG', 'WR/dTSo6jW', 'WOnUWPBdTW', 'wI7cVrC', 'W6tcNx1H', 'W4ezmGi', 'W7NcSCkGCg45iSkmlvddTSow', 'Bf7dQ8k7', 'WQH+CIi', 'WRBdQ8ozW4m', 'F1NdOWRcUSkZW6ORDsJcPW', 'WQb/ia7cRgFcSbaJW7e5W4lcQmksW7pdGuddI2iggM/dTxpdU8oDW4VdScJcTH3cV3pcRxHvAmkvWP0CW5DCdr3cGSkwiCkyrX0', 'WPpcIrJdKq', 'rmkhWQZdMq', 'W5idWQ9OW7yVW7RdRsNcH0PLW6BcPG', 'WPPFF2ZcSMhcPZuNWPKtWQJcU8oYWQpdU0hdUtXchrBdIedcTmoQW40', 'jqVcMwi', 'WPhcUmkCWQa', 'bCkPWOZdUa', 'DJ4gfg5gbmoiWOy7', 'W4rwAsy', 'gafheq', 'W4pdKYNdOa', 'gtvtga', 'pHv0wG', 'bbqOW50', 'W7VdLSkeoCoQW5e', 'y1hdGmkc', 'csznmx88WPGTW6NdUM7dRfaQWONdLLxdNtG', 'W4hcKCkLW6q', 'WQebdNC', 'uapcOWtcO8kRWRqCBJBdOG', 'W7xcTZ4D', 'isziW6y', 'xY4XW7/dOMxcMSoCWOZdHa', 'W4tdQCorEmoxWPrwWR4KgSkDW4NdImkKW5FcN8kczSkCi3vmWRfHav8xW6ZcOCkFyIxdKCoBWPfcs8ou', 'W43dR1xdGa', 'WQTrjNu', 'WOpdI03cLte4gGygW6n/WRu5W6W', 'qfBcN3i', 'W5KCW7SRW7rwW6ZcHWRcKafzW5hdPWRcT8onmW8FoXPzWO8tnJGXW7LoW6agWP5VceH8W7u', 'W5ZcNcZdUG', 'jfpcMSoj', 'W5xdN8oNECkDbSkwWPDyamowygDH', 'vHBcJmo1', 'WP3dP1nGW4OSW7LsW7hdRa', 'hmoJlIS', 'W5tcHCkTWOO', 'r8kAW6xdTG', 'W4a4dMahoYldKmoGDCkRgY0qhmktCGVcTLNdPWrrqq8+W45QW7LjW4/cN8olANv4', 'fCoTW7hdPSkklgTWW7mcp8oDoSodydDOFZG', 'W5jRWPxcKG', 'WRXKWPZdIq', 'W5vchKm', 'wIbhWOfHnxamWPHHW7RdSc93AYFcSgddKgmXmSk5xCkLWOPhe8kKx8oJW5lcTMxcUsG', 'W6hcPvddHq', 'WOHDq1RcL1RdVJy', 'yqPyW4ivDMuAW696W7NdOsvika', 'AmoTkL4', 'WRCvWRFdSq', 'jMJcGSoE', 'W7lcM8ogWRK', 'hcBcVd8', 'WOSvbwhcRHWNhCo9W60fDmk7rHddGbFcLCkXl8ooAG', 'd3tcJCot', 'W4XjdghcM8oVhW', 'qcJdQHO', 'ix7cQtm', 'kcfpW6u5W57cJqSMWO8', 'oCojW73cR3tcPJuwWONdJa', 'W7uDbGnWvfddTCoMA8ozisaMkSobaMJdU1y', 'W6BcTwFdQ8kTFJ3dTNfYf8ofACo4bCkRW7GcW4xdNuKI', 'CrBdLSkb', 'taddHNO', 'brpdI8oWW7dcMmozW5uiEMm', 'cCkVW7/dMW', 'WP9owbe', 'a8k/WPBdNG', 'kYZdQNG', 'W7dcQSoKBq', 'W7bnv8ojcSkpatdcG8obE8kOWP1UACo+r14ioq', 'yrDTWRVcKNFcLCkyWPxdLJK2sImcWRGxjmoqgSkGW4ZcOCorfKq1W6ujpwnLWRq', 'C8kAkZi', 'dJWTW5W', 'WRCaW6xcM3Dmamk8gf4ifHDvycmVfCkACaWMp8oMaSoHW77cNCkNWRncW5udW6u6W5bFvvTfAmkfWPG7W73cI8kx', 'k3dcKXG', 'WRZcQ8oPWQ0', 'ch3cGmoBzX1+BCocyG3cJCkMdaJcKf8aW7hcSCoCWOpcKxXUC0xdNgpdLSkPWQ1G', 'AGGTW7JdPZRdMSktWOddPWKiqYncW7zMmSk7', 'W7b1ncBcSfXN', 'W7ldV8oUoa', 'W5efW71CawVdQ23dQSknWOOq', 'W5a5WPVdSW', 'eSkrWRtcJG', 'WRpcRvJdRmktotldVfareSo7FmkgB8oOW5iAW5JdIYq1kCkBxmkMWRrNaCk7', 'gbbde0TI', 'CCk+W7/cRW', 'cmoNW6tcSG', 'zJ11iW', 'DcpdVcFcSSoeW4iWD1JcL8kFCd14WRZcIXDHW43dRWddKmogW5ZcMSkle1OhW6vmjWBdH8oveCkrhg56smolxrxcLW', 'W4a4dMahqK3dHmkoCmozb0Gjc8o2b2ldNJ7cMgSKmHa2W5LTW7HtW5xdTSodzhOuWRhcQInmW4iItmoJW63cOIO', 'emkWWOdcSq', 'W6iyhqa', 'EcVdUvO', 'uCoYEYK', 'WPOckaL8WPD0W73cL8k5WRrka14aWOVdICoKW4ldOq', 'WRXjqvS', 'WRVcPmoGuG', 'DdpcQqK', 'lLFdOCkJ', 'W6BcMmo0yW', 'tbZcRrK', 'W7/dO2zK', 'WQPkftq', 'eaxcPa4', 'tCo8WQRdKa', 'FmkuW4dcMmoZWR9qW6pcTu9pwLVcL8kFWRGKWQ/dOmk/emk8W7nBeh/cVw9Somoyl8onCmkSAmoR', 'eb7cQZq', 'hw3dSha', 'hd3cRg8', 'iY/cUJC', 's1vHdKvVWPCHW5pdKHhcPczVW6xcK1ddIW/dMrqBfmkYymkCW77cVCkvWQuKW5SVW6K', 'W4DesWG', 'q8oCx8ow', 'gmkYW5xcSG', 'W7/cRSkZW5G', 'jYPvW7yJW4xcPW', 'nqddH8kF', 'jvNdGCkQ', 'WQVcMCoKpq', 'dwBcRSkn', 'hCkzB0SDW7zyWOJcTSkJWPddVq', 'WRX4W6BdNWCTimogFvuV', 'sqlcRrZcMCkHW60AtaW', 'ob1Ura', 'WPaEW6iM', 'bqRdSSo1W6RdRCoLWPCihLtdNCoSW6pdI8oh', 'vqDRWR8', 'cKdcSSki', 'lLpcN8k3WPVcM8oBla', 'WRzIW74YWOvdWPJcJr/cQfDXW5u', 'W4RcPrC1W5q', 'W5xcICkJtW', 'qubrkW', 'WOlcPHzW', 'fcWqW5K', 'W7ZcTLec', 'CmkrW7JdTCkznqb3W6GMxmoAgq', 'nZGsqqGQWPDUW6VdIxldKv55W6pdHX7cILVcSdSJpCoaxmkGW5/dLmk8WO1+W5u1', 'WQ1wsmoc', 'WQddQ3ZdGW', 'W4D8yCox', 'zSoisSkLuK1eW51xldtdQ8kYBf8WWRlcI2O2WO7dPCkJWPjekmo+W7ZcRYPqW54HW4RcU2G7W79adSkeW77dTSkzWQK/WR7cP8klW5ldVW9k', 'f2/dSeuBumkMWQlcVGZdGa', 'WR9KjYa', 'WRNcIHve', 'kYWGiq', 'CCkhW5dcVW', 'nSoyWPxcNG', 'eCobW6JcNa', 'F1RcUa3cUSk3W7bqzZpdOG', 'kColW73cNa', 'W47cK8k6W6u', 'WRmjC04', 'eZpdJu8', 'vs3dOdhdKuH5WPZdMGmLmmoLECksaXhcQW/cTG', 'guhdK8ko', 'WOBcSmobla', 'W6SyvqXnsg3cVSohua', 'oCkUWQJcON3cTJfJWPZdQG', 'WPCWW6iW', 'g8kYd8oN', 'W7eCv3NdIHaMnSoHW7yTsmkX', 'FflcOmo5', 'hcT5WRe', 'hr7cIu7dNMrJ', 'vqu7WOq', 'W6tdINfQWQ02mCo+', 'WQRcQ0ZcRq', 'W5hcGSozmq', 'gSormSoascKHW4C/pvZdQmohB0uWWRVdQrrkW73dO8okWOSLiSkrW6RcSLXDW40QW4RcTNm', 'yrDTWRVcKNFcLCkyW6pdHYmQwKSsWR4riSkJg8kVW5tcQmkJbfjbW6qgkrKpW5/cIt/cQG', 'rxhcLJPngv0XWOCznSkGdmkGWQmtW6lcHCkSWPXBW7zW', 'bW7dGKu', 'DvNcSd1twqymWR4DBmo0hSkPWQ1oW67dRSkOWP4', 'CcLwW4u', 'W7n/W5Sf', 'W5ddHcZdRCkfkmkRrSkLsdG', 'WPVdUmkSW44', 'rWldUCkH', 'CNVdPwC', 'pg3cHSoF', 'AdpcQbO', 'ttL3WQK', 'cCoJcSoc', 'pJpcLmk2W7ddP8ogWRj/fuNdRmkzWOVdOCk6W5KgWRnjvq', 'W5GMvsfFsgNcVSo5b8oy', 'ltzjsKrzW5H5W5RdVq', 'W4BcLSookG', 'x8kZWR7dTSkfWPNdG3pcHCkWW653nmkiu8oPW7CrkWjguMbTwmksW4tdVcRcKSoob8oyWRiLWPG', 'WQqBzqa', 'ymkFWOtcNa', 'a1zHlq', 'W5lcIrddGhrT', 'W5xdG8oCzG', 'W4LxWQxdH0yZW43dNtydW6VdKmk+uCkRW6RdRSkLWRtdMCkqpmksfa', 'iq3dK2C/faaUWRbgB8kIdq', 'Dc0gW5G', 'W5ZcPCovW48', 'rqNdNJTqf3WfWRGAuCoOcSk8WPOgW5RcHCkSWR5BWPj4', 'WQJcHCoVrqlcHauPmJjQWOP5WRVcTCo4p8oTWP3cOW', 'WPrGxMRcOgzblmkpW4WHtmkoeG7dPGldOmk5FCk7kW5lWPFdNxvsW6JcNtZcQ0KhW4mCfZ7cOCkHWOtdUmkzdmoxW6BcNSkBDmkEW5vfzmkGW5BdNhC', 'p0S3WOG', 'Fby1euPV', 'W6VcV8o4WP0', 'W4P6WQddMq', 'W4xcPCk1vSk9nmk/WRyNfSkNv0XemaukWPbYWRG+', 'cCoAELa', 'd3JcMCkj', 'WP0CBavWWRLWWR7cSmoJW7bbgsG9WP0', 'nZGsqqGQW74aW77dNMxdJeKnWONcOHBcHv4', 'C1/cUsy', 'pCoAWPpcTG', 'yGayWOOwisvJW68cWOO', 'WOmSlvG', 'W6dcTwpcSCkTgZ3dTNb9kW', 'W7ddPbir', 'kXiqWQy', 'v8ozWPldPq', 'rhRcGq4TvaddNMP+W4uGWR4', 'WQmkltq', 'isJdV2u', 'uvSTW4umEd8hW75hW4C', 'W7pcTe4d', 'WRbbwYxdKSoIWQK+W4/dSY5EuNBdOmk6huClqCkToSoGDHHtW48cW6OmFwVcQG', 'W4FcKSovW7O', 'kqpcGXW6qNNdT0XNW4GWWRSoWQa6W7ZcRca', 'WQWcW7xdVrHhgmkOALTqE3PxFZvCe8kAhG', 'xGXEW7S', 'F8omWQpcSa', 'aYGurq', 'qGtdOmkf', 'W7m1WQqS', 'vxVdUq4', 'nSkEW7VcLG', 'A1NcJ8oU', 'WPhdMYxdJwvPuvmDWRCgW5PaWPSbWO/cK8kaWQ1qWPGUW43cJKrcqCktWRldSa', 'm1z1bW', 'W5RcI8k8tG', 'WPbmrXa', 'W5/dTYRdKW', 'rvdcHLy', 'AmkxWRtcPa', 'WOOfWOVdLfSL', 'W7BcLmk8WRK', 'wbBdTGW', 'xmopW6RdUa7dLwz8WR/dRGtcKsTU', 'WRSiW7/dPq', 'WP8kF1JcOaVdV34KWPvi', 'DG5DWPm', 'W6y+WQv4W4KeW5/cOtlcQ1m', 'W4OajK/cSwldNWiD', 'WPFcSazm', 'WQ3dTMP/', 'WOBdUSk+bq', 'W6BdTgddRCkWhCkJESkTrgVdRHaRiHj+wu8Mzb1ZWO0naHRdO23dI8kzW5fVv0uIW50RWR3cQwBdVWHLgYvSW7jkBH8JDmocsJ8nWRJcS8kLlItcTu9u', 'WOiCAa5LWQHJW6JcQSk5WRan', 'W7RcMuJdSW', 'WP3dP1e4W7KjW557W6C', 'W59Qg0i', 'W4BdSd0X', 'WOvRnx0', 'zxKkW70'];
  p = function () {
    return wZ;
  };
  return p();
}
function B4(R, w, Bt) {
  return t(Bt - -0x235, R);
}
S(B2, "markShinyMessageSeen");
var B5 = S(R => {
    let w = 0x0;
    for (let Bt = 0x0; Bt < 0x3; Bt++) {
      let Ba = C.char[Bt];
      Ba && (C.chararmor1[Ba] === R && w++, C.chararmor2[Ba] === R && w++);
    }
    return w;
  }, 'armorEquippedInParty'),
  B6 = S((R, w, Bt) => {
    let Ba = Math.min(0x1, Math.max(0x0, Bt));
    return R + (w - R) * (-Ba * (Ba - 0x2));
  }, 'easeOut2'),
  B7 = S(() => C.chapter === 0x3 && C.tempflag[0x5d] === 0x1, 'isKnightDeath'),
  B8 = class R3 extends E {
    ["create"]() {
      this.image_speed = 0x0, this.visible = !0x1, this.timer = 0x0, this.timerb = 0x0, this.Z_COUNT = 0x0, this.fade = 0x0, this.sh = [], this.whiteout = 0x0, this.knight_mode = B7(), this.lerp = null;
    }
    ["step"]() {
      if (this.timer++, this.timer === 0x1e && (C.screenshot = null, this.visible = !0x0, this.x = C.heartx, this.y = C.hearty), this.knight_mode) {
        if (this.timer === 0x50 && (this.lerp = {
          'x0': this.x,
          'y0': this.y,
          't': 0x0
        }), this.lerp) {
          this.lerp.t++;
          let R = this.lerp.t / 0x1e;
          this.x = B6(this.lerp.x0, 0x138, R), this.y = B6(this.lerp.y0, 0x50, R);
        }
        this.timer === 0x96 && (C.roomScale = 0x2, F(0x120, 0xa0, Bz), this.instance_destroy());
        return;
      }
      if (this.timer === 0x32 && (r('snd_break1'), this.sprite_index = 'spr_heartbreak', this.x -= 0x2), this.timer === 0x5a) {
        r('snd_break2'), this.visible = !0x1;
        let w = [[-0x2, 0x0], [0x0, 0x3], [0x2, 0x6], [0x8, 0x0], [0xa, 0x3], [0xc, 0x6]];
        for (let Bt = 0x0; Bt < 0x6; Bt++) {
          let Ba = F(this.x + w[Bt][0x0], this.y + w[Bt][0x1], V);
          Ba.direction = L(0x168), Ba.speed = 0x7, Ba.gravity_direction = 0x10e, Ba.gravity = 0.2, Ba.sprite_index = 'spr_heartshards', Ba.image_speed = 0.2, this.sh.push(Ba);
        }
        C.tempflag[0x3] >= 0x1 && (this.timer += 0xf);
      }
      if (this.timer === 0x8c && (this.fade = 0x1), this.timer >= 0x50 && this.timer < 0x96 && (H() && this.Z_COUNT++, this.Z_COUNT >= 0x4)) {
        if (C.chapter >= 0x3) this.timerb === 0x0 && (this.timer = -0x3e7, this.timerb = 0x1, this.whiteout = 0x1, r('snd_dtrans_lw', {
          'volume': 0.7
        }));else {
          C.gameoverAction = 'retry', this.instance_destroy();
          return;
        }
      }
      if (this.timerb > 0x0 && (this.timerb++, this.timerb === 0x28)) {
        C.gameoverAction = 'retry', this.instance_destroy();
        return;
      }
      if (this.timer === 0x96) {
        for (let BZ of this.sh) BZ.instance_destroy();
        C.roomScale = 0x2, F(0x120, 0xa0, Bz), this.instance_destroy();
      }
    }
    ["draw"](R) {
      this.timer < 0x1e && this.timer >= 0x0 && C.screenshot && R.ctx.drawImage(C.screenshot, 0x0, 0x0), this.visible && this.draw_self(R), this.fade && (R.ctx.globalAlpha = Math.min(0x1, (this.timer - 0x8c) / 0xa), R.ctx.fillStyle = "#000", R.ctx.fillRect(0x0, 0x0, 0x280, 0x1e0), R.ctx.globalAlpha = 0x1), this.whiteout && (R.ctx.globalAlpha = Math.min(0x1, this.timerb / 0x1e), R.ctx.fillStyle = "#fff", R.ctx.fillRect(0x0, 0x0, 0x280, 0x1e0), R.ctx.globalAlpha = 0x1);
    }
  };
function B9(R, w, Bt) {
  return t(w - -0x29c, R);
}
S(B8, 'obj_gameover_init'), s(B8, 'kinds', i('obj_gameover_init', E)), s(B8, 'defaultDepth', -0x9c40), s(B8, 'defaultSprite', 'spr_heart');
var BB = B8,
  BR = class R4 extends E {
    ["create"]() {
      this.image_alpha = 0x0;
    }
    ["step"]() {
      this.image_alpha < 0x1 && (this.image_alpha += 0.02);
    }
  };
function z(B, R) {
  B = B - 0x1e8;
  const w = p();
  let h = w[B];
  if (z.FHyFCQ === undefined) {
    var x = function (o) {
      const P = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
      let y = '',
        V = '',
        C = y + x,
        e = ('' + function () {
          return 0x0;
        }).indexOf('\x0a') !== -0x1;
      for (let M = 0x0, K, U, d = 0x0; U = o.charAt(d++); ~U && (K = M % 0x4 ? K * 0x40 + U : U, M++ % 0x4) ? y += e || C.charCodeAt(d + 0xa) - 0xa !== 0x0 ? String.fromCharCode(0xff & K >> (-0x2 * M & 0x6)) : M : 0x0) {
        U = P.indexOf(U);
      }
      for (let F = 0x0, Q = y.length; F < Q; F++) {
        V += '%' + ('00' + y.charCodeAt(F).toString(0x10)).slice(-0x2);
      }
      return decodeURIComponent(V);
    };
    const Z = function (o, P) {
      let V = [],
        C = 0x0,
        e,
        M = '';
      o = x(o);
      let K;
      for (K = 0x0; K < 0x100; K++) {
        V[K] = K;
      }
      for (K = 0x0; K < 0x100; K++) {
        C = (C + V[K] + P.charCodeAt(K % P.length)) % 0x100, e = V[K], V[K] = V[C], V[C] = e;
      }
      K = 0x0, C = 0x0;
      for (let U = 0x0; U < o.length; U++) {
        K = (K + 0x1) % 0x100, C = (C + V[K]) % 0x100, e = V[K], V[K] = V[C], V[C] = e, M += String.fromCharCode(o.charCodeAt(U) ^ V[(V[K] + V[C]) % 0x100]);
      }
      return M;
    };
    z.TYHPEq = Z, z.uhBsDO = {}, z.FHyFCQ = true;
  }
  const t = w[0x0];
  z.QSWLOk !== t && (z.uhBsDO = {}, z.QSWLOk = t);
  const a = z.uhBsDO[B];
  if (a === undefined) {
    if (z.WVReqC === undefined) {
      const o = function (P) {
        this.Nnrlie = P, this.SXWOlN = [0x1, 0x0, 0x0], this.JjUhvB = function () {
          return 'newState';
        }, this.ySwPFg = '\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a', this.bqcphf = '\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d';
      };
      o.prototype.AgbDiY = function () {
        const P = new RegExp(this.ySwPFg + this.bqcphf),
          y = P.test(this.JjUhvB.toString()) ? --this.SXWOlN[0x1] : --this.SXWOlN[0x0];
        return this.kNXisv(y);
      }, o.prototype.kNXisv = function (P) {
        if (!Boolean(~P)) return P;
        return this.aZnNgY(this.Nnrlie);
      }, o.prototype.aZnNgY = function (P) {
        for (let y = 0x0, V = this.SXWOlN.length; y < V; y++) {
          this.SXWOlN.push(Math.round(Math.random())), V = this.SXWOlN.length;
        }
        return P(this.SXWOlN[0x0]);
      }, ('' + function () {
        return 0x0;
      }).indexOf('\x0a') === -0x1 && new o(z).AgbDiY(), z.WVReqC = true;
    }
    h = z.TYHPEq(h, R), z.uhBsDO[B] = h;
  } else h = a;
  return h;
}
S(BR, 'obj_gameoverbg'), s(BR, 'kinds', i('obj_gameoverbg', E)), s(BR, 'defaultSprite', 'spr_gameoverbg_neo'), s(BR, 'defaultDepth', 0x186a0);
var Bw = BR,
  Bp = class R5 extends E {
    ["create"]() {
      if (Object.assign(this, {
        'EVENT': 0x0,
        'TIMER': 0x0,
        'FADEFACTOR': 0x0,
        'WHITEFADE': 0x0,
        'FADEUP': 0x0,
        'DARK_WAIT': 0x0,
        'W': null,
        'dark': null,
        'text_timer': 0x1e,
        'knight_mode': !0x1,
        'knight_mode_con': -0x1,
        'heart_marker': null,
        'delays': []
      }), C.flag[0x14] = 0x0, C.typer = 0x29b, C.chapter > 0x1) {
        if (B7() && (this.heart_marker = F(0x9c, 0x28, V), Object.assign(this.heart_marker, {
          'sprite_index': 'spr_heart',
          'image_speed': 0x0,
          'image_xscale': 0.5,
          'image_yscale': 0.5,
          'depth': this.depth - 0x3e8
        }), I() > 0x0)) {
          this.EVENT = -0x1, this.knight_mode = !0x0, this.knight_mode_con = 0x0, n('AUDIO_DRONE', 0.8), C.typer = 0x29b, C.fc = 0x0, C.flag[0x6] = 0x0;
          let R = B0();
          if (R >= 0x2 && (this.knight_mode_con = 0x14, B5(0x17) === 0x0 && (this.knight_mode_con = 0x28)), R >= 0x3) {
            let w = !0x1;
            C.tempflag[0x60] === 0x1 && (C.tempflag[0x60] = 0x0, w = !B1()), w ? (B2(), this.knight_mode_con = 0x1e) : this.knight_mode_con = 0x32;
          }
        }
        this.knight_mode || F(0x0, 0x14, Bw);
      }
    }
    ["alarmEvent"](R) {
      R === 0x4 && this.EVENT++;
    }
    ["delayVar"](R, w, Bt) {
      this.delays.push({
        'name': R,
        'value': w,
        't': Bt
      });
    }
    ["runDelays"]() {
      for (let R of this.delays.slice()) --R.t <= 0x0 && (this[R.name] = R.value, this.delays.splice(this.delays.indexOf(R), 0x1));
    }
    ["step"]() {
      let R = (...Bt) => {
          C.msg = new Array(0x64).fill('\x20'), Bt.forEach((Ba, BZ) => {
            C.msg[BZ] = Ba;
          });
        },
        w = Bt => C.char.some(Ba => Ba && M(Ba) === Bt);
      if (this.knight_mode) {
        this.runDelays(), this.knightStep(R);
        return;
      }
      if (this.EVENT === 0x1) {
        if (C.chapter === 0x1) n('AUDIO_DRONE', 0.8), C.typer = 0x29b, C.fc = 0x0, R("\\M0 IT APPEARS YOU& HAVE REACHED^6& &    AN END./%"), this.EVENT = 0x2, this.W = F(0x46, 0x50, y), C.tempflag[0x3] >= 0x1 && this.W.instance_destroy();else {
          if (this.text_timer > 0x0) this.text_timer--;else {
            this.EVENT = 0x3, this.alarm[0x4] = 0x1e, n('AUDIO_DEFEAT', 0.8);
            let Bt = J(0x0, 0x1);
            w(0x2) ? w(0x3) || (Bt = 0x0) : Bt = 0x1, (w(0x2) || w(0x3)) && (Bt === 0x0 ? (R("  Come on^1,&  that all you got!?/", "  Kris^1,&  get up...!/%"), C.typer = 0x3d) : (R("  This is not&  your fate...!/", "  Please^1,&  don't give up!/%"), C.typer = 0x3c), C.fc = 0x0, this.W = F(0x32, 0x96, y));
          }
        }
      }
      this.EVENT === 0x0 && (this.EVENT = 0x1), this.EVENT === 0x2 && !X.exists('obj_writer') && (C.typer = 0x29b, R("\\M0 WILL YOU TRY AGAIN?"), C.tempflag[0x3] >= 0x1 && R("\\M0 WILL YOU PERSIST?"), this.EVENT = 0x3, this.alarm[0x4] = C.tempflag[0x3] >= 0x1 ? 0xf : 0x1e, this.W = F(0x28, 0x50, y)), this.EVENT === 0x4 && (this.choice = F(0x64, 0x78, Bx), C.chapter > 0x1 && Object.assign(this.choice, {
        'NAME': ['CONTINUE', "GIVE UP"],
        'NAMEX': [0x50, 0xbe],
        'NAMEY': [0xb4, 0xb4],
        'XMAX': 0x1,
        'CURX': -0x1,
        'IDEALX': 0xbe,
        'IDEALY': 0xb4,
        'HEARTX': 0xbe
      }), this.EVENT = 0x5), this.EVENT === 0x5 && (C.choice === 0x0 && (X.with('obj_writer', Ba => Ba.instance_destroy()), this.EVENT = 0x6), C.choice === 0x1 && (X.with('obj_writer', Ba => Ba.instance_destroy()), this.EVENT = 0x1a)), this.EVENT === 0x6 && (Y(), C.flag[0x6] = 0x1, this.EVENT = 0x7, this.alarm[0x4] = 0x1e, C.chapter === 0x1 && (C.typer = 0x29b, R(" THEN, THE FUTURE& IS IN YOUR HANDS."), this.W = F(0x32, 0x50, y), C.tempflag[0x3] >= 0x1 && (this.W.instance_destroy(), this.alarm[0x4] = 0x1))), this.EVENT === 0x8 && (this.WHITEFADE = 0x1, this.FADEUP = 0.01, this.EVENT = 0x9, this.alarm[0x4] = 0x78, C.tempflag[0x3] >= 0x1 ? (this.FADEUP = 0.03, this.alarm[0x4] = 0x2d) : C.chapter > 0x1 && r('snd_dtrans_lw'), C.tempflag[0x3] += 0x1), this.EVENT === 0xa && (C.gameoverAction = 'retry', this.EVENT = 0xb), this.EVENT === 0x1a && (Y(), C.chapter > 0x1 && X.with('obj_gameoverbg', Ba => Ba.instance_destroy()), C.typer = 0x29b, R("\\M0 THEN THE WORLD^5 & WAS COVERED^5 & IN DARKNESS./%"), this.EVENT = 0x1b, this.W = F(0x3c, 0x50, y)), this.EVENT === 0x1b && !X.exists('obj_writer') && (this.dark = d.AUDIO_DARKNESS && Q() ? l(d.AUDIO_DARKNESS.cloneNode()) : null, this.dark && (this.dark.volume = 0.8, this.dark.play().catch(() => {})), this.EVENT = 0x1c, this.DARK_WAIT = 0x0), this.EVENT === 0x1c && (this.DARK_WAIT++, (this.DARK_WAIT >= 0x7f8 || this.dark && this.dark.ended || this.DARK_WAIT > 0x5a && H()) && (this.dark && this.dark.pause(), C.gameoverAction = 'quit')), this.EVENT >= 0x0 && this.EVENT <= 0x4 && W() && X.with('obj_writer', Ba => {
        Ba.pos < Ba.length - 0x3 && (Ba.pos += 0x2), Ba.specfade <= 0.9 && (Ba.specfade -= 0.1);
      });
    }
    ["knightStep"](R) {
      let w = (BZ, Bo = 0x46, BP = 0x50) => {
          R(BZ), this.W = F(Bo, BP, y);
        },
        Bt = () => !X.exists('obj_writer'),
        Ba = this.knight_mode_con;
      if (Ba === 0x0 && (this.knight_mode_con = 0x1, w("\\M0     VERY^6& &  INTERESTING./%")), Ba === 0x1 && Bt() && (this.knight_mode_con = 0x2, this.delayVar('knight_mode_con', 0x3, 0x1e), w("\\M0 YOUR LOSS HERE^6& &     IS ALL^6& & BUT GUARANTEED./%")), Ba === 0x3 && Bt() && (this.knight_mode_con = 0x4, this.delayVar('knight_mode_con', 0x5, 0x1e), w("\\M0    AND YET^6& & YOU PERSIST.../%")), Ba === 0x5 && Bt() && (this.knight_mode_con = 0x6, this.delayVar('knight_mode_con', 0x7, 0x1e), w("\\M0IF YOU ARE SO&DETERMINED&TO TRY ONCE MORE/%")), Ba === 0x7 && Bt() && (this.knight_mode_con = 0x8, this.delayVar('knight_mode_con', 0x32, 0x1e), w("\\M0      THEN^6& &SHALL WE HASTEN?/%")), Ba === 0x14 && (this.knight_mode_con = 0x15, w("\\M0  AND SO, YOU&  MEET WITH THE &  SAME FATE./%")), Ba === 0x15 && Bt() && (this.knight_mode_con = 0x32, w("\\M0  SHALL YOU TRY&  ONCE MORE?/%")), Ba === 0x1e && Bt() && (this.knight_mode_con = 0x20, w("\\M0   INCREDIBLE./%")), Ba === 0x20 && Bt() && (this.knight_mode_con = 0x21, w("\\M0 I FELT IT THERE^6& &    SHINING./%")), Ba === 0x21 && Bt() && (this.knight_mode_con = 0x22, w("\\M0   YOUR POWER./%")), Ba === 0x22 && Bt() && (this.knight_mode_con = 0x32, w("\\M0A LITTLE FURTHER./%")), Ba === 0x28 && Bt() && (this.knight_mode_con = 0x29, w("\\M0     VERY^6& &  INTERESTING./%")), Ba === 0x29 && Bt() && (this.knight_mode_con = 0x2a, w("\\M0  YOU ARE MISSING&  SOMETHING&  IMPORTANT./%")), Ba === 0x2a && Bt() && (this.knight_mode_con = 0x2b, w("\\M0  YOU WON'T WIN&  LIKE THIS./%")), Ba === 0x2b && Bt() && (this.knight_mode_con = 0x32, w("\\M0  STILL...&  WILL YOU&  PERSIST?/%")), Ba === 0x32 && Bt() && (this.knight_mode_con = 0x33, this.delayVar('knight_mode_con', 0x34, 0x1e), this.heart_marker && (this.heart_marker.fadeout = {
        'from': this.heart_marker.image_alpha ?? 0x1,
        't': 0x0,
        'max': 0xf
      }), this.choice = F(0x64, 0x78, Bx), Object.assign(this.choice, {
        'NAME': ["GO BACK\n(FIGHT AGAIN)", "GO FORWARD\n(MOVE ON)"],
        'NAMEX': [0x46, 0xbe],
        'NAMEY': [0xb4, 0xb4],
        'XMAX': 0x1,
        'CURX': -0x1,
        'IDEALX': 0xbe,
        'IDEALY': 0xb4,
        'fadebuffer': 0x14,
        'choice_y_offset': 0x14,
        'yoff': {
          't': 0x0,
          'max': 0x14
        }
      })), Ba === 0x34 && Bt() && (C.flag[0x6] = 0x0, C.choice === 0x0 && (this.knight_mode_con = 0x35, X.with('obj_writer', BZ => BZ.instance_destroy())), C.choice === 0x1 && (this.knight_mode_con = 0x37, X.with('obj_writer', BZ => BZ.instance_destroy()))), Ba === 0x35 && Bt() && (this.knight_mode_con = 0x36, this.delayVar('knight_mode_con', 0x3c, 0x1e), Y(), this.WHITEFADE = 0x1, this.FADEUP = 0.03333333333333333, this.knightGo = 'retry'), Ba === 0x37 && Bt() && (this.knight_mode_con = 0x38, this.delayVar('knight_mode_con', 0x3c, 0x1e), Y(), this.WHITEFADE = 0x0, this.FADEUP = 0.03333333333333333, this.knightGo = 'quit'), Ba === 0x3c && (C.gameoverAction = this.knightGo || 'retry', this.knight_mode_con = 0x3d), this.heart_marker && this.heart_marker.fadeout && !this.heart_marker.destroyed) {
        let BZ = this.heart_marker.fadeout;
        BZ.t++, this.heart_marker.image_alpha = Math.max(0x0, BZ.from * (0x1 - BZ.t / BZ.max));
      }
    }
    ["draw"](R) {
      let w = R.ctx;
      w.globalAlpha = Math.min(0x1, this.FADEFACTOR), w.fillStyle = this.WHITEFADE === 0x0 ? "#000" : "#fff", w.fillRect(-0xa, -0xa, 0x3e7, 0x3e7), w.globalAlpha = 0x1, this.FADEUP > 0x0 && this.FADEFACTOR < 0x1 && (this.FADEFACTOR += this.FADEUP);
    }
    ["destroy"]() {
      this.dark && this.dark.pause();
    }
  };
S(Bp, 'DEVICE_FAILURE'), s(Bp, 'kinds', i('DEVICE_FAILURE', E)), s(Bp, 'defaultDepth', 0xa);
var Bz = Bp,
  Bh = class R6 extends E {
    ["create"]() {
      this.NAME = ['YES', 'NO'], this.NAMEX = [0x6e, 0xbe], this.NAMEY = [0xb4, 0xb4], this.XMAX = 0x1, this.CURX = -0x1, this.IDEALX = 0x96, this.IDEALY = 0xb4, this.HEARTX = 0x96, this.HEARTY = 0xb4, this.DRAWHEART = 0x1, this.ONEBUFFER = 0x1, this.FINISH = 0x0, this.fadebuffer = 0xa, C.choice = -0x1, this.choice_y_offset = 0x0, this.yoff = null;
    }
    ["step"]() {
      if (this.fadebuffer < 0x0 && this.FINISH === 0x0) {
        let R = 0x0;
        if (T() && (R = 0x1), u() && (R = -0x1), R !== 0x0 && (this.CURX = this.CURX < 0x0 ? R > 0x0 ? 0x1 : 0x0 : (this.CURX + 0x2 + R) % 0x2, r('snd_menumove')), H() && this.ONEBUFFER < 0x0 && this.CURX >= 0x0) {
          r('snd_select'), this.FINISH = 0x1, C.choice = this.CURX, this.instance_destroy();
          return;
        }
      }
      this.CURX >= 0x0 && (this.IDEALX = this.NAMEX[this.CURX] - 0x14, this.IDEALY = this.NAMEY[this.CURX]), K(this.HEARTX - this.IDEALX) <= 0x2 && (this.HEARTX = this.IDEALX), this.HEARTX += (this.IDEALX - this.HEARTX) * 0.3, this.HEARTY = this.IDEALY, this.fadebuffer--, this.ONEBUFFER--, this.yoff && (this.yoff.t++, this.choice_y_offset = 0x14 * (0x1 - Math.min(0x1, this.yoff.t / this.yoff.max)));
    }
    ["draw"](R) {
      let w = (0xa - this.fadebuffer) / 0xa;
      w > 0x1 && (w = 0x1), w < 0x0 && (w = 0x0), this.DRAWHEART === 0x1 && R.draw_sprite_ext('spr_heart', 0x0, this.HEARTX, this.HEARTY, 0x1, 0x1, 0x0, m.white, 0.6 * w), R.draw_set_font('fnt_main'), R.draw_set_alpha(w);
      for (let Bt = 0x0; Bt <= this.XMAX; Bt++) R.draw_text(this.NAMEX[Bt], this.NAMEY[Bt] + this.choice_y_offset, this.NAME[Bt], this.CURX === Bt ? m.yellow : m.white);
      R.draw_set_alpha(0x1);
    }
  };
S(Bh, 'DEVICE_CHOICE'), s(Bh, 'kinds', i('DEVICE_CHOICE', E)), s(Bh, 'defaultDepth', 0x0);
var Bx = Bh;
export { k as a, BB as b, Bw as c, Bz as d, Bx as e };