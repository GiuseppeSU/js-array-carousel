const imagesArray = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg'
];

const imageContainertDom = document.querySelector('.image-container');
let sliderContent = "";
for (let i = 0; i < imagesArray.length; i++) {
    const newImageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imagesArray[i]}" />
                            </div>`;
sliderContent += newImageWrapper;       
   
}

imageContainertDom.innerHTML = sliderContent;


const imagesWrapperDom = document.getElementsByClassName('image-wrapper');


let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('d-block');


const arrowNext = document.querySelector('#next');
const arrowPrev = document.querySelector('#prev');

arrowNext.addEventListener('click', 
    function() {
        if (activeImage < imagesWrapperDom.length - 1) {
            imagesWrapperDom[activeImage].classList.remove('d-block');
            activeImage++;
            imagesWrapperDom[activeImage].classList.add('d-block');
            arrowPrev.classList.remove('hide');

            if (activeImage == imagesWrapperDom.length - 1) {
                arrowNext.classList.add('hide');
            }

        }
    }
);

arrowPrev.addEventListener('click', 
    function() {
        if (activeImage > 0) {

            imagesWrapperDom[activeImage].classList.remove('d-block');
            activeImage--;
            imagesWrapperDom[activeImage].classList.add('d-block');
            arrowNext.classList.remove('hide');
            
            if (activeImage == 0) {
                arrowPrev.classList.add('hide');
            }

        }
    }
);