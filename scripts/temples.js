document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');
const navList = nav.querySelector('ul');

navList.classList.add('hidden');

menuToggle.addEventListener('click', () => {
  const isHidden = navList.classList.toggle('hidden');
  menuToggle.textContent = isHidden ? '☰' : '✕';
});