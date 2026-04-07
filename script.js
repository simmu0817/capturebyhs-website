// Fade animation
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

faders.forEach(el => observer.observe(el));


// ✅ FIXED FORM POPUP
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop instant reload

  const data = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("✅ Booking request sent! We’ll contact you soon.");
      form.reset();
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  }).catch(() => {
    alert("❌ Network error. Please try again.");
  });
});
