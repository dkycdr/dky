// Tunggu sampai DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua link di navigasi yang punya hash (anchor link)
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Cek apakah link mengarah ke suatu ID
        if (this.hash !== '') {
          e.preventDefault();
  
          const targetId = this.hash;
          const targetElement = document.querySelector(targetId);
  
          // Animasi smooth scroll ke target element
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  