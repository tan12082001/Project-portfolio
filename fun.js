const btn = document.getElementById('hamburger');
const menuBg = document.getElementById('menudrop');
const menu = document.getElementById('menu-outline');
const closee = document.getElementById('closebtn');
const menuItems = document.querySelectorAll('.menuItem');

function openmenu() {
  menu.style.display = 'block';
  menuBg.style.display = 'block';
}

function closeMenu() {
  menu.style.display = 'none';
  menuBg.style.display = 'none';
}

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', openmenu);
  },
);

btn.addEventListener('click', openmenu);
closee.addEventListener('click', closeMenu);
menu.addEventListener('click', closeMenu);
