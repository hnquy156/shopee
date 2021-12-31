document.addEventListener('DOMContentLoaded', (event) => {
    
    sliderImage();

    window.addEventListener('resize', sliderImage);


    function sliderImage() {
        const slider        = document.querySelector('.product__image-slider');
        const sliderItemImg = document.querySelectorAll('.product__image-item');
        const sliderBox     = document.querySelector('.product__image-slider-box');
        const leftBtn       = document.querySelector('.image__btn-arrow.image__btn-left');
        const rightBtn      = document.querySelector('.image__btn-arrow.image__btn-right');
        const numberSlideMax= 4;
        const sliderWidth   = slider.offsetWidth / numberSlideMax;
        const sliderBoxWidth= sliderWidth * sliderItemImg.length;
        let count           = 0;
        let canClickSlideBtn= true;
        const delayClickBtn = 400;
    
        leftBtn.addEventListener('click', () => {
            if (!canClickSlideBtn) return -1;
            canClickSlideBtn = false;
            count += sliderWidth;
            if (count > 0) {
                count -= sliderWidth;
            }
            sliderBox.style.transform = `translateX(${count}px)`;
            setTimeout(slideCanClick, delayClickBtn);
    
        });
    
        rightBtn.addEventListener('click', () => {
            if (!canClickSlideBtn) return -1;
            canClickSlideBtn = false;
            count -= sliderWidth;
            if (count <= -(sliderWidth * (sliderItemImg.length - numberSlideMax + 1))) {
                count += sliderWidth;
            }
            sliderBox.style.transform = `translateX(${count}px)`;
            setTimeout(slideCanClick, delayClickBtn);
        });
    
        sliderItemImg.forEach(item => {
            item.style.width = `${sliderWidth}px`;
        })
    
        function slideCanClick() {
            canClickSlideBtn = true;
        }
    }
});

