import { THEMES, applyTheme } from './themes.js';
import { buildQuiz, POINTS_PER_CORRECT, EXAM_DURATION_SEC } from './questions.js';
import { REWARDS, getBank, addPoints, getVouchers, redeem } from './rewards.js';
import { sfx, isMuted, toggleMute } from './sound.js';

// ---------- State aplikasi ----------
const state = {
  themeKey: null,
  theme: null,
  playerName: '',
  grade: null,
  questions: [],
  current: 0,
  answers: [], // index jawaban yang dipilih per soal (null jika belum)
  locked: false,
  timeLeft: EXAM_DURATION_SEC,
  timerId: null
};

// ---------- Helper DOM ----------
const $ = (sel) => document.querySelector(sel);
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  $('#' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- Layar 1: Pilih tema ----------
function buildThemeScreen() {
  const grid = $('#theme-grid');
  grid.innerHTML = '';
  Object.entries(THEMES).forEach(([key, theme]) => {
    const card = el('button', 'theme-card');
    card.innerHTML = `
      <span class="tc-mascot">${theme.mascot}</span>
      <span class="tc-name">${theme.name}</span>
      <span class="tc-tag">${theme.tagline}</span>
    `;
    card.addEventListener('mouseenter', () => previewTheme(key));
    card.addEventListener('focus', () => previewTheme(key));
    card.addEventListener('click', () => selectTheme(key));
    grid.appendChild(card);
  });
}

function previewTheme(key) {
  applyTheme(key);
}

function selectTheme(key) {
  state.themeKey = key;
  state.theme = applyTheme(key);
  sfx.click();
  $('#setup-mascot').textContent = state.theme.mascot;
  showScreen('screen-setup');
}

// ---------- Layar 2: Setup ----------
function bindSetup() {
  document.querySelectorAll('.grade-card').forEach((btn) => {
    btn.addEventListener('click', () => {
      sfx.click();
      state.playerName = ($('#player-name').value || '').trim();
      state.grade = parseInt(btn.dataset.grade, 10);
      startQuiz();
    });
  });
  document.querySelectorAll('[data-back]').forEach((btn) => {
    btn.addEventListener('click', () => showScreen(btn.dataset.back));
  });
}

// ---------- Layar 3: Kuis ----------
function startQuiz() {
  state.questions = buildQuiz(state.grade);
  state.current = 0;
  state.answers = new Array(state.questions.length).fill(null);
  state.locked = false;
  showScreen('screen-quiz');
  startTimer();
  renderQuestion();
}

// ---------- Timer ujian ----------
function startTimer() {
  stopTimer();
  state.timeLeft = EXAM_DURATION_SEC;
  updateTimerDisplay();
  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    updateTimerDisplay();
    if (state.timeLeft <= 10 && state.timeLeft > 0) sfx.tick();
    if (state.timeLeft <= 0) {
      stopTimer();
      sfx.timeup();
      flash('⏰ Waktu habis! Yuk lihat hasilnya.', false);
      showResult();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateTimerDisplay() {
  const m = Math.floor(state.timeLeft / 60);
  const s = state.timeLeft % 60;
  $('#timer-text').textContent = `${m}:${String(s).padStart(2, '0')}`;
  const pill = $('#timer-pill');
  pill.classList.toggle('warning', state.timeLeft <= 60);
}

function renderQuestion() {
  const total = state.questions.length;
  const q = state.questions[state.current];
  state.locked = false;

  // progress
  $('#progress-fill').style.width = `${(state.current / total) * 100}%`;
  $('#progress-text').textContent = `${state.current + 1} / ${total}`;
  $('#live-score').textContent = countCorrect() * POINTS_PER_CORRECT;

  // konten soal
  $('#materi-tag').textContent = q.materi;
  $('#question-text').textContent = q.q;

  const visual = $('#question-visual');
  if (q.visual && q.visual.trim()) {
    visual.textContent = q.visual;
    visual.hidden = false;
  } else {
    visual.hidden = true;
  }

  // opsi
  const optWrap = $('#options');
  optWrap.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = el('button', 'option');
    btn.innerHTML = `<span class="opt-key">${labels[i]}</span><span class="opt-text">${opt}</span>`;
    btn.addEventListener('click', () => chooseAnswer(i));
    optWrap.appendChild(btn);
  });

  $('#feedback').hidden = true;
  const nextBtn = $('#next-btn');
  nextBtn.hidden = true;
  nextBtn.textContent = state.current === total - 1 ? 'Lihat Hasil 🏆' : 'Lanjut ➡️';
}

function chooseAnswer(index) {
  if (state.locked) return;
  state.locked = true;
  const q = state.questions[state.current];
  state.answers[state.current] = index;

  const buttons = document.querySelectorAll('#options .option');
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add('correct');
    if (i === index && index !== q.answer) b.classList.add('wrong');
  });

  const fb = $('#feedback');
  const isCorrect = index === q.answer;
  if (isCorrect) {
    fb.className = 'feedback good';
    fb.innerHTML = `🎉 <strong>Benar!</strong> ${pick(state.theme.emojiSet)} ${q.explain}`;
    sfx.correct();
    burstConfetti();
  } else {
    fb.className = 'feedback bad';
    fb.innerHTML = `💡 <strong>Belum tepat.</strong> Jawaban benar: <strong>${q.options[q.answer]}</strong>. ${q.explain}`;
    sfx.wrong();
  }
  fb.hidden = false;
  $('#live-score').textContent = countCorrect() * POINTS_PER_CORRECT;
  $('#next-btn').hidden = false;
}

function bindQuizNav() {
  $('#next-btn').addEventListener('click', () => {
    sfx.click();
    if (state.current < state.questions.length - 1) {
      state.current += 1;
      renderQuestion();
    } else {
      showResult();
    }
  });
  $('#mute-btn').addEventListener('click', updateMuteBtn);
}

function updateMuteBtn() {
  const muted = toggleMute();
  $('#mute-btn').textContent = muted ? '🔇' : '🔊';
}

function countCorrect() {
  return state.answers.reduce(
    (acc, ans, i) => acc + (ans === state.questions[i].answer ? 1 : 0),
    0
  );
}

// ---------- Layar 4: Hasil ----------
function showResult() {
  stopTimer();
  const total = state.questions.length;
  const correct = countCorrect();
  const percent = Math.round((correct / total) * 100);
  const earned = correct * POINTS_PER_CORRECT;

  $('#progress-fill').style.width = '100%';
  sfx.finish();

  // tambahkan poin ke bank tabungan
  addPoints(earned);

  $('#final-correct').textContent = correct;
  $('#final-percent').textContent = percent;
  $('#final-points').textContent = earned;

  const { mascot, title, message } = gradeMessage(percent);
  $('#result-mascot').textContent = mascot;
  $('#result-title').textContent = title;
  $('#result-message').textContent = message;

  renderRewards();
  renderEvaluation();
  if (percent >= 70) burstConfetti(true);
  showScreen('screen-result');
}

function gradeMessage(percent) {
  const name = state.playerName ? state.playerName : 'Adik';
  const m = state.theme.mascot;
  if (percent === 100) return { mascot: '🏆', title: `Sempurna, ${name}!`, message: `${m} Semua benar! Kamu juara matematika hari ini!` };
  if (percent >= 80) return { mascot: '🌟', title: `Hebat, ${name}!`, message: `${m} Pinter banget! Tinggal sedikit lagi sempurna.` };
  if (percent >= 60) return { mascot: '😊', title: `Bagus, ${name}!`, message: `${m} Sudah bagus! Yuk pelajari lagi yang masih salah.` };
  if (percent >= 40) return { mascot: '💪', title: `Semangat, ${name}!`, message: `${m} Sedikit lagi! Coba lihat pembahasan di bawah ya.` };
  return { mascot: '🤗', title: `Tetap semangat, ${name}!`, message: `${m} Jangan sedih, belajar lagi pasti bisa! Lihat pembahasannya yuk.` };
}

function renderRewards() {
  $('#point-bank').textContent = getBank();
  const list = $('#reward-list');
  list.innerHTML = '';
  REWARDS.forEach((r) => {
    const affordable = getBank() >= r.cost;
    const item = el('div', 'reward-item' + (affordable ? ' ready' : ' locked'));
    item.innerHTML = `
      <span class="rw-emoji">${r.emoji}</span>
      <span class="rw-name">${r.name}</span>
      <span class="rw-cost">${r.cost} ⭐</span>
    `;
    const btn = el('button', 'rw-btn', affordable ? 'Tukar' : 'Kurang');
    btn.disabled = !affordable;
    btn.addEventListener('click', () => {
      const res = redeem(r.id);
      flash(res.message, res.ok);
      if (res.ok) { sfx.reward(); burstConfetti(); } else { sfx.wrong(); }
      renderRewards();
    });
    item.appendChild(btn);
    list.appendChild(item);
  });

  // voucher yang sudah ditukar
  const vWrap = $('#voucher-list');
  const vouchers = getVouchers();
  vWrap.innerHTML = vouchers.length
    ? '<p class="voucher-title">🎫 Voucher kamu (tunjukkan ke Mama/Papa):</p>'
    : '';
  vouchers.slice(0, 6).forEach((v) => {
    vWrap.appendChild(el('div', 'voucher', `${v.emoji} ${v.name} <span class="v-code">${v.code}</span> <span class="v-date">${v.date}</span>`));
  });
}

function renderEvaluation() {
  const box = $('#eval-box');
  const list = $('#eval-list');
  list.innerHTML = '';
  const wrong = getWrongList();

  if (wrong.length === 0) {
    box.querySelector('h3').textContent = '📒 Belajar dari yang salah';
    list.appendChild(el('div', 'eval-perfect', '🎉 Tidak ada yang salah. Keren banget!'));
    return;
  }

  wrong.forEach((w) => {
    const item = el('div', 'eval-item');
    const yours = w.chosen === null ? '(tidak dijawab)' : w.options[w.chosen];
    item.innerHTML = `
      <p class="ev-q"><strong>${w.no}. ${w.q}</strong></p>
      <p class="ev-wrong">❌ Jawabanmu: ${yours}</p>
      <p class="ev-right">✅ Seharusnya: <strong>${w.options[w.answer]}</strong></p>
      <p class="ev-explain">💡 ${w.explain}</p>
    `;
    list.appendChild(item);
  });
}

function getWrongList() {
  const wrong = [];
  state.questions.forEach((q, i) => {
    if (state.answers[i] !== q.answer) {
      wrong.push({ no: i + 1, q: q.q, options: q.options, answer: q.answer, chosen: state.answers[i], explain: q.explain });
    }
  });
  return wrong;
}

// ---------- Share WhatsApp ----------
function buildShareText() {
  const total = state.questions.length;
  const correct = countCorrect();
  const percent = Math.round((correct / total) * 100);
  const earned = correct * POINTS_PER_CORRECT;
  const name = state.playerName || 'Adik';

  let text = `🌸 *Hasil Try Out Matematika* 🌸\n`;
  text += `👧 Nama: ${name}\n`;
  text += `📚 Kelas: ${state.grade} SD\n`;
  text += `🎀 Tema: ${state.theme.name}\n`;
  text += `\n`;
  text += `✅ Benar: ${correct} dari ${total}\n`;
  text += `📊 Skor: ${percent}%\n`;
  text += `⭐ Poin diraih: ${earned}\n`;
  text += `💰 Tabungan poin: ${getBank()}\n`;

  const wrong = getWrongList();
  if (wrong.length === 0) {
    text += `\n🏆 Semua jawaban BENAR! Hebat sekali!`;
  } else {
    text += `\n📒 *Evaluasi (yang perlu dipelajari):*\n`;
    wrong.forEach((w) => {
      const yours = w.chosen === null ? '(kosong)' : w.options[w.chosen];
      text += `\n${w.no}. ${w.q}\n`;
      text += `   ❌ Jawab: ${yours}\n`;
      text += `   ✅ Benar: ${w.options[w.answer]}\n`;
      text += `   💡 ${w.explain}\n`;
    });
  }
  text += `\n— dikirim dari aplikasi Try Out Matematika 💕`;
  return text;
}

function bindResultActions() {
  $('#share-btn').addEventListener('click', () => {
    const url = 'https://wa.me/?text=' + encodeURIComponent(buildShareText());
    window.open(url, '_blank');
  });
  $('#retry-btn').addEventListener('click', () => {
    showScreen('screen-setup');
  });
}

// ---------- Util: confetti, flash, pick ----------
function pick(arr) {
  // hindari Math.random untuk variasi sederhana berdasarkan waktu
  return arr[(new Date().getMilliseconds()) % arr.length];
}

function burstConfetti(big = false) {
  const layer = $('#confetti');
  const set = state.theme ? state.theme.emojiSet : ['⭐', '✨', '🎉'];
  const count = big ? 40 : 16;
  for (let i = 0; i < count; i++) {
    const piece = el('span', 'confetti-piece', set[i % set.length]);
    const left = (i * 6.7 + (new Date().getMilliseconds() % 20)) % 100;
    piece.style.left = left + '%';
    piece.style.animationDelay = (i % 10) * 0.06 + 's';
    piece.style.fontSize = (16 + (i % 4) * 6) + 'px';
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 1800);
  }
}

let flashTimer = null;
function flash(message, good) {
  let bar = $('#flash');
  if (!bar) {
    bar = el('div', 'flash');
    bar.id = 'flash';
    document.body.appendChild(bar);
  }
  bar.textContent = message;
  bar.className = 'flash show ' + (good ? 'good' : 'bad');
  clearTimeout(flashTimer);
  flashTimer = setTimeout(() => { bar.className = 'flash'; }, 2200);
}

// ---------- Init ----------
function init() {
  buildThemeScreen();
  bindSetup();
  bindQuizNav();
  bindResultActions();
  applyTheme('cinnamoroll'); // tema awal lembut sebelum dipilih
  $('#mute-btn').textContent = isMuted() ? '🔇' : '🔊';
}

init();
