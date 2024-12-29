document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page refresh
  
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;
  
    if (!name || !email || !password || !gender) {
      return alert('All fields are required!');
    }
  
    try {
      const response = await fetch('https://sequoia-clover-porch.glitch.me/signup', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email, password, gender })
      });
  
   
  
      const result = await response.json();
      alert(`Success: ${result.message}`);
    } catch (err) {
      console.error(err);
      alert(`Error occurred: ${err.message}`);
    }
  });
  