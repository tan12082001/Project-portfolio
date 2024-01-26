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
    title: 'WOS Concert Webpage',
    heading: 'A Concert webpage that gives you details.',
    languages: ['CSS', 'JavaScript', 'HTML'],
    skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobile_description: 'WOS concert webpage is a webpage created as a part of Microverse full stack course curriculum. This webpage gives you WOS band concert details. The webpage is designed on JavaScript majorly and includes HTML and CSS. This webpage is divided into five parts where header, main and footer consists these parts. the header has two blocks, one is head bar with socials and the navigation bar with webpage navigations. The main sections has main events grid and then the featured artists block is dynamically created.',
    desktop_description: 'WOS concert webpage is a webpage created as a part of Microverse full stack course curriculum. This webpage gives you WOS band concert details. The webpage is designed on JavaScript majorly and includes HTML and CSS. This webpage is divided into five parts where header, main and footer consists these parts. the header has two blocks, one is head bar with socials and the navigation bar with webpage navigations. The main sections has main events grid and then the featured artists block is dynamically created.',
    desktop_img: './concertwebpage.png',
    mobile_img: './wosmobileimage.png',
    cardtile: './concertwebpage.png',
    cardtilealt: 'WOS consert page',
    seelive: 'https://tan12082001.github.io/Project-Capstone-1/',
    seesource: 'https://github.com/tan12082001/Project-Capstone-1',
  },
  {
    title: 'Awesome Books Page',
    heading: 'A Book Name Library, you can easily remeber the book names now',
    languages: ['CSS', 'JavaScript', 'HTML'],
    skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobile_description: 'Awesome Books is a webpage created for education purpose. In this webpage you can add a book name and author name after which this will store them in a local storage and makes them available for you even when you refresh the page. You can also delete a book from the library if you do not want to see it anymore. These adding and deleting features are created and implemented using JavaScript. In this webpage you can also see single page apps implementation.',
    desktop_description: 'Awesome Books is a webpage created for education purpose. In this webpage you can add a book name and author name after which this will store them in a local storage and makes them available for you even when you refresh the page. You can also delete a book from the library if you do not want to see it anymore. These adding and deleting features are created and implemented using JavaScript. In this webpage you can also see single page apps implementation.',
    desktop_img: './awesomebookswebpage.png',
    mobile_img: './awesomebookswebpage.png',
    cardtile: './awesomebookswebpage.png',
    cardtilealt: 'Awesomebooks page',
    seelive: 'https://tan12082001.github.io/Project-AwesomeBooks/',
    seesource: 'https://github.com/tan12082001/Project-AwesomeBooks',
  },
  {
    title: 'To-Do-List Tasks Page',
    heading: 'You can Add to-do\'s and successfully do them',
    languages: ['CSS', 'JavaScript', 'HTML'],
    skills: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobile_description: 'To-Do-List webpage is a web app where you can add new tasks to do and keep them track like delete them or uncheck them or delete a few completed. This Webpage uses localStorage from the devtools so you will be able to see the tasks you added even when the webpage is reloaded. You can also edit a task and update the task in storage. You can delete specific tasks or the ones you are already done with the clear all checked button when they are checked.',
    desktop_description: 'To-Do-List webpage is a web app where you can add new tasks to do and keep them track like delete them or uncheck them or delete a few completed. This Webpage uses localStorage from the devtools so you will be able to see the tasks you added even when the webpage is reloaded. You can also edit a task and update the task in storage. You can delete specific tasks or the ones you are already done with the clear all checked button when they are checked.',
    desktop_img: './todolistwebpage.png',
    mobile_img: './todolistwebpage.png',
    cardtile: './todolistwebpage.png',
    cardtilealt: 'To-Do-List page',
    seelive: 'https://tan12082001.github.io/Project-To-Do-List/',
    seesource: 'https://github.com/tan12082001/Project-To-Do-List',
  },
  {
    title: 'BudgetMap Application',
    heading: 'You can store financial records of your data.',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    skills: ['Codekit', 'GitHub', 'JavaScript', 'Terminal', 'PostgreSQL'],
    mobile_description: 'BudgetMap is a Web application created with the help of Rails framework. This app provides the total budget of an user based on their expenditures from different categories of their financial activities. Uses the RoR framework following MVC architecture. Creates new categories to refer specific spendings of an user. User can see the Expenditures history based on the selected category, User can also see the total budget from all the spendings.',
    desktop_description: 'BudgetMap is a Web application created with the help of Rails framework. This app provides the total budget of an user based on their expenditures from different categories of their financial activities. Uses the RoR framework following MVC architecture. Creates new categories to refer specific spendings of an user. User can see the Expenditures history based on the selected category, User can also see the total budget from all the spendings.',
    desktop_img: './budgetMapPreview.png',
    mobile_img: './budgetMapPreview.png',
    cardtile: './budgetMapPreview.png',
    cardtilealt: 'BudgetMap Preview',
    seelive: 'https://budgetmap-v1.onrender.com/',
    seesource: 'https://github.com/tan12082001/Project-Budget-App',
  },
  {
    title: 'Earthquake Metrics Application',
    heading: 'Get basic information about major earthquaks.',
    languages: ['React.js', 'CSS', 'JavaScript', 'HTML', 'API'],
    skills: ['Codekit', 'GitHub', 'JavaScript', 'Terminal'],
    mobile_description: 'EarthQuake metrics webapp is created with React-Redux. In the Home page along with the initial render of Item cards, based on the selected option from the drop-down you can fetch new data using the React hooks. And After the fetching you can search the cards based on the magnitude values (only valid with numbers). We can select the card and see more details about the card. The initial render consists of API data with Min Magnitude - 8.0.',
    desktop_description: 'EarthQuake metrics webapp is created with React-Redux. In the Home page along with the initial render of Item cards, based on the selected option from the drop-down you can fetch new data using the React hooks. And After the fetching you can search the cards based on the magnitude values (only valid with numbers). We can select the card and see more details about the card. The initial render consists of API data with Min Magnitude - 8.0.',
    desktop_img: './earthquakesMetricsPreview.png',
    mobile_img: './earthquakesMetricsPreview.png',
    cardtile: './earthquakesMetricsPreview.png',
    cardtilealt: 'Earthquake Metrics Preview',
    seelive: 'https://6528f6a111e7247b56c4a6e1--melodic-banoffee-55f367.netlify.app/',
    seesource: 'https://github.com/tan12082001/capstone-react-metrics-webapp',
  },
  {
    title: 'Space Traveler\'s Hub',
    heading: 'Reserve rockets and join missions.',
    languages: ['React.js', 'Redux-toolkit', 'CSS', 'JavaScript', 'HTML'],
    skills: ['Codekit', 'GitHub', 'JavaScript'],
    mobile_description: 'Space Travelers\' Hub A Single Page App with React-Redux having three sub-pages, Rockets, Missions and MyProfile. The Rockets and Missions subpages Renders an external API\'s data. MyProfile page displays the Rockets and Missions that are reserved and joined respectively. Rockets Component has Reserve a Rocket and Cancel Reservations for a Rocket features. Missions component has Join Mission and Leave Mission features for a mission.',
    desktop_description: 'Space Travelers\' Hub A Single Page App with React-Redux having three sub-pages, Rockets, Missions and MyProfile. The Rockets and Missions subpages Renders an external API\'s data. MyProfile page displays the Rockets and Missions that are reserved and joined respectively. Rockets Component has Reserve a Rocket and Cancel Reservations for a Rocket features. Missions component has Join Mission and Leave Mission features for a mission.',
    desktop_img: './spaceTravelersPreview.png',
    mobile_img: './spaceTravelersPreview.png',
    cardtile: './spaceTravelersPreview.png',
    cardtilealt: 'Space Traveler\'s Hub Preview',
    seelive: 'https://space-x-project.onrender.com/',
    seesource: 'https://github.com/tan12082001/react-group-capstone',
  },
];

// creating the cards in my recent works section

const cards = document.querySelector('.works-grid');
for (let i = 0; i < projectCards.length; i += 1) {
  cards.innerHTML += `
    <div class="works-item card-animation">
        <div class="card-img">
            <img class='cardtile-img' src='${projectCards[i].cardtile}' alt='${projectCards[i].cardtilealt}'/>
            <div class="card-detail">
                <div class="card-main"><h4>${projectCards[i].title}</h4></div>
                <div class="lang-list">
                    <ul>
                        <li><a>${projectCards[i].languages[0]}</a></li>
                        <li><a>${projectCards[i].languages[1]}</a></li>
                        <li><a>${projectCards[i].languages[2]}</a></li>
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

// form element-email validation
const form = document.querySelector('form');
const email = document.getElementById('mail');
const error = document.createElement('span');
form.appendChild(error);
const button = form.querySelector('#submitbutton');
form.insertBefore(error, button);
error.classList.add('error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value.toLowerCase() !== email.value) {
    email.classList.add('highlight');
    error.classList.add('inaction');
    error.textContent = 'Please Enter the email address in lowercase Format.';
  } else {
    email.classList.remove('highlight');
    error.classList.remove('inaction');
    error.textContent = '';
    form.submit();
    form.reset();
  }
});

// preseve the contact form data in local storage
const userInput = document.querySelectorAll('.local-data');

let mydata = {
};

if (localStorage.getItem('userData')) {
  mydata = JSON.parse(localStorage.getItem('userData'));
  for (let i = 0; i < userInput.length; i += 1) {
    userInput[i].value = mydata[userInput[i].name];
  }
}

for (let i = 0; i < userInput.length; i += 1) {
  userInput[i].addEventListener('input', () => {
    mydata[userInput[i].name] = userInput[i].value;
    localStorage.setItem('userData', JSON.stringify(mydata));
  });
}

const text = document.getElementById('text-animation');
const cardsAnimation = document.querySelectorAll('.card-animation');
const animationDelay = 4;
const textAnimationDelay = 8;

function addAnimationToCards(card) {
  card.style.animation = `an 1s ease-out 1 both ${animationDelay * 1}ms`;
  card.style.opacity = 1;
}

function addAnimationToChars(text) {
  text.style.animation = `an 1s ease-out 1 both ${textAnimationDelay * 1}ms`;
  text.style.opacity = 1;
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      addAnimationToCards(entry.target);
      observer.unobserve(entry.target);
      addAnimationToChars(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

cardsAnimation.forEach((card) => {
  observer.observe(card);
});

observer.observe(text);