 document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('i');
      
      answer.classList.toggle('hidden');
      icon.classList.toggle('ri-add-line');
      icon.classList.toggle('ri-subtract-line');
    });
  });