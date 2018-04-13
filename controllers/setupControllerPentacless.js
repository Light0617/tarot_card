var Tarots = require('../models/tarotModel');

module.exports = function(app){
        var starterTarots = [
            {
                title: 'AcePentacless',
                name: 'Ace of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/1.jpg',
                type: 'pentacles',
                card_id: 1
            },
            {
                title: '2Pentacless',
                name: '2 of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/2.jpg',
                type: 'pentacles',
                card_id: 2
            },
            {
                title: '3Pentacless',
                name: '3 of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/3.jpg',
                type: 'pentacles',
                card_id: 3
            },
            {
                title: '4Pentacless',
                name: '4 of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/4.jpg',
                type: 'pentacles',
                card_id: 4
            },
            {
                title: '5Pentacless',
                name: '5 of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/5.jpg',
                type: 'pentacles',
                card_id: 5
            },
            {
                title: '6Pentacless',
                name: '6 of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/6.jpg',
                type: 'pentacles',
                card_id: 6
            },
            {
                title: '7Pentacless',
                name: '7 of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/7.jpg',
                type: 'pentacles',
                card_id: 7
            },
            {
                title: '8Pentacless',
                name: '8 of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/8.jpg',
                type: 'pentacles',
                card_id: 8
            },
            {
                title: '9Pentacless',
                name: '9 of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/9.jpg',
                type: 'pentacles',
                card_id: 9
            },
            {
                title: '10Pentacless',
                name: '10 of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/10.jpg',
                type: 'pentacles',
                card_id: 10
            },
            {
                title: '11Pentacless',
                name: 'Page of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/11.jpg',
                type: 'pentacles',
                card_id: 11
            },
            {
                title: '12Pentacless',
                name: 'Knight of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/12.jpg',
                type: 'pentacles',
                card_id: 12
            },
            {
                title: '13Pentacless',
                name: 'Queen of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/13.jpg',
                type: 'pentacles',
                card_id: 13
            },
            {
                title: '14Pentacless',
                name: 'King of Pentacless',
                general: "Pamela Coleman-Smith",
                advice: "The",
                img: '/assets/img/pentacless/14.jpg',
                type: 'pentacles',
                card_id: 14
            }
        ];
        Tarots.create(starterTarots, function(err, results){
            console.log(results);
        });
}
