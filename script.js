 // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));

  // Form submit → WhatsApp
  function handleSubmit(e) {
    e.preventDefault();
    const name     = e.target.querySelector('input[type="text"]').value;
    const phone    = e.target.querySelector('input[type="tel"]').value;
    const business = e.target.querySelectorAll('input')[2].value;
    const message  = e.target.querySelector('textarea').value;

    const text = `Hi Sachin! 👋%0AName: ${name}%0APhone: ${phone}%0ABusiness: ${business}%0AProject: ${message}`;
    window.open(`https://wa.me/917689881525?text=${text}`, '_blank');

    const btn = e.target.querySelector('.btn-submit');
    btn.textContent = '✅ Opening WhatsApp…';
    btn.style.background = 'var(--sage)';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = 'Send Enquiry →'; btn.style.background = ''; btn.disabled = false; }, 3000);
  }