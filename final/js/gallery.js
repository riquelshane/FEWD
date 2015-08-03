var Gallery = (function(page){
  function showLarge(){
    var selectedImage = parseInt($(this).attr('data-image'));
    var fullImage = page[0].images[selectedImage].full;
    $('.gallery-large').show();
    $('.gallery-list').hide();

    $('.large-image').html('<img src="'+fullImage+'" />');
  }

  function closeLarge(){
    $('.gallery-large').hide();
    $('.gallery-list').show();
  }
  // event listener
  $('.list-item').on('click',showLarge);
  $('.gallery-close').on('click',closeLarge);

});
