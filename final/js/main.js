(function() {
  var imageData = [];
  var rotatorSpeed = 4;
  var currentImage = 1;
  var maxImages;

  function rotateImages() {
    var firstImage = $('.main-item:first-child');
    firstImage.addClass('active');

    var rotator = setInterval(function() {
      var nextImage = $('.main-item.active').next('.main-item');
      console.log(currentImage);
      if (currentImage == maxImages) {
        currentImage = 1;
        firstImage.addClass('active').siblings().removeClass('active');
      } else {
        nextImage.addClass('active').siblings().removeClass('active');
        currentImage++;
      }
    }, rotatorSpeed * 1000);
  }

  function displayImages() {
    $.each(imageData[0].images, function(i, v) {
      $('.main-list').append(
        '<li class="main-item"><img src="' + v.url + '" /></li>'
      );
    });

    rotateImages();
  }

  $.getJSON('data/main.json', function(data) {
    imageData.push(data);
    maxImages = imageData[0].images.length;
    displayImages();
  });

})();