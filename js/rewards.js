// Bank poin & katalog reward. Poin disimpan di localStorage agar bisa ditabung
// lintas ujian. Reward yang sudah ditukar disimpan sebagai "voucher".

const BANK_KEY = 'mathquiz_point_bank';
const VOUCHER_KEY = 'mathquiz_vouchers';

export const REWARDS = [
  { id: 'snack-kecil', emoji: '🍪', name: 'Snack kecil', cost: 50 },
  { id: 'screen-15', emoji: '📱', name: 'Screen time 15 menit', cost: 80 },
  { id: 'es-krim', emoji: '🍦', name: 'Es krim', cost: 120 },
  { id: 'screen-30', emoji: '🎮', name: 'Screen time 30 menit', cost: 150 },
  { id: 'mainan', emoji: '🧸', name: 'Pilih 1 mainan kecil', cost: 180 },
  { id: 'jalan', emoji: '🎡', name: 'Jalan-jalan spesial', cost: 200 }
];

export function getBank() {
  return parseInt(localStorage.getItem(BANK_KEY) || '0', 10);
}

export function addPoints(amount) {
  const total = getBank() + amount;
  localStorage.setItem(BANK_KEY, String(total));
  return total;
}

export function getVouchers() {
  try {
    return JSON.parse(localStorage.getItem(VOUCHER_KEY) || '[]');
  } catch {
    return [];
  }
}

// Tukar reward: kurangi poin & catat voucher. Mengembalikan {ok, message}.
export function redeem(rewardId) {
  const reward = REWARDS.find((r) => r.id === rewardId);
  if (!reward) return { ok: false, message: 'Reward tidak ditemukan.' };

  const bank = getBank();
  if (bank < reward.cost) {
    return { ok: false, message: `Poin belum cukup. Butuh ${reward.cost} ⭐.` };
  }

  localStorage.setItem(BANK_KEY, String(bank - reward.cost));

  const vouchers = getVouchers();
  const code = 'TO-' + Math.floor(1000 + (bank % 9000));
  const date = new Date().toLocaleDateString('id-ID', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
  vouchers.unshift({ ...reward, code, date });
  localStorage.setItem(VOUCHER_KEY, JSON.stringify(vouchers));

  return { ok: true, message: `Yay! ${reward.name} berhasil ditukar 🎉`, voucher: vouchers[0] };
}
