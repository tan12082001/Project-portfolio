const btn = document.getElementById('hamburger');
const menuBg = document.getElementById('menudrop');
const menu = document.getElementById('menu-outline');
const closee = document.getElementById('closebtn');

btn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBg.style.display = 'block';
});

function closeMenu() {
  menu.style.display = 'none';
  menuBg.style.display = 'none';
}

closee.addEventListener('click', closeMenu);
menu.addEventListener('click', closeMenu);