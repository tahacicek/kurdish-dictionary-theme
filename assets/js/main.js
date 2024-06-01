document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.btn-svg');

  // Daha önce seçilmiş tema varsa onu yükleyelim
  if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
  }

  toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');

      // Temayı localStorage'a kaydedelim
      if (document.body.classList.contains('dark-theme')) {
          localStorage.setItem('theme', 'dark');
          // add class
      } else {
          localStorage.removeItem('theme');
      }
  });
});
