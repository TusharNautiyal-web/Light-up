document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('hidden');
    });

    closeMenuButton.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });

    dropdownToggle.addEventListener('click', function() {
      dropdownMenu.classList.toggle('hidden');
    });
  });