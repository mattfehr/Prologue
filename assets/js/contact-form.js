const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent default reload

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  try {
    const res = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    status.style.display = 'block';
    status.style.color = res.ok ? 'green' : 'red';
    status.textContent = result.message;

    if (res.ok) {
      form.reset();
    }
  } catch (err) {
    status.style.display = 'block';
    status.style.color = 'red';
    status.textContent = 'Something went wrong. Please try again later.';
  }
});
