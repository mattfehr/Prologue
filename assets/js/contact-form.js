//get the form and message elements from DOM
const form = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

//make listener for when form is submitted
form.addEventListener('submit', async (e) => {
  e.preventDefault(); //prevent default reload

	//extract data from the form
  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

	//send data to backend endpoint (default to /contact if no backend to still work locally)
  try {
    const endpoint = form.getAttribute('data-api') || '/contact';
    const res = await fetch(endpoint, {	//send to backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();	//parse backend json response

		//success or failure
    statusMsg.style.display = 'block';
    statusMsg.style.color = res.ok ? 'green' : 'red';
    statusMsg.textContent = result.message;

		//clear form if successfull
    if (res.ok) {
      form.reset();
    }
  } catch (err) {
    statusMsg.style.display = 'block';
    statusMsg.style.color = 'red';
    statusMsg.textContent = 'Something went wrong. Please try again later.';
  }
});
