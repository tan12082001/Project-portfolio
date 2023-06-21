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

//My Recent Works section.

//creating an Array of objects with content.
const projectCards = [
    {
        title: 'Multi-Post Stories Gain+Glory',
        heading: 'Keeping track of hundreds of components',
        languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
        skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        mobile_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
        desktop_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        desktop_img: './media/Snapshoot Portfolio.png',
        seelive: 'https://github.com/tan12082001/Project-portfolio',
        seesource: 'https://github.com/tan12082001/Project-portfolio'
    },
    {
        title: 'Multi-Post Stories Gain+Glory',
        heading: 'Keeping track of hundreds of components',
        languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
        skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        mobile_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
        desktop_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        desktop_img: './media/Snapshoot Portfolio.png',
        seelive: 'https://github.com/tan12082001/Project-portfolio',
        seesource: 'https://github.com/tan12082001/Project-portfolio'
    },
    {
        title: 'Multi-Post Stories Gain+Glory',
        heading: 'Keeping track of hundreds of components',
        languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
        skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        mobile_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
        desktop_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        desktop_img: './media/Snapshoot Portfolio.png',
        seelive: 'https://github.com/tan12082001/Project-portfolio',
        seesource: 'https://github.com/tan12082001/Project-portfolio'
    },
    {
        title: 'Multi-Post Stories Gain+Glory',
        heading: 'Keeping track of hundreds of components',
        languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
        skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        mobile_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
        desktop_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        desktop_img: './media/Snapshoot Portfolio.png',
        seelive: 'https://github.com/tan12082001/Project-portfolio',
        seesource: 'https://github.com/tan12082001/Project-portfolio'
    },
    {
        title: 'Multi-Post Stories Gain+Glory',
        heading: 'Keeping track of hundreds of components',
        languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
        skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        mobile_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
        desktop_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        desktop_img: './media/Snapshoot Portfolio.png',
        seelive: 'https://github.com/tan12082001/Project-portfolio',
        seesource: 'https://github.com/tan12082001/Project-portfolio'
    },
    {
        title: 'Multi-Post Stories Gain+Glory',
        heading: 'Keeping track of hundreds of components',
        languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
        skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
        mobile_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
        desktop_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        desktop_img: './media/Snapshoot Portfolio.png',
        seelive: 'https://github.com/tan12082001/Project-portfolio',
        seesource: 'https://github.com/tan12082001/Project-portfolio'
    }
];

//creating the cards in my recent works section

let cards = document.querySelector('.works-grid');
for (let i=0; i< projectCards.length; i++) {
  cards.innerHTML += `
    <div class="works-item">
        <div class="card-img">
            <div class="card-detail">
                <div class="card-main"><h4>${projectCards[i].title}</h4></div>
                <div class="lang-list">
                    <ul>
                        <li><a>${projectCards[i].languages[0]}</a></li>
                        <li><a>${projectCards[i].languages[1]}</a></li>
                        <li><a>${projectCards[i].languages[2]}</a></li>
                        <li><a>${projectCards[i].languages[3]}</a></li>
                    </ul>
                </div>
                <div class="card-button">
                    <button id='seeproject'>See Project</a>
                </div>
            </div>
        </div>
    </div>
  `;
}
