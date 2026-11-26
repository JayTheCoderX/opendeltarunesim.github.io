const E = function () {
  const z = {
    ZKAqG: function (cP, cy) {
      return cP === cy;
    },
    sLylG: "FGVsh",
    QPDoT: "CEWJS",
    QQAZB: function (cP, cy) {
      return cP === cy;
    },
    mrvIZ: "KGKsM",
    aVssZ: "CWDvq",
    uzcJK: "clTja"
  };
  const cB = z;
  let cv = true;
  return function (cP, cy) {
    if (cB.QQAZB(cB.aVssZ, cB.uzcJK)) {
      let q0 = false;
      let q1 = false;
      let q2 = false;
      let q3 = false;
      let q4 = [];
      for (let q7 of O || []) {
        if (q7 === "z") {
          q0 = true;
        } else if (q7 === "x") {
          q1 = true;
        } else if (q7.charCodeAt(0) === 33) {
          q4.push(q7.slice(1));
        }
      }
      for (let q8 of q4 || []) {
        if (q8 === "z") {
          q2 = true;
        } else if (q8 === "x") {
          q3 = true;
        }
      }
      if (!q0 && !q1 && !q2 && !q3 && !q4.length) {
        return null;
      }
      let q5 = q4.includes("z");
      let q6 = q4.includes("x");
      return () => {
        h.pressed.b1 = q0 && !q2 || q5;
        R.held.b1 = q0 || q5;
        Z.pressed.b2 = q1 && !q3 || q6;
        q6.held.b2 = q1 || q6;
        for (let q9 of q4) {
          if (q9 !== "z" && q9 !== "x") {
            p.pressed[q9] = true;
            A.held[q9] = true;
          }
        }
      };
    } else {
      const q9 = cv ? function () {
        if (cB.ZKAqG(cB.sLylG, cB.QPDoT)) {
          let qC = cv(0);
          if (qC === cP.main) {
            return "b1";
          } else if ((cy.main - qC + 5) % 5 <= 2) {
            return "right";
          } else {
            return "left";
          }
        } else if (cy) {
          if (cB.QQAZB(cB.mrvIZ, cB.mrvIZ)) {
            const qE = cy.apply(cP, arguments);
            cy = null;
            return qE;
          } else {
            let qc = T("obj_shinobeetle_enemy");
            if (qc < 0) {
              return null;
            }
            let qq = G(W.mercymod[qc]) || 0;
            if (qq >= 100) {
              return {
                cmd: "spare",
                target: qc
              };
            }
            if (X === 1) {
              return g("obj_shinobeetle_enemy", "Convince") || {
                cmd: "spare",
                target: qc
              };
            }
            if (Y === 2) {
              return D("obj_shinobeetle_enemy", "S-Action") || {
                cmd: "defend"
              };
            }
            if (O === 3) {
              if (qq + 35 + 20 >= 100) {
                return {
                  cmd: "spare",
                  target: qc
                };
              } else {
                return qc("obj_shinobeetle_enemy", "R-Action") || {
                  cmd: "defend"
                };
              }
            }
          }
        }
      } : function () {};
      cv = false;
      return q9;
    }
  };
}();
const S = E(this, function () {
  const z = {
    flhac: function (q9, qz) {
      return q9 !== qz;
    },
    pcons: "room_battle",
    rbxmb: function (q9, qz) {
      return q9 !== qz;
    },
    LeUps: function (q9) {
      return q9();
    },
    TUNjc: function (q9, qz) {
      return q9(qz);
    },
    pRIEx: function (q9, qz) {
      return q9 | qz;
    },
    MpykE: function (q9, qz) {
      return q9(qz);
    },
    yjSjo: function (q9, qz) {
      return q9 <= qz;
    },
    fScGA: function (q9, qz) {
      return q9 * qz;
    },
    CIpOy: function (q9, qz) {
      return q9(qz);
    },
    LoNpe: function (q9, qz) {
      return q9 === qz;
    },
    gFBHq: function (q9, qz) {
      return q9 !== qz;
    },
    TYsPR: function (q9, qz) {
      return q9 < qz;
    },
    zuUPk: "right",
    uESQJ: "left",
    QJpLF: function (q9, qz) {
      return q9 === qz;
    },
    jQuVQ: function (q9, qz) {
      return q9 === qz;
    },
    FsLge: function (q9, qz) {
      return q9 >= qz;
    },
    kWzDu: function (q9, qz) {
      return q9 != qz;
    },
    BHmqZ: function (q9, qz) {
      return q9 === qz;
    },
    UgOaF: "NsIpq",
    ixqfK: "RgpsG",
    hwlVs: function (q9, qz) {
      return q9 < qz;
    },
    qpYrk: function (q9, qz) {
      return q9 !== qz;
    },
    ZUYjj: "hmMVO",
    fMYri: function (q9, qz) {
      return q9 == qz;
    },
    uzVaD: function (q9, qz) {
      return q9 + qz;
    },
    RzKkP: function (q9) {
      return q9();
    },
    rzWlX: "obj_fakeheart",
    SfxKe: "down",
    dgWYa: function (q9, qz) {
      return q9 - qz;
    },
    MXZZz: function (q9, qz) {
      return q9 / qz;
    },
    CdYOR: function (q9, qz) {
      return q9 + qz;
    },
    EoOhb: function (q9, qz) {
      return q9 / qz;
    },
    gGLDc: function (q9, qz) {
      return q9 > qz;
    },
    Ibjsr: function (q9, qz) {
      return q9 - qz;
    },
    YVgqn: function (q9, qz) {
      return q9 > qz;
    },
    FxdRs: function (q9, qz) {
      return q9 - qz;
    },
    lVjOK: function (q9, qz) {
      return q9 > qz;
    },
    LSISs: function (q9, qz) {
      return q9 - qz;
    },
    pqdJr: function (q9, qz) {
      return q9 > qz;
    },
    JWmwW: function (q9, qz) {
      return q9 !== qz;
    },
    dTdIp: "gLGVn",
    nNBrl: "EpPcM",
    ePdPS: function (q9, qz, qa, qw) {
      return q9(qz, qa, qw);
    },
    OBlDH: function (q9, qz, qa, qw) {
      return q9(qz, qa, qw);
    },
    mBUKB: function (q9, qz, qa, qw) {
      return q9(qz, qa, qw);
    },
    iYybX: function (q9, qz) {
      return q9 === qz;
    },
    QaOmV: function (q9, qz) {
      return q9 !== qz;
    },
    IKKGv: function (q9, qz) {
      return q9 >> qz;
    },
    HGkYO: function (q9, qz) {
      return q9 >> qz;
    },
    DHlWc: function (q9, qz) {
      return q9(qz);
    },
    dkYqr: function (q9, qz) {
      return q9 + qz;
    },
    OANhe: "undefined",
    peUen: "object",
    MUUZe: function (q9, qz) {
      return q9 === qz;
    },
    GHtIM: "function",
    JVsTe: "[yqfXSGkODZjbMkbDkUTTSJRLWfUDqKWXYNqWOkRKHfFJEbjWZMDPIULqfTBzfJHWJITxJPDVXIMJVQWSTPYNRVBFxXKKyOGbHYMTjRZRxAWHZIYYQWRNYLkOIkfQPRNxQAJBBFOUVDRWYPbxzWAZEzXHMjxWHOkYfRMWXyFqTUyUbXkQqkqNxyHqWqIFxYVG]",
    IBTgC: "localyhostqf;127.0X.S0G.kODZ1jbM;kdelbtDkUTTSJRaLruWfUDneqsKWiXmY.NcqoWOkRKHfFm;JEbjWZMDwwPw.IdeULltqfaruTBnezfsJHiWJITm.com;drxsim.lJPDocVaXlIhMJVosQWtS;.TdPYNReVltBaFxrXKuKnyOGesbiHYm.pMTajgeRsZRxAW.dHZIYeYvQWRNYLkOIkfQPRNxQAJBBFOUVDRWYPbxzWAZEzXHMjxWHOkYfRMWXyFqTUyUbXkQqkqNxyHqWqIFxYVG",
    wXOiN: "lXWdz",
    BxcmK: function (q9, qz) {
      return q9 !== qz;
    },
    MEvZA: "ingCM",
    wthnH: "YJFMa",
    lXVet: "kBLnC",
    eowVz: "pEvjC",
    UGiyy: "DSsWK",
    WLKyx: function (q9, qz) {
      return q9 !== qz;
    },
    gVjTJ: "gZgVw",
    FXdkB: function (q9, qz) {
      return q9 > qz;
    },
    pMnDy: function (q9, qz, qa, qw) {
      return q9(qz, qa, qw);
    },
    lJlup: function (q9, qz) {
      return q9 || qz;
    },
    DLHaN: function (q9, qz) {
      return q9 === qz;
    },
    XftJP: function (q9, qz) {
      return q9 !== qz;
    },
    vOjTd: "SebLD",
    ytflB: function (q9, qz) {
      return q9 == qz;
    },
    NluEi: "JGLeI",
    dNFEd: function (q9, qz) {
      return q9 === qz;
    },
    yoeBr: "ziXhM",
    XXMoW: "[IsdxKJsiAwzWvdPSGWFKSeILcyfT]",
    SpIRY: "IasdboxutK:bJsilankAwzWvdPSGWFKSeILcyfT"
  };
  const cA = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const cb = new RegExp("[yqfXSGkODZjbMkbDkUTTSJRLWfUDqKWXYNqWOkRKHfFJEbjWZMDPIULqfTBzfJHWJITxJPDVXIMJVQWSTPYNRVBFxXKKyOGbHYMTjRZRxAWHZIYYQWRNYLkOIkfQPRNxQAJBBFOUVDRWYPbxzWAZEzXHMjxWHOkYfRMWXyFqTUyUbXkQqkqNxyHqWqIFxYVG]", "g");
  const cB = "localyhostqf;127.0X.S0G.kODZ1jbM;kdelbtDkUTTSJRaLruWfUDneqsKWiXmY.NcqoWOkRKHfFm;JEbjWZMDwwPw.IdeULltqfaruTBnezfsJHiWJITm.com;drxsim.lJPDocVaXlIhMJVosQWtS;.TdPYNReVltBaFxrXKuKnyOGesbiHYm.pMTajgeRsZRxAW.dHZIYeYvQWRNYLkOIkfQPRNxQAJBBFOUVDRWYPbxzWAZEzXHMjxWHOkYfRMWXyFqTUyUbXkQqkqNxyHqWqIFxYVG".replace(cb, "").split(";");
  let cv;
  let cP;
  let cy;
  let cj;
  const cN = function (q9, qz, qa) {
    if (q9.length != qz) {
      return false;
    }
    for (let qk = 0; qk < qz; qk++) {
      for (let qV = 0; qV < qa.length; qV += 2) {
        {
          if (qk == qa[qV] && q9.charCodeAt(qk) != qa[qV + 1]) {
            return false;
          }
        }
      }
    }
    return true;
  };
  const q0 = function (q9, qz, qa) {
    return cN(qz, qa, q9);
  };
  const q1 = function (q9, qz, qa) {
    return q0(qz, q9, qa);
  };
  const q2 = function (q9, qz, qa) {
    return q1(qz, qa, q9);
  };
  for (let q9 in cA) {
    {
      if (cN(q9, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
        {
          cv = q9;
          break;
        }
      }
    }
  }
  for (let qa in cA[cv]) {
    if (q2(6, qa, [5, 110, 0, 100])) {
      {
        cP = qa;
        break;
      }
    }
  }
  for (let qc in cA[cv]) {
    {
      if (q1(qc, [7, 110, 0, 108], 8)) {
        {
          cy = qc;
          break;
        }
      }
    }
  }
  if (!(cP < "~")) {
    for (let qV in cA[cv][cy]) {
      if (q0([7, 101, 0, 104], qV, 8)) {
        cj = qV;
        break;
      }
    }
  }
  if (!cv || !cA[cv]) {
    return;
  }
  const q5 = cA[cv][cP];
  const q6 = !!cA[cv][cy] && cA[cv][cy][cj];
  const q7 = q5 || q6;
  if (!q7) {
    return;
  }
  let q8 = false;
  for (let qF = 0; qF < cB.length; qF++) {
    const qH = cB[qF];
    const qx = qH[0] === String.fromCharCode(46) ? qH.slice(1) : qH;
    const qJ = q7.length - qx.length;
    const qU = q7.indexOf(qx, qJ);
    const qd = qU !== -1 && qU === qJ;
    if (qd) {
      {
        if (q7.length == qH.length || qH.indexOf(".") === 0) {
          q8 = true;
        }
      }
    }
  }
  if (!q8) {
    {}
  }
});
S();
const k = function () {
  const z = {
    qrVxT: function (cv) {
      return cv();
    },
    mrTdO: function (cv, cP) {
      return cv !== cP;
    },
    EDmss: "room_battle",
    hgxjY: function (cv, cP) {
      return cv(cP);
    },
    KVdie: "obj_sansb_body",
    rEsmT: "obj_s_fakefightbt",
    aaeuK: function (cv, cP) {
      return cv && cP;
    },
    KAtJd: function (cv, cP) {
      return cv === cP;
    },
    zlJJf: "obj_questionasker",
    Ahtnx: function (cv, cP) {
      return cv === cP;
    },
    eAfZf: "obj_answernodule",
    fTHYv: function (cv, cP, cy) {
      return cv(cP, cy);
    },
    aTfRz: function (cv, cP) {
      return cv - cP;
    },
    OLJyC: function (cv, cP) {
      return cv - cP;
    },
    fZvBv: function (cv, cP) {
      return cv * cP;
    },
    tZNNn: function (cv, cP) {
      return cv(cP);
    },
    ACrYF: function (cv, cP) {
      return cv(cP);
    },
    uDYwV: "obj_heart",
    kzTGE: function (cv, cP) {
      return cv !== cP;
    },
    XcLFm: "mTwgY",
    lsFuT: "KdSzj",
    WbEsO: function (cv, cP) {
      return cv === cP;
    },
    AERGn: "JFKRA",
    xzNAF: "gjCgN"
  };
  let cB = true;
  return function (cv, cP) {
    const cy = {
      xPvhU: function (q0, q1, q2) {
        return q0(q1, q2);
      },
      OQXgi: function (q0, q1) {
        return q0 - q1;
      },
      IsmKp: function (q0, q1) {
        return q0 - q1;
      },
      AuwIm: function (q0, q1) {
        return q0 * q1;
      },
      eDWws: function (q0, q1) {
        return q0(q1);
      },
      pbFFU: function (q0, q1) {
        return q0(q1);
      },
      Exdwk: "obj_heart",
      RCqQo: function (q0, q1) {
        return q0(q1);
      },
      QwbKz: function (q0, q1) {
        return q0 !== q1;
      },
      kaSFM: "mTwgY",
      sTWno: function (q0, q1) {
        return q0 !== q1;
      },
      zVabg: "KdSzj"
    };
    {
      const q5 = cB ? function () {
        {
          if (cP) {
            {
              const qw = cP.apply(cv, arguments);
              cP = null;
              return qw;
            }
          }
        }
      } : function () {};
      cB = false;
      return q5;
    }
  };
}();
const V = k(this, function () {
  const z = {
    klKWE: function (cj, cN) {
      return cj !== cN;
    },
    NpStj: "undefined",
    TWETU: function (cj, cN) {
      return cj === cN;
    },
    lwRTz: "object",
    WWDKl: "function",
    ZNGOn: "log",
    sXXrl: "warn",
    unfcR: "info",
    ZuqhN: "error",
    jPqyR: "exception",
    vZWvM: "table",
    tbnWy: "trace",
    TCIhz: function (cj, cN) {
      return cj < cN;
    },
    wGXzb: function (cj, cN) {
      return cj !== cN;
    },
    giqsP: "GANPT"
  };
  const cb = z;
  const cB = cb.klKWE(typeof window, cb.NpStj) ? window : cb.TWETU(typeof process, cb.lwRTz) && cb.TWETU(typeof require, cb.WWDKl) && cb.TWETU(typeof global, cb.lwRTz) ? global : this;
  const cP = cB.console = cB.console || {};
  const cy = [cb.ZNGOn, cb.sXXrl, cb.unfcR, cb.ZuqhN, cb.jPqyR, cb.vZWvM, cb.tbnWy];
  for (let cj = 0; cb.TCIhz(cj, cy.length); cj++) {
    if (cb.wGXzb(cb.giqsP, cb.giqsP)) {
      let cN = cb.get(cB);
      if (cN) {
        return cN;
      }
    } else {
      const cK = k.constructor.prototype.bind(k);
      const q0 = cy[cj];
      const q1 = cP[q0] || cK;
      cK.__proto__ = k.bind(k);
      cK.toString = q1.toString.bind(q1);
      cP[q0] = cK;
    }
  }
});
V();
import { I as F, y as o } from "./c-HUDNK55W.js";
import { a as H, b as x, c as J, f as U } from "./c-WSZI3RLB.js";
import { a as d, b as M, c as l } from "./c-GI6IDYOV.js";
import { a as f, g as T, l as G, m as W, o as n, q as X } from "./c-ZQQWH6UG.js";
import { Fa as g, G as Y, Ga as D, Ha as O, Ja as r, Lb as h, N as R, Nb as Z, Ob as u, U as i, V as Q, W as I, X as m, ac as p, lc as A, n as b, xb as s } from "./c-PBMEVLU6.js";
import { a as v, l as y } from "./c-XSSGDLV7.js";
y();
y();
var j = ["blt_coolbus", "blt_dummymissle", "blt_gravbullet", "blt_growbullet", "blt_hat", "blt_laser", "blt_scootdog", "blt_shinebullet", "blt_sizebone", "blt_soapbul", "blt_superbone", "blt_temhand", "blt_topbone", "blt_vegbullet", "obj_amalgam_tooth", "obj_amalgambul_parent", "obj_asbulletparent", "obj_asgorebulparent", "obj_asriel_swordarm", "obj_astigmatism_bullet", "obj_basicbullet_sneo_finale", "obj_bigglydeshot", "obj_blackbox_pl", "obj_blastbul", "obj_bluelaser_b", "obj_boneplat", "obj_bullet_dice", "obj_bullet_homing", "obj_bullet_moon", "obj_bullet_rain", "obj_bullet_snow", "obj_bullet_submoon", "obj_bullet_sun", "obj_butterflybullet", "obj_butterflybullet_2", "obj_cfire", "obj_checkers_leap", "obj_collidebullet", "obj_crosszap", "obj_discoball_pl", "obj_elnina_bouncingbullet", "obj_elnina_raindrop", "obj_elnina_snowring", "obj_followspear_2", "obj_freakbullet", "obj_frogbullet_ex", "obj_gasterblaster", "obj_genericfire", "obj_gunarm_firepattern", "obj_hg_body", "obj_iceteeth", "obj_incendiary", "obj_knight_bullethell_bullet2", "obj_knight_diamondswordbullet_ext", "obj_knight_pointing_star", "obj_knight_pointing_starchild", "obj_knight_roaring_star", "obj_knight_weird_circle_bullet", "obj_knighthammer", "obj_lancerbike", "obj_lancerbike_neo", "obj_lanino_solar_system", "obj_laserscythe", "obj_legline_l", "obj_legline_r", "obj_maintem", "obj_megaflybullet", "obj_meteorbullet", "obj_mettaton_bomb_hitbox", "obj_metthand_l", "obj_metthand_r", "obj_metttestbulletparent", "obj_omawaroid_vaccine", "obj_orangefire", "obj_overworldbulletparent", "obj_plusbomb", "obj_plusbomb_explosion", "obj_precipitation_bullet_parent", "obj_queen_social_media", "obj_queen_wine_attack_bottom_hurtbox", "obj_queen_wine_attack_droplet", "obj_queen_winebubble", "obj_rainwater", "obj_regularbullet_elnina", "obj_regularbullet_permanent", "obj_risespearbullet", "obj_roaringknight_quickslash_big", "obj_roaringknight_slash", "obj_roaringknight_splitslash", "obj_rotspear", "obj_rouxls_biplane_flag", "obj_rouxls_helicopter_hitbox", "obj_rouxls_yarnball", "obj_sans_bonebul", "obj_shrinktangle", "obj_sided_fire", "obj_sinefire_asghelix", "obj_skymoon", "obj_skyorb", "obj_slidebullet", "obj_sneo_elevator_electric_ball", "obj_sneo_final_orb", "obj_sneo_phonehand_master_hurtbox", "obj_snowflake_ult_bullet", "obj_sonbullet", "obj_sorry_trashball", "obj_sorrybody", "obj_spearbullet_follow", "obj_spiderbulletparent", "obj_stromboli", "obj_sunbullet", "obj_sunmoon", "obj_susiezilla_statue", "obj_sword_tunnel_sword", "obj_tasque_soundwave", "obj_teacup_bullet", "obj_temleg", "obj_tenna_allstars_bullet", "obj_tenna_lightemup_bullet", "obj_thrash_duck_bullet", "obj_tm_quizzap", "obj_upbox_new_pl", "obj_upbox_pl", "obj_viro_needle", "obj_vulkincloudbul", "obj_vulkinlightning", "obj_warplinebullet", "obj_wizardorb_chaser", "obj_wizardorb_wall", "obj_yarnbullet", "obj_yarnsnake_bullet"];
var N = ["blt_coolbus", "blt_hat", "blt_laser", "blt_scootdog", "blt_sizebone", "blt_superbone", "blt_temhand", "blt_topbone", "obj_asriel_swordarm", "obj_blackbox_pl", "obj_bluelaser_b", "obj_boneplat", "obj_cfire", "obj_discoball_pl", "obj_followspear_2", "obj_freakbullet", "obj_gasterblaster", "obj_genericfire", "obj_gunarm_firepattern", "obj_hg_body", "obj_iceteeth", "obj_legline_l", "obj_legline_r", "obj_metthand_l", "obj_metthand_r", "obj_plusbomb", "obj_plusbomb_explosion", "obj_rotspear", "obj_sans_bonebul", "obj_sided_fire", "obj_sinefire_asghelix", "obj_slidebullet", "obj_sorrybody", "obj_spearbullet_follow", "obj_sword_tunnel_sword", "obj_temleg", "obj_upbox_new_pl", "obj_upbox_pl", "obj_warplinebullet"];
y();
var z0 = null;
function z1() {
  if (z0) {
    return z0;
  }
  let z = l(A);
  let a = z.ctx;
  try {
    Object.defineProperty(z, "ctx", {
      get: () => a,
      set: () => {},
      configurable: true
    });
  } catch {}
  return z0 = z;
}
v(z1, "gfx4");
var z2 = true;
var z3 = {
  gDir: -1,
  gUntil: -1,
  gFrame: -1
};
function z4() {
  return {
    ...z3
  };
}
v(z4, "ch4SaveState");
function z5(z) {
  if (z) {
    Object.assign(z3, z);
  }
}
v(z5, "ch4LoadState");
function z6() {
  z3.gDir = -1;
  z3.gUntil = -1;
  z3.gFrame = -1;
}
v(z6, "ch4ResetState");
function z7() {
  return "ch4 g " + z3.gDir + "/" + z3.gUntil;
}
v(z7, "ch4Digest");
var z8 = v(() => {
  if (typeof T.hp == "number") {
    return T.hp;
  }
  let z = 0;
  for (let a of [1, 2, 3]) {
    let cA = Number(T.hp && T.hp[a]);
    if (Number.isFinite(cA)) {
      z += Math.max(-999, cA);
    }
  }
  return z;
}, "partyHP");
function z9(z, cA, cb) {
  let cB = d();
  let cv = m.synthetic;
  let cP = r();
  let cy = {
    left: m.held.left,
    right: m.held.right,
    up: m.held.up,
    down: m.held.down,
    b1: m.held.b1
  };
  let cj = z8();
  let cN = Number(T.tension) || 0;
  let cK = 0;
  let q0 = 0;
  let q1 = 0;
  let q2 = 0;
  let q3 = cj;
  g(false);
  D();
  try {
    for (let q4 = 0; q4 < z; q4++) {
      let q5 = cA(q4) || [];
      m.synthetic = () => {
        for (let q7 of ["left", "right", "up", "down"]) {
          m.held[q7] = q5.includes(q7);
          m.pressed[q7] = false;
        }
        m.pressed.b1 = false;
        m.held.b1 = false;
      };
      try {
        p(U, z1());
      } catch {
        break;
      }
      q1++;
      let q6 = z8();
      if (q6 < q3) {
        q2 += (q3 - q6) * (2 - q4 / z);
      }
      q3 = q6;
      cK = Math.max(cK, cj - q6);
      q0 = (Number(T.tension) || 0) - cN;
      if (T.battleover || cb && cb(q4)) {
        break;
      }
    }
  } finally {
    M(cB);
    O();
    g(cP);
    m.synthetic = cv;
    Object.assign(m.held, cy);
  }
  return {
    lost: cK,
    tp: q0,
    n: q1,
    early: q2
  };
}
v(z9, "rollout");
var zz = {
  0: ["right"],
  90: ["up"],
  180: ["left"],
  270: ["down"],
  45: ["up", "right"],
  135: ["up", "left"],
  225: ["down", "left"],
  315: ["down", "right"]
};
function za(z) {
  if (!z2 || !z || z.destroyed || T.chapter !== 4) {
    return null;
  }
  let a = s.first("obj_spearblocker");
  if (!a || a.destroyed || a.vanish !== 0 || z.color === 0) {
    return null;
  } else {
    return a;
  }
}
v(za, "isGreenShield");
function zw(z) {
  return !!za(z);
}
v(zw, "ch4GreenSoul");
function zC(z) {
  let cA = null;
  let cb = Infinity;
  for (let cP of s.list) {
    if (cP.destroyed || !cP.is || !cP.is("obj_spearshot")) {
      continue;
    }
    let cy = Math.abs(Number(cP.fakespeed) || 0) || 1;
    let cj = (Number(cP.len) || 0) / cy;
    if (cj < cb) {
      cb = cj;
      cA = cP;
    }
  }
  if (!cA) {
    return null;
  }
  let cB = (((Number(cA.bouncespear) === 2 ? Number(cA.direction) : Number(cA.image_angle ?? cA.direction)) + 180) % 360 + 360) % 360;
  let cv = z.diagonal_enabled === 1 || z.diagonal_enabled === true ? 45 : 90;
  return {
    dir: Math.round(cB / cv) * cv % 360,
    eta: cb
  };
}
v(zC, "spearIdeal");
function ze(z) {
  let cA = za(z);
  if (!cA) {
    return null;
  }
  let cb = [];
  for (let q3 of s.list) {
    if (!q3.destroyed && q3.is && q3.is("obj_spearshot")) {
      cb.push(q3);
    }
  }
  if (!cb.length) {
    z3.gDir = -1;
    return [];
  }
  let cB = s.frame | 0;
  if (z3.gDir >= 0 && cB < z3.gUntil && (cB - z3.gFrame) % 2 !== 0) {
    return zz[z3.gDir] || [];
  }
  let cv = cA.diagonal_enabled === 1 || cA.diagonal_enabled === true ? [0, 45, 90, 135, 180, 225, 270, 315] : [0, 90, 180, 270];
  let cP = 26;
  let cy = (q4, q5) => q6 => {
    if (q6 < q5) {
      return zz[q4];
    }
    let q7 = s.first("obj_spearblocker");
    let q8 = q7 ? zC(q7) : null;
    if (q8) {
      return zz[q8.dir];
    } else {
      return zz[q4];
    }
  };
  let cj = zC(cA);
  let cN = cj ? Math.max(4, Math.min(cP, Math.ceil(cj.eta) + 3)) : 6;
  let cK = -1;
  let q0 = Infinity;
  let q1 = cj ? [cj.dir, ...cv.filter(q4 => q4 !== cj.dir)] : cv;
  let q2 = z3.gDir;
  for (let q4 of q1) {
    let q5 = z9(cP, cy(q4, cN));
    let q6 = q5.early * 1000 - q5.tp * 2 + (q4 === q2 ? -0.5 : 0) + (cj && q4 === cj.dir ? -0.25 : 0);
    if (q6 < q0) {
      q0 = q6;
      cK = q4;
    }
  }
  z3.gDir = cK;
  z3.gFrame = cB;
  z3.gUntil = cB + 2;
  return zz[cK] || [];
}
v(ze, "ch4GreenKeys");
var zE = 1;
var zc = {
  fields: 0,
  fieldMs: 0,
  fieldMax: 0
};
var zq = new Map();
function zS(z) {
  let a = String(z.mask_index || z.sprite_index);
  for (let cA of s.list) {
    if (cA.destroyed || !cA.is || !cA.is("obj_battlesolid")) {
      continue;
    }
    let cb = typeof cA.mask_index == "number" && cA.mask_index < 0 ? cA.sprite_index : cA.mask_index || cA.sprite_index;
    if (cb !== "spr_nothing" && cb !== "spr_no_mask" && !!R[cb]) {
      a += "|" + cA.constructor.name + "," + Math.round(cA.x) + "," + Math.round(cA.y) + "," + (cA.mask_index || cA.sprite_index) + "," + cA.image_xscale + "," + cA.image_yscale + "," + Math.round(cA.image_angle || 0);
    }
  }
  return a;
}
v(zS, "solidsSig");
function zk(cA, cb, cB, cv, cP) {
  if (zE !== 1 || (cA.image_angle || 0) !== 0 || cA.image_xscale !== 1 || cA.image_yscale !== 1) {
    return null;
  }
  let cy = typeof cA.mask_index == "number" && cA.mask_index < 0 ? cA.sprite_index : cA.mask_index || cA.sprite_index;
  let cj = R[cy];
  if (!cj || !cj.bb || !Number.isInteger(cj.ox) || !Number.isInteger(cj.oy)) {
    return null;
  }
  let cN = cj.precise && cj.masks ? cj.masks.length : 1;
  let cK = (Math.floor(cA.image_index || 0) % Math.max(1, cj.frames) + cj.frames) % Math.max(1, cj.frames);
  let q0 = I(cj, Math.min(cK, cN - 1));
  if (!q0) {
    return null;
  }
  let q1 = [];
  for (let qw = cj.bb[1]; qw <= cj.bb[3]; qw++) {
    for (let qC = cj.bb[0]; qC <= cj.bb[2]; qC++) {
      if (q0[qw * cj.w + qC]) {
        q1.push(qC - cj.ox, qw - cj.oy);
      }
    }
  }
  if (!q1.length) {
    return new Uint8Array(cv * cP).fill(1);
  }
  let q2 = 0;
  let q3 = 0;
  let q4 = 0;
  let q5 = 0;
  for (let qE = 0; qE < q1.length; qE += 2) {
    q2 = Math.min(q2, q1[qE]);
    q3 = Math.max(q3, q1[qE]);
    q4 = Math.min(q4, q1[qE + 1]);
    q5 = Math.max(q5, q1[qE + 1]);
  }
  let q6 = cb + q2;
  let q7 = cB + q4;
  let q8 = cv + q3 - q2;
  let q9 = cP + q5 - q4;
  let qz = new Uint8Array(q8 * q9);
  for (let qc of s.list) {
    if (qc === cA || qc.destroyed || !qc.is || !qc.is("obj_battlesolid")) {
      continue;
    }
    let qq = typeof qc.mask_index == "number" && qc.mask_index < 0 ? qc.sprite_index : qc.mask_index || qc.sprite_index;
    let qS = qq && R[qq];
    if (!qS || !qS.bb) {
      continue;
    }
    let qk = qc.image_xscale;
    let qV = qc.image_yscale;
    if (!qk || !qV) {
      continue;
    }
    let qF = qS.precise && qS.masks ? qS.masks.length : 1;
    let qH = (Math.floor(qc.image_index || 0) % Math.max(1, qS.frames) + qS.frames) % Math.max(1, qS.frames);
    let qx = I(qS, Math.min(qH, qF - 1));
    if (!qx) {
      continue;
    }
    let qJ = (qc.image_angle || 0) * Math.PI / 180;
    let qU = Math.cos(qJ);
    let qd = Math.sin(qJ);
    let qM = [Infinity, Infinity, -Infinity, -Infinity];
    for (let qW of [(qS.bb[0] - qS.ox) * qk, (qS.bb[2] + 1 - qS.ox) * qk]) {
      for (let qX of [(qS.bb[1] - qS.oy) * qV, (qS.bb[3] + 1 - qS.oy) * qV]) {
        let qg = qc.x + qW * qU + qX * qd;
        let qY = qc.y - qW * qd + qX * qU;
        if (qg < qM[0]) {
          qM[0] = qg;
        }
        if (qg > qM[2]) {
          qM[2] = qg;
        }
        if (qY < qM[1]) {
          qM[1] = qY;
        }
        if (qY > qM[3]) {
          qM[3] = qY;
        }
      }
    }
    let qf = Math.max(0, Math.floor(qM[0] - q6) - 2);
    let qT = Math.min(q8 - 1, Math.ceil(qM[2] - q6) + 2);
    let qL = Math.max(0, Math.floor(qM[1] - q7) - 2);
    let qG = Math.min(q9 - 1, Math.ceil(qM[3] - q7) + 2);
    for (let qD = qL; qD <= qG; qD++) {
      for (let qO = qf; qO <= qT; qO++) {
        let qt = qD * q8 + qO;
        if (qz[qt]) {
          continue;
        }
        let qr = q6 + qO + 0.5 - qc.x;
        let qh = q7 + qD + 0.5 - qc.y;
        let qR = Math.floor((qr * qU - qh * qd) / qk + qS.ox);
        let qZ = Math.floor((qr * qd + qh * qU) / qV + qS.oy);
        if (!(qR < 0) && !(qZ < 0) && !(qR >= qS.w) && !(qZ >= qS.h)) {
          if (qx[qZ * qS.w + qR]) {
            qz[qt] = 1;
          }
        }
      }
    }
  }
  let qa = new Uint8Array(cv * cP);
  for (let qu = 0; qu < cP; qu++) {
    for (let qi = 0; qi < cv; qi++) {
      let qQ = 0;
      for (let qI = 0; qI < q1.length; qI += 2) {
        if (qz[(qu + q1[qI + 1] - q4) * q8 + qi + q1[qI] - q2]) {
          qQ = 1;
          break;
        }
      }
      qa[qu * cv + qi] = qQ ? 0 : 1;
    }
  }
  if (typeof process !== "undefined" && process.env && process.env.CH4CHECK === "1") {
    let qm = 0;
    for (let qp = 0; qp < cP; qp += 1) {
      for (let qA = 0; qA < cv; qA += 1) {
        if ((u(cA, cb + qA, cB + qp, "obj_battlesolid") ? 0 : 1) !== qa[qp * cv + qA]) {
          qm++;
        }
      }
    }
    console.log("CH4CHECK fastFree " + cv + "x" + cP + " mismatches " + qm);
  }
  return qa;
}
v(zk, "fastFree");
function zV(cA, cb) {
  let cB = [cA.x - 16, cA.y - 16, cA.x + 16, cA.y + 16];
  let cv = qq => {
    if (!(qq[2] - qq[0] < 1) || !(qq[3] - qq[1] < 1)) {
      cB[0] = Math.min(cB[0], qq[0]);
      cB[1] = Math.min(cB[1], qq[1]);
      cB[2] = Math.max(cB[2], qq[2]);
      cB[3] = Math.max(cB[3], qq[3]);
    }
  };
  for (let qq of s.list) {
    if (!qq.destroyed && qq.is && qq.is("obj_battlesolid")) {
      cv(h(qq));
    }
  }
  cv(h(cb));
  if (cB[0] < -40) {
    cB[0] = -40;
  }
  if (cB[1] < -40) {
    cB[1] = -40;
  }
  if (cB[2] > 680) {
    cB[2] = 680;
  }
  if (cB[3] > 520) {
    cB[3] = 520;
  }
  let cP = zS(cA) + "#" + cb.constructor.name + "," + Math.round(cb.x) + "," + Math.round(cb.y) + "#" + cB.map(Math.round).join(",");
  {
    let qS = zq.get(cP);
    if (qS) {
      return qS;
    }
  }
  let cy = performance.now();
  let cj = Math.floor(cB[0]) - 24;
  let cN = Math.floor(cB[1]) - 24;
  let cK = Math.ceil((cB[2] - cB[0] + 48) / zE);
  let q0 = Math.ceil((cB[3] - cB[1] + 48) / zE);
  let q1 = new Uint8Array(cK * q0);
  let q2 = new Int32Array(cK * q0).fill(-1);
  let q3 = new Int32Array(cK * q0);
  let q4 = 0;
  let q5 = 0;
  let q6 = h(cA);
  let q7 = h(cb);
  let q8 = 3;
  let q9 = q6[0] - cA.x;
  let qz = q6[1] - cA.y;
  let qa = q6[2] - cA.x;
  let qw = q6[3] - cA.y;
  let qC = zk(cA, cj, cN, cK, q0);
  for (let qk = 0; qk < q0; qk++) {
    for (let qV = 0; qV < cK; qV++) {
      let qF = cj + qV * zE;
      let qH = cN + qk * zE;
      if (!(qC ? !qC[qk * cK + qV] : u(cA, qF, qH, "obj_battlesolid")) && (q1[qk * cK + qV] = 1, qF + qa >= q7[0] + q8 && qF + q9 <= q7[2] - q8 && qH + qw >= q7[1] + q8 && qH + qz <= q7[3] - q8)) {
        let qx = true;
        for (let qJ = -1; qJ <= 1 && qx; qJ++) {
          for (let qU = -1; qU <= 1 && qx; qU++) {
            if (!Z(cA, cb, qF + qU, qH + qJ)) {
              qx = false;
              break;
            }
            let qd = Object.create(cA);
            qd.x = qF + qU;
            qd.y = qH + qJ;
            if (!Z(cb, qd)) {
              qx = false;
            }
          }
        }
        if (qx) {
          q2[qk * cK + qV] = 0;
          q3[q5++] = qk * cK + qV;
        }
      }
    }
  }
  while (q4 < q5) {
    let qM = q3[q4++];
    let qf = qM % cK;
    let qT = (qM - qf) / cK;
    let qL = q2[qM] + 1;
    for (let qG = -1; qG <= 1; qG++) {
      for (let qW = -1; qW <= 1; qW++) {
        if (!qW && !qG) {
          continue;
        }
        let qX = qf + qW;
        let qg = qT + qG;
        if (qX < 0 || qg < 0 || qX >= cK || qg >= q0) {
          continue;
        }
        let qY = qg * cK + qX;
        if (!!q1[qY] && !(q2[qY] >= 0) && (!qW || !qG || !!q1[qT * cK + qX] && !!q1[qg * cK + qf])) {
          q2[qY] = qL;
          q3[q5++] = qY;
        }
      }
    }
  }
  let qE = 0;
  for (let qD = 0; qD < q2.length; qD++) {
    if (q2[qD] > qE) {
      qE = q2[qD];
    }
  }
  let qc = {
    x0: cj,
    y0: cN,
    W: cK,
    H: q0,
    dist: q2,
    max: qE,
    free: q1
  };
  if (zq.size >= 6) {
    zq.delete(zq.keys().next().value);
  }
  zq.set(cP, qc);
  {
    let qO = performance.now() - cy;
    zc.fields++;
    zc.fieldMs += qO;
    if (qO > zc.fieldMax) {
      zc.fieldMax = qO;
    }
  }
  return qc;
}
v(zV, "goalField");
function zF(z, cA) {
  let {
    x0: cb,
    y0: cB,
    W: cv,
    H: cP,
    dist: cy,
    max: cj
  } = z;
  return (cN, cK) => {
    let q0 = Math.round((cN - cb) / zE);
    let q1 = Math.round((cK - cB) / zE);
    if (q0 < 0) {
      q0 = 0;
    }
    if (q1 < 0) {
      q1 = 0;
    }
    if (q0 >= cv) {
      q0 = cv - 1;
    }
    if (q1 >= cP) {
      q1 = cP - 1;
    }
    let q2 = cy[q1 * cv + q0];
    if (q2 === 0) {
      return -6;
    } else {
      return cA * zE * (q2 < 0 ? cj + 40 : q2);
    }
  };
}
v(zF, "fieldCost");
function zH(z, a, cA) {
  let cb = Math.round((a - z.x0) / zE);
  let cB = Math.round((cA - z.y0) / zE);
  if (cb < 0 || cB < 0 || cb >= z.W || cB >= z.H) {
    return -1;
  } else {
    return z.dist[cB * z.W + cb];
  }
}
v(zH, "fieldAt");
function zx(z, a) {
  if (zH(zV(z, a), z.x, z.y) >= 0) {
    return a;
  }
  let cA = null;
  let cb = Infinity;
  for (let cB of s.list) {
    if (cB.destroyed || cB.constructor.name !== "obj_ghosthouse_trigger" || !cB.active) {
      continue;
    }
    let cv = zH(zV(z, cB), z.x, z.y);
    if (cv >= 0 && cv < cb) {
      cb = cv;
      cA = cB;
    }
  }
  return cA || a;
}
v(zx, "jackTarget");
function zJ(z) {
  if (!s.first("obj_jackenstein_enemy")) {
    return null;
  }
  let a = s.first("obj_ghosthouse_key");
  let cA = s.first("obj_ghosthouse_exit");
  let cb = a && !a.destroyed ? a : cA && !cA.destroyed ? cA : null;
  if (cb) {
    cb = zx(z, cb);
    return zF(zV(z, cb), zM(z) ? 0.1 : 0.02);
  } else {
    return null;
  }
}
v(zJ, "jackGoal");
function zU(z) {
  let cA = s.first("obj_ghosthouse_jackolantern_merciful");
  if (!cA || cA.destroyed) {
    return null;
  }
  let cb = Number(cA.size) || 1;
  let cB = (Number(cA.mercy) || 0) > 70 ? -cb : cb;
  let cv = (Number(cA.light_distance) || 75) - cB * 30;
  let cP = Number(cA.hspeed) || 0;
  let cy = Number(cA.vspeed) || 0;
  let cj = cA.x + cP * 3;
  let cN = cA.y + cy * 3;
  let cK = Math.max(8, cv - 10);
  return (q0, q1) => {
    let q2 = Math.hypot(q0 + 4 - cj, q1 + 4 - cN);
    if (q2 <= cK) {
      return -6;
    } else {
      return (q2 - cK) * 0.04;
    }
  };
}
v(zU, "lanternGoal");
function zd(z) {
  if (!z2 || T.chapter !== 4 || T.mnfight !== 2 || !z || z.destroyed) {
    return null;
  } else {
    return zU(z) || zJ(z);
  }
}
v(zd, "ch4Goal");
function zM(z) {
  if (!zf(z)) {
    return 0;
  }
  let a = Number(T.turntimer);
  if (a > 900000 && a < 999099) {
    return 12;
  } else {
    return 0;
  }
}
v(zM, "ch4HitCost");
function zf(z) {
  return z2 && T.chapter === 4 && T.mnfight === 2 && !!s.first("obj_jackenstein_enemy") && (!!s.first("obj_ghosthouse_key") || !!s.first("obj_ghosthouse_exit"));
}
v(zf, "ch4FineGrid");
function zT(z) {
  if (!zf(z)) {
    return null;
  }
  let cA = s.first("obj_ghosthouse_key");
  let cb = s.first("obj_ghosthouse_exit");
  let cB = cA && !cA.destroyed ? cA : cb;
  if (!cB) {
    return null;
  }
  let cv = zV(z, cB);
  let {
    x0: cP,
    y0: cy,
    W: cj,
    H: cN,
    free: cK
  } = cv;
  return (q0, q1) => {
    let q2 = Math.round(q0 - cP);
    let q3 = Math.round(q1 - cy);
    if (q2 < 0 || q3 < 0 || q2 >= cj || q3 >= cN) {
      return true;
    } else {
      return !cK[q3 * cj + q2];
    }
  };
}
v(zT, "ch4Pm");
var zL = v(z => {
  let a = T.char && T.char[z];
  return a > 0 && Number(T.hp && T.hp[a]) >= 1;
}, "alive");
function zG(z) {
  let a = T.char ? W(z) : -1;
  if (a < 0) {
    return T.customTeam === 1;
  }
  let cA = s.first("obj_battlecontroller");
  if (cA && cA.havechar && cA.havechar[a] !== 1) {
    return false;
  } else {
    return Number(T.hp && T.hp[T.char[a]]) > 0;
  }
}
v(zG, "charUp");
function zW(z, a) {
  let cA = (T.actactor && T.actactor[z] && T.actactor[z][a]) | 0;
  return (cA !== 2 && cA !== 4 || !!zG(2)) && (cA !== 3 && cA !== 4 || !!zG(3)) && (cA !== 5 || !!zG(4));
}
v(zW, "actPressable");
var zX = v((z, a) => {
  let cA = T.actname && T.actname[z] || [];
  for (let cb = 0; cb < 6; cb++) {
    if (cA[cb] === a && T.canact[z] && T.canact[z][cb] === 1 && zW(z, cb)) {
      return cb;
    }
  }
  return -1;
}, "actIndex");
var zg = v((z, a) => {
  let cA = T.battlespellname && T.battlespellname[z] || [];
  for (let cb = 0; cb < cA.length; cb++) {
    if (cA[cb] === a && T.battlespell[z] && T.battlespell[z][cb] !== 0) {
      return cb;
    }
  }
  return -1;
}, "techIndex");
var zY = v((z, a) => Number((T.battlespellcost[z] || [])[a]) || 0, "techCost");
function zD() {
  for (let z = 0; z < 3; z++) {
    if (T.monster && T.monster[z] === 1) {
      return z;
    }
  }
  return -1;
}
v(zD, "firstMonster");
function zO(z, a) {
  let cA = T.char.indexOf(1);
  if (cA < 0 || zL(cA)) {
    return null;
  }
  for (let cb of ["WakeKris", "ReviveKris"]) {
    let cB = zg(z, cb);
    if (cB >= 0 && zY(z, cB) <= T.tension) {
      return {
        main: 1,
        tech: cB,
        target: a
      };
    }
  }
  return null;
}
v(zO, "reviveKris");
function zr(z) {
  let a = s.first("obj_jackenstein_enemy");
  if (!a) {
    return null;
  }
  let cA = a.myself | 0;
  if (T.char[z] !== 1) {
    return {
      main: 0
    };
  }
  let cb = zX(cA, "Unleash");
  if (cb >= 0 && T.tension >= (T.actcost[cA][cb] || 0) && a.unleash !== 1) {
    return {
      main: 1,
      act: "Unleash",
      target: cA
    };
  } else {
    return {
      main: 0
    };
  }
}
v(zr, "jackPlan");
function zh(z) {
  let cA = s.first("obj_titan_enemy");
  if (!cA) {
    return null;
  }
  let cb = cA.myself | 0;
  if (T.char[z] !== 1) {
    return zO(z, cb) || {
      main: 0
    };
  }
  if ((cA.dualbusterenabled || cA.susiesideaenabled) && T.canact[cb] && T.canact[cb][0] === 1 && zW(cb, 0) && T.tension >= ((T.actcost[cb] || [])[0] || 0)) {
    return {
      main: 1,
      actIdx: 0,
      target: cb
    };
  }
  let cB = zX(cb, "Unleash");
  if (cB >= 0 && !cA.unleashed && T.tension >= (T.actcost[cb][cB] || 200)) {
    return {
      main: 1,
      act: "Unleash",
      target: cb
    };
  }
  let cv = false;
  for (let cy = 0; cy < 3; cy++) {
    let cj = T.char[cy];
    if (cj > 0 && Number(T.hp[cj]) < Number(T.maxhp[cj]) * 0.35) {
      cv = true;
    }
  }
  let cP = zX(cb, "DualHeal");
  if (cv && cP >= 0 && T.tension >= (T.actcost[cb][cP] || 40)) {
    return {
      main: 1,
      act: "DualHeal",
      target: cb
    };
  } else {
    return {
      main: 0
    };
  }
}
v(zh, "titanPlan");
function zR(z) {
  if (!s.first("obj_titan_spawn_enemy")) {
    return null;
  }
  if (T.char[z] !== 1) {
    return zO(z, zD()) || {
      main: 0
    };
  }
  for (let a = 0; a < 3; a++) {
    if (T.monster[a] !== 1) {
      continue;
    }
    let cA = zX(a, "Banish");
    if (cA >= 0 && T.tension >= (T.actcost[a][cA] || 160)) {
      return {
        main: 1,
        act: "Banish",
        target: a
      };
    }
  }
  return {
    main: 0
  };
}
v(zR, "spawnPlan");
function zZ(z) {
  for (let a = 0; a < 3; a++) {
    if (T.monster[a] === 1 && Number(T.mercymod && T.mercymod[a]) >= 100) {
      return {
        main: 3,
        target: a
      };
    }
  }
  return null;
}
v(zZ, "sparePlan");
function zu(z) {
  let a = zr(z) || zh(z) || zR(z);
  if (a) {
    return zZ(z) || a;
  } else {
    return null;
  }
}
v(zu, "commandPlan");
function zi() {
  if (!z2 || T.chapter !== 4 || T.fighting !== 1 || T.mnfight !== 0 || T.myfight !== 0 || T.battleover) {
    return null;
  }
  let z = T.charturn;
  if (!(z >= 0) || !(z < 3) || !T.char || !(T.char[z] > 0)) {
    return null;
  }
  let a = zu(z);
  if (!a) {
    return null;
  }
  if ((s.frame | 0) % 3 !== 0) {
    return "";
  }
  let cA = T.bmenuno;
  let cb = T.bmenucoord;
  if (!cb) {
    return null;
  }
  let cB = cv => cb[cv] ? cb[cv][z] | 0 : 0;
  if (cA === 0) {
    let cv = cB(0);
    if (cv === a.main) {
      return "b1";
    } else if ((a.main - cv + 5) % 5 <= 2) {
      return "right";
    } else {
      return "left";
    }
  }
  if (cA === 11 || cA === 12 || cA === 13 || cA === 1 || cA === 3) {
    let cP = a.target === undefined || a.target < 0 ? cB(cA) : a.target;
    if (cB(cA) !== cP && T.monster[cP] === 1) {
      return "down";
    } else {
      return "b1";
    }
  }
  if (cA === 9) {
    let cy = a.actIdx !== undefined ? a.actIdx : a.act ? zX(cB(11), a.act) : -1;
    if (cy < 0) {
      return "b1";
    }
    let cj = cB(9);
    if (cj === cy) {
      return "b1";
    } else if (cj >> 1 === cy >> 1) {
      if (cj & 1) {
        return "left";
      } else {
        return "right";
      }
    } else if (cj < cy) {
      return "down";
    } else {
      return "up";
    }
  }
  if (cA === 2) {
    let cN = a.tech;
    if (cN === undefined || cN < 0) {
      return "b1";
    }
    let cK = cB(2);
    if (cK === cN) {
      return "b1";
    } else if (cK >> 1 === cN >> 1) {
      return "right";
    } else if (cK < cN) {
      return "down";
    } else {
      return "up";
    }
  }
  if (cA === 7 || cA === 8) {
    let q0 = a.hero === undefined ? cB(cA) : a.hero;
    if (cB(cA) !== q0) {
      return "down";
    } else {
      return "b1";
    }
  }
  return null;
}
v(zi, "ch4MenuAction");
function zQ() {
  let z = s.first("obj_heart");
  if (!z) {
    return {
      l: 0,
      t: 0,
      r: 16,
      b: 16
    };
  }
  let a = h(z);
  return {
    l: a[0] - z.x,
    t: a[1] - z.y,
    r: a[2] + 1 - z.x,
    b: a[3] + 1 - z.y
  };
}
v(zQ, "soulBoxRel");
function zI(z) {
  if (!z2 || T.chapter !== 4) {
    return;
  }
  if (z.constructor.name === "obj_mizzle_spotlight") {
    let cA = s.first("obj_mizzle_spotlight_controller_b");
    let cb = s.first("obj_mizzle_spotlight_controller");
    if (cA && cA.alert || cb && cb.alert) {
      return null;
    }
    if (cA) {
      let cB = zQ();
      let cv = 30;
      let cP = z.x - 10 - cv;
      let cy = z.x - 10 + cv;
      let cj = z.y - 10 - cv;
      let cN = z.y - 10 + cv;
      return [{
        rect: [cP + cB.r - 1, cj + cB.b - 1, cy + cB.l + 1, cN + cB.t + 1],
        blue: false
      }];
    }
    if (cb) {
      return [{
        mask: true,
        blue: false
      }];
    } else {
      return null;
    }
  }
}
v(zI, "ch4Shapes");
y();
y();
var zm = ["up", "down", "left", "right", "b1"];
var zp = {
  move: null,
  frame: -9,
  held: ""
};
function zA() {
  zp.move = null;
  zp.frame = -9;
  zp.held = "";
}
v(zA, "climbAutoReset");
function zb() {
  return !!T.autoplay && s.exists("__roomhost") && !!s.first("obj_climb_kris");
}
v(zb, "climbAutoActive");
function zs(cA) {
  let cb = s.first("obj_rotating_tower_controller_new");
  let cB = cb && cb.horizontaltilecount > 0 ? Math.round(cb.horizontaltilecount) : 22;
  let cv = (q7, q8) => [(Math.floor(q7 / 40) % cB + cB) % cB, Math.floor(q8 / 40)];
  let [cP, cy] = cv(cA.x - 20, cA.y - 20);
  let cj = new Set();
  for (let q7 of s.all("obj_climb_enemy")) {
    if (q7.destroyed || q7.active === 0 || q7.damagecon === 3) {
      continue;
    }
    let q8 = h(q7);
    if (q8) {
      for (let q9 = Math.floor((q8[1] + 14) / 40); q9 <= Math.floor((q8[3] - 14) / 40); q9++) {
        cj.add(q9);
      }
    }
  }
  let cN = (qz, qa) => qz + "," + qa;
  let cK = new Set();
  let q0 = new Set();
  for (let qz of s.all("obj_climb_climbable")) {
    let qa = h(qz);
    if (qa) {
      for (let qw = Math.floor(qa[1] / 40); qw <= Math.floor(qa[3] / 40); qw++) {
        for (let qC = Math.floor(qa[0] / 40); qC <= Math.floor(qa[2] / 40); qC++) {
          let qE = cN((qC % cB + cB) % cB, qw);
          q0.add(qE);
          if (!cj.has(qw)) {
            cK.add(qE);
          }
        }
      }
    }
  }
  let q1 = s.all("obj_climb_boostenemy").filter(qc => qc.y < cA.y + 10 && !qc.destroyed && qc.damagecon !== 3).sort((qc, qq) => qq.y - qc.y)[0];
  let q2 = q1 ? cv(q1.x, q1.y)[1] : null;
  let q3 = (qc, qq) => {
    for (let qS = 3; qS >= 1; qS--) {
      if (q0.has(cN(qc, qq - qS))) {
        return qS;
      }
    }
    return 0;
  };
  let q4 = cA.jumping || cA.fallingcon || cA.boosting || cA.climbcon;
  if (!zp.move && !q4) {
    let qc = new Map([[cN(cP, cy), null]]);
    let qq = [[cP, cy]];
    let qS = null;
    for (let qV = 0; qV < qq.length; qV++) {
      let [qF, qH] = qq[qV];
      if (q1 ? qH > q2 && qH <= q2 + 3 && q3(qF, qH) >= qH - q2 : qH <= cy - 20) {
        qS = [qF, qH];
        break;
      }
      let qx = [[(qF + 1) % cB, qH, "right"], [(qF + cB - 1) % cB, qH, "left"], [qF, qH - 1, "up"], [qF, qH + 1, "down"], [qF, qH - 2, "j2"], [qF, qH - 3, "j3"]];
      for (let [qJ, qU, qd] of qx) {
        let qM = cN(qJ, qU);
        if (!qc.has(qM) && !!cK.has(qM) && (qd !== "j2" || !cK.has(cN(qF, qH - 1))) && (qd !== "j3" || !cK.has(cN(qF, qH - 1)) && !cK.has(cN(qF, qH - 2)))) {
          qc.set(qM, [qF, qH, qd]);
          qq.push([qJ, qU]);
        }
      }
    }
    let qk = null;
    if (qS) {
      let qf = qS;
      let qT = null;
      while (qc.get(cN(qf[0], qf[1]))) {
        qT = qc.get(cN(qf[0], qf[1]));
        if (qT[0] === cP && qT[1] === cy) {
          qk = qT[2];
          break;
        }
        qf = [qT[0], qT[1]];
      }
      if (!qk && q1 && qS[0] === cP && qS[1] === cy) {
        qk = "boost";
      }
    }
    zp.move = qk ? {
      how: qk,
      t: 0,
      from: [cP, cy],
      n: qk === "boost" ? q3(cP, cy) : 0
    } : {
      how: "up",
      t: 0,
      from: [cP, cy]
    };
  }
  let q5 = new Set();
  let q6 = zp.move;
  if (q6) {
    q6.t++;
    if (q6.how === "left" || q6.how === "right" || q6.how === "up" || q6.how === "down") {
      q5.add(q6.how);
      if (cP !== q6.from[0] || cy !== q6.from[1] || q6.t > 30) {
        zp.move = null;
        q5.clear();
      }
    } else {
      let qL = q6.how === "j2" ? 2 : q6.how === "j3" ? 3 : Math.max(1, Math.min(3, q6.n));
      let qG = qL === 1 ? 4 : qL === 2 ? 14 : 26;
      q5.add("up");
      if (q6.t <= qG) {
        q5.add("b1");
      }
      if (q6.t > qG + 40 && !q4) {
        zp.move = null;
        q5.clear();
      }
    }
  }
  return q5;
}
v(zs, "plan");
function zB() {
  if (!zb()) {
    if (zp.move || zp.held) {
      zA();
    }
    return false;
  }
  let z = s.first("obj_climb_kris");
  if (s.frame !== zp.frame + 1) {
    zp.move = null;
    zp.held = "";
  }
  zp.frame = s.frame;
  let a = zs(z);
  let cA = zp.held;
  let cb = zm.filter(cB => a.has(cB)).join(",");
  zp.held = cb;
  for (let cB of zm) {
    m.held[cB] = a.has(cB);
  }
  m.synthetic = () => {
    let cv = cA ? cA.split(",") : [];
    for (let cP of zm) {
      let cy = a.has(cP);
      let cj = cv.includes(cP);
      m.held[cP] = cy;
      m.pressed[cP] = cy && !cj;
      if (!cy && cj) {
        m.released[cP] = true;
      }
    }
  };
  return true;
}
v(zB, "climbAutoStep");
var zv = v(() => T.chapter === 5 && !globalThis.__ch5Off, "ch5");
var zP = v(() => zv() ? T.encounterno | 0 : 0, "enc");
var zy = {
  lastTurnMenu: -1,
  rc: null,
  rcI: 0,
  rcN: 0,
  rcHeld: "",
  rcFrame: -9,
  rcCool: 0,
  rcCleanUntil: 0
};
var zj = {
  menuPresses: 0,
  plans: {},
  shapes: {},
  goals: 0,
  rcDecisions: 0,
  rcRollouts: 0,
  rcFrames: 0,
  rcMs: 0,
  rcKinds: {}
};
function zN() {
  return {
    ...zy,
    rc: zy.rc ? zy.rc.slice() : null
  };
}
v(zN, "ch5SaveState");
function zK(z) {
  if (z) {
    Object.assign(zy, z);
    zy.rc = z.rc ? z.rc.slice() : null;
  } else {
    a0();
  }
}
v(zK, "ch5LoadState");
function a0() {
  zy.lastTurnMenu = -1;
  zy.rc = null;
  zy.rcI = 0;
  zy.rcN = 0;
  zy.rcHeld = "";
  zy.rcFrame = -9;
  zy.rcCool = 0;
  zy.rcCleanUntil = 0;
}
v(a0, "ch5ResetState");
function a1() {
  return "ch5 " + zy.lastTurnMenu + " rc " + (zy.rc ? zy.rc.length : "-") + "/" + zy.rcI + "/" + zy.rcN + " " + zy.rcHeld + " " + zy.rcFrame + " " + (zy.rcCool | 0);
}
v(a1, "ch5Digest");
var a2 = v((z, a) => {
  z[a] = (z[a] || 0) + 1;
}, "bump");
function a3() {
  let z = s.first("obj_heart");
  let a = z && (typeof z.mask_index == "number" && z.mask_index < 0 ? z.sprite_index : z.mask_index || z.sprite_index);
  let cA = a && R[a];
  if (!z || !cA || !cA.bb) {
    return {
      l: 0,
      t: 0,
      r: 16,
      b: 16
    };
  }
  let cb = z.image_xscale || 1;
  let cB = z.image_yscale || 1;
  return {
    l: (cA.bb[0] - cA.ox) * cb,
    t: (cA.bb[1] - cA.oy) * cB,
    r: (cA.bb[2] + 1 - cA.ox) * cb,
    b: (cA.bb[3] + 1 - cA.oy) * cB
  };
}
v(a3, "soulBox");
function a4(z) {
  if (!zv()) {
    return;
  }
  let a = z.constructor.name;
  if (a === "obj_sheary_smashcutter") {
    if ((z.timer | 0) !== 48) {
      return null;
    }
    let cA = a3();
    a2(zj.shapes, a);
    return [{
      rect: [0, z.y - 12 + cA.b - 1, 640, z.y + 12 + cA.t + 1],
      blue: false
    }];
  }
  if (a === "obj_bullet_knife" && (z.netskie === 1 || z.netskie === true)) {
    return null;
  }
  if (a === "obj_purple_aim_attack") {
    let cb = z.alarm ? Number(z.alarm[0]) : -1;
    if (z.state === "attack" && (z.countdown | 0) >= 25 || z.state === "idle" && cb >= 24 && cb <= 25) {
      a2(zj.shapes, a);
      return [{
        mask: true,
        blue: false
      }];
    } else {
      return null;
    }
  }
}
v(a4, "ch5Shapes");
function a5() {
  if (!zv() || globalThis.__ch5NoGoal) {
    return null;
  }
  if (zP() === 229) {
    let z = [];
    let a = a3();
    for (let cA of s.list) {
      if (!cA.destroyed && cA.constructor.name === "obj_bullet_knife" && (cA.netskie === 1 || cA.netskie === true) && !!cA.active) {
        z.push({
          rect: [cA.x - 8 - a.r, cA.y - 8 - a.b, cA.x + 8 - a.l, cA.y + 8 - a.t],
          w: 30
        });
      }
    }
    if (z.length) {
      return z;
    } else {
      return null;
    }
  }
  return null;
}
v(a5, "ch5Goals");
function a6() {
  if (zv() && zP() === 234) {
    let z = s.first("obj_growtangle");
    if (z && !z.destroyed && typeof z.keep_function == "function") {
      let a = Number(z.box_extra) || 0;
      return [z.x - 70, z.x + 52, z.y - (a + 70), z.y + 52];
    }
  }
}
v(a6, "ch5Clamp");
function a7(z) {
  if (zv()) {
    if (a8()) {
      return null;
    } else {
      return undefined;
    }
  }
}
v(a7, "ch5SoulKind");
function a8() {
  if (!zv() || globalThis.__ch5NoRC) {
    return null;
  }
  let z = s.first("obj_orangeheart");
  if (z && !z.destroyed) {
    return "orange";
  }
  let a = s.first("obj_purplecontrols");
  if (a && !a.destroyed && s.first("obj_heart")) {
    return "purple";
  } else {
    return null;
  }
}
v(a8, "rcKind");
var a9 = null;
function az() {
  if (a9) {
    return a9;
  }
  let z = l(A);
  let a = z.ctx;
  try {
    Object.defineProperty(z, "ctx", {
      get: () => a,
      set: () => {},
      configurable: true
    });
  } catch {}
  return a9 = z;
}
v(az, "gfx5");
var aa = {
  u: "up",
  d: "down",
  l: "left",
  r: "right",
  z: "b1"
};
var aw = ["up", "down", "left", "right", "b1"];
function aC(z) {
  let a = {};
  for (let cA of z || "") {
    if (aa[cA]) {
      a[aa[cA]] = true;
    }
  }
  return a;
}
v(aC, "keysOf");
function aE(z, a) {
  let cA = aC(z);
  let cb = aC(a);
  return () => {
    for (let cB of aw) {
      let cv = !!cA[cB];
      let cP = !!cb[cB];
      m.held[cB] = cv;
      m.pressed[cB] = cv && !cP;
      if (!cv && cP) {
        m.released[cB] = true;
      }
    }
  };
}
v(aE, "applyKeys");
var ac = v(() => {
  if (typeof T.hp == "number") {
    return T.hp;
  }
  let z = 0;
  for (let a of [1, 2, 3]) {
    let cA = Number(T.hp && T.hp[a]);
    if (Number.isFinite(cA)) {
      z += cA;
    }
  }
  return z;
}, "partyHP");
function aq() {
  let z = s.first("obj_tensionbar");
  return z && Number(z.maxtensionlimit) || 0;
}
v(aq, "tensionCap");
var aS = 0;
var ak = 0;
function aV(cA, cb, cB, cv) {
  let cP = m.synthetic;
  let cy = {};
  for (let qk of aw) {
    cy[qk] = m.held[qk];
  }
  let cj = ac();
  let cN = Number(T.tension) || 0;
  let cK = aq();
  let q0 = T.mnfight;
  let q1 = cv === "orange" ? s.first("obj_debug_orangeheartcontroller") : null;
  let q2 = q1 && q1.scrolling ? 1 : 0;
  let q3 = cv === "orange" ? s.number("obj_orangeheart_wall") : 0;
  let q4 = cv === "purple" ? s.first("obj_purplecontrols") : null;
  let q5 = q4 && Number(q4.difficulty) || 0;
  let q6 = q4 && Number(q4.pattern_phase) || 0;
  let q7 = q4 && q4.mode === 8 && (q4.difficulty | 0) === 3;
  let q8 = () => {
    let qV = s.first("obj_purplecontrols");
    if (qV) {
      return s.all("obj_pinknode").indexOf(qV.node_id);
    } else {
      return -1;
    }
  };
  let q9 = q7 ? q8() : -1;
  let qz = cv === "purple" ? s.all("obj_pinknodeact").filter(qV => !qV.destroyed && qV.mode === 1).length : 0;
  let qa = qV => s.all("obj_pinknodeact").filter(qF => !qF.destroyed && qF.mode === qV && (Number(qF.timer) || 0) >= 0).length;
  let qw = cv === "purple" ? qa(1) : 0;
  let qC = cv === "purple" ? qa(0) : 0;
  let qE = 0;
  let qc = zy.rcHeld;
  let qq = 0;
  aS = 0;
  let qS = r();
  g(false);
  D();
  try {
    for (let qV = 0; qV < cB; qV++) {
      let qF = cb[qV] !== undefined ? cb[qV] : "";
      m.synthetic = aE(qF, qc);
      try {
        p(U, az());
      } catch {
        break;
      }
      qq++;
      qc = qF;
      if (globalThis.__ch5trace) {
        let qx = s.first("obj_orangeheart") || s.first("obj_heart");
        globalThis.__ch5trace.push((qx ? Math.round(qx.x) + "," + Math.round(qx.y) + (qx.chargecon !== undefined ? " c" + qx.chargecon + "/" + qx.chargetimer : "") : "-") + " hp" + ac() + " n" + s.list.length + " r" + b.state % 1000);
      }
      let qH = ac();
      if (qH < cj) {
        qE += (cj - qH) * (10 + (cB - qV) * 10 / cB);
        aS = cj - qH;
        break;
      }
      if (T.battleover || T.mnfight !== q0) {
        break;
      }
    }
    qE -= Math.max(0, (Number(T.tension) || 0) - cN) * 0.5;
    qE -= Math.max(0, aq() - cK) * 2;
    if (cv === "purple") {
      let qJ = s.first("obj_purplecontrols");
      if (qJ) {
        qE -= Math.max(0, (Number(qJ.difficulty) || 0) - q5) * 300;
      }
      if (qJ && (Number(qJ.difficulty) || 0) === q5) {
        qE -= Math.max(0, (Number(qJ.pattern_phase) || 0) - q6) * 150;
      }
      if (q7 && q9 >= 0) {
        let qd = q8();
        if (qd >= 0) {
          qE -= (qd - q9) * 5;
        }
      }
      qE -= Math.max(0, s.all("obj_pinknodeact").filter(qM => !qM.destroyed && qM.mode === 1).length - qz) * 100;
      qE -= Math.max(0, qa(1) - qw) * 300;
      qE += Math.max(0, qa(0) - qC) * 300;
      let qU = s.first("obj_heart");
      if (qU) {
        let qM = Infinity;
        for (let qf of s.all("obj_dokiheart")) {
          if (!qf.destroyed) {
            qM = Math.min(qM, Math.hypot(qf.x - (qU.x + 9), qf.y - (qU.y + 9)));
          }
        }
        if (qM === Infinity) {
          for (let qT of s.all("obj_pinknodeact")) {
            if (!qT.destroyed && qT.mode === 1 && qT.active === 1) {
              qM = Math.min(qM, Math.hypot(qT.x - (qU.x + 9), qT.y - (qU.y + 9)));
            }
          }
        }
        if (qM < Infinity) {
          qE += Math.min(qM, 300) * 0.1;
        }
      }
      if (qJ && (qJ.mode | 0) === 1) {
        qE += Math.abs(Number(qJ.x_ongrid) || 0) * 0.04;
      }
    }
    if (cv === "orange" && q1) {
      let qL = s.first("obj_debug_orangeheartcontroller");
      if (qL && qL.scrolling && !q2) {
        qE -= 200;
      }
      qE -= Math.max(0, q3 - s.number("obj_orangeheart_wall")) * 20;
      let qG = s.first("obj_orangeheart");
      if (qG && qG.chargecon === 1) {
        qE += 3;
      }
      let qW = s.first("obj_orangeheart_chaseattack");
      if (qG && qW && !qW.destroyed && (qW.state | 0) === 0) {
        let qX = qG.bbox_left + 5 - qW.bbox_right;
        if (qX < 200) {
          qE += (200 - Math.max(0, qX)) * 0.4;
        }
      }
      for (let qg of cb) {
        if (qg && qg.includes("z")) {
          qE += 0.02;
        }
      }
    }
  } finally {
    M(cA);
    O();
    g(qS);
    m.synthetic = cP;
    for (let qY of aw) {
      m.held[qY] = cy[qY];
    }
  }
  zj.rcRollouts++;
  zj.rcFrames += qq;
  ak = qq;
  return qE;
}
v(aV, "rollout");
var aF = v((z, a) => Array.from({
  length: a
}, () => z), "rep");
function ao(z, a, cA, cb = 0) {
  let cB = aF("", a);
  let cv = cb;
  for (let cP of z) {
    if (cv < a) {
      cB[cv] = cP;
    }
    cv += cA;
  }
  return cB;
}
v(ao, "taps");
function aH(z, cA) {
  let cb = [];
  cb.push(aF("", cA));
  if (z === "purple") {
    let cB = s.first("obj_purplecontrols");
    let cv = cB ? cB.mode | 0 : 1;
    if (cv === 0) {
      for (let cP of ["u", "d", "l", "r", "ul", "ur", "dl", "dr"]) {
        cb.push(aF(cP, cA), [...aF(cP, 6), ...aF("", cA - 6)]);
      }
    } else if (cv === 1) {
      let cy = cB.lane_y | 0;
      for (let cj = 0; cj <= 2; cj++) {
        for (let cN of ["", "l", "r"]) {
          if (cj === cy && !cN) {
            continue;
          }
          let cK = [];
          for (let q0 = cy; q0 !== cj; q0 += cj > cy ? 1 : -1) {
            cK.push(cj > cy ? "d" : "u");
          }
          cb.push(ao(cK, cA, 4).map(q1 => q1 + cN));
          if (cj !== cy && !cN) {
            cb.push(ao(cK, cA, 4, 8));
          }
        }
      }
    } else if (cv === 2) {
      let q1 = cB.lane_x | 0;
      let q2 = cB.lane_y | 0;
      for (let q3 = 0; q3 <= 3; q3++) {
        for (let q4 = 0; q4 <= 3; q4++) {
          if (q3 === q1 && q4 === q2) {
            continue;
          }
          let q5 = [];
          for (let q7 = q1; q7 !== q3; q7 += q3 > q1 ? 1 : -1) {
            q5.push(q3 > q1 ? "r" : "l");
          }
          let q6 = [];
          for (let q8 = q2; q8 !== q4; q8 += q4 > q2 ? 1 : -1) {
            q6.push(q4 > q2 ? "d" : "u");
          }
          cb.push(ao([...q5, ...q6], cA, 3));
          if (q5.length && q6.length) {
            cb.push(ao([...q6, ...q5], cA, 3));
          }
        }
      }
    } else {
      for (let q9 of ["u", "d", "l", "r"]) {
        cb.push(ao([q9], cA, 4), ao([q9], cA, 4, 8));
        for (let qz of ["u", "d", "l", "r"]) {
          cb.push(ao([q9, qz], cA, 4));
        }
      }
    }
    for (let qa of ad(cB)) {
      cb.push(qa);
    }
  } else if (z === "orange") {
    let qw = s.first("obj_orangeheart");
    let qC = qw && qw.chargecon === 1;
    for (let qE of ["", "u", "d"]) {
      for (let qc of qE ? [6, cA] : [cA]) {
        let qq = [...aF(qE, qc), ...aF("", cA - qc)];
        for (let qS of qC ? [0, 6, 16] : qE ? [0, 17] : [0, 8, 17]) {
          if (!!qE || !!qS) {
            cb.push(qq.map((qk, qV) => qk + (qV < qS ? "z" : "")));
          }
        }
      }
    }
  }
  return cb;
}
v(aH, "candidates");
function ax(z) {
  let a = [];
  let cA = cb => {
    let cB = [];
    for (let [cv, cP] of cb) {
      for (let cy = 0; cy < cP; cy++) {
        cB.push(cv);
      }
    }
    while (cB.length < z) {
      cB.push("");
    }
    return cB.slice(0, Math.max(z, cB.length));
  };
  for (let cb of ["u", "d"]) {
    let cB = cb === "u" ? "d" : "u";
    for (let cv of [3, 9]) {
      a.push(cA([[cb, cv], ["z", 17]]));
      a.push(cA([[cb, cv], [cb + "z", 17]]));
    }
    a.push(cA([[cb + "z", 12]]));
    a.push(cA([[cb, 6], [cB, z - 6]]));
    a.push(cA([[cb, 4], ["", 8], [cb, 12]]));
  }
  for (let cP of [4, 12]) {
    a.push(cA([["z", cP]]));
  }
  a.push(cA([["", 6], ["z", 17]]));
  return a;
}
v(ax, "rescueOrange");
function aJ(z, cA) {
  let cb = [];
  if (!z || (z.mode | 0) !== 1) {
    return cb;
  }
  let cB = z.lane_y | 0;
  let cv = [cP => cP < 12 ? "l" : "r", cP => cP < 12 ? "r" : "l", cP => cP >= 16 ? "l" : "", cP => cP >= 16 ? "r" : ""];
  for (let cP = 0; cP <= 2; cP++) {
    for (let cy of [6, 18]) {
      for (let cj of cv) {
        let cN = [];
        for (let q0 = cB; q0 !== cP; q0 += cP > cB ? 1 : -1) {
          cN.push(cP > cB ? "d" : "u");
        }
        if (!cN.length && cy === 18) {
          continue;
        }
        let cK = ao(cN, cA, 4, cy);
        cb.push(cK.map((q1, q2) => q1 + cj(q2)));
      }
    }
  }
  return cb;
}
v(aJ, "rescuePurple");
var aU = ["r", "u", "l", "d"];
function ad(cA) {
  let cb = cA && cA.node_id;
  if (!cb || typeof cb != "object" || cb.destroyed || !Array.isArray(cb.child)) {
    return [];
  }
  let cB = aG.purple;
  let cv = [];
  for (let q0 of s.all("obj_dokiheart")) {
    if (!q0.destroyed) {
      cv.push([q0.x, q0.y]);
    }
  }
  if (!cv.length) {
    for (let q1 of s.all("obj_pinknodeact")) {
      if (!q1.destroyed && q1.mode === 1 && q1.active === 1 && (Number(q1.timer) || -1) < 0) {
        cv.push([q1.x, q1.y]);
      }
    }
  }
  let cP = !cv.length && cA.mode === 8 && (cA.difficulty | 0) === 3;
  if (!cv.length && !cP) {
    return [];
  }
  let cy = new Map([[cb, null]]);
  let cj = [cb];
  while (cj.length) {
    let q2 = cj.shift();
    let q3 = 0;
    for (let q4 = q2; cy.get(q4); q4 = cy.get(q4).from) {
      q3++;
    }
    if (!(q3 >= (cP ? 12 : 8))) {
      for (let q5 = 0; q5 < 4; q5++) {
        let q6 = q2.child[q5];
        if (!!q6 && typeof q6 == "object" && !q6.destroyed && !cy.has(q6)) {
          cy.set(q6, {
            from: q2,
            dir: aU[q5]
          });
          cj.push(q6);
        }
      }
    }
  }
  let cN = [];
  let cK = cP ? [null] : cv;
  for (let q7 of cK) {
    let q8 = null;
    let q9 = Infinity;
    if (q7) {
      for (let qC of cy.keys()) {
        let qE = Math.hypot((qC.x || 0) - q7[0], (qC.y || 0) - q7[1]);
        if (qE < q9) {
          q9 = qE;
          q8 = qC;
        }
      }
    } else {
      let qc = s.all("obj_pinknode");
      let qq = qc.indexOf(cb);
      for (let qS of cy.keys()) {
        let qk = qc.indexOf(qS);
        if (qk <= qq || qk > qq + 12) {
          continue;
        }
        let qV = -qk;
        if (qV < q9) {
          q9 = qV;
          q8 = qS;
        }
      }
    }
    if (!q8 || q8 === cb) {
      continue;
    }
    let qz = [];
    for (let qF = q8; cy.get(qF); qF = cy.get(qF).from) {
      qz.unshift({
        dir: cy.get(qF).dir,
        len: Math.hypot((qF.x || 0) - (cy.get(qF).from.x || 0), (qF.y || 0) - (cy.get(qF).from.y || 0))
      });
    }
    let qa = {
      r: "l",
      l: "r",
      u: "d",
      d: "u"
    };
    let qw = qz.slice().reverse().map(qH => ({
      dir: qa[qH.dir],
      len: qH.len
    }));
    for (let qH of [qz, [...qz, ...qw]]) {
      let qx = qH.reduce((qJ, qU) => qJ + Math.ceil(qU.len / 22) + 2, 0);
      for (let qJ = 0; qJ <= 84; qJ += 12) {
        let qU = Math.max(cB, qJ + qx + 12);
        let qd = aF("", qU);
        let qM = qJ;
        for (let qf of qH) {
          qd[qM] = qf.dir;
          qM += Math.ceil(qf.len / 22) + 2;
        }
        cN.push(qd);
      }
    }
  }
  return cN;
}
v(ad, "nodePaths");
var aM = 0;
function al(z) {
  aM = Math.max(0, Number(z) || 0);
}
v(al, "setCh5Budget");
function af() {
  return a8();
}
v(af, "ch5RolloutKind");
var aT = {
  purple: 6,
  orange: 6
};
var aL = {
  purple: 4,
  orange: 3
};
var aG = {
  purple: 48,
  orange: 24
};
function aW() {
  for (let z of s.all("obj_writer")) {
    if (!z.destroyed && z.image_alpha !== 0 && (z.halt === 1 || z.halt === 2 || z.halt === 4)) {
      return true;
    }
  }
  return false;
}
v(aW, "writerParked");
function aX(cA) {
  if (zB()) {
    return true;
  }
  let cb = a8();
  if (!cb || !T.autoplay) {
    if (zy.rc) {
      zy.rc = null;
      zy.rcI = 0;
    }
    return false;
  }
  if (T.mnfight !== 2 && cb !== "orange") {
    zy.rc = null;
    zy.rcHeld = "";
    return false;
  }
  let cB = aT[cb];
  let cv = aG[cb];
  if (s.frame !== zy.rcFrame + 1) {
    zy.rc = null;
  }
  zy.rcFrame = s.frame;
  if (!zy.rc || zy.rcI >= cB || zy.rcI >= zy.rc.length) {
    let cN = performance.now();
    let cK = d();
    let q0 = zy.rc ? zy.rc.slice(zy.rcI) : [];
    let q1 = q0.length ? [...q0, ...aF(q0[q0.length - 1].replace(/z/g, ""), Math.max(0, cv - q0.length))] : null;
    let q2 = null;
    let q3 = Infinity;
    let q4 = 0;
    if (aM > 0 && !!q1 && zy.rcN % aL[cb] !== 0 && s.frame + 12 <= (zy.rcCleanUntil | 0)) {
      q3 = 0;
      q2 = q1;
      q4 = 0;
      zj.rcTrusted = (zj.rcTrusted | 0) + 1;
    } else if (q1) {
      q3 = aV(cK, q1, Math.max(cv, q1.length), cb);
      q2 = q1;
      q4 = aS;
      zy.rcCleanUntil = q4 ? 0 : s.frame + ak;
    }
    let q5 = !q1 || q4 > 0 || zy.rcN % aL[cb] === 0;
    let q6 = globalThis.__ch5dbgRC && s.frame >= globalThis.__ch5dbgRC[0] && s.frame <= globalThis.__ch5dbgRC[1] ? [] : null;
    if (q6 && q1) {
      q6.push("cont=" + q3.toFixed(0));
    }
    let q7 = q1 ? q4 : Infinity;
    let q8 = () => performance.now() - cN;
    let q9 = () => aM > 0 && globalThis.__ch5Cut === true && (q8() > aM * 3 || q8() > aM && q7 === 0);
    if (q5) {
      for (let qz of aH(cb, cv)) {
        if (q9()) {
          zj.rcCut = (zj.rcCut | 0) + 1;
          break;
        }
        let qa = aV(cK, qz, Math.max(cv, qz.length), cb);
        if (qa < q3 - 1e-9) {
          q7 = aS;
          zy.rcCleanUntil = aS ? 0 : s.frame + ak;
        }
        if (q6) {
          q6.push(qz.slice(0, 12).map(qw => qw || ".").join("") + "=" + qa.toFixed(0));
        }
        if (qa < q3 - 1e-9) {
          q3 = qa;
          q2 = qz;
        }
      }
      if (zy.rcCool > 0) {
        zy.rcCool--;
      } else if (q3 >= 300) {
        for (let qw of cb === "orange" ? ax(cv) : aJ(s.first("obj_purplecontrols"), cv)) {
          if (q9()) {
            zj.rcCut = (zj.rcCut | 0) + 1;
            break;
          }
          let qC = aV(cK, qw, Math.max(cv, qw.length), cb);
          if (qC < q3 - 1e-9) {
            q7 = aS;
            zy.rcCleanUntil = aS ? 0 : s.frame + ak;
          }
          if (q6) {
            q6.push("R" + qw.slice(0, 12).map(qE => qE || ".").join("") + "=" + qC.toFixed(0));
          }
          if (qC < q3 - 1e-9) {
            q3 = qC;
            q2 = qw;
          }
        }
        if (q3 >= 300) {
          zy.rcCool = 3;
        }
      }
    }
    if (q6) {
      let qE = s.first("obj_purplecontrols");
      let qc = s.first("obj_heart");
      console.log("RC f" + s.frame + " " + cb + (qE ? " mode " + qE.mode + " lane " + qE.lane_x + "," + qE.lane_y + " og " + qE.x_ongrid + "," + qE.y_ongrid : "") + " soul " + (qc ? Math.round(qc.x) + "," + Math.round(qc.y) : "-") + " best " + q2.slice(0, 12).map(qq => qq || ".").join("") + "=" + q3.toFixed(0) + " | " + q6.join(" "));
    }
    if (globalThis.__ch5verify && q2) {
      globalThis.__ch5trace = [];
      aV(cK, q2, Math.max(cv, q2.length), cb);
      globalThis.__ch5pred = {
        frame: s.frame,
        trace: globalThis.__ch5trace,
        plan: q2.slice()
      };
      globalThis.__ch5trace = null;
    }
    if (q6 && q2) {
      globalThis.__ch5trace = [];
      aV(cK, q2, Math.max(cv, q2.length), cb);
      console.log("RCPRED f" + s.frame + " " + globalThis.__ch5trace.join(" | "));
      globalThis.__ch5trace = null;
    }
    if (q6 && q1) {
      globalThis.__ch5trace = [];
      aV(cK, q1, Math.max(cv, q1.length), cb);
      console.log("RCCONT f" + s.frame + " " + globalThis.__ch5trace.join(" | "));
      globalThis.__ch5trace = null;
    }
    zy.rc = q2;
    zy.rcI = 0;
    zy.rcN++;
    zj.rcDecisions++;
    zj.rcMs += performance.now() - cN;
    a2(zj.rcKinds, cb);
  }
  let cP = zy.rc[zy.rcI++] || "";
  if (cb === "orange" && T.mnfight !== 2 && aW()) {
    cP = s.frame & 1 ? cP.replace(/z/g, "") : cP.includes("z") ? cP : cP + "z";
  }
  let cy = aE(cP, zy.rcHeld);
  zy.rcHeld = cP;
  m.synthetic = cy;
  let cj = aC(cP);
  for (let qq of ["up", "down", "left", "right"]) {
    m.held[qq] = !!cj[qq];
  }
  m.held.b1 = !!cj.b1;
  return true;
}
v(aX, "ch5Step");
var ag = ["left", "right", "up", "down"];
function aY(z) {
  let a = z || {};
  for (let cA of ["b1", "b2", "b3"]) {
    m.held[cA] = !!a[cA];
  }
  m.synthetic = () => {
    for (let cb of ["b1", "b2", "b3"]) {
      m.pressed[cb] = !!a[cb];
      m.held[cb] = !!a[cb];
    }
    for (let cB of ag) {
      if (a[cB]) {
        m.pressed[cB] = true;
        m.held[cB] = true;
      }
    }
  };
  if (z) {
    zj.menuPresses++;
  }
}
v(aY, "send");
var aD = {
  fight: 0,
  act: 1,
  magic: 1,
  tech: 1,
  item: 2,
  spare: 3,
  defend: 4
};
function aO(z) {
  for (let a = 0; a < 3; a++) {
    let cA = T.monsterinstance && T.monsterinstance[a];
    if (T.monster[a] === 1 && cA && !cA.destroyed && cA.constructor.name === z) {
      return a;
    }
  }
  return -1;
}
v(aO, "slotOf");
function at(z, a) {
  let cA = T.actname && T.actname[z] || [];
  for (let cb = 0; cb < 6; cb++) {
    if (cA[cb] === a) {
      return cb;
    }
  }
  return -1;
}
v(at, "actIndex");
function ah(z, cA) {
  let cb = T.char[z];
  let cB = T.battlespell && T.battlespell[z] || [];
  let cv = cb === 2 ? T.actnamesus : cb === 3 ? T.actnameral : null;
  if (!cv) {
    return -1;
  }
  for (let cP = 0; cP < 3; cP++) {
    let cy = cv[cP] || [];
    let cj = 0;
    for (let cN = 0; cN < cB.length; cN++) {
      if (cB[cN] === -1) {
        while (cj < 6 && (!cy[cj] || cy[cj] === " ")) {
          cj++;
        }
        if (cy[cj] === cA) {
          return cN;
        }
        cj++;
      }
    }
  }
  return -1;
}
v(ah, "techSlot");
var aR = v(() => T.fighting === 1 && T.mnfight === 0 && T.myfight === 0 && T.charturn >= 0 && T.charturn < (T.char ? T.char.length : 3) && T.char[T.charturn] > 0, "atMenu");
function aZ(z) {
  let cA = T.charturn;
  let cb = T.bmenuno;
  let cB = T.bmenucoord;
  let cv = cy => cB && cB[cy] ? cB[cy][cA] | 0 : 0;
  if (cb === 0) {
    let cy = cv(0);
    let cj = aD[z.cmd];
    if (cy !== cj) {
      return {
        [(cj - cy + 5) % 5 <= 2 ? "right" : "left"]: true
      };
    } else {
      return {
        b1: true
      };
    }
  }
  let cP = z.cmd === "fight" ? 1 : z.cmd === "spare" ? 12 : z.cmd === "act" ? 11 : z.cmd === "tech" ? 13 : -1;
  if (cb === 1 || cb === 11 || cb === 12 || cb === 13) {
    if (cb !== cP) {
      return {
        b2: true
      };
    } else if (cv(cb) !== (z.target | 0)) {
      return {
        down: true
      };
    } else {
      return {
        b1: true
      };
    }
  }
  if (cb === 9) {
    if (z.cmd !== "act") {
      return {
        b2: true
      };
    }
    let cN = cv(9);
    let cK = z.act | 0;
    if (cN === cK) {
      return {
        b1: true
      };
    } else if (cN >> 1 === cK >> 1) {
      return {
        [cN & 1 ? "left" : "right"]: true
      };
    } else {
      return {
        [cN < cK ? "down" : "up"]: true
      };
    }
  }
  if (cb === 2) {
    if (z.cmd !== "tech") {
      return {
        b2: true
      };
    }
    let q0 = cv(2);
    let q1 = z.slot | 0;
    if (q0 === q1) {
      return {
        b1: true
      };
    } else if (q0 >> 1 === q1 >> 1) {
      return {
        right: true
      };
    } else {
      return {
        [q0 < q1 ? "down" : "up"]: true
      };
    }
  }
  return {
    b2: true
  };
}
v(aZ, "drive");
function au(z) {
  let cA = zP();
  let cb = T.char[z];
  let cB = Number(T.tension) || 0;
  let cv = (cy, cj) => {
    let cN = aO(cy);
    let cK = cN >= 0 ? at(cN, cj) : -1;
    if (cK < 0 || (T.actcost[cN][cK] || 0) > cB) {
      return null;
    } else {
      return {
        cmd: "act",
        target: cN,
        act: cK,
        name: cj
      };
    }
  };
  let cP = (cy, cj) => {
    let cN = aO(cy);
    let cK = ah(z, cj);
    if (cN < 0 || cK < 0 || ((T.battlespellcost && T.battlespellcost[z] || [])[cK] || 0) > cB) {
      return null;
    } else {
      return {
        cmd: "tech",
        target: cN,
        slot: cK,
        name: cj
      };
    }
  };
  if (cA === 221) {
    if (cb === 1) {
      return cv("obj_orange_enemy", "GetAlong") || {
        cmd: "defend"
      };
    } else {
      return {
        cmd: "defend"
      };
    }
  }
  if (cA === 232) {
    let cy = aO("obj_shinobeetle_enemy");
    if (cy < 0) {
      return null;
    }
    let cj = Number(T.mercymod[cy]) || 0;
    if (cj >= 100) {
      return {
        cmd: "spare",
        target: cy
      };
    }
    if (cb === 1) {
      return cv("obj_shinobeetle_enemy", "Convince") || {
        cmd: "spare",
        target: cy
      };
    }
    if (cb === 2) {
      return cP("obj_shinobeetle_enemy", "S-Action") || {
        cmd: "defend"
      };
    }
    if (cb === 3) {
      if (cj + 35 + 20 >= 100) {
        return {
          cmd: "spare",
          target: cy
        };
      } else {
        return cP("obj_shinobeetle_enemy", "R-Action") || {
          cmd: "defend"
        };
      }
    }
  }
  if (cA === 224) {
    if (cb === 1) {
      return cv("obj_pink_enemy", "Flirt") || {
        cmd: "defend"
      };
    } else if (T.acting && T.acting[n()] === 1) {
      return cP("obj_pink_enemy", "Flirt") || {
        cmd: "defend"
      };
    } else {
      return {
        cmd: "defend"
      };
    }
  }
  if (cA === 225) {
    let cN = aO("obj_flowery_enemy");
    if (cb === 1 && cN >= 0) {
      for (let cK of [1, 2]) {
        let q0 = (T.actname[cN] || [])[cK];
        if (q0 && q0 !== " " && T.canact[cN][cK] === 1) {
          let q1 = cv("obj_flowery_enemy", q0);
          if (q1) {
            return q1;
          }
        }
      }
    }
    return {
      cmd: "defend"
    };
  }
  if (cA === 222) {
    let q2 = s.first("obj_yellow_enemy");
    let q3 = q2 ? q2.trial_counter | 0 : 0;
    let q4 = q2 && Array.isArray(q2.evidence_obtained) ? !!q2.evidence_obtained[q3] : true;
    if (cb === 1) {
      return !q4 && cv("obj_blue_enemy", "Evidence") || cv("obj_yellow_enemy", "Justice") || {
        cmd: "defend"
      };
    } else {
      return {
        cmd: "defend"
      };
    }
  }
  if (cA === 220) {
    let q5 = aO("obj_aqua_enemy");
    if (q5 < 0) {
      return null;
    }
    if ((Number(T.mercymod[q5]) || 0) >= 100) {
      return {
        cmd: "spare",
        target: q5
      };
    }
    if (cb !== 1) {
      return {
        cmd: "defend"
      };
    }
    let q6 = T.monsterinstance[q5];
    let q7 = q6 && Array.isArray(q6.act_list) ? q6.act_list : [];
    for (let q8 = 0; q8 < 6; q8++) {
      if (T.canact[q5][q8] === 1 && !q7.includes(q8 + 1)) {
        let q9 = T.actname[q5][q8];
        let qz = q9 && cv("obj_aqua_enemy", q9);
        if (qz) {
          return qz;
        }
      }
    }
    return {
      cmd: "fight",
      target: q5
    };
  }
  if (cA === 234) {
    let qa = aO("obj_trashy_trio");
    if (qa < 0) {
      return null;
    }
    let qw = T.monsterinstance[qa];
    let qC = qw ? qw.myattackchoice | 0 : 0;
    if (cb === 1) {
      return cv("obj_trashy_trio", qC === 0 ? "CleanUp" : "LayUp") || {
        cmd: "defend"
      };
    }
    if (cb === 2) {
      return cP("obj_trashy_trio", "S-Action") || {
        cmd: "defend"
      };
    }
    if (cb === 3) {
      return cP("obj_trashy_trio", "R-Action") || {
        cmd: "defend"
      };
    }
  }
  return null;
}
v(au, "policy");
function ai() {
  let z = s.first("obj_date_controller");
  if (!z || z.destroyed || z.con !== 2) {
    return null;
  }
  let a = s.first("obj_pink_enemy");
  let cA = a ? a.datecount | 0 : 0;
  let cb = z.draw_box_selected | 0;
  let cB = Array.isArray(z.choiceiscorrect) ? z.choiceiscorrect[cb] === 1 : true;
  if (z.draw_box_con === 0 && z.boxalpha === 1) {
    if (cB || z.questioncount === 0 && cA === 1) {
      return {
        up: true
      };
    } else if (cA === 4) {
      return {};
    } else {
      return {
        right: true
      };
    }
  } else {
    return {};
  }
}
v(ai, "dateKeys");
function aQ() {
  let z = s.first("obj_yellow_trial_manager");
  if (!z || z.destroyed || !z.can_control || !z.current_perp || z.current_perp === -1) {
    return null;
  }
  let cA = z.trial_id;
  let cb = (Array.isArray(z.trial_array) || z.trial_array) && z.trial_array[cA];
  let cB = cb ? cb.culprit : -1;
  if (!z.evidence_mode) {
    let cN = z.current_perp;
    if (cN && cN.perp_index !== cB) {
      return {
        right: true
      };
    } else {
      return {
        b1: true
      };
    }
  }
  let cv = Array.isArray(z.evidence_list) ? z.evidence_list : [];
  let cP = cA === 99 ? 10 : cA;
  let cy = cv.findIndex(cK => Array.isArray(cK) && cK[2] === cP);
  if (cy < 0) {
    cy = cv.findIndex(cK => Array.isArray(cK) && cK[2] !== 7);
  }
  if (cy < 0) {
    cy = 0;
  }
  let cj = z.evidence_counter | 0;
  if (globalThis.__ch5dbg) {
    console.log("trial", cA, "culprit", cB, "perp", z.current_perp && z.current_perp.perp_index, "ev", JSON.stringify(cv.map(cK => Array.isArray(cK) ? cK[2] : cK)), "want", cP, "k", cy, "c", cj);
  }
  if (cj < cy) {
    return {
      right: true
    };
  } else if (cj > cy) {
    return {
      left: true
    };
  } else {
    return {
      b1: true
    };
  }
}
v(aQ, "trialKeys");
function aI(z) {
  if (!zv() || !T.autoplay) {
    return false;
  }
  if (zb()) {
    return true;
  }
  {
    let cb = aQ();
    if (cb) {
      a2(zj.plans, zP() + ":trial");
      if (z % 3 === 0) {
        aY(cb);
      } else {
        aY(null);
      }
      return true;
    }
  }
  if (zP() === 224) {
    let cB = ai();
    if (cB) {
      a2(zj.plans, "224:date");
      if (z % 2 === 0) {
        aY(cB);
        for (let cv of ag) {
          m.held[cv] = !!cB[cv];
        }
      } else {
        aY(null);
      }
      return true;
    }
  }
  if (!aR()) {
    return false;
  }
  let a = au(T.charturn);
  if (!a) {
    return false;
  }
  a2(zj.plans, zP() + ":" + T.char[T.charturn] + ":" + a.cmd + (a.name ? ":" + a.name : ""));
  if (z % 4 !== 0) {
    aY(null);
    return true;
  }
  let cA = aZ(a);
  if (globalThis.__ch5dbg) {
    console.log("ch5 menu", s.frame, "ct", T.charturn, "bm", T.bmenuno, "coord", JSON.stringify([0, 1, 2, 9, 11, 12, 13].map(cP => T.bmenucoord[cP] && T.bmenucoord[cP][T.charturn])), JSON.stringify(a), JSON.stringify(cA));
  }
  aY(cA);
  return true;
}
v(aI, "ch5UI");
y();
y();
var am = {};
var ap = v(() => Y === "ut" || Y === "ut10", "utOn");
var aA = new Set(["obj_centeract_parent", "obj_6heal", "obj_6knife_act"]);
var ab = x.filter(([z, a]) => a === "obj_vsflowey_heart" && !aA.has(z)).map(([z]) => z);
var aB = new Set(["obj_gigavine_preview", "obj_gigavine"]);
var av = new Map();
function aP(z) {
  const a = {
    tDTMk: function (cj, cN) {
      return cj === cN;
    },
    gLwUn: "line",
    qhrEU: "obj_centeract_parent",
    ytlcj: "box",
    Xdmoj: function (cj, cN) {
      return cj === cN;
    },
    wQtep: function (cj, cN) {
      return cj === cN;
    }
  };
  const cB = a;
  let cP = z.constructor.name;
  let cy = av.get(cP);
  if (cB.tDTMk(cy, undefined)) {
    cy = aB.has(cP) ? cB.gLwUn : ab.some(cj => z.is(cj)) && !z.is(cB.qhrEU) ? cB.ytlcj : "";
    av.set(cP, cy);
  }
  if (cB.Xdmoj(cy, cB.ytlcj) && cB.wQtep(z.type, 1)) {
    return "";
  } else {
    return cy;
  }
}
v(aP, "hurts");
var ay = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, -1], [-1, 1], [1, 1]];
var aj = 12;
var aN = 3;
function aK() {
  const z = {
    NJwmc: function (cP, cy) {
      return cP === cy;
    },
    wZahG: "iTwHP",
    rfiea: "fTvUu",
    hEBCi: function (cP, cy) {
      return cP(cy);
    },
    ZHsvA: function (cP, cy) {
      return cP === cy;
    },
    rxzue: "line",
    rvpCB: function (cP, cy) {
      return cP / cy;
    },
    rZYTo: function (cP, cy) {
      return cP * cy;
    },
    lBpmi: "obj_gigavine",
    eUBMv: function (cP, cy) {
      return cP + cy;
    },
    zVzrV: function (cP, cy) {
      return cP > cy;
    },
    XVmvI: function (cP, cy) {
      return cP - cy;
    },
    TaBmg: function (cP, cy) {
      return cP - cy;
    },
    GXMFe: function (cP, cy) {
      return cP - cy;
    },
    dKrqv: function (cP, cy) {
      return cP + cy;
    },
    HiBzi: function (cP, cy) {
      return cP + cy;
    },
    KRVPg: function (cP, cy) {
      return cP < cy;
    }
  };
  let cA = [];
  for (let cP of s.list) {
    {
      if (cP.destroyed || cP.visible === false) {
        continue;
      }
      let q2 = aP(cP);
      if (!q2) {
        continue;
      }
      if (q2 === "line") {
        let q9 = ((cP.constructor.name === "obj_gigavine" ? cP.image_angle : cP.direction) || 0) * Math.PI / 180;
        cA.push({
          line: true,
          x: cP.x,
          y: cP.y,
          ux: Math.cos(q9),
          uy: -Math.sin(q9),
          hw: 10 + aN
        });
        continue;
      }
      let q3;
      let q4;
      let q5;
      let q6;
      try {
        q3 = cP.bbox_left;
        q4 = cP.bbox_top;
        q5 = cP.bbox_right;
        q6 = cP.bbox_bottom;
      } catch {
        continue;
      }
      if (![q3, q4, q5, q6].every(Number.isFinite) || q5 - q3 > 700 || q6 - q4 > 600) {
        continue;
      }
      let q7 = Number.isFinite(cP.xprevious) ? cP.x - cP.xprevious : 0;
      let q8 = Number.isFinite(cP.yprevious) ? cP.y - cP.yprevious : 0;
      cA.push({
        l: q3 - aN,
        t: q4 - aN,
        r: q5 + aN,
        b: q6 + aN,
        vx: Math.abs(q7) < 40 ? q7 : 0,
        vy: Math.abs(q8) < 40 ? q8 : 0
      });
    }
  }
  return cA;
}
v(aK, "threats");
function w0(z, a, cA, cb) {
  const cB = {
    lWRiA: function (q1, q2) {
      return q1 - q2;
    },
    dWKSB: function (q1, q2) {
      return q1 + q2;
    },
    ucRKO: function (q1, q2) {
      return q1 * q2;
    },
    MdAXw: function (q1, q2) {
      return q1 * q2;
    },
    JboWO: function (q1, q2) {
      return q1 < q2;
    },
    JpNZf: function (q1, q2) {
      return q1 > q2;
    },
    aQFZO: function (q1, q2) {
      return q1 * q2;
    },
    ONMyR: function (q1, q2) {
      return q1 * q2;
    }
  };
  const cj = cB;
  let cN = cj.lWRiA(a, z.x);
  let cK = cj.lWRiA(cA, z.y);
  let q0 = cj.dWKSB(cj.ucRKO(cN, z.ux), cj.MdAXw(cK, z.uy));
  if (cj.JboWO(q0, -cb) || cj.JpNZf(q0, 640)) {
    return false;
  } else {
    return cj.JboWO(Math.abs(cj.dWKSB(cj.aQFZO(cN, -z.uy), cj.ONMyR(cK, z.ux))), cj.dWKSB(z.hw, cb));
  }
}
v(w0, "lineHits");
function w1() {
  const cb = {
    iaIOV: function (q8) {
      return q8();
    },
    EFMbY: "obj_vsflowey_heart",
    CfIyy: "left",
    haDmG: "right",
    EeYTl: "down",
    DUAaR: function (q8, q9) {
      return q8 !== q9;
    },
    ZupVH: "obj_flowey_master",
    peOJh: function (q8) {
      return q8();
    },
    orJWK: function (q8, q9) {
      return q8 - q9;
    },
    HuPlQ: function (q8, q9) {
      return q8 + q9;
    },
    mZfgH: function (q8, q9) {
      return q8 <= q9;
    },
    csCBE: function (q8, q9) {
      return q8 > q9;
    },
    EGqnK: function (q8, q9) {
      return q8 < q9;
    },
    GsLXp: function (q8, q9) {
      return q8 > q9;
    },
    qRjHq: function (q8, q9) {
      return q8 < q9;
    },
    ySrtv: function (q8, q9) {
      return q8 - q9;
    },
    bBPBs: function (q8, q9) {
      return q8 < q9;
    },
    Gzfgy: function (q8, q9) {
      return q8 > q9;
    },
    tCGrT: function (q8, q9) {
      return q8 > q9;
    },
    qkcOe: function (q8, q9) {
      return q8 > q9;
    },
    nRymD: function (q8, q9) {
      return q8 < q9;
    },
    QnOVi: function (q8, q9) {
      return q8 / q9;
    },
    uyuEL: function (q8, q9) {
      return q8 + q9;
    },
    ewgQx: function (q8, q9) {
      return q8 === q9;
    },
    zSrEc: "LWxKJ",
    hseZE: function (q8, q9, qz, qa, qw) {
      return q8(q9, qz, qa, qw);
    },
    JrUWT: function (q8, q9) {
      return q8 / q9;
    },
    jxUIz: "gEzRr",
    JUUqg: function (q8, q9) {
      return q8 + q9;
    },
    NkkcD: function (q8, q9) {
      return q8 * q9;
    },
    KwzSZ: function (q8, q9) {
      return q8 + q9;
    },
    KxWKE: function (q8, q9) {
      return q8 * q9;
    },
    uakVy: function (q8, q9) {
      return q8 * q9;
    },
    IbOcx: function (q8, q9) {
      return q8 >= q9;
    },
    ZnrkI: function (q8, q9) {
      return q8 <= q9;
    },
    aEHrc: function (q8, q9) {
      return q8 >= q9;
    },
    vLTsl: function (q8, q9) {
      return q8 === q9;
    },
    NZdkb: "mdpxC",
    EQWkc: "XdJZr",
    xFMiV: function (q8, q9) {
      return q8 === q9;
    },
    kaVVm: function (q8, q9) {
      return q8 - q9;
    },
    ghTne: function (q8, q9) {
      return q8 - q9;
    },
    VJmyM: function (q8, q9) {
      return q8 - q9;
    },
    eVWRF: function (q8, q9) {
      return q8 + q9;
    },
    clPWg: function (q8, q9) {
      return q8 / q9;
    },
    DSyKm: function (q8, q9) {
      return q8 / q9;
    },
    Lizin: function (q8, q9) {
      return q8 - q9;
    },
    QHYMY: function (q8, q9) {
      return q8 * q9;
    },
    eWcTR: function (q8, q9) {
      return q8 < q9;
    },
    krZrE: function (q8, q9) {
      return q8 - q9;
    },
    PvLxW: function (q8, q9) {
      return q8 < q9;
    },
    iCoPx: function (q8, q9) {
      return q8 < q9;
    }
  };
  if (!ap()) {
    return null;
  }
  let cB = s.first("obj_vsflowey_heart");
  if (!cB || cB.destroyed) {
    return null;
  }
  for (let q8 of ["left", "right", "up", "down"]) {
    m.held[q8] = false;
  }
  if (cB.move !== 1) {
    return true;
  }
  let cP = s.first("obj_flowey_master");
  let cy = !!cP && !!cP.darkmode;
  let cj = Math.abs(cB.sprite_width) || 16;
  let cN = Math.abs(cB.sprite_height) || 16;
  let cK = 322;
  let q0 = 400;
  let q1 = s.list.find(q9 => !q9.destroyed && q9.visible !== false && q9.is && q9.is("obj_centeract_parent"));
  if (q1) {
    cK = q1.x;
    q0 = q1.y;
  }
  let q2 = aK();
  let q3 = cB.bbox_left - cB.x;
  let q4 = cB.bbox_top - cB.y;
  let q5 = cB.bbox_right - cB.bbox_left;
  let q6 = cB.bbox_bottom - cB.bbox_top;
  let q7 = null;
  for (let [q9, qz] of ay) {
    let qa = cB.x;
    let qw = cB.y;
    let qC = aj + 1;
    let qE = 1000000000;
    for (let qV = 1; qV <= aj && qC > aj; qV++) {
      if (q9 < 0 && qa > 0 && (cy || qa > 108)) {
        qa -= 4;
      }
      if (q9 > 0 && qa < 640 - cj && (cy || qa < 512)) {
        qa += 4;
      }
      if (qz < 0 && qw > 0 && (cy || qw > 268)) {
        qw -= 4;
      }
      if (qz > 0 && qw < 480 - cN) {
        qw += 4;
      }
      let qF = qa + q3;
      let qH = qw + q4;
      let qx = qF + q5;
      let qJ = qH + q6;
      let qU = (qF + qx) / 2;
      let qd = (qH + qJ) / 2;
      for (let qM of q2) {
        {
          if (qM.line) {
            if (w0(qM, qU, qd, Math.max(q5, q6) / 2)) {
              {
                qC = qV;
                break;
              }
            }
            continue;
          }
          let qf = qM.l + qM.vx * qV;
          let qT = qM.r + qM.vx * qV;
          let qL = qM.t + qM.vy * qV;
          let qG = qM.b + qM.vy * qV;
          if (qx >= qf && qF <= qT && qJ >= qL && qH <= qG) {
            {
              qC = qV;
              break;
            }
          }
          if (qV === aj) {
            qE = Math.min(qE, Math.max(qf - qx, qF - qT, qL - qJ, qH - qG));
          }
        }
      }
    }
    let qc = qa + cj / 2;
    let qq = qw + cN / 2;
    let qS = Math.hypot(cK - qc, q0 - qq);
    let qk = qC * 1000 - (qE < 24 ? (24 - qE) * 4 : 0) - qS * (q1 ? 1 : 0.25);
    if (!q7 || qk > q7.score) {
      q7 = {
        score: qk,
        dx: q9,
        dy: qz
      };
    }
  }
  if (q7.dx < 0) {
    m.held.left = true;
  }
  if (q7.dx > 0) {
    m.held.right = true;
  }
  if (q7.dy < 0) {
    m.held.up = true;
  }
  if (q7.dy > 0) {
    m.held.down = true;
  }
  return true;
}
v(w1, "floweyStep");
function w2() {
  const z = {
    aKDqf: function (cv) {
      return cv();
    },
    odpRb: "obj_fakeheart"
  };
  if (!ap()) {
    return false;
  }
  let cb = s.first("obj_fakeheart");
  return !!cb && !cb.destroyed && !!s.list.some(cv => !cv.destroyed && cv.is && cv.is("obj_anybt"));
}
v(w2, "fakeChoice");
function w3() {
  const a = {
    egfpV: function (q0) {
      return q0();
    },
    DAWto: "obj_fakeheart",
    iOntC: "left",
    kYQTn: "right",
    iOfAU: "down",
    OqVSd: function (q0, q1) {
      return q0 - q1;
    },
    sGecU: function (q0, q1) {
      return q0 / q1;
    },
    IbkAs: function (q0, q1) {
      return q0 + q1;
    },
    lqfDs: function (q0, q1) {
      return q0 / q1;
    },
    PKcxC: function (q0, q1) {
      return q0 + q1;
    },
    cClWH: function (q0, q1) {
      return q0 / q1;
    },
    WbWKY: function (q0, q1) {
      return q0 > q1;
    },
    XSxiZ: function (q0, q1) {
      return q0 - q1;
    },
    HOxkO: function (q0, q1) {
      return q0 > q1;
    },
    JfFOg: function (q0, q1) {
      return q0 > q1;
    },
    hHwpC: function (q0, q1) {
      return q0 - q1;
    }
  };
  if (!w2()) {
    return false;
  }
  let cA = s.first("obj_fakeheart");
  let cb = s.list.filter(q0 => !q0.destroyed && q0.is && q0.is("obj_anybt"));
  for (let q0 of ["left", "right", "up", "down"]) {
    m.held[q0] = false;
  }
  let cP = cb.find(q1 => /sparebt/.test(String(q1.sprite_index))) || cb[cb.length - 1];
  let cy = (cA.bbox_left + cA.bbox_right) / 2;
  let cj = (cA.bbox_top + cA.bbox_bottom) / 2;
  let cN = (cP.bbox_left + cP.bbox_right) / 2;
  let cK = (cP.bbox_top + cP.bbox_bottom) / 2;
  if (cN - cy > 3) {
    m.held.right = true;
  } else if (cy - cN > 3) {
    m.held.left = true;
  }
  if (cK - cj > 3) {
    m.held.down = true;
  } else if (cj - cK > 3) {
    m.held.up = true;
  }
  return true;
}
v(w3, "fakeHeartStep");
function w4(z) {
  const a = {
    bBqvg: function (cy, cj) {
      return cy === cj;
    },
    EUELG: function (cy, cj) {
      return cy | cj;
    },
    FSRgN: function (cy, cj) {
      return cy - cj;
    },
    MfAXE: function (cy, cj) {
      return cy + cj;
    },
    QKlIh: function (cy, cj) {
      return cy - cj;
    },
    hJlOP: function (cy, cj) {
      return cy(cj);
    },
    YZnZb: function (cy, cj) {
      return cy(cj);
    },
    RqAId: function (cy, cj) {
      return cy(cj);
    },
    RCJrC: function (cy, cj) {
      return cy(cj);
    },
    tojoi: function (cy, cj) {
      return cy < cj;
    }
  };
  if (!z || z.destroyed || z.mercymod === undefined) {
    return false;
  }
  let cv = z.myself | 0;
  let cP = Number(T.monsterhp[cv]) - Number(T.at) - Number(T.wstrength) + Number(T.monsterdef[cv]) - Number(z.mercymod);
  return Number.isFinite(cP) && cP < 0;
}
v(w4, "sparable");
function w5() {
  const z = {
    yQSBy: function (cP, cy) {
      return cP < cy;
    },
    SbeeU: function (cP, cy) {
      return cP === cy;
    }
  };
  const cA = z;
  let cB = [];
  for (let cP = 0; cA.yQSBy(cP, 6); cP++) {
    if (T.choices && cA.SbeeU(T.choices[cP], 1)) {
      cB.push(cP);
    }
  }
  return cB;
}
v(w5, "liveActs");
function w6() {
  const z = {
    nThuB: function (cK, q0) {
      return cK | q0;
    },
    Tbwhn: function (cK, q0) {
      return cK === q0;
    },
    iHLNL: "ut10",
    DcQuF: function (cK, q0) {
      return cK >= q0;
    },
    VBEEV: function (cK, q0) {
      return cK <= q0;
    },
    QByGh: function (cK, q0) {
      return cK === q0;
    },
    HLYSl: function (cK, q0) {
      return cK === q0;
    },
    QJrNl: function (cK, q0) {
      return cK | q0;
    },
    xYEXO: function (cK, q0) {
      return cK !== q0;
    },
    QaBNO: "SBKqC",
    uyRGD: function (cK, q0) {
      return cK === q0;
    },
    HIYZs: function (cK, q0) {
      return cK === q0;
    },
    IqEby: function (cK, q0) {
      return cK >= q0;
    },
    iyCrn: function (cK, q0) {
      return cK <= q0;
    },
    LthNV: "cycle"
  };
  const cA = z;
  let cb = cA.nThuB(T.battlegroup, 0);
  if (cA.Tbwhn(Y, cA.iHLNL)) {
    if (cA.Tbwhn(cb, 95)) {
      return {
        col: 3,
        spare: true
      };
    } else {
      return null;
    }
  }
  if (cA.DcQuF(cb, 87) && cA.VBEEV(cb, 90)) {
    return {
      col: 1,
      act: 0
    };
  }
  if (cA.QByGh(cb, 256)) {
    let cK = T.flag || [];
    if (cA.HLYSl(cA.QJrNl(cK[501], 0), 1)) {
      if (cA.xYEXO(cA.QaBNO, cA.QaBNO)) {
        [q0, O] = r;
        let q1 = h + 220;
        if (R < q1 && Z > u + 1) {
          let q2 = (q1 - j) / (N - z0);
          z1 = q1;
          z2 = z3 + (z4 - z5) * q2;
        }
      } else {
        let q3 = [[505, 0], [507, 1], [508, 2], [506, 3]].find(([q5]) => !(cK[q5] | 0));
        const q4 = {
          col: 1,
          act: q3 ? q3[1] : 0
        };
        return q4;
      }
    }
    return {
      col: 1,
      act: 0
    };
  }
  if (cA.uyRGD(cb, 57) || cA.HIYZs(cb, 80)) {
    return {
      col: 1,
      act: 3
    };
  } else if (cA.IqEby(cb, 82) && cA.iyCrn(cb, 86)) {
    if ([0, 1, 2].map(q5 => T.monster && T.monster[q5] === 1 ? T.monsterinstance[q5] : null).filter(Boolean).some(w4)) {
      return {
        col: 3,
        spare: true
      };
    } else {
      return {
        col: 1,
        act: cA.LthNV
      };
    }
  } else {
    return null;
  }
}
v(w6, "menuPlan");
function w7() {
  const z = {
    MaJPM: function (cy) {
      return cy();
    },
    pPxUO: function (cy, cj) {
      return cy !== cj;
    },
    EKCzU: "room_battle",
    bNDZk: "obj_battlecontroller",
    wqvHq: function (cy, cj) {
      return cy !== cj;
    },
    hnroT: function (cy) {
      return cy();
    },
    xonwA: function (cy, cj) {
      return cy !== cj;
    },
    bvrBI: function (cy, cj) {
      return cy % cj;
    },
    DJwRR: function (cy, cj) {
      return cy | cj;
    },
    HLDWx: function (cy, cj) {
      return cy(cj);
    },
    VRlbL: function (cy, cj) {
      return cy === cj;
    },
    SCGIF: function (cy, cj) {
      return cy === cj;
    },
    lGTbU: function (cy, cj) {
      return cy(cj);
    },
    aDLIx: "right",
    DDpgO: function (cy, cj) {
      return cy === cj;
    },
    RWDmr: function (cy, cj) {
      return cy === cj;
    },
    shzsq: function (cy, cj) {
      return cy | cj;
    },
    TFAkJ: function (cy, cj) {
      return cy === cj;
    },
    QBLSt: function (cy, cj) {
      return cy !== cj;
    },
    gWGDU: "VLtOL",
    ZpsdM: "cycle",
    wnOnj: function (cy, cj) {
      return cy !== cj;
    },
    tioRk: "APmDq",
    VsKNG: "mpRzp",
    locSc: function (cy, cj) {
      return cy | cj;
    },
    kDaeI: function (cy, cj) {
      return cy(cj);
    },
    RHkST: function (cy, cj) {
      return cy(cj);
    },
    CYopP: function (cy, cj) {
      return cy != cj;
    },
    woLRS: function (cy, cj) {
      return cy >= cj;
    },
    vQQsi: function (cy, cj) {
      return cy >= cj;
    },
    NocLX: "left",
    BonDf: function (cy, cj) {
      return cy % cj;
    },
    xvYfx: function (cy, cj) {
      return cy < cj;
    },
    OvvRe: "down"
  };
  if (!ap() || T.fightRoom !== "room_battle" || !s.first("obj_battlecontroller") || T.mnfight !== 0 || T.myfight !== 0 || T.battleover) {
    return null;
  }
  let a = w6();
  if (!a) {
    return null;
  }
  if ((s.frame | 0) % 3 !== 0) {
    return "";
  }
  let cB = T.bmenucoord;
  if (!cB) {
    return null;
  }
  let cv = Number(T.bmenuno);
  if (cv === 0) {
    if ((Number(cB[0]) | 0) === a.col) {
      return "b1";
    } else {
      return "right";
    }
  }
  if (cv === 1 || cv === 2) {
    return "b1";
  }
  if (cv === 4) {
    if ((Number(cB[4]) | 0) === 0) {
      return "b1";
    } else {
      return "up";
    }
  }
  if (cv === 10) {
    {
      let cj = a.act;
      if (cj === "cycle") {
        {
          let cK = w5().filter(q0 => q0 !== 0);
          cj = cK.length ? cK[(Number(T.turn) | 0) % cK.length] : 0;
        }
      }
      let cN = Number(cB[2]) | 0;
      if (cN >= 3 != cj >= 3) {
        if (cj >= 3) {
          return "right";
        } else {
          return "left";
        }
      } else if (cN % 3 !== cj % 3) {
        if (cN % 3 < cj % 3) {
          return "down";
        } else {
          return "up";
        }
      } else {
        return "b1";
      }
    }
  }
  return null;
}
v(w7, "utMenuAction");
var wz = {
  wait: true
};
var wa = {
  rollout: true
};
function ww(z) {
  const a = {
    wvPaI: function (cN) {
      return cN();
    },
    JtjeE: function (cN, cK) {
      return cN !== cK;
    },
    QGPqh: "room_battle",
    SPmGi: function (cN, cK) {
      return cN(cK);
    },
    HMTXY: "obj_sansb_body",
    uFKQo: "obj_s_fakefightbt",
    VFKJr: function (cN, cK) {
      return cN && cK;
    },
    vbfDB: function (cN, cK) {
      return cN === cK;
    },
    shDvI: "obj_questionasker",
    QyMqP: function (cN, cK) {
      return cN === cK;
    },
    ShmiQ: function (cN, cK) {
      return cN === cK;
    },
    gsMTX: "jvlam",
    tescH: "obj_answernodule"
  };
  if (!ap() || !z || z.destroyed || T.fightRoom !== "room_battle") {
    return null;
  }
  if (wJ(z)) {
    return wa;
  }
  let cb = null;
  let cB = s.first("obj_sansb_body");
  let cv = s.first("obj_s_fakefightbt");
  if (cB && cv && !cv.destroyed && cv.con === 0) {
    cb = cB.asleep === 1 ? cv : cB.sleep_c === 1 ? wz : null;
  }
  let cj = s.first("obj_questionasker");
  if (!cb && cj && cj.phase === 2) {
    {
      let cN = s.all("obj_answernodule").filter(cK => !cK.destroyed && !!cK.visible && !cK.answered);
      cb = cN.find(cK => cK.ano === cj.correct) || cN[0] || null;
    }
  }
  return cb;
}
v(ww, "heartGoal");
function wC(z) {
  const a = {
    oIMMy: function (cK, q0) {
      return cK(q0);
    },
    oTqmb: function (cK, q0) {
      return cK(q0);
    },
    CpQxF: "left",
    Maqtc: "right",
    msUNh: "down",
    EBiZM: function (cK, q0) {
      return cK === q0;
    },
    mtluL: function (cK, q0) {
      return cK === q0;
    },
    qfYpE: "obj_s_fakefightbt",
    BbTJz: function (cK, q0) {
      return cK !== q0;
    },
    OpsWO: function (cK, q0) {
      return cK / q0;
    },
    NCvLj: function (cK, q0) {
      return cK + q0;
    },
    cxUoA: function (cK, q0) {
      return cK / q0;
    },
    bSISP: function (cK, q0) {
      return cK + q0;
    },
    jLoNq: function (cK, q0) {
      return cK / q0;
    },
    QXNAb: function (cK, q0) {
      return cK > q0;
    },
    tfbdg: function (cK, q0) {
      return cK - q0;
    },
    TmEtd: function (cK, q0) {
      return cK > q0;
    }
  };
  if (wQ(z)) {
    return true;
  }
  let cb = ww(z);
  if (!cb) {
    return false;
  }
  for (let cK of ["left", "right", "up", "down"]) {
    m.held[cK] = false;
  }
  if (cb === wz || cb === wa) {
    return true;
  }
  if (cb.is && cb.is("obj_s_fakefightbt")) {
    if (cb.on !== 1) {
      m.held.left = true;
      m.held.down = true;
    }
    return true;
  }
  let cP = (z.bbox_left + z.bbox_right) / 2;
  let cy = (z.bbox_top + z.bbox_bottom) / 2;
  let cj = (cb.bbox_left + cb.bbox_right) / 2;
  let cN = (cb.bbox_top + cb.bbox_bottom) / 2;
  if (cj - cP > 2) {
    m.held.right = true;
  } else if (cP - cj > 2) {
    m.held.left = true;
  }
  if (cN - cy > 2) {
    m.held.down = true;
  } else if (cy - cN > 2) {
    m.held.up = true;
  }
  return true;
}
v(wC, "heartGoalStep");
function we() {
  const cA = {
    mIPmd: "obj_heart",
    hVnba: function (cP, cy) {
      return cP(cy);
    },
    hiNbf: "obj_s_fakefightbt",
    zEszt: function (cP, cy) {
      return cP === cy;
    },
    QrCdN: function (cP, cy) {
      return cP % cy;
    },
    uBgry: function (cP, cy) {
      return cP | cy;
    }
  };
  let cb = s.first("obj_heart");
  let cB = ww(cb);
  if (cB && cB.is && cB.is("obj_s_fakefightbt")) {
    return cB.on === 1 && (s.frame | 0) % 4 === 0;
  } else {
    return null;
  }
}
v(we, "goalConfirm");
var wE = null;
function wc() {
  const z = {
    yAhxw: function (cP, cy) {
      return cP(cy);
    },
    bofsJ: function (cP, cy) {
      return cP === cy;
    },
    gHOGC: "EqPFI",
    QPAAg: "ctx"
  };
  if (wE) {
    return wE;
  }
  let cA = l(A);
  let cb = cA.ctx;
  try {
    {
      const cP = {
        get: () => cb,
        set: () => {},
        configurable: true
      };
      Object.defineProperty(cA, "ctx", cP);
    }
  } catch {}
  return wE = cA;
}
v(wc, "gfx10");
const wq = {
  plan: null,
  trace: null,
  i: 0,
  n: 0,
  frame: -9,
  held: "",
  turn: -1,
  t0: -1,
  route: false
};
var wS = wq;
function wk() {
  return {
    ...wS,
    plan: wS.plan ? wS.plan.slice() : null,
    trace: wS.trace ? wS.trace.slice() : null
  };
}
v(wk, "utSaveState");
function wV(z) {
  const cA = {
    ygcsJ: function (cv) {
      return cv();
    }
  };
  if (z) {
    Object.assign(wS, z);
    wS.plan = z.plan ? z.plan.slice() : null;
    wS.trace = z.trace ? z.trace.slice() : null;
  } else {
    wF();
  }
}
v(wV, "utLoadState");
function wF() {
  wS.plan = null;
  wS.trace = null;
  wS.i = 0;
  wS.n = 0;
  wS.frame = -9;
  wS.held = "";
  wS.turn = -1;
  wS.t0 = -1;
  wS.route = false;
}
v(wF, "utResetState");
var wH = {
  decisions: 0,
  rollouts: 0,
  frames: 0,
  ms: 0
};
var wx = {};
for (let [qb, qs] of Object.entries(am)) {
  let qB = [];
  for (let [qP, qy] of qs.keys) {
    for (let qj = 0; qj < qP; qj++) {
      qB.push(qy);
    }
  }
  const qv = {
    keys: qB,
    at: qs.at
  };
  wx[qb] = qv;
}
function wJ(z) {
  const cA = {
    beQyR: function (cj, cN) {
      return cj !== cN;
    },
    AXIel: "ut10",
    lMQQS: "room_battle",
    ONSTP: function (cj, cN) {
      return cj !== cN;
    },
    EIiPc: function (cj, cN) {
      return cj | cN;
    },
    inOlP: function (cj, cN) {
      return cj === cN;
    },
    kaGuc: "obj_battlecontroller",
    DwkrB: function (cj, cN) {
      return cj === cN;
    },
    YoXmS: "obj_sans_bulldozer",
    mpAaq: "idle",
    zbvHL: "sans",
    FXIRy: "sun"
  };
  const cv = cA;
  if (cv.beQyR(Y, cv.AXIel) || cv.beQyR(T.fightRoom, cv.lMQQS) || cv.ONSTP(cv.EIiPc(T.mnfight, 0), 2) || !z || z.destroyed || z.force_lock || !cv.inOlP(z.movement, 1) && !cv.inOlP(z.movement, 2)) {
    return null;
  }
  let cP = s.first(cv.kaGuc);
  if (!cP || cv.DwkrB(cP.runaway, 1)) {
    return null;
  }
  let cy = cv.EIiPc(T.battlegroup, 0);
  if (cv.inOlP(cy, 95)) {
    if (s.first(cv.YoXmS)) {
      return cv.mpAaq;
    } else {
      return cv.zbvHL;
    }
  } else if (cv.DwkrB(cy, 201)) {
    return cv.FXIRy;
  } else {
    return null;
  }
}
v(wJ, "ut10Kind");
function wU(z) {
  const a = {
    IicZL: function (cj, cN) {
      return cj(cN);
    },
    xwnby: function (cj, cN) {
      return cj === cN;
    },
    xfNDt: "sun",
    bygBF: function (cj, cN) {
      return cj !== cN;
    },
    ZPZuy: "sans",
    WzgPu: "obj_sansb",
    SFAan: function (cj, cN) {
      return cj === cN;
    },
    CITAG: function (cj, cN) {
      return cj | cN;
    },
    Gjfzr: function (cj, cN) {
      return cj - cN;
    },
    cTWHR: function (cj, cN) {
      return cj === cN;
    },
    fEPzU: function (cj, cN) {
      return cj >= cN;
    }
  };
  let cA = wJ(z);
  if (cA === "sun") {
    return true;
  }
  if (cA !== "sans") {
    return false;
  }
  let cP = s.first("obj_sansb");
  let cy = cP ? (cP.part | 0) === 4 ? 4 : (cP.part | 0) - 1 : -1;
  if (wS.turn === cy && wS.t0 >= 0) {
    return !wS.route;
  } else {
    return !wx[cy];
  }
}
v(wU, "ut10Searches");
var wM = {
  u: "up",
  d: "down",
  l: "left",
  r: "right"
};
function wl(z) {
  const a = {
    BZqMG: "left",
    WWQrb: "right",
    sQKWH: "down",
    ckJXO: function (cj, cN) {
      return cj || cN;
    }
  };
  const cy = a;
  for (let cj of [cy.BZqMG, cy.WWQrb, "up", cy.sQKWH]) {
    m.held[cj] = false;
  }
  for (let cN of cy.ckJXO(z, "")) {
    if (wM[cN]) {
      m.held[wM[cN]] = true;
    }
  }
}
v(wl, "hold10");
var wf = 0;
function wT(z, a, cA) {
  const cb = {
    ZcfoX: "left",
    LtxIW: "right",
    Oyaak: "down",
    prTcb: function (qa, qw) {
      return qa(qw);
    },
    ZdRZs: function (qa, qw) {
      return qa(qw);
    },
    dDZHq: function (qa, qw) {
      return qa(qw);
    },
    qAbJU: function (qa, qw) {
      return qa(qw);
    },
    vuoVA: function (qa, qw) {
      return qa(qw);
    },
    YsnJD: function (qa) {
      return qa();
    },
    NYamL: function (qa, qw) {
      return qa !== qw;
    },
    jhLKm: "ciMry",
    LUazQ: "hUNjm",
    oTByS: function (qa, qw) {
      return qa < qw;
    },
    ehnGP: function (qa, qw) {
      return qa !== qw;
    },
    XmneP: function (qa, qw) {
      return qa - qw;
    },
    oSDuk: function (qa, qw, qC) {
      return qa(qw, qC);
    },
    azBCi: function (qa, qw) {
      return qa(qw);
    },
    yrzTI: function (qa, qw) {
      return qa === qw;
    },
    aKqAu: "jgeMo",
    aPrxg: "CSDDK",
    jqVoC: function (qa, qw) {
      return qa * qw;
    },
    CbWXJ: function (qa, qw) {
      return qa + qw;
    },
    uMTOS: function (qa, qw) {
      return qa / qw;
    },
    OJDLv: function (qa, qw) {
      return qa - qw;
    },
    BYjtb: function (qa, qw) {
      return qa !== qw;
    },
    sqzIK: "obj_heart",
    krRya: function (qa, qw) {
      return qa && qw;
    },
    neVKj: "tOwds",
    dWIjL: function (qa, qw) {
      return qa / qw;
    },
    edlke: function (qa, qw) {
      return qa + qw;
    },
    wzPcC: function (qa, qw) {
      return qa / qw;
    },
    jxzex: function (qa, qw) {
      return qa + qw;
    },
    FPEHA: function (qa, qw) {
      return qa - qw;
    },
    qOoEv: function (qa, qw) {
      return qa - qw;
    },
    GFMvS: "qflDY",
    tiDpS: "DWLRd",
    nHEvm: function (qa, qw) {
      return qa(qw);
    },
    YomwU: function (qa) {
      return qa();
    },
    nfBcP: function (qa, qw) {
      return qa(qw);
    }
  };
  let cj = m.synthetic;
  let cN = {};
  for (let qa of [cb.ZcfoX, cb.LtxIW, "up", cb.Oyaak, "b1", "b2"]) {
    cN[qa] = m.held[qa];
  }
  let q0 = cb.prTcb(Number, T.hp) || 0;
  let q1 = T.mnfight;
  let q2 = T.idealborder || [];
  let q3 = cb.ZdRZs(Number, q2[0]) || 32;
  let q4 = cb.dDZHq(Number, q2[1]) || 602;
  let q5 = cb.qAbJU(Number, q2[2]) || 250;
  let q6 = cb.vuoVA(Number, q2[3]) || 385;
  let q7 = 0;
  let q8 = 0;
  let q9 = cb.YsnJD(r);
  cb.qAbJU(g, false);
  cb.YsnJD(D);
  try {
    if (cb.NYamL(cb.jhLKm, cb.LUazQ)) {
      for (let qC = 0; cb.oTByS(qC, cA); qC++) {
        let qE = cb.ehnGP(a[qC], undefined) ? a[qC] : a[cb.XmneP(a.length, 1)];
        m.synthetic = () => wl(qE);
        try {
          cb.oSDuk(p, U, cb.YsnJD(wc));
        } catch {
          break;
        }
        q8++;
        let qc = cb.azBCi(Number, T.hp) || 0;
        if (cb.oTByS(qc, q0)) {
          if (cb.yrzTI(cb.aKqAu, cb.aPrxg)) {
            let qq = cN(qE);
            let qS = qq >= 0 ? q0(qq, q1) : -1;
            if (qS < 0 || (q2.actcost[qq][qS] || 0) > q3) {
              return null;
            } else {
              return {
                cmd: "act",
                target: qq,
                act: qS,
                name: g
              };
            }
          } else {
            q7 += cb.jqVoC(cb.XmneP(q0, qc), cb.CbWXJ(10, cb.uMTOS(cb.jqVoC(10, cb.OJDLv(cA, qC)), cA)));
            break;
          }
        }
        if (T.battleover || cb.BYjtb(T.mnfight, q1)) {
          break;
        }
      }
      let qw = s.first(cb.sqzIK);
      wf = qw ? Math.round(qw.x) : -1;
      if (cb.krRya(qw, !q7)) {
        if (cb.yrzTI(cb.neVKj, cb.neVKj)) {
          let qk = cb.uMTOS(cb.CbWXJ(qw.bbox_left, qw.bbox_right), 2);
          let qV = cb.dWIjL(cb.edlke(qw.bbox_top, qw.bbox_bottom), 2);
          q7 += cb.jqVoC(cb.edlke(cb.uMTOS(Math.abs(cb.XmneP(qk, cb.wzPcC(cb.jxzex(q3, q4), 2))), Math.max(1, cb.FPEHA(q4, q3))), cb.uMTOS(Math.abs(cb.qOoEv(qV, cb.wzPcC(cb.CbWXJ(q5, q6), 2))), Math.max(1, cb.qOoEv(q6, q5)))), 2);
        } else {
          let qF = 999;
          for (let [qH, qx] of q6(q1, q6)) {
            if (q7 >= qH - 1 && qw <= qx + 1) {
              return -1;
            }
            if (qH > q5 && qH - B < qF) {
              qF = qH - v;
            }
          }
          return qF;
        }
      }
    } else {
      let qJ = cA();
      if (qJ >= 0) {
        cb -= (qJ - x) * 5;
      }
    }
  } finally {
    if (cb.NYamL(cb.GFMvS, cb.tiDpS)) {
      cb.nHEvm(M, z);
      cb.YomwU(O);
      cb.nfBcP(g, q9);
      m.synthetic = cj;
      for (let qU of Object.keys(cN)) {
        m.held[qU] = cN[qU];
      }
    } else {
      for (let qd = 3; qd >= 1; qd--) {
        if (M.has(q0(q1, q2 - qd))) {
          return qd;
        }
      }
      return 0;
    }
  }
  wH.rollouts++;
  wH.frames += q8;
  return q7;
}
v(wT, "rollout10");
var wG = v((z, a) => Array.from({
  length: a
}, () => z), "rep10");
function wW(z) {
  const a = {
    MbkhE: function (q0, q1, q2) {
      return q0(q1, q2);
    },
    sNecx: function (q0, q1, q2) {
      return q0(q1, q2);
    },
    Lcjxr: function (q0, q1) {
      return q0 - q1;
    }
  };
  let cB = [];
  let cv = ["", "l", "r", "u", "d", "ul", "ur", "dl", "dr"];
  for (let q0 of cv) {
    cB.push(wG(q0, z));
  }
  for (let q1 of cv) {
    if (q1) {
      cB.push([...wG(q1, 6), ...wG("", z - 6)]);
    }
  }
  const cK = {
    length: z
  };
  cB.push(Array.from(cK, (q2, q3) => q3 & 1 ? "r" : "l"));
  cB.push(Array.from({
    length: z
  }, (q2, q3) => q3 & 1 ? "d" : "u"));
  return cB;
}
v(wW, "cands10");
var wX = ["", "l", "r", "u", "ul", "ur"];
function wg() {
  const a = {
    oGqYr: function (cv, cP) {
      return cv < cP;
    },
    dDzBS: function (cv, cP) {
      return cv <= cP;
    },
    eBcAB: function (cv, cP, cy) {
      return cv(cP, cy);
    },
    xCnrN: function (cv, cP) {
      return cv - cP;
    },
    Rvzpn: function (cv, cP) {
      return cv <= cP;
    },
    UoJUm: function (cv, cP, cy) {
      return cv(cP, cy);
    },
    SiZKS: function (cv, cP, cy) {
      return cv(cP, cy);
    },
    uPZCJ: function (cv, cP) {
      return cv - cP;
    }
  };
  let cA = wX.map(cv => wG(cv, wY));
  for (let cv = 1; cv < wY && cv <= 2; cv++) {
    cA.push([...wG("u", cv), ...wG("", wY - cv)]);
  }
  for (let cP = 1; cP < wY && cP <= 2; cP++) {
    cA.push([...wG("", cP), ...wG("u", wY - cP)]);
  }
  for (let cy of ["l", "r"]) {
    cA.push([cy, ...wG("", wY - 1)]);
  }
  return cA;
}
v(wg, "sansMoves");
var wY = 6;
var wD = 12;
var wO = 8;
var wt = 30;
var wr = v(z => ((z - 312) / 100) ** 2 * 10, "sansCost");
function wh(cA) {
  const cB = {
    SDkkI: function (q1) {
      return q1();
    },
    bTqDz: function (q1, q5) {
      return q1 !== q5;
    },
    JPjEL: "room_battle",
    uztsy: "obj_battlecontroller",
    EjQnL: function (q1, q5) {
      return q1 !== q5;
    },
    qxOFh: function (q1, q5) {
      return q1 !== q5;
    },
    FkLNY: function (q1, q5) {
      return q1 % q5;
    },
    nfOQh: function (q1, q5) {
      return q1 | q5;
    },
    qNGbW: function (q1, q5) {
      return q1(q5);
    },
    zVFrX: function (q1, q5) {
      return q1 === q5;
    },
    hJasS: "right",
    UiCxx: "cycle",
    XDVfL: function (q1, q5) {
      return q1 % q5;
    },
    xKqzQ: function (q1, q5) {
      return q1(q5);
    },
    YRGne: function (q1, q5) {
      return q1 != q5;
    },
    SyFIY: function (q1, q5) {
      return q1 >= q5;
    },
    JSHTQ: "left",
    VbxfC: function (q1, q5) {
      return q1 !== q5;
    },
    upogg: function (q1, q5) {
      return q1 < q5;
    },
    mZWLi: "down",
    MRfvp: function (q1, q5) {
      return q1 === q5;
    },
    waMSH: "abwIY",
    fWMKh: "NxEXF",
    eSdGf: function (q1, q5) {
      return q1 !== q5;
    },
    KqErn: "RHGjK",
    cwzPA: function (q1, q5, q6) {
      return q1(q5, q6);
    },
    BogNO: function (q1, q5) {
      return q1 === q5;
    },
    gPZcH: "PfzXJ",
    KWkYp: "obj_heart",
    GWAmL: function (q1, q5) {
      return q1 === q5;
    },
    XRqle: function (q1, q5) {
      return q1 | q5;
    },
    CFykQ: function (q1) {
      return q1();
    },
    Pfrza: function (q1) {
      return q1();
    },
    wDBhK: "kNKrz",
    yRmPS: function (q1, q5, q6) {
      return q1(q5, q6);
    },
    ZyKqY: function (q1, q5) {
      return q1 - q5;
    },
    ZStUi: function (q1, q5) {
      return q1 - q5;
    },
    GKgfN: function (q1, q5) {
      return q1 * q5;
    },
    Hcxfe: function (q1, q5) {
      return q1(q5);
    },
    nWPHg: function (q1, q5) {
      return q1(q5);
    },
    MECLp: function (q1, q5) {
      return q1 < q5;
    },
    teIfx: "fVUAS",
    MZCYA: "BKzcu",
    sNrCC: function (q1, q5) {
      return q1 + q5;
    },
    KiOdd: function (q1, q5) {
      return q1 === q5;
    },
    WLnUW: function (q1, q5) {
      return q1 - q5;
    },
    OhQDC: function (q1, q5) {
      return q1 + q5;
    },
    VkDqw: function (q1, q5) {
      return q1 + q5;
    },
    ALmpT: function (q1, q5) {
      return q1 * q5;
    },
    HSkvT: function (q1, q5) {
      return q1 + q5;
    },
    PvSum: function (q1, q5) {
      return q1 / q5;
    },
    FJBxp: function (q1, q5) {
      return q1 / q5;
    },
    OIZOo: function (q1) {
      return q1();
    },
    TSiMY: function (q1, q5) {
      return q1 !== q5;
    },
    YPkhq: "gCnVg",
    DevfW: function (q1, q5) {
      return q1 >= q5;
    },
    jmwzv: function (q1, q5) {
      return q1 !== q5;
    },
    BSLVf: "QkXpU",
    XLVyK: "VnBPi",
    XNcIK: function (q1, q5) {
      return q1 < q5;
    }
  };
  wY = globalThis.__sansS | 0 || 6;
  wD = globalThis.__sansD | 0 || 12;
  wO = globalThis.__sansW | 0 || 8;
  let cP = m.synthetic;
  let cy = {};
  for (let q1 of ["left", "right", "up", "down", "b1", "b2"]) {
    cy[q1] = m.held[q1];
  }
  let cN = d();
  let cK = r();
  g(false);
  D();
  let q0 = null;
  try {
    {
      let q5 = q9 => {
        const qz = {
          iisHA: function (qE) {
            return qE();
          },
          bbAkB: function (qE, qc) {
            return qE !== qc;
          },
          hNTly: "room_battle",
          zITXU: "obj_battlecontroller",
          mpDFV: function (qE, qc) {
            return qE !== qc;
          },
          NJmXI: function (qE) {
            return qE();
          },
          FMykx: function (qE, qc) {
            return qE !== qc;
          },
          ONJMv: function (qE, qc) {
            return qE % qc;
          },
          nKpoQ: function (qE, qc) {
            return qE | qc;
          },
          eNCeF: function (qc, qS) {
            return qc(qS);
          },
          YcOCD: function (qE, qS) {
            return qE === qS;
          },
          jngtU: "right",
          mfscw: function (qE, qc) {
            return qE === qc;
          },
          vTHUs: function (qE, qc) {
            return qE === qc;
          },
          eNoKS: function (qE, qc) {
            return qE(qc);
          },
          haCpg: "cycle",
          lrsRI: function (qE, qc) {
            return qE % qc;
          },
          DCBMo: function (qE, qc) {
            return qE(qc);
          },
          TLkUB: function (qE, qc) {
            return qE | qc;
          },
          OmlDg: function (qE, qc) {
            return qE(qc);
          },
          AzfPr: function (qE, qc) {
            return qE != qc;
          },
          usyWt: function (qE, qc) {
            return qE >= qc;
          },
          HeYtN: "left",
          AhyBa: function (qE, qc) {
            return qE !== qc;
          },
          MYvRN: function (qE, qc) {
            return qE < qc;
          },
          gxBOd: function (qE, qc) {
            return qE % qc;
          },
          BvTPb: "down",
          oqMRx: function (qE, qc) {
            return qE | qc;
          }
        };
        {
          let qH = [];
          for (let qJ of q9) {
            {
              m.synthetic = () => wl(qJ);
              try {
                p(U, wc());
              } catch {
                {
                  const qT = {
                    tr: qH,
                    out: true
                  };
                  return qT;
                }
              }
              wH.frames++;
              let qd = s.first("obj_heart");
              let qM = s.first("obj_battlecontroller");
              qH.push(qd ? [qd.x, qd.y] : [0, 0]);
              if (!qd || qM && qM.runaway === 1) {
                return {
                  tr: qH,
                  out: true
                };
              }
              const qf = {
                tr: qH,
                out: false,
                end: true
              };
              if (T.battleover || (T.mnfight | 0) !== 2) {
                return qf;
              }
            }
          }
          const qx = {
            tr: qH,
            out: false
          };
          return qx;
        }
      };
      let q6 = q9 => q9.out ? 1000000 - q9.len : q9.end ? 0 : q9.cost;
      let q7 = [{
        snap: cN,
        seq: [],
        tr: [],
        cost: 0,
        out: false,
        len: 0,
        end: false
      }];
      let q8 = [];
      if (cA && cA.length) {
        let q9 = [...cA, ...wG(cA[cA.length - 1], Math.max(0, wY * wD - cA.length))];
        M(cN);
        let qz = q5(q9);
        cA = q9;
        let qa = s.first("obj_heart");
        q8.push({
          seq: cA.slice(0, qz.tr.length),
          tr: qz.tr,
          out: qz.out,
          len: qz.tr.length,
          end: !!qz.end,
          cost: qa ? wr(qa.x) : 0
        });
      }
      for (let qw = 0; qw < wD && q7.length; qw++) {
        {
          let qd = [];
          let qM = new Set();
          for (let qL of q7) {
            for (let qG of wg()) {
              M(qL.snap);
              let qW = q5(qG);
              wH.rollouts++;
              let qX = s.first("obj_heart");
              let qg = {
                seq: [...qL.seq, ...qG.slice(0, qW.tr.length)],
                tr: [...qL.tr, ...qW.tr],
                out: qW.out,
                len: qL.len + qW.tr.length,
                end: !!qW.end,
                cost: qX ? wr(qX.x) : 0
              };
              if (qg.out || qg.end || qw === wD - 1) {
                q8.push(qg);
                continue;
              }
              let qY = qX ? Math.round(qX.x) + "," + Math.round(qX.y) + "," + Math.round((Number(qX.vspeed) || 0) * 4) + "," + qX.jumpstage : String(qG);
              if (!qM.has(qY)) {
                qM.add(qY);
                qg.zone = Math.round(qX.x / 24) + "," + Math.round(qX.y / 12) + (qX.jumpstage === 1 ? "g" : "a");
                qg.snap = d();
                qd.push(qg);
              }
            }
          }
          qd.sort((qD, qO) => q6(qD) - q6(qO));
          let qf = [];
          let qT = new Set();
          for (let qD of qd) {
            {
              if (qf.length >= wO) {
                break;
              }
              if (!qT.has(qD.zone)) {
                qT.add(qD.zone);
                qf.push(qD);
              }
            }
          }
          for (let qO of qd) {
            {
              if (qf.length >= wO) {
                break;
              }
              if (!qf.includes(qO)) {
                qf.push(qO);
              }
            }
          }
          q7 = qf;
        }
      }
      for (let qh of q8) {
        if (!q0 || q6(qh) < q6(q0)) {
          q0 = qh;
        }
      }
    }
  } finally {
    M(cN);
    O();
    g(cK);
    m.synthetic = cP;
    for (let qi of Object.keys(cy)) {
      m.held[qi] = cy[qi];
    }
  }
  return q0;
}
v(wh, "sansSearch");
var wR = 4;
var wZ = 3;
var wu = 24;
var wi = 1;
function wQ(z) {
  const a = {
    btHKQ: function (cy, cj) {
      return cy(cj);
    },
    OtiDV: function (cy) {
      return cy();
    },
    dAvhj: function (cy, cj) {
      return cy === cj;
    },
    ETiui: "idle",
    gRXYb: function (cy, cj) {
      return cy(cj);
    },
    JeGPy: function (cy, cj) {
      return cy !== cj;
    },
    BDHTD: function (cy, cj) {
      return cy + cj;
    },
    uxmzP: "sans",
    HAudz: "obj_sansb",
    PkGpO: function (cy, cj) {
      return cy === cj;
    },
    defWU: function (cy, cj) {
      return cy | cj;
    },
    xjJUm: function (cy, cj) {
      return cy - cj;
    },
    jlxoS: function (cy, cj) {
      return cy !== cj;
    },
    WGxLT: function (cy, cj) {
      return cy < cj;
    },
    lUMxb: "avcic",
    SQpyz: function (cy, cj) {
      return cy === cj;
    },
    FDzBd: function (cy, cj) {
      return cy % cj;
    },
    pvVck: function (cy, cj) {
      return cy > cj;
    },
    fxTJf: function (cy, cj) {
      return cy - cj;
    },
    Urinm: function (cy, cj) {
      return cy / cj;
    },
    vvTxa: function (cy, cj) {
      return cy >= cj;
    },
    PWPbq: function (cy, cj) {
      return cy > cj;
    },
    rsNWT: function (cy, cj) {
      return cy - cj;
    },
    XmuhH: function (cy, cj) {
      return cy | cj;
    },
    IWhcs: function (cy, cj) {
      return cy > cj;
    },
    rBgie: function (cy, cj) {
      return cy - cj;
    },
    xqCom: function (cy, cj) {
      return cy(cj);
    },
    kuncz: function (cy, cj) {
      return cy <= cj;
    },
    ihFzl: function (cy, cj) {
      return cy + cj;
    },
    ZAcKN: function (cy, cj) {
      return cy + cj;
    },
    SMibQ: function (cy, cj) {
      return cy + cj;
    },
    fTLpS: function (cy, cj) {
      return cy + cj;
    },
    nfysG: function (cy, cj) {
      return cy + cj;
    },
    Ulnur: function (cy, cj) {
      return cy + cj;
    },
    IAylf: function (cy, cj) {
      return cy + cj;
    },
    lhbxp: "SANS f",
    ehcLu: " OFF",
    voEIV: "OUT@",
    SEPfj: function (cy, cj) {
      return cy + cj;
    },
    DWeBq: "ok ",
    viDvL: function (cy, cj) {
      return cy - cj;
    },
    wqMSN: function (cy, cj) {
      return cy >= cj;
    },
    WgVSG: function (cy, cj, cN) {
      return cy(cj, cN);
    },
    XwuME: function (cy, cj) {
      return cy - cj;
    },
    rHWeJ: function (cy, cj, cN, cK) {
      return cy(cj, cN, cK);
    },
    OlTYE: function (cy, cj) {
      return cy / cj;
    },
    fQTRY: function (cy, cj) {
      return cy > cj;
    },
    xQArB: function (cy, cj) {
      return cy === cj;
    },
    PPAjh: function (cy, cj) {
      return cy % cj;
    },
    zsFcI: function (cy, cj) {
      return cy >= cj;
    },
    CkxNs: function (cy, cj) {
      return cy(cj);
    },
    exrOQ: function (cy, cj, cN, cK) {
      return cy(cj, cN, cK);
    },
    yNGXH: function (cy, cj) {
      return cy + cj;
    },
    gFvTB: function (cy, cj) {
      return cy + cj;
    },
    eriIo: function (cy, cj) {
      return cy < cj;
    },
    VIuqs: function (cy, cj) {
      return cy - cj;
    },
    wCVIh: function (cy, cj) {
      return cy <= cj;
    },
    PuwBs: function (cy, cj) {
      return cy + cj;
    },
    WwzhW: function (cy, cj) {
      return cy + cj;
    },
    oAkgg: function (cy, cj) {
      return cy + cj;
    },
    YxoFW: function (cy, cj) {
      return cy + cj;
    },
    vuAwS: function (cy, cj) {
      return cy + cj;
    },
    qQECg: "UT10 f",
    uqfro: " best ",
    MVxdk: " | "
  };
  let cA = wJ(z);
  if (!cA || !T.autoplay) {
    if (wS.plan) {
      wF();
    }
    return false;
  }
  if (cA === "idle") {
    wS.plan = null;
    wl("");
    return true;
  }
  if (s.frame !== wS.frame + 1) {
    wS.plan = null;
  }
  wS.frame = s.frame;
  if (cA === "sans") {
    let cy = s.first("obj_sansb");
    let cj = cy ? (cy.part | 0) === 4 ? 4 : (cy.part | 0) - 1 : -1;
    if (wS.turn !== cj || wS.t0 < 0 || s.frame < wS.t0) {
      wS.turn = cj;
      wS.t0 = s.frame;
      wS.route = !globalThis.__ut10NoRoute && !!wx[cj];
      wS.plan = null;
    }
    if (wS.route) {
      {
        let q2 = wx[cj];
        let q3 = s.frame - wS.t0;
        let q4 = q3 % 6 === 0 && q3 > 0 ? q2.at[q3 / 6 - 1] : null;
        if (q3 >= q2.keys.length || q4 && (Math.abs(q4[0] - z.x) > 0.05 || Math.abs(q4[1] - z.y) > 0.05)) {
          wS.route = false;
          wS.plan = null;
          wH.offRoute = (wH.offRoute | 0) + 1;
        } else {
          wS.held = q2.keys[q3];
          wl(wS.held);
          return true;
        }
      }
    }
    let cN = wS.trace && wS.i > 0 ? wS.trace[wS.i - 1] : null;
    let cK = cN && (Math.abs(cN[0] - z.x) > 0.01 || Math.abs(cN[1] - z.y) > 0.01);
    if (!wS.plan || cK || wS.i >= wt || wS.i >= wS.plan.length) {
      let q5 = performance.now();
      let q6 = wh(wS.plan && !cK ? wS.plan.slice(wS.i) : null);
      wS.plan = q6 && q6.seq.length ? q6.seq : [""];
      wS.trace = q6 && q6.seq.length ? q6.tr : null;
      wS.i = 0;
      wS.n++;
      wH.decisions++;
      wH.ms += performance.now() - q5;
      if (globalThis.__ut10dbg && s.frame >= globalThis.__ut10dbg[0] && s.frame <= globalThis.__ut10dbg[1]) {
        console.log("SANS f" + s.frame + " x" + Math.round(z.x) + (cK ? " OFF" : "") + " " + (q6 ? q6.out ? "OUT@" + q6.len : "ok " + q6.cost.toFixed(1) : "-") + " " + wS.plan.map(q7 => q7 || ".").join("").slice(0, 90) + " " + (performance.now() - q5).toFixed(0) + "ms");
      }
    }
    let q0 = wS.plan[wS.i++] || "";
    wS.held = q0;
    wl(q0);
    return true;
  }
  if (!wS.plan || wS.i >= wR || wS.i >= wS.plan.length) {
    let q7 = performance.now();
    let q8 = d();
    let q9 = wu;
    let qz = wS.plan ? wS.plan.slice(wS.i) : [];
    let qa = qz.length ? [...qz, ...wG(qz[qz.length - 1], Math.max(0, q9 - qz.length))] : null;
    let qw = qa;
    let qC = qa ? wT(q8, qa, q9) : Infinity;
    if (!qa || qC > wi || wS.n % wZ === 0) {
      let qE = globalThis.__ut10dbg && s.frame >= globalThis.__ut10dbg[0] && s.frame <= globalThis.__ut10dbg[1] ? [] : null;
      for (let qc of wW(q9)) {
        let qq = wT(q8, qc, q9);
        if (qE) {
          qE.push(qc.slice(0, 10).map(qS => qS || ".").join("") + "=" + qq.toFixed(1) + "@" + wf);
        }
        if (qq < qC - 1e-9) {
          qC = qq;
          qw = qc;
        }
        if (qC <= wi && !qE) {
          break;
        }
      }
      if (qE) {
        console.log("UT10 f" + s.frame + " x" + Math.round(z.x) + " best " + qw.slice(0, 10).map(qS => qS || ".").join("") + "=" + qC.toFixed(1) + " | " + qE.join(" "));
      }
    }
    wS.plan = qw;
    wS.i = 0;
    wS.n++;
    wH.decisions++;
    wH.ms += performance.now() - q7;
  }
  let cP = wS.plan[wS.i++] || "";
  wS.held = cP;
  wl(cP);
  return true;
}
v(wQ, "ut10Step");
y();
var wm = 0.3333333333333333;
var wp = new Set([0, 3, 12, 13, 14, 15, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 56, 57, 60, 64]);
var wA = v(z => {
  const a = {
    DvNIA: function (cj, cN) {
      return cj - cN;
    }
  };
  const cA = a;
  let cB = f.items[cA.DvNIA(z, 200)];
  let cv = cB && cB.effect;
  return !!cv && !!cB.usable && !cv.poison && (!!cv.heal || !!cv.perchar || !!cv.bych || !!cv.revive || !!cv.reviveall || !!cv.dflt);
}, "drHeals");
var wb = v(() => !!s.first("obj_menubone") || !!s.first("obj_menubone_bottom"), "menuBones");
function wB() {
  const cb = {
    nLAal: function (cP, cy) {
      return cP !== cy;
    },
    wrGuZ: function (cP, cy) {
      return cP !== cy;
    },
    DBfEk: "obj_battlecontroller",
    cjpeg: function (cP, cy) {
      return cP === cy;
    },
    vnzcD: function (cP, cy) {
      return cP % cy;
    },
    ERObc: function (cP, cy) {
      return cP | cy;
    },
    veMSn: function (cP, cy) {
      return cP === cy;
    },
    aynHu: function (cP, cy, cj) {
      return cP(cy, cj);
    },
    ihtUd: function (cP, cy, cj) {
      return cP(cy, cj);
    }
  };
  if (!T.autoplay || T.myfight !== 0 || T.mnfight !== 0 || T.battleover || !T.bmenucoord) {
    return null;
  }
  let cB = s.first("obj_battlecontroller");
  if (!cB) {
    return null;
  }
  let cv = (s.frame | 0) % 3 === 0;
  if (Y === "ut") {
    if (cB.havechar) {
      return null;
    } else {
      return wv(cB, cv);
    }
  } else if (cB.havechar) {
    return Ce(cB, cv);
  } else {
    return null;
  }
}
v(wB, "itemMenuAction");
function wv(z, a) {
  const cA = {
    ttFzq: function (cN, cK) {
      return cN !== cK;
    },
    pzRph: "room_battle",
    eLeat: function (cN) {
      return cN();
    },
    hOuoy: function (cN, cK) {
      return cN(cK);
    },
    zztZs: function (cN, cK) {
      return cN | cK;
    },
    rSHQg: function (cN, cK) {
      return cN(cK);
    },
    oJiWP: function (cN, cK) {
      return cN <= cK;
    },
    GjSQt: function (cN, cK) {
      return cN * cK;
    },
    ewOiR: function (cN, cK) {
      return cN(cK);
    },
    tZCKW: function (cN, cK) {
      return cN | cK;
    },
    chsAp: function (cN, cK) {
      return cN === cK;
    },
    jlkSw: function (cN, cK) {
      return cN !== cK;
    },
    dqgut: function (cN, cK) {
      return cN === cK;
    },
    PZSaI: function (cN, cK) {
      return cN < cK;
    },
    yKTFw: "right",
    MEOAr: "left",
    jjTIQ: function (cN, cK) {
      return cN === cK;
    },
    OyNZr: function (cN, cK) {
      return cN === cK;
    },
    bALtz: function (cN, cK) {
      return cN === cK;
    },
    XveGo: function (cN, cK) {
      return cN >= cK;
    },
    ERAcP: function (cN, cK) {
      return cN < cK;
    }
  };
  if (T.fightRoom !== "room_battle" || z.active !== 1 || wb()) {
    return null;
  }
  let cv = Number(T.bmenuno);
  let cP = Number(T.bmenucoord[0]) | 0;
  let cy = Number(T.hp) <= Number(T.maxhp) * wm && !wp.has(Number(T.item[0]) | 0);
  if (cv === 0) {
    if (cy && T.mercy !== 3) {
      if (a) {
        if (cP === 2) {
          return "b1";
        } else if (cP < 2) {
          return "right";
        } else {
          return "left";
        }
      } else {
        return "";
      }
    } else if (cP === 2 && (!T.item[0] || T.talked === 91) || cP === 1 && T.talked === 91) {
      if (a) {
        return "left";
      } else {
        return "";
      }
    } else {
      return null;
    }
  } else if (cv >= 3 && cv < 4 && cy) {
    if (a) {
      return "b1";
    } else {
      return "";
    }
  } else {
    return null;
  }
}
v(wv, "utAction");
function Ce(z, a) {
  const cA = {
    HYmGi: function (q4, q5) {
      return q4 === q5;
    },
    FASyO: function (q4, q5) {
      return q4 | q5;
    },
    VjAct: function (q4, q5) {
      return q4 / q5;
    },
    lVrZU: function (q4, q5) {
      return q4 < q5;
    },
    GwCeD: function (q4) {
      return q4();
    },
    pXXkR: function (q4, q5) {
      return q4 > q5;
    },
    pgmwa: function (q4, q5) {
      return q4 > q5;
    },
    OozXM: function (q4, q5) {
      return q4 / q5;
    },
    mAlSV: function (q4, q5) {
      return q4(q5);
    },
    kjSCg: function (q4, q5) {
      return q4 < q5;
    },
    Rgbqd: function (q4, q5) {
      return q4 <= q5;
    },
    GNEBO: function (q4, q5) {
      return q4 >= q5;
    },
    nsUnq: function (q4, q5) {
      return q4 >= q5;
    },
    SXemk: function (q4, q5) {
      return q4 | q5;
    },
    BOIfB: function (q4, q5) {
      return q4 === q5;
    },
    kguxN: "right",
    xgxKy: "left",
    jEDdZ: function (q4, q5) {
      return q4 === q5;
    },
    nMTDT: function (q4, q5) {
      return q4(q5);
    },
    zzJil: function (q4, q5) {
      return q4 !== q5;
    },
    LrrwS: function (q4, q5) {
      return q4 >> q5;
    },
    ayPvV: function (q4, q5) {
      return q4 >> q5;
    },
    cwRpJ: function (q4, q5) {
      return q4 >> q5;
    },
    aPJCT: "down",
    kKWDj: function (q4, q5) {
      return q4 === q5;
    }
  };
  if (z.oopsallacts === 1) {
    return null;
  }
  let cb = T.charturn | 0;
  let cB = T.bmenucoord;
  let cv = T.bmenuno;
  let cP = q4 => (z.tempitem && z.tempitem[q4] ? z.tempitem[q4][cb] : 0) | 0;
  let cy = -1;
  let cj = Infinity;
  for (let q4 = 0; q4 < Math.min(3, X()); q4++) {
    let q5 = T.char[q4];
    if (!(q5 > 0) || !(T.maxhp[q5] > 0)) {
      continue;
    }
    let q6 = T.hp[q5] / T.maxhp[q5];
    if (q6 < cj) {
      cj = q6;
      cy = q4;
    }
  }
  let cN = -1;
  for (let q7 = 0; q7 < 12 && cN < 0; q7++) {
    if (cP(q7) && wA(cP(q7))) {
      cN = q7;
    }
  }
  let q0 = false;
  for (let q8 = 0; q8 < cb; q8++) {
    if (T.charaction[q8] === 4) {
      q0 = true;
    }
  }
  let q3 = cj <= wm && cN >= 0 && !q0 && cy >= 0;
  if (cv === 0) {
    let q9 = cB[0][cb] | 0;
    if (q3) {
      if (a) {
        if (q9 === 2) {
          return "b1";
        } else if (q9 < 2) {
          return "right";
        } else {
          return "left";
        }
      } else {
        return "";
      }
    } else if (q9 === 2 && !cP(0)) {
      if (a) {
        return "left";
      } else {
        return "";
      }
    } else {
      return null;
    }
  }
  if (!q3) {
    return null;
  }
  if (cv === 4) {
    let qz = cB[4][cb] | 0;
    if (a) {
      if (qz === cN) {
        return "b1";
      } else if (qz >> 1 !== cN >> 1) {
        if (qz >> 1 < cN >> 1) {
          return "down";
        } else {
          return "up";
        }
      } else {
        return "right";
      }
    } else {
      return "";
    }
  }
  if (cv === 7) {
    if (a) {
      if ((cB[7][cb] | 0) === cy) {
        return "b1";
      } else {
        return "down";
      }
    } else {
      return "";
    }
  } else {
    return null;
  }
}
v(Ce, "drAction");
y();
var Ct = new Set([1, 4, 5, 9]);
var Cr = new Set(["X-Slash", "RedBuster"]);
function en() {
  const z = {
    byMoD: function (cv, cP) {
      return cv !== cP;
    },
    wdtym: function (cv, cP) {
      return cv === cP;
    }
  };
  const cB = z;
  return cB.byMoD(T.chapter, 1) && cB.wdtym(T.flag[34], 0);
}
v(en, "techMenu");
function ej(z, a) {
  const cA = {
    otMNH: function (cK) {
      return cK();
    },
    BgaeL: function (cK, q0) {
      return cK < q0;
    },
    QUsYj: function (cK, q0) {
      return cK | q0;
    },
    czObW: function (cK, q0) {
      return cK === q0;
    },
    FFScz: function (cK, q0) {
      return cK(q0);
    },
    DYCfx: "damage",
    HJPVf: function (cK, q0, q1) {
      return cK(q0, q1);
    },
    fLiKJ: function (cK, q0) {
      return cK <= q0;
    },
    wHKhZ: "obj_flowery_enemy"
  };
  let cv = en();
  let cP = T.char[a];
  let cy = (cv ? T.battlespell[a] : T.spell[cP]) || [];
  let cj = (cv ? T.battlespellcost[a] : T.spellcost && T.spellcost[cP]) || [];
  for (let cK = 0; cK < 12; cK++) {
    if ((!!Ct.has(cy[cK] | 0) || F(cy[cK]) === "damage" && !!o(cy[cK], a)) && !!(Number(cj[cK]) <= T.tension) && (!cv || !!z.techUnlocked(a, cK)) && (a !== 1 || cK !== 1 || !z.disablesusieralseiattack || !s.first("obj_flowery_enemy"))) {
      return cK;
    }
  }
  return -1;
}
v(ej, "spellSlot");
function eN(z) {
  const a = {
    CBMex: function (cP, cy) {
      return cP < cy;
    },
    DCCkN: function (cP, cy) {
      return cP === cy;
    },
    Fykju: "gOWcE",
    xEauW: "pqcwd",
    oBTSf: function (cP, cy) {
      return cP < cy;
    },
    ckacK: function (cP, cy) {
      return cP !== cy;
    },
    ujMIB: function (cP, cy) {
      return cP > cy;
    },
    tMOsk: function (cP, cy) {
      return cP(cy);
    },
    TOaeB: function (cP, cy) {
      return cP | cy;
    }
  };
  let cb = cP => (cP === 2 || cP === 4 ? z.partnerReady(2) : true) && (cP === 3 || cP === 4 ? z.partnerReady(3) : true) && (cP === 5 && T.chapter !== 1 ? z.partnerReady(4) : true);
  for (let cP = 0; a.CBMex(cP, 3); cP++) {
    if (a.DCCkN(T.monster[cP], 1)) {
      if (a.DCCkN(a.Fykju, a.xEauW)) {
        const cy = {
          tr: a,
          out: true
        };
        return cy;
      } else {
        for (let cj = 0; a.oBTSf(cj, 6); cj++) {
          if (!!Cr.has(((T.actname || [])[cP] || [])[cj]) && !a.ckacK(((T.canact || [])[cP] || [])[cj], 1) && !a.ujMIB(a.tMOsk(Number, ((T.actcost || [])[cP] || [])[cj]), T.tension) && !!a.tMOsk(cb, a.TOaeB(((T.actactor || [])[cP] || [])[cj], 0))) {
            return {
              m: cP,
              i: cj
            };
          }
        }
      }
    }
  }
  return null;
}
v(eN, "krisAct");
function eK(z, a, cA) {
  const cP = {
    ZxSCL: function (cy, cj) {
      return cy === cj;
    },
    xblBC: function (cy, cj) {
      return cy !== cj;
    },
    KDPFN: function (cy, cj) {
      return cy >> cj;
    },
    JhXLi: function (cy, cj) {
      return cy >> cj;
    },
    PprQc: function (cy, cj) {
      return cy < cj;
    },
    mNESQ: function (cy, cj) {
      return cy(cj);
    },
    brZft: function (cy, cj) {
      return cy + cj;
    },
    DDLJZ: "down",
    HYUvs: "right"
  };
  if (z === a) {
    return "b1";
  } else if (z >> 1 !== a >> 1) {
    if (a < z) {
      return "up";
    } else if (cA(z + 2)) {
      return "down";
    } else {
      return "right";
    }
  } else {
    return "right";
  }
}
v(eK, "walk");
function E0() {
  const z = {
    bZPvl: function (q3, q4) {
      return q3 === q4;
    },
    rpfpa: function (q3, q4) {
      return q3 !== q4;
    },
    aClzE: function (q3, q4) {
      return q3 !== q4;
    },
    qhnpP: function (q3, q4) {
      return q3 >= q4;
    },
    AAcLM: function (q3, q4) {
      return q3 / q4;
    },
    TxAxU: "obj_battlecontroller",
    fSdLI: "obj_hammer_of_justice_enemy",
    vbgoA: "obj_sound_of_justice_enemy",
    OjANU: "obj_rouxls_ch3_enemy",
    sPYFO: "o_boxingcontroller",
    Lpqnt: function (q3, q4) {
      return q3 | q4;
    },
    daItg: function (q3, q4) {
      return q3 < q4;
    },
    ZkJWY: function (q3, q4) {
      return q3 > q4;
    },
    YKnsy: function (q3, q4) {
      return q3 > q4;
    },
    wgXpe: function (q3, q4) {
      return q3(q4);
    },
    KAOpU: function (q3, q4) {
      return q3 === q4;
    },
    LNWgX: function (q3, q4) {
      return q3(q4);
    },
    lvOly: function (q3, q4, q5) {
      return q3(q4, q5);
    },
    bflta: function (q3, q4) {
      return q3 === q4;
    },
    KTzCY: function (q3, q4) {
      return q3 === q4;
    },
    zQjfh: function (q3, q4) {
      return q3 % q4;
    },
    QMZBh: function (q3, q4) {
      return q3 | q4;
    },
    dsTBX: function (q3, q4) {
      return q3 > q4;
    },
    YiLkb: "right",
    MpkIr: "left",
    OyUqd: function (q3, q4) {
      return q3 === q4;
    },
    zfdtZ: function (q3, q4) {
      return q3 === q4;
    },
    OmbgF: function (q3, q4) {
      return q3(q4);
    },
    trvsc: "down",
    viOAY: function (q3, q4) {
      return q3 === q4;
    },
    wxePM: function (q3, q4) {
      return q3 === q4;
    },
    ZKCar: function (q3, q4) {
      return q3(q4);
    },
    mpqTo: function (q3, q4, q5, q6) {
      return q3(q4, q5, q6);
    },
    XcASV: function (q3, q4) {
      return q3(q4);
    },
    nHxbq: "mKOQo",
    vAbdI: function (q3) {
      return q3();
    },
    EkqWd: function (q3, q4) {
      return q3(q4);
    }
  };
  if (!T.autoplay || Y === "ut" || T.fighting !== 1 || T.myfight !== 0 || T.mnfight !== 0 || T.battleover || !T.bmenucoord || !Array.isArray(T.bmenucoord[0]) || !(T.tension >= T.maxtension / 2)) {
    return null;
  }
  let cb = s.first("obj_battlecontroller");
  if (!cb || !cb.havechar || cb.oopsallacts === 1 || s.first("obj_hammer_of_justice_enemy") || s.first("obj_sound_of_justice_enemy") || s.first("obj_rouxls_ch3_enemy") || s.first("o_boxingcontroller")) {
    return null;
  }
  let cB = T.charturn | 0;
  let cv = T.char[cB];
  if (!(cB >= 0) || !(cB < Math.max(3, T.char.length)) || !(cv > 0) || !(Number(T.hp[cv]) > 0)) {
    return null;
  }
  let cP = G(cv) === 1;
  let cy = cP ? eN(cb) : ej(cb, cB);
  if (cy === null || cy === -1) {
    return null;
  }
  let cK = (s.frame | 0) % 3 === 0;
  let q0 = T.bmenucoord;
  let q1 = T.bmenuno;
  let q2 = q3 => q0[q3] ? q0[q3][cB] | 0 : 0;
  if (q1 === 0) {
    if (!cK) {
      return "";
    }
    let q3 = q2(0);
    if (q3 === 1) {
      return "b1";
    } else if (q3 < 1 || q3 > 3) {
      return "right";
    } else {
      return "left";
    }
  }
  if (cP) {
    if (q1 === 11) {
      if (cK) {
        if (q2(11) === cy.m) {
          return "b1";
        } else {
          return "down";
        }
      } else {
        return "";
      }
    } else if (q1 === 9 && q2(11) === cy.m) {
      if (cK) {
        return eK(q2(9), cy.i, q4 => ((T.canact[cy.m] || [])[q4] | 0) === 1);
      } else {
        return "";
      }
    } else {
      return null;
    }
  }
  if (q1 === 2) {
    {
      let q4 = (en() ? T.battlespell[cB] : T.spell[cv]) || [];
      if (cK) {
        return eK(q2(2), cy, q5 => q5 < 12 && (q4[q5] | 0) !== 0);
      } else {
        return "";
      }
    }
  }
  return null;
}
v(E0, "spellMenuAction");
function E1() {
  let z = l(A);
  let a = z.ctx;
  try {
    Object.defineProperty(z, "ctx", {
      get: () => a,
      set: () => {},
      configurable: true
    });
  } catch {}
  return z;
}
v(E1, "pinnedNullGfx");
function E2(z) {
  al(z);
}
v(E2, "setRolloutBudget");
var E3 = v(() => T.mnfight !== 2 && (!!s.first("obj_menubone") || !!s.first("obj_menubone_bottom")), "menuBonesOut");
function E4() {
  return af() || (wU(s.first("obj_heart")) ? "ut10" : null) || (zw(s.first("obj_heart")) ? "ch4green" : null) || (E3() ? "menubones" : null);
}
v(E4, "rolloutSoul");
var E5 = new Set(["obj_lborder", "obj_rborder", "obj_uborder", "obj_dborder", "obj_border"]);
var E6 = (() => {
  let z = new Set(["obj_collidebullet"]);
  try {
    for (let a of [...H, ...J]) {
      let [cA, cb] = a;
      if (cA === "obj_heart" && !E5.has(cb)) {
        z.add(cb);
      } else if (cb === "obj_heart" && !E5.has(cA)) {
        z.add(cA);
      }
    }
  } catch {}
  return z;
})();
for (let qN of j) {
  E6.add(qN);
}
var E7 = new Set(N);
function E8() {
  return E6.size;
}
v(E8, "threatCount");
var E9 = v(z => Et(z), "canSee");
var Ez = {
  frame: -1,
  mode: "off",
  threats: [],
  soul: null,
  bounds: null,
  dir: null,
  best: 0,
  score: 0,
  commit: 0,
  blocked: [],
  speed: 3,
  plan: null
};
var Ea = [[0, 0]];
for (let qK = 0; qK < 16; qK++) {
  let S0 = qK / 16 * Math.PI * 2;
  Ea.push([Math.cos(S0), Math.sin(S0)]);
}
var Ew = {
  horizon: 30,
  keep: 0.35,
  stay: 0.25,
  room: 0.05,
  margin: 0,
  commit: 3,
  gsteps: 6,
  gkeep: 0.55,
  gstay: 0.35,
  centre: 0.6,
  beamAlign: 12
};
function EC(z) {
  Object.assign(Ew, z);
}
v(EC, "setParams");
async function EE(z = "assets/autoplay.tune.json") {
  try {
    let a = await fetch(z, {
      cache: "no-store"
    });
    if (!a.ok) {
      return null;
    }
    let cA = await a.json();
    if (cA && cA.params) {
      EC(cA.params);
      return cA;
    }
  } catch {}
  return null;
}
v(EE, "loadAutoplayTune");
var Ec = 0;
var Eq = 0;
var ES = 3;
var Ek = null;
var EV = 0;
var EF = new Map();
var EH = {
  left: 0,
  right: 0,
  up: 0,
  down: 0
};
var Ex = {
  left: false,
  right: false,
  up: false,
  down: false
};
var EJ = {
  soul: "",
  branch: "",
  move: "",
  detail: "",
  threats: 0,
  hazards: []
};
function EU() {
  return EJ;
}
v(EU, "autoplayPlan");
function Ed(z, a, cA) {
  EJ.branch = z;
  EJ.move = a;
  EJ.detail = cA || "";
}
v(Ed, "note");
function EM() {
  return !!T.autoplay;
}
v(EM, "autoplayOn");
function Ef() {
  T.autoplay = !T.autoplay;
  if (!T.autoplay) {
    EL();
    m.synthetic = null;
  }
  return T.autoplay;
}
v(Ef, "toggleAutoplay");
function ET() {
  m.held.left = false;
  m.held.right = false;
  m.held.up = false;
  m.held.down = false;
}
v(ET, "clearHeld");
function EL() {
  ET();
  m.held.b1 = false;
  m.pressed.b1 = false;
}
v(EL, "clearAll");
function EG() {
  return EW();
}
v(EG, "autoplayBounds");
function EW() {
  let z = null;
  let cA = null;
  let cb = null;
  let cB = null;
  for (let cy of s.list) {
    if (cy.destroyed) {
      continue;
    }
    let cj = cy.constructor.name;
    if (cj === "obj_lborder") {
      z = cy.x;
    } else if (cj === "obj_rborder") {
      cA = cy.x;
    } else if (cj === "obj_uborder") {
      cb = cy.y;
    } else if (cj === "obj_dborder") {
      cB = cy.y;
    }
  }
  if (z !== null && cA !== null && cb !== null && cB !== null && cA - z > 16 && cB - cb > 16) {
    return [z, cb, cA, cB];
  }
  let cv = s.first("obj_knight_split_growtangle");
  if (cv && !cv.destroyed) {
    let cN = cv.con === 0 ? 0 : Math.round(cv.distance || 0);
    let cK = cv.vertical ? cN : 0;
    let q0 = cv.vertical ? 0 : cN;
    if (cv.diagonal) {
      cK = Math.SQRT1_2 * cN;
      q0 = Math.SQRT1_2 * cN;
    }
    return [cv.x - 70 - cK, cv.y - 70 - q0, cv.x + 52 + cK + 20, cv.y + 52 + q0 + 20];
  }
  let cP = s.first("obj_growtangle");
  if (cP && !cP.destroyed) {
    let q1 = (cP.image_xscale || 2) * 37.5;
    let q2 = (cP.image_yscale || 2) * 37.5;
    if (q1 > 8 && q2 > 8) {
      return [cP.x - q1, cP.y - q2, cP.x + q1, cP.y + q2];
    }
  }
  return null;
}
v(EW, "arena");
function EX(z) {
  if (z > 0.5 && z < 8) {
    return 0.6;
  } else if (z > -1 && z <= 0.5) {
    return 0.2;
  } else if (z > -4 && z <= -1) {
    return 0.5;
  } else {
    return 0.2;
  }
}
v(EX, "utGravity");
function Eg(cA) {
  if (cA.is && cA.is("obj_tracking_sword1")) {
    if (cA.con < 2) {
      return {
        skip: true
      };
    }
    let cj = cA.con === 2 ? cA.flashtime + 1 - cA.timer + 2 : Math.max(0, 2 - cA.timer);
    let cN = (cA.direction + 180) * Math.PI / 180;
    let cK = Math.cos(cN);
    let q0 = Math.sin(cN);
    let q1 = [];
    for (let q2 = 60; q2 <= 260; q2 += 10) {
      q1.push({
        cx: cA.x + cK * q2,
        cy: cA.y - q0 * q2,
        hw: 7,
        hh: 7,
        custom: 1,
        t0: cj,
        ttl: cj + 4
      });
    }
    return {
      multi: q1
    };
  }
  if (cA.is && cA.is("obj_sans_bonebul") && (cA.width || 0) > 0) {
    let q3 = T.idealborder ? T.idealborder[2] + 11 : 0;
    let q4 = T.idealborder ? T.idealborder[3] - 6 : 480;
    let q5 = cA.x + 2 + (cA.rc_le || 0);
    let q6 = cA.x + 8 - (cA.rc_cut || 0);
    let q7 = cA.type === 2 ? q3 : cA.y + 5;
    let q8 = cA.type === 2 ? cA.y : q4;
    return {
      hw: Math.max(2, Math.abs(q6 - q5) / 2),
      hh: Math.max(2, Math.abs(q8 - q7) / 2),
      cx: (q5 + q6) / 2,
      cy: (q7 + q8) / 2,
      custom: 1
    };
  }
  if (cA.is && cA.is("blt_sizebone")) {
    if (cA.active !== undefined && cA.active !== 1) {
      return {
        skip: true
      };
    }
    let q9 = T.idealborder || [0, 640, 0, 480];
    let qz = cA.is("blt_topbone");
    let qa = cA.x + 3;
    let qw = cA.x + 9;
    let qC = qz ? q9[2] + 10 : cA.y + 2;
    let qE = qz ? cA.y : q9[3] - 2;
    return {
      cx: (qa + qw) / 2 + 1,
      cy: (qC + qE) / 2 + 1,
      hw: Math.abs(qw - qa) / 2 + 0.5,
      hh: Math.abs(qE - qC) / 2 + 0.5,
      blueOnly: cA.blue === 1,
      custom: 1
    };
  }
  if (cA.is && cA.is("obj_bonestab")) {
    let qc = T.idealborder;
    if (!qc) {
      return {
        skip: true
      };
    }
    let qq = cA.height || 25;
    let qS;
    let qk;
    let qV;
    let qF;
    if (cA.dir === 1) {
      qS = qc[1] - qq;
      qV = qc[1] - 3;
      qk = qc[2] + 8;
      qF = qc[3] - 3;
    } else if (cA.dir === 2) {
      qS = qc[0] + 8;
      qV = qc[1] - 3;
      qk = qc[2] + 6;
      qF = qc[2] + 5 + qq;
    } else if (cA.dir === 3) {
      qS = qc[0] + 5;
      qV = qc[0] + 8 + qq;
      qk = qc[2] + 8;
      qF = qc[3] - 3;
    } else {
      qS = qc[0] + 8;
      qV = qc[1] - 3;
      qk = qc[3] - qq;
      qF = qc[3] - 3;
    }
    let qH = Number.isFinite(cA.retain) ? cA.retain : 4;
    let qx = Math.max(1, Math.floor(qq / 4));
    let qJ = 9 + qH + Math.ceil((qq - 3) / qx);
    let qU;
    let qd;
    if (cA.con === 2) {
      qU = 0;
      qd = qJ - (cA.timer || 0) + 1;
    } else {
      let qM = Math.max(0, cA.warning || 0);
      qU = qM + 1;
      qd = qM + qJ;
    }
    if (qd < 1) {
      return {
        skip: true
      };
    } else {
      return {
        cx: (qS + qV) / 2,
        cy: (qk + qF) / 2,
        hw: Math.max(4, Math.abs(qV - qS) / 2),
        hh: Math.max(4, Math.abs(qF - qk) / 2),
        custom: 1,
        t0: qU,
        ttl: qd,
        vx: 0,
        vy: 0,
        ax: 0,
        ay: 0
      };
    }
  }
  if (cA.is && cA.is("obj_spearbullet_follow")) {
    if (cA.deactivate) {
      return {
        skip: true
      };
    }
    let qf = cA.rotspeed || 0;
    let qT = cA.is("obj_followspear_2") ? 2 : 1;
    let qL = qf > 0 ? Math.ceil(qf / qT) : undefined;
    let qG = (cA.direction || 0) * Math.PI / 180;
    let qW = Math.cos(qG);
    let qX = -Math.sin(qG);
    let qg = cA.x - qW * 12.5;
    let qY = cA.y - qX * 12.5;
    let qD = cA.x + qW * 25;
    let qO = cA.y + qX * 25;
    return {
      cx: (qg + qD) / 2,
      cy: (qY + qO) / 2,
      hw: Math.max(4, Math.abs(qD - qg) / 2 + 3),
      hh: Math.max(4, Math.abs(qO - qY) / 2 + 3),
      ax: qW * 0.3,
      ay: qX * 0.3,
      custom: 1,
      t0: qL
    };
  }
  if (cA.constructor.name === "obj_collidebullet" && cA.sprite_index === "spr_joker_scythebody") {
    let qt = null;
    for (let qr of s.list) {
      if (!qr.destroyed && qr.constructor.name === "obj_centerscythe" && qr.king === 1 && qr.sbul === cA) {
        qt = qr;
        break;
      }
    }
    if (qt) {
      let qh = qt.scythetimer || 0;
      let qR = qt.scythesidex || 1;
      let qZ = R[cA.mask_index] || R[cA.sprite_index];
      let qu = cA.image_xscale || 1;
      let qi = cA.image_yscale || 1;
      let qQ = qu + "," + qi + "," + qR;
      let qI = qZ && qZ._scytheBB && qZ._scytheBB.get(qQ);
      if (!qI) {
        let S6 = qR * 100 * Math.PI / 180;
        let S7 = Math.cos(S6);
        let S8 = Math.sin(S6);
        let S9 = Infinity;
        let Sz = Infinity;
        let Sa = -Infinity;
        let Sw = -Infinity;
        let SC = qZ && qZ.masks && qZ.masks[0];
        let [SE, Sc] = SC ? Q(SC) : [0, 0];
        if (SC) {
          for (let Sq = 0; Sq < Sc; Sq++) {
            for (let SS = 0; SS < SE; SS++) {
              if (i(SC, SS, Sq)) {
                let Sk = (SS + 0.5 - (qZ.ox || 0)) * qu;
                let SV = (Sq + 0.5 - (qZ.oy || 0)) * qi;
                let SF = Sk * S7 + SV * S8;
                let So = -Sk * S8 + SV * S7;
                if (SF < S9) {
                  S9 = SF;
                }
                if (SF > Sa) {
                  Sa = SF;
                }
                if (So < Sz) {
                  Sz = So;
                }
                if (So > Sw) {
                  Sw = So;
                }
              }
            }
          }
        }
        if (!Number.isFinite(S9)) {
          S9 = qu * -24;
          Sa = qu * 24;
          Sz = qi * -22;
          Sw = qi * 22;
        }
        qI = [S9, Sz, Sa, Sw];
        if (qZ) {
          (qZ._scytheBB ||= new Map()).set(qQ, qI);
        }
      }
      let [qm, qp, qA, S1] = qI;
      let S2 = 64;
      let S3 = new Array(S2 + 1);
      let S4 = cA.x;
      for (let SH = 0; SH <= S2; SH++) {
        if (SH > 0) {
          let Sx = qh + SH;
          S4 += Sx < 85 ? 0 : qR * -3 * Math.min(5, Sx - 84);
        }
        S3[SH] = [S4 + (qm + qA) / 2, cA.y + (qp + S1) / 2];
      }
      let S5 = 104 - qh;
      if (S5 < 1) {
        return {
          skip: true
        };
      } else {
        return {
          hw: (qA - qm) / 2,
          hh: (S1 - qp) / 2,
          cx: S3[0][0],
          cy: S3[0][1],
          custom: 1,
          ttl: S5,
          vx: 0,
          vy: 0,
          ax: 0,
          ay: 0,
          path: SJ => S3[Math.min(S2, Math.max(0, Math.round(SJ)))]
        };
      }
    }
  }
  if (cA.is && cA.is("obj_centerscythe")) {
    if (cA.chasecon !== 2) {
      return {
        skip: true
      };
    }
    let SJ = R[cA.mask_index] || R[cA.sprite_index];
    if (SJ && SJ._reach === undefined) {
      let SY = 0;
      let SD = SJ.masks && SJ.masks[0];
      let [SO, St] = SD ? Q(SD) : [0, 0];
      if (SD) {
        for (let Sr = 0; Sr < St; Sr++) {
          for (let Sh = 0; Sh < SO; Sh++) {
            if (i(SD, Sh, Sr)) {
              SY = Math.max(SY, Math.hypot(Sh + 0.5 - (SJ.ox || 0), Sr + 0.5 - (SJ.oy || 0)));
            }
          }
        }
      }
      SJ._reach = SY || Math.hypot(SJ.w, SJ.h) / 2;
    }
    let SU = SJ ? SJ._reach : 15;
    let Sd = SU;
    let SM = 64;
    let Sl = new Array(SM + 1);
    let Sf = cA.dir || 0;
    let ST = cA.dirspeed || 0;
    let SL = cA.insanity === 1;
    let SG = cA.sinespeed || 0;
    let SW = cA.radius || 0;
    let SX = cA.centerx;
    let Sg = cA.centery;
    for (let SR = 0; SR <= SM; SR++) {
      if (SR > 0) {
        Sf += ST;
        if (SL) {
          if (ST > 0 && ST < 3) {
            ST += 0.01;
          } else if (ST < 0 && ST > -3) {
            ST -= 0.01;
          }
        }
      }
      let SZ = Math.cos(((cA.sine || 0) + SG * SR) / 18) * SW;
      let Su = Sf * Math.PI / 180;
      Sl[SR] = [SX - SZ * Math.cos(Su), Sg + SZ * Math.sin(Su)];
    }
    return {
      hw: SU,
      hh: Sd,
      cx: cA.x,
      cy: cA.y,
      custom: 1,
      path: Si => Sl[Math.min(SM, Math.max(0, Math.round(Si)))]
    };
  }
  let cb = R[cA.mask_index] || R[cA.sprite_index];
  let cB = Math.abs(cA.image_xscale || 1);
  let cv = Math.abs(cA.image_yscale || 1);
  if (cb && cb.bb) {
    let Si = ((cb.bb[0] + cb.bb[2] + 1) / 2 - (cb.ox || 0)) * (cA.image_xscale || 1);
    let SQ = ((cb.bb[1] + cb.bb[3] + 1) / 2 - (cb.oy || 0)) * (cA.image_yscale || 1);
    let SI = (cA.image_angle || 0) * Math.PI / 180;
    let Sm = Math.cos(SI);
    let Sp = Math.sin(SI);
    let SA = (cb.bb[2] - cb.bb[0] + 1) / 2 * cB;
    let Sb = (cb.bb[3] - cb.bb[1] + 1) / 2 * cv;
    let SB = Math.abs(Math.sin(SI * 2)) < 0.35;
    let Sv = SB ? Math.abs(Sm) * SA + Math.abs(Sp) * Sb : SA;
    let SP = SB ? Math.abs(Sp) * SA + Math.abs(Sm) * Sb : Sb;
    return {
      hw: Math.max(2, Sv),
      hh: Math.max(2, SP),
      cx: cA.x + Si * Sm + SQ * Sp,
      cy: cA.y - Si * Sp + SQ * Sm
    };
  }
  let cP = Math.abs(cA.sprite_width) || 16;
  let cy = Math.abs(cA.sprite_height) || 16;
  return {
    hw: Math.max(2, cP / 2),
    hh: Math.max(2, cy / 2)
  };
}
v(Eg, "boxOf");
function EY(z, cA) {
  let cb = (cA.idealrot !== undefined ? cA.idealrot : cA.image_angle) || 0;
  let cB = cA.image_angle !== undefined ? cA.image_angle : cb;
  if (Math.abs(cB - cb) > Ew.beamAlign) {
    return;
  }
  let cv = (cb - 90) * Math.PI / 180;
  let cP = Math.cos(cv);
  let cy = -Math.sin(cv);
  let cj = Math.abs(cA.image_xscale || 1);
  let cN = cA.x + cP * 35 * cj;
  let cK = cA.y + cy * 35 * cj;
  let q0 = Math.ceil(Math.floor(cj * 35 / 4) * 1.5) + 1;
  let q1 = cA.alarm ? Number(cA.alarm[4]) : -1;
  let q2 = q1 > 0 ? q1 : 0;
  let q3;
  let q4;
  if (cA.con === 7) {
    q3 = Math.max(1, 2 - (cA.btimer || 0));
    q4 = 16 - (cA.btimer || 0);
  } else if (cA.con === 6) {
    q3 = q2 + 1;
    q4 = q2 + 15;
  } else if (cA.con === 5) {
    q3 = 6;
    q4 = 20;
  } else if (cA.con === 4) {
    q3 = q2 + 5;
    q4 = q2 + 19;
  } else {
    q3 = 15;
    q4 = 40;
  }
  if (!(q4 < 1)) {
    for (let q5 = 0; q5 <= 1000; q5 += q0) {
      z.push({
        x: cN + cP * q5,
        y: cK + cy * q5,
        vx: 0,
        vy: 0,
        hw: q0,
        hh: q0,
        beam: 1,
        bax: cP,
        bay: cy,
        t0: q3,
        ttl: q4
      });
    }
  }
}
v(EY, "addBeam");
var ED = new Map();
var EO = new Set(["obj_boneplat"]);
function Et(z) {
  let a = z.constructor.name;
  let cA = ED.get(a);
  if (cA !== undefined) {
    return cA;
  }
  if (EO.has(a)) {
    ED.set(a, false);
    return false;
  }
  let cb = E6.has(a);
  if (!cb && typeof z.is == "function") {
    for (let cB of E6) {
      if (z.is(cB)) {
        cb = true;
        break;
      }
    }
  }
  if (!cb && typeof z.dmg == "number" && z.dmg > 0) {
    cb = true;
  }
  ED.set(a, cb);
  return cb;
}
v(Et, "isThreatClass");
function Er() {
  return ER(true);
}
v(Er, "debugThreats");
function Eh(z) {
  let a = z.parent;
  if (!a || a.destroyed || typeof a != "object" || a.curang === undefined || a.rotspeed === undefined) {
    return;
  }
  let cA = Math.hypot(z.x - a.x, z.y - a.y);
  let cb = Math.atan2(-(z.y - a.y), z.x - a.x);
  let cB = a.rotmin || 0;
  let cv = a.rotspeed || 0;
  return cP => {
    let cy = cv;
    let cj = 0;
    for (let q0 = 0; q0 < cP; q0++) {
      if (cy > cB) {
        cy = Math.max(cB, cy - 0.2);
      } else if (cy < cB) {
        cy = Math.min(cB, cy + 0.2);
      }
      cj += cy;
    }
    let cN = cA - cP * 4;
    let cK = cb + cj * Math.PI / 180;
    return [a.x + Math.cos(cK) * cN, a.y - Math.sin(cK) * cN];
  };
}
v(Eh, "ringPath");
function ER(z) {
  let cA = [];
  for (let cB of s.list) {
    if (cB.destroyed) {
      continue;
    }
    let cv = cB.constructor.name;
    if (cv === "obj_gasterblaster" || cv === "obj_404_blaster") {
      EY(cA, cB);
      continue;
    }
    if (cB.visible === false || !Et(cB)) {
      continue;
    }
    let cP = Number.isFinite(cB.x - cB._px) ? cB.x - cB._px : 0;
    let cy = Number.isFinite(cB.y - cB._py) ? cB.y - cB._py : 0;
    let cj = 0;
    let cN = 0;
    if (Number.isFinite(cB._apvx)) {
      cj = Math.max(-1.5, Math.min(1.5, cP - cB._apvx));
      cN = Math.max(-1.5, Math.min(1.5, cy - cB._apvy));
      cj = (cB._apax || 0) * 0.5 + cj * 0.5;
      cN = (cB._apay || 0) * 0.5 + cN * 0.5;
    }
    if (!z) {
      cB._apax = cj;
      cB._apay = cN;
      cB._apvx = cP;
      cB._apvy = cy;
    }
    let cK = Eg(cB);
    if (!cK.skip) {
      for (let q0 of cK.multi || [cK]) {
        if (!!q0.custom || !!R[cB.mask_index] || !!R[cB.sprite_index] || !!E7.has(cv)) {
          cA.push({
            x: q0.cx === undefined ? cB.x : q0.cx,
            y: q0.cy === undefined ? cB.y : q0.cy,
            vx: q0.vx === undefined ? cP : q0.vx,
            vy: q0.vy === undefined ? cy : q0.vy,
            hw: q0.hw,
            hh: q0.hh,
            ax: q0.ax === undefined ? cj : q0.ax,
            ay: q0.ay === undefined ? cN : q0.ay,
            t0: q0.t0,
            ttl: q0.ttl,
            path: q0.path || (cB.is && cB.is("obj_rotspear") ? Eh(cB) : undefined),
            blueOnly: !!q0.blueOnly || !!cB.is && (!!cB.is("blt_bluesword") || cB.blue === 1 && (!!cB.is("blt_dogspear") || !!cB.is("blt_potentiallyblue") || !!cB.is("blt_loopbulletgrow"))),
            cls: cv,
            custom: !!q0.custom,
            guessed: !q0.custom && !R[cB.mask_index] && !R[cB.sprite_index]
          });
        }
      }
      if (cA.length > 400) {
        break;
      }
    }
  }
  let cb = s.first("obj_sansb_body");
  if (cb && !cb.destroyed && cb.fac === 4 && T.idealborder) {
    let q1 = cb.alarm ? Number(cb.alarm[7]) : 0;
    if (q1 > 0 && q1 <= 7) {
      let q2 = T.idealborder;
      let q3 = 55;
      let q4 = q2[0] + 8;
      let q5 = q2[1] - 3;
      let q6 = q2[3] - q3;
      let q7 = q2[3] - 3;
      cA.push({
        x: (q4 + q5) / 2,
        y: (q6 + q7) / 2,
        vx: 0,
        vy: 0,
        ax: 0,
        ay: 0,
        hw: Math.abs(q5 - q4) / 2,
        hh: Math.abs(q7 - q6) / 2,
        t0: q1 + 7,
        ttl: q1 + 49,
        blueOnly: false
      });
    }
  }
  return cA;
}
v(ER, "gatherThreats");
function EZ(z) {
  if (!z || z.destroyed) {
    return null;
  }
  {
    let cP = a4(z);
    if (cP !== undefined) {
      return cP;
    }
  }
  {
    let cy = zI(z);
    if (cy !== undefined) {
      return cy;
    }
  }
  let cA = z.constructor.name;
  if (cA === "obj_gasterblaster" || cA === "obj_404_blaster") {
    if (z.col_o !== 1 || z.fade !== undefined && !(z.fade >= 0.8)) {
      return null;
    }
    let cj = ((z.image_angle || 0) - 90) * Math.PI / 180;
    let cN = Math.cos(cj);
    let cK = -Math.sin(cj);
    let q0 = Math.abs(z.image_xscale || 1);
    let q1 = Math.ceil(Math.floor(q0 * 35 / 4) * 1.5) + 1;
    return [{
      line: [z.x + cN * 35 * q0, z.y + cK * 35 * q0, cN, cK, q1],
      blue: false
    }];
  }
  if (!Et(z) || z.active === 0 && typeof z.is == "function" && z.is("obj_collidebullet")) {
    return null;
  }
  let cb = Eg(z);
  if (cb.skip) {
    return null;
  }
  let cB = !!cb.blueOnly || !!z.is && (!!z.is("blt_bluesword") || !!z.is("obj_sans_bonebul") && z.type === 1 || z.blue === 1 && (!!z.is("blt_dogspear") || !!z.is("blt_potentiallyblue") || !!z.is("blt_loopbulletgrow")));
  let cv = [];
  for (let q2 of cb.multi || [cb]) {
    if (q2.t0 === undefined || !(q2.t0 > 1)) {
      if (q2.custom && q2.cx !== undefined) {
        cv.push({
          rect: [q2.cx - q2.hw, q2.cy - q2.hh, q2.cx + q2.hw, q2.cy + q2.hh],
          blue: cB || !!q2.blueOnly
        });
        continue;
      }
      if (R[z.mask_index] || R[z.sprite_index]) {
        cv.push({
          mask: true,
          blue: cB || !!q2.blueOnly
        });
        continue;
      }
      if (q2.cx !== undefined) {
        cv.push({
          rect: [q2.cx - q2.hw, q2.cy - q2.hh, q2.cx + q2.hw, q2.cy + q2.hh],
          blue: cB || !!q2.blueOnly
        });
        continue;
      }
      if (q2.custom || E7.has(cA)) {
        cv.push({
          rect: [z.x - q2.hw, z.y - q2.hh, z.x + q2.hw, z.y + q2.hh],
          blue: cB
        });
      }
    }
  }
  return cv;
}
v(EZ, "hazardShapes");
var Em = (() => {
  let z = [];
  for (let a = -14; a <= 14; a++) {
    for (let cA = -14; cA <= 14; cA++) {
      let cb = Math.hypot(cA, a);
      if (cb <= 14) {
        z.push([cA, a, cb]);
      }
    }
  }
  z.sort((cB, cv) => cB[2] - cv[2]);
  return {
    R: 14,
    list: z
  };
})();
function Ep(z, cA, cb, cB, cv, cP) {
  let [cy, cj, cN, cK] = cB;
  let q0 = Math.floor((cv - cy) / (cN - cy) * cA);
  let q1 = Math.floor((cP - cj) / (cK - cj) * cb);
  if (q0 < 0 || q1 < 0 || q0 >= cA || q1 >= cb) {
    return 0;
  }
  let q2 = z.grid;
  let q3 = z.hazardIsLit ? 1 : 0;
  for (let q4 = 0; q4 < Em.list.length; q4++) {
    let q5 = Em.list[q4];
    let q6 = q0 + q5[0];
    let q7 = q1 + q5[1];
    if (q6 < 0 || q7 < 0 || q6 >= cA || q7 >= cb || q2[q7 * cA + q6] === q3) {
      return q5[2];
    }
  }
  return Em.R;
}
v(Ep, "gridClearance");
var EA = 0;
function Eb() {
  let z = EW();
  if (!z) {
    return EB() > 0;
  }
  let [cA, cb, cB, cv] = z;
  for (let cP of s.list) {
    if (cP.destroyed || cP.visible === false || !Et(cP)) {
      continue;
    }
    let cy = Eg(cP);
    for (let cj of cy.multi || [cy]) {
      if (cj.skip) {
        continue;
      }
      let cN = cj.cx === undefined ? cP.x : cj.cx;
      let cK = cj.cy === undefined ? cP.y : cj.cy;
      if (cN + cj.hw >= cA && cN - cj.hw <= cB && cK + cj.hh >= cb && cK - cj.hh <= cv) {
        return true;
      }
    }
  }
  return false;
}
v(Eb, "hazardsInBox");
function EB() {
  let z = 0;
  for (let a of s.list) {
    if (!a.destroyed && a.visible !== false) {
      if (Et(a)) {
        z++;
      }
    }
  }
  return z;
}
v(EB, "liveThreats");
var Ev = null;
function EP() {
  if (T.minigameStage || T.standaloneMinigame) {
    if (Ev && m.synthetic === Ev) {
      m.synthetic = null;
      if (cS.b1 || cS.zHeld || cS.zPrev) {
        m.held.b1 = false;
        m.pressed.b1 = false;
      }
      if (cS.xHeld || cS.xPrev) {
        m.held.b2 = false;
        m.pressed.b2 = false;
      }
    }
    Ev = null;
    cS.b1 = false;
    cS.pulse = null;
    cS.zHeld = false;
    cS.zPrev = false;
    cS.xHeld = false;
    cS.xPrev = false;
    cS.edges = "";
    return true;
  } else {
    return false;
  }
}
v(EP, "minigameOwnsInput");
function Ey() {
  if (!T.autoplay || (c0(), EP()) || (EA++, aI(EA))) {
    return;
  }
  let z = s.first("obj_heart");
  {
    let cA = c7();
    if (cA !== null) {
      cl(false);
      if (cA) {
        cf("b3");
      }
      return;
    }
  }
  {
    let cb = s.first("obj_choicer_neo");
    if (cb && cb.canchoose === 1 && cb.controlled !== 0 && cb.controlled !== false) {
      if (cb.mychoice >= 0) {
        cl(EA % 2 === 0);
      } else {
        cl(false);
        cf("left");
      }
      return;
    }
  }
  {
    let cB = we();
    if (cB !== null) {
      cl(cB);
      return;
    }
  }
  if (T.mnfight === 2 && cG(z)) {
    cW(z);
    return;
  }
  if (T.mnfight === 2 && Eb() && !cw()) {
    cl(false);
    return;
  }
  {
    let cv = zi();
    if (cv !== null) {
      if (cv === "b1") {
        cl(true);
      } else {
        cl(false);
        if (cv) {
          cf(cv);
        }
      }
      return;
    }
  }
  {
    let cP = w7();
    if (cP !== null) {
      if (cP === "b1") {
        cl(true);
      } else {
        cl(false);
        if (cP) {
          cf(cP);
        }
      }
      return;
    }
  }
  {
    let cy = wB();
    if (cy !== null) {
      if (cy === "b1") {
        cl(true);
      } else {
        cl(false);
        if (cy) {
          cf(cy);
        }
      }
      return;
    }
  }
  {
    let cj = c8();
    if (cj !== null) {
      if (cj === "b1") {
        cl(true);
      } else {
        cl(false);
        if (cj) {
          cf(cj);
        }
      }
      return;
    }
  }
  {
    let cN = E0();
    if (cN !== null) {
      if (cN === "b1") {
        cl(true);
      } else {
        cl(false);
        if (cN) {
          cf(cN);
        }
      }
      return;
    }
  }
  let a = cT();
  if ((!!s.first("obj_menubone") || !!s.first("obj_menubone_bottom")) && a === null && T.mnfight !== 2) {
    if (Ej && Ej.i < Ej.frames.length) {
      let q0 = Ej.frames[Ej.i++];
      if (q0 === "b1") {
        cl(true);
      } else {
        cl(false);
        if (q0) {
          cf(q0);
        }
      }
      return;
    }
    Ej = null;
    if (EA % 2 !== 0) {
      cl(false);
      return;
    }
    let cK = cc();
    if (cK) {
      Ej = {
        frames: cK,
        i: 0
      };
      let q1 = Ej.frames[Ej.i++];
      if (q1 === "b1") {
        cl(true);
      } else {
        cl(false);
        if (q1) {
          cf(q1);
        }
      }
      return;
    }
    cl(true);
    return;
  }
  cl(a !== null ? a : EA % 8 === 0);
}
v(Ey, "autoplayUI");
var Ej = null;
var EN = {
  on: 0,
  heals: 0,
  hp: [0, 0, 0],
  name: ["", "", ""],
  still: 0,
  sig: "",
  inMenu: 0,
  plan: [null, null, null],
  used: {},
  gain: {},
  last: null
};
function EK() {
  return !!T.bmenucoord && !!Array.isArray(T.bmenucoord[0]);
}
v(EK, "drMenu");
function c0() {
  if (!T.monster || !T.monsterhp || !EK()) {
    return;
  }
  for (let a = 0; a < 3; a++) {
    let cA = T.monster[a] === 1 ? String(T.monstername && T.monstername[a] || "") : "";
    let cb = Number(T.monsterhp[a]) || 0;
    let cB = Number(T.monstermaxhp && T.monstermaxhp[a]) || 0;
    if (cA !== EN.name[a]) {
      EN.name[a] = cA;
      EN.hp[a] = cb;
      continue;
    }
    if (cA && cB > 0 && cb - EN.hp[a] >= cB / 10 && ++EN.heals >= 2) {
      EN.on = 1;
    }
    EN.hp[a] = cb;
  }
  let z = T.fighting === 1 && T.mnfight === 0 && T.myfight === 0 ? 1 : 0;
  if (z && !EN.inMenu) {
    let cv = "";
    for (let cy = 0; cy < 3; cy++) {
      if (T.monster[cy] === 1) {
        cv += cy + ":" + T.monsterhp[cy] + ":" + T.mercymod[cy] + " ";
      }
    }
    EN.still = cv === EN.sig ? EN.still + 1 : 0;
    EN.sig = cv;
    if (EN.still >= 3) {
      EN.on = 1;
    }
    EN.plan = [null, null, null];
    let cP = EN.last;
    if (cP) {
      let cj = cP.m + ":" + cP.i;
      EN.gain[cj] = (EN.gain[cj] || 0) + (Number(T.mercymod[cP.m]) || 0) - cP.mercy;
      EN.last = null;
    }
  }
  EN.inMenu = z;
}
v(c0, "mercyWatch");
function c1(z) {
  let a = W(z);
  if (a < 0) {
    return T.customTeam === 1;
  }
  let cA = s.first("obj_battlecontroller");
  if (cA && cA.havechar && cA.havechar[a] !== 1) {
    return false;
  } else {
    return Number(T.hp && T.hp[T.char[a]]) > 0;
  }
}
v(c1, "heroUp");
function c2(z) {
  let a = W(z);
  if (a < 0 || T.flag[34] === 1 || T.chapter === 1) {
    return false;
  } else {
    return (T.battlespellspecial && T.battlespellspecial[a] || []).some(cA => (cA | 0) >= 1);
  }
}
v(c2, "ownActs");
function c3() {
  let z = s.first("obj_battlecontroller");
  return !!z && z.oopsallacts === 1 && !!s.first("obj_tenna_board4_enemy");
}
v(c3, "allActs");
function c4(z, a, cA = "") {
  if (((T["canact" + cA] || [])[z] || [])[a] !== 1 || ((T["actname" + cA] || [])[z] || [])[a] === "Check" || Number(((T["actcost" + cA] || [])[z] || [])[a]) > T.tension) {
    return false;
  }
  if (c3()) {
    return true;
  }
  let cb = (T.actactor && T.actactor[z] && T.actactor[z][a]) | 0;
  return (cb !== 2 && cb !== 4 || !!c1(2) && !c2(2)) && (cb !== 3 && cb !== 4 || !!c1(3) && !c2(3)) && (cb !== 5 || !!c1(4) && !c2(4));
}
v(c4, "krisAct");
function c5(z) {
  let cA = c3();
  let cb = new Set(EN.plan.filter((cj, cN) => cj && cN !== z && cj.target !== undefined).map(cj => cj.target));
  let cB = [0, 1, 2].filter(cj => T.monster[cj] === 1);
  if (cA) {
    let cj = cN => Object.keys(EN.used).reduce((cK, q0) => cK + (q0.startsWith(cN + ":") ? EN.used[q0] : 0), 0);
    cB = cB.filter(cN => !(Number(T.mercymod[cN]) >= 100)).sort((cN, cK) => cj(cN) - cj(cK) || cN - cK);
  } else {
    for (let cN of cB) {
      if (Number(T.mercymod && T.mercymod[cN]) >= 100) {
        return {
          main: 3,
          target: cN
        };
      }
    }
  }
  let cv = cB.filter(cK => !cb.has(cK)).concat(cB.filter(cK => cb.has(cK)));
  let cP = T.char[z];
  let cy = {
    2: "sus",
    3: "ral",
    4: "noe"
  }[cP];
  if (cP === 1 || cA) {
    let cK = cA && T.chapter !== 1 && cy ? cy : "";
    for (let q0 of cv) {
      let q1 = [];
      for (let q4 = 0; q4 < 6; q4++) {
        if (c4(q0, q4, cK)) {
          q1.push(q4);
        }
      }
      if (!q1.length) {
        continue;
      }
      let q2 = q5 => q0 + ":" + q5;
      q1.sort((q5, q6) => (EN.gain[q2(q6)] || 0) - (EN.gain[q2(q5)] || 0) || (EN.used[q2(q5)] | 0) - (EN.used[q2(q6)] | 0) || q5 - q6);
      let q3 = q1[0];
      EN.used[q2(q3)] = (EN.used[q2(q3)] | 0) + 1;
      EN.last = {
        m: q0,
        i: q3,
        mercy: Number(T.mercymod[q0]) || 0
      };
      return {
        main: 1,
        target: q0,
        act: q3
      };
    }
    return {
      main: 4
    };
  }
  {
    let q5 = T.chapter !== 1 && T.flag[34] === 0;
    let q6 = (q5 ? (T.battlespell || [])[z] : T.spell[cP]) || [];
    let q7 = (q5 ? (T.battlespellcost || [])[z] : (T.spellcost || [])[cP]) || [];
    for (let q8 = 0; q8 < 12; q8++) {
      if (F(q6[q8]) === "mercy" && Number(q7[q8] || 0) <= T.tension && o(q6[q8], z)) {
        return {
          main: 1,
          tech: q8,
          target: cv[0]
        };
      }
    }
  }
  if (cy && T.flag[34] !== 1) {
    let q9 = T.battlespellspecial && T.battlespellspecial[z] || [];
    let qz = T.battlespellcost && T.battlespellcost[z] || [];
    for (let qa of cv) {
      let qw = T["canact" + cy] && T["canact" + cy][qa] || [];
      for (let qC = 0; qC < 12; qC++) {
        if ((q9[qC] | 0) >= 1 && qw[qC] === 1 && Number(qz[qC] || 0) <= T.tension) {
          return {
            main: 1,
            tech: qC,
            target: qa
          };
        }
      }
    }
  }
  return {
    main: 4
  };
}
v(c5, "mercyPlan");
function c6(z, cA, cb) {
  let cB = s.all("obj_throwtarget").filter(q0 => !q0.destroyed).map(q0 => [h(q0), q0.good === 1]);
  if (!cB.length) {
    return 0;
  }
  let cv = Math.cos(cA * Math.PI / 180);
  let cP = -Math.sin(cA * Math.PI / 180);
  let cy = z.rx;
  let cj = z.ry;
  let cN = cb * cv;
  let cK = cb * cP;
  for (let q0 = 0; q0 < 60; q0++) {
    cK += z.ralgrav;
    cy += cN;
    cj += cK;
    let q1 = Math.atan2(cK, cN);
    let q2 = Math.cos(q1);
    let q3 = Math.sin(q1);
    for (let q4 = -40; q4 <= 32; q4 += 8) {
      let q5 = cy + q2 * q4;
      let q6 = cj + q3 * q4;
      for (let [q7, q8] of cB) {
        if (q5 >= q7[0] - 12 && q5 <= q7[2] + 12 && q6 >= q7[1] - 12 && q6 <= q7[3] + 12) {
          if (q8) {
            return 2;
          } else {
            return 1;
          }
        }
      }
    }
    if (cj > z.ry + 400) {
      break;
    }
  }
  return 0;
}
v(c6, "throwHits");
function c7() {
  let z = s.first("obj_throwralsei");
  if (!z || z.throwcon !== 1) {
    return null;
  }
  if ((s.frame | 0) % 2 !== 0) {
    return "";
  }
  let a = cA => {
    let cb = 0;
    for (let cB = z.minpower; cB <= z.maxpower; cB += 1) {
      cb = Math.max(cb, c6(z, cA, cB));
    }
    return cb;
  };
  if (z.throwready === 0) {
    let cA = 0;
    for (let cb = -15; cb <= 30; cb += 3) {
      cA = Math.max(cA, a(cb));
    }
    if (a(z.angle) >= cA) {
      return "c";
    } else {
      return "";
    }
  }
  if (z.throwalpha >= 0.9 && c6(z, z.angle, z.mypower) >= a(z.angle)) {
    return "c";
  } else {
    return "";
  }
}
v(c7, "throwPress");
function c8() {
  if (!EN.on || !EK() || T.fighting !== 1 || T.mnfight !== 0 || T.myfight !== 0 || T.battleover) {
    return null;
  }
  let z = T.charturn;
  if (!(z >= 0) || !(z < Math.max(3, T.char ? T.char.length : 3)) || !T.char || !(T.char[z] > 0) || T.char[z] === 1 && !c1(1) || s.first("obj_rouxls_ch3_enemy")) {
    return null;
  }
  let cA = EN.plan[z] ||= c5(z);
  if ((s.frame | 0) % 3 !== 0) {
    return "";
  }
  let cb = T.bmenuno;
  let cB = T.bmenucoord;
  let cv = cP => cB[cP] ? cB[cP][z] | 0 : 0;
  if (cb === 0) {
    let cP = cv(0);
    if (cP === cA.main || c3()) {
      return "b1";
    } else if ((cA.main - cP + 5) % 5 <= 2) {
      return "right";
    } else {
      return "left";
    }
  }
  if (!(cA.main === 0 ? [1] : cA.main === 3 ? [3] : cA.main === 1 ? cA.tech !== undefined ? [2, 13, 7, 8, 3] : [11, 12, 9] : []).includes(cb)) {
    if ([1, 2, 3, 7, 8, 9, 11, 12, 13].includes(cb)) {
      return "b2";
    } else {
      return null;
    }
  }
  if (cb === 11 || cb === 12 || cb === 13 || cb === 1 || cb === 3) {
    if (cA.target !== undefined && cv(cb) !== cA.target && T.monster[cA.target] === 1) {
      return "down";
    } else {
      return "b1";
    }
  }
  if (cb === 9 || cb === 2) {
    let cy = cb === 9 ? cA.act : cA.tech;
    if (cy === undefined) {
      return "b1";
    }
    let cj = cv(cb);
    if (cj === cy) {
      return "b1";
    } else if (cj >> 1 === cy >> 1) {
      if (cj & 1) {
        return "left";
      } else {
        return "right";
      }
    } else if (cj < cy) {
      return "down";
    } else {
      return "up";
    }
  }
  if (cb === 7 || cb === 8) {
    return "b1";
  } else {
    return null;
  }
}
v(c8, "mercyMenuAction");
var c9 = v(z => ({
  on: z.on,
  heals: z.heals,
  hp: z.hp.slice(),
  name: z.name.slice(),
  still: z.still,
  sig: z.sig,
  inMenu: z.inMenu,
  plan: z.plan.map(a => a ? {
    ...a
  } : null),
  used: {
    ...z.used
  },
  gain: {
    ...z.gain
  },
  last: z.last ? {
    ...z.last
  } : null
}), "mercyCopy");
var cz = c9(EN);
function ca(z) {
  Object.assign(EN, c9(z || cz));
}
v(ca, "mercyLoad");
function cw() {
  for (let z of s.all("obj_base_writer")) {
    if (!z.destroyed && (z.halt === 1 || z.halt === 2 || z.halt === 4)) {
      return true;
    }
  }
  return false;
}
v(cw, "utWriterParked");
var cC = null;
function cE(z, a, cA) {
  let cb = [];
  let cB = cv => {
    let cP = z;
    let cy = cv > cP ? "right" : "left";
    while (cP !== cv) {
      cb.push(cy, "");
      cP += cv > cP ? 1 : -1;
    }
    z = cv;
  };
  for (cB(a); cb.length < cA;) {
    cb.push("");
  }
  cB(0);
  cb.push("b1", "", "b1", "");
  return cb;
}
v(cE, "menuFrames");
function cc() {
  let z = Array.isArray(T.bmenucoord) ? T.bmenucoord[0] | 0 : 0;
  let cA = d();
  let cb = new Map();
  let cB = (cj, cN, cK) => {
    let q0 = cj.join(",");
    let q1 = cb.get(q0);
    if (q1 !== undefined && (q1.full || q1.c > cN || q1.c === cN && cj.length >= cK)) {
      return q1.c;
    }
    let q2 = cq(cj, cA, cN, cK);
    cb.set(q0, {
      c: q2,
      full: cN === Infinity
    });
    return q2;
  };
  if (z === 0 && cB(cE(0, 0, 0), Infinity, Infinity) === 0) {
    return null;
  }
  let cv = null;
  let cP = Infinity;
  let cy = Infinity;
  for (let cj = 0; cj <= 64; cj += 4) {
    for (let cN = 0; cN < 4; cN++) {
      let cK = cE(z, cN, cj);
      let q0 = cB(cK, cP, cy);
      if (q0 < cP || q0 === cP && cK.length < cy) {
        cv = cK;
        cP = q0;
        cy = cK.length;
      }
      if (q0 === 0) {
        return cK;
      }
    }
  }
  return cv;
}
v(cc, "chooseMenuPlan");
function cq(z, cA = null, cb = Infinity, cB = Infinity) {
  cC = cC || E1();
  let cv = cA || d();
  let cP = m.synthetic;
  let cy = cS.b1;
  let cj = cS.pulse;
  let cN = typeof T.hp == "number" ? T.hp : 0;
  let cK = Number(T.km) || 0;
  let q0 = 0;
  D();
  try {
    for (let q1 = 0; q1 < z.length + 10; q1++) {
      let q2 = z[q1] || "";
      m.synthetic = () => {
        m.pressed.b1 = q2 === "b1";
        m.held.b1 = q2 === "b1";
        for (let q6 of ["left", "right"]) {
          m.pressed[q6] = q2 === q6;
          m.held[q6] = q2 === q6;
        }
      };
      try {
        p(U, cC);
      } catch {
        break;
      }
      let q3 = typeof T.hp == "number" ? T.hp : 0;
      let q4 = Number(T.km) || 0;
      let q5 = Math.max(0, cK - q4);
      q0 = Math.max(q0, Math.max(0, cN - q3 - q5) + Math.max(0, q4 - cK));
      if (q0 > cb || q0 === cb && z.length >= cB) {
        break;
      }
    }
  } finally {
    M(cv);
    O();
    m.synthetic = cP;
    cS.b1 = cy;
    cS.pulse = cj;
  }
  return q0;
}
v(cq, "menuPlanCost");
var cS = {
  b1: false,
  pulse: null,
  zHeld: false,
  zPrev: false,
  xHeld: false,
  xPrev: false,
  edges: ""
};
function ck() {
  m.synthetic = Ev = () => {
    let z = cS.edges ? cF(cS.edges) : null;
    let a = cS.zHeld || !!z && !!z.has("z");
    let cA = cS.xHeld || !!z && !!z.has("x");
    m.pressed.b1 = cS.b1 || a && (!cS.zPrev || !!z && !!z.has("z"));
    m.held.b1 = cS.b1 || a;
    if (cA || cS.xPrev) {
      m.pressed.b2 = cA && (!cS.xPrev || !!z && !!z.has("x"));
      m.held.b2 = cA;
    }
    if (cS.pulse) {
      m.pressed[cS.pulse] = true;
      m.held[cS.pulse] = true;
      cS.pulse = null;
    }
    if (z) {
      for (let cb of z) {
        if (cb !== "z" && cb !== "x") {
          m.pressed[cb] = true;
          m.held[cb] = true;
        }
      }
    }
  };
}
v(ck, "installSynthetic");
var cV = new Map();
function cF(z) {
  let a = cV.get(z);
  if (!a) {
    a = new Set(z.split("+").filter(Boolean));
    cV.set(z, a);
  }
  return a;
}
v(cF, "edgeSet");
var co = ["left", "right", "up", "down"];
var cH = "";
function cJ(z, a) {
  let cA = String(z || "").split("+").filter(Boolean);
  for (let cP of co) {
    m.held[cP] = false;
  }
  let cb = false;
  let cB = false;
  let cv = "";
  for (let cy of cA) {
    if (cy === "z") {
      cb = true;
    } else if (cy === "x") {
      cB = true;
    } else if (cy.charCodeAt(0) === 33) {
      cv += (cv ? "+" : "") + cy.slice(1);
    } else {
      m.held[cy] = true;
    }
  }
  m.pressed.up = !!a;
  cS.zPrev = cS.zHeld;
  cS.zHeld = cb;
  cS.xPrev = cS.xHeld;
  cS.xHeld = cB;
  cS.edges = cv;
  if (cb || cB || cv || cS.zPrev || cS.xPrev) {
    ck();
  }
  cH = cA.join("+");
}
v(cJ, "applyPlanKeys");
function cU() {
  return cH;
}
v(cU, "lastPlanKeys");
function cd() {
  if (!!cS.zHeld || !!cS.xHeld || !!cS.edges || !!cS.zPrev || !!cS.xPrev) {
    cS.zPrev = cS.zHeld;
    cS.zHeld = false;
    cS.xPrev = cS.xHeld;
    cS.xHeld = false;
    cS.edges = "";
    ck();
  }
}
v(cd, "releasePlanKeys");
function cM(z, cA) {
  let cb = false;
  let cB = false;
  let cv = false;
  let cP = false;
  let cy = [];
  for (let cK of z || []) {
    if (cK === "z") {
      cb = true;
    } else if (cK === "x") {
      cB = true;
    } else if (cK.charCodeAt(0) === 33) {
      cy.push(cK.slice(1));
    }
  }
  for (let q0 of cA || []) {
    if (q0 === "z") {
      cv = true;
    } else if (q0 === "x") {
      cP = true;
    }
  }
  if (!cb && !cB && !cv && !cP && !cy.length) {
    return null;
  }
  let cj = cy.includes("z");
  let cN = cy.includes("x");
  return () => {
    m.pressed.b1 = cb && !cv || cj;
    m.held.b1 = cb || cj;
    m.pressed.b2 = cB && !cP || cN;
    m.held.b2 = cB || cN;
    for (let q1 of cy) {
      if (q1 !== "z" && q1 !== "x") {
        m.pressed[q1] = true;
        m.held[q1] = true;
      }
    }
  };
}
v(cM, "tokenSynthetic");
function cl(z) {
  cS.b1 = !!z;
  m.held.b1 = !!z;
  m.pressed.b1 = !!z;
  ck();
}
v(cl, "pressB1");
function cf(z) {
  cS.pulse = z;
  m.pressed[z] = true;
  m.held[z] = true;
  ck();
}
v(cf, "pulseDir");
function cT() {
  let z = s.first("obj_attackpress");
  if (z && !z.destroyed && Array.isArray(z.boltalive)) {
    let cb = false;
    let cB = false;
    for (let cv = 0; cv < z.bolttotal; cv++) {
      if (z.boltalive[cv] === 1) {
        cB = true;
        if (z.boltframe[cv] - z.boltx === 0) {
          cb = true;
        }
      }
    }
    if (cB) {
      return cb;
    } else {
      return false;
    }
  }
  let a = s.first("obj_targetchoice");
  let cA = s.first("obj_target");
  if (a && !a.destroyed && a.image_speed !== 0) {
    return null;
  }
  if (a && !a.destroyed && cA && !cA.destroyed) {
    let cP = (a.x || 0) + (Math.abs(a.sprite_width) || 0) / 2;
    let cy = (cA.x || 0) + (Math.abs(cA.sprite_width) || 0) / 2;
    let cj = Math.abs(Number(a.hspeed) || 0) || 1;
    return Math.abs(cP - cy) <= Math.max(3, cj);
  }
  return null;
}
v(cT, "attackBarPress");
var cL = 0;
function cG(z) {
  if (z) {
    if (z.shot === 1) {
      return true;
    } else {
      return /yellow/i.test(String(z.sprite_index || ""));
    }
  } else {
    return false;
  }
}
v(cG, "isYellowSoul");
function cW(z) {
  if (T.mnfight !== 2 || !cG(z)) {
    cL = 0;
    return;
  }
  cL++;
  cl(cL % 4 === 1);
}
v(cW, "fireTick");
var cX = 0;
var cg = null;
var cY = "b2";
var cD = {
  picks: {},
  punchStarts: 0,
  foeSeen: 0
};
var cO = {
  last: -1,
  windup: {}
};
var ch = v(z => {
  let a = s.first(z);
  return a && Number(a.health_count) || 0;
}, "ringHp");
var cR = v(() => ch("o_boxingcontroller"), "partyHp");
function cZ() {
  if (globalThis.__boxOff) {
    return false;
  }
  let z = s.first("o_boxingcontroller");
  if (!z) {
    cX = 0;
    return false;
  }
  let cA = s.first("o_boxingqueen");
  if (!z._apLive) {
    if (cA && cA.state !== 0) {
      z._apLive = 1;
    } else {
      return false;
    }
  }
  for (let cN of ["left", "right", "up", "down"]) {
    m.held[cN] = false;
  }
  cl(false);
  cX++;
  if (cA && cA.state === 3 && (cA.attacktimer | 0) <= 1) {
    cA._apAttackId = (cA._apAttackId | 0) + 1;
  }
  if (!cA || cA.state !== 3) {
    cO.last = -1;
    if (cX % 6 === 1 && z.canpunch !== 0) {
      let cK = cY === "b1" ? "b2" : "b1";
      cf(cK);
      cY = cK;
      cD.picks[cK] = (cD.picks[cK] || 0) + 1;
    }
    return true;
  }
  if (cX % 2 !== 0) {
    return true;
  }
  cg = cg || E1();
  let cb = d();
  let cB = m.synthetic;
  let cv = r();
  g(false);
  D();
  let cP = (q0, q1) => {
    M(cb);
    let q2 = cR();
    for (let q3 = 0; q3 < q1; q3++) {
      m.synthetic = q3 === 0 && q0 ? () => {
        m.pressed[q0] = true;
        m.held[q0] = true;
      } : null;
      try {
        p(U, cg);
      } catch {}
      if (T.battleover) {
        break;
      }
    }
    return q2 - cR();
  };
  let cy = null;
  let cj = Infinity;
  try {
    let q0 = cP(null, 16);
    if (q0 > 0) {
      cj = q0;
      for (let q1 of ["left", "right", "down"]) {
        let q2 = cP(q1, 22);
        if (q2 < cj) {
          cj = q2;
          cy = q1;
        }
        if (q2 === 0) {
          break;
        }
      }
    }
  } finally {
    M(cb);
    O();
    m.synthetic = cB;
    g(cv);
  }
  cD.picks[cy || "none"] = (cD.picks[cy || "none"] || 0) + 1;
  if (globalThis.__boxNoPress) {
    cy = null;
  }
  if (cy) {
    cf(cy);
    if (cy === "b1" || cy === "b2") {
      cY = cy;
    }
  }
  return true;
}
v(cZ, "boxingStep");
function cu() {
  let z = s.first("obj_lightemup_controller");
  if (!z || z.destroyed || !z.shooting_enabled) {
    return false;
  }
  let cA = s.view.x || 0;
  let cb = s.view.y || 0;
  let cB = s.first("obj_herokris");
  let cv = cB ? cB.x + 61 : cA + 177;
  let cP = cB ? cB.y + 45 : cb + 177;
  let cy = q4 => {
    let q5 = h(q4);
    if (q5) {
      return [(q5[0] + q5[2]) / 2, (q5[1] + q5[3]) / 2];
    } else {
      return [q4.x, q4.y];
    }
  };
  let cj = null;
  let cN = Infinity;
  for (let q4 of s.all("obj_tenna_lightemup_bullet")) {
    if (q4.destroyed || q4.vanish) {
      continue;
    }
    let [q5, q6] = cy(q4);
    let q7 = Math.hypot(q5 - cv, q6 - cP);
    if (q7 < cN) {
      cN = q7;
      cj = [q5, q6];
    }
  }
  let cK;
  let q0;
  if (cj) {
    [cK, q0] = cj;
    let q8 = cA + 220;
    if (cK < q8 && cK > cv + 1) {
      let q9 = (q8 - cv) / (cK - cv);
      cK = q8;
      q0 = cP + (q0 - cP) * q9;
    }
  } else {
    let qz = s.first("obj_shadowman_sharpshoot_target");
    if (qz) {
      [cK, q0] = cy(qz);
    } else {
      cK = z.cursor_x;
      q0 = z.cursor_y;
    }
  }
  cK = Math.max(cA + 220, Math.min(cA + 600, cK));
  q0 = Math.max(cb + 42, Math.min(cb + 300, q0));
  let q1 = cK - z.cursor_x;
  let q2 = q0 - z.cursor_y;
  let q3 = ["z"];
  if (q1 > 6) {
    q3.push("right");
  } else if (q1 < -6) {
    q3.push("left");
  }
  if (q2 > 6) {
    q3.push("down");
  } else if (q2 < -6) {
    q3.push("up");
  }
  cJ(q3.join("+"));
  return true;
}
v(cu, "lightemupStep");
function ci(cA, cb, cB, cv, cP) {
  if (!T.autoplay || EP() || (cd(), cZ()) || aX(cb) || !cb && cu() || !cb && w1() || w3() || cb && wC(cb)) {
    return;
  }
  if (!cb || cb.destroyed) {
    ET();
    return;
  }
  EV++;
  {
    let qV = ze(cb);
    if (qV) {
      ET();
      for (let qF of qV) {
        m.held[qF] = true;
      }
      Ez.mode = "ch4-green";
      Ed("ch4-green", qV.join("+") || "none", "shield by rollout");
      return;
    }
  }
  let cy = !!cA && !!cA.grid && !!cB && !!cv && !!cP;
  let cj = cy ? cB : EW();
  let cN = cy ? null : ER();
  let cK = !cy && (!cN || !cN.length);
  let q0 = R[cb.mask_index] || R[cb.sprite_index];
  let q1 = Ew.margin;
  let q2 = q0 ? (q0.bb ? q0.bb[2] - q0.bb[0] + 1 : q0.w) / 2 : 8;
  let q3 = q0 ? (q0.bb ? q0.bb[3] - q0.bb[1] + 1 : q0.h) / 2 : 8;
  let q4 = q2 + q1;
  let q5 = q3 + q1;
  let q6 = cb.x + q2;
  let q7 = cb.y + q3;
  if (Ek) {
    let qH = Math.hypot(cb.x - Ek[0], cb.y - Ek[1]);
    if (qH > 0.5 && qH < 12) {
      ES = ES * 0.9 + qH * 0.1;
    }
    if (Ec !== 0 && qH < 0.01) {
      EF.set(Ec, 12);
    }
    let qx = Math.abs(cb.x - Ek[0]) > 0.01;
    let qJ = Math.abs(cb.y - Ek[1]) > 0.01;
    if (Ex.right && !qx) {
      EH.right = 10;
    }
    if (Ex.left && !qx) {
      EH.left = 10;
    }
    if (Ex.down && !qJ) {
      EH.down = 10;
    }
    if (Ex.up && !qJ) {
      EH.up = 10;
    }
    if (qx) {
      EH.left = 0;
      EH.right = 0;
    }
    if (qJ) {
      EH.up = 0;
      EH.down = 0;
    }
  }
  for (let [qU, qd] of EF) {
    if (qd <= 1) {
      EF.delete(qU);
    } else {
      EF.set(qU, qd - 1);
    }
  }
  for (let qM of ["left", "right", "up", "down"]) {
    if (EH[qM] > 0) {
      EH[qM]--;
    }
  }
  Ek = [cb.x, cb.y];
  let q8 = Ew.horizon;
  let q9 = Math.max(1, ES);
  let qz = q8;
  let qa = String(cb.mask_index || cb.sprite_index || "");
  EJ.soul = qa.replace("spr_", "");
  EJ.threats = cN ? cN.length : 0;
  EJ.hazards = cN ? [] : [];
  if (!cy) {
    let qf = new Set();
    for (let qT of s.list) {
      if (!qT.destroyed && !!Et(qT) && (qf.add(qT.constructor.name), qf.size > 5)) {
        break;
      }
    }
    EJ.hazards = [...qf];
  }
  if (cK && !/heartgreen/i.test(qa)) {
    ET();
    return;
  }
  let qw = (cN || []).find(qL => qL.beam && (qL.t0 === undefined || qL.t0 <= 1) && Math.abs(q6 - qL.x) < q4 + qL.hw && Math.abs(q7 - qL.y) < q5 + qL.hh);
  if (!cy && qw && !/heartgreen/i.test(qa)) {
    Ed("beam", "perpendicular", "standing in a blaster beam");
    let qL = -qw.bay;
    let qG = qw.bax;
    let qW = qD => {
      let qO = [];
      if (Math.abs(qL) > 0.35) {
        qO.push(qL * qD > 0 ? "right" : "left");
      }
      if (Math.abs(qG) > 0.35) {
        qO.push(qG * qD > 0 ? "down" : "up");
      }
      return qO;
    };
    let qX = (q6 - qw.x) * qL + (q7 - qw.y) * qG >= 0 ? 1 : -1;
    let qg = qX;
    let qY = qW(qX);
    if (qY.length && qY.every(qD => EH[qD] > 0)) {
      qg = -qX;
      qY = qW(qg);
    }
    ET();
    for (let qD of qY) {
      m.held[qD] = true;
    }
    Ex.left = !!m.held.left;
    Ex.right = !!m.held.right;
    Ex.up = !!m.held.up;
    Ex.down = !!m.held.down;
    Ec = 0;
    Eq = 0;
    Ez.mode = "beam-escape";
    Ez.dir = [qL * qg, qG * qg];
    return;
  }
  if (!cy && (cb.movement === 3 || /heartgreen/i.test(qa))) {
    ET();
    Ez.mode = "green-block";
    let qO = s.first("obj_spearblocker");
    if (!qO) {
      return;
    }
    let qt = Infinity;
    let qr = -1;
    for (let qh of s.list) {
      if (qh.destroyed || typeof qh.is != "function" || !qh.is("obj_blockbullet")) {
        continue;
      }
      let qR = Number(qh.truesite);
      let qZ = qh.is("obj_blockbullet2") && qR >= 0 && qR <= 3 ? qR : Number(qh.site);
      if (!(qZ >= 0) || !(qZ <= 3)) {
        continue;
      }
      let qu = (Number(qh.speedmod) || 1) * 8;
      let qi = (Math.abs(qh.x - qO.x) + Math.abs(qh.y - qO.y) - 30) / (qu || 8);
      if (qi < qt) {
        qt = qi;
        qr = qZ;
      }
    }
    if (qr === 0) {
      m.held.left = true;
    } else if (qr === 1) {
      m.held.right = true;
    } else if (qr === 2) {
      m.held.down = true;
    } else if (qr === 3) {
      m.held.up = true;
    }
    return;
  }
  let qC = cy ? null : s.first("obj_purpleheart");
  if (qC) {
    ET();
    Ez.mode = "purple-rails";
    let qQ = Math.max(1, qC.yamt || 3);
    let qI = qC.yspace || 40;
    let qm = qC.yoff || 0;
    let qp = qC.yzero || 0;
    let qA = SC => qp + (SC - 1) * qI + qm;
    let S1 = Math.max(1, Math.min(qQ, qC.yno || 1));
    let S2 = qC.x;
    let S3 = qC.y;
    let S4 = qC.xmid === undefined ? S2 : qC.xmid;
    let S5 = qC.xlen === undefined ? 100 : qC.xlen;
    let S6 = (SC, SE) => {
      if (SC.cls !== "obj_donutbullet" || Math.abs(SC.vy) < 0.5 || Math.abs(SC.vy) > 8 || Math.abs(SC.vx) < 0.05) {
        return SC.y;
      }
      let Sc = Math.max(0, (SE - SC.x) * Math.sign(SC.vx) / Math.abs(SC.vx));
      let Sq = SC.y + SC.vy * Sc;
      let SS = qA(1) - 10;
      let Sk = qA(qQ) + 10;
      if (Sk <= SS) {
        return Sq;
      }
      for (let SV = 0; SV < 8 && (Sq < SS || Sq > Sk); SV++) {
        if (Sq < SS) {
          Sq = SS * 2 - Sq;
        }
        if (Sq > Sk) {
          Sq = Sk * 2 - Sq;
        }
      }
      return Sq;
    };
    let S7 = (SC, SE) => {
      let Sc = qA(SC);
      let Sq = 999;
      for (let SS of cN || []) {
        if (Math.abs(S6(SS, SE) - Sc) > Math.max(qI / 2, (SS.hh || 8) + 10)) {
          continue;
        }
        let Sk = SE - SS.x;
        let SV = (SS.hw || 8) + 10;
        if (Math.abs(Sk) <= SV) {
          return 0;
        }
        if (Math.abs(SS.vx) < 0.05 || Sk * SS.vx <= 0) {
          continue;
        }
        let SF = (Math.abs(Sk) - SV) / Math.abs(SS.vx);
        if (SF < Sq) {
          Sq = SF;
        }
      }
      return Sq;
    };
    let S8 = s.first("obj_hideouscupcake");
    let S9 = S7(S1, S2);
    if (S8 && !qC.moving) {
      Ed("web", "climb", "the pet is rising");
      if (S1 > 1 && S7(S1 - 1, S2) > 6 || S1 > 1 && S9 < 10) {
        cf("up");
      }
    }
    if (S8 && S1 > 1 && S7(S1 - 1, S2) <= 6) {
      let SC = null;
      let SE = {
        "-1": true,
        1: true
      };
      for (let Sc = 4; Sc <= S5 * 2 && SC === null; Sc += 4) {
        for (let Sq of [-1, 1]) {
          if (!SE[Sq]) {
            continue;
          }
          let SS = S2 + Sq * Sc;
          if (SS < S4 - S5 || SS > S4 + S5) {
            SE[Sq] = false;
            continue;
          }
          if (S7(S1, SS) <= Sc / 4 + 1) {
            SE[Sq] = false;
            continue;
          }
          if (S7(S1 - 1, SS) > 6) {
            SC = SS;
            break;
          }
        }
      }
      if (SC !== null) {
        if (SC < S2) {
          m.held.left = true;
        } else {
          m.held.right = true;
        }
        Ed("web", SC < S2 ? "slide left to climb" : "slide right to climb", "the strand above is blocked here");
        return;
      }
    }
    if (!S8) {
      if (!qC.moving && S9 < 26) {
        let Sk = (SH, Sx) => {
          let SJ = qA(SH);
          let SU = [];
          for (let Sd of cN || []) {
            if (Math.abs(S6(Sd, Sx) - SJ) > Math.max(qI / 2, (Sd.hh || 8) + 10)) {
              continue;
            }
            let SM = (Sd.hw || 8) + 10;
            if (Math.abs(Sd.vx) < 0.05) {
              if (Math.abs(Sx - Sd.x) <= SM) {
                SU.push([0, 999]);
              }
              continue;
            }
            let Sl = (Sx - Sd.x) * Math.sign(Sd.vx);
            let Sf = (Sl + SM) / Math.abs(Sd.vx);
            if (!(Sf < 0)) {
              SU.push([Math.max(0, (Sl - SM) / Math.abs(Sd.vx)), Sf]);
            }
          }
          return SU;
        };
        let SV = (SH, Sx, SJ) => {
          let SU = 999;
          for (let [Sd, SM] of Sk(SH, Sx)) {
            if (SJ >= Sd - 1 && SJ <= SM + 1) {
              return -1;
            }
            if (Sd > SJ && Sd - SJ < SU) {
              SU = Sd - SJ;
            }
          }
          return SU;
        };
        let SF = S1;
        let So = S9;
        for (let SH = 1; SH <= qQ; SH++) {
          if (SH === S1) {
            continue;
          }
          let Sx = SH < S1 ? -1 : 1;
          let SJ = true;
          for (let Sd = S1 + Sx; Sd !== SH && SJ; Sd += Sx) {
            let SM = Math.abs(Sd - S1);
            for (let [Sl, Sf] of Sk(Sd, S2)) {
              if (SM * 3 + 1.5 >= Sl - 0.5 && SM * 3 - 1.5 <= Sf + 0.5) {
                SJ = false;
                break;
              }
            }
          }
          if (!SJ) {
            continue;
          }
          let SU = SV(SH, S2, Math.abs(SH - S1) * 3);
          if (SU > So + 4) {
            SF = SH;
            So = SU;
          }
        }
        if (SF < S1) {
          cf("up");
        } else if (SF > S1) {
          cf("down");
        }
      }
    }
    let Sz = 4;
    let Sa = 0;
    let Sw = -1000000000;
    for (let ST of [-Sz, 0, Sz]) {
      let SL = Math.max(S4 - S5, Math.min(S4 + S5, S2 + ST));
      if (ST !== 0 && SL === S2) {
        continue;
      }
      let SG = Math.min(S7(S1, SL), 60) * 10 - Math.abs(SL - S4) * 0.02 - (ST === 0 ? 0 : 0.5);
      if (SG > Sw) {
        Sw = SG;
        Sa = ST;
      }
    }
    if (Sa < 0) {
      m.held.left = true;
    } else if (Sa > 0) {
      m.held.right = true;
    }
    if (!EJ.branch || EJ.branch !== "web") {
      Ed("web", Sa < 0 ? "slide left" : Sa > 0 ? "slide right" : "hold the strand", "riding a web strand");
    }
    return;
  }
  let qE = /heartblue/i.test(qa) || T.movement >= 11 && T.movement <= 13 || Math.abs(cb.gravity || 0) > 0.001;
  if (!cy && qE) {
    Ez.mode = "blue-platform";
    let SW = Math.max(q8, 45);
    let SX = cj ? cj[3] : 480;
    let Sg = cb.jumpstage !== undefined ? cb.jumpstage === 1 : q7 + q5 >= SX - 3;
    let SY = 6;
    let SD = [];
    for (let SR of s.list) {
      if (SR.destroyed || !SR.is || !SR.is("obj_boneplat")) {
        continue;
      }
      let SZ = SR.len === undefined ? 50 : SR.len;
      SD.push({
        l: SR.x - SZ + 2,
        r: SR.x + SZ - 2,
        top: SR.y,
        land: SR.y - 16
      });
    }
    let SO = Sg && Math.abs(cb.vspeed || 0) < 0.001;
    let St = !Sg && (cb.vspeed || 0) <= -1;
    let Sr = null;
    let Sh = -Infinity;
    for (let Su of [-1, 0, 1]) {
      for (let Si of SO || St ? [0, 1] : [0]) {
        let SQ = q7;
        let SI = SO && Si ? -SY : cb.vspeed || 0;
        let Sm = q6;
        let Sp = SW;
        for (let Sb = 1; Sb <= SW; Sb++) {
          if (!Si && SI <= -1) {
            SI = -1;
          }
          SI += EX(SI);
          SQ += SI;
          Sm += Su * q9;
          if (SQ + q5 > SX) {
            SQ = SX - q5;
            SI = 0;
          }
          if (SI >= 0 && SD.length) {
            let Sv = SQ - SI - q5;
            for (let SP = 0; SP < SD.length; SP++) {
              let Sy = SD[SP];
              if (!(Sm < Sy.l - q4) && !(Sm > Sy.r + q4) && Sv <= Sy.top - 11 && SQ - q5 >= Sy.land - 0.5) {
                SQ = Sy.land + q5;
                SI = 0;
                break;
              }
            }
          }
          if (cj) {
            Sm = Math.max(cj[0] + q4, Math.min(cj[2] - q4, Sm));
          }
          let SB = false;
          for (let Sj = 0; Sj < cN.length; Sj++) {
            let SN = cN[Sj];
            if (SN.t0 !== undefined && Sb < SN.t0 || SN.ttl !== undefined && Sb > SN.ttl) {
              continue;
            }
            let SK = SN.path ? SN.path(Sb) : null;
            let k0 = SK ? SK[0] : SN.x + SN.vx * Sb + (SN.ax || 0) * 0.5 * Sb * Sb;
            let k1 = SK ? SK[1] : SN.y + SN.vy * Sb + (SN.ay || 0) * 0.5 * Sb * Sb;
            if (Math.abs(Sm - k0) < q4 + SN.hw && Math.abs(SQ - k1) < q5 + SN.hh) {
              SB = true;
              break;
            }
          }
          if (SB) {
            Sp = Sb - 1;
            break;
          }
        }
        let SA = Sp * 2;
        if (Sp >= SW && Su === 0 && !Si) {
          SA += 1;
        }
        if (SA > Sh) {
          Sh = SA;
          Sr = {
            mx: Su,
            jump: Si
          };
        }
      }
    }
    ET();
    m.held.b1 = false;
    m.pressed.b1 = false;
    Ez.plan = Sr;
    Ez.score = Sh;
    Ez.dir = Sr ? [Sr.mx, Sr.jump ? -1 : 0] : null;
    if (Sr) {
      let k2 = cb.movement;
      let k3 = k2 === 11 || k2 === 12 || k2 === 13;
      let k4 = k2 === 11 ? "left" : k2 === 12 ? "down" : k2 === 13 ? "right" : "up";
      if (k3) {
        if (k2 === 12) {
          if (Sr.mx < 0) {
            m.held.left = true;
          }
          if (Sr.mx > 0) {
            m.held.right = true;
          }
        } else {
          if (Sr.mx < 0) {
            m.held.up = true;
          }
          if (Sr.mx > 0) {
            m.held.down = true;
          }
        }
      } else {
        if (Sr.mx < 0) {
          m.held.left = true;
        }
        if (Sr.mx > 0) {
          m.held.right = true;
        }
      }
      if (Sr.jump) {
        m.held[k4] = true;
      }
      Ed("gravity", Sr.jump ? "jump" : Sr.mx < 0 ? "run left" : Sr.mx > 0 ? "run right" : "hold ground", Sr.jump ? "clearing it" : "on the floor");
    }
    return;
  }
  let qc = 0;
  let qq = -Infinity;
  for (let k5 = 0; k5 < Ea.length; k5++) {
    let k6 = Ea[k5][0];
    let k7 = Ea[k5][1];
    if (cy && k5 !== 0 && k5 % 2 === 0) {
      continue;
    }
    if (cy) {
      let kC = Ew.gsteps;
      let kE = Ep(cA, cv, cP, cB, q6 + k6 * q9 * kC, q7 + k7 * q9 * kC);
      if (k5 === Ec) {
        kE += Ew.gkeep;
      }
      if (k5 === 0) {
        kE += Ew.gstay;
      }
      if (kE > qq) {
        qq = kE;
        qc = k5;
      }
      continue;
    }
    if (k5 !== 0 && EF.has(k5)) {
      continue;
    }
    let k8 = k6 > 0 && EH.right || k6 < 0 && EH.left ? 0 : k6;
    let k9 = k7 > 0 && EH.down || k7 < 0 && EH.up ? 0 : k7;
    if (k5 !== 0 && Math.abs(k8) < 0.3 && Math.abs(k9) < 0.3) {
      continue;
    }
    if (cj && k5 !== 0) {
      let kc = Math.max(cj[0] + q4, Math.min(cj[2] - q4, q6 + k6 * q9));
      let kq = Math.max(cj[1] + q5, Math.min(cj[3] - q5, q7 + k7 * q9));
      if (Math.abs(kc - q6) < 0.01 && Math.abs(kq - q7) < 0.01) {
        continue;
      }
    }
    let kz = qz;
    let ka = Infinity;
    for (let kS = 1; kS <= qz; kS++) {
      let kk = q6 + k8 * q9 * kS;
      let kV = q7 + k9 * q9 * kS;
      if (cj) {
        kk = Math.max(cj[0] + q4, Math.min(cj[2] - q4, kk));
        kV = Math.max(cj[1] + q5, Math.min(cj[3] - q5, kV));
      }
      let kF = false;
      for (let ko = 0; ko < cN.length; ko++) {
        let kH = cN[ko];
        if (kH.t0 !== undefined && kS < kH.t0 || kH.ttl !== undefined && kS > kH.ttl || kH.blueOnly && k5 === 0) {
          continue;
        }
        let kx = kH.path ? kH.path(kS) : null;
        let kJ = kx ? kx[0] : kH.x + kH.vx * kS;
        let kU = kx ? kx[1] : kH.y + kH.vy * kS;
        let kd = Math.abs(kk - kJ) - (q4 + kH.hw);
        let kM = Math.abs(kV - kU) - (q5 + kH.hh);
        let kl = Math.max(kd, kM);
        if (kl < ka) {
          ka = kl;
        }
        if (kd < 0 && kM < 0) {
          kF = true;
          break;
        }
      }
      if (kF) {
        kz = kS - 1;
        break;
      }
    }
    if (!Number.isFinite(ka)) {
      ka = 200;
    }
    let kw = kz * 2 + Math.max(-40, Math.min(200, ka)) * Ew.room;
    if (kz >= qz) {
      if (k5 === 0) {
        kw += Ew.stay;
      }
      if (k5 === Ec && k5 !== 0) {
        kw += Ew.keep;
      }
      let kf = q6 + k6 * q9 * qz;
      let kT = q7 + k7 * q9 * qz;
      let kL = cj ? (cj[0] + cj[2]) / 2 : 320;
      let kG = cj ? (cj[1] + cj[3]) / 2 : 240;
      let kW = cj ? Math.max(1, (cj[2] - cj[0]) / 2) : 160;
      let kX = cj ? Math.max(1, (cj[3] - cj[1]) / 2) : 120;
      kw += (1 - Math.min(1, Math.hypot((kf - kL) / kW, (kT - kG) / kX))) * Ew.centre;
    }
    if (kw > qq) {
      qq = kw;
      qc = k5;
    }
  }
  if (Eq > 0 && !cy) {
    let kg = Ea[Ec];
    let kY = qz;
    for (let kD = 1; kD <= qz; kD++) {
      let kO = q6 + kg[0] * q9 * kD;
      let kt = q7 + kg[1] * q9 * kD;
      if (cj) {
        kO = Math.max(cj[0] + q4, Math.min(cj[2] - q4, kO));
        kt = Math.max(cj[1] + q5, Math.min(cj[3] - q5, kt));
      }
      let kr = false;
      for (let kh = 0; kh < cN.length; kh++) {
        let kR = cN[kh];
        if (kR.t0 !== undefined && kD < kR.t0 || kR.ttl !== undefined && kD > kR.ttl || kR.blueOnly && Ec === 0) {
          continue;
        }
        let kZ = kR.path ? kR.path(kD) : null;
        let ku = kZ ? kZ[0] : kR.x + kR.vx * kD;
        let ki = kZ ? kZ[1] : kR.y + kR.vy * kD;
        if (Math.abs(kO - ku) < q4 + kR.hw && Math.abs(kt - ki) < q5 + kR.hh) {
          kr = true;
          break;
        }
      }
      if (kr) {
        kY = kD - 1;
        break;
      }
    }
    if (kY >= qz) {
      qc = Ec;
      Eq--;
    } else {
      Eq = 0;
    }
  }
  if (qc !== Ec) {
    Eq = Ew.commit;
  }
  Ec = qc;
  Ez.best = qc;
  Ez.dir = Ea[qc];
  Ez.score = qq;
  Ez.commit = Eq;
  Ez.blocked = [...EF.keys()];
  ET();
  let [qS, qk] = Ea[qc];
  Ed("dodge", qc === 0 ? "hold position" : Math.abs(qk) < 0.3 ? qS < 0 ? "left" : "right" : Math.abs(qS) < 0.3 ? qk < 0 ? "up" : "down" : (qk < 0 ? "up" : "down") + "-" + (qS < 0 ? "left" : "right"), qc === 0 ? "this square is clear" : "threading the gap");
  if (qS < -0.3) {
    m.held.left = true;
  }
  if (qS > 0.3) {
    m.held.right = true;
  }
  if (qk < -0.3) {
    m.held.up = true;
  }
  if (qk > 0.3) {
    m.held.down = true;
  }
  Ex.left = !!m.held.left;
  Ex.right = !!m.held.right;
  Ex.up = !!m.held.up;
  Ex.down = !!m.held.down;
}
v(ci, "autoplayStep");
function cQ() {
  let z = a => Number.isFinite(a) ? Math.round(a * 100) / 100 : String(a);
  return "ap calls " + EV + " dir " + Ec + " commit " + Eq + " obs " + z(ES) + " last " + (Ek ? z(Ek[0]) + "," + z(Ek[1]) : "-") + " bk " + JSON.stringify(EH) + " hl " + JSON.stringify(Ex) + " bd " + EF.size + " ui " + EA + " menu " + (Ej ? 1 : 0) + " syn " + cS.b1 + (cS.zHeld || cS.xHeld || cS.edges ? " z " + (cS.zHeld ? 1 : 0) + (cS.xHeld ? 1 : 0) + cS.edges : "") + " fire " + cL + " box " + cX + " " + z7() + " " + a1() + " mercy " + EN.on + "/" + EN.heals;
}
v(cQ, "autoplayStateDigest");
function cI() {
  return {
    lastDir: Ec,
    commitLeft: Eq,
    obsSpeed: ES,
    lastPos: Ek ? Ek.slice() : null,
    stepCalls: EV,
    blockedDir: [...EF],
    blockedKey: {
      ...EH
    },
    heldLast: {
      ...Ex
    },
    uiTick: EA,
    menuPlan: Ej ? {
      frames: Ej.frames.slice(),
      i: Ej.i
    } : null,
    syn: {
      ...cS
    },
    fireClock: cL,
    boxClock: cX,
    lastPunch: cY,
    boxAttack: {
      last: cO.last,
      windup: {
        ...cO.windup
      }
    },
    ch4: z4(),
    ch5: zN(),
    ut: wk(),
    mercy: c9(EN)
  };
}
v(cI, "saveAutoplayState");
function cm(z) {
  if (z) {
    Ec = z.lastDir;
    Eq = z.commitLeft;
    ES = z.obsSpeed;
    Ek = z.lastPos ? z.lastPos.slice() : null;
    EV = z.stepCalls;
    EF.clear();
    for (let [a, cA] of z.blockedDir) {
      EF.set(a, cA);
    }
    Object.assign(EH, z.blockedKey);
    Object.assign(Ex, z.heldLast);
    EA = z.uiTick;
    Ej = z.menuPlan ? {
      frames: z.menuPlan.frames.slice(),
      i: z.menuPlan.i
    } : null;
    cS.b1 = z.syn.b1;
    cS.pulse = z.syn.pulse;
    cS.zHeld = !!z.syn.zHeld;
    cS.zPrev = !!z.syn.zPrev;
    cS.xHeld = !!z.syn.xHeld;
    cS.xPrev = !!z.syn.xPrev;
    cS.edges = z.syn.edges || "";
    cL = z.fireClock;
    cX = z.boxClock;
    cY = z.lastPunch;
    cO.last = z.boxAttack.last;
    cO.windup = {
      ...z.boxAttack.windup
    };
    if (z.ch4) {
      z5(z.ch4);
    } else {
      z6();
    }
    if (z.ch5) {
      zK(z.ch5);
    } else {
      a0();
    }
    wV(z.ut);
    ca(z.mercy);
  }
}
v(cm, "loadAutoplayState");
function cp() {
  Ec = 0;
  Eq = 0;
  ES = 3;
  Ek = null;
  EV = 0;
  EF.clear();
  for (let z of ["left", "right", "up", "down"]) {
    EH[z] = 0;
    Ex[z] = false;
  }
  EA = 0;
  Ej = null;
  cS.b1 = false;
  cS.pulse = null;
  cS.zHeld = false;
  cS.zPrev = false;
  cS.xHeld = false;
  cS.xPrev = false;
  cS.edges = "";
  cH = "";
  cL = 0;
  cX = 0;
  cY = "b2";
  cO.last = -1;
  cO.windup = {};
  z6();
  a0();
  wF();
  ca(null);
}
v(cp, "resetAutoplayState");
export { j as a, zw as b, zd as c, zM as d, zf as e, zT as f, a5 as g, a6 as h, a7 as i, w2 as j, ww as k, E1 as l, E2 as m, E4 as n, E8 as o, E9 as p, Ez as q, Ew as r, EC as s, EE as t, EU as u, EM as v, Ef as w, EG as x, Er as y, EZ as z, Ey as A, cJ as B, cU as C, cM as D, cD as E, ci as F, cQ as G, cI as H, cm as I, cp as J };
