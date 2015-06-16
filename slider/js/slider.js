// Define prototypical Slider function
Element.prototype.slider = function(){

    var slider = this;
    var wrapper = slider.children[0];
    var slides = wrapper.children;
    var position = 0;
    var width =  window.innerWidth;
    var leftButton = document.createElement('div');
    var rightButton = document.createElement('div');


    var init = function(){

        wrapper.style.width = slides.length * width + 'px';
        wrapper.style.height = '100%';

        leftButton.classList.add('left');
        rightButton.classList.add('right');

        slider.appendChild(leftButton);
        slider.appendChild(rightButton);

        for(var index=0; index<slides.length; index++) {
            slides[index].style.width = width + 'px';
        }

        leftButton.addEventListener('mousedown',function(){
            wrapper.style.marginLeft = width * position * -1 + 'px';
            position = position + 1;
        });

        rightButton.addEventListener('mousedown', function(){
            wrapper.style.marginLeft = width * position * -1+'px';
            position = position + 1;

        });

    };

    init();


};
/* end Slider */
