import { fmtCurrency, fmtPct, classByChange } from '../utils/format.js';

export function TickerList(coins, vs = 'usd') {
  const section = document.createElement('div');
  section.className = 'container';
  const grid = document.createElement('div');
  grid.className = 'grid';

  coins.forEach(c => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="row">
        <div class="row">
          <img src="${c.image}" alt="${c.name}" width="28" height="28" style="border-radius:50%" />
          <strong>${c.name} (${c.symbol.toUpperCase()})</strong>
        </div>
        <div>${fmtCurrency(c.current_price, vs.toUpperCase())}</div>
      </div>
      <div class="${classByChange(c.price_change_percentage_24h)}">
        24h: ${fmtPct(c.price_change_percentage_24h)}
      </div>
      <div>Market Cap: ${fmtCurrency(c.market_cap, vs.toUpperCase())}</div>
    `;
    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
}
