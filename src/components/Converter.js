import { fmtCurrency } from '../utils/format.js';

export function Converter(rates) {
  const section = document.createElement('div');
  section.className = 'container card';

  const coins = Object.keys(rates);
  const currencies = Object.keys(rates[coins[0]] || { usd: 1, inr: 1 });

  section.innerHTML = `
    <h2>Converter</h2>
    <div class="row" style="gap:16px; flex-wrap:wrap">
      <div style="flex:1">
        <label>Amount</label>
        <input id="amount" type="number" min="0" step="0.0001" value="1" />
      </div>
      <div style="flex:1">
        <label>Coin</label>
        <select id="coin">${coins.map(c => `<option value="${c}">${c}</option>`).join('')}</select>
      </div>
      <div style="flex:1">
        <label>Currency</label>
        <select id="currency">${currencies.map(cur => `<option value="${cur}">${cur.toUpperCase()}</option>`).join('')}</select>
      </div>
    </div>
    <div id="result" style="margin-top:12px; font-weight:600"></div>
  `;

  const amountEl = section.querySelector('#amount');
  const coinEl = section.querySelector('#coin');
  const curEl = section.querySelector('#currency');
  const resultEl = section.querySelector('#result');

  function render() {
    const amt = parseFloat(amountEl.value || '0');
    const coin = coinEl.value;
    const cur = curEl.value;
    const rate = rates[coin]?.[cur] ?? 0;
    const value = amt * rate;
    resultEl.textContent = `${amt} ${coin} ≈ ${fmtCurrency(value, cur.toUpperCase())}`;
  }

  amountEl.addEventListener('input', render);
  coinEl.addEventListener('change', render);
  curEl.addEventListener('change', render);
  render();

  return section;
}
