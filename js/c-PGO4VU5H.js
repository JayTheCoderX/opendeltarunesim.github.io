import { g as J } from "./c-ZQQWH6UG.js";
import { xb as a } from "./c-PBMEVLU6.js";
import { a as O, l } from "./c-XSSGDLV7.js";
l();
var P = ["obj_sansbullet_parent", "obj_gasterblaster", "blt_sizebone", "obj_bonestab", "obj_sans_bonebul", "obj_menubone", "obj_menubone_bottom"];
var M = 0.6;
var A = 9;
var v = 12;
var X = null;
var i = 0;
function q() {
  J.karma = 0;
  X = null;
  i = 0;
}
O(q, "karmaReset");
function Y() {
  return J.karma || 0;
}
O(Y, "karmaAmount");
function R() {
  for (let B of a.list) {
    if (B.destroyed) {
      continue;
    }
    let j = B.constructor.name;
    if (P.includes(j) || typeof B.is == "function" && B.is("obj_sansbullet_parent")) {
      return true;
    }
  }
  return false;
}
O(R, "sourcePresent");
var N = true;
function g() {
  if (N) {
    J.karma = 0;
    return;
  }
  if (typeof J.hp == "number") {
    if (J.karma === undefined) {
      J.karma = 0;
    }
    if (X !== null && J.hp < X) {
      let B = X - J.hp;
      if (B > 0 && R()) {
        let j = Math.min(v - J.karma, Math.floor(B * M));
        if (j > 0) {
          J.hp += j;
          J.karma += j;
        }
      }
    }
    if (J.karma > 0) {
      i++;
      if (i >= A) {
        i = 0;
        if (J.hp > 1) {
          J.hp -= 1;
          J.karma -= 1;
        } else {
          J.karma = Math.max(0, J.karma - 1);
        }
      }
    } else {
      i = 0;
    }
    X = J.hp;
  }
}
O(g, "karmaStep");
function r(B) {
  if (!J.karma || J.karma <= 0 || typeof J.hp != "number") {
    return;
  }
  let j = a.first("obj_hpname");
  if (!j) {
    return;
  }
  let V = B.ctx;
  let Z = J.maxhp || 20;
  let E = 1.2;
  let Q = j.x + 5;
  let H = j.y;
  V.save();
  V.globalAlpha = 0.85;
  V.fillStyle = "#7b2fbe";
  V.fillRect(Math.round(Q + (J.hp - J.karma) * E), Math.round(H), Math.max(1, Math.round(J.karma * E)), 16);
  V.restore();
  B.draw_set_font("fnt_main");
  B.draw_text(Math.round(Q + Z * E + 46), Math.round(H), "KR " + J.karma, "#b47ae0");
}
O(r, "karmaDraw");
export { q as a, Y as b, N as c, g as d, r as e };
