import './style.css';


const home = document.querySelector('.home')
const menu = document.querySelector('.menu')
const contact = document.querySelector('.contact')
const furcio = document.querySelector('.furcio')
let homePage = document.getElementById('homepage')
let menuPage = document.getElementById('menu-page')
let contactPage = document.getElementById('contact-page')

function homepage() {

    homePage.style.display = 'block'
    menuPage.style.display = 'none'
    contactPage.style.display = 'none'
    
    let revealFirst = document.querySelectorAll('.reveal-first')
    for (let i = 0; i < revealFirst.length; i++) {
        revealFirst[i].classList.add('active')
    }
}

function menupage() {

    homePage.style.display = 'none'
    menuPage.style.display = 'grid'
    contactPage.style.display = 'none'
}

function contactpage() {

    homePage.style.display = 'none'
    menuPage.style.display = 'none'
    contactPage.style.display = 'flex'
}

homepage()

menu.addEventListener('click', menupage)
contact.addEventListener('click', contactpage)
home.addEventListener('click', homepage)
furcio.addEventListener('click', homepage)
document.querySelector('.intro-btn').addEventListener('click', menupage)
document.querySelector('.contact-btn').addEventListener('click', contactpage)

window.addEventListener('scroll', () => {
    const header = document.querySelector('header')

    if (window.scrollY > 0) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }

    reveal()
})

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 300;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
  }