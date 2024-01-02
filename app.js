const storePartner = document.querySelector('.store-partner')
const macPartner = document.querySelector('.mac-partner')
const main = document.querySelector('.section-one')
const ipadPartner = document.querySelector('.ipad-partner')
const iphonePartner = document.querySelector('.iphone-partner')
const watchPartner = document.querySelector('.watch-partner')
const airpodsPartner = document.querySelector('.airpods-partner')
const tvAndHomes = document.querySelector('.tv')
const imgSectionOne = document.querySelector('.section-one-img-black-iphone')
const accessoriesPartner = document.querySelector('.accessories-partner')
const supportPartner = document.querySelector('.support-partner')

function store() {
    const storeLinks = document.querySelector('.store')
    const nav = document.querySelector('.nav-main')
    const body = document.querySelector('body')



    storeLinks.addEventListener('mouseover', function () {
        storePartner.classList.add('show-store')
        nav.classList.add('nav-display')
        main.style.filter = 'blur(10px)'
        main.classList.add('show-section-one-display')
        imgSectionOne.classList.add('show-black-iphone-display')
        macPartner.classList.remove('mac-display')
        ipadPartner.classList.remove('ipad-display')
        iphonePartner.classList.remove('iphone-display')
        watchPartner.classList.remove('watch-display')
        airpodsPartner.classList.remove('airpods-display')
        tvAndHomes.classList.remove('tv-display')
        supportLink.classList.remove('support-display')
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

        main.classList.add('show-section-one-display')
        imgSectionOne.classList.add('show-black-iphone-display')
        main.style.filter = 'blur(10px)'
        macPartner.classList.add('mac-display')
        storePartner.classList.remove('show-store')
        ipadPartner.classList.remove('ipad-display')
        iphonePartner.classList.remove('iphone-display')
        watchPartner.classList.remove('watch-display')
        airpodsPartner.classList.remove('airpods-display')
        tvAndHomes.classList.remove('tv-display')
        accessoriesPartner.classList.remove('accessories-display')
        supportLink.classList.remove('support-display')
    })
    main.addEventListener('mouseover', function () {
        macPartner.classList.remove('mac-display')
        ipadPartner.classList.remove('ipad-display')

    })
}
mac()

function ipad() {
    const ipadLink = document.querySelector('.ipad')

    main.classList.add('show-section-one-display')
    imgSectionOne.classList.add('show-black-iphone-display')
    main.style.filter = 'blur(10px)'
    ipadLink.addEventListener('mouseover', function () {
        ipadPartner.classList.add('ipad-display')
        iphonePartner.classList.remove('iphone-display')
        watchPartner.classList.remove('watch-display')
        airpodsPartner.classList.remove('airpods-display')
        tvAndHomes.classList.remove('tv-display')
        accessoriesPartner.classList.remove('accessories-display')
        supportLink.classList.remove('support-display')
    })
    main.addEventListener('mouseover', function () {
        ipadPartner.classList.remove('ipad-display')
    })

}
ipad()

function iphone() {
    const iphoneLink = document.querySelector('.iphone')

    iphoneLink.addEventListener('mouseover', function () {

        main.classList.add('show-section-one-display')
        imgSectionOne.classList.add('show-black-iphone-display')
        main.style.filter = 'blur(10px)'
        iphonePartner.classList.add('iphone-display')
        ipadPartner.classList.remove('ipad-display')
        macPartner.classList.remove('mac-display')
        storePartner.classList.remove('show-store')
        watchPartner.classList.remove('watch-display')
        airpodsPartner.classList.remove('airpods-display')
        tvAndHomes.classList.remove('tv-display')
        accessoriesPartner.classList.remove('accessories-display')
        supportLink.classList.remove('support-display')

    })
    main.addEventListener('mouseover', function () {
        iphonePartner.classList.remove('iphone-display')
    })
}
iphone()

function watch() {
    const watchLink = document.querySelector('.watch')

    watchLink.addEventListener('mouseover', function () {

        main.classList.add('show-section-one-display')
        imgSectionOne.classList.add('show-black-iphone-display')
        main.style.filter = 'blur(10px)'
        watchPartner.classList.add('watch-display')
        iphonePartner.classList.remove('iphone-display')
        ipadPartner.classList.remove('ipad-display')
        macPartner.classList.remove('mac-display')
        storePartner.classList.remove('show-store')
        airpodsPartner.classList.remove('airpods-display')
        tvAndHomes.classList.remove('tv-display')
        accessoriesPartner.classList.remove('accessories-display')
        supportLink.classList.remove('support-display')

    })
    main.addEventListener('mouseover', function () {
        watchPartner.classList.remove('watch-display')
    })
}
watch()

function airpods() {
    const airpodsLink = document.querySelector('.airpods')

    airpodsLink.addEventListener('mouseover', function () {

        main.classList.add('show-section-one-display')
        imgSectionOne.classList.add('show-black-iphone-display')
        main.style.filter = 'blur(10px)'
        airpodsPartner.classList.add('airpods-display')
        watchPartner.classList.remove('watch-display')
        iphonePartner.classList.remove('iphone-display')
        ipadPartner.classList.remove('ipad-display')
        macPartner.classList.remove('mac-display')
        storePartner.classList.remove('show-store')
        tvAndHomes.classList.remove('tv-display')
        accessoriesPartner.classList.remove('accessories-display')
        supportLink.classList.remove('support-display')
    })
    main.addEventListener('mouseover', function () {
        airpodsPartner.classList.remove('airpods-display')

    })
}
airpods()
// I try another method arrow function
tvs = () => {
    const tv = document.querySelector('.tv-home')
    tv.addEventListener('mouseover', function () {
        tvAndHomes.classList.add('tv-display')
        imgSectionOne.classList.remove('show-black-iphone-display')
        main.style.filter = 'blur(10px)'
        airpodsPartner.classList.add('airpods-display')
        watchPartner.classList.remove('watch-display')
        iphonePartner.classList.remove('iphone-display')
        ipadPartner.classList.remove('ipad-display')
        macPartner.classList.remove('mac-display')
        storePartner.classList.remove('show-store')
        accessoriesPartner.classList.remove('accessories-display')
        supportLink.classList.remove('support-display')
    })
    main.addEventListener('mouseover', function () {
        tvAndHomes.classList.remove('tv-display')
    })
}
tvs()

accessories = () => {
const accessories = document.querySelector('.accessories')
accessories.addEventListener('mouseover', function (){
    accessoriesPartner.classList.add('accessories-display')
    tvAndHomes.classList.remove('tv-display')
    imgSectionOne.classList.remove('show-black-iphone-display')
    main.style.filter = 'blur(10px)'
    airpodsPartner.classList.add('airpods-display')
    watchPartner.classList.remove('watch-display')
    iphonePartner.classList.remove('iphone-display')
    ipadPartner.classList.remove('ipad-display')
    macPartner.classList.remove('mac-display')
    storePartner.classList.remove('show-store')
    supportLink.classList.remove('support-display')
})
main.addEventListener('mouseover', function(){
    accessoriesPartner.classList.remove('accessories-display')
})
}
accessories()

support = () => {
const supportLink = document.querySelector('.support')
supportLink.addEventListener('mouseover', function (){
    supportLink.classList.add('support-display')
    accessoriesPartner.classList.remove('accessories-display')
    tvAndHomes.classList.remove('tv-display')
    imgSectionOne.classList.remove('show-black-iphone-display')
    main.style.filter = 'blur(10px)'
    airpodsPartner.classList.add('airpods-display')
    watchPartner.classList.remove('watch-display')
    iphonePartner.classList.remove('iphone-display')
    ipadPartner.classList.remove('ipad-display')
    macPartner.classList.remove('mac-display')
    storePartner.classList.remove('show-store')
})
main.addEventListener('mouseover', function (){
    supportLink.classList.remove('support-display')
})
}
support()

// const nav = document.querySelector('.nav')
// const store = document.querySelector('.store')
// const linkSection = document.querySelectorAll('.nav-contents')


// nav.addEventListener('mouseover', function (links) {
//     const link = links.target.dataset.link //store
  
// linkSection.forEach(function (linkSections){
//     linkSections.classList.remove('active')
// })

// const sectionId = document.getElementById(link)
// sectionId.classList.add('active')










