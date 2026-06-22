// Toast
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2400);
}

// Modal open/close
function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Close modal on backdrop click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('open');
  }
});

// Escape key closes modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop.open').forEach(m => m.classList.remove('open'));
  }
});

// Unique ID
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// Format date nicely
function fmtDate(d) {
  if (!d) return '—';
  const dt = new Date(d + 'T00:00:00');
  return dt.toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Urgency badge html
function urgencyBadge(u) {
  const map = { High: 'badge-high', Medium: 'badge-medium', Low: 'badge-low' };
  return `<span class="badge ${map[u] || 'badge-low'}">${u || 'Low'}</span>`;
}

// Status badge html
function statusBadge(s) {
  const map = { Done: 'badge-done', 'In progress': 'badge-progress', 'Not started': 'badge-todo' };
  return `<span class="badge ${map[s] || 'badge-todo'}">${s || 'Not started'}</span>`;
}
