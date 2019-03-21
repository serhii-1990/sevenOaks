window.onload = function() {

    // Carusel START 
    let images = document.querySelectorAll('#slider .images img');
    let counter = 0;
    let btnPrev = document.getElementById('btn-left');
    let btnNext = document.getElementById('btn-right');
    btnPrev.onclick = function() {
        images[counter].className = '';
        counter--;
        if (counter < 0) {
            counter = images.length - 1;
        };

        images[counter].className = 'active';
    };

    btnNext.onclick = function() {
        images[counter].className = '';
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        images[counter].className = 'active';
    };
    // Carusel END

    //Buttons Height START

    var caruselImgActive = document.querySelector(".active");
    var caruselImgButton = document.querySelector("#btn-left");
    var caruselButtonsLine = document.querySelector(".buttons");
    var caruselImgStyle = window.getComputedStyle(caruselImgActive);
    var caruselImgHeight = caruselImgStyle.getPropertyValue('height');
    var caruselButtonHeight = caruselImgButton.offsetHeight;


    function calculateCenter(imgHeight, buttonHeight) {
        let result = (parseInt(caruselImgHeight) - parseInt(caruselButtonHeight)) / 2;
        return result;
    };

    function setButtonsPosition(result, buttonsLine) {
        buttonsLine.style.visibility = 'visible';
        buttonsLine.style.top = result + 'px';
    };

    setButtonsPosition(calculateCenter(caruselImgHeight, caruselButtonHeight), caruselButtonsLine);

    window.onresize = function() {
        caruselImgActive = document.querySelector(".active");
        caruselImgButton = document.querySelector("#btn-left");
        caruselButtonsLine = document.querySelector(".buttons");
        caruselImgStyle = window.getComputedStyle(caruselImgActive);
        caruselImgHeight = caruselImgStyle.getPropertyValue('height');
        caruselButtonHeight = caruselImgButton.offsetHeight;
        setButtonsPosition(calculateCenter(caruselImgHeight, caruselButtonHeight), caruselButtonsLine);

    };
    //Buttons Height END
};