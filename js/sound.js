// Efek suara dibuat langsung dengan Web Audio API (tanpa file audio eksternal).
// Bisa di-mute/unmute, status disimpan di localStorage.

const MUTE_KEY = 'mathquiz_muted';
let ctx = null;
let muted = localStorage.getItem(MUTE_KEY) === '1';

function getCtx() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) ctx = new AC();
  }
  // browser kadang men-suspend AudioContext sampai ada interaksi user
  if (ctx && ctx.state === 'suspended') ctx.resume();
  return ctx;
}

export function isMuted() {
  return muted;
}

export function toggleMute() {
  muted = !muted;
  localStorage.setItem(MUTE_KEY, muted ? '1' : '0');
  if (!muted) beep([660, 880], 0.08); // bunyi kecil saat diaktifkan
  return muted;
}

// Mainkan deretan nada. notes = array frekuensi (Hz), step = durasi tiap nada (detik).
function beep(notes, step = 0.12, type = 'sine', startGain = 0.18) {
  if (muted) return;
  const audio = getCtx();
  if (!audio) return;
  let t = audio.currentTime;
  notes.forEach((freq) => {
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(startGain, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + step);
    osc.connect(gain).connect(audio.destination);
    osc.start(t);
    osc.stop(t + step);
    t += step;
  });
}

// Efek-efek siap pakai
export const sfx = {
  click: () => beep([520], 0.06, 'triangle', 0.12),
  correct: () => beep([660, 880, 1175], 0.11, 'sine', 0.2),      // naik ceria
  wrong: () => beep([330, 247], 0.16, 'sawtooth', 0.14),         // turun
  finish: () => beep([523, 659, 784, 1047], 0.14, 'triangle', 0.2), // do-mi-sol-do
  reward: () => beep([784, 988, 1319], 0.12, 'sine', 0.2),
  tick: () => beep([880], 0.05, 'square', 0.08),                 // detik terakhir
  timeup: () => beep([440, 392, 349, 294], 0.18, 'sawtooth', 0.16)
};
