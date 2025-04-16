
function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector('.toggle-theme i');
  const text = document.querySelector('.toggle-theme span');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    text.textContent = 'Light Mode';
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    text.textContent = 'Dark Mode';
  }
}

document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const formData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    };
  
    const response = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
  
    const result = await response.json();
    document.getElementById('response-msg').innerText = result.success ? "Message sent!" : "Something went wrong!";
  });