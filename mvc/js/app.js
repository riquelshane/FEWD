var User = function(user){
  this.model = user;
};

var View = function (elem,parent,className){
  var self = this;
  this.element = document.createElement(elem);
  this.element.classList.add(className);
  parent.appendChild(self.element);
};

View.prototype = {
  setContent : function(content) {
    this.element.innerHTML = content;

  }

};

var Controller = function(){
  this.model = [];
};

Controller.prototype = {
  createView : function(){
    this.model.forEach(function(user){
      var v = new View('div',document.body,'user');
      v.setContent('<h3>'+user.model.name+'</h3><h5>'+user.model.age+'</h5><h5>'+user.model.occupation+'</h5>');
    });
  },
  fetchUsers : function(){
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET','./model/users.json');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        //parse our JSON
        console.log(xhr.responseText);
        var model = JSON.parse(xhr.responseText);
        model.users.forEach(function(user){
          self.model.push(new User(user));
        });
        self.createView();
      }
    };
    xhr.send();
  }

};

var appController = new Controller();
appController.fetchUsers();
