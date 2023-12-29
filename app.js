function store (){
    const storeLinks = document.querySelector('.store')
    const storePartner = document.querySelector('.store-partner')
    const main = document.querySelector('.section-one')
    const nav = document.querySelector('.nav-main')
    const body = document.querySelector('body')
    const imgSectionOne = document.querySelector('.section-one-img-black-iphone')
    console.log(main);
   
    storeLinks.addEventListener('mouseover', function(){
        storePartner.classList.add('show-store')
        nav.classList.add('nav-display')
        main.style.filter = 'blur(10px)'
       main.classList.add('show-section-one-display')
        main.style.transition = 'all 0.2s ease-out'
        imgSectionOne.classList.add('show-black-iphone-display')
    })
    main.addEventListener('mouseover', function(){
        storePartner.classList.remove('show-store')
        nav.classList.remove('nav-display')
        main.classList.remove('show-section-one-display')
        main.style.filter = 'none'
        imgSectionOne.classList.remove('show-black-iphone-display')

    })
    
}
store()