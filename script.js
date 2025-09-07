function toggleNav(){
  const links = document.querySelectorAll('.top-links a');
  links.forEach(a=>{
    a.style.display = a.style.display === 'inline' ? 'none' : 'inline';
  });
}

function handleSubmit(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Sending...';
  setTimeout(()=>{
    status.textContent = 'Thanks. Your message has been submitted.';
    e.target.reset();
  }, 800);
  return false;
}
