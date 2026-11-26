var I = function () {
    var x = true;
    return function (E, V) {
      var J = x ? function () {
        if (V) {
          var C = V.apply(E, arguments);
          return V = null, C;
        }
      } : function () {};
      return x = false, J;
    };
  }(),
  t = I(this, function () {
    if (t.bind().toString().indexOf('\x0a') !== -0x1) return;
    return t.toString().search(".*").toString().constructor(t).search(".*");
  });
t();
import { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q } from './c-DTW63MWW.js';
import './c-MYK6C3LF.js';
import './c-ZQQWH6UG.js';
import './c-PBMEVLU6.js';
import './c-XSSGDLV7.js';
export { b as applyBulletDamage, d as obj_bulletgenparent, c as obj_bulletparent, l as obj_carouselbullet, p as obj_centerscythe, o as obj_clubsbullet_dark, e as obj_collidebullet, i as obj_dbullet_maker, h as obj_dbullet_vert, k as obj_heartbomb_blast, n as obj_joker_teleport, q as obj_laserscythe, f as obj_regularbullet, g as obj_regularbullet_permanent, m as obj_spadering, j as obj_suitbomb, a as scr_bullet_inherit };