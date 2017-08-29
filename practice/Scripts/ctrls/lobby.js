app.controller('lobbylist', ['$scope', function ($scope) {
    $scope.lobbies = [{
        lobby: 'BBIN',
        url: '/Lobby/BBIN'
    }, {
        lobby: 'PT',
        url: '/Lobby/PT'
    }, {
        lobby: 'AG ',
        url: '/Lobby/AG'
    }, {
        lobby: 'MG  ',
        url: '/Lobby/MG'
    }, {
        lobby: 'SABA  ',
        url: '/Lobby/SABA'
    }, {
        lobby: 'XTD  ',
        url: '/Lobby/XTD'
    }];

    $scope.counter = 2568999;

}]);
