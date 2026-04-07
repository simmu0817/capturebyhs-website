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


// Success message after form submit
const form = document.querySelector("form");

form.addEventListener("submit", () => {
  setTimeout(() => {
    alert("✅ Booking request sent! We’ll contact you soon.");
  }, 500);
});
