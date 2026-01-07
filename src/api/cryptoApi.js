const BASE = 'https://api.coingecko.com/api/v3';

export async function fetchMarket(ids = ['bitcoin','ethereum','tether','solana','ripple'], vs = 'usd') {
  const url = `${BASE}/coins/markets?vs_currency=${vs}&ids=${ids.join(',')}&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function fetchSimplePrice(ids = ['bitcoin','ethereum'], currencies = ['usd','inr']) {
  const url = `${BASE}/simple/price?ids=${ids.join(',')}&vs_currencies=${currencies.join(',')}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
