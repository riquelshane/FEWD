(function(){
  placesData = [];

  function displayImages() {
    $.each(placesData[0].images, function(i, v) {
      $('.gallery-list').append(
        '<li class="list-item" data-image="'+i+'"><img src="' + v.thumb + '" /></li>'
      );
    });
    setTimeout(function(){
      $('.gallery-list').packery({
        itemSelector: '.list-item',
        gutter: 10
      });
      var gallery = new Gallery(placesData);
    },500);
  }

  // get photos
  $.getJSON('data/places.json', function(data) {
    placesData.push(data);
    displayImages();
  });

})();
