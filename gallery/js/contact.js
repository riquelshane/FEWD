Element.prototype.Contact = function(){
  var contact = this,
    form = document.getElementById('c_form'),
    submit = document.getElementById('contact-submit'),
    wrapper = document.getElementById('form-wrapper');


this.send = function (){
  //colelction all the forms and information
  var link = 'mailto:rqlshane88@gmail.com?subject=Message from '+
              form.children[0].value+
              '&body='+
              form.children[3].value;

  window.location.href = link;
  wrapper.innerHTML = '<div class="center"><h2>Thanks</h2></div>';
  //leave some feedback for the user that the form has been submitted

};

  this.init = function(){
      // add an eventlistener on the bottom which sends the form!
      submit.addEventListener('click',function(ev){
        ev.preventDefault();
        contact.send();
      });
  };

this.init();

};
