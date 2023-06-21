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

// My Recent Works section.

// creating an Array of objects with content.
const projectCards = [
  {
    title: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobile_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s<br><br> with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    desktop_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    desktop_img: './media/SnapshootPortfolio.png',
    mobile_img: './media/mobile-popup-img.png',
    seelive: 'https://github.com/tan12082001/Project-portfolio',
    seesource: 'https://github.com/tan12082001/Project-portfolio',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobile_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s<br><br> with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    desktop_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    desktop_img: './media/SnapshootPortfolio.png',
    mobile_img: './media/mobile-popup-img.png',
    seelive: 'https://github.com/tan12082001/Project-portfolio',
    seesource: 'https://github.com/tan12082001/Project-portfolio',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobile_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s<br> with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    desktop_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    desktop_img: './media/SnapshootPortfolio.png',
    mobile_img: './media/mobile-popup-img.png',
    seelive: 'https://github.com/tan12082001/Project-portfolio',
    seesource: 'https://github.com/tan12082001/Project-portfolio',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobile_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s<br><br> with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    desktop_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    desktop_img: './media/SnapshootPortfolio.png',
    mobile_img: './media/mobile-popup-img.png',
    seelive: 'https://github.com/tan12082001/Project-portfolio',
    seesource: 'https://github.com/tan12082001/Project-portfolio',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobile_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s<br><br> with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    desktop_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    desktop_img: './media/SnapshootPortfolio.png',
    mobile_img: './media/mobile-popup-img.png',
    seelive: 'https://github.com/tan12082001/Project-portfolio',
    seesource: 'https://github.com/tan12082001/Project-portfolio',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobile_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s<br><br> with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    desktop_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    desktop_img: './media/SnapshootPortfolio.png',
    mobile_img: './media/mobile-popup-img.png',
    seelive: 'https://github.com/tan12082001/Project-portfolio',
    seesource: 'https://github.com/tan12082001/Project-portfolio',
  },
];

// creating the cards in my recent works section

const cards = document.querySelector('.works-grid');
for (let i = 0; i < projectCards.length; i += 1) {
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
                    <button class='seeproject' id='seeproject'>See Project</a>
                </div>
            </div>
        </div>
    </div>
  `;
}

// popup window

const backdrop = document.querySelector('body');
const seeprojectbtn = document.querySelectorAll('.seeproject');

for (let j = 0; j < projectCards.length; j += 1) {
  seeprojectbtn[j].addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const popupOutline = document.createElement('div');
    popupOutline.className = 'popupOutline';
    popupOutline.innerHTML = `
        <div class="pop-window">
            <div class="imagepart">
                <div class="winclosebtn">
                    <button class='close-cross-btn'>&times;</button>
                </div>
                <div class="mobileimg"><img class="mobileimage" src=${projectCards[j].mobile_img} alt='project img'></div>
                <div class="deskimg"><img class="deskimage" src=${projectCards[j].desktop_img} alt='project image'></div>
            </div>
            <div class="headingpart">
                <h3>${projectCards[j].heading}</h3>
                <div class="desk-live-source-btns">
                    <div class='deskheadbar'>
                        <a class="seelive" href='${projectCards[j].seelive}' target='_blank' rel='noopener'>See Live <img src='./media/liveicon.svg' alt='live icon'></a>
                    </div>
                    <div class='deskheadbar'>
                        <a class="seesource" href='${projectCards[j].seesource}' target='_blank' rel='noopener'>See Source <img src='./media/GitHubicon.png' alt='git icon'></a>
                    </div>
                </div>
            </div>
            <div class="listpart">
                <ul class="mobilelist">
                    <li><a>${projectCards[j].languages[0]}</a></li>
                    <li><a>${projectCards[j].languages[1]}</a></li>
                    <li><a>${projectCards[j].languages[2]}</a></li>
                </ul>
                <ul class="desklist">
                    <li><a>${projectCards[j].skills[0]}</a></li>
                    <li><a>${projectCards[j].skills[1]}</a></li>
                    <li><a>${projectCards[j].skills[2]}</a></li>
                    <li><a>${projectCards[j].skills[3]}</a></li>
                    <li><a>${projectCards[j].skills[4]}</a></li>
                    <li><a>${projectCards[j].skills[5]}</a></li>
                </ul>
            </div>
            <div class="descriptionpart">
                <p class="mobiledesc">${projectCards[j].mobile_description}</p>
                <p class="deskdesc">${projectCards[j].desktop_description}</p>
            </div>
            <div class="live-source-btns">
                <div>
                    <a class="seelive" href='${projectCards[j].seelive}' target='_blank' rel='noopener'>See Live <img src='./media/liveicon.svg' alt='live icon'></a>
                </div>
                <div>
                    <a class="seesource" href='${projectCards[j].seesource}' target='_blank' rel='noopener'>See Source <img src='./media/GitHubicon.png' alt='git icon'></a>
                </div>
            </div>
        </div>
  `;
    overlay.appendChild(popupOutline);
    backdrop.appendChild(overlay);

    // close button
    const closepopup = document.querySelector('.winclosebtn');
    closepopup.addEventListener('click', () => {
      overlay.removeChild(popupOutline);
      backdrop.removeChild(overlay);
    });
  });
}
