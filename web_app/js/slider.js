//Define prototypical Slider function
Element.prototype.Slider = function(){

  // Define global variables

  /* slider = the element (<div>) that calls Slider() function (or 'this').
     this is the instance of the element
     wrapper equals the <ul> element inside <div class="slider">
     slides equal the array of <li> elements inside <ul>
  */
      // search component for elements
  var slider = this,
      wrapper = slider.children[0],
      slides = wrapper.children,
      position = 0,
      width = window.innerWidth,
      leftBtn = document.createElement('div'),
      rightBtn = document.createElement('div'),
      burger = document.getElementById('burger'),
      wholeSlider = document.getElementById('slider'),
      sliderPosition = 0;
  // Create buttons for sliding the Slider left and right

  this.createButtons = function(){

    // add classes to buttons for styling

    leftBtn.classList.add('left');
    rightBtn.classList.add('right');

    // add EventListeners to buttons, activating the CSS transition

    leftBtn.addEventListener('mousedown',function(){
      if(position > (width * (slides.length - 1)) * -1){
        position = position - width;
        wrapper.style.marginLeft = position + "px";
      }
    });

    rightBtn.addEventListener('mousedown',function(){
      if(position < 0){
        position = position + width;
        wrapper.style.marginLeft = position + "px";
      }
    });

    burger.addEventListener('mousedown', function(){
      if(sliderPosition === 0){
        wholeSlider.style.marginLeft = "200px";
        burger.style.marginLeft = "200px";
        leftBtn.style.marginLeft = "200px";
        sliderPosition =200;
      } else {
        wholeSlider.style.marginLeft = "0px";
        burger.style.marginLeft = "0px";
        leftBtn.style.marginLeft = "0px";
        sliderPosition = 0;
      }

    });

    // append the buttons to the Slider

    slider.appendChild(leftBtn);
    slider.appendChild(rightBtn);

  };

  // Resize the wrapper, slides by looping through the slides and finding the shortest.

  this.resize = function(){

    // change the width to 100% of the document Window.
    width = window.innerWidth;

    // change the width of the <ul> to be the width of all slides combined.
    wrapper.style.width = width * slides.length + "px";
    // reset the position of the wrapper
    wrapper.style.marginLeft = "0px";

    // loop through slides and find the shortest, change the height of the wrapper to the shortest
    for(var index=0; index < slides.length; index++){

      slides[index].children[0].style.width = width + "px";
      slides[index].style.width = width + "px";
      slides[index].style.height = slides[index].children[0].clientHeight + "px";

      if(slides[index].children[0].clientHeight <= slides[0].children[0].clientHeight || index===0){
        wrapper.style.height = slider.style.height = slides[index].children[0].clientHeight + "px";
        leftBtn.style.marginTop = rightBtn.style.marginTop = -1*(slides[index].children[0].clientHeight / 2) - 20 + 'px';
      }


    }

  }

  this.init = function(){

    slider.resize();
    slider.createButtons();

    // on resize of the browser window, call the resize function.
    window.addEventListener('resize',slider.resize);

  };


  this.init(); // do tasks on initialization.


};
/* end Slider */
