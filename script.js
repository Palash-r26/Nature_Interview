
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) toggle.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }});
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const form = document.getElementById('inquiry-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const orig = btn.innerHTML;
    btn.innerHTML = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = 'Inquiry Sent';
      form.reset();
      setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 2500);
    }, 900);
  });
}

const y = document.getElementById('year'); 
if (y) y.textContent = new Date().getFullYear();