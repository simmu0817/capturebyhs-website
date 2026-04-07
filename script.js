const elements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if(position < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});
const form = document.querySelector("form");

form.addEventListener("submit", () => {
  setTimeout(() => {
    alert("✅ Booking request sent! We’ll contact you soon.");
  }, 500);
});

