let btn = document.getElementById('hamburger');
let menuBg = document.getElementById('menudrop');
let menu = document.getElementById('menu-outline');
let closee = document.getElementById('closebtn');



btn.addEventListener('click', function(){
    menu.style.display ='block';
    menuBg.style.display = 'block';
    
})

 function closedMenu(){
    menu.style.display ='none';
    menuBg.style.display = 'none';
    
}
closee.addEventListener('click', closedMenu)

menu.addEventListener('click', closedMenu)