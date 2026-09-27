const NAV_OFFSET = 72;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - (id === 'home' ? 0 : NAV_OFFSET);
  window.scrollTo({ top, behavior: 'smooth' });
}