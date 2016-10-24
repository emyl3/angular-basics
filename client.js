//'name of app', [dependencies]
var app = angular.module('basicApp', []);

//controllers take our data to the views and do a lot of the logic
//'name of controller', function that has all of our logic
app.controller('BasicController', function () {
  console.log('BasicController loaded'); //to make sure it is connected
  //to make sure this refers to the function
  var self = this; //holds the value of this controller
  self.cohorts=[];

  self.person = {
    name: 'Antoinette',
    hairColor: 'chemical fire',
  };

  self.createCohort = function () {
    console.log('Submitted cohort', self.cohort);
    self.cohorts.push(angular.copy(self.cohort));
    //angular.copy is a built in method that makes a copy of the object instead
    //of storing object itself
  };
});
