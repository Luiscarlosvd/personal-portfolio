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

let myWorks = [
    {
        Name: "Multi-Post Stories Gain+Glory",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s`,
        image: "./img/portfolio-image.png",
        technologies: "<li>Ruby on Rails</li>\n<li>JavaScript</li>\n<li>CSS</li>\n<li>HTML</li>",
        linkLive: "#",
        linkSource: "#",
    },
    {
        Name: "Project of whales in alaska",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
        image: "./img/portfolio-image.png",
        technologies: "<li>Ruby on Rails</li>\n<li>JavaScript</li>\n<li>CSS</li>",
        linkLive: "#",
        linkSource: "#",
    },
    {
        Name: "Keeping track of hundreds of components",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
        image: "./img/portfolio-image.png",
        technologies: "<li>Ruby</li>\n<li>JavaScript</li>\n<li>React</li>\n<li>HTML</li>",
        linkLive: "#",
        linkSource: "#",
    },
    {
        Name: "Multi-Post Project Stories Gain+Glory",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s`,
        image: "./img/portfolio-image.png",
        technologies: "<li>Ruby on Rails</li>\n<li>JavaScript</li>\n<li>CSS</li>\n<li>HTML</li>",
        linkLive: "#",
        linkSource: "#",
    },
    {
        Name: "Web page for a Company that sells soap",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`,
        image: "./img/portfolio-image.png",
        technologies: "<li>JavaScript</li>\n<li>CSS</li>\n<li>HTML</li>",
        linkLive: "#",
        linkSource: "#",
    },
    {
        Name: "Multi-Post Stories Gain+Glory",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s`,
        image: "./img/portfolio-image.png",
        technologies: "<li>Ruby on Rails</li>\n<li>JavaScript</li>\n<li>CSS</li>\n<li>HTML</li>",
        linkLive: "#",
        linkSource: "#",
    },
];

let card = document.getElementById("card-works");

myWorks.map((x) => {
    card.innerHTML += `
        <li class="individual-works">
            <div class="description-works">
                <h3>${x.Name}</h3>
                <ul class="work-languages">${x.technologies}</ul>
                <button type="button" class="green-button button-works" id="${x.id}">See Project</button>
            </div>
        </li>
    `;
});

const openWorks = document.querySelectorAll('.button-works');
let workspopup = document.getElementById("works-popup");

for (let i = 0; i < openWorks.length; i++) {
    openWorks[i].addEventListener("click", function () {

        workspopup.innerHTML += `
        <div class="background-gradient">
            <div class="works-window margin">
                <div class="works-window-elements">
                    <div class="button-quit">
                        <button class="quit-button-works" alt="quit button" id="quit-button"><img src="./img/quit-works.png" alt="quit button image"></button>
                    </div>
                    <img src="${myWorks[i].image}" alt="Image of the portfolio project">
                    <h1>${myWorks[i].Name}</h1>
                    <ul class="work-languages">${myWorks[i].technologies}</ul>
                    <p class="paragraphs">${myWorks[i].description}</p>
                    <div class="buttons-works-window">
                        <a href="${myWorks[i].linkLive}" class="green-button">See Live  <img src="./img/live-source-icon.png"></a>
                        <a href="${myWorks[i].linkSource}" class="green-button">See Source  <img src="./img/see-live-icon.png"></a>
                    </div>
                </div>
            </div>
        </div>
    `;
        const quitButton = document.getElementById("quit-button");
        quitButton.addEventListener('click', () => {workspopup.innerHTML = ``;});
    });
}









