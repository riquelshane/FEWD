Element.prototype.Search = function(){
  var gallery = document.getElementById('gallery');
  var search = this;
  var input = this.children[0];

  this.init = function(){
    input.addEventListener('focus',function(){
      this.value = '';

    });
    input.addEventListener('keyup',function(e){

      if(e.keyCode === 13) {
        var query = input.value;
        gallery.filterPhotos(query);
      }
    });
  }

  this.init();

};

// after the user presses ENTER/RETURN, filter the gallery <li> using tags from the JSON model.
// li.dataset.description = photo.description;
// set the tags as data tribues
// data tags
