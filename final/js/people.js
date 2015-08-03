(function(){
  peopleData = [];

  function displayImages() {
    $.each(peopleData[0].images, function(i, v) {
      $('.gallery-list').append(
        '<li class="list-item" data-image="'+i+'"><img src="' + v.thumb + '" /></li>'
      );
    });
    setTimeout(function(){
      $('.gallery-list').packery({
        itemSelector: '.list-item',
        gutter: 10
      });
      var gallery = new Gallery(peopleData);
    },500);
  }

  // get photos
  $.getJSON('data/people.json', function(data) {
    peopleData.push(data);
    displayImages();
  });

})();
