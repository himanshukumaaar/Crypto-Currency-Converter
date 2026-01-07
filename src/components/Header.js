export function Header() {
  const el = document.createElement('div');
  el.className = 'container';
  el.innerHTML = `
    <div class="row">
      <h1>Crypto Dashboard</h1>
      <div>Real-time prices • Converter • INR/USD</div>
    </div>
  `;
  return el;
}
