import './style.css';

console.log('check')

const home = document.querySelector('.home')
const menu = document.querySelector('.menu')
const contact = document.querySelector('.contact')
const furcio = document.querySelector('.furcio')
let content = document.getElementById('content')

function homepage() {

    content.replaceChildren()
    const homePage = document.createElement('div')
    homePage.classList.add('homepage')
    content.appendChild(homePage)
    
    const intro = document.createElement('div')
    intro.classList.add('intro')
    const introH2 = document.createElement('h2')
    const introH3 = document.createElement('h3')
    introH2.innerHTML = 'Ultimate taste'
    introH3.innerHTML = 'Please your palate with an unforgettable meal'
    homePage.appendChild(intro)
    intro.append(introH2, introH3)

    const about = document.createElement('div')
    about.classList.add('about')
    const aboutText = document.createElement('p')
    const aboutImg = document.createElement('img')
    aboutText.innerHTML = '99% chance of you coming back again, you just had to be there'
    aboutImg.src = 'sirloin-tacos.jpeg'
    aboutImg.alt = 'foto'
    homePage.appendChild(about)
    about.append(aboutText, aboutImg)

    const hours = document.createElement('div')
    hours.classList.add('hours')
    const hoursContainer = document.createElement('div')
    hoursContainer.classList.add('hours-container')
    const hoursH3 = document.createElement('h3')
    hoursH3.innerHTML = 'Hours'
    const hoursList = document.createElement('ul')
    const hoursArray = ['Mon - Closed', 'Tue - 10a-8p',
    'Wed - 10a-8p', 'Thu - 10a-8p', 'Fri - 11a-9p', 
    'Sat - 11a-9p', 'Sun - 10a-9p']
    for (let i = 0; i < hoursArray.length; i++) {
        let li = document.createElement('li')
        hoursList.appendChild(li)
        li.innerHTML = hoursArray[i]
    }
    homePage.appendChild(hours)
    hours.appendChild(hoursContainer)
    hoursContainer.append(hoursH3, hoursList)

    const map = document.createElement('div')
    map.classList.add('map')
    const mapContainer = document.createElement('div')
    mapContainer.classList.add('map-container')
    const embedMap = document.createElement('iframe')
    embedMap.src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119923.49779575093!2d-57.9994092058858!3d-61.98864025622191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sus!4v1690381611408!5m2!1ses!2sus'
    embedMap.width = '700'
    embedMap.height = '500'
    embedMap.style = 'border:1px solid rgb(255,158,0)'
    embedMap.loading = 'lazy'
    embedMap.referrerPolicy = 'no-referrer-when-downgrade'
    const mapInfo = document.createElement('div')
    mapInfo.classList.add('map-info')
    mapInfo.innerHTML = 'King Georgie Island, Antarctica'
    homePage.appendChild(map)
    map.appendChild(mapContainer)
    mapContainer.append(embedMap, mapInfo)
}

function menupage() {

    content.replaceChildren()
    const menuPage = document.createElement('div')
    menuPage.classList.add('menu-page')
    content.appendChild(menuPage)

    const menuH2 = document.createElement('h2')
    menuH2.innerHTML = 'Exquisite Menu'
    menuPage.appendChild(menuH2)
    
    function menuItem(item, price, stock, pic) {
        this.item = item
        this.price = price
        this.stock = stock
        this.pic = pic
    }
    const menuItems = []
    const menuPrices = []
    const menuStock = []
    const menuPics = []

    let item1 = new menuItem('Sirloin Tacos', '$11.99 (8pcs)',
    'https://www.pexels.com/photo/steak-tacos-7613568/', 'sirloin-tacos.jpeg')
    menuItems.push(item1.item)
    menuPrices.push(item1.price)
    menuStock.push(item1.stock)
    menuPics.push(item1.pic)

    let item2 = new menuItem('Sirloin Chuleta', '$13.99',
    'https://www.pexels.com/photo/grilled-meat-410648/', 'chuleta-sirloin.jpeg')
    menuItems.push(item2.item)
    menuPrices.push(item2.price)
    menuStock.push(item2.stock)
    menuPics.push(item2.pic)

    let item3 = new menuItem('Sirloin Steak with sides', '$15.99',
    'https://www.pexels.com/photo/parrillero-de-res-16970732/', 'sirloin-steak.jpeg')
    menuItems.push(item3.item)
    menuPrices.push(item3.price)
    menuStock.push(item3.stock)
    menuPics.push(item3.pic)

    let item4 = new menuItem('Santisima Trinidad', '$11.99',
    'https://www.pexels.com/photo/cooked-food-on-blue-plate-2092507/', 'trinidad.jpeg')
    menuItems.push(item4.item)
    menuPrices.push(item4.price)
    menuStock.push(item4.stock)
    menuPics.push(item4.pic)

    for (let i = 0; i < menuItems.length; i++) {
        let itemMenu = document.createElement('div')
        itemMenu.classList.add('menu-item')
        let itemInfo = document.createElement('div')
        itemInfo.classList.add('item-info')
        let itemMeal = document.createElement('p')
        let itemPrice = document.createElement('p')
        let stockLink = document.createElement('a')
        let itemPhoto = document.createElement('img')

        itemMeal.innerHTML = menuItems[i]
        itemPrice.innerHTML = menuPrices[i]
        stockLink.href = menuStock[i]
        stockLink.target = "_blank"
        itemPhoto.src = menuPics[i]
        itemPhoto.alt = 'foto'

        menuPage.appendChild(itemMenu)
        itemMenu.append(itemInfo, stockLink)
        itemInfo.append(itemMeal, itemPrice)        
        stockLink.appendChild(itemPhoto)
    }
}

function contactpage() {

    content.replaceChildren()
    const contactPage = document.createElement('div')
    contactPage.classList.add('contact-page')
    content.appendChild(contactPage)

    const contactH2 = document.createElement('h2')
    contactH2.innerHTML = 'Contact us'
    const contactText = document.createElement('p')
    contactText.innerHTML = 'Leave us a message with your contact details so we can get back to you shortly'
    const contactForm = document.createElement('div')
    contactForm.classList.add('form') 
    contactPage.append(contactH2, contactText, contactForm)

    const form = document.createElement('form')
    form.action = ''
    form.method = 'get'
    contactForm.appendChild(form)

    const labelName = document.createElement('label')
    labelName.for = 'name'
    labelName.innerHTML = 'Name:'
    const inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.name = 'name'
    inputName.classList.add = 'input-name'
    inputName.id = 'name'
    inputName.placeholder = 'Enter your name'
    inputName.required = true

    const labelEmail = document.createElement('label')
    labelEmail.for = 'email'
    labelName.innerHTML = 'Email:'
    const inputEmail = document.createElement('input')
    inputEmail.type = 'email'
    inputEmail.name = 'email'
    inputEmail.classList.add = 'input-email'
    inputEmail.id = 'email'
    inputEmail.placeholder = 'Enter your email'
    inputEmail.required = true

    const labelMessage = document.createElement('label')
    labelMessage.for = 'message'
    labelMessage.innerHTML = 'Message:'
    const inputMessage = document.createElement('textarea')
    inputMessage.name = 'message'
    inputMessage.classList.add('input-message')
    inputMessage.id = 'message'
    inputMessage.placeholder = 'Enter your message'
    inputMessage.rows = '10'
    inputMessage.required = true
    inputMessage.style = 'resize: none;'

    const formButtons = document.createElement('div')
    formButtons.classList.add('form-buttons')

    form.append(labelName, inputName, labelEmail, inputEmail, 
        labelMessage, inputMessage, formButtons)

    const submitForm = document.createElement('button')
    submitForm.type = 'submit'
    submitForm.value = 'submit'
    submitForm.innerHTML = 'Submit'
    const resetForm = document.createElement('button')
    resetForm.type = 'reset'
    resetForm.value = 'reset'
    resetForm.innerHTML = 'Reset'

    formButtons.append(submitForm, resetForm)
}

homepage()

menu.addEventListener('click', menupage)

contact.addEventListener('click', contactpage)

home.addEventListener('click', homepage)
furcio.addEventListener('click', homepage)