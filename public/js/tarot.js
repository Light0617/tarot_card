var app = angular.module('myApp', []);
app.controller('MainController', ctrlFunc);
function ctrlFunc(){
    this.message = 'D CUP';
    this.cards = clientCard;
    this.range = function(n) {
        return new Array(n);
    };
    this.rowArrayLen = Math.ceil(this.cards.length / 4);
}
