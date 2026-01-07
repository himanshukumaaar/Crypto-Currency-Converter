# Crypto Dashboard

![Node](https://img.shields.io/badge/node-%3E%3D18-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![API](https://img.shields.io/badge/API-CoinGecko-orange)
![Status](https://img.shields.io/badge/status-active-success)

A **modern, lightweight, and responsive frontend application** built with **JavaScript (ES6+)** that displays real-time cryptocurrency prices, market statistics, and a fast crypto-to-fiat converter powered by REST APIs.

This project is a reboot of an earlier **Python/Tkinter** application, fully modernized into a **scalable, modular, and production-ready web frontend** suitable for portfolio and open-source use.

---

## ✨ Features

- **Real-time Prices**: View top cryptocurrencies with live price, 24h change, and market capitalization
- **Crypto Converter**: Quick conversions between crypto and **USD / INR**
- **Responsive UI**: Card-based layout, grid system, and mobile-friendly design
- **Modular Architecture**: Reusable components with an isolated API layer
- **Error Handling**: Graceful fallbacks with user-friendly error banners

---

## 🛠 Tech Stack

- JavaScript (ES6+)
- REST APIs (CoinGecko)
- HTML5 / CSS3
- Node.js + npm (development server)

---

## 📂 Project Structure

```
crypto-dashboard/
├─ public/
│  ├─ index.html        # Base HTML
│  └─ styles.css        # Responsive CSS
├─ src/
│  ├─ api/
│  │  └─ cryptoApi.js   # API calls
│  ├─ components/
│  │  ├─ Header.js
│  │  ├─ TickerList.js
│  │  ├─ Converter.js
│  │  └─ ErrorBanner.js
│  ├─ utils/
│  │  └─ format.js      # Formatting helpers
│  └─ app.js            # App entry point
├─ .env.example         # API key template (if needed)
├─ README.md            # Documentation
└─ package.json         # Scripts + dependencies
```

---

## 🔑 API Choice

The application uses the **CoinGecko API** by default:

- ✅ Free to use
- ✅ No API key required
- ✅ Supports INR and USD
- ✅ Rich metadata (logos, market cap, 24h change)

### Example Endpoints

**Market Data**
```
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana
```

**Simple Price**
```
https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,inr
```

### Using an API Key (Optional)

If you switch to an API that requires authentication (e.g., FreeCryptoAPI, Adesic):

1. Copy the environment template
   ```bash
   cp .env.example .env
   ```
2. Add your API key
   ```env
   API_KEY=your_key_here
   ```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/himanshukumaaar/crypto-dashboard
cd crypto-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 📖 Usage

- **Ticker Section**  
  Displays top cryptocurrencies with price, 24h change, and market cap.

- **Converter Section**  
  Enter an amount, select a coin and currency (USD / INR), and get instant conversion.

- **Error Banner**  
  Displays friendly error messages during API failures or network issues.

---

## 🧩 Roadmap

- 🔍 Search and pagination for coins
- ⭐ Favorites / watchlist
- 📈 Sparkline charts for trends
- 🌗 Dark / light theme toggle
- 📱 Progressive Web App (PWA) support

---

## 📝 Commit Plan

- `chore`: clear old files to prepare frontend rebuild
- `feat(ui)`: add base HTML and responsive CSS
- `feat(api)`: add CoinGecko fetchers and formatting utils
- `feat(components)`: add Header, TickerList, Converter, ErrorBanner
- `feat(app)`: initialize app and render components with API data
- `chore(dev)`: add dev server and env template
- `docs`: rewrite README for JS + REST frontend

---

## 📜 License

This project is licensed under the **MIT License**.

