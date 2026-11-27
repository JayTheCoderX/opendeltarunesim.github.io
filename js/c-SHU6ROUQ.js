import { Ks as K, Zr as X } from './c-S573BZHI.js';
import { g as w } from './c-ZQQWH6UG.js';
import { E as B, Ib as W, Jb as Z, Ra as q, eb as a, h, hb as P, na as U, pb as r, qb as e, xb as N } from './c-PBMEVLU6.js';
import { a as G, e as i, l as Y } from './c-XSSGDLV7.js';
Y();
function D(F) {
  if (!F || F.__freshMusic) return;
  F.__freshMusic = true;
  let J = F.prototype;
  for (let H of Object.getOwnPropertyNames(J)) {
    if (H === 'constructor') continue;
    let Q = Object.getOwnPropertyDescriptor(J, H);
    if (!Q || typeof Q.value != 'function') continue;
    let E0 = Q.value,
      E1 = function (...E2) {
        a.depth++;
        try {
          return E0.apply(this, E2);
        } finally {
          a.depth--;
        }
      };
    E1.inner = E0, J[H] = E1;
  }
}
G(D, 'freshMusicEvents'), D(X);
var I = null;
function L(H) {
  if (!H || H.__silhouette) return;
  H.__silhouette = true;
  let E1 = H.prototype.draw,
    E2 = function (E3) {
      let E4 = N.first('obj_rhythmgame'),
        E5 = E3 && E3.ctx;
      if (!B(this.silhouette) || !E4 || !E5 || typeof E5.getTransform != 'function') return E1.call(this, E3);
      let E6 = E4.y + 0x18c,
        E7 = () => {
          E5.beginPath(), E5.rect(-0x186a0, -0x186a0, 0x30d40, E6 + 0x186a0), E5.clip();
        };
      E5.save(), E7(), this.silhouette = 0x0;
      try {
        E1.call(this, E3);
      } finally {
        this.silhouette = 0x1, E5.restore();
      }
      let E8 = this.name === 'susie' ? -0x2 : this.name === 'ralsei' ? 0x2 : 0x0,
        E9 = 0x4,
        EE = I || (I = document.createElement('canvas'));
      (EE.width !== E5.canvas.width || EE.height !== E5.canvas.height) && (EE.width = E5.canvas.width, EE.height = E5.canvas.height);
      let Ex = EE.getContext('2d');
      if (!Ex) return;
      Ex.setTransform(0x1, 0x0, 0x0, 0x1, 0x0, 0x0), Ex.clearRect(0x0, 0x0, EE.width, EE.height), Ex.imageSmoothingEnabled = false, Ex.setTransform(E5.getTransform());
      let Et = E3.fog,
        EF = E3.alpha;
      E3.ctx = Ex, E3.fog = h.black, E3.alpha = 0x1;
      try {
        E3.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, 0x2, 0x2, 0x0, h.white, 0x1), Ex.globalCompositeOperation = "destination-in", E3.draw_sprite_ext(this.sprite_index, this.image_index, this.x + E8, this.y + E9, 0x2, 0x2, 0x0, h.white, 0x1);
      } finally {
        Ex.globalCompositeOperation = "source-over", E3.ctx = E5, E3.fog = Et, E3.alpha = EF;
      }
      E5.save(), E7(), E5.setTransform(0x1, 0x0, 0x0, 0x1, 0x0, 0x0), E5.globalAlpha = 0.9, E5.drawImage(EE, 0x0, 0x0), E5.restore();
    };
  E2.inner = E1, H.prototype.draw = E2;
}
G(L, 'performerSilhouette'), L(K);
var V = class Ez extends r {
  ["create"]() {
    this.depth = 0x30d40, this.started = 0x0, this.buf = 0x4, P(), w.band_difficulty === void 0x0 && (w.band_difficulty = 0x0), N.with('obj_heroparent', J => {
      J.visible = false;
    });
    let F = W(0x0, 0x0, X);
    F.replayversion = false, F.hardmode = w.band_difficulty === 0x1 ? 0x1 : 0x0, F.song_id = 0x0, F.freeplay = -0x2, this.rg = F;
  }
  ["step"]() {
    if (N.with('obj_heroparent', J => {
      J.visible = false;
    }), this.buf > 0x0) {
      this.buf--;
      return;
    }
    let F = this.rg;
    if (!(!F || F.destroyed || !Z(F))) {
      if (this.started && F.song_done) {
        if (this.doneT = (this.doneT || 0x0) + 0x1, this.doneT < 0x5a) return;
        this.doneT = 0x0, this.started = 0x0, this.buf = 0x4;
        let J = F.song_id,
          H = F.hardmode;
        try {
          F.event_user(0x1);
        } catch (Q) {
          console.warn("rhythm launcher event_user(1)", Q);
        }
        P(), w.batmusic = [null, null], F.freeplay = -0x2, F.song_id = J, F.hardmode = H;
        return;
      }
      if (!this.started) {
        if (F.freeplay < 0x0) {
          if (U()) {
            this.started = 0x1, P(), w.batmusic = [null, null], q('snd_select'), F.replayversion = false, F.freeplay = 0x0;
            try {
              F.event_user(0x0);
            } catch (E0) {
              console.warn("rhythm launcher event_user(0)", E0);
            }
          }
          return;
        }
        this.started = 0x1;
      }
    }
  }
};
G(V, 'obj_rhythmgame_launcher'), i(V, 'kinds', e('obj_rhythmgame_launcher', r));
var o = V;
function R(t) {
  return t ? [{
    ...t,
    'id': 'ch3rhythm',
    'name': "Rhythm Game (Track Select)",
    'area': "TV World",
    'desc': "The band's own game.#All seven songs, and Hard.#Up/Down picks, Left/Right is Hard.",
    'generated': false,
    'encounterno': 0x0,
    'custom': true,
    'customTag': 'MINIGAME',
    'timedMinigame': true,
    'minigameOnly': true,
    'standaloneMinigame': true,
    'glow': 'aqua',
    'monsters': [],
    'music': '',
    'background': () => {
      W(0x0, 0x0, o);
    }
  }] : [];
}
G(R, 'buildRhythmFights');
export { D as a, L as b, o as c, R as d };