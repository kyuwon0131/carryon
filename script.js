function toggleFeat(id) {
  const card = document.getElementById(id);
  const isOpen = card.classList.contains('open');
  document.querySelectorAll('.feat-card').forEach(c => c.classList.remove('open'));
  if (!isOpen) card.classList.add('open');
}