// Popup Window Menu
const btn = document.querySelector('#menu-button-display');

function display() {
  const menu = document.querySelector('nav');
  const iconmenu = document.querySelector('nav button img');
  const links = document.querySelector('nav ul');
  menu.classList.toggle('display-menu-window');
  iconmenu.classList.toggle('menu-quit-display');
  links.classList.toggle('links-display-menu');

  const link = document.querySelector('nav ul');
  link.addEventListener('click', display);
}

btn.addEventListener('click', display);

// Works Section

const myWorks = [
  {
    Name: 'Cookie Masters Capstone Project',
    description: `Web page project designed around an international cookie course. 
    Contains content from the main show, about and guests sections and more information.`,
    image: './img/cookie-masters-mobile-1.png',
    imagePopup: './img/cookie-masters-mobile.png',
    imagePopupDesktop: './img/cookie-masters-desktop.png',
    technologies: '<li>JavaScript</li>\n<li>CSS</li>\n<li>HTML</li>',
    linkLive: 'https://luiscarlosvd.github.io/capstone-project-cookiemasters/',
    linkSource: 'https://github.com/Luiscarlosvd/capstone-project-cookiemasters',
  },
  {
    Name: 'Project of whales in alaska',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
    image: './img/portfolio-image.png',
    technologies: '<li>Ruby on Rails</li>\n<li>JavaScript</li>\n<li>CSS</li>',
    linkLive: '#',
    linkSource: '#',
  },
  {
    Name: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
    image: './img/portfolio-image.png',
    technologies: '<li>Ruby</li>\n<li>JavaScript</li>\n<li>React</li>\n<li>HTML</li>',
    linkLive: '#',
    linkSource: '#',
  },
  {
    Name: 'Multi-Post Project Stories Gain+Glory',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s`,
    image: './img/portfolio-image.png',
    technologies: '<li>Ruby on Rails</li>\n<li>JavaScript</li>\n<li>CSS</li>\n<li>HTML</li>',
    linkLive: '#',
    linkSource: '#',
  },
  {
    Name: 'Web page for a Company that sells soap',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
    image: './img/portfolio-image.png',
    technologies: '<li>JavaScript</li>\n<li>CSS</li>\n<li>HTML</li>',
    linkLive: '#',
    linkSource: '#',
  },
  {
    Name: 'Multi-Post Stories Gain+Glory',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s`,
    image: './img/portfolio-image.png',
    technologies: '<li>Ruby on Rails</li>\n<li>JavaScript</li>\n<li>CSS</li>\n<li>HTML</li>',
    linkLive: '#',
    linkSource: '#',
  },
];

const card = document.getElementById('card-works');

myWorks.forEach((x) => {
  card.innerHTML += `
        <li class="individual-works">
            <img src="${x.image}" class="individual-works-image">
            <div class="description-works">
                <h3>${x.Name}</h3>
                <ul class="work-languages">${x.technologies}</ul>
                <button type="button" class="green-button button-works" id="${x.id}">See Project</button>
            </div>
        </li>
    `;
});

const openWorks = document.querySelectorAll('.button-works');
const workspopup = document.getElementById('works-popup');

for (let i = 0; i < openWorks.length; i += 1) {
  openWorks[i].addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.add('overflowH');

    workspopup.innerHTML += `
        <div class="background-gradient">
            <div class="works-window margin">
                <div class="works-window-elements">
                    <div class="button-quit">
                        <button class="quit-button-works" alt="quit button" id="quit-button"><img src="./img/quit-works.png" alt="quit button image"></button>
                    </div>
                    <img src="${myWorks[i].imagePopup}" class="popup-image" alt="Image of the portfolio project">
                    <h1>${myWorks[i].Name}</h1>
                    <ul class="work-languages">${myWorks[i].technologies}</ul>
                    <p class="paragraphs">${myWorks[i].description}</p>
                    <div class="buttons-works-window">
                        <a href="${myWorks[i].linkLive}" class="green-button">See Live  <img src="./img/see-live-icon.png"></a>
                        <a href="${myWorks[i].linkSource}" class="green-button">See Source  <img src="./img/live-source-icon.png"></a>
                    </div>
                </div>
            </div>
        </div>
    `;
    const quitButton = document.getElementById('quit-button');
    quitButton.addEventListener('click', () => {
      body.classList.remove('overflowH');
      workspopup.innerHTML = '';
    });

    const img = document.querySelector('.popup-image');
  
    if (window.screen.width >= 768) {
      img.src = myWorks[i].imagePopupDesktop;
    };
  });
}

function validateEmail(email) {
  const emailLower = email.toLowerCase();

  if (emailLower === email) {
    return true;
  }
  return false;
}

const form = document.querySelector('#contact-form');

function errorMessageEmail() {
  const message = form.querySelector('small');
  message.innerText = 'ERROR: Invalid email, must be in all lowercase.';
}

const nameForm = document.getElementById('name');
const emailForm = document.getElementById('email');
const textarea = document.getElementById('text-area');

let forminfo = { nameForm: '', emailForm: '', textarea: '' };

const getUserInfo = () => {
  if (localStorage.getItem('forminfo')) {
    forminfo = JSON.parse(localStorage.getItem('forminfo'));
  }
  return forminfo;
};

window.onload = () => {
  nameForm.value = getUserInfo().nameForm;
  emailForm.value = getUserInfo().emailForm;
  textarea.value = getUserInfo().textarea;
};

form.addEventListener('change', () => {
  forminfo = {
    nameForm: nameForm.value,
    emailForm: emailForm.value,
    textarea: textarea.value,
  };
  localStorage.setItem('forminfo', JSON.stringify(forminfo));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const validEmail = validateEmail(form.email.value);

  if (validEmail === true) {
    form.submit();
  } else {
    errorMessageEmail();
  }
});
