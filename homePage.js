const imageCarrousel = document.getElementById('image-carrousel');
const buttonPrev = document.getElementById('prev');
const buttonNext = document.getElementById('next');

const imgArray = ['fuente.JPEG','local.JPEG']
let currentImg = 0

const showImage= (index) => {
    imageCarrousel.src = imgArray[index]
};

buttonNext.addEventListener('click',()=>{
    currentImg = (currentImg + 1) % imgArray.length
    showImage(currentImg)
    
})


buttonPrev.addEventListener(('click'), ()=>{
    currentImg = (currentImg - 1 + imgArray.length) % imgArray.length;
    showImage(currentImg);
})