(function(){
  thingsData = [];

  function displayImages() {
    $.each(thingsData[0].images, function(i, v) {
      $('.gallery-list').append(
        '<li class="list-item" data-image="'+i+'"><img src="' + v.thumb + '" /></li>'
      );
    });
    setTimeout(function(){
      $('.gallery-list').packery({
        itemSelector: '.list-item',
        gutter: 10
      });
      var gallery = new Gallery(thingsData);
    },500);
  }

  // get photos
  $.getJSON('data/things.json', function(data) {
    thingsData.push(data);
    displayImages();
  });

})();
