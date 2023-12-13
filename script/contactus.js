document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || subject === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }
  

    setTimeout(() => {
      document.getElementById('contactForm').reset();
      document.getElementById('successMessage').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('successMessage').classList.add('hidden');
      }, 3000);
    }, 1000);
  });
  