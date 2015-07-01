Element.prototype.Search = function(){
  var gallery = document.getElementById('gallery');
  var searchbar = document.getElementById('searchbar')

  this.searchTags = function(e) {
    var entertext = searchbar.value;


    if(e.keyCode === 13){


    }


  };

  searchbar.addEventListener('keypress',search.searchTags);








};

//   //after the user presses ENTER/RETURN, filter the gallery <li> using tags from the JSON model.
// // li.dataset.description = photo.description;
// // set the tags as data tribues
// //data tags
