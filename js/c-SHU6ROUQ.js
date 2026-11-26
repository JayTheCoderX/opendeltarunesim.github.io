import { Ks as K, Zr as X } from "./c-S573BZHI.js";
import { g as w } from "./c-ZQQWH6UG.js";
import { E as B, Ib as W, Jb as Z, Ra as q, eb as a, h, hb as P, na as U, pb as r, qb as e, xb as N } from "./c-PBMEVLU6.js";
import { a as G, e as i, l as Y } from "./c-XSSGDLV7.js";
Y();
function D(F) {
  if (!F || F.__freshMusic) {
    return;
  }
  F.__freshMusic = true;
  let J = F.prototype;
  for (let H of Object.getOwnPropertyNames(J)) {
    if (H === "constructor") {
      continue;
    }
    let Q = Object.getOwnPropertyDescriptor(J, H);
    if (!Q || typeof Q.value != "function") {
      continue;
    }
    let E0 = Q.value;
    let E1 = function (...E2) {
      a.depth++;
      try {
        return E0.apply(this, E2);
      } finally {
        a.depth--;
      }
    };
    E1.inner = E0;
    J[H] = E1;
  }
}
G(D, "freshMusicEvents");
D(X);
var I = null;
function L(H) {
  if (!H || H.__silhouette) {
    return;
  }
  H.__silhouette = true;
  let E1 = H.prototype.draw;
  let E2 = function (E3) {
    let E4 = N.first("obj_rhythmgame");
    let E5 = E3 && E3.ctx;
    if (!B(this.silhouette) || !E4 || !E5 || typeof E5.getTransform != "function") {
      return E1.call(this, E3);
    }
    let E6 = E4.y + 396;
    let E7 = () => {
      E5.beginPath();
      E5.rect(-100000, -100000, 200000, E6 + 100000);
      E5.clip();
    };
    E5.save();
    E7();
    this.silhouette = 0;
    try {
      E1.call(this, E3);
    } finally {
      this.silhouette = 1;
      E5.restore();
    }
    let E8 = this.name === "susie" ? -2 : this.name === "ralsei" ? 2 : 0;
    let E9 = 4;
    let EE = I ||= document.createElement("canvas");
    if (EE.width !== E5.canvas.width || EE.height !== E5.canvas.height) {
      EE.width = E5.canvas.width;
      EE.height = E5.canvas.height;
    }
    let Ex = EE.getContext("2d");
    if (!Ex) {
      return;
    }
    Ex.setTransform(1, 0, 0, 1, 0, 0);
    Ex.clearRect(0, 0, EE.width, EE.height);
    Ex.imageSmoothingEnabled = false;
    Ex.setTransform(E5.getTransform());
    let Et = E3.fog;
    let EF = E3.alpha;
    E3.ctx = Ex;
    E3.fog = h.black;
    E3.alpha = 1;
    try {
      E3.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, 2, 2, 0, h.white, 1);
      Ex.globalCompositeOperation = "destination-in";
      E3.draw_sprite_ext(this.sprite_index, this.image_index, this.x + E8, this.y + E9, 2, 2, 0, h.white, 1);
    } finally {
      Ex.globalCompositeOperation = "source-over";
      E3.ctx = E5;
      E3.fog = Et;
      E3.alpha = EF;
    }
    E5.save();
    E7();
    E5.setTransform(1, 0, 0, 1, 0, 0);
    E5.globalAlpha = 0.9;
    E5.drawImage(EE, 0, 0);
    E5.restore();
  };
  E2.inner = E1;
  H.prototype.draw = E2;
}
G(L, "performerSilhouette");
L(K);
var V = class Ez extends r {
  create() {
    this.depth = 200000;
    this.started = 0;
    this.buf = 4;
    P();
    if (w.band_difficulty === undefined) {
      w.band_difficulty = 0;
    }
    N.with("obj_heroparent", J => {
      J.visible = false;
    });
    let F = W(0, 0, X);
    F.replayversion = false;
    F.hardmode = w.band_difficulty === 1 ? 1 : 0;
    F.song_id = 0;
    F.freeplay = -2;
    this.rg = F;
  }
  step() {
    N.with("obj_heroparent", J => {
      J.visible = false;
    });
    if (this.buf > 0) {
      this.buf--;
      return;
    }
    let F = this.rg;
    if (!!F && !F.destroyed && !!Z(F)) {
      if (this.started && F.song_done) {
        this.doneT = (this.doneT || 0) + 1;
        if (this.doneT < 90) {
          return;
        }
        this.doneT = 0;
        this.started = 0;
        this.buf = 4;
        let J = F.song_id;
        let H = F.hardmode;
        try {
          F.event_user(1);
        } catch (Q) {
          console.warn("rhythm launcher event_user(1)", Q);
        }
        P();
        w.batmusic = [null, null];
        F.freeplay = -2;
        F.song_id = J;
        F.hardmode = H;
        return;
      }
      if (!this.started) {
        if (F.freeplay < 0) {
          if (U()) {
            this.started = 1;
            P();
            w.batmusic = [null, null];
            q("snd_select");
            F.replayversion = false;
            F.freeplay = 0;
            try {
              F.event_user(0);
            } catch (E0) {
              console.warn("rhythm launcher event_user(0)", E0);
            }
          }
          return;
        }
        this.started = 1;
      }
    }
  }
};
G(V, "obj_rhythmgame_launcher");
i(V, "kinds", e("obj_rhythmgame_launcher", r));
var o = V;
function R(t) {
  if (t) {
    return [{
      ...t,
      id: "ch3rhythm",
      name: "Rhythm Game (Track Select)",
      area: "TV World",
      desc: "The band's own game.#All seven songs, and Hard.#Up/Down picks, Left/Right is Hard.",
      generated: false,
      encounterno: 0,
      custom: true,
      customTag: "MINIGAME",
      timedMinigame: true,
      minigameOnly: true,
      standaloneMinigame: true,
      glow: "aqua",
      monsters: [],
      music: "",
      background: () => {
        W(0, 0, o);
      }
    }];
  } else {
    return [];
  }
}
G(R, "buildRhythmFights");
export { D as a, L as b, o as c, R as d };
