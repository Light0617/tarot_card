var app = angular.module('myApp', []);
app.controller('MainController', ctrlFunc);
function ctrlFunc(){
    this.message = 'D CUP';
    this.cardsMajors = clientCardMajors;
    this.cardsWands = clientCardWands;
    this.cardsCups = clientCardCups;
    this.cardsSwords = clientCardSwords;
    this.cardsPentacless = clientCardPentacless;
    this.cardTypes = clientCardTypes;
    this.range = function(n) {
        return new Array(n);
    };
    this.go_href = function(type){
        console.log(type);
        window.location = '#section-' + type;
    }
    this.rowMajorArrayLen = Math.ceil(this.cardsMajors.length / 4);
    this.rowOtherArrayLen = Math.ceil(this.cardsWands.length / 4);
}
