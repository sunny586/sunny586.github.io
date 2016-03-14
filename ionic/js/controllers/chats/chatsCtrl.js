angular.module('app')
  .controller('ChatsCtrl', function($scope,cacheService,$state) {

    $scope.chats = [{
      url: 'account',
      role: 'account',
      name: '普通用户',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      url: 'admin',
      role: 'admin',
      name: '管理员',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      url: 'charts',
      name: 'Angular Charts',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }];

    $scope.clickHandle = function(item) {
      if(item.role) cacheService.setLocalStorage('role',item.role);      
      $state.go('app.chats-'+item.url);
    };

  })