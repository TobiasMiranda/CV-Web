// Scroll fade-in animation
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.section-title, .body-text, .stat-card, .timeline-item, .skill-group, .project-card, .contact-item, .page-title, .page-subtitle'
  );

  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));

  // Hero always visible immediately
  document.querySelectorAll('.hero *').forEach(el => {
    el.classList.remove('fade-in');
  });
});
