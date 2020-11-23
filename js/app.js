(function () {
    'use strict';

    angular.module('Lab4', [])
        .controller('Controller1', Controller1)
        .controller('Controller2', Controller2)
        .service('Service', Service);

    Controller1.$inject = ['Service'];

    function Controller1(Service) {
        var buy = this;

        buy.listBuy = Service.getBuy();
        buy.sell = function (index) {
            Service.sell(index);
        }
    }

    Controller2.$inject = ['Service'];

    function Controller2(Service) {
        var bought = this;
        bought.boughtList = Service.getBought();
    }

    function Service() {
        var service = this;

        var listBuy = [
            {
                name: "Морква",
                quantity: 66
            },
            {
                name: "Чіпси",
                quantity: 13
            },
            {
                name: "Курка",
                quantity: 11
            },
            {
                name: "Масло",
                quantity: 2
            },
            {
                name: "Картопля",
                quantity: 3
            },
            {
                name: "Пиво",
                quantity: 9999
            },
        ];

        var boughtList = [];

        service.getBuy = function () {
            return listBuy;
        };

        service.getBought = function () {
            return boughtList;
        };
        service.sell = function (index) {
            boughtList.push(listBuy[index]);
            listBuy.splice(index, 1);
        };
    }
})();
