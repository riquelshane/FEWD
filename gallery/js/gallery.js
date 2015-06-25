//Define prototypical Gallery function
Element.prototype.Gallery = function(){
  var gallery = this;
  var slider = document.getElementById('slider');
  var ul = gallery.children[0];
  var photos = {};
  var container = document.getElementById('container');

  // Define global variables

  this.singlePhoto = function(ev) {

      console.log(ev.target.style.backgroundImage);

    var section = document.createElement('section');

    section.classList.add('single-photo');

    section.innerHTML = ev.target.innerHTML;
    section.style.backgroundImage = ev.target.style.backgroundImage;
    section.style.backgroundRepeat = 'no-repeat';
    section.style.backgroundSize = 'contain';
    section.style.backgroudPosition = '100%';
    section.style.height = '100%';

    var closeButton = document.createElement('div');
    closeButton.classList.add('close');

    closeButton.addEventListener('click',function(){
      section.style.display = 'none';

    });
    
    section.appendChild(closeButton);
    container.appendChild(section);


  };
    //document.getElementById('largeImg').src = gallery.children;
    // var singlePhotoSection = document.getElementById('single-photo');
    //var largeImg = document.getElementById('largeImg');

    // singlePhotoSection.style.backgroundImage = ev.target.style.backgroundImage;
    // singlePhotoSection.style.display = 'block';
    // singlePhotoSection.style.opacity = 1;
    //
    // singlePhotoSection.innerHTML = '<div id="close" class="close"></div>'+
    //   ev.target.innerHTML;


  //   var closeBtn = document.getElementById('close');
  //   closeBtn.addEventListener('mousedown',closeSinglePhoto);
  //
  //   gallery.style.display = 'none';
  //   slider.style.display = 'none';
  //
  //   function closeSinglePhoto(){
  //     gallery.style.display = 'block';
  //     slider.style.display = 'block';
  //     singlePhotoSection.style.display = 'none';
  //   }
  //
  // };


  this.layoutPhotos = function(){
      // add logic for each photo in here
      photos.forEach(function(photo,index){

        //console.log(photo);
        var li = document.createElement('li');

        li.style.backgroundImage = 'url("'+photo.image_url+'")';
        li.style.backgroundSize = 'cover';

        li.innerHTML = '<div class="meta"><h5>'+
            photo.name+
            '</h5><h6>'+
            photo.user.fullname+
            '<h6></div><div class="stats"><div>'+
            photo.rating+'</div></div>'+
            '</div>';

        li.dataset.description = photo.description;

        li.addEventListener('mousedown',gallery.singlePhoto);

        ul.appendChild(li);

      });
  };

  this.connect = function(){
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "./models/popular-photos.json", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var response = JSON.parse(xhr.responseText);
            photos = response.photos;
            gallery.layoutPhotos();
          // JSON.parse does not evaluate the attacker's scripts via xhr.responseText.

        }
      }
      xhr.send();
  };

  this.init = function(){

    this.connect();

  };


  this.init(); // do tasks on initialization.


};
/* end Gallery */
