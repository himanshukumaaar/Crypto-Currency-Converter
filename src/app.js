import { Header } from './components/Header.js';
import { TickerList } from './components/TickerList.js';
import { Converter } from './components/Converter.js';
import { ErrorBanner } from './components/ErrorBanner.js';
import { fetchMarket, fetchSimplePrice } from './api/cryptoApi.js';

const headerRoot = document.getElementById('header');
const tickerRoot = document.getElementById('ticker');
const converterRoot = document.getElementById('converter');
const errorRoot = document.getElementById('error');

async function init() {
  headerRoot.appendChild(Header());
  try {
    const ids = ['bitcoin','ethereum','tether','solana','ripple'];
    const [market, prices] = await Promise.all([
      fetchMarket(ids, 'usd'),
      fetchSimplePrice(ids, ['usd','inr'])
    ]);

    tickerRoot.appendChild(TickerList(market, 'usd'));
    converterRoot.appendChild(Converter(prices));
  } catch (e) {
    console.error(e);
    errorRoot.appendChild(ErrorBanner('Failed to load data. Please check your network or try again.'));
  }
}

init();
