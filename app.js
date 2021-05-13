const skills = [
    { skillName: "HTML", percentage: 80 },
    { skillName: "CSS", percentage: 70 },
    { skillName: "Javascript", percentage: 75 },
    { skillName: "ReactJs", percentage: 75 },
    { skillName: "ReactJs", percentage: 70 },
    { skillName: "Webpack", percentage: 60 },
    { skillName: "NodeJs", percentage: 60 },
    { skillName: "Java", percentage: 50 },
    { skillName: "C#", percentage: 50 },
]

const projects = [
    {
        img: { url: './assets/todo.jpg', alt: "todo-app" },
        name: "Todo Application",
        githubUrl: "https://github.com/Rupeshpra22/Todo-Application",
        demoUrl: "https://rupeshpra22.github.io/Todo-Application/",
        description: "A Todo Application where user can add, update or edit their todos, All the todos are saved in local storage and hence maintained with the browser",
        techUsed: ["HTML", "CSS", "Javascript"]
    },
    {
        img: { url: './assets/beach-hotel.jpg', alt: "beach-resort" },
        name: "Beach Resort",
        githubUrl: "https://github.com/Rupeshpra22/resort",
        demoUrl: "https://book-resort.netlify.app/",
        description: "Beach resort is a hotel listing application where user can check varieties of hotel, User can also search hotel based on its requirement",
        techUsed: ["ReactJs", "HTML", "CSS"]
    },
    {
        img: { url: './assets/booklist.jpg', alt: "booklist-app" },
        name: "Book Lisiting Application",
        githubUrl: "https://github.com/Rupeshpra22/Booklist",
        demoUrl: "https://rupeshpra22.github.io/Booklist/",
        description: "Book Listing is an application where user can add, update or delete the book, this application is designed using OOPS Programming paradigm",
        techUsed: ["HTML", "CSS", "Javascript"]
    }
]

const hamburger = document.querySelector(".hamburger");
const nav =  document.querySelector("nav");
const homeSection = document.querySelector(".home-section");
let isHamburgerOpen = false;
hamburger.addEventListener("click", () => {
    if (isHamburgerOpen === false) {
        hamburger.classList.add('open');
        nav.classList.add('nav-open');
        homeSection.classList.add("home-section-responsive");
        isHamburgerOpen = true;
    }else{
        hamburger.classList.remove('open');
        nav.classList.remove('nav-open');
        homeSection.classList.remove("home-section-responsive");
        isHamburgerOpen = false;
    }
})

nav.addEventListener('click', ()=>{
    if(nav.className.includes('nav-open')){
        hamburger.classList.remove('open');
        nav.classList.remove('nav-open');
        homeSection.classList.remove("home-section-responsive");
        isHamburgerOpen = false;
    }
})

for (let skill of skills) {
    const mySkills = document.querySelector(".my-skills");
    const skillContainerEl = document.createElement("div");
    const labelEl = document.createElement("label");
    const skillbarEl = document.createElement("div");
    const skillpercentageEl = document.createElement("div");
    skillContainerEl.classList.add("skill-container");
    labelEl.classList.add("skill");
    labelEl.innerText = `${skill.skillName}`;
    skillbarEl.classList.add("skill-bar");
    skillpercentageEl.classList.add("skill-percentage");
    skillpercentageEl.style.width = `${skill.percentage}%`;
    skillContainerEl.appendChild(labelEl);
    skillbarEl.appendChild(skillpercentageEl);
    skillContainerEl.appendChild(skillbarEl);
    mySkills.appendChild(skillContainerEl);
}

for (let project of projects) {
    const projectContainerEle = document.querySelector(".project-container");
    const projectCardEle = document.createElement("div");
    projectCardEle.classList.add("project-card");
    projectCardEle.innerHTML = `
                    <div class="project-image">
                        <img src=${project.img.url} alt=${project.img.alt} width="100%" height="150px">
                    </div>
                    <div class="project-name">${project.name}</div>
                    <div class="project-links">
                        <a href=${project.githubUrl} target="_blank"><i
                                class="fa fa-github portfolio-color"></i></a>
                        <a href=${project.demoUrl} target="_blank"><i
                                class="fa fa-external-link portfolio-color"></i></a>
                    </div>
                    <div class="project-description">
                        <div class="portfolio-color">${project.description}</div>
                    </div>
                    <div class="tech-used">
                        <div class="portfolio-color">${project.techUsed[0]}</div>
                        <div class="portfolio-color">${project.techUsed[1]}</div>
                        <div class="portfolio-color">${project.techUsed[2]}</div>
                    </div>
                </div>
    `
    projectContainerEle.appendChild(projectCardEle);
}
