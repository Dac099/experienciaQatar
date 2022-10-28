const [email, password] = document.getElementsByTagName('input');
const submitBtn = document.getElementById('submitBtn');


submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  const res = await fetch('/auth', {
    body: {
      email: email.value,
      password: password.value
    },
    method: "POST"
  })

  const data = await res.json();

  console.log(data);
  
})