import './styles.scss';
document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');  // Hamburger button
  const navbarCollapse = document.querySelector('#navbarNav');      // Navbar items

  // Toggle the navbar when the hamburger button is clicked
  navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');  // Toggle 'show' class to show/hide the navbar items
  });
});
document.querySelectorAll('.nav-link').forEach(function(navLink) {
  navLink.addEventListener('click', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      bsCollapse.hide();
    }
  });
});