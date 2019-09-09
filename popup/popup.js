const days = ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'አርብ', 'ቅዳሜ'];
const months = ['መስከረም', 'ጥቅምት', 'ህዳር', 'ታህሳስ', 'ጥር', 'የካቲት', 'መጋቢት', 'ሚያዚያ', 'ግንቦት', 'ሰኔ', 'ሀምሌ', 'ነሐሴ', 'ጳጉሜ'];

document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const day = today.getDay();

  const [time, pm_am] = today.toLocaleTimeString('en-US-u-ca-ethiopic').split(' ');
  const hour = Number(time.split(':')[0]) > 6 ? (Number(time.split(':')[0]) - 6) : (Number(time.split(':')[0]) + 6);
  const minute = (today.getMinutes() < 10 ? `0${today.getMinutes()}` : `${today.getMinutes()}`);

  const todayEth = today.toLocaleDateString('en-US-u-ca-ethiopic');
  const [month, date, year] = todayEth.split('/');

  document.querySelector('#time').textContent = `${hour}:${minute} ${pm_am == 'PM' ? 'ከሰዓት' : 'ጠዋት'}`;
  document.querySelector('#date').textContent = `${days[day]} ${months[month - 1]} ${date} / ${year}`;
});
