angular.module('app')

.factory('cacheService', function() {

  return {
    setLocalStorage: function(key, value) {
      localStorage.setItem(key, value);
    },
    getLocalStorage: function(key) {
      return localStorage.getItem(key);
    }
  };


});