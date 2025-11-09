//  document.querySelectorAll('.faq-btn').forEach(btn => {
//     btn.addEventListener('click', () => {
//       const answer = btn.nextElementSibling;
//       const icon = btn.querySelector('i');
      
//       answer.classList.toggle('hidden');
//       icon.classList.toggle('ri-add-line');
//       icon.classList.toggle('ri-subtract-line');
//     });
//   });
 console.log('menuBtn');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  let isOpen = false;
  console.log('menuBtn');

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    mobileMenu.classList.toggle('hidden');
    menuBtn.innerHTML = isOpen 
      ? '<i class="ri-close-line text-2xl"></i>' 
      : '<i class="ri-menu-line text-2xl"></i>';
      console.log('clicked');
  });

  // Optional: close menu when clicking a link
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.innerHTML = '<i class="ri-menu-line text-2xl"></i>';
      isOpen = false;
    });
  });