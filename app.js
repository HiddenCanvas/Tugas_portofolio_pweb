// Smooth scroll untuk semua <a href="#...">
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      const targetEl = document.querySelector(targetId);
      const navHeight = document.querySelector('nav').offsetHeight;
      const targetPos = targetEl.offsetTop - navHeight - 10;

      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    }
  });
});
