// Tema karakter kesukaan anak. Tiap tema mengatur warna (CSS variables) & maskot.
export const THEMES = {
  kuromi: {
    name: 'Kuromi',
    tagline: 'Imut, nakal, & berani 🖤',
    mascot: '🐰',
    emojiSet: ['🖤', '💜', '💀', '🎀'],
    vars: {
      '--bg1': '#2b1b3d',
      '--bg2': '#5e3a87',
      '--card': '#ffffff',
      '--primary': '#7b2ff7',
      '--primary-dark': '#5a1fc0',
      '--accent': '#ff5fa2',
      '--text': '#2b1b3d',
      '--good': '#ff5fa2',
      '--soft': '#f3e9ff'
    }
  },
  keroppi: {
    name: 'Keroppi',
    tagline: 'Ceria & suka lompat 🐸',
    mascot: '🐸',
    emojiSet: ['🐸', '💚', '🍃', '🌟'],
    vars: {
      '--bg1': '#0f5132',
      '--bg2': '#3ec46d',
      '--card': '#ffffff',
      '--primary': '#27ae60',
      '--primary-dark': '#1e8c4d',
      '--accent': '#ffd23f',
      '--text': '#14432a',
      '--good': '#27ae60',
      '--soft': '#e6f9ec'
    }
  },
  cinnamoroll: {
    name: 'Cinnamoroll',
    tagline: 'Lembut bagai awan ☁️',
    mascot: '☁️',
    emojiSet: ['☁️', '💙', '🩵', '✨'],
    vars: {
      '--bg1': '#cfe9ff',
      '--bg2': '#8ec9ff',
      '--card': '#ffffff',
      '--primary': '#4aa9f7',
      '--primary-dark': '#2e86d6',
      '--accent': '#ff9ec7',
      '--text': '#234a73',
      '--good': '#4aa9f7',
      '--soft': '#eaf5ff'
    }
  },
  pochacco: {
    name: 'Pochacco',
    tagline: 'Aktif & penuh semangat 🐶',
    mascot: '🐶',
    emojiSet: ['🐶', '💛', '⚽', '🌈'],
    vars: {
      '--bg1': '#2a3b8f',
      '--bg2': '#5aa9e6',
      '--card': '#ffffff',
      '--primary': '#3b7bd6',
      '--primary-dark': '#2a5fb0',
      '--accent': '#ffd23f',
      '--text': '#1f2a52',
      '--good': '#3b7bd6',
      '--soft': '#eaf2ff'
    }
  }
};

export function applyTheme(key) {
  const theme = THEMES[key];
  if (!theme) return;
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  return theme;
}
