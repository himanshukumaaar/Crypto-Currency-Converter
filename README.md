# Crypto Dashboard

A responsive frontend application built with **JavaScript (ES6+)** that displays real-time cryptocurrency prices, market stats, and a simple converter using **REST APIs**.  
This project is a reboot of the earlier Python/Tkinter app, now modernized into a clean, modular frontend.

---

## ✨ Features
- **Real-time prices**: Top coins with 24h change and market cap
- **Converter**: Quick INR/USD conversions for selected coins
- **Responsive UI**: Clean cards, grid layout, mobile-friendly
- **Modular components**: Maintainable structure with isolated API layer
- **Error handling**: Graceful fallback with error banners

---

## 🛠 Tech Stack
- **JavaScript (ES6+)**
- **REST APIs (CoinGecko)**
- **HTML5 / CSS3**
- **Node.js + npm (for dev server)**

---

## 📂 Project Structure

crypto-dashboard/
├─ public/
│  ├─ index.html         # Base HTML
│  └─ styles.css         # Responsive CSS
├─ src/
│  ├─ api/
│  │  └─ cryptoApi.js    # API calls
│  ├─ components/
│  │  ├─ Header.js
│  │  ├─ TickerList.js
│  │  ├─ Converter.js
│  │  └─ ErrorBanner.js
│  ├─ utils/
│  │  └─ format.js       # Formatting helpers
│  └─ app.js             # App entry point
├─ .env.example         # API key template (if needed)
├─ README.md             # Documentation
└─ package.json          # Scripts + dependencies



---

## 🔑 API Choice
We use **CoinGecko API** by default:
- ✅ Free
- ✅ No API key required
- ✅ Supports INR and USD
- ✅ Rich metadata (logos, market cap, 24h change)

Example endpoints:
- Market data: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana

- Simple price: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,inr

If you switch to an API that requires a key (e.g., FreeCryptoAPI, Adesic), copy `.env.example` to `.env` and add:
```env
API_KEY=your_key_here


🚀 Getting Started
1. Clone the repo
bash
git clone https://github.com/himanshukumaaar/crypto-dashboard
cd crypto-dashboard
2. Install dependencies
bash
npm install
3. Run dev server
bash
npm run dev
Open http://localhost:5173 in your browser.

📖 Usage
Ticker Section: Displays top coins with price, 24h change, and market cap.

Converter Section: Enter amount, select coin + currency (USD/INR), and get instant conversion.

Error Banner: Shows if API fails or network issues occur.

🧩 Roadmap
🔍 Search and pagination for coins

⭐ Favorites/watchlist

📈 Sparkline charts

🌗 Dark/light theme toggle

📱 PWA support for mobile

📝 Commit Plan
chore: clear old files to prepare frontend rebuild

feat(ui): add base HTML and responsive CSS

feat(api): add CoinGecko fetchers and formatting utils

feat(components): add Header, TickerList, Converter, ErrorBanner

feat(app): initialize app and render components with API data

chore(dev): add dev server and env template

docs: rewrite README for JS + REST frontend

📜 License
MIT
