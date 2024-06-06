/* создаем функцию, которая будет приниматр offset */
const imageChange = (offset) => {
    // находим активный слайд
    const activeSlide = document.querySelector("[data-active]");
    // массив слайдов
    const slides = [...document.querySelectorAll(".slide")];
 
    // кладем слайды в массив и находим индекс активного
    const currentIndex = slides.indexOf(activeSlide);

    // переменная let не позв. меняться индексу вне ф-ции?
    let newIndex = currentIndex + offset;
    
    // если значение <0, перескакиваем на последний слайд
    if (newIndex < 0) newIndex = slides.length - 1;
    // если значение >=3, перескакиваем на первый слайд
    if (newIndex >= slides.length) newIndex = 0;
    console.log(slides)
    // делаем наш текущий слайд активным
    slides[newIndex].dataset.active = true;
    // наш "активный слайд" делаем неактивным
    delete activeSlide.dataset.active;
}

/* создаем функцию нажатия кнопки "следующая", 
в которую кладем изменение с параметром 1 */
const onNext = () => imageChange(1);
const onPrev = () => imageChange(-1);
