import { l as G } from "./c-XSSGDLV7.js";
G();
self.onmessage = e => {
  let {
    id: T,
    blob: R
  } = e.data || {};
  createImageBitmap(R).then(z => self.postMessage({
    id: T,
    bm: z
  }, [z]), z => self.postMessage({
    id: T,
    err: String(z && z.message || z)
  }));
};
