
// Mobile Menu Toggle, Site Views, and Contact Form
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });

  const viewCount = document.querySelector('[data-view-count]');
  if (viewCount) {
    fetch('https://api.countapi.xyz/hit/gsuryashis.github.io/visits')
      .then((response) => response.json())
      .then((data) => {
        viewCount.textContent = Number(data.value).toLocaleString('en-IN');
      })
      .catch(() => {
        viewCount.textContent = '—';
      });
  }

  const contactForm = document.querySelector('#contact-form');
  if (contactForm instanceof HTMLFormElement) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = String(formData.get('name') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const subject = String(formData.get('subject') || '').trim();
      const message = String(formData.get('message') || '').trim();
      const recipient = contactForm.dataset.recipient || 'ghsuryashis@gmail.com';
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    });
  }
});
