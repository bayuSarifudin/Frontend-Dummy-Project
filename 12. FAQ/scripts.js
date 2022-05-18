const faqBtn = document.querySelectorAll('.faq-toggle');
const container = document.querySelectorAll('.faq');

faqBtn.forEach((btn) => {
   btn.addEventListener('click', () => {
      btn.parentNode.classList.toggle('active');
   });
});
