var app = angular.module('myApp', []);
var express = require('express');
var exapp = express();

app.controller('MainController', ctrlFunc);
function ctrlFunc(){
    this.positiveCards = [];
    this.negativeCards = [];
    this.cards = clientCards;
    this.range = function(n) {
        return new Array(n);
    };
    this.go_href = function(type){
        console.log(type);
        window.location = '#section-' + type;
    }
    this.get_rows = function(cards){
        return Math.ceil(cards.length / 4);
    }
    this.incrementSelectCount = function(selectCount, card){
        selectCount = (selectCount+1) % 3;
        if(selectCount == 1){
            this.positiveCards.push(card);
        }else if(selectCount == 2){
            var index = this.positiveCards.indexOf(card);
            if(index > -1){
                this.positiveCards.splice(index, 1);
            }
            this.negativeCards.push(card);
        }else{
            var index = this.negativeCards.indexOf(card);
            if(index > -1){
                this.negativeCards.splice(index, 1);
            }
        }
        return selectCount;
    }
    this.onSubmit = function(){
        exapp.get('/api/tarots/result', function(req, res){
            if(req.body.id) {
                Tarots.findByIdAndUpdate(req.body.id, {
                    todo: req.body.todo,
                    isDone: req.body.isDone,
                    hasAttachment: req.body.hasAttachment
                }, function(err, todo){
                    if(err) throw err;
                    res.send('Success');
                });
            }else{
                //new creation
                var newTarot = tarots({
                    username: 'test',
                    todo: req.body.todo,
                    isDone: req.body.isDone,
                    hasAttachment: req.body.hasAttachment
                });
                newTarot.save(function(err) {
                    res.send('Success');
                });
            }
        });
    }
}
