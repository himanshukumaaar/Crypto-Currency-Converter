export function ErrorBanner(message) {
  const el = document.createElement('div');
  el.className = 'card';
  el.style.border = '1px solid var(--danger)';
  el.textContent = message || 'Something went wrong. Please retry.';
  return el;
}
