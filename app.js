const storePartner = document.querySelector('.store-partner')
const macPartner = document.querySelector('.mac-partner')
const main = document.querySelector('.section-one')
const ipadPartner = document.querySelector('.ipad-partner')



function store() {
    const storeLinks = document.querySelector('.store')
    const nav = document.querySelector('.nav-main')
    const body = document.querySelector('body')
    const imgSectionOne = document.querySelector('.section-one-img-black-iphone')


    storeLinks.addEventListener('mouseover', function () {
        storePartner.classList.add('show-store')
        nav.classList.add('nav-display')
        main.style.filter = 'blur(10px)'
        main.classList.add('show-section-one-display')
        main.style.transition = 'all 0.2s ease-out'
        imgSectionOne.classList.add('show-black-iphone-display')
        macPartner.classList.remove('mac-display')
        ipadPartner.classList.remove('ipad-display')
    })
    main.addEventListener('mouseover', function () {
        storePartner.classList.remove('show-store')
        nav.classList.remove('nav-display')
        main.classList.remove('show-section-one-display')
        main.style.filter = 'none'
        imgSectionOne.classList.remove('show-black-iphone-display')
        ipadPartner.classList.remove('ipad-display')
    })
}
store()

function mac() {
    const macLink = document.querySelector('.mac')
    const macPartner = document.querySelector('.mac-partner')

    macLink.addEventListener('mouseover', function () {
        macPartner.classList.add('mac-display')
        storePartner.classList.remove('show-store')
        ipadPartner.classList.remove('ipad-display')
    })
    main.addEventListener('mouseover',function (){
        macPartner.classList.remove('mac-display')
        ipadPartner.classList.remove('ipad-display')
       
    })
}
mac()

function ipad(){
    const ipadLink = document.querySelector('.ipad')
    

    ipadLink.addEventListener('mouseover', function (){
        ipadPartner.classList.add('ipad-display')
    })
    main.addEventListener('mouseover', function (){
        ipadPartner.classList.remove('ipad-display')
    })
    
}
ipad()