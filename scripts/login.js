// public/scripts/login.js

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = 'dashboard.html';
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('An error occurred. Please try again later.');
    }
  });
  