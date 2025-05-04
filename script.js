// 1. Event Handling
document.getElementById('changeTextBtn').addEventListener('click', () => {
  document.getElementById('text').innerText = 'Text Changed!';
});

// Double-click secret action
document.getElementById('changeTextBtn').addEventListener('dblclick', () => {
  alert('Secret Action Triggered!');
});

// Hover effect
document.getElementById('changeTextBtn').addEventListener('mouseover', () => {
  document.getElementById('changeTextBtn').style.backgroundColor = '#ddd';
});
document.getElementById('changeTextBtn').addEventListener('mouseout', () => {
  document.getElementById('changeTextBtn').style.backgroundColor = '';
});

// Keypress detection
document.addEventListener('keydown', (e) => {
  console.log(`You pressed: ${e.key}`);
});

// 2. Image Gallery
document.querySelectorAll('.thumb').forEach(img => {
  img.addEventListener('click', (e) => {
    document.getElementById('mainImage').src = e.target.src;
  });
});

// Accordion
document.querySelector('.accordion-toggle').addEventListener('click', () => {
  const content = document.querySelector('.accordion-content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

// 3. Form Validation
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Invalid email!');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters.');
    return;
  }

  alert('Form submitted successfully!');
});
