const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  alert('Admission application submitted successfully!');

  form.reset();
});