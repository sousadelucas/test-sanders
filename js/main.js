new SimpleSlide ({
    slide: 'slide-urban',
    time: 5000,
    nav: true
})

new SimpleSlide ({
    slide: 'slide-principal',
    time: 50000000,
    nav: true
})


function initAccordionList () {
    const accordionList = document.querySelectorAll('.js-accordion .div ul h4');
    if(accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion() {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
};

    accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
        });
    }
}

initAccordionList ()