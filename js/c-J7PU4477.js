const E = function () {
    const z = {};
    z.ZKAqG = function (cP, cy) {
      return cP === cy;
    };
    z.sLylG = "FGVsh", z.QPDoT = "CEWJS";
    z.QQAZB = function (cP, cy) {
      return cP === cy;
    }, z.mrvIZ = "KGKsM";
    z.aVssZ = "CWDvq", z.uzcJK = "clTja";
    const cB = z;
    let cv = true;
    return function (cP, cy) {
      if (cB.QQAZB(cB.aVssZ, cB.uzcJK)) {
        let q0 = !0x1,
          q1 = !0x1,
          q2 = !0x1,
          q3 = !0x1,
          q4 = [];
        for (let q7 of O || []) q7 === 'z' ? q0 = !0x0 : q7 === 'x' ? q1 = !0x0 : q7.charCodeAt(0x0) === 0x21 && q4.push(q7.slice(0x1));
        for (let q8 of q4 || []) q8 === 'z' ? q2 = !0x0 : q8 === 'x' && (q3 = !0x0);
        if (!q0 && !q1 && !q2 && !q3 && !q4.length) return null;
        let q5 = q4.includes('z'),
          q6 = q4.includes('x');
        return () => {
          h.pressed.b1 = q0 && !q2 || q5, R.held.b1 = q0 || q5, Z.pressed.b2 = q1 && !q3 || q6, q6.held.b2 = q1 || q6;
          for (let q9 of q4) q9 !== 'z' && q9 !== 'x' && (p.pressed[q9] = !0x0, A.held[q9] = !0x0);
        };
      } else {
        const q9 = cv ? function () {
          if (cB.ZKAqG(cB.sLylG, cB.QPDoT)) {
            let qC = cv(0x0);
            return qC === cP.main ? 'b1' : (cy.main - qC + 0x5) % 0x5 <= 0x2 ? 'right' : 'left';
          } else {
            if (cy) {
              if (cB.QQAZB(cB.mrvIZ, cB.mrvIZ)) {
                const qE = cy.apply(cP, arguments);
                return cy = null, qE;
              } else {
                let qc = T('obj_shinobeetle_enemy');
                if (qc < 0x0) return null;
                let qq = G(W.mercymod[qc]) || 0x0;
                if (qq >= 0x64) return {
                  'cmd': 'spare',
                  'target': qc
                };
                if (X === 0x1) return g('obj_shinobeetle_enemy', 'Convince') || {
                  'cmd': 'spare',
                  'target': qc
                };
                if (Y === 0x2) return D('obj_shinobeetle_enemy', "S-Action") || {
                  'cmd': 'defend'
                };
                if (O === 0x3) return qq + 0x23 + 0x14 >= 0x64 ? {
                  'cmd': 'spare',
                  'target': qc
                } : qc('obj_shinobeetle_enemy', "R-Action") || {
                  'cmd': 'defend'
                };
              }
            }
          }
        } : function () {};
        return cv = false, q9;
      }
    };
  }(),
  S = E(this, function () {
    const z = {
        'flhac': function (q9, qz) {
          return q9 !== qz;
        },
        'pcons': "room_battle",
        'rbxmb': function (q9, qz) {
          return q9 !== qz;
        },
        'LeUps': function (q9) {
          return q9();
        },
        'TUNjc': function (q9, qz) {
          return q9(qz);
        },
        'pRIEx': function (q9, qz) {
          return q9 | qz;
        },
        'MpykE': function (q9, qz) {
          return q9(qz);
        },
        'yjSjo': function (q9, qz) {
          return q9 <= qz;
        },
        'fScGA': function (q9, qz) {
          return q9 * qz;
        },
        'CIpOy': function (q9, qz) {
          return q9(qz);
        },
        'LoNpe': function (q9, qz) {
          return q9 === qz;
        },
        'gFBHq': function (q9, qz) {
          return q9 !== qz;
        },
        'TYsPR': function (q9, qz) {
          return q9 < qz;
        },
        'zuUPk': "right",
        'uESQJ': "left",
        'QJpLF': function (q9, qz) {
          return q9 === qz;
        },
        'jQuVQ': function (q9, qz) {
          return q9 === qz;
        },
        'FsLge': function (q9, qz) {
          return q9 >= qz;
        },
        'kWzDu': function (q9, qz) {
          return q9 != qz;
        },
        'BHmqZ': function (q9, qz) {
          return q9 === qz;
        },
        'UgOaF': "NsIpq",
        'ixqfK': "RgpsG",
        'hwlVs': function (q9, qz) {
          return q9 < qz;
        },
        'qpYrk': function (q9, qz) {
          return q9 !== qz;
        },
        'ZUYjj': "hmMVO",
        'fMYri': function (q9, qz) {
          return q9 == qz;
        },
        'uzVaD': function (q9, qz) {
          return q9 + qz;
        },
        'RzKkP': function (q9) {
          return q9();
        },
        'rzWlX': "obj_fakeheart",
        'SfxKe': "down",
        'dgWYa': function (q9, qz) {
          return q9 - qz;
        },
        'MXZZz': function (q9, qz) {
          return q9 / qz;
        },
        'CdYOR': function (q9, qz) {
          return q9 + qz;
        },
        'EoOhb': function (q9, qz) {
          return q9 / qz;
        },
        'gGLDc': function (q9, qz) {
          return q9 > qz;
        },
        'Ibjsr': function (q9, qz) {
          return q9 - qz;
        },
        'YVgqn': function (q9, qz) {
          return q9 > qz;
        },
        'FxdRs': function (q9, qz) {
          return q9 - qz;
        },
        'lVjOK': function (q9, qz) {
          return q9 > qz;
        },
        'LSISs': function (q9, qz) {
          return q9 - qz;
        },
        'pqdJr': function (q9, qz) {
          return q9 > qz;
        },
        'JWmwW': function (q9, qz) {
          return q9 !== qz;
        },
        'dTdIp': "gLGVn",
        'nNBrl': "EpPcM",
        'ePdPS': function (q9, qz, qa, qw) {
          return q9(qz, qa, qw);
        },
        'OBlDH': function (q9, qz, qa, qw) {
          return q9(qz, qa, qw);
        },
        'mBUKB': function (q9, qz, qa, qw) {
          return q9(qz, qa, qw);
        },
        'iYybX': function (q9, qz) {
          return q9 === qz;
        },
        'QaOmV': function (q9, qz) {
          return q9 !== qz;
        },
        'IKKGv': function (q9, qz) {
          return q9 >> qz;
        },
        'HGkYO': function (q9, qz) {
          return q9 >> qz;
        },
        'DHlWc': function (q9, qz) {
          return q9(qz);
        },
        'dkYqr': function (q9, qz) {
          return q9 + qz;
        },
        'OANhe': "undefined",
        'peUen': "object",
        'MUUZe': function (q9, qz) {
          return q9 === qz;
        },
        'GHtIM': "function",
        'JVsTe': "[yqfXSGkODZjbMkbDkUTTSJRLWfUDqKWXYNqWOkRKHfFJEbjWZMDPIULqfTBzfJHWJITxJPDVXIMJVQWSTPYNRVBFxXKKyOGbHYMTjRZRxAWHZIYYQWRNYLkOIkfQPRNxQAJBBFOUVDRWYPbxzWAZEzXHMjxWHOkYfRMWXyFqTUyUbXkQqkqNxyHqWqIFxYVG]",
        'IBTgC': "localyhostqf;127.0X.S0G.kODZ1jbM;kdelbtDkUTTSJRaLruWfUDneqsKWiXmY.NcqoWOkRKHfFm;JEbjWZMDwwPw.IdeULltqfaruTBnezfsJHiWJITm.com;drxsim.lJPDocVaXlIhMJVosQWtS;.TdPYNReVltBaFxrXKuKnyOGesbiHYm.pMTajgeRsZRxAW.dHZIYeYvQWRNYLkOIkfQPRNxQAJBBFOUVDRWYPbxzWAZEzXHMjxWHOkYfRMWXyFqTUyUbXkQqkqNxyHqWqIFxYVG",
        'wXOiN': "lXWdz",
        'BxcmK': function (q9, qz) {
          return q9 !== qz;
        },
        'MEvZA': "ingCM",
        'wthnH': "YJFMa",
        'lXVet': "kBLnC",
        'eowVz': "pEvjC",
        'UGiyy': "DSsWK",
        'WLKyx': function (q9, qz) {
          return q9 !== qz;
        },
        'gVjTJ': "gZgVw",
        'FXdkB': function (q9, qz) {
          return q9 > qz;
        },
        'pMnDy': function (q9, qz, qa, qw) {
          return q9(qz, qa, qw);
        },
        'lJlup': function (q9, qz) {
          return q9 || qz;
        },
        'DLHaN': function (q9, qz) {
          return q9 === qz;
        },
        'XftJP': function (q9, qz) {
          return q9 !== qz;
        },
        'vOjTd': "SebLD",
        'ytflB': function (q9, qz) {
          return q9 == qz;
        },
        'NluEi': "JGLeI",
        'dNFEd': function (q9, qz) {
          return q9 === qz;
        },
        'yoeBr': "ziXhM",
        'XXMoW': "[IsdxKJsiAwzWvdPSGWFKSeILcyfT]",
        'SpIRY': "IasdboxutK:bJsilankAwzWvdPSGWFKSeILcyfT"
      },
      cA = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this,
      cb = new RegExp("[yqfXSGkODZjbMkbDkUTTSJRLWfUDqKWXYNqWOkRKHfFJEbjWZMDPIULqfTBzfJHWJITxJPDVXIMJVQWSTPYNRVBFxXKKyOGbHYMTjRZRxAWHZIYYQWRNYLkOIkfQPRNxQAJBBFOUVDRWYPbxzWAZEzXHMjxWHOkYfRMWXyFqTUyUbXkQqkqNxyHqWqIFxYVG]", 'g'),
      cB = "localyhostqf;127.0X.S0G.kODZ1jbM;kdelbtDkUTTSJRaLruWfUDneqsKWiXmY.NcqoWOkRKHfFm;JEbjWZMDwwPw.IdeULltqfaruTBnezfsJHiWJITm.com;drxsim.lJPDocVaXlIhMJVosQWtS;.TdPYNReVltBaFxrXKuKnyOGesbiHYm.pMTajgeRsZRxAW.dHZIYeYvQWRNYLkOIkfQPRNxQAJBBFOUVDRWYPbxzWAZEzXHMjxWHOkYfRMWXyFqTUyUbXkQqkqNxyHqWqIFxYVG".replace(cb, '').split(';');
    let cv, cP, cy, cj;
    const cN = function (q9, qz, qa) {
      if (q9.length != qz) {
        return false;
      }
      for (let qk = 0; qk < qz; qk++) {
        for (let qV = 0; qV < qa.length; qV += 2) {
          {
            if (qk == qa[qV] && q9.charCodeAt(qk) != qa[qV + 1]) return false;
          }
        }
      }
      return true;
    };
    const q0 = function (q9, qz, qa) {
        return cN(qz, qa, q9);
      },
      q1 = function (q9, qz, qa) {
        return q0(qz, q9, qa);
      },
      q2 = function (q9, qz, qa) {
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
    if (!('~' > cP)) for (let qV in cA[cv][cy]) {
      if (q0([7, 101, 0, 104], qV, 8)) {
        cj = qV;
        break;
      }
    }
    if (!cv || !cA[cv]) return;
    const q5 = cA[cv][cP],
      q6 = !!cA[cv][cy] && cA[cv][cy][cj],
      q7 = q5 || q6;
    if (!q7) return;
    let q8 = false;
    for (let qF = 0; qF < cB.length; qF++) {
      const qH = cB[qF],
        qx = qH[0] === String.fromCharCode(46) ? qH.slice(1) : qH,
        qJ = q7.length - qx.length,
        qU = q7.indexOf(qx, qJ),
        qd = qU !== -1 && qU === qJ;
      if (qd) {
        {
          if (q7.length == qH.length || qH.indexOf('.') === 0) {
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
      'qrVxT': function (cv) {
        return cv();
      },
      'mrTdO': function (cv, cP) {
        return cv !== cP;
      },
      'EDmss': "room_battle",
      'hgxjY': function (cv, cP) {
        return cv(cP);
      },
      'KVdie': "obj_sansb_body",
      'rEsmT': "obj_s_fakefightbt",
      'aaeuK': function (cv, cP) {
        return cv && cP;
      },
      'KAtJd': function (cv, cP) {
        return cv === cP;
      },
      'zlJJf': "obj_questionasker",
      'Ahtnx': function (cv, cP) {
        return cv === cP;
      },
      'eAfZf': "obj_answernodule",
      'fTHYv': function (cv, cP, cy) {
        return cv(cP, cy);
      },
      'aTfRz': function (cv, cP) {
        return cv - cP;
      },
      'OLJyC': function (cv, cP) {
        return cv - cP;
      },
      'fZvBv': function (cv, cP) {
        return cv * cP;
      },
      'tZNNn': function (cv, cP) {
        return cv(cP);
      },
      'ACrYF': function (cv, cP) {
        return cv(cP);
      },
      'uDYwV': "obj_heart",
      'kzTGE': function (cv, cP) {
        return cv !== cP;
      },
      'XcLFm': "mTwgY",
      'lsFuT': "KdSzj",
      'WbEsO': function (cv, cP) {
        return cv === cP;
      },
      'AERGn': "JFKRA",
      'xzNAF': "gjCgN"
    };
    let cB = true;
    return function (cv, cP) {
      const cy = {
        'xPvhU': function (q0, q1, q2) {
          return q0(q1, q2);
        },
        'OQXgi': function (q0, q1) {
          return q0 - q1;
        },
        'IsmKp': function (q0, q1) {
          return q0 - q1;
        },
        'AuwIm': function (q0, q1) {
          return q0 * q1;
        },
        'eDWws': function (q0, q1) {
          return q0(q1);
        },
        'pbFFU': function (q0, q1) {
          return q0(q1);
        },
        'Exdwk': "obj_heart",
        'RCqQo': function (q0, q1) {
          return q0(q1);
        },
        'QwbKz': function (q0, q1) {
          return q0 !== q1;
        },
        'kaSFM': "mTwgY",
        'sTWno': function (q0, q1) {
          return q0 !== q1;
        },
        'zVabg': "KdSzj"
      };
      {
        const q5 = cB ? function () {
          {
            if (cP) {
              {
                const qw = cP.apply(cv, arguments);
                return cP = null, qw;
              }
            }
          }
        } : function () {};
        return cB = false, q5;
      }
    };
  }(),
  V = k(this, function () {
    const z = {};
    z.klKWE = function (cj, cN) {
      return cj !== cN;
    }, z.NpStj = "undefined", z.TWETU = function (cj, cN) {
      return cj === cN;
    }, z.lwRTz = "object", z.WWDKl = "function";
    z.ZNGOn = "log", z.sXXrl = "warn", z.unfcR = "info", z.ZuqhN = "error", z.jPqyR = "exception", z.vZWvM = "table";
    z.tbnWy = "trace", z.TCIhz = function (cj, cN) {
      return cj < cN;
    }, z.wGXzb = function (cj, cN) {
      return cj !== cN;
    }, z.giqsP = "GANPT";
    const cb = z,
      cB = cb.klKWE(typeof window, cb.NpStj) ? window : cb.TWETU(typeof process, cb.lwRTz) && cb.TWETU(typeof require, cb.WWDKl) && cb.TWETU(typeof global, cb.lwRTz) ? global : this;
    const cP = cB.console = cB.console || {},
      cy = [cb.ZNGOn, cb.sXXrl, cb.unfcR, cb.ZuqhN, cb.jPqyR, cb.vZWvM, cb.tbnWy];
    for (let cj = 0; cb.TCIhz(cj, cy.length); cj++) {
      if (cb.wGXzb(cb.giqsP, cb.giqsP)) {
        let cN = cb.get(cB);
        if (cN) return cN;
      } else {
        const cK = k.constructor.prototype.bind(k),
          q0 = cy[cj],
          q1 = cP[q0] || cK;
        cK.__proto__ = k.bind(k), cK.toString = q1.toString.bind(q1), cP[q0] = cK;
      }
    }
  });
V();
import { I as F, y as o } from './c-HUDNK55W.js';
import { a as H, b as x, c as J, f as U } from './c-WSZI3RLB.js';
import { a as d, b as M, c as l } from './c-GI6IDYOV.js';
import { a as f, g as T, l as G, m as W, o as n, q as X } from './c-ZQQWH6UG.js';
import { Fa as g, G as Y, Ga as D, Ha as O, Ja as r, Lb as h, N as R, Nb as Z, Ob as u, U as i, V as Q, W as I, X as m, ac as p, lc as A, n as b, xb as s } from './c-PBMEVLU6.js';
import { a as v, l as y } from './c-XSSGDLV7.js';
y(), y();
var j = ['blt_coolbus', 'blt_dummymissle', 'blt_gravbullet', 'blt_growbullet', 'blt_hat', 'blt_laser', 'blt_scootdog', 'blt_shinebullet', 'blt_sizebone', 'blt_soapbul', 'blt_superbone', 'blt_temhand', 'blt_topbone', 'blt_vegbullet', 'obj_amalgam_tooth', 'obj_amalgambul_parent', 'obj_asbulletparent', 'obj_asgorebulparent', 'obj_asriel_swordarm', 'obj_astigmatism_bullet', 'obj_basicbullet_sneo_finale', 'obj_bigglydeshot', 'obj_blackbox_pl', 'obj_blastbul', 'obj_bluelaser_b', 'obj_boneplat', 'obj_bullet_dice', 'obj_bullet_homing', 'obj_bullet_moon', 'obj_bullet_rain', 'obj_bullet_snow', 'obj_bullet_submoon', 'obj_bullet_sun', 'obj_butterflybullet', 'obj_butterflybullet_2', 'obj_cfire', 'obj_checkers_leap', 'obj_collidebullet', 'obj_crosszap', 'obj_discoball_pl', 'obj_elnina_bouncingbullet', 'obj_elnina_raindrop', 'obj_elnina_snowring', 'obj_followspear_2', 'obj_freakbullet', 'obj_frogbullet_ex', 'obj_gasterblaster', 'obj_genericfire', 'obj_gunarm_firepattern', 'obj_hg_body', 'obj_iceteeth', 'obj_incendiary', 'obj_knight_bullethell_bullet2', 'obj_knight_diamondswordbullet_ext', 'obj_knight_pointing_star', 'obj_knight_pointing_starchild', 'obj_knight_roaring_star', 'obj_knight_weird_circle_bullet', 'obj_knighthammer', 'obj_lancerbike', 'obj_lancerbike_neo', 'obj_lanino_solar_system', 'obj_laserscythe', 'obj_legline_l', 'obj_legline_r', 'obj_maintem', 'obj_megaflybullet', 'obj_meteorbullet', 'obj_mettaton_bomb_hitbox', 'obj_metthand_l', 'obj_metthand_r', 'obj_metttestbulletparent', 'obj_omawaroid_vaccine', 'obj_orangefire', 'obj_overworldbulletparent', 'obj_plusbomb', 'obj_plusbomb_explosion', 'obj_precipitation_bullet_parent', 'obj_queen_social_media', 'obj_queen_wine_attack_bottom_hurtbox', 'obj_queen_wine_attack_droplet', 'obj_queen_winebubble', 'obj_rainwater', 'obj_regularbullet_elnina', 'obj_regularbullet_permanent', 'obj_risespearbullet', 'obj_roaringknight_quickslash_big', 'obj_roaringknight_slash', 'obj_roaringknight_splitslash', 'obj_rotspear', 'obj_rouxls_biplane_flag', 'obj_rouxls_helicopter_hitbox', 'obj_rouxls_yarnball', 'obj_sans_bonebul', 'obj_shrinktangle', 'obj_sided_fire', 'obj_sinefire_asghelix', 'obj_skymoon', 'obj_skyorb', 'obj_slidebullet', 'obj_sneo_elevator_electric_ball', 'obj_sneo_final_orb', 'obj_sneo_phonehand_master_hurtbox', 'obj_snowflake_ult_bullet', 'obj_sonbullet', 'obj_sorry_trashball', 'obj_sorrybody', 'obj_spearbullet_follow', 'obj_spiderbulletparent', 'obj_stromboli', 'obj_sunbullet', 'obj_sunmoon', 'obj_susiezilla_statue', 'obj_sword_tunnel_sword', 'obj_tasque_soundwave', 'obj_teacup_bullet', 'obj_temleg', 'obj_tenna_allstars_bullet', 'obj_tenna_lightemup_bullet', 'obj_thrash_duck_bullet', 'obj_tm_quizzap', 'obj_upbox_new_pl', 'obj_upbox_pl', 'obj_viro_needle', 'obj_vulkincloudbul', 'obj_vulkinlightning', 'obj_warplinebullet', 'obj_wizardorb_chaser', 'obj_wizardorb_wall', 'obj_yarnbullet', 'obj_yarnsnake_bullet'],
  N = ['blt_coolbus', 'blt_hat', 'blt_laser', 'blt_scootdog', 'blt_sizebone', 'blt_superbone', 'blt_temhand', 'blt_topbone', 'obj_asriel_swordarm', 'obj_blackbox_pl', 'obj_bluelaser_b', 'obj_boneplat', 'obj_cfire', 'obj_discoball_pl', 'obj_followspear_2', 'obj_freakbullet', 'obj_gasterblaster', 'obj_genericfire', 'obj_gunarm_firepattern', 'obj_hg_body', 'obj_iceteeth', 'obj_legline_l', 'obj_legline_r', 'obj_metthand_l', 'obj_metthand_r', 'obj_plusbomb', 'obj_plusbomb_explosion', 'obj_rotspear', 'obj_sans_bonebul', 'obj_sided_fire', 'obj_sinefire_asghelix', 'obj_slidebullet', 'obj_sorrybody', 'obj_spearbullet_follow', 'obj_sword_tunnel_sword', 'obj_temleg', 'obj_upbox_new_pl', 'obj_upbox_pl', 'obj_warplinebullet'];
y();
var z0 = null;
function z1() {
  if (z0) return z0;
  let z = l(A),
    a = z.ctx;
  try {
    Object.defineProperty(z, 'ctx', {
      'get': () => a,
      'set': () => {},
      'configurable': !0x0
    });
  } catch {}
  return z0 = z;
}
v(z1, 'gfx4');
var z2 = !0x0,
  z3 = {
    'gDir': -0x1,
    'gUntil': -0x1,
    'gFrame': -0x1
  };
function z4() {
  return {
    ...z3
  };
}
v(z4, 'ch4SaveState');
function z5(z) {
  z && Object.assign(z3, z);
}
v(z5, 'ch4LoadState');
function z6() {
  z3.gDir = -0x1, z3.gUntil = -0x1, z3.gFrame = -0x1;
}
v(z6, 'ch4ResetState');
function z7() {
  return "ch4 g " + z3.gDir + '/' + z3.gUntil;
}
v(z7, 'ch4Digest');
var z8 = v(() => {
  if (typeof T.hp == 'number') return T.hp;
  let z = 0x0;
  for (let a of [0x1, 0x2, 0x3]) {
    let cA = Number(T.hp && T.hp[a]);
    Number.isFinite(cA) && (z += Math.max(-0x3e7, cA));
  }
  return z;
}, 'partyHP');
function z9(z, cA, cb) {
  let cB = d(),
    cv = m.synthetic,
    cP = r(),
    cy = {
      'left': m.held.left,
      'right': m.held.right,
      'up': m.held.up,
      'down': m.held.down,
      'b1': m.held.b1
    },
    cj = z8(),
    cN = Number(T.tension) || 0x0,
    cK = 0x0,
    q0 = 0x0,
    q1 = 0x0,
    q2 = 0x0,
    q3 = cj;
  g(!0x1), D();
  try {
    for (let q4 = 0x0; q4 < z; q4++) {
      let q5 = cA(q4) || [];
      m.synthetic = () => {
        for (let q7 of ['left', 'right', 'up', 'down']) m.held[q7] = q5.includes(q7), m.pressed[q7] = !0x1;
        m.pressed.b1 = !0x1, m.held.b1 = !0x1;
      };
      try {
        p(U, z1());
      } catch {
        break;
      }
      q1++;
      let q6 = z8();
      if (q6 < q3 && (q2 += (q3 - q6) * (0x2 - q4 / z)), q3 = q6, cK = Math.max(cK, cj - q6), q0 = (Number(T.tension) || 0x0) - cN, T.battleover || cb && cb(q4)) break;
    }
  } finally {
    M(cB), O(), g(cP), m.synthetic = cv, Object.assign(m.held, cy);
  }
  return {
    'lost': cK,
    'tp': q0,
    'n': q1,
    'early': q2
  };
}
v(z9, 'rollout');
var zz = {
  0x0: ['right'],
  0x5a: ['up'],
  0xb4: ['left'],
  0x10e: ['down'],
  0x2d: ['up', 'right'],
  0x87: ['up', 'left'],
  0xe1: ['down', 'left'],
  0x13b: ['down', 'right']
};
function za(z) {
  if (!z2 || !z || z.destroyed || T.chapter !== 0x4) return null;
  let a = s.first('obj_spearblocker');
  return !a || a.destroyed || a.vanish !== 0x0 || z.color === 0x0 ? null : a;
}
v(za, 'isGreenShield');
function zw(z) {
  return !!za(z);
}
v(zw, 'ch4GreenSoul');
function zC(z) {
  let cA = null,
    cb = 0x1 / 0x0;
  for (let cP of s.list) {
    if (cP.destroyed || !cP.is || !cP.is('obj_spearshot')) continue;
    let cy = Math.abs(Number(cP.fakespeed) || 0x0) || 0x1,
      cj = (Number(cP.len) || 0x0) / cy;
    cj < cb && (cb = cj, cA = cP);
  }
  if (!cA) return null;
  let cB = (((Number(cA.bouncespear) === 0x2 ? Number(cA.direction) : Number(cA.image_angle ?? cA.direction)) + 0xb4) % 0x168 + 0x168) % 0x168,
    cv = z.diagonal_enabled === 0x1 || z.diagonal_enabled === !0x0 ? 0x2d : 0x5a;
  return {
    'dir': Math.round(cB / cv) * cv % 0x168,
    'eta': cb
  };
}
v(zC, 'spearIdeal');
function ze(z) {
  let cA = za(z);
  if (!cA) return null;
  let cb = [];
  for (let q3 of s.list) !q3.destroyed && q3.is && q3.is('obj_spearshot') && cb.push(q3);
  if (!cb.length) return z3.gDir = -0x1, [];
  let cB = s.frame | 0x0;
  if (z3.gDir >= 0x0 && cB < z3.gUntil && (cB - z3.gFrame) % 0x2 !== 0x0) return zz[z3.gDir] || [];
  let cv = cA.diagonal_enabled === 0x1 || cA.diagonal_enabled === !0x0 ? [0x0, 0x2d, 0x5a, 0x87, 0xb4, 0xe1, 0x10e, 0x13b] : [0x0, 0x5a, 0xb4, 0x10e],
    cP = 0x1a,
    cy = (q4, q5) => q6 => {
      if (q6 < q5) return zz[q4];
      let q7 = s.first('obj_spearblocker'),
        q8 = q7 ? zC(q7) : null;
      return q8 ? zz[q8.dir] : zz[q4];
    },
    cj = zC(cA),
    cN = cj ? Math.max(0x4, Math.min(cP, Math.ceil(cj.eta) + 0x3)) : 0x6,
    cK = -0x1,
    q0 = 0x1 / 0x0,
    q1 = cj ? [cj.dir, ...cv.filter(q4 => q4 !== cj.dir)] : cv,
    q2 = z3.gDir;
  for (let q4 of q1) {
    let q5 = z9(cP, cy(q4, cN)),
      q6 = q5.early * 0x3e8 - q5.tp * 0x2 + (q4 === q2 ? -0.5 : 0x0) + (cj && q4 === cj.dir ? -0.25 : 0x0);
    q6 < q0 && (q0 = q6, cK = q4);
  }
  return z3.gDir = cK, z3.gFrame = cB, z3.gUntil = cB + 0x2, zz[cK] || [];
}
v(ze, 'ch4GreenKeys');
var zE = 0x1,
  zc = {
    'fields': 0x0,
    'fieldMs': 0x0,
    'fieldMax': 0x0
  },
  zq = new Map();
function zS(z) {
  let a = String(z.mask_index || z.sprite_index);
  for (let cA of s.list) {
    if (cA.destroyed || !cA.is || !cA.is('obj_battlesolid')) continue;
    let cb = typeof cA.mask_index == 'number' && cA.mask_index < 0x0 ? cA.sprite_index : cA.mask_index || cA.sprite_index;
    cb === 'spr_nothing' || cb === 'spr_no_mask' || !R[cb] || (a += '|' + cA.constructor.name + ',' + Math.round(cA.x) + ',' + Math.round(cA.y) + ',' + (cA.mask_index || cA.sprite_index) + ',' + cA.image_xscale + ',' + cA.image_yscale + ',' + Math.round(cA.image_angle || 0x0));
  }
  return a;
}
v(zS, 'solidsSig');
function zk(cA, cb, cB, cv, cP) {
  if (zE !== 0x1 || (cA.image_angle || 0x0) !== 0x0 || cA.image_xscale !== 0x1 || cA.image_yscale !== 0x1) return null;
  let cy = typeof cA.mask_index == 'number' && cA.mask_index < 0x0 ? cA.sprite_index : cA.mask_index || cA.sprite_index,
    cj = R[cy];
  if (!cj || !cj.bb || !Number.isInteger(cj.ox) || !Number.isInteger(cj.oy)) return null;
  let cN = cj.precise && cj.masks ? cj.masks.length : 0x1,
    cK = (Math.floor(cA.image_index || 0x0) % Math.max(0x1, cj.frames) + cj.frames) % Math.max(0x1, cj.frames),
    q0 = I(cj, Math.min(cK, cN - 0x1));
  if (!q0) return null;
  let q1 = [];
  for (let qw = cj.bb[0x1]; qw <= cj.bb[0x3]; qw++) for (let qC = cj.bb[0x0]; qC <= cj.bb[0x2]; qC++) q0[qw * cj.w + qC] && q1.push(qC - cj.ox, qw - cj.oy);
  if (!q1.length) return new Uint8Array(cv * cP).fill(0x1);
  let q2 = 0x0,
    q3 = 0x0,
    q4 = 0x0,
    q5 = 0x0;
  for (let qE = 0x0; qE < q1.length; qE += 0x2) q2 = Math.min(q2, q1[qE]), q3 = Math.max(q3, q1[qE]), q4 = Math.min(q4, q1[qE + 0x1]), q5 = Math.max(q5, q1[qE + 0x1]);
  let q6 = cb + q2,
    q7 = cB + q4,
    q8 = cv + q3 - q2,
    q9 = cP + q5 - q4,
    qz = new Uint8Array(q8 * q9);
  for (let qc of s.list) {
    if (qc === cA || qc.destroyed || !qc.is || !qc.is('obj_battlesolid')) continue;
    let qq = typeof qc.mask_index == 'number' && qc.mask_index < 0x0 ? qc.sprite_index : qc.mask_index || qc.sprite_index,
      qS = qq && R[qq];
    if (!qS || !qS.bb) continue;
    let qk = qc.image_xscale,
      qV = qc.image_yscale;
    if (!qk || !qV) continue;
    let qF = qS.precise && qS.masks ? qS.masks.length : 0x1,
      qH = (Math.floor(qc.image_index || 0x0) % Math.max(0x1, qS.frames) + qS.frames) % Math.max(0x1, qS.frames),
      qx = I(qS, Math.min(qH, qF - 0x1));
    if (!qx) continue;
    let qJ = (qc.image_angle || 0x0) * Math.PI / 0xb4,
      qU = Math.cos(qJ),
      qd = Math.sin(qJ),
      qM = [0x1 / 0x0, 0x1 / 0x0, -0x1 / 0x0, -0x1 / 0x0];
    for (let qW of [(qS.bb[0x0] - qS.ox) * qk, (qS.bb[0x2] + 0x1 - qS.ox) * qk]) for (let qX of [(qS.bb[0x1] - qS.oy) * qV, (qS.bb[0x3] + 0x1 - qS.oy) * qV]) {
      let qg = qc.x + qW * qU + qX * qd,
        qY = qc.y - qW * qd + qX * qU;
      qg < qM[0x0] && (qM[0x0] = qg), qg > qM[0x2] && (qM[0x2] = qg), qY < qM[0x1] && (qM[0x1] = qY), qY > qM[0x3] && (qM[0x3] = qY);
    }
    let qf = Math.max(0x0, Math.floor(qM[0x0] - q6) - 0x2),
      qT = Math.min(q8 - 0x1, Math.ceil(qM[0x2] - q6) + 0x2),
      qL = Math.max(0x0, Math.floor(qM[0x1] - q7) - 0x2),
      qG = Math.min(q9 - 0x1, Math.ceil(qM[0x3] - q7) + 0x2);
    for (let qD = qL; qD <= qG; qD++) for (let qO = qf; qO <= qT; qO++) {
      let qt = qD * q8 + qO;
      if (qz[qt]) continue;
      let qr = q6 + qO + 0.5 - qc.x,
        qh = q7 + qD + 0.5 - qc.y,
        qR = Math.floor((qr * qU - qh * qd) / qk + qS.ox),
        qZ = Math.floor((qr * qd + qh * qU) / qV + qS.oy);
      qR < 0x0 || qZ < 0x0 || qR >= qS.w || qZ >= qS.h || qx[qZ * qS.w + qR] && (qz[qt] = 0x1);
    }
  }
  let qa = new Uint8Array(cv * cP);
  for (let qu = 0x0; qu < cP; qu++) for (let qi = 0x0; qi < cv; qi++) {
    let qQ = 0x0;
    for (let qI = 0x0; qI < q1.length; qI += 0x2) if (qz[(qu + q1[qI + 0x1] - q4) * q8 + qi + q1[qI] - q2]) {
      qQ = 0x1;
      break;
    }
    qa[qu * cv + qi] = qQ ? 0x0 : 0x1;
  }
  if (typeof process < 'u' && process.env && process.env.CH4CHECK === '1') {
    let qm = 0x0;
    for (let qp = 0x0; qp < cP; qp += 0x1) for (let qA = 0x0; qA < cv; qA += 0x1) (u(cA, cb + qA, cB + qp, 'obj_battlesolid') ? 0x0 : 0x1) !== qa[qp * cv + qA] && qm++;
    console.log("CH4CHECK fastFree " + cv + 'x' + cP + " mismatches " + qm);
  }
  return qa;
}
v(zk, 'fastFree');
function zV(cA, cb) {
  let cB = [cA.x - 0x10, cA.y - 0x10, cA.x + 0x10, cA.y + 0x10],
    cv = qq => {
      qq[0x2] - qq[0x0] < 0x1 && qq[0x3] - qq[0x1] < 0x1 || (cB[0x0] = Math.min(cB[0x0], qq[0x0]), cB[0x1] = Math.min(cB[0x1], qq[0x1]), cB[0x2] = Math.max(cB[0x2], qq[0x2]), cB[0x3] = Math.max(cB[0x3], qq[0x3]));
    };
  for (let qq of s.list) !qq.destroyed && qq.is && qq.is('obj_battlesolid') && cv(h(qq));
  cv(h(cb)), cB[0x0] < -0x28 && (cB[0x0] = -0x28), cB[0x1] < -0x28 && (cB[0x1] = -0x28), cB[0x2] > 0x2a8 && (cB[0x2] = 0x2a8), cB[0x3] > 0x208 && (cB[0x3] = 0x208);
  let cP = zS(cA) + '#' + cb.constructor.name + ',' + Math.round(cb.x) + ',' + Math.round(cb.y) + '#' + cB.map(Math.round).join(',');
  {
    let qS = zq.get(cP);
    if (qS) return qS;
  }
  let cy = performance.now(),
    cj = Math.floor(cB[0x0]) - 0x18,
    cN = Math.floor(cB[0x1]) - 0x18,
    cK = Math.ceil((cB[0x2] - cB[0x0] + 0x30) / zE),
    q0 = Math.ceil((cB[0x3] - cB[0x1] + 0x30) / zE),
    q1 = new Uint8Array(cK * q0),
    q2 = new Int32Array(cK * q0).fill(-0x1),
    q3 = new Int32Array(cK * q0),
    q4 = 0x0,
    q5 = 0x0,
    q6 = h(cA),
    q7 = h(cb),
    q8 = 0x3,
    q9 = q6[0x0] - cA.x,
    qz = q6[0x1] - cA.y,
    qa = q6[0x2] - cA.x,
    qw = q6[0x3] - cA.y,
    qC = zk(cA, cj, cN, cK, q0);
  for (let qk = 0x0; qk < q0; qk++) for (let qV = 0x0; qV < cK; qV++) {
    let qF = cj + qV * zE,
      qH = cN + qk * zE;
    if (!(qC ? !qC[qk * cK + qV] : u(cA, qF, qH, 'obj_battlesolid')) && (q1[qk * cK + qV] = 0x1, qF + qa >= q7[0x0] + q8 && qF + q9 <= q7[0x2] - q8 && qH + qw >= q7[0x1] + q8 && qH + qz <= q7[0x3] - q8)) {
      let qx = !0x0;
      for (let qJ = -0x1; qJ <= 0x1 && qx; qJ++) for (let qU = -0x1; qU <= 0x1 && qx; qU++) {
        if (!Z(cA, cb, qF + qU, qH + qJ)) {
          qx = !0x1;
          break;
        }
        let qd = Object.create(cA);
        qd.x = qF + qU, qd.y = qH + qJ, Z(cb, qd) || (qx = !0x1);
      }
      qx && (q2[qk * cK + qV] = 0x0, q3[q5++] = qk * cK + qV);
    }
  }
  for (; q4 < q5;) {
    let qM = q3[q4++],
      qf = qM % cK,
      qT = (qM - qf) / cK,
      qL = q2[qM] + 0x1;
    for (let qG = -0x1; qG <= 0x1; qG++) for (let qW = -0x1; qW <= 0x1; qW++) {
      if (!qW && !qG) continue;
      let qX = qf + qW,
        qg = qT + qG;
      if (qX < 0x0 || qg < 0x0 || qX >= cK || qg >= q0) continue;
      let qY = qg * cK + qX;
      !q1[qY] || q2[qY] >= 0x0 || qW && qG && (!q1[qT * cK + qX] || !q1[qg * cK + qf]) || (q2[qY] = qL, q3[q5++] = qY);
    }
  }
  let qE = 0x0;
  for (let qD = 0x0; qD < q2.length; qD++) q2[qD] > qE && (qE = q2[qD]);
  let qc = {
    'x0': cj,
    'y0': cN,
    'W': cK,
    'H': q0,
    'dist': q2,
    'max': qE,
    'free': q1
  };
  zq.size >= 0x6 && zq.delete(zq.keys().next().value), zq.set(cP, qc);
  {
    let qO = performance.now() - cy;
    zc.fields++, zc.fieldMs += qO, qO > zc.fieldMax && (zc.fieldMax = qO);
  }
  return qc;
}
v(zV, 'goalField');
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
    let q0 = Math.round((cN - cb) / zE),
      q1 = Math.round((cK - cB) / zE);
    q0 < 0x0 && (q0 = 0x0), q1 < 0x0 && (q1 = 0x0), q0 >= cv && (q0 = cv - 0x1), q1 >= cP && (q1 = cP - 0x1);
    let q2 = cy[q1 * cv + q0];
    return q2 === 0x0 ? -0x6 : cA * zE * (q2 < 0x0 ? cj + 0x28 : q2);
  };
}
v(zF, 'fieldCost');
function zH(z, a, cA) {
  let cb = Math.round((a - z.x0) / zE),
    cB = Math.round((cA - z.y0) / zE);
  return cb < 0x0 || cB < 0x0 || cb >= z.W || cB >= z.H ? -0x1 : z.dist[cB * z.W + cb];
}
v(zH, 'fieldAt');
function zx(z, a) {
  if (zH(zV(z, a), z.x, z.y) >= 0x0) return a;
  let cA = null,
    cb = 0x1 / 0x0;
  for (let cB of s.list) {
    if (cB.destroyed || cB.constructor.name !== 'obj_ghosthouse_trigger' || !cB.active) continue;
    let cv = zH(zV(z, cB), z.x, z.y);
    cv >= 0x0 && cv < cb && (cb = cv, cA = cB);
  }
  return cA || a;
}
v(zx, 'jackTarget');
function zJ(z) {
  if (!s.first('obj_jackenstein_enemy')) return null;
  let a = s.first('obj_ghosthouse_key'),
    cA = s.first('obj_ghosthouse_exit'),
    cb = a && !a.destroyed ? a : cA && !cA.destroyed ? cA : null;
  return cb ? (cb = zx(z, cb), zF(zV(z, cb), zM(z) ? 0.1 : 0.02)) : null;
}
v(zJ, 'jackGoal');
function zU(z) {
  let cA = s.first('obj_ghosthouse_jackolantern_merciful');
  if (!cA || cA.destroyed) return null;
  let cb = Number(cA.size) || 0x1,
    cB = (Number(cA.mercy) || 0x0) > 0x46 ? -cb : cb,
    cv = (Number(cA.light_distance) || 0x4b) - cB * 0x1e,
    cP = Number(cA.hspeed) || 0x0,
    cy = Number(cA.vspeed) || 0x0,
    cj = cA.x + cP * 0x3,
    cN = cA.y + cy * 0x3,
    cK = Math.max(0x8, cv - 0xa);
  return (q0, q1) => {
    let q2 = Math.hypot(q0 + 0x4 - cj, q1 + 0x4 - cN);
    return q2 <= cK ? -0x6 : 0.04 * (q2 - cK);
  };
}
v(zU, 'lanternGoal');
function zd(z) {
  return !z2 || T.chapter !== 0x4 || T.mnfight !== 0x2 || !z || z.destroyed ? null : zU(z) || zJ(z);
}
v(zd, 'ch4Goal');
function zM(z) {
  if (!zf(z)) return 0x0;
  let a = Number(T.turntimer);
  return a > 0xdbba0 && a < 0xf3ebb ? 0xc : 0x0;
}
v(zM, 'ch4HitCost');
function zf(z) {
  return z2 && T.chapter === 0x4 && T.mnfight === 0x2 && !!s.first('obj_jackenstein_enemy') && !!(s.first('obj_ghosthouse_key') || s.first('obj_ghosthouse_exit'));
}
v(zf, 'ch4FineGrid');
function zT(z) {
  if (!zf(z)) return null;
  let cA = s.first('obj_ghosthouse_key'),
    cb = s.first('obj_ghosthouse_exit'),
    cB = cA && !cA.destroyed ? cA : cb;
  if (!cB) return null;
  let cv = zV(z, cB),
    {
      x0: cP,
      y0: cy,
      W: cj,
      H: cN,
      free: cK
    } = cv;
  return (q0, q1) => {
    let q2 = Math.round(q0 - cP),
      q3 = Math.round(q1 - cy);
    return q2 < 0x0 || q3 < 0x0 || q2 >= cj || q3 >= cN ? !0x0 : !cK[q3 * cj + q2];
  };
}
v(zT, 'ch4Pm');
var zL = v(z => {
  let a = T.char && T.char[z];
  return a > 0x0 && Number(T.hp && T.hp[a]) >= 0x1;
}, 'alive');
function zG(z) {
  let a = T.char ? W(z) : -0x1;
  if (a < 0x0) return T.customTeam === 0x1;
  let cA = s.first('obj_battlecontroller');
  return cA && cA.havechar && cA.havechar[a] !== 0x1 ? !0x1 : Number(T.hp && T.hp[T.char[a]]) > 0x0;
}
v(zG, 'charUp');
function zW(z, a) {
  let cA = (T.actactor && T.actactor[z] && T.actactor[z][a]) | 0x0;
  return !((cA === 0x2 || cA === 0x4) && !zG(0x2) || (cA === 0x3 || cA === 0x4) && !zG(0x3) || cA === 0x5 && !zG(0x4));
}
v(zW, 'actPressable');
var zX = v((z, a) => {
    let cA = T.actname && T.actname[z] || [];
    for (let cb = 0x0; cb < 0x6; cb++) if (cA[cb] === a && T.canact[z] && T.canact[z][cb] === 0x1 && zW(z, cb)) return cb;
    return -0x1;
  }, 'actIndex'),
  zg = v((z, a) => {
    let cA = T.battlespellname && T.battlespellname[z] || [];
    for (let cb = 0x0; cb < cA.length; cb++) if (cA[cb] === a && T.battlespell[z] && T.battlespell[z][cb] !== 0x0) return cb;
    return -0x1;
  }, 'techIndex'),
  zY = v((z, a) => Number((T.battlespellcost[z] || [])[a]) || 0x0, 'techCost');
function zD() {
  for (let z = 0x0; z < 0x3; z++) if (T.monster && T.monster[z] === 0x1) return z;
  return -0x1;
}
v(zD, 'firstMonster');
function zO(z, a) {
  let cA = T.char.indexOf(0x1);
  if (cA < 0x0 || zL(cA)) return null;
  for (let cb of ['WakeKris', 'ReviveKris']) {
    let cB = zg(z, cb);
    if (cB >= 0x0 && zY(z, cB) <= T.tension) return {
      'main': 0x1,
      'tech': cB,
      'target': a
    };
  }
  return null;
}
v(zO, 'reviveKris');
function zr(z) {
  let a = s.first('obj_jackenstein_enemy');
  if (!a) return null;
  let cA = a.myself | 0x0;
  if (T.char[z] !== 0x1) return {
    'main': 0x0
  };
  let cb = zX(cA, 'Unleash');
  return cb >= 0x0 && T.tension >= (T.actcost[cA][cb] || 0x0) && a.unleash !== 0x1 ? {
    'main': 0x1,
    'act': 'Unleash',
    'target': cA
  } : {
    'main': 0x0
  };
}
v(zr, 'jackPlan');
function zh(z) {
  let cA = s.first('obj_titan_enemy');
  if (!cA) return null;
  let cb = cA.myself | 0x0;
  if (T.char[z] !== 0x1) return zO(z, cb) || {
    'main': 0x0
  };
  if ((cA.dualbusterenabled || cA.susiesideaenabled) && T.canact[cb] && T.canact[cb][0x0] === 0x1 && zW(cb, 0x0) && T.tension >= ((T.actcost[cb] || [])[0x0] || 0x0)) return {
    'main': 0x1,
    'actIdx': 0x0,
    'target': cb
  };
  let cB = zX(cb, 'Unleash');
  if (cB >= 0x0 && !cA.unleashed && T.tension >= (T.actcost[cb][cB] || 0xc8)) return {
    'main': 0x1,
    'act': 'Unleash',
    'target': cb
  };
  let cv = !0x1;
  for (let cy = 0x0; cy < 0x3; cy++) {
    let cj = T.char[cy];
    cj > 0x0 && Number(T.hp[cj]) < Number(T.maxhp[cj]) * 0.35 && (cv = !0x0);
  }
  let cP = zX(cb, 'DualHeal');
  return cv && cP >= 0x0 && T.tension >= (T.actcost[cb][cP] || 0x28) ? {
    'main': 0x1,
    'act': 'DualHeal',
    'target': cb
  } : {
    'main': 0x0
  };
}
v(zh, 'titanPlan');
function zR(z) {
  if (!s.first('obj_titan_spawn_enemy')) return null;
  if (T.char[z] !== 0x1) return zO(z, zD()) || {
    'main': 0x0
  };
  for (let a = 0x0; a < 0x3; a++) {
    if (T.monster[a] !== 0x1) continue;
    let cA = zX(a, 'Banish');
    if (cA >= 0x0 && T.tension >= (T.actcost[a][cA] || 0xa0)) return {
      'main': 0x1,
      'act': 'Banish',
      'target': a
    };
  }
  return {
    'main': 0x0
  };
}
v(zR, 'spawnPlan');
function zZ(z) {
  for (let a = 0x0; a < 0x3; a++) if (T.monster[a] === 0x1 && Number(T.mercymod && T.mercymod[a]) >= 0x64) return {
    'main': 0x3,
    'target': a
  };
  return null;
}
v(zZ, 'sparePlan');
function zu(z) {
  let a = zr(z) || zh(z) || zR(z);
  return a ? zZ(z) || a : null;
}
v(zu, 'commandPlan');
function zi() {
  if (!z2 || T.chapter !== 0x4 || T.fighting !== 0x1 || T.mnfight !== 0x0 || T.myfight !== 0x0 || T.battleover) return null;
  let z = T.charturn;
  if (!(z >= 0x0 && z < 0x3) || !T.char || !(T.char[z] > 0x0)) return null;
  let a = zu(z);
  if (!a) return null;
  if ((s.frame | 0x0) % 0x3 !== 0x0) return '';
  let cA = T.bmenuno,
    cb = T.bmenucoord;
  if (!cb) return null;
  let cB = cv => cb[cv] ? cb[cv][z] | 0x0 : 0x0;
  if (cA === 0x0) {
    let cv = cB(0x0);
    return cv === a.main ? 'b1' : (a.main - cv + 0x5) % 0x5 <= 0x2 ? 'right' : 'left';
  }
  if (cA === 0xb || cA === 0xc || cA === 0xd || cA === 0x1 || cA === 0x3) {
    let cP = a.target === void 0x0 || a.target < 0x0 ? cB(cA) : a.target;
    return cB(cA) !== cP && T.monster[cP] === 0x1 ? 'down' : 'b1';
  }
  if (cA === 0x9) {
    let cy = a.actIdx !== void 0x0 ? a.actIdx : a.act ? zX(cB(0xb), a.act) : -0x1;
    if (cy < 0x0) return 'b1';
    let cj = cB(0x9);
    return cj === cy ? 'b1' : cj >> 0x1 === cy >> 0x1 ? cj & 0x1 ? 'left' : 'right' : cj < cy ? 'down' : 'up';
  }
  if (cA === 0x2) {
    let cN = a.tech;
    if (cN === void 0x0 || cN < 0x0) return 'b1';
    let cK = cB(0x2);
    return cK === cN ? 'b1' : cK >> 0x1 === cN >> 0x1 ? 'right' : cK < cN ? 'down' : 'up';
  }
  if (cA === 0x7 || cA === 0x8) {
    let q0 = a.hero === void 0x0 ? cB(cA) : a.hero;
    return cB(cA) !== q0 ? 'down' : 'b1';
  }
  return null;
}
v(zi, 'ch4MenuAction');
function zQ() {
  let z = s.first('obj_heart');
  if (!z) return {
    'l': 0x0,
    't': 0x0,
    'r': 0x10,
    'b': 0x10
  };
  let a = h(z);
  return {
    'l': a[0x0] - z.x,
    't': a[0x1] - z.y,
    'r': a[0x2] + 0x1 - z.x,
    'b': a[0x3] + 0x1 - z.y
  };
}
v(zQ, 'soulBoxRel');
function zI(z) {
  if (!z2 || T.chapter !== 0x4) return;
  if (z.constructor.name === 'obj_mizzle_spotlight') {
    let cA = s.first('obj_mizzle_spotlight_controller_b'),
      cb = s.first('obj_mizzle_spotlight_controller');
    if (cA && cA.alert || cb && cb.alert) return null;
    if (cA) {
      let cB = zQ(),
        cv = 0x1e,
        cP = z.x - 0xa - cv,
        cy = z.x - 0xa + cv,
        cj = z.y - 0xa - cv,
        cN = z.y - 0xa + cv;
      return [{
        'rect': [cP + cB.r - 0x1, cj + cB.b - 0x1, cy + cB.l + 0x1, cN + cB.t + 0x1],
        'blue': !0x1
      }];
    }
    return cb ? [{
      'mask': !0x0,
      'blue': !0x1
    }] : null;
  }
}
v(zI, 'ch4Shapes'), y(), y();
var zm = ['up', 'down', 'left', 'right', 'b1'],
  zp = {
    'move': null,
    'frame': -0x9,
    'held': ''
  };
function zA() {
  zp.move = null, zp.frame = -0x9, zp.held = '';
}
v(zA, 'climbAutoReset');
function zb() {
  return !!T.autoplay && s.exists('__roomhost') && !!s.first('obj_climb_kris');
}
v(zb, 'climbAutoActive');
function zs(cA) {
  let cb = s.first('obj_rotating_tower_controller_new'),
    cB = cb && cb.horizontaltilecount > 0x0 ? Math.round(cb.horizontaltilecount) : 0x16,
    cv = (q7, q8) => [(Math.floor(q7 / 0x28) % cB + cB) % cB, Math.floor(q8 / 0x28)],
    [cP, cy] = cv(cA.x - 0x14, cA.y - 0x14),
    cj = new Set();
  for (let q7 of s.all('obj_climb_enemy')) {
    if (q7.destroyed || q7.active === 0x0 || q7.damagecon === 0x3) continue;
    let q8 = h(q7);
    if (q8) {
      for (let q9 = Math.floor((q8[0x1] + 0xe) / 0x28); q9 <= Math.floor((q8[0x3] - 0xe) / 0x28); q9++) cj.add(q9);
    }
  }
  let cN = (qz, qa) => qz + ',' + qa,
    cK = new Set(),
    q0 = new Set();
  for (let qz of s.all('obj_climb_climbable')) {
    let qa = h(qz);
    if (qa) {
      for (let qw = Math.floor(qa[0x1] / 0x28); qw <= Math.floor(qa[0x3] / 0x28); qw++) for (let qC = Math.floor(qa[0x0] / 0x28); qC <= Math.floor(qa[0x2] / 0x28); qC++) {
        let qE = cN((qC % cB + cB) % cB, qw);
        q0.add(qE), cj.has(qw) || cK.add(qE);
      }
    }
  }
  let q1 = s.all('obj_climb_boostenemy').filter(qc => qc.y < cA.y + 0xa && !qc.destroyed && qc.damagecon !== 0x3).sort((qc, qq) => qq.y - qc.y)[0x0],
    q2 = q1 ? cv(q1.x, q1.y)[0x1] : null,
    q3 = (qc, qq) => {
      for (let qS = 0x3; qS >= 0x1; qS--) if (q0.has(cN(qc, qq - qS))) return qS;
      return 0x0;
    },
    q4 = cA.jumping || cA.fallingcon || cA.boosting || cA.climbcon;
  if (!zp.move && !q4) {
    let qc = new Map([[cN(cP, cy), null]]),
      qq = [[cP, cy]],
      qS = null;
    for (let qV = 0x0; qV < qq.length; qV++) {
      let [qF, qH] = qq[qV];
      if (q1 ? qH > q2 && qH <= q2 + 0x3 && q3(qF, qH) >= qH - q2 : qH <= cy - 0x14) {
        qS = [qF, qH];
        break;
      }
      let qx = [[(qF + 0x1) % cB, qH, 'right'], [(qF + cB - 0x1) % cB, qH, 'left'], [qF, qH - 0x1, 'up'], [qF, qH + 0x1, 'down'], [qF, qH - 0x2, 'j2'], [qF, qH - 0x3, 'j3']];
      for (let [qJ, qU, qd] of qx) {
        let qM = cN(qJ, qU);
        qc.has(qM) || !cK.has(qM) || qd === 'j2' && cK.has(cN(qF, qH - 0x1)) || qd === 'j3' && (cK.has(cN(qF, qH - 0x1)) || cK.has(cN(qF, qH - 0x2))) || (qc.set(qM, [qF, qH, qd]), qq.push([qJ, qU]));
      }
    }
    let qk = null;
    if (qS) {
      let qf = qS,
        qT = null;
      for (; qc.get(cN(qf[0x0], qf[0x1]));) {
        if (qT = qc.get(cN(qf[0x0], qf[0x1])), qT[0x0] === cP && qT[0x1] === cy) {
          qk = qT[0x2];
          break;
        }
        qf = [qT[0x0], qT[0x1]];
      }
      !qk && q1 && qS[0x0] === cP && qS[0x1] === cy && (qk = 'boost');
    }
    zp.move = qk ? {
      'how': qk,
      't': 0x0,
      'from': [cP, cy],
      'n': qk === 'boost' ? q3(cP, cy) : 0x0
    } : {
      'how': 'up',
      't': 0x0,
      'from': [cP, cy]
    };
  }
  let q5 = new Set(),
    q6 = zp.move;
  if (q6) {
    if (q6.t++, q6.how === 'left' || q6.how === 'right' || q6.how === 'up' || q6.how === 'down') q5.add(q6.how), (cP !== q6.from[0x0] || cy !== q6.from[0x1] || q6.t > 0x1e) && (zp.move = null, q5.clear());else {
      let qL = q6.how === 'j2' ? 0x2 : q6.how === 'j3' ? 0x3 : Math.max(0x1, Math.min(0x3, q6.n)),
        qG = qL === 0x1 ? 0x4 : qL === 0x2 ? 0xe : 0x1a;
      q5.add('up'), q6.t <= qG && q5.add('b1'), q6.t > qG + 0x28 && !q4 && (zp.move = null, q5.clear());
    }
  }
  return q5;
}
v(zs, 'plan');
function zB() {
  if (!zb()) return (zp.move || zp.held) && zA(), !0x1;
  let z = s.first('obj_climb_kris');
  s.frame !== zp.frame + 0x1 && (zp.move = null, zp.held = ''), zp.frame = s.frame;
  let a = zs(z),
    cA = zp.held,
    cb = zm.filter(cB => a.has(cB)).join(',');
  zp.held = cb;
  for (let cB of zm) m.held[cB] = a.has(cB);
  return m.synthetic = () => {
    let cv = cA ? cA.split(',') : [];
    for (let cP of zm) {
      let cy = a.has(cP),
        cj = cv.includes(cP);
      m.held[cP] = cy, m.pressed[cP] = cy && !cj, !cy && cj && (m.released[cP] = !0x0);
    }
  }, !0x0;
}
v(zB, 'climbAutoStep');
var zv = v(() => T.chapter === 0x5 && !globalThis.__ch5Off, 'ch5'),
  zP = v(() => zv() ? T.encounterno | 0x0 : 0x0, 'enc'),
  zy = {
    'lastTurnMenu': -0x1,
    'rc': null,
    'rcI': 0x0,
    'rcN': 0x0,
    'rcHeld': '',
    'rcFrame': -0x9,
    'rcCool': 0x0,
    'rcCleanUntil': 0x0
  },
  zj = {
    'menuPresses': 0x0,
    'plans': {},
    'shapes': {},
    'goals': 0x0,
    'rcDecisions': 0x0,
    'rcRollouts': 0x0,
    'rcFrames': 0x0,
    'rcMs': 0x0,
    'rcKinds': {}
  };
function zN() {
  return {
    ...zy,
    'rc': zy.rc ? zy.rc.slice() : null
  };
}
v(zN, 'ch5SaveState');
function zK(z) {
  z ? (Object.assign(zy, z), zy.rc = z.rc ? z.rc.slice() : null) : a0();
}
v(zK, 'ch5LoadState');
function a0() {
  zy.lastTurnMenu = -0x1, zy.rc = null, zy.rcI = 0x0, zy.rcN = 0x0, zy.rcHeld = '', zy.rcFrame = -0x9, zy.rcCool = 0x0, zy.rcCleanUntil = 0x0;
}
v(a0, 'ch5ResetState');
function a1() {
  return "ch5 " + zy.lastTurnMenu + " rc " + (zy.rc ? zy.rc.length : '-') + '/' + zy.rcI + '/' + zy.rcN + '\x20' + zy.rcHeld + '\x20' + zy.rcFrame + '\x20' + (zy.rcCool | 0x0);
}
v(a1, 'ch5Digest');
var a2 = v((z, a) => {
  z[a] = (z[a] || 0x0) + 0x1;
}, 'bump');
function a3() {
  let z = s.first('obj_heart'),
    a = z && (typeof z.mask_index == 'number' && z.mask_index < 0x0 ? z.sprite_index : z.mask_index || z.sprite_index),
    cA = a && R[a];
  if (!z || !cA || !cA.bb) return {
    'l': 0x0,
    't': 0x0,
    'r': 0x10,
    'b': 0x10
  };
  let cb = z.image_xscale || 0x1,
    cB = z.image_yscale || 0x1;
  return {
    'l': (cA.bb[0x0] - cA.ox) * cb,
    't': (cA.bb[0x1] - cA.oy) * cB,
    'r': (cA.bb[0x2] + 0x1 - cA.ox) * cb,
    'b': (cA.bb[0x3] + 0x1 - cA.oy) * cB
  };
}
v(a3, 'soulBox');
function a4(z) {
  if (!zv()) return;
  let a = z.constructor.name;
  if (a === 'obj_sheary_smashcutter') {
    if ((z.timer | 0x0) !== 0x30) return null;
    let cA = a3();
    return a2(zj.shapes, a), [{
      'rect': [0x0, z.y - 0xc + cA.b - 0x1, 0x280, z.y + 0xc + cA.t + 0x1],
      'blue': !0x1
    }];
  }
  if (a === 'obj_bullet_knife' && (z.netskie === 0x1 || z.netskie === !0x0)) return null;
  if (a === 'obj_purple_aim_attack') {
    let cb = z.alarm ? Number(z.alarm[0x0]) : -0x1;
    return z.state === 'attack' && (z.countdown | 0x0) >= 0x19 || z.state === 'idle' && cb >= 0x18 && cb <= 0x19 ? (a2(zj.shapes, a), [{
      'mask': !0x0,
      'blue': !0x1
    }]) : null;
  }
}
v(a4, 'ch5Shapes');
function a5() {
  if (!zv() || globalThis.__ch5NoGoal) return null;
  if (zP() === 0xe5) {
    let z = [],
      a = a3();
    for (let cA of s.list) cA.destroyed || cA.constructor.name !== 'obj_bullet_knife' || !(cA.netskie === 0x1 || cA.netskie === !0x0) || !cA.active || z.push({
      'rect': [cA.x - 0x8 - a.r, cA.y - 0x8 - a.b, cA.x + 0x8 - a.l, cA.y + 0x8 - a.t],
      'w': 0x1e
    });
    return z.length ? z : null;
  }
  return null;
}
v(a5, 'ch5Goals');
function a6() {
  if (zv() && zP() === 0xea) {
    let z = s.first('obj_growtangle');
    if (z && !z.destroyed && typeof z.keep_function == 'function') {
      let a = Number(z.box_extra) || 0x0;
      return [z.x - 0x46, z.x + 0x34, z.y - (a + 0x46), z.y + 0x34];
    }
  }
}
v(a6, 'ch5Clamp');
function a7(z) {
  if (zv()) return a8() ? null : void 0x0;
}
v(a7, 'ch5SoulKind');
function a8() {
  if (!zv() || globalThis.__ch5NoRC) return null;
  let z = s.first('obj_orangeheart');
  if (z && !z.destroyed) return 'orange';
  let a = s.first('obj_purplecontrols');
  return a && !a.destroyed && s.first('obj_heart') ? 'purple' : null;
}
v(a8, 'rcKind');
var a9 = null;
function az() {
  if (a9) return a9;
  let z = l(A),
    a = z.ctx;
  try {
    Object.defineProperty(z, 'ctx', {
      'get': () => a,
      'set': () => {},
      'configurable': !0x0
    });
  } catch {}
  return a9 = z;
}
v(az, 'gfx5');
var aa = {
    'u': 'up',
    'd': 'down',
    'l': 'left',
    'r': 'right',
    'z': 'b1'
  },
  aw = ['up', 'down', 'left', 'right', 'b1'];
function aC(z) {
  let a = {};
  for (let cA of z || '') aa[cA] && (a[aa[cA]] = !0x0);
  return a;
}
v(aC, 'keysOf');
function aE(z, a) {
  let cA = aC(z),
    cb = aC(a);
  return () => {
    for (let cB of aw) {
      let cv = !!cA[cB],
        cP = !!cb[cB];
      m.held[cB] = cv, m.pressed[cB] = cv && !cP, !cv && cP && (m.released[cB] = !0x0);
    }
  };
}
v(aE, 'applyKeys');
var ac = v(() => {
  if (typeof T.hp == 'number') return T.hp;
  let z = 0x0;
  for (let a of [0x1, 0x2, 0x3]) {
    let cA = Number(T.hp && T.hp[a]);
    Number.isFinite(cA) && (z += cA);
  }
  return z;
}, 'partyHP');
function aq() {
  let z = s.first('obj_tensionbar');
  return z && Number(z.maxtensionlimit) || 0x0;
}
v(aq, 'tensionCap');
var aS = 0x0,
  ak = 0x0;
function aV(cA, cb, cB, cv) {
  let cP = m.synthetic,
    cy = {};
  for (let qk of aw) cy[qk] = m.held[qk];
  let cj = ac(),
    cN = Number(T.tension) || 0x0,
    cK = aq(),
    q0 = T.mnfight,
    q1 = cv === 'orange' ? s.first('obj_debug_orangeheartcontroller') : null,
    q2 = q1 && q1.scrolling ? 0x1 : 0x0,
    q3 = cv === 'orange' ? s.number('obj_orangeheart_wall') : 0x0,
    q4 = cv === 'purple' ? s.first('obj_purplecontrols') : null,
    q5 = q4 && Number(q4.difficulty) || 0x0,
    q6 = q4 && Number(q4.pattern_phase) || 0x0,
    q7 = q4 && q4.mode === 0x8 && (q4.difficulty | 0x0) === 0x3,
    q8 = () => {
      let qV = s.first('obj_purplecontrols');
      return qV ? s.all('obj_pinknode').indexOf(qV.node_id) : -0x1;
    },
    q9 = q7 ? q8() : -0x1,
    qz = cv === 'purple' ? s.all('obj_pinknodeact').filter(qV => !qV.destroyed && qV.mode === 0x1).length : 0x0,
    qa = qV => s.all('obj_pinknodeact').filter(qF => !qF.destroyed && qF.mode === qV && (Number(qF.timer) || 0x0) >= 0x0).length,
    qw = cv === 'purple' ? qa(0x1) : 0x0,
    qC = cv === 'purple' ? qa(0x0) : 0x0,
    qE = 0x0,
    qc = zy.rcHeld,
    qq = 0x0;
  aS = 0x0;
  let qS = r();
  g(!0x1), D();
  try {
    for (let qV = 0x0; qV < cB; qV++) {
      let qF = cb[qV] !== void 0x0 ? cb[qV] : '';
      m.synthetic = aE(qF, qc);
      try {
        p(U, az());
      } catch {
        break;
      }
      if (qq++, qc = qF, globalThis.__ch5trace) {
        let qx = s.first('obj_orangeheart') || s.first('obj_heart');
        globalThis.__ch5trace.push((qx ? Math.round(qx.x) + ',' + Math.round(qx.y) + (qx.chargecon !== void 0x0 ? '\x20c' + qx.chargecon + '/' + qx.chargetimer : '') : '-') + " hp" + ac() + '\x20n' + s.list.length + '\x20r' + b.state % 0x3e8);
      }
      let qH = ac();
      if (qH < cj) {
        qE += (cj - qH) * (0xa + 0xa * (cB - qV) / cB), aS = cj - qH;
        break;
      }
      if (T.battleover || T.mnfight !== q0) break;
    }
    if (qE -= Math.max(0x0, (Number(T.tension) || 0x0) - cN) * 0.5, qE -= Math.max(0x0, aq() - cK) * 0x2, cv === 'purple') {
      let qJ = s.first('obj_purplecontrols');
      if (qJ && (qE -= Math.max(0x0, (Number(qJ.difficulty) || 0x0) - q5) * 0x12c), qJ && (Number(qJ.difficulty) || 0x0) === q5 && (qE -= Math.max(0x0, (Number(qJ.pattern_phase) || 0x0) - q6) * 0x96), q7 && q9 >= 0x0) {
        let qd = q8();
        qd >= 0x0 && (qE -= (qd - q9) * 0x5);
      }
      qE -= Math.max(0x0, s.all('obj_pinknodeact').filter(qM => !qM.destroyed && qM.mode === 0x1).length - qz) * 0x64, qE -= Math.max(0x0, qa(0x1) - qw) * 0x12c, qE += Math.max(0x0, qa(0x0) - qC) * 0x12c;
      let qU = s.first('obj_heart');
      if (qU) {
        let qM = 0x1 / 0x0;
        for (let qf of s.all('obj_dokiheart')) qf.destroyed || (qM = Math.min(qM, Math.hypot(qf.x - (qU.x + 0x9), qf.y - (qU.y + 0x9))));
        if (qM === 0x1 / 0x0) {
          for (let qT of s.all('obj_pinknodeact')) !qT.destroyed && qT.mode === 0x1 && qT.active === 0x1 && (qM = Math.min(qM, Math.hypot(qT.x - (qU.x + 0x9), qT.y - (qU.y + 0x9))));
        }
        qM < 0x1 / 0x0 && (qE += Math.min(qM, 0x12c) * 0.1);
      }
      qJ && (qJ.mode | 0x0) === 0x1 && (qE += Math.abs(Number(qJ.x_ongrid) || 0x0) * 0.04);
    }
    if (cv === 'orange' && q1) {
      let qL = s.first('obj_debug_orangeheartcontroller');
      qL && qL.scrolling && !q2 && (qE -= 0xc8), qE -= Math.max(0x0, q3 - s.number('obj_orangeheart_wall')) * 0x14;
      let qG = s.first('obj_orangeheart');
      qG && qG.chargecon === 0x1 && (qE += 0x3);
      let qW = s.first('obj_orangeheart_chaseattack');
      if (qG && qW && !qW.destroyed && (qW.state | 0x0) === 0x0) {
        let qX = qG.bbox_left + 0x5 - qW.bbox_right;
        qX < 0xc8 && (qE += (0xc8 - Math.max(0x0, qX)) * 0.4);
      }
      for (let qg of cb) qg && qg.includes('z') && (qE += 0.02);
    }
  } finally {
    M(cA), O(), g(qS), m.synthetic = cP;
    for (let qY of aw) m.held[qY] = cy[qY];
  }
  return zj.rcRollouts++, zj.rcFrames += qq, ak = qq, qE;
}
v(aV, 'rollout');
var aF = v((z, a) => Array.from({
  'length': a
}, () => z), 'rep');
function ao(z, a, cA, cb = 0x0) {
  let cB = aF('', a),
    cv = cb;
  for (let cP of z) cv < a && (cB[cv] = cP), cv += cA;
  return cB;
}
v(ao, 'taps');
function aH(z, cA) {
  let cb = [];
  if (cb.push(aF('', cA)), z === 'purple') {
    let cB = s.first('obj_purplecontrols'),
      cv = cB ? cB.mode | 0x0 : 0x1;
    if (cv === 0x0) {
      for (let cP of ['u', 'd', 'l', 'r', 'ul', 'ur', 'dl', 'dr']) cb.push(aF(cP, cA), [...aF(cP, 0x6), ...aF('', cA - 0x6)]);
    } else {
      if (cv === 0x1) {
        let cy = cB.lane_y | 0x0;
        for (let cj = 0x0; cj <= 0x2; cj++) for (let cN of ['', 'l', 'r']) {
          if (cj === cy && !cN) continue;
          let cK = [];
          for (let q0 = cy; q0 !== cj; q0 += cj > cy ? 0x1 : -0x1) cK.push(cj > cy ? 'd' : 'u');
          cb.push(ao(cK, cA, 0x4).map(q1 => q1 + cN)), cj !== cy && !cN && cb.push(ao(cK, cA, 0x4, 0x8));
        }
      } else {
        if (cv === 0x2) {
          let q1 = cB.lane_x | 0x0,
            q2 = cB.lane_y | 0x0;
          for (let q3 = 0x0; q3 <= 0x3; q3++) for (let q4 = 0x0; q4 <= 0x3; q4++) {
            if (q3 === q1 && q4 === q2) continue;
            let q5 = [];
            for (let q7 = q1; q7 !== q3; q7 += q3 > q1 ? 0x1 : -0x1) q5.push(q3 > q1 ? 'r' : 'l');
            let q6 = [];
            for (let q8 = q2; q8 !== q4; q8 += q4 > q2 ? 0x1 : -0x1) q6.push(q4 > q2 ? 'd' : 'u');
            cb.push(ao([...q5, ...q6], cA, 0x3)), q5.length && q6.length && cb.push(ao([...q6, ...q5], cA, 0x3));
          }
        } else for (let q9 of ['u', 'd', 'l', 'r']) {
          cb.push(ao([q9], cA, 0x4), ao([q9], cA, 0x4, 0x8));
          for (let qz of ['u', 'd', 'l', 'r']) cb.push(ao([q9, qz], cA, 0x4));
        }
      }
    }
    for (let qa of ad(cB)) cb.push(qa);
  } else {
    if (z === 'orange') {
      let qw = s.first('obj_orangeheart'),
        qC = qw && qw.chargecon === 0x1;
      for (let qE of ['', 'u', 'd']) for (let qc of qE ? [0x6, cA] : [cA]) {
        let qq = [...aF(qE, qc), ...aF('', cA - qc)];
        for (let qS of qC ? [0x0, 0x6, 0x10] : qE ? [0x0, 0x11] : [0x0, 0x8, 0x11]) !qE && !qS || cb.push(qq.map((qk, qV) => qk + (qV < qS ? 'z' : '')));
      }
    }
  }
  return cb;
}
v(aH, 'candidates');
function ax(z) {
  let a = [],
    cA = cb => {
      let cB = [];
      for (let [cv, cP] of cb) for (let cy = 0x0; cy < cP; cy++) cB.push(cv);
      for (; cB.length < z;) cB.push('');
      return cB.slice(0x0, Math.max(z, cB.length));
    };
  for (let cb of ['u', 'd']) {
    let cB = cb === 'u' ? 'd' : 'u';
    for (let cv of [0x3, 0x9]) a.push(cA([[cb, cv], ['z', 0x11]])), a.push(cA([[cb, cv], [cb + 'z', 0x11]]));
    a.push(cA([[cb + 'z', 0xc]])), a.push(cA([[cb, 0x6], [cB, z - 0x6]])), a.push(cA([[cb, 0x4], ['', 0x8], [cb, 0xc]]));
  }
  for (let cP of [0x4, 0xc]) a.push(cA([['z', cP]]));
  return a.push(cA([['', 0x6], ['z', 0x11]])), a;
}
v(ax, 'rescueOrange');
function aJ(z, cA) {
  let cb = [];
  if (!z || (z.mode | 0x0) !== 0x1) return cb;
  let cB = z.lane_y | 0x0,
    cv = [cP => cP < 0xc ? 'l' : 'r', cP => cP < 0xc ? 'r' : 'l', cP => cP >= 0x10 ? 'l' : '', cP => cP >= 0x10 ? 'r' : ''];
  for (let cP = 0x0; cP <= 0x2; cP++) for (let cy of [0x6, 0x12]) for (let cj of cv) {
    let cN = [];
    for (let q0 = cB; q0 !== cP; q0 += cP > cB ? 0x1 : -0x1) cN.push(cP > cB ? 'd' : 'u');
    if (!cN.length && cy === 0x12) continue;
    let cK = ao(cN, cA, 0x4, cy);
    cb.push(cK.map((q1, q2) => q1 + cj(q2)));
  }
  return cb;
}
v(aJ, 'rescuePurple');
var aU = ['r', 'u', 'l', 'd'];
function ad(cA) {
  let cb = cA && cA.node_id;
  if (!cb || typeof cb != 'object' || cb.destroyed || !Array.isArray(cb.child)) return [];
  let cB = aG.purple,
    cv = [];
  for (let q0 of s.all('obj_dokiheart')) q0.destroyed || cv.push([q0.x, q0.y]);
  if (!cv.length) {
    for (let q1 of s.all('obj_pinknodeact')) !q1.destroyed && q1.mode === 0x1 && q1.active === 0x1 && (Number(q1.timer) || -0x1) < 0x0 && cv.push([q1.x, q1.y]);
  }
  let cP = !cv.length && cA.mode === 0x8 && (cA.difficulty | 0x0) === 0x3;
  if (!cv.length && !cP) return [];
  let cy = new Map([[cb, null]]),
    cj = [cb];
  for (; cj.length;) {
    let q2 = cj.shift(),
      q3 = 0x0;
    for (let q4 = q2; cy.get(q4); q4 = cy.get(q4).from) q3++;
    if (!(q3 >= (cP ? 0xc : 0x8))) for (let q5 = 0x0; q5 < 0x4; q5++) {
      let q6 = q2.child[q5];
      !q6 || typeof q6 != 'object' || q6.destroyed || cy.has(q6) || (cy.set(q6, {
        'from': q2,
        'dir': aU[q5]
      }), cj.push(q6));
    }
  }
  let cN = [],
    cK = cP ? [null] : cv;
  for (let q7 of cK) {
    let q8 = null,
      q9 = 0x1 / 0x0;
    if (q7) for (let qC of cy.keys()) {
      let qE = Math.hypot((qC.x || 0x0) - q7[0x0], (qC.y || 0x0) - q7[0x1]);
      qE < q9 && (q9 = qE, q8 = qC);
    } else {
      let qc = s.all('obj_pinknode'),
        qq = qc.indexOf(cb);
      for (let qS of cy.keys()) {
        let qk = qc.indexOf(qS);
        if (qk <= qq || qk > qq + 0xc) continue;
        let qV = -qk;
        qV < q9 && (q9 = qV, q8 = qS);
      }
    }
    if (!q8 || q8 === cb) continue;
    let qz = [];
    for (let qF = q8; cy.get(qF); qF = cy.get(qF).from) qz.unshift({
      'dir': cy.get(qF).dir,
      'len': Math.hypot((qF.x || 0x0) - (cy.get(qF).from.x || 0x0), (qF.y || 0x0) - (cy.get(qF).from.y || 0x0))
    });
    let qa = {
        'r': 'l',
        'l': 'r',
        'u': 'd',
        'd': 'u'
      },
      qw = qz.slice().reverse().map(qH => ({
        'dir': qa[qH.dir],
        'len': qH.len
      }));
    for (let qH of [qz, [...qz, ...qw]]) {
      let qx = qH.reduce((qJ, qU) => qJ + Math.ceil(qU.len / 0x16) + 0x2, 0x0);
      for (let qJ = 0x0; qJ <= 0x54; qJ += 0xc) {
        let qU = Math.max(cB, qJ + qx + 0xc),
          qd = aF('', qU),
          qM = qJ;
        for (let qf of qH) qd[qM] = qf.dir, qM += Math.ceil(qf.len / 0x16) + 0x2;
        cN.push(qd);
      }
    }
  }
  return cN;
}
v(ad, 'nodePaths');
var aM = 0x0;
function al(z) {
  aM = Math.max(0x0, Number(z) || 0x0);
}
v(al, 'setCh5Budget');
function af() {
  return a8();
}
v(af, 'ch5RolloutKind');
var aT = {
    'purple': 0x6,
    'orange': 0x6
  },
  aL = {
    'purple': 0x4,
    'orange': 0x3
  },
  aG = {
    'purple': 0x30,
    'orange': 0x18
  };
function aW() {
  for (let z of s.all('obj_writer')) if (!z.destroyed && z.image_alpha !== 0x0 && (z.halt === 0x1 || z.halt === 0x2 || z.halt === 0x4)) return !0x0;
  return !0x1;
}
v(aW, 'writerParked');
function aX(cA) {
  if (zB()) return !0x0;
  let cb = a8();
  if (!cb || !T.autoplay) return zy.rc && (zy.rc = null, zy.rcI = 0x0), !0x1;
  if (T.mnfight !== 0x2 && cb !== 'orange') return zy.rc = null, zy.rcHeld = '', !0x1;
  let cB = aT[cb],
    cv = aG[cb];
  if (s.frame !== zy.rcFrame + 0x1 && (zy.rc = null), zy.rcFrame = s.frame, !zy.rc || zy.rcI >= cB || zy.rcI >= zy.rc.length) {
    let cN = performance.now(),
      cK = d(),
      q0 = zy.rc ? zy.rc.slice(zy.rcI) : [],
      q1 = q0.length ? [...q0, ...aF(q0[q0.length - 0x1].replace(/z/g, ''), Math.max(0x0, cv - q0.length))] : null,
      q2 = null,
      q3 = 0x1 / 0x0,
      q4 = 0x0;
    aM > 0x0 && !!q1 && zy.rcN % aL[cb] !== 0x0 && s.frame + 0xc <= (zy.rcCleanUntil | 0x0) ? (q3 = 0x0, q2 = q1, q4 = 0x0, zj.rcTrusted = (zj.rcTrusted | 0x0) + 0x1) : q1 && (q3 = aV(cK, q1, Math.max(cv, q1.length), cb), q2 = q1, q4 = aS, zy.rcCleanUntil = q4 ? 0x0 : s.frame + ak);
    let q5 = !q1 || q4 > 0x0 || zy.rcN % aL[cb] === 0x0,
      q6 = globalThis.__ch5dbgRC && s.frame >= globalThis.__ch5dbgRC[0x0] && s.frame <= globalThis.__ch5dbgRC[0x1] ? [] : null;
    q6 && q1 && q6.push("cont=" + q3.toFixed(0x0));
    let q7 = q1 ? q4 : 0x1 / 0x0,
      q8 = () => performance.now() - cN,
      q9 = () => aM > 0x0 && globalThis.__ch5Cut === !0x0 && (q8() > aM * 0x3 || q8() > aM && q7 === 0x0);
    if (q5) {
      for (let qz of aH(cb, cv)) {
        if (q9()) {
          zj.rcCut = (zj.rcCut | 0x0) + 0x1;
          break;
        }
        let qa = aV(cK, qz, Math.max(cv, qz.length), cb);
        qa < q3 - 1e-9 && (q7 = aS, zy.rcCleanUntil = aS ? 0x0 : s.frame + ak), q6 && q6.push(qz.slice(0x0, 0xc).map(qw => qw || '.').join('') + '=' + qa.toFixed(0x0)), qa < q3 - 1e-9 && (q3 = qa, q2 = qz);
      }
      if (zy.rcCool > 0x0) zy.rcCool--;else {
        if (q3 >= 0x12c) {
          for (let qw of cb === 'orange' ? ax(cv) : aJ(s.first('obj_purplecontrols'), cv)) {
            if (q9()) {
              zj.rcCut = (zj.rcCut | 0x0) + 0x1;
              break;
            }
            let qC = aV(cK, qw, Math.max(cv, qw.length), cb);
            qC < q3 - 1e-9 && (q7 = aS, zy.rcCleanUntil = aS ? 0x0 : s.frame + ak), q6 && q6.push('R' + qw.slice(0x0, 0xc).map(qE => qE || '.').join('') + '=' + qC.toFixed(0x0)), qC < q3 - 1e-9 && (q3 = qC, q2 = qw);
          }
          q3 >= 0x12c && (zy.rcCool = 0x3);
        }
      }
    }
    if (q6) {
      let qE = s.first('obj_purplecontrols'),
        qc = s.first('obj_heart');
      console.log("RC f" + s.frame + '\x20' + cb + (qE ? " mode " + qE.mode + " lane " + qE.lane_x + ',' + qE.lane_y + " og " + qE.x_ongrid + ',' + qE.y_ongrid : '') + " soul " + (qc ? Math.round(qc.x) + ',' + Math.round(qc.y) : '-') + " best " + q2.slice(0x0, 0xc).map(qq => qq || '.').join('') + '=' + q3.toFixed(0x0) + " | " + q6.join('\x20'));
    }
    globalThis.__ch5verify && q2 && (globalThis.__ch5trace = [], aV(cK, q2, Math.max(cv, q2.length), cb), globalThis.__ch5pred = {
      'frame': s.frame,
      'trace': globalThis.__ch5trace,
      'plan': q2.slice()
    }, globalThis.__ch5trace = null), q6 && q2 && (globalThis.__ch5trace = [], aV(cK, q2, Math.max(cv, q2.length), cb), console.log("RCPRED f" + s.frame + '\x20' + globalThis.__ch5trace.join(" | ")), globalThis.__ch5trace = null), q6 && q1 && (globalThis.__ch5trace = [], aV(cK, q1, Math.max(cv, q1.length), cb), console.log("RCCONT f" + s.frame + '\x20' + globalThis.__ch5trace.join(" | ")), globalThis.__ch5trace = null), zy.rc = q2, zy.rcI = 0x0, zy.rcN++, zj.rcDecisions++, zj.rcMs += performance.now() - cN, a2(zj.rcKinds, cb);
  }
  let cP = zy.rc[zy.rcI++] || '';
  cb === 'orange' && T.mnfight !== 0x2 && aW() && (cP = s.frame & 0x1 ? cP.replace(/z/g, '') : cP.includes('z') ? cP : cP + 'z');
  let cy = aE(cP, zy.rcHeld);
  zy.rcHeld = cP, m.synthetic = cy;
  let cj = aC(cP);
  for (let qq of ['up', 'down', 'left', 'right']) m.held[qq] = !!cj[qq];
  return m.held.b1 = !!cj.b1, !0x0;
}
v(aX, 'ch5Step');
var ag = ['left', 'right', 'up', 'down'];
function aY(z) {
  let a = z || {};
  for (let cA of ['b1', 'b2', 'b3']) m.held[cA] = !!a[cA];
  m.synthetic = () => {
    for (let cb of ['b1', 'b2', 'b3']) m.pressed[cb] = !!a[cb], m.held[cb] = !!a[cb];
    for (let cB of ag) a[cB] && (m.pressed[cB] = !0x0, m.held[cB] = !0x0);
  }, z && zj.menuPresses++;
}
v(aY, 'send');
var aD = {
  'fight': 0x0,
  'act': 0x1,
  'magic': 0x1,
  'tech': 0x1,
  'item': 0x2,
  'spare': 0x3,
  'defend': 0x4
};
function aO(z) {
  for (let a = 0x0; a < 0x3; a++) {
    let cA = T.monsterinstance && T.monsterinstance[a];
    if (T.monster[a] === 0x1 && cA && !cA.destroyed && cA.constructor.name === z) return a;
  }
  return -0x1;
}
v(aO, 'slotOf');
function at(z, a) {
  let cA = T.actname && T.actname[z] || [];
  for (let cb = 0x0; cb < 0x6; cb++) if (cA[cb] === a) return cb;
  return -0x1;
}
v(at, 'actIndex');
function ah(z, cA) {
  let cb = T.char[z],
    cB = T.battlespell && T.battlespell[z] || [],
    cv = cb === 0x2 ? T.actnamesus : cb === 0x3 ? T.actnameral : null;
  if (!cv) return -0x1;
  for (let cP = 0x0; cP < 0x3; cP++) {
    let cy = cv[cP] || [],
      cj = 0x0;
    for (let cN = 0x0; cN < cB.length; cN++) if (cB[cN] === -0x1) {
      for (; cj < 0x6 && (!cy[cj] || cy[cj] === '\x20');) cj++;
      if (cy[cj] === cA) return cN;
      cj++;
    }
  }
  return -0x1;
}
v(ah, 'techSlot');
var aR = v(() => T.fighting === 0x1 && T.mnfight === 0x0 && T.myfight === 0x0 && T.charturn >= 0x0 && T.charturn < (T.char ? T.char.length : 0x3) && T.char[T.charturn] > 0x0, 'atMenu');
function aZ(z) {
  let cA = T.charturn,
    cb = T.bmenuno,
    cB = T.bmenucoord,
    cv = cy => cB && cB[cy] ? cB[cy][cA] | 0x0 : 0x0;
  if (cb === 0x0) {
    let cy = cv(0x0),
      cj = aD[z.cmd];
    return cy !== cj ? {
      [(cj - cy + 0x5) % 0x5 <= 0x2 ? 'right' : 'left']: !0x0
    } : {
      'b1': !0x0
    };
  }
  let cP = z.cmd === 'fight' ? 0x1 : z.cmd === 'spare' ? 0xc : z.cmd === 'act' ? 0xb : z.cmd === 'tech' ? 0xd : -0x1;
  if (cb === 0x1 || cb === 0xb || cb === 0xc || cb === 0xd) return cb !== cP ? {
    'b2': !0x0
  } : cv(cb) !== (z.target | 0x0) ? {
    'down': !0x0
  } : {
    'b1': !0x0
  };
  if (cb === 0x9) {
    if (z.cmd !== 'act') return {
      'b2': !0x0
    };
    let cN = cv(0x9),
      cK = z.act | 0x0;
    return cN === cK ? {
      'b1': !0x0
    } : cN >> 0x1 === cK >> 0x1 ? {
      [cN & 0x1 ? 'left' : 'right']: !0x0
    } : {
      [cN < cK ? 'down' : 'up']: !0x0
    };
  }
  if (cb === 0x2) {
    if (z.cmd !== 'tech') return {
      'b2': !0x0
    };
    let q0 = cv(0x2),
      q1 = z.slot | 0x0;
    return q0 === q1 ? {
      'b1': !0x0
    } : q0 >> 0x1 === q1 >> 0x1 ? {
      'right': !0x0
    } : {
      [q0 < q1 ? 'down' : 'up']: !0x0
    };
  }
  return {
    'b2': !0x0
  };
}
v(aZ, 'drive');
function au(z) {
  let cA = zP(),
    cb = T.char[z],
    cB = Number(T.tension) || 0x0,
    cv = (cy, cj) => {
      let cN = aO(cy),
        cK = cN >= 0x0 ? at(cN, cj) : -0x1;
      return cK < 0x0 || (T.actcost[cN][cK] || 0x0) > cB ? null : {
        'cmd': 'act',
        'target': cN,
        'act': cK,
        'name': cj
      };
    },
    cP = (cy, cj) => {
      let cN = aO(cy),
        cK = ah(z, cj);
      return cN < 0x0 || cK < 0x0 || ((T.battlespellcost && T.battlespellcost[z] || [])[cK] || 0x0) > cB ? null : {
        'cmd': 'tech',
        'target': cN,
        'slot': cK,
        'name': cj
      };
    };
  if (cA === 0xdd) return cb === 0x1 ? cv('obj_orange_enemy', 'GetAlong') || {
    'cmd': 'defend'
  } : {
    'cmd': 'defend'
  };
  if (cA === 0xe8) {
    let cy = aO('obj_shinobeetle_enemy');
    if (cy < 0x0) return null;
    let cj = Number(T.mercymod[cy]) || 0x0;
    if (cj >= 0x64) return {
      'cmd': 'spare',
      'target': cy
    };
    if (cb === 0x1) return cv('obj_shinobeetle_enemy', 'Convince') || {
      'cmd': 'spare',
      'target': cy
    };
    if (cb === 0x2) return cP('obj_shinobeetle_enemy', "S-Action") || {
      'cmd': 'defend'
    };
    if (cb === 0x3) return cj + 0x23 + 0x14 >= 0x64 ? {
      'cmd': 'spare',
      'target': cy
    } : cP('obj_shinobeetle_enemy', "R-Action") || {
      'cmd': 'defend'
    };
  }
  if (cA === 0xe0) return cb === 0x1 ? cv('obj_pink_enemy', 'Flirt') || {
    'cmd': 'defend'
  } : T.acting && T.acting[n()] === 0x1 ? cP('obj_pink_enemy', 'Flirt') || {
    'cmd': 'defend'
  } : {
    'cmd': 'defend'
  };
  if (cA === 0xe1) {
    let cN = aO('obj_flowery_enemy');
    if (cb === 0x1 && cN >= 0x0) for (let cK of [0x1, 0x2]) {
      let q0 = (T.actname[cN] || [])[cK];
      if (q0 && q0 !== '\x20' && T.canact[cN][cK] === 0x1) {
        let q1 = cv('obj_flowery_enemy', q0);
        if (q1) return q1;
      }
    }
    return {
      'cmd': 'defend'
    };
  }
  if (cA === 0xde) {
    let q2 = s.first('obj_yellow_enemy'),
      q3 = q2 ? q2.trial_counter | 0x0 : 0x0,
      q4 = q2 && Array.isArray(q2.evidence_obtained) ? !!q2.evidence_obtained[q3] : !0x0;
    return cb === 0x1 ? !q4 && cv('obj_blue_enemy', 'Evidence') || cv('obj_yellow_enemy', 'Justice') || {
      'cmd': 'defend'
    } : {
      'cmd': 'defend'
    };
  }
  if (cA === 0xdc) {
    let q5 = aO('obj_aqua_enemy');
    if (q5 < 0x0) return null;
    if ((Number(T.mercymod[q5]) || 0x0) >= 0x64) return {
      'cmd': 'spare',
      'target': q5
    };
    if (cb !== 0x1) return {
      'cmd': 'defend'
    };
    let q6 = T.monsterinstance[q5],
      q7 = q6 && Array.isArray(q6.act_list) ? q6.act_list : [];
    for (let q8 = 0x0; q8 < 0x6; q8++) if (T.canact[q5][q8] === 0x1 && !q7.includes(q8 + 0x1)) {
      let q9 = T.actname[q5][q8],
        qz = q9 && cv('obj_aqua_enemy', q9);
      if (qz) return qz;
    }
    return {
      'cmd': 'fight',
      'target': q5
    };
  }
  if (cA === 0xea) {
    let qa = aO('obj_trashy_trio');
    if (qa < 0x0) return null;
    let qw = T.monsterinstance[qa],
      qC = qw ? qw.myattackchoice | 0x0 : 0x0;
    if (cb === 0x1) return cv('obj_trashy_trio', qC === 0x0 ? 'CleanUp' : 'LayUp') || {
      'cmd': 'defend'
    };
    if (cb === 0x2) return cP('obj_trashy_trio', "S-Action") || {
      'cmd': 'defend'
    };
    if (cb === 0x3) return cP('obj_trashy_trio', "R-Action") || {
      'cmd': 'defend'
    };
  }
  return null;
}
v(au, 'policy');
function ai() {
  let z = s.first('obj_date_controller');
  if (!z || z.destroyed || z.con !== 0x2) return null;
  let a = s.first('obj_pink_enemy'),
    cA = a ? a.datecount | 0x0 : 0x0,
    cb = z.draw_box_selected | 0x0,
    cB = Array.isArray(z.choiceiscorrect) ? z.choiceiscorrect[cb] === 0x1 : !0x0;
  return z.draw_box_con === 0x0 && z.boxalpha === 0x1 ? cB || z.questioncount === 0x0 && cA === 0x1 ? {
    'up': !0x0
  } : cA === 0x4 ? {} : {
    'right': !0x0
  } : {};
}
v(ai, 'dateKeys');
function aQ() {
  let z = s.first('obj_yellow_trial_manager');
  if (!z || z.destroyed || !z.can_control || !z.current_perp || z.current_perp === -0x1) return null;
  let cA = z.trial_id,
    cb = (Array.isArray(z.trial_array) || z.trial_array) && z.trial_array[cA],
    cB = cb ? cb.culprit : -0x1;
  if (!z.evidence_mode) {
    let cN = z.current_perp;
    return cN && cN.perp_index !== cB ? {
      'right': !0x0
    } : {
      'b1': !0x0
    };
  }
  let cv = Array.isArray(z.evidence_list) ? z.evidence_list : [],
    cP = cA === 0x63 ? 0xa : cA,
    cy = cv.findIndex(cK => Array.isArray(cK) && cK[0x2] === cP);
  cy < 0x0 && (cy = cv.findIndex(cK => Array.isArray(cK) && cK[0x2] !== 0x7)), cy < 0x0 && (cy = 0x0);
  let cj = z.evidence_counter | 0x0;
  return globalThis.__ch5dbg && console.log('trial', cA, 'culprit', cB, 'perp', z.current_perp && z.current_perp.perp_index, 'ev', JSON.stringify(cv.map(cK => Array.isArray(cK) ? cK[0x2] : cK)), 'want', cP, 'k', cy, 'c', cj), cj < cy ? {
    'right': !0x0
  } : cj > cy ? {
    'left': !0x0
  } : {
    'b1': !0x0
  };
}
v(aQ, 'trialKeys');
function aI(z) {
  if (!zv() || !T.autoplay) return !0x1;
  if (zb()) return !0x0;
  {
    let cb = aQ();
    if (cb) return a2(zj.plans, zP() + ":trial"), z % 0x3 === 0x0 ? aY(cb) : aY(null), !0x0;
  }
  if (zP() === 0xe0) {
    let cB = ai();
    if (cB) {
      if (a2(zj.plans, "224:date"), z % 0x2 === 0x0) {
        aY(cB);
        for (let cv of ag) m.held[cv] = !!cB[cv];
      } else aY(null);
      return !0x0;
    }
  }
  if (!aR()) return !0x1;
  let a = au(T.charturn);
  if (!a) return !0x1;
  if (a2(zj.plans, zP() + ':' + T.char[T.charturn] + ':' + a.cmd + (a.name ? ':' + a.name : '')), z % 0x4 !== 0x0) return aY(null), !0x0;
  let cA = aZ(a);
  return globalThis.__ch5dbg && console.log("ch5 menu", s.frame, 'ct', T.charturn, 'bm', T.bmenuno, 'coord', JSON.stringify([0x0, 0x1, 0x2, 0x9, 0xb, 0xc, 0xd].map(cP => T.bmenucoord[cP] && T.bmenucoord[cP][T.charturn])), JSON.stringify(a), JSON.stringify(cA)), aY(cA), !0x0;
}
v(aI, 'ch5UI'), y(), y();
var am = {},
  ap = v(() => Y === 'ut' || Y === "ut10", "utOn"),
  aA = new Set(["obj_centeract_parent", "obj_6heal", "obj_6knife_act"]),
  ab = x.filter(([z, a]) => a === "obj_vsflowey_heart" && !aA.has(z)).map(([z]) => z),
  aB = new Set(["obj_gigavine_preview", "obj_gigavine"]),
  av = new Map();
function aP(z) {
  const a = {};
  a.tDTMk = function (cj, cN) {
    return cj === cN;
  }, a.gLwUn = "line", a.qhrEU = "obj_centeract_parent";
  a.ytlcj = "box", a.Xdmoj = function (cj, cN) {
    return cj === cN;
  }, a.wQtep = function (cj, cN) {
    return cj === cN;
  };
  const cB = a;
  let cP = z.constructor.name,
    cy = av.get(cP);
  return cB.tDTMk(cy, void 0) && (cy = aB.has(cP) ? cB.gLwUn : ab.some(cj => z.is(cj)) && !z.is(cB.qhrEU) ? cB.ytlcj : '', av.set(cP, cy)), cB.Xdmoj(cy, cB.ytlcj) && cB.wQtep(z.type, 1) ? '' : cy;
}
v(aP, "hurts");
var ay = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, -1], [-1, 1], [1, 1]],
  aj = 12,
  aN = 3;
function aK() {
  const z = {
    'NJwmc': function (cP, cy) {
      return cP === cy;
    },
    'wZahG': "iTwHP",
    'rfiea': "fTvUu",
    'hEBCi': function (cP, cy) {
      return cP(cy);
    },
    'ZHsvA': function (cP, cy) {
      return cP === cy;
    },
    'rxzue': "line",
    'rvpCB': function (cP, cy) {
      return cP / cy;
    },
    'rZYTo': function (cP, cy) {
      return cP * cy;
    },
    'lBpmi': "obj_gigavine",
    'eUBMv': function (cP, cy) {
      return cP + cy;
    },
    'zVzrV': function (cP, cy) {
      return cP > cy;
    },
    'XVmvI': function (cP, cy) {
      return cP - cy;
    },
    'TaBmg': function (cP, cy) {
      return cP - cy;
    },
    'GXMFe': function (cP, cy) {
      return cP - cy;
    },
    'dKrqv': function (cP, cy) {
      return cP + cy;
    },
    'HiBzi': function (cP, cy) {
      return cP + cy;
    },
    'KRVPg': function (cP, cy) {
      return cP < cy;
    }
  };
  let cA = [];
  for (let cP of s.list) {
    {
      if (cP.destroyed || cP.visible === !1) continue;
      let q2 = aP(cP);
      if (!q2) continue;
      if (q2 === "line") {
        let q9 = ((cP.constructor.name === "obj_gigavine" ? cP.image_angle : cP.direction) || 0) * Math.PI / 180;
        cA.push({
          'line': !0,
          'x': cP.x,
          'y': cP.y,
          'ux': Math.cos(q9),
          'uy': -Math.sin(q9),
          'hw': 10 + aN
        });
        continue;
      }
      let q3, q4, q5, q6;
      try {
        q3 = cP.bbox_left, q4 = cP.bbox_top, q5 = cP.bbox_right, q6 = cP.bbox_bottom;
      } catch {
        continue;
      }
      if (![q3, q4, q5, q6].every(Number.isFinite) || q5 - q3 > 700 || q6 - q4 > 600) continue;
      let q7 = Number.isFinite(cP.xprevious) ? cP.x - cP.xprevious : 0,
        q8 = Number.isFinite(cP.yprevious) ? cP.y - cP.yprevious : 0;
      cA.push({
        'l': q3 - aN,
        't': q4 - aN,
        'r': q5 + aN,
        'b': q6 + aN,
        'vx': Math.abs(q7) < 40 ? q7 : 0,
        'vy': Math.abs(q8) < 40 ? q8 : 0
      });
    }
  }
  return cA;
}
v(aK, "threats");
function w0(z, a, cA, cb) {
  const cB = {};
  cB.lWRiA = function (q1, q2) {
    return q1 - q2;
  }, cB.dWKSB = function (q1, q2) {
    return q1 + q2;
  }, cB.ucRKO = function (q1, q2) {
    return q1 * q2;
  };
  cB.MdAXw = function (q1, q2) {
    return q1 * q2;
  };
  cB.JboWO = function (q1, q2) {
    return q1 < q2;
  }, cB.JpNZf = function (q1, q2) {
    return q1 > q2;
  };
  cB.aQFZO = function (q1, q2) {
    return q1 * q2;
  }, cB.ONMyR = function (q1, q2) {
    return q1 * q2;
  };
  const cj = cB;
  let cN = cj.lWRiA(a, z.x),
    cK = cj.lWRiA(cA, z.y),
    q0 = cj.dWKSB(cj.ucRKO(cN, z.ux), cj.MdAXw(cK, z.uy));
  return cj.JboWO(q0, -cb) || cj.JpNZf(q0, 640) ? !1 : cj.JboWO(Math.abs(cj.dWKSB(cj.aQFZO(cN, -z.uy), cj.ONMyR(cK, z.ux))), cj.dWKSB(z.hw, cb));
}
v(w0, "lineHits");
function w1() {
  const cb = {
    'iaIOV': function (q8) {
      return q8();
    },
    'EFMbY': "obj_vsflowey_heart",
    'CfIyy': "left",
    'haDmG': "right",
    'EeYTl': "down",
    'DUAaR': function (q8, q9) {
      return q8 !== q9;
    },
    'ZupVH': "obj_flowey_master",
    'peOJh': function (q8) {
      return q8();
    },
    'orJWK': function (q8, q9) {
      return q8 - q9;
    },
    'HuPlQ': function (q8, q9) {
      return q8 + q9;
    },
    'mZfgH': function (q8, q9) {
      return q8 <= q9;
    },
    'csCBE': function (q8, q9) {
      return q8 > q9;
    },
    'EGqnK': function (q8, q9) {
      return q8 < q9;
    },
    'GsLXp': function (q8, q9) {
      return q8 > q9;
    },
    'qRjHq': function (q8, q9) {
      return q8 < q9;
    },
    'ySrtv': function (q8, q9) {
      return q8 - q9;
    },
    'bBPBs': function (q8, q9) {
      return q8 < q9;
    },
    'Gzfgy': function (q8, q9) {
      return q8 > q9;
    },
    'tCGrT': function (q8, q9) {
      return q8 > q9;
    },
    'qkcOe': function (q8, q9) {
      return q8 > q9;
    },
    'nRymD': function (q8, q9) {
      return q8 < q9;
    },
    'QnOVi': function (q8, q9) {
      return q8 / q9;
    },
    'uyuEL': function (q8, q9) {
      return q8 + q9;
    },
    'ewgQx': function (q8, q9) {
      return q8 === q9;
    },
    'zSrEc': "LWxKJ",
    'hseZE': function (q8, q9, qz, qa, qw) {
      return q8(q9, qz, qa, qw);
    },
    'JrUWT': function (q8, q9) {
      return q8 / q9;
    },
    'jxUIz': "gEzRr",
    'JUUqg': function (q8, q9) {
      return q8 + q9;
    },
    'NkkcD': function (q8, q9) {
      return q8 * q9;
    },
    'KwzSZ': function (q8, q9) {
      return q8 + q9;
    },
    'KxWKE': function (q8, q9) {
      return q8 * q9;
    },
    'uakVy': function (q8, q9) {
      return q8 * q9;
    },
    'IbOcx': function (q8, q9) {
      return q8 >= q9;
    },
    'ZnrkI': function (q8, q9) {
      return q8 <= q9;
    },
    'aEHrc': function (q8, q9) {
      return q8 >= q9;
    },
    'vLTsl': function (q8, q9) {
      return q8 === q9;
    },
    'NZdkb': "mdpxC",
    'EQWkc': "XdJZr",
    'xFMiV': function (q8, q9) {
      return q8 === q9;
    },
    'kaVVm': function (q8, q9) {
      return q8 - q9;
    },
    'ghTne': function (q8, q9) {
      return q8 - q9;
    },
    'VJmyM': function (q8, q9) {
      return q8 - q9;
    },
    'eVWRF': function (q8, q9) {
      return q8 + q9;
    },
    'clPWg': function (q8, q9) {
      return q8 / q9;
    },
    'DSyKm': function (q8, q9) {
      return q8 / q9;
    },
    'Lizin': function (q8, q9) {
      return q8 - q9;
    },
    'QHYMY': function (q8, q9) {
      return q8 * q9;
    },
    'eWcTR': function (q8, q9) {
      return q8 < q9;
    },
    'krZrE': function (q8, q9) {
      return q8 - q9;
    },
    'PvLxW': function (q8, q9) {
      return q8 < q9;
    },
    'iCoPx': function (q8, q9) {
      return q8 < q9;
    }
  };
  if (!ap()) return null;
  let cB = s.first("obj_vsflowey_heart");
  if (!cB || cB.destroyed) return null;
  for (let q8 of ["left", "right", 'up', "down"]) m.held[q8] = !1;
  if (cB.move !== 1) return !0;
  let cP = s.first("obj_flowey_master"),
    cy = !!(cP && cP.darkmode),
    cj = Math.abs(cB.sprite_width) || 16,
    cN = Math.abs(cB.sprite_height) || 16,
    cK = 322,
    q0 = 400,
    q1 = s.list.find(q9 => !q9.destroyed && q9.visible !== !1 && q9.is && q9.is("obj_centeract_parent"));
  q1 && (cK = q1.x, q0 = q1.y);
  let q2 = aK(),
    q3 = cB.bbox_left - cB.x,
    q4 = cB.bbox_top - cB.y,
    q5 = cB.bbox_right - cB.bbox_left,
    q6 = cB.bbox_bottom - cB.bbox_top,
    q7 = null;
  for (let [q9, qz] of ay) {
    let qa = cB.x,
      qw = cB.y,
      qC = aj + 1,
      qE = 1000000000;
    for (let qV = 1; qV <= aj && qC > aj; qV++) {
      q9 < 0 && qa > 0 && (cy || qa > 108) && (qa -= 4), q9 > 0 && qa < 640 - cj && (cy || qa < 512) && (qa += 4), qz < 0 && qw > 0 && (cy || qw > 268) && (qw -= 4), qz > 0 && qw < 480 - cN && (qw += 4);
      let qF = qa + q3,
        qH = qw + q4,
        qx = qF + q5,
        qJ = qH + q6,
        qU = (qF + qx) / 2,
        qd = (qH + qJ) / 2;
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
          let qf = qM.l + qM.vx * qV,
            qT = qM.r + qM.vx * qV,
            qL = qM.t + qM.vy * qV,
            qG = qM.b + qM.vy * qV;
          if (qx >= qf && qF <= qT && qJ >= qL && qH <= qG) {
            {
              qC = qV;
              break;
            }
          }
          qV === aj && (qE = Math.min(qE, Math.max(qf - qx, qF - qT, qL - qJ, qH - qG)));
        }
      }
    }
    let qc = qa + cj / 2,
      qq = qw + cN / 2,
      qS = Math.hypot(cK - qc, q0 - qq),
      qk = qC * 1000 - (qE < 24 ? (24 - qE) * 4 : 0) - qS * (q1 ? 1 : 0.25);
    (!q7 || qk > q7.score) && (q7 = {
      'score': qk,
      'dx': q9,
      'dy': qz
    });
  }
  return q7.dx < 0 && (m.held.left = !0), q7.dx > 0 && (m.held.right = !0), q7.dy < 0 && (m.held.up = !0), q7.dy > 0 && (m.held.down = !0), !0;
}
v(w1, "floweyStep");
function w2() {
  const z = {
    'aKDqf': function (cv) {
      return cv();
    },
    'odpRb': "obj_fakeheart"
  };
  if (!ap()) return !1;
  let cb = s.first("obj_fakeheart");
  return !!(cb && !cb.destroyed && s.list.some(cv => !cv.destroyed && cv.is && cv.is("obj_anybt")));
}
v(w2, "fakeChoice");
function w3() {
  const a = {
    'egfpV': function (q0) {
      return q0();
    },
    'DAWto': "obj_fakeheart",
    'iOntC': "left",
    'kYQTn': "right",
    'iOfAU': "down",
    'OqVSd': function (q0, q1) {
      return q0 - q1;
    },
    'sGecU': function (q0, q1) {
      return q0 / q1;
    },
    'IbkAs': function (q0, q1) {
      return q0 + q1;
    },
    'lqfDs': function (q0, q1) {
      return q0 / q1;
    },
    'PKcxC': function (q0, q1) {
      return q0 + q1;
    },
    'cClWH': function (q0, q1) {
      return q0 / q1;
    },
    'WbWKY': function (q0, q1) {
      return q0 > q1;
    },
    'XSxiZ': function (q0, q1) {
      return q0 - q1;
    },
    'HOxkO': function (q0, q1) {
      return q0 > q1;
    },
    'JfFOg': function (q0, q1) {
      return q0 > q1;
    },
    'hHwpC': function (q0, q1) {
      return q0 - q1;
    }
  };
  if (!w2()) return !1;
  let cA = s.first("obj_fakeheart"),
    cb = s.list.filter(q0 => !q0.destroyed && q0.is && q0.is("obj_anybt"));
  for (let q0 of ["left", "right", 'up', "down"]) m.held[q0] = !1;
  let cP = cb.find(q1 => /sparebt/.test(String(q1.sprite_index))) || cb[cb.length - 1],
    cy = (cA.bbox_left + cA.bbox_right) / 2,
    cj = (cA.bbox_top + cA.bbox_bottom) / 2,
    cN = (cP.bbox_left + cP.bbox_right) / 2,
    cK = (cP.bbox_top + cP.bbox_bottom) / 2;
  return cN - cy > 3 ? m.held.right = !0 : cy - cN > 3 && (m.held.left = !0), cK - cj > 3 ? m.held.down = !0 : cj - cK > 3 && (m.held.up = !0), !0;
}
v(w3, "fakeHeartStep");
function w4(z) {
  const a = {
    'bBqvg': function (cy, cj) {
      return cy === cj;
    },
    'EUELG': function (cy, cj) {
      return cy | cj;
    },
    'FSRgN': function (cy, cj) {
      return cy - cj;
    },
    'MfAXE': function (cy, cj) {
      return cy + cj;
    },
    'QKlIh': function (cy, cj) {
      return cy - cj;
    },
    'hJlOP': function (cy, cj) {
      return cy(cj);
    },
    'YZnZb': function (cy, cj) {
      return cy(cj);
    },
    'RqAId': function (cy, cj) {
      return cy(cj);
    },
    'RCJrC': function (cy, cj) {
      return cy(cj);
    },
    'tojoi': function (cy, cj) {
      return cy < cj;
    }
  };
  if (!z || z.destroyed || z.mercymod === void 0) return !1;
  let cv = z.myself | 0,
    cP = Number(T.monsterhp[cv]) - Number(T.at) - Number(T.wstrength) + Number(T.monsterdef[cv]) - Number(z.mercymod);
  return Number.isFinite(cP) && cP < 0;
}
v(w4, "sparable");
function w5() {
  const z = {};
  z.yQSBy = function (cP, cy) {
    return cP < cy;
  }, z.SbeeU = function (cP, cy) {
    return cP === cy;
  };
  const cA = z;
  let cB = [];
  for (let cP = 0; cA.yQSBy(cP, 6); cP++) T.choices && cA.SbeeU(T.choices[cP], 1) && cB.push(cP);
  return cB;
}
v(w5, "liveActs");
function w6() {
  const z = {};
  z.nThuB = function (cK, q0) {
    return cK | q0;
  }, z.Tbwhn = function (cK, q0) {
    return cK === q0;
  }, z.iHLNL = "ut10", z.DcQuF = function (cK, q0) {
    return cK >= q0;
  }, z.VBEEV = function (cK, q0) {
    return cK <= q0;
  };
  z.QByGh = function (cK, q0) {
    return cK === q0;
  }, z.HLYSl = function (cK, q0) {
    return cK === q0;
  }, z.QJrNl = function (cK, q0) {
    return cK | q0;
  }, z.xYEXO = function (cK, q0) {
    return cK !== q0;
  }, z.QaBNO = "SBKqC", z.uyRGD = function (cK, q0) {
    return cK === q0;
  }, z.HIYZs = function (cK, q0) {
    return cK === q0;
  }, z.IqEby = function (cK, q0) {
    return cK >= q0;
  }, z.iyCrn = function (cK, q0) {
    return cK <= q0;
  }, z.LthNV = "cycle";
  const cA = z;
  let cb = cA.nThuB(T.battlegroup, 0);
  const cB = {};
  cB.col = 0x3, cB.spare = !0;
  if (cA.Tbwhn(Y, cA.iHLNL)) return cA.Tbwhn(cb, 95) ? cB : null;
  const cP = {};
  cP.col = 0x1, cP.act = 0x0;
  if (cA.DcQuF(cb, 87) && cA.VBEEV(cb, 90)) return cP;
  if (cA.QByGh(cb, 256)) {
    let cK = T.flag || [];
    if (cA.HLYSl(cA.QJrNl(cK[501], 0), 1)) {
      if (cA.xYEXO(cA.QaBNO, cA.QaBNO)) {
        [q0, O] = r;
        let q1 = h + 0xdc;
        if (R < q1 && Z > u + 0x1) {
          let q2 = (q1 - j) / (N - z0);
          z1 = q1, z2 = z3 + (z4 - z5) * q2;
        }
      } else {
        let q3 = [[505, 0], [507, 1], [508, 2], [506, 3]].find(([q5]) => !(cK[q5] | 0));
        const q4 = {};
        return q4.col = 0x1, q4.act = q3 ? q3[1] : 0, q4;
      }
    }
    const q0 = {};
    return q0.col = 0x1, q0.act = 0x0, q0;
  }
  const cy = {};
  cy.col = 0x1, cy.act = 0x3;
  const cN = {};
  return cN.col = 0x3, cN.spare = !0, cA.uyRGD(cb, 57) || cA.HIYZs(cb, 80) ? cy : cA.IqEby(cb, 82) && cA.iyCrn(cb, 86) ? [0, 1, 2].map(q5 => T.monster && T.monster[q5] === 1 ? T.monsterinstance[q5] : null).filter(Boolean).some(w4) ? cN : {
    'col': 0x1,
    'act': cA.LthNV
  } : null;
}
v(w6, "menuPlan");
function w7() {
  const z = {
    'MaJPM': function (cy) {
      return cy();
    },
    'pPxUO': function (cy, cj) {
      return cy !== cj;
    },
    'EKCzU': "room_battle",
    'bNDZk': "obj_battlecontroller",
    'wqvHq': function (cy, cj) {
      return cy !== cj;
    },
    'hnroT': function (cy) {
      return cy();
    },
    'xonwA': function (cy, cj) {
      return cy !== cj;
    },
    'bvrBI': function (cy, cj) {
      return cy % cj;
    },
    'DJwRR': function (cy, cj) {
      return cy | cj;
    },
    'HLDWx': function (cy, cj) {
      return cy(cj);
    },
    'VRlbL': function (cy, cj) {
      return cy === cj;
    },
    'SCGIF': function (cy, cj) {
      return cy === cj;
    },
    'lGTbU': function (cy, cj) {
      return cy(cj);
    },
    'aDLIx': "right",
    'DDpgO': function (cy, cj) {
      return cy === cj;
    },
    'RWDmr': function (cy, cj) {
      return cy === cj;
    },
    'shzsq': function (cy, cj) {
      return cy | cj;
    },
    'TFAkJ': function (cy, cj) {
      return cy === cj;
    },
    'QBLSt': function (cy, cj) {
      return cy !== cj;
    },
    'gWGDU': "VLtOL",
    'ZpsdM': "cycle",
    'wnOnj': function (cy, cj) {
      return cy !== cj;
    },
    'tioRk': "APmDq",
    'VsKNG': "mpRzp",
    'locSc': function (cy, cj) {
      return cy | cj;
    },
    'kDaeI': function (cy, cj) {
      return cy(cj);
    },
    'RHkST': function (cy, cj) {
      return cy(cj);
    },
    'CYopP': function (cy, cj) {
      return cy != cj;
    },
    'woLRS': function (cy, cj) {
      return cy >= cj;
    },
    'vQQsi': function (cy, cj) {
      return cy >= cj;
    },
    'NocLX': "left",
    'BonDf': function (cy, cj) {
      return cy % cj;
    },
    'xvYfx': function (cy, cj) {
      return cy < cj;
    },
    'OvvRe': "down"
  };
  if (!ap() || T.fightRoom !== "room_battle" || !s.first("obj_battlecontroller") || T.mnfight !== 0 || T.myfight !== 0 || T.battleover) return null;
  let a = w6();
  if (!a) return null;
  if ((s.frame | 0) % 3 !== 0) return '';
  let cB = T.bmenucoord;
  if (!cB) return null;
  let cv = Number(T.bmenuno);
  if (cv === 0) return (Number(cB[0]) | 0) === a.col ? 'b1' : "right";
  if (cv === 1 || cv === 2) return 'b1';
  if (cv === 4) return (Number(cB[4]) | 0) === 0 ? 'b1' : 'up';
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
      return cN >= 3 != cj >= 3 ? cj >= 3 ? "right" : "left" : cN % 3 !== cj % 3 ? cN % 3 < cj % 3 ? "down" : 'up' : 'b1';
    }
  }
  return null;
}
v(w7, "utMenuAction");
const w8 = {};
w8.wait = !0;
const w9 = {};
w9.rollout = !0;
var wz = w8,
  wa = w9;
function ww(z) {
  const a = {
    'wvPaI': function (cN) {
      return cN();
    },
    'JtjeE': function (cN, cK) {
      return cN !== cK;
    },
    'QGPqh': "room_battle",
    'SPmGi': function (cN, cK) {
      return cN(cK);
    },
    'HMTXY': "obj_sansb_body",
    'uFKQo': "obj_s_fakefightbt",
    'VFKJr': function (cN, cK) {
      return cN && cK;
    },
    'vbfDB': function (cN, cK) {
      return cN === cK;
    },
    'shDvI': "obj_questionasker",
    'QyMqP': function (cN, cK) {
      return cN === cK;
    },
    'ShmiQ': function (cN, cK) {
      return cN === cK;
    },
    'gsMTX': "jvlam",
    'tescH': "obj_answernodule"
  };
  if (!ap() || !z || z.destroyed || T.fightRoom !== "room_battle") return null;
  if (wJ(z)) return wa;
  let cb = null,
    cB = s.first("obj_sansb_body"),
    cv = s.first("obj_s_fakefightbt");
  cB && cv && !cv.destroyed && cv.con === 0 && (cb = cB.asleep === 1 ? cv : cB.sleep_c === 1 ? wz : null);
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
    'oIMMy': function (cK, q0) {
      return cK(q0);
    },
    'oTqmb': function (cK, q0) {
      return cK(q0);
    },
    'CpQxF': "left",
    'Maqtc': "right",
    'msUNh': "down",
    'EBiZM': function (cK, q0) {
      return cK === q0;
    },
    'mtluL': function (cK, q0) {
      return cK === q0;
    },
    'qfYpE': "obj_s_fakefightbt",
    'BbTJz': function (cK, q0) {
      return cK !== q0;
    },
    'OpsWO': function (cK, q0) {
      return cK / q0;
    },
    'NCvLj': function (cK, q0) {
      return cK + q0;
    },
    'cxUoA': function (cK, q0) {
      return cK / q0;
    },
    'bSISP': function (cK, q0) {
      return cK + q0;
    },
    'jLoNq': function (cK, q0) {
      return cK / q0;
    },
    'QXNAb': function (cK, q0) {
      return cK > q0;
    },
    'tfbdg': function (cK, q0) {
      return cK - q0;
    },
    'TmEtd': function (cK, q0) {
      return cK > q0;
    }
  };
  if (wQ(z)) return !0;
  let cb = ww(z);
  if (!cb) return !1;
  for (let cK of ["left", "right", 'up', "down"]) m.held[cK] = !1;
  if (cb === wz || cb === wa) return !0;
  if (cb.is && cb.is("obj_s_fakefightbt")) return cb.on !== 1 && (m.held.left = !0, m.held.down = !0), !0;
  let cP = (z.bbox_left + z.bbox_right) / 2,
    cy = (z.bbox_top + z.bbox_bottom) / 2,
    cj = (cb.bbox_left + cb.bbox_right) / 2,
    cN = (cb.bbox_top + cb.bbox_bottom) / 2;
  return cj - cP > 2 ? m.held.right = !0 : cP - cj > 2 && (m.held.left = !0), cN - cy > 2 ? m.held.down = !0 : cy - cN > 2 && (m.held.up = !0), !0;
}
v(wC, "heartGoalStep");
function we() {
  const cA = {
    'mIPmd': "obj_heart",
    'hVnba': function (cP, cy) {
      return cP(cy);
    },
    'hiNbf': "obj_s_fakefightbt",
    'zEszt': function (cP, cy) {
      return cP === cy;
    },
    'QrCdN': function (cP, cy) {
      return cP % cy;
    },
    'uBgry': function (cP, cy) {
      return cP | cy;
    }
  };
  let cb = s.first("obj_heart"),
    cB = ww(cb);
  return cB && cB.is && cB.is("obj_s_fakefightbt") ? cB.on === 1 && (s.frame | 0) % 4 === 0 : null;
}
v(we, "goalConfirm");
var wE = null;
function wc() {
  const z = {
    'yAhxw': function (cP, cy) {
      return cP(cy);
    },
    'bofsJ': function (cP, cy) {
      return cP === cy;
    },
    'gHOGC': "EqPFI",
    'QPAAg': "ctx"
  };
  if (wE) return wE;
  let cA = l(A),
    cb = cA.ctx;
  try {
    {
      const cP = {};
      cP.get = () => cb, cP.set = () => {}, cP.configurable = !0, Object.defineProperty(cA, "ctx", cP);
    }
  } catch {}
  return wE = cA;
}
v(wc, "gfx10");
const wq = {};
wq.plan = null, wq.trace = null, wq.i = 0x0, wq.n = 0x0, wq.frame = -9, wq.held = '', wq.turn = -1, wq.t0 = -1, wq.route = !1;
var wS = wq;
function wk() {
  return {
    ...wS,
    'plan': wS.plan ? wS.plan.slice() : null,
    'trace': wS.trace ? wS.trace.slice() : null
  };
}
v(wk, "utSaveState");
function wV(z) {
  const cA = {
    'ygcsJ': function (cv) {
      return cv();
    }
  };
  z ? (Object.assign(wS, z), wS.plan = z.plan ? z.plan.slice() : null, wS.trace = z.trace ? z.trace.slice() : null) : wF();
}
v(wV, "utLoadState");
function wF() {
  wS.plan = null, wS.trace = null, wS.i = 0, wS.n = 0, wS.frame = -9, wS.held = '', wS.turn = -1, wS.t0 = -1, wS.route = !1;
}
v(wF, "utResetState");
const wo = {};
wo.decisions = 0x0, wo.rollouts = 0x0, wo.frames = 0x0, wo.ms = 0x0;
var wH = wo,
  wx = {};
for (let [qb, qs] of Object.entries(am)) {
  let qB = [];
  for (let [qP, qy] of qs.keys) for (let qj = 0; qj < qP; qj++) qB.push(qy);
  const qv = {};
  qv.keys = qB, qv.at = qs.at, wx[qb] = qv;
}
function wJ(z) {
  const cA = {};
  cA.beQyR = function (cj, cN) {
    return cj !== cN;
  }, cA.AXIel = "ut10";
  cA.lMQQS = "room_battle", cA.ONSTP = function (cj, cN) {
    return cj !== cN;
  };
  cA.EIiPc = function (cj, cN) {
    return cj | cN;
  }, cA.inOlP = function (cj, cN) {
    return cj === cN;
  }, cA.kaGuc = "obj_battlecontroller", cA.DwkrB = function (cj, cN) {
    return cj === cN;
  }, cA.YoXmS = "obj_sans_bulldozer", cA.mpAaq = "idle", cA.zbvHL = "sans", cA.FXIRy = "sun";
  const cv = cA;
  if (cv.beQyR(Y, cv.AXIel) || cv.beQyR(T.fightRoom, cv.lMQQS) || cv.ONSTP(cv.EIiPc(T.mnfight, 0), 2) || !z || z.destroyed || z.force_lock || !(cv.inOlP(z.movement, 1) || cv.inOlP(z.movement, 2))) return null;
  let cP = s.first(cv.kaGuc);
  if (!cP || cv.DwkrB(cP.runaway, 1)) return null;
  let cy = cv.EIiPc(T.battlegroup, 0);
  return cv.inOlP(cy, 95) ? s.first(cv.YoXmS) ? cv.mpAaq : cv.zbvHL : cv.DwkrB(cy, 201) ? cv.FXIRy : null;
}
v(wJ, "ut10Kind");
function wU(z) {
  const a = {
    'IicZL': function (cj, cN) {
      return cj(cN);
    },
    'xwnby': function (cj, cN) {
      return cj === cN;
    },
    'xfNDt': "sun",
    'bygBF': function (cj, cN) {
      return cj !== cN;
    },
    'ZPZuy': "sans",
    'WzgPu': "obj_sansb",
    'SFAan': function (cj, cN) {
      return cj === cN;
    },
    'CITAG': function (cj, cN) {
      return cj | cN;
    },
    'Gjfzr': function (cj, cN) {
      return cj - cN;
    },
    'cTWHR': function (cj, cN) {
      return cj === cN;
    },
    'fEPzU': function (cj, cN) {
      return cj >= cN;
    }
  };
  let cA = wJ(z);
  if (cA === "sun") return !0;
  if (cA !== "sans") return !1;
  let cP = s.first("obj_sansb"),
    cy = cP ? (cP.part | 0) === 4 ? 4 : (cP.part | 0) - 1 : -1;
  return wS.turn === cy && wS.t0 >= 0 ? !wS.route : !wx[cy];
}
v(wU, "ut10Searches");
const wd = {};
wd.u = 'up', wd.d = "down", wd.l = "left", wd.r = "right";
var wM = wd;
function wl(z) {
  const a = {};
  a.BZqMG = "left", a.WWQrb = "right";
  a.sQKWH = "down", a.ckJXO = function (cj, cN) {
    return cj || cN;
  };
  const cy = a;
  for (let cj of [cy.BZqMG, cy.WWQrb, 'up', cy.sQKWH]) m.held[cj] = !1;
  for (let cN of cy.ckJXO(z, '')) wM[cN] && (m.held[wM[cN]] = !0);
}
v(wl, "hold10");
var wf = 0;
function wT(z, a, cA) {
  const cb = {
    'ZcfoX': "left",
    'LtxIW': "right",
    'Oyaak': "down",
    'prTcb': function (qa, qw) {
      return qa(qw);
    },
    'ZdRZs': function (qa, qw) {
      return qa(qw);
    },
    'dDZHq': function (qa, qw) {
      return qa(qw);
    },
    'qAbJU': function (qa, qw) {
      return qa(qw);
    },
    'vuoVA': function (qa, qw) {
      return qa(qw);
    },
    'YsnJD': function (qa) {
      return qa();
    },
    'NYamL': function (qa, qw) {
      return qa !== qw;
    },
    'jhLKm': "ciMry",
    'LUazQ': "hUNjm",
    'oTByS': function (qa, qw) {
      return qa < qw;
    },
    'ehnGP': function (qa, qw) {
      return qa !== qw;
    },
    'XmneP': function (qa, qw) {
      return qa - qw;
    },
    'oSDuk': function (qa, qw, qC) {
      return qa(qw, qC);
    },
    'azBCi': function (qa, qw) {
      return qa(qw);
    },
    'yrzTI': function (qa, qw) {
      return qa === qw;
    },
    'aKqAu': "jgeMo",
    'aPrxg': "CSDDK",
    'jqVoC': function (qa, qw) {
      return qa * qw;
    },
    'CbWXJ': function (qa, qw) {
      return qa + qw;
    },
    'uMTOS': function (qa, qw) {
      return qa / qw;
    },
    'OJDLv': function (qa, qw) {
      return qa - qw;
    },
    'BYjtb': function (qa, qw) {
      return qa !== qw;
    },
    'sqzIK': "obj_heart",
    'krRya': function (qa, qw) {
      return qa && qw;
    },
    'neVKj': "tOwds",
    'dWIjL': function (qa, qw) {
      return qa / qw;
    },
    'edlke': function (qa, qw) {
      return qa + qw;
    },
    'wzPcC': function (qa, qw) {
      return qa / qw;
    },
    'jxzex': function (qa, qw) {
      return qa + qw;
    },
    'FPEHA': function (qa, qw) {
      return qa - qw;
    },
    'qOoEv': function (qa, qw) {
      return qa - qw;
    },
    'GFMvS': "qflDY",
    'tiDpS': "DWLRd",
    'nHEvm': function (qa, qw) {
      return qa(qw);
    },
    'YomwU': function (qa) {
      return qa();
    },
    'nfBcP': function (qa, qw) {
      return qa(qw);
    }
  };
  let cj = m.synthetic,
    cN = {};
  for (let qa of [cb.ZcfoX, cb.LtxIW, 'up', cb.Oyaak, 'b1', 'b2']) cN[qa] = m.held[qa];
  let q0 = cb.prTcb(Number, T.hp) || 0,
    q1 = T.mnfight,
    q2 = T.idealborder || [],
    q3 = cb.ZdRZs(Number, q2[0]) || 32,
    q4 = cb.dDZHq(Number, q2[1]) || 602,
    q5 = cb.qAbJU(Number, q2[2]) || 250,
    q6 = cb.vuoVA(Number, q2[3]) || 385,
    q7 = 0,
    q8 = 0,
    q9 = cb.YsnJD(r);
  cb.qAbJU(g, !1), cb.YsnJD(D);
  try {
    if (cb.NYamL(cb.jhLKm, cb.LUazQ)) {
      for (let qC = 0; cb.oTByS(qC, cA); qC++) {
        let qE = cb.ehnGP(a[qC], void 0) ? a[qC] : a[cb.XmneP(a.length, 1)];
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
            let qq = cN(qE),
              qS = qq >= 0x0 ? q0(qq, q1) : -0x1;
            return qS < 0x0 || (q2.actcost[qq][qS] || 0x0) > q3 ? null : {
              'cmd': 'act',
              'target': qq,
              'act': qS,
              'name': g
            };
          } else {
            q7 += cb.jqVoC(cb.XmneP(q0, qc), cb.CbWXJ(10, cb.uMTOS(cb.jqVoC(10, cb.OJDLv(cA, qC)), cA)));
            break;
          }
        }
        if (T.battleover || cb.BYjtb(T.mnfight, q1)) break;
      }
      let qw = s.first(cb.sqzIK);
      if (wf = qw ? Math.round(qw.x) : -1, cb.krRya(qw, !q7)) {
        if (cb.yrzTI(cb.neVKj, cb.neVKj)) {
          let qk = cb.uMTOS(cb.CbWXJ(qw.bbox_left, qw.bbox_right), 2),
            qV = cb.dWIjL(cb.edlke(qw.bbox_top, qw.bbox_bottom), 2);
          q7 += cb.jqVoC(cb.edlke(cb.uMTOS(Math.abs(cb.XmneP(qk, cb.wzPcC(cb.jxzex(q3, q4), 2))), Math.max(1, cb.FPEHA(q4, q3))), cb.uMTOS(Math.abs(cb.qOoEv(qV, cb.wzPcC(cb.CbWXJ(q5, q6), 2))), Math.max(1, cb.qOoEv(q6, q5)))), 2);
        } else {
          let qF = 0x3e7;
          for (let [qH, qx] of q6(q1, q6)) {
            if (q7 >= qH - 0x1 && qw <= qx + 0x1) return -0x1;
            qH > q5 && qH - B < qF && (qF = qH - v);
          }
          return qF;
        }
      }
    } else {
      let qJ = cA();
      qJ >= 0x0 && (cb -= (qJ - x) * 0x5);
    }
  } finally {
    if (cb.NYamL(cb.GFMvS, cb.tiDpS)) {
      cb.nHEvm(M, z), cb.YomwU(O), cb.nfBcP(g, q9), m.synthetic = cj;
      for (let qU of Object.keys(cN)) m.held[qU] = cN[qU];
    } else {
      for (let qd = 0x3; qd >= 0x1; qd--) if (M.has(q0(q1, q2 - qd))) return qd;
      return 0x0;
    }
  }
  return wH.rollouts++, wH.frames += q8, q7;
}
v(wT, "rollout10");
var wG = v((z, a) => Array.from({
  'length': a
}, () => z), "rep10");
function wW(z) {
  const a = {
    'MbkhE': function (q0, q1, q2) {
      return q0(q1, q2);
    },
    'sNecx': function (q0, q1, q2) {
      return q0(q1, q2);
    },
    'Lcjxr': function (q0, q1) {
      return q0 - q1;
    }
  };
  let cB = [],
    cv = ['', 'l', 'r', 'u', 'd', 'ul', 'ur', 'dl', 'dr'];
  for (let q0 of cv) cB.push(wG(q0, z));
  for (let q1 of cv) q1 && cB.push([...wG(q1, 6), ...wG('', z - 6)]);
  const cK = {};
  return cK.length = z, cB.push(Array.from(cK, (q2, q3) => q3 & 1 ? 'r' : 'l')), cB.push(Array.from({
    'length': z
  }, (q2, q3) => q3 & 1 ? 'd' : 'u')), cB;
}
v(wW, "cands10");
var wX = ['', 'l', 'r', 'u', 'ul', 'ur'];
function wg() {
  const a = {
    'oGqYr': function (cv, cP) {
      return cv < cP;
    },
    'dDzBS': function (cv, cP) {
      return cv <= cP;
    },
    'eBcAB': function (cv, cP, cy) {
      return cv(cP, cy);
    },
    'xCnrN': function (cv, cP) {
      return cv - cP;
    },
    'Rvzpn': function (cv, cP) {
      return cv <= cP;
    },
    'UoJUm': function (cv, cP, cy) {
      return cv(cP, cy);
    },
    'SiZKS': function (cv, cP, cy) {
      return cv(cP, cy);
    },
    'uPZCJ': function (cv, cP) {
      return cv - cP;
    }
  };
  let cA = wX.map(cv => wG(cv, wY));
  for (let cv = 1; cv < wY && cv <= 2; cv++) cA.push([...wG('u', cv), ...wG('', wY - cv)]);
  for (let cP = 1; cP < wY && cP <= 2; cP++) cA.push([...wG('', cP), ...wG('u', wY - cP)]);
  for (let cy of ['l', 'r']) cA.push([cy, ...wG('', wY - 1)]);
  return cA;
}
v(wg, "sansMoves");
var wY = 6,
  wD = 12,
  wO = 8,
  wt = 30,
  wr = v(z => ((z - 312) / 100) ** 2 * 10, "sansCost");
function wh(cA) {
  const cB = {
    'SDkkI': function (q1) {
      return q1();
    },
    'bTqDz': function (q1, q5) {
      return q1 !== q5;
    },
    'JPjEL': "room_battle",
    'uztsy': "obj_battlecontroller",
    'EjQnL': function (q1, q5) {
      return q1 !== q5;
    },
    'qxOFh': function (q1, q5) {
      return q1 !== q5;
    },
    'FkLNY': function (q1, q5) {
      return q1 % q5;
    },
    'nfOQh': function (q1, q5) {
      return q1 | q5;
    },
    'qNGbW': function (q1, q5) {
      return q1(q5);
    },
    'zVFrX': function (q1, q5) {
      return q1 === q5;
    },
    'hJasS': "right",
    'UiCxx': "cycle",
    'XDVfL': function (q1, q5) {
      return q1 % q5;
    },
    'xKqzQ': function (q1, q5) {
      return q1(q5);
    },
    'YRGne': function (q1, q5) {
      return q1 != q5;
    },
    'SyFIY': function (q1, q5) {
      return q1 >= q5;
    },
    'JSHTQ': "left",
    'VbxfC': function (q1, q5) {
      return q1 !== q5;
    },
    'upogg': function (q1, q5) {
      return q1 < q5;
    },
    'mZWLi': "down",
    'MRfvp': function (q1, q5) {
      return q1 === q5;
    },
    'waMSH': "abwIY",
    'fWMKh': "NxEXF",
    'eSdGf': function (q1, q5) {
      return q1 !== q5;
    },
    'KqErn': "RHGjK",
    'cwzPA': function (q1, q5, q6) {
      return q1(q5, q6);
    },
    'BogNO': function (q1, q5) {
      return q1 === q5;
    },
    'gPZcH': "PfzXJ",
    'KWkYp': "obj_heart",
    'GWAmL': function (q1, q5) {
      return q1 === q5;
    },
    'XRqle': function (q1, q5) {
      return q1 | q5;
    },
    'CFykQ': function (q1) {
      return q1();
    },
    'Pfrza': function (q1) {
      return q1();
    },
    'wDBhK': "kNKrz",
    'yRmPS': function (q1, q5, q6) {
      return q1(q5, q6);
    },
    'ZyKqY': function (q1, q5) {
      return q1 - q5;
    },
    'ZStUi': function (q1, q5) {
      return q1 - q5;
    },
    'GKgfN': function (q1, q5) {
      return q1 * q5;
    },
    'Hcxfe': function (q1, q5) {
      return q1(q5);
    },
    'nWPHg': function (q1, q5) {
      return q1(q5);
    },
    'MECLp': function (q1, q5) {
      return q1 < q5;
    },
    'teIfx': "fVUAS",
    'MZCYA': "BKzcu",
    'sNrCC': function (q1, q5) {
      return q1 + q5;
    },
    'KiOdd': function (q1, q5) {
      return q1 === q5;
    },
    'WLnUW': function (q1, q5) {
      return q1 - q5;
    },
    'OhQDC': function (q1, q5) {
      return q1 + q5;
    },
    'VkDqw': function (q1, q5) {
      return q1 + q5;
    },
    'ALmpT': function (q1, q5) {
      return q1 * q5;
    },
    'HSkvT': function (q1, q5) {
      return q1 + q5;
    },
    'PvSum': function (q1, q5) {
      return q1 / q5;
    },
    'FJBxp': function (q1, q5) {
      return q1 / q5;
    },
    'OIZOo': function (q1) {
      return q1();
    },
    'TSiMY': function (q1, q5) {
      return q1 !== q5;
    },
    'YPkhq': "gCnVg",
    'DevfW': function (q1, q5) {
      return q1 >= q5;
    },
    'jmwzv': function (q1, q5) {
      return q1 !== q5;
    },
    'BSLVf': "QkXpU",
    'XLVyK': "VnBPi",
    'XNcIK': function (q1, q5) {
      return q1 < q5;
    }
  };
  wY = globalThis.__sansS | 0 || 6, wD = globalThis.__sansD | 0 || 12, wO = globalThis.__sansW | 0 || 8;
  let cP = m.synthetic,
    cy = {};
  for (let q1 of ["left", "right", 'up', "down", 'b1', 'b2']) cy[q1] = m.held[q1];
  let cN = d(),
    cK = r();
  g(!1), D();
  let q0 = null;
  try {
    {
      let q5 = q9 => {
          const qz = {
            'iisHA': function (qE) {
              return qE();
            },
            'bbAkB': function (qE, qc) {
              return qE !== qc;
            },
            'hNTly': "room_battle",
            'zITXU': "obj_battlecontroller",
            'mpDFV': function (qE, qc) {
              return qE !== qc;
            },
            'NJmXI': function (qE) {
              return qE();
            },
            'FMykx': function (qE, qc) {
              return qE !== qc;
            },
            'ONJMv': function (qE, qc) {
              return qE % qc;
            },
            'nKpoQ': function (qE, qc) {
              return qE | qc;
            },
            'eNCeF': function (qc, qS) {
              return qc(qS);
            },
            'YcOCD': function (qE, qS) {
              return qE === qS;
            },
            'jngtU': "right",
            'mfscw': function (qE, qc) {
              return qE === qc;
            },
            'vTHUs': function (qE, qc) {
              return qE === qc;
            },
            'eNoKS': function (qE, qc) {
              return qE(qc);
            },
            'haCpg': "cycle",
            'lrsRI': function (qE, qc) {
              return qE % qc;
            },
            'DCBMo': function (qE, qc) {
              return qE(qc);
            },
            'TLkUB': function (qE, qc) {
              return qE | qc;
            },
            'OmlDg': function (qE, qc) {
              return qE(qc);
            },
            'AzfPr': function (qE, qc) {
              return qE != qc;
            },
            'usyWt': function (qE, qc) {
              return qE >= qc;
            },
            'HeYtN': "left",
            'AhyBa': function (qE, qc) {
              return qE !== qc;
            },
            'MYvRN': function (qE, qc) {
              return qE < qc;
            },
            'gxBOd': function (qE, qc) {
              return qE % qc;
            },
            'BvTPb': "down",
            'oqMRx': function (qE, qc) {
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
                    const qT = {};
                    return qT.tr = qH, qT.out = !0, qT;
                  }
                }
                wH.frames++;
                let qd = s.first("obj_heart"),
                  qM = s.first("obj_battlecontroller");
                if (qH.push(qd ? [qd.x, qd.y] : [0, 0]), !qd || qM && qM.runaway === 1) return {
                  'tr': qH,
                  'out': !0
                };
                const qf = {};
                qf.tr = qH, qf.out = !1, qf.end = !0;
                if (T.battleover || (T.mnfight | 0) !== 2) return qf;
              }
            }
            const qx = {};
            return qx.tr = qH, qx.out = !1, qx;
          }
        },
        q6 = q9 => q9.out ? 1000000 - q9.len : q9.end ? 0 : q9.cost,
        q7 = [{
          'snap': cN,
          'seq': [],
          'tr': [],
          'cost': 0x0,
          'out': !1,
          'len': 0x0,
          'end': !1
        }],
        q8 = [];
      if (cA && cA.length) {
        let q9 = [...cA, ...wG(cA[cA.length - 1], Math.max(0, wY * wD - cA.length))];
        M(cN);
        let qz = q5(q9);
        cA = q9;
        let qa = s.first("obj_heart");
        q8.push({
          'seq': cA.slice(0, qz.tr.length),
          'tr': qz.tr,
          'out': qz.out,
          'len': qz.tr.length,
          'end': !!qz.end,
          'cost': qa ? wr(qa.x) : 0
        });
      }
      for (let qw = 0; qw < wD && q7.length; qw++) {
        {
          let qd = [],
            qM = new Set();
          for (let qL of q7) for (let qG of wg()) {
            M(qL.snap);
            let qW = q5(qG);
            wH.rollouts++;
            let qX = s.first("obj_heart"),
              qg = {
                'seq': [...qL.seq, ...qG.slice(0, qW.tr.length)],
                'tr': [...qL.tr, ...qW.tr],
                'out': qW.out,
                'len': qL.len + qW.tr.length,
                'end': !!qW.end,
                'cost': qX ? wr(qX.x) : 0
              };
            if (qg.out || qg.end || qw === wD - 1) {
              q8.push(qg);
              continue;
            }
            let qY = qX ? Math.round(qX.x) + ',' + Math.round(qX.y) + ',' + Math.round((Number(qX.vspeed) || 0) * 4) + ',' + qX.jumpstage : String(qG);
            qM.has(qY) || (qM.add(qY), qg.zone = Math.round(qX.x / 24) + ',' + Math.round(qX.y / 12) + (qX.jumpstage === 1 ? 'g' : 'a'), qg.snap = d(), qd.push(qg));
          }
          qd.sort((qD, qO) => q6(qD) - q6(qO));
          let qf = [],
            qT = new Set();
          for (let qD of qd) {
            {
              if (qf.length >= wO) break;
              qT.has(qD.zone) || (qT.add(qD.zone), qf.push(qD));
            }
          }
          for (let qO of qd) {
            {
              if (qf.length >= wO) break;
              qf.includes(qO) || qf.push(qO);
            }
          }
          q7 = qf;
        }
      }
      for (let qh of q8) (!q0 || q6(qh) < q6(q0)) && (q0 = qh);
    }
  } finally {
    M(cN), O(), g(cK), m.synthetic = cP;
    for (let qi of Object.keys(cy)) m.held[qi] = cy[qi];
  }
  return q0;
}
v(wh, "sansSearch");
var wR = 4,
  wZ = 3,
  wu = 24,
  wi = 1;
function wQ(z) {
  const a = {
    'btHKQ': function (cy, cj) {
      return cy(cj);
    },
    'OtiDV': function (cy) {
      return cy();
    },
    'dAvhj': function (cy, cj) {
      return cy === cj;
    },
    'ETiui': "idle",
    'gRXYb': function (cy, cj) {
      return cy(cj);
    },
    'JeGPy': function (cy, cj) {
      return cy !== cj;
    },
    'BDHTD': function (cy, cj) {
      return cy + cj;
    },
    'uxmzP': "sans",
    'HAudz': "obj_sansb",
    'PkGpO': function (cy, cj) {
      return cy === cj;
    },
    'defWU': function (cy, cj) {
      return cy | cj;
    },
    'xjJUm': function (cy, cj) {
      return cy - cj;
    },
    'jlxoS': function (cy, cj) {
      return cy !== cj;
    },
    'WGxLT': function (cy, cj) {
      return cy < cj;
    },
    'lUMxb': "avcic",
    'SQpyz': function (cy, cj) {
      return cy === cj;
    },
    'FDzBd': function (cy, cj) {
      return cy % cj;
    },
    'pvVck': function (cy, cj) {
      return cy > cj;
    },
    'fxTJf': function (cy, cj) {
      return cy - cj;
    },
    'Urinm': function (cy, cj) {
      return cy / cj;
    },
    'vvTxa': function (cy, cj) {
      return cy >= cj;
    },
    'PWPbq': function (cy, cj) {
      return cy > cj;
    },
    'rsNWT': function (cy, cj) {
      return cy - cj;
    },
    'XmuhH': function (cy, cj) {
      return cy | cj;
    },
    'IWhcs': function (cy, cj) {
      return cy > cj;
    },
    'rBgie': function (cy, cj) {
      return cy - cj;
    },
    'xqCom': function (cy, cj) {
      return cy(cj);
    },
    'kuncz': function (cy, cj) {
      return cy <= cj;
    },
    'ihFzl': function (cy, cj) {
      return cy + cj;
    },
    'ZAcKN': function (cy, cj) {
      return cy + cj;
    },
    'SMibQ': function (cy, cj) {
      return cy + cj;
    },
    'fTLpS': function (cy, cj) {
      return cy + cj;
    },
    'nfysG': function (cy, cj) {
      return cy + cj;
    },
    'Ulnur': function (cy, cj) {
      return cy + cj;
    },
    'IAylf': function (cy, cj) {
      return cy + cj;
    },
    'lhbxp': "SANS f",
    'ehcLu': " OFF",
    'voEIV': "OUT@",
    'SEPfj': function (cy, cj) {
      return cy + cj;
    },
    'DWeBq': "ok ",
    'viDvL': function (cy, cj) {
      return cy - cj;
    },
    'wqMSN': function (cy, cj) {
      return cy >= cj;
    },
    'WgVSG': function (cy, cj, cN) {
      return cy(cj, cN);
    },
    'XwuME': function (cy, cj) {
      return cy - cj;
    },
    'rHWeJ': function (cy, cj, cN, cK) {
      return cy(cj, cN, cK);
    },
    'OlTYE': function (cy, cj) {
      return cy / cj;
    },
    'fQTRY': function (cy, cj) {
      return cy > cj;
    },
    'xQArB': function (cy, cj) {
      return cy === cj;
    },
    'PPAjh': function (cy, cj) {
      return cy % cj;
    },
    'zsFcI': function (cy, cj) {
      return cy >= cj;
    },
    'CkxNs': function (cy, cj) {
      return cy(cj);
    },
    'exrOQ': function (cy, cj, cN, cK) {
      return cy(cj, cN, cK);
    },
    'yNGXH': function (cy, cj) {
      return cy + cj;
    },
    'gFvTB': function (cy, cj) {
      return cy + cj;
    },
    'eriIo': function (cy, cj) {
      return cy < cj;
    },
    'VIuqs': function (cy, cj) {
      return cy - cj;
    },
    'wCVIh': function (cy, cj) {
      return cy <= cj;
    },
    'PuwBs': function (cy, cj) {
      return cy + cj;
    },
    'WwzhW': function (cy, cj) {
      return cy + cj;
    },
    'oAkgg': function (cy, cj) {
      return cy + cj;
    },
    'YxoFW': function (cy, cj) {
      return cy + cj;
    },
    'vuAwS': function (cy, cj) {
      return cy + cj;
    },
    'qQECg': "UT10 f",
    'uqfro': " best ",
    'MVxdk': " | "
  };
  let cA = wJ(z);
  if (!cA || !T.autoplay) return wS.plan && wF(), !1;
  if (cA === "idle") return wS.plan = null, wl(''), !0;
  if (s.frame !== wS.frame + 1 && (wS.plan = null), wS.frame = s.frame, cA === "sans") {
    let cy = s.first("obj_sansb"),
      cj = cy ? (cy.part | 0) === 4 ? 4 : (cy.part | 0) - 1 : -1;
    if ((wS.turn !== cj || wS.t0 < 0 || s.frame < wS.t0) && (wS.turn = cj, wS.t0 = s.frame, wS.route = !globalThis.__ut10NoRoute && !!wx[cj], wS.plan = null), wS.route) {
      {
        let q2 = wx[cj],
          q3 = s.frame - wS.t0,
          q4 = q3 % 6 === 0 && q3 > 0 ? q2.at[q3 / 6 - 1] : null;
        if (q3 >= q2.keys.length || q4 && (Math.abs(q4[0] - z.x) > 0.05 || Math.abs(q4[1] - z.y) > 0.05)) wS.route = !1, wS.plan = null, wH.offRoute = (wH.offRoute | 0) + 1;else return wS.held = q2.keys[q3], wl(wS.held), !0;
      }
    }
    let cN = wS.trace && wS.i > 0 ? wS.trace[wS.i - 1] : null,
      cK = cN && (Math.abs(cN[0] - z.x) > 0.01 || Math.abs(cN[1] - z.y) > 0.01);
    if (!wS.plan || cK || wS.i >= wt || wS.i >= wS.plan.length) {
      let q5 = performance.now(),
        q6 = wh(wS.plan && !cK ? wS.plan.slice(wS.i) : null);
      wS.plan = q6 && q6.seq.length ? q6.seq : [''], wS.trace = q6 && q6.seq.length ? q6.tr : null, wS.i = 0, wS.n++, wH.decisions++, wH.ms += performance.now() - q5, globalThis.__ut10dbg && s.frame >= globalThis.__ut10dbg[0] && s.frame <= globalThis.__ut10dbg[1] && console.log("SANS f" + s.frame + '\x20x' + Math.round(z.x) + (cK ? " OFF" : '') + '\x20' + (q6 ? q6.out ? "OUT@" + q6.len : "ok " + q6.cost.toFixed(1) : '-') + '\x20' + wS.plan.map(q7 => q7 || '.').join('').slice(0, 90) + '\x20' + (performance.now() - q5).toFixed(0) + 'ms');
    }
    let q0 = wS.plan[wS.i++] || '';
    return wS.held = q0, wl(q0), !0;
  }
  if (!wS.plan || wS.i >= wR || wS.i >= wS.plan.length) {
    let q7 = performance.now(),
      q8 = d(),
      q9 = wu,
      qz = wS.plan ? wS.plan.slice(wS.i) : [],
      qa = qz.length ? [...qz, ...wG(qz[qz.length - 1], Math.max(0, q9 - qz.length))] : null,
      qw = qa,
      qC = qa ? wT(q8, qa, q9) : 1 / 0;
    if (!qa || qC > wi || wS.n % wZ === 0) {
      let qE = globalThis.__ut10dbg && s.frame >= globalThis.__ut10dbg[0] && s.frame <= globalThis.__ut10dbg[1] ? [] : null;
      for (let qc of wW(q9)) {
        let qq = wT(q8, qc, q9);
        if (qE && qE.push(qc.slice(0, 10).map(qS => qS || '.').join('') + '=' + qq.toFixed(1) + '@' + wf), qq < qC - 1e-9 && (qC = qq, qw = qc), qC <= wi && !qE) break;
      }
      qE && console.log("UT10 f" + s.frame + '\x20x' + Math.round(z.x) + " best " + qw.slice(0, 10).map(qS => qS || '.').join('') + '=' + qC.toFixed(1) + " | " + qE.join('\x20'));
    }
    wS.plan = qw, wS.i = 0, wS.n++, wH.decisions++, wH.ms += performance.now() - q7;
  }
  let cP = wS.plan[wS.i++] || '';
  return wS.held = cP, wl(cP), !0;
}
v(wQ, "ut10Step"), y();
var wm = 0.3333333333333333,
  wp = new Set([0, 3, 12, 13, 14, 15, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 56, 57, 60, 64]),
  wA = v(z => {
    const a = {};
    a.DvNIA = function (cj, cN) {
      return cj - cN;
    };
    const cA = a;
    let cB = f.items[cA.DvNIA(z, 200)],
      cv = cB && cB.effect;
    return !!(cv && cB.usable && !cv.poison && (cv.heal || cv.perchar || cv.bych || cv.revive || cv.reviveall || cv.dflt));
  }, "drHeals"),
  wb = v(() => !!(s.first("obj_menubone") || s.first("obj_menubone_bottom")), "menuBones");
function wB() {
  const cb = {
    'nLAal': function (cP, cy) {
      return cP !== cy;
    },
    'wrGuZ': function (cP, cy) {
      return cP !== cy;
    },
    'DBfEk': "obj_battlecontroller",
    'cjpeg': function (cP, cy) {
      return cP === cy;
    },
    'vnzcD': function (cP, cy) {
      return cP % cy;
    },
    'ERObc': function (cP, cy) {
      return cP | cy;
    },
    'veMSn': function (cP, cy) {
      return cP === cy;
    },
    'aynHu': function (cP, cy, cj) {
      return cP(cy, cj);
    },
    'ihtUd': function (cP, cy, cj) {
      return cP(cy, cj);
    }
  };
  if (!T.autoplay || T.myfight !== 0 || T.mnfight !== 0 || T.battleover || !T.bmenucoord) return null;
  let cB = s.first("obj_battlecontroller");
  if (!cB) return null;
  let cv = (s.frame | 0) % 3 === 0;
  return Y === 'ut' ? cB.havechar ? null : wv(cB, cv) : cB.havechar ? Ce(cB, cv) : null;
}
v(wB, "itemMenuAction");
function wv(z, a) {
  const cA = {
    'ttFzq': function (cN, cK) {
      return cN !== cK;
    },
    'pzRph': "room_battle",
    'eLeat': function (cN) {
      return cN();
    },
    'hOuoy': function (cN, cK) {
      return cN(cK);
    },
    'zztZs': function (cN, cK) {
      return cN | cK;
    },
    'rSHQg': function (cN, cK) {
      return cN(cK);
    },
    'oJiWP': function (cN, cK) {
      return cN <= cK;
    },
    'GjSQt': function (cN, cK) {
      return cN * cK;
    },
    'ewOiR': function (cN, cK) {
      return cN(cK);
    },
    'tZCKW': function (cN, cK) {
      return cN | cK;
    },
    'chsAp': function (cN, cK) {
      return cN === cK;
    },
    'jlkSw': function (cN, cK) {
      return cN !== cK;
    },
    'dqgut': function (cN, cK) {
      return cN === cK;
    },
    'PZSaI': function (cN, cK) {
      return cN < cK;
    },
    'yKTFw': "right",
    'MEOAr': "left",
    'jjTIQ': function (cN, cK) {
      return cN === cK;
    },
    'OyNZr': function (cN, cK) {
      return cN === cK;
    },
    'bALtz': function (cN, cK) {
      return cN === cK;
    },
    'XveGo': function (cN, cK) {
      return cN >= cK;
    },
    'ERAcP': function (cN, cK) {
      return cN < cK;
    }
  };
  if (T.fightRoom !== "room_battle" || z.active !== 1 || wb()) return null;
  let cv = Number(T.bmenuno),
    cP = Number(T.bmenucoord[0]) | 0,
    cy = Number(T.hp) <= Number(T.maxhp) * wm && !wp.has(Number(T.item[0]) | 0);
  return cv === 0 ? cy && T.mercy !== 3 ? a ? cP === 2 ? 'b1' : cP < 2 ? "right" : "left" : '' : cP === 2 && (!T.item[0] || T.talked === 91) || cP === 1 && T.talked === 91 ? a ? "left" : '' : null : cv >= 3 && cv < 4 && cy ? a ? 'b1' : '' : null;
}
v(wv, "utAction");
function Ce(z, a) {
  const cA = {
    'HYmGi': function (q4, q5) {
      return q4 === q5;
    },
    'FASyO': function (q4, q5) {
      return q4 | q5;
    },
    'VjAct': function (q4, q5) {
      return q4 / q5;
    },
    'lVrZU': function (q4, q5) {
      return q4 < q5;
    },
    'GwCeD': function (q4) {
      return q4();
    },
    'pXXkR': function (q4, q5) {
      return q4 > q5;
    },
    'pgmwa': function (q4, q5) {
      return q4 > q5;
    },
    'OozXM': function (q4, q5) {
      return q4 / q5;
    },
    'mAlSV': function (q4, q5) {
      return q4(q5);
    },
    'kjSCg': function (q4, q5) {
      return q4 < q5;
    },
    'Rgbqd': function (q4, q5) {
      return q4 <= q5;
    },
    'GNEBO': function (q4, q5) {
      return q4 >= q5;
    },
    'nsUnq': function (q4, q5) {
      return q4 >= q5;
    },
    'SXemk': function (q4, q5) {
      return q4 | q5;
    },
    'BOIfB': function (q4, q5) {
      return q4 === q5;
    },
    'kguxN': "right",
    'xgxKy': "left",
    'jEDdZ': function (q4, q5) {
      return q4 === q5;
    },
    'nMTDT': function (q4, q5) {
      return q4(q5);
    },
    'zzJil': function (q4, q5) {
      return q4 !== q5;
    },
    'LrrwS': function (q4, q5) {
      return q4 >> q5;
    },
    'ayPvV': function (q4, q5) {
      return q4 >> q5;
    },
    'cwRpJ': function (q4, q5) {
      return q4 >> q5;
    },
    'aPJCT': "down",
    'kKWDj': function (q4, q5) {
      return q4 === q5;
    }
  };
  if (z.oopsallacts === 1) return null;
  let cb = T.charturn | 0,
    cB = T.bmenucoord,
    cv = T.bmenuno,
    cP = q4 => (z.tempitem && z.tempitem[q4] ? z.tempitem[q4][cb] : 0) | 0,
    cy = -1,
    cj = 1 / 0;
  for (let q4 = 0; q4 < Math.min(3, X()); q4++) {
    let q5 = T.char[q4];
    if (!(q5 > 0) || !(T.maxhp[q5] > 0)) continue;
    let q6 = T.hp[q5] / T.maxhp[q5];
    q6 < cj && (cj = q6, cy = q4);
  }
  let cN = -1;
  for (let q7 = 0; q7 < 12 && cN < 0; q7++) cP(q7) && wA(cP(q7)) && (cN = q7);
  let q0 = !1;
  for (let q8 = 0; q8 < cb; q8++) T.charaction[q8] === 4 && (q0 = !0);
  let q3 = cj <= wm && cN >= 0 && !q0 && cy >= 0;
  if (cv === 0) {
    let q9 = cB[0][cb] | 0;
    return q3 ? a ? q9 === 2 ? 'b1' : q9 < 2 ? "right" : "left" : '' : q9 === 2 && !cP(0) ? a ? "left" : '' : null;
  }
  if (!q3) return null;
  if (cv === 4) {
    let qz = cB[4][cb] | 0;
    return a ? qz === cN ? 'b1' : qz >> 1 !== cN >> 1 ? qz >> 1 < cN >> 1 ? "down" : 'up' : "right" : '';
  }
  return cv === 7 ? a ? (cB[7][cb] | 0) === cy ? 'b1' : "down" : '' : null;
}
v(Ce, "drAction"), y();
var Ct = new Set([1, 4, 5, 9]),
  Cr = new Set(["X-Slash", "RedBuster"]);
function en() {
  const z = {};
  z.byMoD = function (cv, cP) {
    return cv !== cP;
  };
  z.wdtym = function (cv, cP) {
    return cv === cP;
  };
  const cB = z;
  return cB.byMoD(T.chapter, 1) && cB.wdtym(T.flag[34], 0);
}
v(en, "techMenu");
function ej(z, a) {
  const cA = {
    'otMNH': function (cK) {
      return cK();
    },
    'BgaeL': function (cK, q0) {
      return cK < q0;
    },
    'QUsYj': function (cK, q0) {
      return cK | q0;
    },
    'czObW': function (cK, q0) {
      return cK === q0;
    },
    'FFScz': function (cK, q0) {
      return cK(q0);
    },
    'DYCfx': "damage",
    'HJPVf': function (cK, q0, q1) {
      return cK(q0, q1);
    },
    'fLiKJ': function (cK, q0) {
      return cK <= q0;
    },
    'wHKhZ': "obj_flowery_enemy"
  };
  let cv = en(),
    cP = T.char[a],
    cy = (cv ? T.battlespell[a] : T.spell[cP]) || [],
    cj = (cv ? T.battlespellcost[a] : T.spellcost && T.spellcost[cP]) || [];
  for (let cK = 0; cK < 12; cK++) if (!(!(Ct.has(cy[cK] | 0) || F(cy[cK]) === "damage" && o(cy[cK], a)) || !(Number(cj[cK]) <= T.tension)) && !(cv && !z.techUnlocked(a, cK)) && !(a === 1 && cK === 1 && z.disablesusieralseiattack && s.first("obj_flowery_enemy"))) return cK;
  return -1;
}
v(ej, "spellSlot");
function eN(z) {
  const a = {
    'CBMex': function (cP, cy) {
      return cP < cy;
    },
    'DCCkN': function (cP, cy) {
      return cP === cy;
    },
    'Fykju': "gOWcE",
    'xEauW': "pqcwd",
    'oBTSf': function (cP, cy) {
      return cP < cy;
    },
    'ckacK': function (cP, cy) {
      return cP !== cy;
    },
    'ujMIB': function (cP, cy) {
      return cP > cy;
    },
    'tMOsk': function (cP, cy) {
      return cP(cy);
    },
    'TOaeB': function (cP, cy) {
      return cP | cy;
    }
  };
  let cb = cP => (cP === 2 || cP === 4 ? z.partnerReady(2) : !0) && (cP === 3 || cP === 4 ? z.partnerReady(3) : !0) && (cP === 5 && T.chapter !== 1 ? z.partnerReady(4) : !0);
  for (let cP = 0; a.CBMex(cP, 3); cP++) if (a.DCCkN(T.monster[cP], 1)) {
    if (a.DCCkN(a.Fykju, a.xEauW)) {
      const cy = {};
      return cy.tr = a, cy.out = !0, cy;
    } else {
      for (let cj = 0; a.oBTSf(cj, 6); cj++) if (!(!Cr.has(((T.actname || [])[cP] || [])[cj]) || a.ckacK(((T.canact || [])[cP] || [])[cj], 1)) && !(a.ujMIB(a.tMOsk(Number, ((T.actcost || [])[cP] || [])[cj]), T.tension) || !a.tMOsk(cb, a.TOaeB(((T.actactor || [])[cP] || [])[cj], 0)))) return {
        'm': cP,
        'i': cj
      };
    }
  }
  return null;
}
v(eN, "krisAct");
function eK(z, a, cA) {
  const cP = {
    'ZxSCL': function (cy, cj) {
      return cy === cj;
    },
    'xblBC': function (cy, cj) {
      return cy !== cj;
    },
    'KDPFN': function (cy, cj) {
      return cy >> cj;
    },
    'JhXLi': function (cy, cj) {
      return cy >> cj;
    },
    'PprQc': function (cy, cj) {
      return cy < cj;
    },
    'mNESQ': function (cy, cj) {
      return cy(cj);
    },
    'brZft': function (cy, cj) {
      return cy + cj;
    },
    'DDLJZ': "down",
    'HYUvs': "right"
  };
  return z === a ? 'b1' : z >> 1 !== a >> 1 ? a < z ? 'up' : cA(z + 2) ? "down" : "right" : "right";
}
v(eK, "walk");
function E0() {
  const z = {
    'bZPvl': function (q3, q4) {
      return q3 === q4;
    },
    'rpfpa': function (q3, q4) {
      return q3 !== q4;
    },
    'aClzE': function (q3, q4) {
      return q3 !== q4;
    },
    'qhnpP': function (q3, q4) {
      return q3 >= q4;
    },
    'AAcLM': function (q3, q4) {
      return q3 / q4;
    },
    'TxAxU': "obj_battlecontroller",
    'fSdLI': "obj_hammer_of_justice_enemy",
    'vbgoA': "obj_sound_of_justice_enemy",
    'OjANU': "obj_rouxls_ch3_enemy",
    'sPYFO': "o_boxingcontroller",
    'Lpqnt': function (q3, q4) {
      return q3 | q4;
    },
    'daItg': function (q3, q4) {
      return q3 < q4;
    },
    'ZkJWY': function (q3, q4) {
      return q3 > q4;
    },
    'YKnsy': function (q3, q4) {
      return q3 > q4;
    },
    'wgXpe': function (q3, q4) {
      return q3(q4);
    },
    'KAOpU': function (q3, q4) {
      return q3 === q4;
    },
    'LNWgX': function (q3, q4) {
      return q3(q4);
    },
    'lvOly': function (q3, q4, q5) {
      return q3(q4, q5);
    },
    'bflta': function (q3, q4) {
      return q3 === q4;
    },
    'KTzCY': function (q3, q4) {
      return q3 === q4;
    },
    'zQjfh': function (q3, q4) {
      return q3 % q4;
    },
    'QMZBh': function (q3, q4) {
      return q3 | q4;
    },
    'dsTBX': function (q3, q4) {
      return q3 > q4;
    },
    'YiLkb': "right",
    'MpkIr': "left",
    'OyUqd': function (q3, q4) {
      return q3 === q4;
    },
    'zfdtZ': function (q3, q4) {
      return q3 === q4;
    },
    'OmbgF': function (q3, q4) {
      return q3(q4);
    },
    'trvsc': "down",
    'viOAY': function (q3, q4) {
      return q3 === q4;
    },
    'wxePM': function (q3, q4) {
      return q3 === q4;
    },
    'ZKCar': function (q3, q4) {
      return q3(q4);
    },
    'mpqTo': function (q3, q4, q5, q6) {
      return q3(q4, q5, q6);
    },
    'XcASV': function (q3, q4) {
      return q3(q4);
    },
    'nHxbq': "mKOQo",
    'vAbdI': function (q3) {
      return q3();
    },
    'EkqWd': function (q3, q4) {
      return q3(q4);
    }
  };
  if (!T.autoplay || Y === 'ut' || T.fighting !== 1 || T.myfight !== 0 || T.mnfight !== 0 || T.battleover || !T.bmenucoord || !Array.isArray(T.bmenucoord[0]) || !(T.tension >= T.maxtension / 2)) return null;
  let cb = s.first("obj_battlecontroller");
  if (!cb || !cb.havechar || cb.oopsallacts === 1 || s.first("obj_hammer_of_justice_enemy") || s.first("obj_sound_of_justice_enemy") || s.first("obj_rouxls_ch3_enemy") || s.first("o_boxingcontroller")) return null;
  let cB = T.charturn | 0,
    cv = T.char[cB];
  if (!(cB >= 0 && cB < Math.max(3, T.char.length)) || !(cv > 0) || !(Number(T.hp[cv]) > 0)) return null;
  let cP = G(cv) === 1,
    cy = cP ? eN(cb) : ej(cb, cB);
  if (cy === null || cy === -1) return null;
  let cK = (s.frame | 0) % 3 === 0,
    q0 = T.bmenucoord,
    q1 = T.bmenuno,
    q2 = q3 => q0[q3] ? q0[q3][cB] | 0 : 0;
  if (q1 === 0) {
    if (!cK) return '';
    let q3 = q2(0);
    return q3 === 1 ? 'b1' : q3 < 1 || q3 > 3 ? "right" : "left";
  }
  if (cP) return q1 === 11 ? cK ? q2(11) === cy.m ? 'b1' : "down" : '' : q1 === 9 && q2(11) === cy.m ? cK ? eK(q2(9), cy.i, q4 => ((T.canact[cy.m] || [])[q4] | 0) === 1) : '' : null;
  if (q1 === 2) {
    {
      let q4 = (en() ? T.battlespell[cB] : T.spell[cv]) || [];
      return cK ? eK(q2(2), cy, q5 => q5 < 12 && (q4[q5] | 0) !== 0) : '';
    }
  }
  return null;
}
v(E0, "spellMenuAction");
function E1() {
  let z = l(A),
    a = z.ctx;
  try {
    Object.defineProperty(z, 'ctx', {
      'get': () => a,
      'set': () => {},
      'configurable': !0x0
    });
  } catch {}
  return z;
}
v(E1, 'pinnedNullGfx');
function E2(z) {
  al(z);
}
v(E2, 'setRolloutBudget');
var E3 = v(() => T.mnfight !== 0x2 && !!(s.first('obj_menubone') || s.first('obj_menubone_bottom')), 'menuBonesOut');
function E4() {
  return af() || (wU(s.first('obj_heart')) ? 'ut10' : null) || (zw(s.first('obj_heart')) ? 'ch4green' : null) || (E3() ? 'menubones' : null);
}
v(E4, 'rolloutSoul');
var E5 = new Set(['obj_lborder', 'obj_rborder', 'obj_uborder', 'obj_dborder', 'obj_border']),
  E6 = (() => {
    let z = new Set(['obj_collidebullet']);
    try {
      for (let a of [...H, ...J]) {
        let [cA, cb] = a;
        cA === 'obj_heart' && !E5.has(cb) ? z.add(cb) : cb === 'obj_heart' && !E5.has(cA) && z.add(cA);
      }
    } catch {}
    return z;
  })();
for (let qN of j) E6.add(qN);
var E7 = new Set(N);
function E8() {
  return E6.size;
}
v(E8, 'threatCount');
var E9 = v(z => Et(z), 'canSee'),
  Ez = {
    'frame': -0x1,
    'mode': 'off',
    'threats': [],
    'soul': null,
    'bounds': null,
    'dir': null,
    'best': 0x0,
    'score': 0x0,
    'commit': 0x0,
    'blocked': [],
    'speed': 0x3,
    'plan': null
  },
  Ea = [[0x0, 0x0]];
for (let qK = 0x0; qK < 0x10; qK++) {
  let S0 = qK / 0x10 * Math.PI * 0x2;
  Ea.push([Math.cos(S0), Math.sin(S0)]);
}
var Ew = {
  'horizon': 0x1e,
  'keep': 0.35,
  'stay': 0.25,
  'room': 0.05,
  'margin': 0x0,
  'commit': 0x3,
  'gsteps': 0x6,
  'gkeep': 0.55,
  'gstay': 0.35,
  'centre': 0.6,
  'beamAlign': 0xc
};
function EC(z) {
  Object.assign(Ew, z);
}
v(EC, 'setParams');
async function EE(z = "assets/autoplay.tune.json") {
  try {
    let a = await fetch(z, {
      'cache': "no-store"
    });
    if (!a.ok) return null;
    let cA = await a.json();
    if (cA && cA.params) return EC(cA.params), cA;
  } catch {}
  return null;
}
v(EE, 'loadAutoplayTune');
var Ec = 0x0,
  Eq = 0x0,
  ES = 0x3,
  Ek = null,
  EV = 0x0,
  EF = new Map(),
  EH = {
    'left': 0x0,
    'right': 0x0,
    'up': 0x0,
    'down': 0x0
  },
  Ex = {
    'left': !0x1,
    'right': !0x1,
    'up': !0x1,
    'down': !0x1
  },
  EJ = {
    'soul': '',
    'branch': '',
    'move': '',
    'detail': '',
    'threats': 0x0,
    'hazards': []
  };
function EU() {
  return EJ;
}
v(EU, 'autoplayPlan');
function Ed(z, a, cA) {
  EJ.branch = z, EJ.move = a, EJ.detail = cA || '';
}
v(Ed, 'note');
function EM() {
  return !!T.autoplay;
}
v(EM, 'autoplayOn');
function Ef() {
  return T.autoplay = !T.autoplay, T.autoplay || (EL(), m.synthetic = null), T.autoplay;
}
v(Ef, 'toggleAutoplay');
function ET() {
  m.held.left = !0x1, m.held.right = !0x1, m.held.up = !0x1, m.held.down = !0x1;
}
v(ET, 'clearHeld');
function EL() {
  ET(), m.held.b1 = !0x1, m.pressed.b1 = !0x1;
}
v(EL, 'clearAll');
function EG() {
  return EW();
}
v(EG, 'autoplayBounds');
function EW() {
  let z = null,
    cA = null,
    cb = null,
    cB = null;
  for (let cy of s.list) {
    if (cy.destroyed) continue;
    let cj = cy.constructor.name;
    cj === 'obj_lborder' ? z = cy.x : cj === 'obj_rborder' ? cA = cy.x : cj === 'obj_uborder' ? cb = cy.y : cj === 'obj_dborder' && (cB = cy.y);
  }
  if (z !== null && cA !== null && cb !== null && cB !== null && cA - z > 0x10 && cB - cb > 0x10) return [z, cb, cA, cB];
  let cv = s.first('obj_knight_split_growtangle');
  if (cv && !cv.destroyed) {
    let cN = cv.con === 0x0 ? 0x0 : Math.round(cv.distance || 0x0),
      cK = cv.vertical ? cN : 0x0,
      q0 = cv.vertical ? 0x0 : cN;
    return cv.diagonal && (cK = Math.SQRT1_2 * cN, q0 = Math.SQRT1_2 * cN), [cv.x - 0x46 - cK, cv.y - 0x46 - q0, cv.x + 0x34 + cK + 0x14, cv.y + 0x34 + q0 + 0x14];
  }
  let cP = s.first('obj_growtangle');
  if (cP && !cP.destroyed) {
    let q1 = 37.5 * (cP.image_xscale || 0x2),
      q2 = 37.5 * (cP.image_yscale || 0x2);
    if (q1 > 0x8 && q2 > 0x8) return [cP.x - q1, cP.y - q2, cP.x + q1, cP.y + q2];
  }
  return null;
}
v(EW, 'arena');
function EX(z) {
  return z > 0.5 && z < 0x8 ? 0.6 : z > -0x1 && z <= 0.5 ? 0.2 : z > -0x4 && z <= -0x1 ? 0.5 : 0.2;
}
v(EX, 'utGravity');
function Eg(cA) {
  if (cA.is && cA.is('obj_tracking_sword1')) {
    if (cA.con < 0x2) return {
      'skip': !0x0
    };
    let cj = cA.con === 0x2 ? cA.flashtime + 0x1 - cA.timer + 0x2 : Math.max(0x0, 0x2 - cA.timer),
      cN = (cA.direction + 0xb4) * Math.PI / 0xb4,
      cK = Math.cos(cN),
      q0 = Math.sin(cN),
      q1 = [];
    for (let q2 = 0x3c; q2 <= 0x104; q2 += 0xa) q1.push({
      'cx': cA.x + cK * q2,
      'cy': cA.y - q0 * q2,
      'hw': 0x7,
      'hh': 0x7,
      'custom': 0x1,
      't0': cj,
      'ttl': cj + 0x4
    });
    return {
      'multi': q1
    };
  }
  if (cA.is && cA.is('obj_sans_bonebul') && (cA.width || 0x0) > 0x0) {
    let q3 = T.idealborder ? T.idealborder[0x2] + 0xb : 0x0,
      q4 = T.idealborder ? T.idealborder[0x3] - 0x6 : 0x1e0,
      q5 = cA.x + 0x2 + (cA.rc_le || 0x0),
      q6 = cA.x + 0x8 - (cA.rc_cut || 0x0),
      q7 = cA.type === 0x2 ? q3 : cA.y + 0x5,
      q8 = cA.type === 0x2 ? cA.y : q4;
    return {
      'hw': Math.max(0x2, Math.abs(q6 - q5) / 0x2),
      'hh': Math.max(0x2, Math.abs(q8 - q7) / 0x2),
      'cx': (q5 + q6) / 0x2,
      'cy': (q7 + q8) / 0x2,
      'custom': 0x1
    };
  }
  if (cA.is && cA.is('blt_sizebone')) {
    if (cA.active !== void 0x0 && cA.active !== 0x1) return {
      'skip': !0x0
    };
    let q9 = T.idealborder || [0x0, 0x280, 0x0, 0x1e0],
      qz = cA.is('blt_topbone'),
      qa = cA.x + 0x3,
      qw = cA.x + 0x9,
      qC = qz ? q9[0x2] + 0xa : cA.y + 0x2,
      qE = qz ? cA.y : q9[0x3] - 0x2;
    return {
      'cx': (qa + qw) / 0x2 + 0x1,
      'cy': (qC + qE) / 0x2 + 0x1,
      'hw': Math.abs(qw - qa) / 0x2 + 0.5,
      'hh': Math.abs(qE - qC) / 0x2 + 0.5,
      'blueOnly': cA.blue === 0x1,
      'custom': 0x1
    };
  }
  if (cA.is && cA.is('obj_bonestab')) {
    let qc = T.idealborder;
    if (!qc) return {
      'skip': !0x0
    };
    let qq = cA.height || 0x19,
      qS,
      qk,
      qV,
      qF;
    cA.dir === 0x1 ? (qS = qc[0x1] - qq, qV = qc[0x1] - 0x3, qk = qc[0x2] + 0x8, qF = qc[0x3] - 0x3) : cA.dir === 0x2 ? (qS = qc[0x0] + 0x8, qV = qc[0x1] - 0x3, qk = qc[0x2] + 0x6, qF = qc[0x2] + 0x5 + qq) : cA.dir === 0x3 ? (qS = qc[0x0] + 0x5, qV = qc[0x0] + 0x8 + qq, qk = qc[0x2] + 0x8, qF = qc[0x3] - 0x3) : (qS = qc[0x0] + 0x8, qV = qc[0x1] - 0x3, qk = qc[0x3] - qq, qF = qc[0x3] - 0x3);
    let qH = Number.isFinite(cA.retain) ? cA.retain : 0x4,
      qx = Math.max(0x1, Math.floor(qq / 0x4)),
      qJ = 0x9 + qH + Math.ceil((qq - 0x3) / qx),
      qU,
      qd;
    if (cA.con === 0x2) qU = 0x0, qd = qJ - (cA.timer || 0x0) + 0x1;else {
      let qM = Math.max(0x0, cA.warning || 0x0);
      qU = qM + 0x1, qd = qM + qJ;
    }
    return qd < 0x1 ? {
      'skip': !0x0
    } : {
      'cx': (qS + qV) / 0x2,
      'cy': (qk + qF) / 0x2,
      'hw': Math.max(0x4, Math.abs(qV - qS) / 0x2),
      'hh': Math.max(0x4, Math.abs(qF - qk) / 0x2),
      'custom': 0x1,
      't0': qU,
      'ttl': qd,
      'vx': 0x0,
      'vy': 0x0,
      'ax': 0x0,
      'ay': 0x0
    };
  }
  if (cA.is && cA.is('obj_spearbullet_follow')) {
    if (cA.deactivate) return {
      'skip': !0x0
    };
    let qf = cA.rotspeed || 0x0,
      qT = cA.is('obj_followspear_2') ? 0x2 : 0x1,
      qL = qf > 0x0 ? Math.ceil(qf / qT) : void 0x0,
      qG = (cA.direction || 0x0) * Math.PI / 0xb4,
      qW = Math.cos(qG),
      qX = -Math.sin(qG),
      qg = cA.x - qW * 12.5,
      qY = cA.y - qX * 12.5,
      qD = cA.x + qW * 0x19,
      qO = cA.y + qX * 0x19;
    return {
      'cx': (qg + qD) / 0x2,
      'cy': (qY + qO) / 0x2,
      'hw': Math.max(0x4, Math.abs(qD - qg) / 0x2 + 0x3),
      'hh': Math.max(0x4, Math.abs(qO - qY) / 0x2 + 0x3),
      'ax': qW * 0.3,
      'ay': qX * 0.3,
      'custom': 0x1,
      't0': qL
    };
  }
  if (cA.constructor.name === 'obj_collidebullet' && cA.sprite_index === 'spr_joker_scythebody') {
    let qt = null;
    for (let qr of s.list) if (!qr.destroyed && qr.constructor.name === 'obj_centerscythe' && qr.king === 0x1 && qr.sbul === cA) {
      qt = qr;
      break;
    }
    if (qt) {
      let qh = qt.scythetimer || 0x0,
        qR = qt.scythesidex || 0x1,
        qZ = R[cA.mask_index] || R[cA.sprite_index],
        qu = cA.image_xscale || 0x1,
        qi = cA.image_yscale || 0x1,
        qQ = qu + ',' + qi + ',' + qR,
        qI = qZ && qZ._scytheBB && qZ._scytheBB.get(qQ);
      if (!qI) {
        let S6 = 0x64 * qR * Math.PI / 0xb4,
          S7 = Math.cos(S6),
          S8 = Math.sin(S6),
          S9 = 0x1 / 0x0,
          Sz = 0x1 / 0x0,
          Sa = -0x1 / 0x0,
          Sw = -0x1 / 0x0,
          SC = qZ && qZ.masks && qZ.masks[0x0],
          [SE, Sc] = SC ? Q(SC) : [0x0, 0x0];
        if (SC) {
          for (let Sq = 0x0; Sq < Sc; Sq++) for (let SS = 0x0; SS < SE; SS++) if (i(SC, SS, Sq)) {
            let Sk = (SS + 0.5 - (qZ.ox || 0x0)) * qu,
              SV = (Sq + 0.5 - (qZ.oy || 0x0)) * qi,
              SF = Sk * S7 + SV * S8,
              So = -Sk * S8 + SV * S7;
            SF < S9 && (S9 = SF), SF > Sa && (Sa = SF), So < Sz && (Sz = So), So > Sw && (Sw = So);
          }
        }
        Number.isFinite(S9) || (S9 = -0x18 * qu, Sa = 0x18 * qu, Sz = -0x16 * qi, Sw = 0x16 * qi), qI = [S9, Sz, Sa, Sw], qZ && (qZ._scytheBB ||= new Map()).set(qQ, qI);
      }
      let [qm, qp, qA, S1] = qI,
        S2 = 0x40,
        S3 = new Array(S2 + 0x1),
        S4 = cA.x;
      for (let SH = 0x0; SH <= S2; SH++) {
        if (SH > 0x0) {
          let Sx = qh + SH;
          S4 += Sx < 0x55 ? 0x0 : -0x3 * qR * Math.min(0x5, Sx - 0x54);
        }
        S3[SH] = [S4 + (qm + qA) / 0x2, cA.y + (qp + S1) / 0x2];
      }
      let S5 = 0x68 - qh;
      return S5 < 0x1 ? {
        'skip': !0x0
      } : {
        'hw': (qA - qm) / 0x2,
        'hh': (S1 - qp) / 0x2,
        'cx': S3[0x0][0x0],
        'cy': S3[0x0][0x1],
        'custom': 0x1,
        'ttl': S5,
        'vx': 0x0,
        'vy': 0x0,
        'ax': 0x0,
        'ay': 0x0,
        'path': SJ => S3[Math.min(S2, Math.max(0x0, Math.round(SJ)))]
      };
    }
  }
  if (cA.is && cA.is('obj_centerscythe')) {
    if (cA.chasecon !== 0x2) return {
      'skip': !0x0
    };
    let SJ = R[cA.mask_index] || R[cA.sprite_index];
    if (SJ && SJ._reach === void 0x0) {
      let SY = 0x0,
        SD = SJ.masks && SJ.masks[0x0],
        [SO, St] = SD ? Q(SD) : [0x0, 0x0];
      if (SD) {
        for (let Sr = 0x0; Sr < St; Sr++) for (let Sh = 0x0; Sh < SO; Sh++) i(SD, Sh, Sr) && (SY = Math.max(SY, Math.hypot(Sh + 0.5 - (SJ.ox || 0x0), Sr + 0.5 - (SJ.oy || 0x0))));
      }
      SJ._reach = SY || Math.hypot(SJ.w, SJ.h) / 0x2;
    }
    let SU = SJ ? SJ._reach : 0xf,
      Sd = SU,
      SM = 0x40,
      Sl = new Array(SM + 0x1),
      Sf = cA.dir || 0x0,
      ST = cA.dirspeed || 0x0,
      SL = cA.insanity === 0x1,
      SG = cA.sinespeed || 0x0,
      SW = cA.radius || 0x0,
      SX = cA.centerx,
      Sg = cA.centery;
    for (let SR = 0x0; SR <= SM; SR++) {
      SR > 0x0 && (Sf += ST, SL && (ST > 0x0 && ST < 0x3 ? ST += 0.01 : ST < 0x0 && ST > -0x3 && (ST -= 0.01)));
      let SZ = Math.cos(((cA.sine || 0x0) + SG * SR) / 0x12) * SW,
        Su = Sf * Math.PI / 0xb4;
      Sl[SR] = [SX - SZ * Math.cos(Su), Sg + SZ * Math.sin(Su)];
    }
    return {
      'hw': SU,
      'hh': Sd,
      'cx': cA.x,
      'cy': cA.y,
      'custom': 0x1,
      'path': Si => Sl[Math.min(SM, Math.max(0x0, Math.round(Si)))]
    };
  }
  let cb = R[cA.mask_index] || R[cA.sprite_index],
    cB = Math.abs(cA.image_xscale || 0x1),
    cv = Math.abs(cA.image_yscale || 0x1);
  if (cb && cb.bb) {
    let Si = ((cb.bb[0x0] + cb.bb[0x2] + 0x1) / 0x2 - (cb.ox || 0x0)) * (cA.image_xscale || 0x1),
      SQ = ((cb.bb[0x1] + cb.bb[0x3] + 0x1) / 0x2 - (cb.oy || 0x0)) * (cA.image_yscale || 0x1),
      SI = (cA.image_angle || 0x0) * Math.PI / 0xb4,
      Sm = Math.cos(SI),
      Sp = Math.sin(SI),
      SA = (cb.bb[0x2] - cb.bb[0x0] + 0x1) / 0x2 * cB,
      Sb = (cb.bb[0x3] - cb.bb[0x1] + 0x1) / 0x2 * cv,
      SB = Math.abs(Math.sin(0x2 * SI)) < 0.35,
      Sv = SB ? Math.abs(Sm) * SA + Math.abs(Sp) * Sb : SA,
      SP = SB ? Math.abs(Sp) * SA + Math.abs(Sm) * Sb : Sb;
    return {
      'hw': Math.max(0x2, Sv),
      'hh': Math.max(0x2, SP),
      'cx': cA.x + Si * Sm + SQ * Sp,
      'cy': cA.y - Si * Sp + SQ * Sm
    };
  }
  let cP = Math.abs(cA.sprite_width) || 0x10,
    cy = Math.abs(cA.sprite_height) || 0x10;
  return {
    'hw': Math.max(0x2, cP / 0x2),
    'hh': Math.max(0x2, cy / 0x2)
  };
}
v(Eg, 'boxOf');
function EY(z, cA) {
  let cb = (cA.idealrot !== void 0x0 ? cA.idealrot : cA.image_angle) || 0x0,
    cB = cA.image_angle !== void 0x0 ? cA.image_angle : cb;
  if (Math.abs(cB - cb) > Ew.beamAlign) return;
  let cv = (cb - 0x5a) * Math.PI / 0xb4,
    cP = Math.cos(cv),
    cy = -Math.sin(cv),
    cj = Math.abs(cA.image_xscale || 0x1),
    cN = cA.x + cP * 0x23 * cj,
    cK = cA.y + cy * 0x23 * cj,
    q0 = Math.ceil(1.5 * Math.floor(0x23 * cj / 0x4)) + 0x1,
    q1 = cA.alarm ? Number(cA.alarm[0x4]) : -0x1,
    q2 = q1 > 0x0 ? q1 : 0x0,
    q3,
    q4;
  if (cA.con === 0x7 ? (q3 = Math.max(0x1, 0x2 - (cA.btimer || 0x0)), q4 = 0x10 - (cA.btimer || 0x0)) : cA.con === 0x6 ? (q3 = q2 + 0x1, q4 = q2 + 0xf) : cA.con === 0x5 ? (q3 = 0x6, q4 = 0x14) : cA.con === 0x4 ? (q3 = q2 + 0x5, q4 = q2 + 0x13) : (q3 = 0xf, q4 = 0x28), !(q4 < 0x1)) {
    for (let q5 = 0x0; q5 <= 0x3e8; q5 += q0) z.push({
      'x': cN + cP * q5,
      'y': cK + cy * q5,
      'vx': 0x0,
      'vy': 0x0,
      'hw': q0,
      'hh': q0,
      'beam': 0x1,
      'bax': cP,
      'bay': cy,
      't0': q3,
      'ttl': q4
    });
  }
}
v(EY, 'addBeam');
var ED = new Map(),
  EO = new Set(['obj_boneplat']);
function Et(z) {
  let a = z.constructor.name,
    cA = ED.get(a);
  if (cA !== void 0x0) return cA;
  if (EO.has(a)) return ED.set(a, !0x1), !0x1;
  let cb = E6.has(a);
  if (!cb && typeof z.is == 'function') {
    for (let cB of E6) if (z.is(cB)) {
      cb = !0x0;
      break;
    }
  }
  return !cb && typeof z.dmg == 'number' && z.dmg > 0x0 && (cb = !0x0), ED.set(a, cb), cb;
}
v(Et, 'isThreatClass');
function Er() {
  return ER(!0x0);
}
v(Er, 'debugThreats');
function Eh(z) {
  let a = z.parent;
  if (!a || a.destroyed || typeof a != 'object' || a.curang === void 0x0 || a.rotspeed === void 0x0) return;
  let cA = Math.hypot(z.x - a.x, z.y - a.y),
    cb = Math.atan2(-(z.y - a.y), z.x - a.x),
    cB = a.rotmin || 0x0,
    cv = a.rotspeed || 0x0;
  return cP => {
    let cy = cv,
      cj = 0x0;
    for (let q0 = 0x0; q0 < cP; q0++) cy > cB ? cy = Math.max(cB, cy - 0.2) : cy < cB && (cy = Math.min(cB, cy + 0.2)), cj += cy;
    let cN = cA - 0x4 * cP,
      cK = cb + cj * Math.PI / 0xb4;
    return [a.x + Math.cos(cK) * cN, a.y - Math.sin(cK) * cN];
  };
}
v(Eh, 'ringPath');
function ER(z) {
  let cA = [];
  for (let cB of s.list) {
    if (cB.destroyed) continue;
    let cv = cB.constructor.name;
    if (cv === 'obj_gasterblaster' || cv === 'obj_404_blaster') {
      EY(cA, cB);
      continue;
    }
    if (cB.visible === !0x1 || !Et(cB)) continue;
    let cP = Number.isFinite(cB.x - cB._px) ? cB.x - cB._px : 0x0,
      cy = Number.isFinite(cB.y - cB._py) ? cB.y - cB._py : 0x0,
      cj = 0x0,
      cN = 0x0;
    Number.isFinite(cB._apvx) && (cj = Math.max(-1.5, Math.min(1.5, cP - cB._apvx)), cN = Math.max(-1.5, Math.min(1.5, cy - cB._apvy)), cj = (cB._apax || 0x0) * 0.5 + cj * 0.5, cN = (cB._apay || 0x0) * 0.5 + cN * 0.5), z || (cB._apax = cj, cB._apay = cN, cB._apvx = cP, cB._apvy = cy);
    let cK = Eg(cB);
    if (!cK.skip) {
      for (let q0 of cK.multi || [cK]) !q0.custom && !R[cB.mask_index] && !R[cB.sprite_index] && !E7.has(cv) || cA.push({
        'x': q0.cx === void 0x0 ? cB.x : q0.cx,
        'y': q0.cy === void 0x0 ? cB.y : q0.cy,
        'vx': q0.vx === void 0x0 ? cP : q0.vx,
        'vy': q0.vy === void 0x0 ? cy : q0.vy,
        'hw': q0.hw,
        'hh': q0.hh,
        'ax': q0.ax === void 0x0 ? cj : q0.ax,
        'ay': q0.ay === void 0x0 ? cN : q0.ay,
        't0': q0.t0,
        'ttl': q0.ttl,
        'path': q0.path || (cB.is && cB.is('obj_rotspear') ? Eh(cB) : void 0x0),
        'blueOnly': !!q0.blueOnly || !!(cB.is && (cB.is('blt_bluesword') || cB.blue === 0x1 && (cB.is('blt_dogspear') || cB.is('blt_potentiallyblue') || cB.is('blt_loopbulletgrow')))),
        'cls': cv,
        'custom': !!q0.custom,
        'guessed': !q0.custom && !R[cB.mask_index] && !R[cB.sprite_index]
      });
      if (cA.length > 0x190) break;
    }
  }
  let cb = s.first('obj_sansb_body');
  if (cb && !cb.destroyed && cb.fac === 0x4 && T.idealborder) {
    let q1 = cb.alarm ? Number(cb.alarm[0x7]) : 0x0;
    if (q1 > 0x0 && q1 <= 0x7) {
      let q2 = T.idealborder,
        q3 = 0x37,
        q4 = q2[0x0] + 0x8,
        q5 = q2[0x1] - 0x3,
        q6 = q2[0x3] - q3,
        q7 = q2[0x3] - 0x3;
      cA.push({
        'x': (q4 + q5) / 0x2,
        'y': (q6 + q7) / 0x2,
        'vx': 0x0,
        'vy': 0x0,
        'ax': 0x0,
        'ay': 0x0,
        'hw': Math.abs(q5 - q4) / 0x2,
        'hh': Math.abs(q7 - q6) / 0x2,
        't0': q1 + 0x7,
        'ttl': q1 + 0x31,
        'blueOnly': !0x1
      });
    }
  }
  return cA;
}
v(ER, 'gatherThreats');
function EZ(z) {
  if (!z || z.destroyed) return null;
  {
    let cP = a4(z);
    if (cP !== void 0x0) return cP;
  }
  {
    let cy = zI(z);
    if (cy !== void 0x0) return cy;
  }
  let cA = z.constructor.name;
  if (cA === 'obj_gasterblaster' || cA === 'obj_404_blaster') {
    if (!(z.col_o === 0x1 && (z.fade === void 0x0 || z.fade >= 0.8))) return null;
    let cj = ((z.image_angle || 0x0) - 0x5a) * Math.PI / 0xb4,
      cN = Math.cos(cj),
      cK = -Math.sin(cj),
      q0 = Math.abs(z.image_xscale || 0x1),
      q1 = Math.ceil(1.5 * Math.floor(0x23 * q0 / 0x4)) + 0x1;
    return [{
      'line': [z.x + cN * 0x23 * q0, z.y + cK * 0x23 * q0, cN, cK, q1],
      'blue': !0x1
    }];
  }
  if (!Et(z) || z.active === 0x0 && typeof z.is == 'function' && z.is('obj_collidebullet')) return null;
  let cb = Eg(z);
  if (cb.skip) return null;
  let cB = !!cb.blueOnly || !!(z.is && (z.is('blt_bluesword') || z.is('obj_sans_bonebul') && z.type === 0x1 || z.blue === 0x1 && (z.is('blt_dogspear') || z.is('blt_potentiallyblue') || z.is('blt_loopbulletgrow')))),
    cv = [];
  for (let q2 of cb.multi || [cb]) if (!(q2.t0 !== void 0x0 && q2.t0 > 0x1)) {
    if (q2.custom && q2.cx !== void 0x0) {
      cv.push({
        'rect': [q2.cx - q2.hw, q2.cy - q2.hh, q2.cx + q2.hw, q2.cy + q2.hh],
        'blue': cB || !!q2.blueOnly
      });
      continue;
    }
    if (R[z.mask_index] || R[z.sprite_index]) {
      cv.push({
        'mask': !0x0,
        'blue': cB || !!q2.blueOnly
      });
      continue;
    }
    if (q2.cx !== void 0x0) {
      cv.push({
        'rect': [q2.cx - q2.hw, q2.cy - q2.hh, q2.cx + q2.hw, q2.cy + q2.hh],
        'blue': cB || !!q2.blueOnly
      });
      continue;
    }
    (q2.custom || E7.has(cA)) && cv.push({
      'rect': [z.x - q2.hw, z.y - q2.hh, z.x + q2.hw, z.y + q2.hh],
      'blue': cB
    });
  }
  return cv;
}
v(EZ, 'hazardShapes');
var Em = (() => {
  let z = [];
  for (let a = -0xe; a <= 0xe; a++) for (let cA = -0xe; cA <= 0xe; cA++) {
    let cb = Math.hypot(cA, a);
    cb <= 0xe && z.push([cA, a, cb]);
  }
  return z.sort((cB, cv) => cB[0x2] - cv[0x2]), {
    'R': 0xe,
    'list': z
  };
})();
function Ep(z, cA, cb, cB, cv, cP) {
  let [cy, cj, cN, cK] = cB,
    q0 = Math.floor((cv - cy) / (cN - cy) * cA),
    q1 = Math.floor((cP - cj) / (cK - cj) * cb);
  if (q0 < 0x0 || q1 < 0x0 || q0 >= cA || q1 >= cb) return 0x0;
  let q2 = z.grid,
    q3 = z.hazardIsLit ? 0x1 : 0x0;
  for (let q4 = 0x0; q4 < Em.list.length; q4++) {
    let q5 = Em.list[q4],
      q6 = q0 + q5[0x0],
      q7 = q1 + q5[0x1];
    if (q6 < 0x0 || q7 < 0x0 || q6 >= cA || q7 >= cb || q2[q7 * cA + q6] === q3) return q5[0x2];
  }
  return Em.R;
}
v(Ep, 'gridClearance');
var EA = 0x0;
function Eb() {
  let z = EW();
  if (!z) return EB() > 0x0;
  let [cA, cb, cB, cv] = z;
  for (let cP of s.list) {
    if (cP.destroyed || cP.visible === !0x1 || !Et(cP)) continue;
    let cy = Eg(cP);
    for (let cj of cy.multi || [cy]) {
      if (cj.skip) continue;
      let cN = cj.cx === void 0x0 ? cP.x : cj.cx,
        cK = cj.cy === void 0x0 ? cP.y : cj.cy;
      if (cN + cj.hw >= cA && cN - cj.hw <= cB && cK + cj.hh >= cb && cK - cj.hh <= cv) return !0x0;
    }
  }
  return !0x1;
}
v(Eb, 'hazardsInBox');
function EB() {
  let z = 0x0;
  for (let a of s.list) a.destroyed || a.visible === !0x1 || Et(a) && z++;
  return z;
}
v(EB, 'liveThreats');
var Ev = null;
function EP() {
  return T.minigameStage || T.standaloneMinigame ? (Ev && m.synthetic === Ev && (m.synthetic = null, (cS.b1 || cS.zHeld || cS.zPrev) && (m.held.b1 = !0x1, m.pressed.b1 = !0x1), (cS.xHeld || cS.xPrev) && (m.held.b2 = !0x1, m.pressed.b2 = !0x1)), Ev = null, cS.b1 = !0x1, cS.pulse = null, cS.zHeld = !0x1, cS.zPrev = !0x1, cS.xHeld = !0x1, cS.xPrev = !0x1, cS.edges = '', !0x0) : !0x1;
}
v(EP, 'minigameOwnsInput');
function Ey() {
  if (!T.autoplay || (c0(), EP()) || (EA++, aI(EA))) return;
  let z = s.first('obj_heart');
  {
    let cA = c7();
    if (cA !== null) {
      cl(!0x1), cA && cf('b3');
      return;
    }
  }
  {
    let cb = s.first('obj_choicer_neo');
    if (cb && cb.canchoose === 0x1 && cb.controlled !== 0x0 && cb.controlled !== !0x1) {
      cb.mychoice >= 0x0 ? cl(EA % 0x2 === 0x0) : (cl(!0x1), cf('left'));
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
  if (T.mnfight === 0x2 && cG(z)) {
    cW(z);
    return;
  }
  if (T.mnfight === 0x2 && Eb() && !cw()) {
    cl(!0x1);
    return;
  }
  {
    let cv = zi();
    if (cv !== null) {
      cv === 'b1' ? cl(!0x0) : (cl(!0x1), cv && cf(cv));
      return;
    }
  }
  {
    let cP = w7();
    if (cP !== null) {
      cP === 'b1' ? cl(!0x0) : (cl(!0x1), cP && cf(cP));
      return;
    }
  }
  {
    let cy = wB();
    if (cy !== null) {
      cy === 'b1' ? cl(!0x0) : (cl(!0x1), cy && cf(cy));
      return;
    }
  }
  {
    let cj = c8();
    if (cj !== null) {
      cj === 'b1' ? cl(!0x0) : (cl(!0x1), cj && cf(cj));
      return;
    }
  }
  {
    let cN = E0();
    if (cN !== null) {
      cN === 'b1' ? cl(!0x0) : (cl(!0x1), cN && cf(cN));
      return;
    }
  }
  let a = cT();
  if (!!(s.first('obj_menubone') || s.first('obj_menubone_bottom')) && a === null && T.mnfight !== 0x2) {
    if (Ej && Ej.i < Ej.frames.length) {
      let q0 = Ej.frames[Ej.i++];
      q0 === 'b1' ? cl(!0x0) : (cl(!0x1), q0 && cf(q0));
      return;
    }
    if (Ej = null, EA % 0x2 !== 0x0) {
      cl(!0x1);
      return;
    }
    let cK = cc();
    if (cK) {
      Ej = {
        'frames': cK,
        'i': 0x0
      };
      let q1 = Ej.frames[Ej.i++];
      q1 === 'b1' ? cl(!0x0) : (cl(!0x1), q1 && cf(q1));
      return;
    }
    cl(!0x0);
    return;
  }
  cl(a !== null ? a : EA % 0x8 === 0x0);
}
v(Ey, 'autoplayUI');
var Ej = null,
  EN = {
    'on': 0x0,
    'heals': 0x0,
    'hp': [0x0, 0x0, 0x0],
    'name': ['', '', ''],
    'still': 0x0,
    'sig': '',
    'inMenu': 0x0,
    'plan': [null, null, null],
    'used': {},
    'gain': {},
    'last': null
  };
function EK() {
  return !!(T.bmenucoord && Array.isArray(T.bmenucoord[0x0]));
}
v(EK, 'drMenu');
function c0() {
  if (!T.monster || !T.monsterhp || !EK()) return;
  for (let a = 0x0; a < 0x3; a++) {
    let cA = T.monster[a] === 0x1 ? String(T.monstername && T.monstername[a] || '') : '',
      cb = Number(T.monsterhp[a]) || 0x0,
      cB = Number(T.monstermaxhp && T.monstermaxhp[a]) || 0x0;
    if (cA !== EN.name[a]) {
      EN.name[a] = cA, EN.hp[a] = cb;
      continue;
    }
    cA && cB > 0x0 && cb - EN.hp[a] >= cB / 0xa && ++EN.heals >= 0x2 && (EN.on = 0x1), EN.hp[a] = cb;
  }
  let z = T.fighting === 0x1 && T.mnfight === 0x0 && T.myfight === 0x0 ? 0x1 : 0x0;
  if (z && !EN.inMenu) {
    let cv = '';
    for (let cy = 0x0; cy < 0x3; cy++) T.monster[cy] === 0x1 && (cv += cy + ':' + T.monsterhp[cy] + ':' + T.mercymod[cy] + '\x20');
    EN.still = cv === EN.sig ? EN.still + 0x1 : 0x0, EN.sig = cv, EN.still >= 0x3 && (EN.on = 0x1), EN.plan = [null, null, null];
    let cP = EN.last;
    if (cP) {
      let cj = cP.m + ':' + cP.i;
      EN.gain[cj] = (EN.gain[cj] || 0x0) + (Number(T.mercymod[cP.m]) || 0x0) - cP.mercy, EN.last = null;
    }
  }
  EN.inMenu = z;
}
v(c0, 'mercyWatch');
function c1(z) {
  let a = W(z);
  if (a < 0x0) return T.customTeam === 0x1;
  let cA = s.first('obj_battlecontroller');
  return cA && cA.havechar && cA.havechar[a] !== 0x1 ? !0x1 : Number(T.hp && T.hp[T.char[a]]) > 0x0;
}
v(c1, 'heroUp');
function c2(z) {
  let a = W(z);
  return a < 0x0 || T.flag[0x22] === 0x1 || T.chapter === 0x1 ? !0x1 : (T.battlespellspecial && T.battlespellspecial[a] || []).some(cA => (cA | 0x0) >= 0x1);
}
v(c2, 'ownActs');
function c3() {
  let z = s.first('obj_battlecontroller');
  return !!(z && z.oopsallacts === 0x1 && s.first('obj_tenna_board4_enemy'));
}
v(c3, 'allActs');
function c4(z, a, cA = '') {
  if (((T['canact' + cA] || [])[z] || [])[a] !== 0x1 || ((T['actname' + cA] || [])[z] || [])[a] === 'Check' || Number(((T['actcost' + cA] || [])[z] || [])[a]) > T.tension) return !0x1;
  if (c3()) return !0x0;
  let cb = (T.actactor && T.actactor[z] && T.actactor[z][a]) | 0x0;
  return !((cb === 0x2 || cb === 0x4) && (!c1(0x2) || c2(0x2)) || (cb === 0x3 || cb === 0x4) && (!c1(0x3) || c2(0x3)) || cb === 0x5 && (!c1(0x4) || c2(0x4)));
}
v(c4, 'krisAct');
function c5(z) {
  let cA = c3(),
    cb = new Set(EN.plan.filter((cj, cN) => cj && cN !== z && cj.target !== void 0x0).map(cj => cj.target)),
    cB = [0x0, 0x1, 0x2].filter(cj => T.monster[cj] === 0x1);
  if (cA) {
    let cj = cN => Object.keys(EN.used).reduce((cK, q0) => cK + (q0.startsWith(cN + ':') ? EN.used[q0] : 0x0), 0x0);
    cB = cB.filter(cN => !(Number(T.mercymod[cN]) >= 0x64)).sort((cN, cK) => cj(cN) - cj(cK) || cN - cK);
  } else {
    for (let cN of cB) if (Number(T.mercymod && T.mercymod[cN]) >= 0x64) return {
      'main': 0x3,
      'target': cN
    };
  }
  let cv = cB.filter(cK => !cb.has(cK)).concat(cB.filter(cK => cb.has(cK))),
    cP = T.char[z],
    cy = {
      0x2: 'sus',
      0x3: 'ral',
      0x4: 'noe'
    }[cP];
  if (cP === 0x1 || cA) {
    let cK = cA && T.chapter !== 0x1 && cy ? cy : '';
    for (let q0 of cv) {
      let q1 = [];
      for (let q4 = 0x0; q4 < 0x6; q4++) c4(q0, q4, cK) && q1.push(q4);
      if (!q1.length) continue;
      let q2 = q5 => q0 + ':' + q5;
      q1.sort((q5, q6) => (EN.gain[q2(q6)] || 0x0) - (EN.gain[q2(q5)] || 0x0) || (EN.used[q2(q5)] | 0x0) - (EN.used[q2(q6)] | 0x0) || q5 - q6);
      let q3 = q1[0x0];
      return EN.used[q2(q3)] = (EN.used[q2(q3)] | 0x0) + 0x1, EN.last = {
        'm': q0,
        'i': q3,
        'mercy': Number(T.mercymod[q0]) || 0x0
      }, {
        'main': 0x1,
        'target': q0,
        'act': q3
      };
    }
    return {
      'main': 0x4
    };
  }
  {
    let q5 = T.chapter !== 0x1 && T.flag[0x22] === 0x0,
      q6 = (q5 ? (T.battlespell || [])[z] : T.spell[cP]) || [],
      q7 = (q5 ? (T.battlespellcost || [])[z] : (T.spellcost || [])[cP]) || [];
    for (let q8 = 0x0; q8 < 0xc; q8++) if (F(q6[q8]) === 'mercy' && Number(q7[q8] || 0x0) <= T.tension && o(q6[q8], z)) return {
      'main': 0x1,
      'tech': q8,
      'target': cv[0x0]
    };
  }
  if (cy && T.flag[0x22] !== 0x1) {
    let q9 = T.battlespellspecial && T.battlespellspecial[z] || [],
      qz = T.battlespellcost && T.battlespellcost[z] || [];
    for (let qa of cv) {
      let qw = T['canact' + cy] && T['canact' + cy][qa] || [];
      for (let qC = 0x0; qC < 0xc; qC++) if ((q9[qC] | 0x0) >= 0x1 && qw[qC] === 0x1 && Number(qz[qC] || 0x0) <= T.tension) return {
        'main': 0x1,
        'tech': qC,
        'target': qa
      };
    }
  }
  return {
    'main': 0x4
  };
}
v(c5, 'mercyPlan');
function c6(z, cA, cb) {
  let cB = s.all('obj_throwtarget').filter(q0 => !q0.destroyed).map(q0 => [h(q0), q0.good === 0x1]);
  if (!cB.length) return 0x0;
  let cv = Math.cos(cA * Math.PI / 0xb4),
    cP = -Math.sin(cA * Math.PI / 0xb4),
    cy = z.rx,
    cj = z.ry,
    cN = cb * cv,
    cK = cb * cP;
  for (let q0 = 0x0; q0 < 0x3c; q0++) {
    cK += z.ralgrav, cy += cN, cj += cK;
    let q1 = Math.atan2(cK, cN),
      q2 = Math.cos(q1),
      q3 = Math.sin(q1);
    for (let q4 = -0x28; q4 <= 0x20; q4 += 0x8) {
      let q5 = cy + q2 * q4,
        q6 = cj + q3 * q4;
      for (let [q7, q8] of cB) if (q5 >= q7[0x0] - 0xc && q5 <= q7[0x2] + 0xc && q6 >= q7[0x1] - 0xc && q6 <= q7[0x3] + 0xc) return q8 ? 0x2 : 0x1;
    }
    if (cj > z.ry + 0x190) break;
  }
  return 0x0;
}
v(c6, 'throwHits');
function c7() {
  let z = s.first('obj_throwralsei');
  if (!z || z.throwcon !== 0x1) return null;
  if ((s.frame | 0x0) % 0x2 !== 0x0) return '';
  let a = cA => {
    let cb = 0x0;
    for (let cB = z.minpower; cB <= z.maxpower; cB += 0x1) cb = Math.max(cb, c6(z, cA, cB));
    return cb;
  };
  if (z.throwready === 0x0) {
    let cA = 0x0;
    for (let cb = -0xf; cb <= 0x1e; cb += 0x3) cA = Math.max(cA, a(cb));
    return a(z.angle) >= cA ? 'c' : '';
  }
  return z.throwalpha >= 0.9 && c6(z, z.angle, z.mypower) >= a(z.angle) ? 'c' : '';
}
v(c7, 'throwPress');
function c8() {
  if (!EN.on || !EK() || T.fighting !== 0x1 || T.mnfight !== 0x0 || T.myfight !== 0x0 || T.battleover) return null;
  let z = T.charturn;
  if (!(z >= 0x0 && z < Math.max(0x3, T.char ? T.char.length : 0x3)) || !T.char || !(T.char[z] > 0x0) || T.char[z] === 0x1 && !c1(0x1) || s.first('obj_rouxls_ch3_enemy')) return null;
  let cA = EN.plan[z] || (EN.plan[z] = c5(z));
  if ((s.frame | 0x0) % 0x3 !== 0x0) return '';
  let cb = T.bmenuno,
    cB = T.bmenucoord,
    cv = cP => cB[cP] ? cB[cP][z] | 0x0 : 0x0;
  if (cb === 0x0) {
    let cP = cv(0x0);
    return cP === cA.main || c3() ? 'b1' : (cA.main - cP + 0x5) % 0x5 <= 0x2 ? 'right' : 'left';
  }
  if (!(cA.main === 0x0 ? [0x1] : cA.main === 0x3 ? [0x3] : cA.main === 0x1 ? cA.tech !== void 0x0 ? [0x2, 0xd, 0x7, 0x8, 0x3] : [0xb, 0xc, 0x9] : []).includes(cb)) return [0x1, 0x2, 0x3, 0x7, 0x8, 0x9, 0xb, 0xc, 0xd].includes(cb) ? 'b2' : null;
  if (cb === 0xb || cb === 0xc || cb === 0xd || cb === 0x1 || cb === 0x3) return cA.target !== void 0x0 && cv(cb) !== cA.target && T.monster[cA.target] === 0x1 ? 'down' : 'b1';
  if (cb === 0x9 || cb === 0x2) {
    let cy = cb === 0x9 ? cA.act : cA.tech;
    if (cy === void 0x0) return 'b1';
    let cj = cv(cb);
    return cj === cy ? 'b1' : cj >> 0x1 === cy >> 0x1 ? cj & 0x1 ? 'left' : 'right' : cj < cy ? 'down' : 'up';
  }
  return cb === 0x7 || cb === 0x8 ? 'b1' : null;
}
v(c8, 'mercyMenuAction');
var c9 = v(z => ({
    'on': z.on,
    'heals': z.heals,
    'hp': z.hp.slice(),
    'name': z.name.slice(),
    'still': z.still,
    'sig': z.sig,
    'inMenu': z.inMenu,
    'plan': z.plan.map(a => a ? {
      ...a
    } : null),
    'used': {
      ...z.used
    },
    'gain': {
      ...z.gain
    },
    'last': z.last ? {
      ...z.last
    } : null
  }), 'mercyCopy'),
  cz = c9(EN);
function ca(z) {
  Object.assign(EN, c9(z || cz));
}
v(ca, 'mercyLoad');
function cw() {
  for (let z of s.all('obj_base_writer')) if (!z.destroyed && (z.halt === 0x1 || z.halt === 0x2 || z.halt === 0x4)) return !0x0;
  return !0x1;
}
v(cw, 'utWriterParked');
var cC = null;
function cE(z, a, cA) {
  let cb = [],
    cB = cv => {
      let cP = z,
        cy = cv > cP ? 'right' : 'left';
      for (; cP !== cv;) cb.push(cy, ''), cP += cv > cP ? 0x1 : -0x1;
      z = cv;
    };
  for (cB(a); cb.length < cA;) cb.push('');
  return cB(0x0), cb.push('b1', '', 'b1', ''), cb;
}
v(cE, 'menuFrames');
function cc() {
  let z = Array.isArray(T.bmenucoord) ? T.bmenucoord[0x0] | 0x0 : 0x0,
    cA = d(),
    cb = new Map(),
    cB = (cj, cN, cK) => {
      let q0 = cj.join(','),
        q1 = cb.get(q0);
      if (q1 !== void 0x0 && (q1.full || q1.c > cN || q1.c === cN && cj.length >= cK)) return q1.c;
      let q2 = cq(cj, cA, cN, cK);
      return cb.set(q0, {
        'c': q2,
        'full': cN === 0x1 / 0x0
      }), q2;
    };
  if (z === 0x0 && cB(cE(0x0, 0x0, 0x0), 0x1 / 0x0, 0x1 / 0x0) === 0x0) return null;
  let cv = null,
    cP = 0x1 / 0x0,
    cy = 0x1 / 0x0;
  for (let cj = 0x0; cj <= 0x40; cj += 0x4) for (let cN = 0x0; cN < 0x4; cN++) {
    let cK = cE(z, cN, cj),
      q0 = cB(cK, cP, cy);
    if ((q0 < cP || q0 === cP && cK.length < cy) && (cv = cK, cP = q0, cy = cK.length), q0 === 0x0) return cK;
  }
  return cv;
}
v(cc, 'chooseMenuPlan');
function cq(z, cA = null, cb = 0x1 / 0x0, cB = 0x1 / 0x0) {
  cC = cC || E1();
  let cv = cA || d(),
    cP = m.synthetic,
    cy = cS.b1,
    cj = cS.pulse,
    cN = typeof T.hp == 'number' ? T.hp : 0x0,
    cK = Number(T.km) || 0x0,
    q0 = 0x0;
  D();
  try {
    for (let q1 = 0x0; q1 < z.length + 0xa; q1++) {
      let q2 = z[q1] || '';
      m.synthetic = () => {
        m.pressed.b1 = q2 === 'b1', m.held.b1 = q2 === 'b1';
        for (let q6 of ['left', 'right']) m.pressed[q6] = q2 === q6, m.held[q6] = q2 === q6;
      };
      try {
        p(U, cC);
      } catch {
        break;
      }
      let q3 = typeof T.hp == 'number' ? T.hp : 0x0,
        q4 = Number(T.km) || 0x0,
        q5 = Math.max(0x0, cK - q4);
      if (q0 = Math.max(q0, Math.max(0x0, cN - q3 - q5) + Math.max(0x0, q4 - cK)), q0 > cb || q0 === cb && z.length >= cB) break;
    }
  } finally {
    M(cv), O(), m.synthetic = cP, cS.b1 = cy, cS.pulse = cj;
  }
  return q0;
}
v(cq, 'menuPlanCost');
var cS = {
  'b1': !0x1,
  'pulse': null,
  'zHeld': !0x1,
  'zPrev': !0x1,
  'xHeld': !0x1,
  'xPrev': !0x1,
  'edges': ''
};
function ck() {
  m.synthetic = Ev = () => {
    let z = cS.edges ? cF(cS.edges) : null,
      a = cS.zHeld || !!(z && z.has('z')),
      cA = cS.xHeld || !!(z && z.has('x'));
    if (m.pressed.b1 = cS.b1 || a && (!cS.zPrev || !!(z && z.has('z'))), m.held.b1 = cS.b1 || a, (cA || cS.xPrev) && (m.pressed.b2 = cA && (!cS.xPrev || !!(z && z.has('x'))), m.held.b2 = cA), cS.pulse && (m.pressed[cS.pulse] = !0x0, m.held[cS.pulse] = !0x0, cS.pulse = null), z) {
      for (let cb of z) cb !== 'z' && cb !== 'x' && (m.pressed[cb] = !0x0, m.held[cb] = !0x0);
    }
  };
}
v(ck, 'installSynthetic');
var cV = new Map();
function cF(z) {
  let a = cV.get(z);
  return a || (a = new Set(z.split('+').filter(Boolean)), cV.set(z, a)), a;
}
v(cF, 'edgeSet');
var co = ['left', 'right', 'up', 'down'],
  cH = '';
function cJ(z, a) {
  let cA = String(z || '').split('+').filter(Boolean);
  for (let cP of co) m.held[cP] = !0x1;
  let cb = !0x1,
    cB = !0x1,
    cv = '';
  for (let cy of cA) cy === 'z' ? cb = !0x0 : cy === 'x' ? cB = !0x0 : cy.charCodeAt(0x0) === 0x21 ? cv += (cv ? '+' : '') + cy.slice(0x1) : m.held[cy] = !0x0;
  m.pressed.up = !!a, cS.zPrev = cS.zHeld, cS.zHeld = cb, cS.xPrev = cS.xHeld, cS.xHeld = cB, cS.edges = cv, (cb || cB || cv || cS.zPrev || cS.xPrev) && ck(), cH = cA.join('+');
}
v(cJ, 'applyPlanKeys');
function cU() {
  return cH;
}
v(cU, 'lastPlanKeys');
function cd() {
  !cS.zHeld && !cS.xHeld && !cS.edges && !cS.zPrev && !cS.xPrev || (cS.zPrev = cS.zHeld, cS.zHeld = !0x1, cS.xPrev = cS.xHeld, cS.xHeld = !0x1, cS.edges = '', ck());
}
v(cd, 'releasePlanKeys');
function cM(z, cA) {
  let cb = !0x1,
    cB = !0x1,
    cv = !0x1,
    cP = !0x1,
    cy = [];
  for (let cK of z || []) cK === 'z' ? cb = !0x0 : cK === 'x' ? cB = !0x0 : cK.charCodeAt(0x0) === 0x21 && cy.push(cK.slice(0x1));
  for (let q0 of cA || []) q0 === 'z' ? cv = !0x0 : q0 === 'x' && (cP = !0x0);
  if (!cb && !cB && !cv && !cP && !cy.length) return null;
  let cj = cy.includes('z'),
    cN = cy.includes('x');
  return () => {
    m.pressed.b1 = cb && !cv || cj, m.held.b1 = cb || cj, m.pressed.b2 = cB && !cP || cN, m.held.b2 = cB || cN;
    for (let q1 of cy) q1 !== 'z' && q1 !== 'x' && (m.pressed[q1] = !0x0, m.held[q1] = !0x0);
  };
}
v(cM, 'tokenSynthetic');
function cl(z) {
  cS.b1 = !!z, m.held.b1 = !!z, m.pressed.b1 = !!z, ck();
}
v(cl, 'pressB1');
function cf(z) {
  cS.pulse = z, m.pressed[z] = !0x0, m.held[z] = !0x0, ck();
}
v(cf, 'pulseDir');
function cT() {
  let z = s.first('obj_attackpress');
  if (z && !z.destroyed && Array.isArray(z.boltalive)) {
    let cb = !0x1,
      cB = !0x1;
    for (let cv = 0x0; cv < z.bolttotal; cv++) z.boltalive[cv] === 0x1 && (cB = !0x0, z.boltframe[cv] - z.boltx === 0x0 && (cb = !0x0));
    return cB ? cb : !0x1;
  }
  let a = s.first('obj_targetchoice'),
    cA = s.first('obj_target');
  if (a && !a.destroyed && a.image_speed !== 0x0) return null;
  if (a && !a.destroyed && cA && !cA.destroyed) {
    let cP = (a.x || 0x0) + (Math.abs(a.sprite_width) || 0x0) / 0x2,
      cy = (cA.x || 0x0) + (Math.abs(cA.sprite_width) || 0x0) / 0x2,
      cj = Math.abs(Number(a.hspeed) || 0x0) || 0x1;
    return Math.abs(cP - cy) <= Math.max(0x3, cj);
  }
  return null;
}
v(cT, 'attackBarPress');
var cL = 0x0;
function cG(z) {
  return z ? z.shot === 0x1 ? !0x0 : /yellow/i.test(String(z.sprite_index || '')) : !0x1;
}
v(cG, 'isYellowSoul');
function cW(z) {
  if (T.mnfight !== 0x2 || !cG(z)) {
    cL = 0x0;
    return;
  }
  cL++, cl(cL % 0x4 === 0x1);
}
v(cW, 'fireTick');
var cX = 0x0,
  cg = null,
  cY = 'b2',
  cD = {
    'picks': {},
    'punchStarts': 0x0,
    'foeSeen': 0x0
  },
  cO = {
    'last': -0x1,
    'windup': {}
  },
  ch = v(z => {
    let a = s.first(z);
    return a && Number(a.health_count) || 0x0;
  }, 'ringHp'),
  cR = v(() => ch('o_boxingcontroller'), 'partyHp');
function cZ() {
  if (globalThis.__boxOff) return !0x1;
  let z = s.first('o_boxingcontroller');
  if (!z) return cX = 0x0, !0x1;
  let cA = s.first('o_boxingqueen');
  if (!z._apLive) {
    if (cA && cA.state !== 0x0) z._apLive = 0x1;else return !0x1;
  }
  for (let cN of ['left', 'right', 'up', 'down']) m.held[cN] = !0x1;
  if (cl(!0x1), cX++, cA && cA.state === 0x3 && (cA.attacktimer | 0x0) <= 0x1 && (cA._apAttackId = (cA._apAttackId | 0x0) + 0x1), !cA || cA.state !== 0x3) {
    if (cO.last = -0x1, cX % 0x6 === 0x1 && z.canpunch !== 0x0) {
      let cK = cY === 'b1' ? 'b2' : 'b1';
      cf(cK), cY = cK, cD.picks[cK] = (cD.picks[cK] || 0x0) + 0x1;
    }
    return !0x0;
  }
  if (cX % 0x2 !== 0x0) return !0x0;
  cg = cg || E1();
  let cb = d(),
    cB = m.synthetic,
    cv = r();
  g(!0x1), D();
  let cP = (q0, q1) => {
      M(cb);
      let q2 = cR();
      for (let q3 = 0x0; q3 < q1; q3++) {
        m.synthetic = q3 === 0x0 && q0 ? () => {
          m.pressed[q0] = !0x0, m.held[q0] = !0x0;
        } : null;
        try {
          p(U, cg);
        } catch {}
        if (T.battleover) break;
      }
      return q2 - cR();
    },
    cy = null,
    cj = 0x1 / 0x0;
  try {
    let q0 = cP(null, 0x10);
    if (q0 > 0x0) {
      cj = q0;
      for (let q1 of ['left', 'right', 'down']) {
        let q2 = cP(q1, 0x16);
        if (q2 < cj && (cj = q2, cy = q1), q2 === 0x0) break;
      }
    }
  } finally {
    M(cb), O(), m.synthetic = cB, g(cv);
  }
  return cD.picks[cy || 'none'] = (cD.picks[cy || 'none'] || 0x0) + 0x1, globalThis.__boxNoPress && (cy = null), cy && (cf(cy), (cy === 'b1' || cy === 'b2') && (cY = cy)), !0x0;
}
v(cZ, 'boxingStep');
function cu() {
  let z = s.first('obj_lightemup_controller');
  if (!z || z.destroyed || !z.shooting_enabled) return !0x1;
  let cA = s.view.x || 0x0,
    cb = s.view.y || 0x0,
    cB = s.first('obj_herokris'),
    cv = cB ? cB.x + 0x3d : cA + 0xb1,
    cP = cB ? cB.y + 0x2d : cb + 0xb1,
    cy = q4 => {
      let q5 = h(q4);
      return q5 ? [(q5[0x0] + q5[0x2]) / 0x2, (q5[0x1] + q5[0x3]) / 0x2] : [q4.x, q4.y];
    },
    cj = null,
    cN = 0x1 / 0x0;
  for (let q4 of s.all('obj_tenna_lightemup_bullet')) {
    if (q4.destroyed || q4.vanish) continue;
    let [q5, q6] = cy(q4),
      q7 = Math.hypot(q5 - cv, q6 - cP);
    q7 < cN && (cN = q7, cj = [q5, q6]);
  }
  let cK, q0;
  if (cj) {
    [cK, q0] = cj;
    let q8 = cA + 0xdc;
    if (cK < q8 && cK > cv + 0x1) {
      let q9 = (q8 - cv) / (cK - cv);
      cK = q8, q0 = cP + (q0 - cP) * q9;
    }
  } else {
    let qz = s.first('obj_shadowman_sharpshoot_target');
    qz ? [cK, q0] = cy(qz) : (cK = z.cursor_x, q0 = z.cursor_y);
  }
  cK = Math.max(cA + 0xdc, Math.min(cA + 0x258, cK)), q0 = Math.max(cb + 0x2a, Math.min(cb + 0x12c, q0));
  let q1 = cK - z.cursor_x,
    q2 = q0 - z.cursor_y,
    q3 = ['z'];
  return q1 > 0x6 ? q3.push('right') : q1 < -0x6 && q3.push('left'), q2 > 0x6 ? q3.push('down') : q2 < -0x6 && q3.push('up'), cJ(q3.join('+')), !0x0;
}
v(cu, 'lightemupStep');
function ci(cA, cb, cB, cv, cP) {
  if (!T.autoplay || EP() || (cd(), cZ()) || aX(cb) || !cb && cu() || !cb && w1() || w3() || cb && wC(cb)) return;
  if (!cb || cb.destroyed) {
    ET();
    return;
  }
  EV++;
  {
    let qV = ze(cb);
    if (qV) {
      ET();
      for (let qF of qV) m.held[qF] = !0x0;
      Ez.mode = "ch4-green", Ed("ch4-green", qV.join('+') || 'none', "shield by rollout");
      return;
    }
  }
  let cy = !!(cA && cA.grid && cB && cv && cP),
    cj = cy ? cB : EW(),
    cN = cy ? null : ER(),
    cK = !cy && (!cN || !cN.length),
    q0 = R[cb.mask_index] || R[cb.sprite_index],
    q1 = Ew.margin,
    q2 = q0 ? (q0.bb ? q0.bb[0x2] - q0.bb[0x0] + 0x1 : q0.w) / 0x2 : 0x8,
    q3 = q0 ? (q0.bb ? q0.bb[0x3] - q0.bb[0x1] + 0x1 : q0.h) / 0x2 : 0x8,
    q4 = q2 + q1,
    q5 = q3 + q1,
    q6 = cb.x + q2,
    q7 = cb.y + q3;
  if (Ek) {
    let qH = Math.hypot(cb.x - Ek[0x0], cb.y - Ek[0x1]);
    qH > 0.5 && qH < 0xc && (ES = ES * 0.9 + qH * 0.1), Ec !== 0x0 && qH < 0.01 && EF.set(Ec, 0xc);
    let qx = Math.abs(cb.x - Ek[0x0]) > 0.01,
      qJ = Math.abs(cb.y - Ek[0x1]) > 0.01;
    Ex.right && !qx && (EH.right = 0xa), Ex.left && !qx && (EH.left = 0xa), Ex.down && !qJ && (EH.down = 0xa), Ex.up && !qJ && (EH.up = 0xa), qx && (EH.left = 0x0, EH.right = 0x0), qJ && (EH.up = 0x0, EH.down = 0x0);
  }
  for (let [qU, qd] of EF) qd <= 0x1 ? EF.delete(qU) : EF.set(qU, qd - 0x1);
  for (let qM of ['left', 'right', 'up', 'down']) EH[qM] > 0x0 && EH[qM]--;
  Ek = [cb.x, cb.y];
  let q8 = Ew.horizon,
    q9 = Math.max(0x1, ES),
    qz = q8,
    qa = String(cb.mask_index || cb.sprite_index || '');
  if (EJ.soul = qa.replace('spr_', ''), EJ.threats = cN ? cN.length : 0x0, EJ.hazards = cN ? [] : [], !cy) {
    let qf = new Set();
    for (let qT of s.list) if (!(qT.destroyed || !Et(qT)) && (qf.add(qT.constructor.name), qf.size > 0x5)) break;
    EJ.hazards = [...qf];
  }
  if (cK && !/heartgreen/i.test(qa)) {
    ET();
    return;
  }
  let qw = (cN || []).find(qL => qL.beam && (qL.t0 === void 0x0 || qL.t0 <= 0x1) && Math.abs(q6 - qL.x) < q4 + qL.hw && Math.abs(q7 - qL.y) < q5 + qL.hh);
  if (!cy && qw && !/heartgreen/i.test(qa)) {
    Ed('beam', 'perpendicular', "standing in a blaster beam");
    let qL = -qw.bay,
      qG = qw.bax,
      qW = qD => {
        let qO = [];
        return Math.abs(qL) > 0.35 && qO.push(qL * qD > 0x0 ? 'right' : 'left'), Math.abs(qG) > 0.35 && qO.push(qG * qD > 0x0 ? 'down' : 'up'), qO;
      },
      qX = (q6 - qw.x) * qL + (q7 - qw.y) * qG >= 0x0 ? 0x1 : -0x1,
      qg = qX,
      qY = qW(qX);
    qY.length && qY.every(qD => EH[qD] > 0x0) && (qg = -qX, qY = qW(qg)), ET();
    for (let qD of qY) m.held[qD] = !0x0;
    Ex.left = !!m.held.left, Ex.right = !!m.held.right, Ex.up = !!m.held.up, Ex.down = !!m.held.down, Ec = 0x0, Eq = 0x0, Ez.mode = "beam-escape", Ez.dir = [qL * qg, qG * qg];
    return;
  }
  if (!cy && (cb.movement === 0x3 || /heartgreen/i.test(qa))) {
    ET(), Ez.mode = "green-block";
    let qO = s.first('obj_spearblocker');
    if (!qO) return;
    let qt = 0x1 / 0x0,
      qr = -0x1;
    for (let qh of s.list) {
      if (qh.destroyed || typeof qh.is != 'function' || !qh.is('obj_blockbullet')) continue;
      let qR = Number(qh.truesite),
        qZ = qh.is('obj_blockbullet2') && qR >= 0x0 && qR <= 0x3 ? qR : Number(qh.site);
      if (!(qZ >= 0x0 && qZ <= 0x3)) continue;
      let qu = 0x8 * (Number(qh.speedmod) || 0x1),
        qi = (Math.abs(qh.x - qO.x) + Math.abs(qh.y - qO.y) - 0x1e) / (qu || 0x8);
      qi < qt && (qt = qi, qr = qZ);
    }
    qr === 0x0 ? m.held.left = !0x0 : qr === 0x1 ? m.held.right = !0x0 : qr === 0x2 ? m.held.down = !0x0 : qr === 0x3 && (m.held.up = !0x0);
    return;
  }
  let qC = cy ? null : s.first('obj_purpleheart');
  if (qC) {
    ET(), Ez.mode = "purple-rails";
    let qQ = Math.max(0x1, qC.yamt || 0x3),
      qI = qC.yspace || 0x28,
      qm = qC.yoff || 0x0,
      qp = qC.yzero || 0x0,
      qA = SC => qp + (SC - 0x1) * qI + qm,
      S1 = Math.max(0x1, Math.min(qQ, qC.yno || 0x1)),
      S2 = qC.x,
      S3 = qC.y,
      S4 = qC.xmid === void 0x0 ? S2 : qC.xmid,
      S5 = qC.xlen === void 0x0 ? 0x64 : qC.xlen,
      S6 = (SC, SE) => {
        if (SC.cls !== 'obj_donutbullet' || Math.abs(SC.vy) < 0.5 || Math.abs(SC.vy) > 0x8 || Math.abs(SC.vx) < 0.05) return SC.y;
        let Sc = Math.max(0x0, (SE - SC.x) * Math.sign(SC.vx) / Math.abs(SC.vx)),
          Sq = SC.y + SC.vy * Sc,
          SS = qA(0x1) - 0xa,
          Sk = qA(qQ) + 0xa;
        if (Sk <= SS) return Sq;
        for (let SV = 0x0; SV < 0x8 && (Sq < SS || Sq > Sk); SV++) Sq < SS && (Sq = 0x2 * SS - Sq), Sq > Sk && (Sq = 0x2 * Sk - Sq);
        return Sq;
      },
      S7 = (SC, SE) => {
        let Sc = qA(SC),
          Sq = 0x3e7;
        for (let SS of cN || []) {
          if (Math.abs(S6(SS, SE) - Sc) > Math.max(qI / 0x2, (SS.hh || 0x8) + 0xa)) continue;
          let Sk = SE - SS.x,
            SV = (SS.hw || 0x8) + 0xa;
          if (Math.abs(Sk) <= SV) return 0x0;
          if (Math.abs(SS.vx) < 0.05 || Sk * SS.vx <= 0x0) continue;
          let SF = (Math.abs(Sk) - SV) / Math.abs(SS.vx);
          SF < Sq && (Sq = SF);
        }
        return Sq;
      },
      S8 = s.first('obj_hideouscupcake'),
      S9 = S7(S1, S2);
    if (S8 && !qC.moving && (Ed('web', 'climb', "the pet is rising"), (S1 > 0x1 && S7(S1 - 0x1, S2) > 0x6 || S1 > 0x1 && S9 < 0xa) && cf('up')), S8 && S1 > 0x1 && S7(S1 - 0x1, S2) <= 0x6) {
      let SC = null,
        SE = {
          '-1': !0x0,
          0x1: !0x0
        };
      for (let Sc = 0x4; Sc <= S5 * 0x2 && SC === null; Sc += 0x4) for (let Sq of [-0x1, 0x1]) {
        if (!SE[Sq]) continue;
        let SS = S2 + Sq * Sc;
        if (SS < S4 - S5 || SS > S4 + S5) {
          SE[Sq] = !0x1;
          continue;
        }
        if (S7(S1, SS) <= Sc / 0x4 + 0x1) {
          SE[Sq] = !0x1;
          continue;
        }
        if (S7(S1 - 0x1, SS) > 0x6) {
          SC = SS;
          break;
        }
      }
      if (SC !== null) {
        SC < S2 ? m.held.left = !0x0 : m.held.right = !0x0, Ed('web', SC < S2 ? "slide left to climb" : "slide right to climb", "the strand above is blocked here");
        return;
      }
    }
    if (!S8) {
      if (!qC.moving && S9 < 0x1a) {
        let Sk = (SH, Sx) => {
            let SJ = qA(SH),
              SU = [];
            for (let Sd of cN || []) {
              if (Math.abs(S6(Sd, Sx) - SJ) > Math.max(qI / 0x2, (Sd.hh || 0x8) + 0xa)) continue;
              let SM = (Sd.hw || 0x8) + 0xa;
              if (Math.abs(Sd.vx) < 0.05) {
                Math.abs(Sx - Sd.x) <= SM && SU.push([0x0, 0x3e7]);
                continue;
              }
              let Sl = (Sx - Sd.x) * Math.sign(Sd.vx),
                Sf = (Sl + SM) / Math.abs(Sd.vx);
              Sf < 0x0 || SU.push([Math.max(0x0, (Sl - SM) / Math.abs(Sd.vx)), Sf]);
            }
            return SU;
          },
          SV = (SH, Sx, SJ) => {
            let SU = 0x3e7;
            for (let [Sd, SM] of Sk(SH, Sx)) {
              if (SJ >= Sd - 0x1 && SJ <= SM + 0x1) return -0x1;
              Sd > SJ && Sd - SJ < SU && (SU = Sd - SJ);
            }
            return SU;
          },
          SF = S1,
          So = S9;
        for (let SH = 0x1; SH <= qQ; SH++) {
          if (SH === S1) continue;
          let Sx = SH < S1 ? -0x1 : 0x1,
            SJ = !0x0;
          for (let Sd = S1 + Sx; Sd !== SH && SJ; Sd += Sx) {
            let SM = Math.abs(Sd - S1);
            for (let [Sl, Sf] of Sk(Sd, S2)) if (0x3 * SM + 1.5 >= Sl - 0.5 && 0x3 * SM - 1.5 <= Sf + 0.5) {
              SJ = !0x1;
              break;
            }
          }
          if (!SJ) continue;
          let SU = SV(SH, S2, 0x3 * Math.abs(SH - S1));
          SU > So + 0x4 && (SF = SH, So = SU);
        }
        SF < S1 ? cf('up') : SF > S1 && cf('down');
      }
    }
    let Sz = 0x4,
      Sa = 0x0,
      Sw = -0x3b9aca00;
    for (let ST of [-Sz, 0x0, Sz]) {
      let SL = Math.max(S4 - S5, Math.min(S4 + S5, S2 + ST));
      if (ST !== 0x0 && SL === S2) continue;
      let SG = Math.min(S7(S1, SL), 0x3c) * 0xa - Math.abs(SL - S4) * 0.02 - (ST === 0x0 ? 0x0 : 0.5);
      SG > Sw && (Sw = SG, Sa = ST);
    }
    Sa < 0x0 ? m.held.left = !0x0 : Sa > 0x0 && (m.held.right = !0x0), (!EJ.branch || EJ.branch !== 'web') && Ed('web', Sa < 0x0 ? "slide left" : Sa > 0x0 ? "slide right" : "hold the strand", "riding a web strand");
    return;
  }
  let qE = /heartblue/i.test(qa) || T.movement >= 0xb && T.movement <= 0xd || Math.abs(cb.gravity || 0x0) > 0.001;
  if (!cy && qE) {
    Ez.mode = "blue-platform";
    let SW = Math.max(q8, 0x2d),
      SX = cj ? cj[0x3] : 0x1e0,
      Sg = cb.jumpstage !== void 0x0 ? cb.jumpstage === 0x1 : q7 + q5 >= SX - 0x3,
      SY = 0x6,
      SD = [];
    for (let SR of s.list) {
      if (SR.destroyed || !(SR.is && SR.is('obj_boneplat'))) continue;
      let SZ = SR.len === void 0x0 ? 0x32 : SR.len;
      SD.push({
        'l': SR.x - SZ + 0x2,
        'r': SR.x + SZ - 0x2,
        'top': SR.y,
        'land': SR.y - 0x10
      });
    }
    let SO = Sg && Math.abs(cb.vspeed || 0x0) < 0.001,
      St = !Sg && (cb.vspeed || 0x0) <= -0x1,
      Sr = null,
      Sh = -0x1 / 0x0;
    for (let Su of [-0x1, 0x0, 0x1]) for (let Si of SO || St ? [0x0, 0x1] : [0x0]) {
      let SQ = q7,
        SI = SO && Si ? -SY : cb.vspeed || 0x0,
        Sm = q6,
        Sp = SW;
      for (let Sb = 0x1; Sb <= SW; Sb++) {
        if (!Si && SI <= -0x1 && (SI = -0x1), SI += EX(SI), SQ += SI, Sm += Su * q9, SQ + q5 > SX && (SQ = SX - q5, SI = 0x0), SI >= 0x0 && SD.length) {
          let Sv = SQ - SI - q5;
          for (let SP = 0x0; SP < SD.length; SP++) {
            let Sy = SD[SP];
            if (!(Sm < Sy.l - q4 || Sm > Sy.r + q4) && Sv <= Sy.top - 0xb && SQ - q5 >= Sy.land - 0.5) {
              SQ = Sy.land + q5, SI = 0x0;
              break;
            }
          }
        }
        cj && (Sm = Math.max(cj[0x0] + q4, Math.min(cj[0x2] - q4, Sm)));
        let SB = !0x1;
        for (let Sj = 0x0; Sj < cN.length; Sj++) {
          let SN = cN[Sj];
          if (SN.t0 !== void 0x0 && Sb < SN.t0 || SN.ttl !== void 0x0 && Sb > SN.ttl) continue;
          let SK = SN.path ? SN.path(Sb) : null,
            k0 = SK ? SK[0x0] : SN.x + SN.vx * Sb + 0.5 * (SN.ax || 0x0) * Sb * Sb,
            k1 = SK ? SK[0x1] : SN.y + SN.vy * Sb + 0.5 * (SN.ay || 0x0) * Sb * Sb;
          if (Math.abs(Sm - k0) < q4 + SN.hw && Math.abs(SQ - k1) < q5 + SN.hh) {
            SB = !0x0;
            break;
          }
        }
        if (SB) {
          Sp = Sb - 0x1;
          break;
        }
      }
      let SA = Sp * 0x2;
      Sp >= SW && Su === 0x0 && !Si && (SA += 0x1), SA > Sh && (Sh = SA, Sr = {
        'mx': Su,
        'jump': Si
      });
    }
    if (ET(), m.held.b1 = !0x1, m.pressed.b1 = !0x1, Ez.plan = Sr, Ez.score = Sh, Ez.dir = Sr ? [Sr.mx, Sr.jump ? -0x1 : 0x0] : null, Sr) {
      let k2 = cb.movement,
        k3 = k2 === 0xb || k2 === 0xc || k2 === 0xd,
        k4 = k2 === 0xb ? 'left' : k2 === 0xc ? 'down' : k2 === 0xd ? 'right' : 'up';
      k3 ? k2 === 0xc ? (Sr.mx < 0x0 && (m.held.left = !0x0), Sr.mx > 0x0 && (m.held.right = !0x0)) : (Sr.mx < 0x0 && (m.held.up = !0x0), Sr.mx > 0x0 && (m.held.down = !0x0)) : (Sr.mx < 0x0 && (m.held.left = !0x0), Sr.mx > 0x0 && (m.held.right = !0x0)), Sr.jump && (m.held[k4] = !0x0), Ed('gravity', Sr.jump ? 'jump' : Sr.mx < 0x0 ? "run left" : Sr.mx > 0x0 ? "run right" : "hold ground", Sr.jump ? "clearing it" : "on the floor");
    }
    return;
  }
  let qc = 0x0,
    qq = -0x1 / 0x0;
  for (let k5 = 0x0; k5 < Ea.length; k5++) {
    let k6 = Ea[k5][0x0],
      k7 = Ea[k5][0x1];
    if (cy && k5 !== 0x0 && k5 % 0x2 === 0x0) continue;
    if (cy) {
      let kC = Ew.gsteps,
        kE = Ep(cA, cv, cP, cB, q6 + k6 * q9 * kC, q7 + k7 * q9 * kC);
      k5 === Ec && (kE += Ew.gkeep), k5 === 0x0 && (kE += Ew.gstay), kE > qq && (qq = kE, qc = k5);
      continue;
    }
    if (k5 !== 0x0 && EF.has(k5)) continue;
    let k8 = k6 > 0x0 && EH.right || k6 < 0x0 && EH.left ? 0x0 : k6,
      k9 = k7 > 0x0 && EH.down || k7 < 0x0 && EH.up ? 0x0 : k7;
    if (k5 !== 0x0 && Math.abs(k8) < 0.3 && Math.abs(k9) < 0.3) continue;
    if (cj && k5 !== 0x0) {
      let kc = Math.max(cj[0x0] + q4, Math.min(cj[0x2] - q4, q6 + k6 * q9)),
        kq = Math.max(cj[0x1] + q5, Math.min(cj[0x3] - q5, q7 + k7 * q9));
      if (Math.abs(kc - q6) < 0.01 && Math.abs(kq - q7) < 0.01) continue;
    }
    let kz = qz,
      ka = 0x1 / 0x0;
    for (let kS = 0x1; kS <= qz; kS++) {
      let kk = q6 + k8 * q9 * kS,
        kV = q7 + k9 * q9 * kS;
      cj && (kk = Math.max(cj[0x0] + q4, Math.min(cj[0x2] - q4, kk)), kV = Math.max(cj[0x1] + q5, Math.min(cj[0x3] - q5, kV)));
      let kF = !0x1;
      for (let ko = 0x0; ko < cN.length; ko++) {
        let kH = cN[ko];
        if (kH.t0 !== void 0x0 && kS < kH.t0 || kH.ttl !== void 0x0 && kS > kH.ttl || kH.blueOnly && k5 === 0x0) continue;
        let kx = kH.path ? kH.path(kS) : null,
          kJ = kx ? kx[0x0] : kH.x + kH.vx * kS,
          kU = kx ? kx[0x1] : kH.y + kH.vy * kS,
          kd = Math.abs(kk - kJ) - (q4 + kH.hw),
          kM = Math.abs(kV - kU) - (q5 + kH.hh),
          kl = Math.max(kd, kM);
        if (kl < ka && (ka = kl), kd < 0x0 && kM < 0x0) {
          kF = !0x0;
          break;
        }
      }
      if (kF) {
        kz = kS - 0x1;
        break;
      }
    }
    Number.isFinite(ka) || (ka = 0xc8);
    let kw = kz * 0x2 + Math.max(-0x28, Math.min(0xc8, ka)) * Ew.room;
    if (kz >= qz) {
      k5 === 0x0 && (kw += Ew.stay), k5 === Ec && k5 !== 0x0 && (kw += Ew.keep);
      let kf = q6 + k6 * q9 * qz,
        kT = q7 + k7 * q9 * qz,
        kL = cj ? (cj[0x0] + cj[0x2]) / 0x2 : 0x140,
        kG = cj ? (cj[0x1] + cj[0x3]) / 0x2 : 0xf0,
        kW = cj ? Math.max(0x1, (cj[0x2] - cj[0x0]) / 0x2) : 0xa0,
        kX = cj ? Math.max(0x1, (cj[0x3] - cj[0x1]) / 0x2) : 0x78;
      kw += (0x1 - Math.min(0x1, Math.hypot((kf - kL) / kW, (kT - kG) / kX))) * Ew.centre;
    }
    kw > qq && (qq = kw, qc = k5);
  }
  if (Eq > 0x0 && !cy) {
    let kg = Ea[Ec],
      kY = qz;
    for (let kD = 0x1; kD <= qz; kD++) {
      let kO = q6 + kg[0x0] * q9 * kD,
        kt = q7 + kg[0x1] * q9 * kD;
      cj && (kO = Math.max(cj[0x0] + q4, Math.min(cj[0x2] - q4, kO)), kt = Math.max(cj[0x1] + q5, Math.min(cj[0x3] - q5, kt)));
      let kr = !0x1;
      for (let kh = 0x0; kh < cN.length; kh++) {
        let kR = cN[kh];
        if (kR.t0 !== void 0x0 && kD < kR.t0 || kR.ttl !== void 0x0 && kD > kR.ttl || kR.blueOnly && Ec === 0x0) continue;
        let kZ = kR.path ? kR.path(kD) : null,
          ku = kZ ? kZ[0x0] : kR.x + kR.vx * kD,
          ki = kZ ? kZ[0x1] : kR.y + kR.vy * kD;
        if (Math.abs(kO - ku) < q4 + kR.hw && Math.abs(kt - ki) < q5 + kR.hh) {
          kr = !0x0;
          break;
        }
      }
      if (kr) {
        kY = kD - 0x1;
        break;
      }
    }
    kY >= qz ? (qc = Ec, Eq--) : Eq = 0x0;
  }
  qc !== Ec && (Eq = Ew.commit), Ec = qc, Ez.best = qc, Ez.dir = Ea[qc], Ez.score = qq, Ez.commit = Eq, Ez.blocked = [...EF.keys()], ET();
  let [qS, qk] = Ea[qc];
  Ed('dodge', qc === 0x0 ? "hold position" : Math.abs(qk) < 0.3 ? qS < 0x0 ? 'left' : 'right' : Math.abs(qS) < 0.3 ? qk < 0x0 ? 'up' : 'down' : (qk < 0x0 ? 'up' : 'down') + '-' + (qS < 0x0 ? 'left' : 'right'), qc === 0x0 ? "this square is clear" : "threading the gap"), qS < -0.3 && (m.held.left = !0x0), qS > 0.3 && (m.held.right = !0x0), qk < -0.3 && (m.held.up = !0x0), qk > 0.3 && (m.held.down = !0x0), Ex.left = !!m.held.left, Ex.right = !!m.held.right, Ex.up = !!m.held.up, Ex.down = !!m.held.down;
}
v(ci, 'autoplayStep');
function cQ() {
  let z = a => Number.isFinite(a) ? Math.round(a * 0x64) / 0x64 : String(a);
  return "ap calls " + EV + " dir " + Ec + " commit " + Eq + " obs " + z(ES) + " last " + (Ek ? z(Ek[0x0]) + ',' + z(Ek[0x1]) : '-') + " bk " + JSON.stringify(EH) + " hl " + JSON.stringify(Ex) + " bd " + EF.size + " ui " + EA + " menu " + (Ej ? 0x1 : 0x0) + " syn " + cS.b1 + (cS.zHeld || cS.xHeld || cS.edges ? " z " + (cS.zHeld ? 0x1 : 0x0) + (cS.xHeld ? 0x1 : 0x0) + cS.edges : '') + " fire " + cL + " box " + cX + '\x20' + z7() + '\x20' + a1() + " mercy " + EN.on + '/' + EN.heals;
}
v(cQ, 'autoplayStateDigest');
function cI() {
  return {
    'lastDir': Ec,
    'commitLeft': Eq,
    'obsSpeed': ES,
    'lastPos': Ek ? Ek.slice() : null,
    'stepCalls': EV,
    'blockedDir': [...EF],
    'blockedKey': {
      ...EH
    },
    'heldLast': {
      ...Ex
    },
    'uiTick': EA,
    'menuPlan': Ej ? {
      'frames': Ej.frames.slice(),
      'i': Ej.i
    } : null,
    'syn': {
      ...cS
    },
    'fireClock': cL,
    'boxClock': cX,
    'lastPunch': cY,
    'boxAttack': {
      'last': cO.last,
      'windup': {
        ...cO.windup
      }
    },
    'ch4': z4(),
    'ch5': zN(),
    'ut': wk(),
    'mercy': c9(EN)
  };
}
v(cI, 'saveAutoplayState');
function cm(z) {
  if (z) {
    Ec = z.lastDir, Eq = z.commitLeft, ES = z.obsSpeed, Ek = z.lastPos ? z.lastPos.slice() : null, EV = z.stepCalls, EF.clear();
    for (let [a, cA] of z.blockedDir) EF.set(a, cA);
    Object.assign(EH, z.blockedKey), Object.assign(Ex, z.heldLast), EA = z.uiTick, Ej = z.menuPlan ? {
      'frames': z.menuPlan.frames.slice(),
      'i': z.menuPlan.i
    } : null, cS.b1 = z.syn.b1, cS.pulse = z.syn.pulse, cS.zHeld = !!z.syn.zHeld, cS.zPrev = !!z.syn.zPrev, cS.xHeld = !!z.syn.xHeld, cS.xPrev = !!z.syn.xPrev, cS.edges = z.syn.edges || '', cL = z.fireClock, cX = z.boxClock, cY = z.lastPunch, cO.last = z.boxAttack.last, cO.windup = {
      ...z.boxAttack.windup
    }, z.ch4 ? z5(z.ch4) : z6(), z.ch5 ? zK(z.ch5) : a0(), wV(z.ut), ca(z.mercy);
  }
}
v(cm, 'loadAutoplayState');
function cp() {
  Ec = 0x0, Eq = 0x0, ES = 0x3, Ek = null, EV = 0x0, EF.clear();
  for (let z of ['left', 'right', 'up', 'down']) EH[z] = 0x0, Ex[z] = !0x1;
  EA = 0x0, Ej = null, cS.b1 = !0x1, cS.pulse = null, cS.zHeld = !0x1, cS.zPrev = !0x1, cS.xHeld = !0x1, cS.xPrev = !0x1, cS.edges = '', cH = '', cL = 0x0, cX = 0x0, cY = 'b2', cO.last = -0x1, cO.windup = {}, z6(), a0(), wF(), ca(null);
}
v(cp, 'resetAutoplayState');
export { j as a, zw as b, zd as c, zM as d, zf as e, zT as f, a5 as g, a6 as h, a7 as i, w2 as j, ww as k, E1 as l, E2 as m, E4 as n, E8 as o, E9 as p, Ez as q, Ew as r, EC as s, EE as t, EU as u, EM as v, Ef as w, EG as x, Er as y, EZ as z, Ey as A, cJ as B, cU as C, cM as D, cD as E, ci as F, cQ as G, cI as H, cm as I, cp as J };