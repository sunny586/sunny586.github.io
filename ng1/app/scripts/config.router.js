'use strict';
/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
angular.module('app')
  .run(
    ['$rootScope', '$state', '$stateParams', 'httpRequestService', '$timeout', 'MESSAGE', '$window',
      function($rootScope, $state, $stateParams, httpRequestService, $timeout, MESSAGE, $window) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams) {

          $rootScope.toStateName = toState.name;
          $rootScope.fromStateName = fromState.name;

          $timeout(function() {
            if (angular.element('.mdi-content-clear').length > 0) {
              angular.element('.mdi-content-clear').click()
            }
          });
          angular.element('.alert[name="bfd-alert"]').remove();
          angular.element('.datepicker').remove();

        });

      }
    ]
  )
  .config(
    ['$stateProvider', '$urlRouterProvider', '$httpProvider',
      function($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider
          .otherwise('/app/home');

        $stateProvider
          .state('app', {
            abstract: true,
            url: '/app',
            views: {
              '': {
                templateUrl: 'views/layout.html'
              },
              'header': {
                templateUrl: 'views/header.html'
              },
              'aside': {
                templateUrl: 'views/aside.html'
              },
              'content': {
                templateUrl: 'views/content.html'
              },
              'footer': {
                templateUrl: 'views/footer.html'
              },
              'loading': {
                templateUrl: 'views/loading.html'
              }
            }
          })
          .state('app.home', {
            url: '/home',
            templateUrl: 'views/app/home.html'
          })
          .state('app.component-button', {
            url: '/component/button',
            templateUrl: 'views/app/component/button.html'
          })
          .state('app.component-icon', {
            url: '/component/icon',
            templateUrl: 'views/app/component/icon.html'
          })
          .state('app.component-checkbox', {
            url: '/component/checkbox',
            templateUrl: 'views/app/component/checkbox.html',
            controller: 'checkboxCtrl',
            resolve: load(['scripts/controllers/component/checkboxCtrl.js'])
          })
          .state('app.component-radio', {
            url: '/component/radio',
            templateUrl: 'views/app/component/radio.html'
          })
          .state('app.component-select', {
            url: '/component/select',
            templateUrl: 'views/app/component/select.html',
            controller: 'selectCtrl',
            resolve: load(['scripts/controllers/component/selectCtrl.js'])
          })
          .state('app.component-form', {
            url: '/component/form',
            templateUrl: 'views/app/component/form.html',
            controller: 'formCtrl',
            resolve: load(['scripts/controllers/component/formCtrl.js'])
          })
          .state('app.component-tabs', {
            url: '/component/tabs',
            templateUrl: 'views/app/component/tabs.html'
          })
          .state('app.component-modal', {
            url: '/component/modal',
            templateUrl: 'views/app/component/modal.html',
            controller: 'modalCtrl',
            resolve: load(['scripts/controllers/component/modalCtrl.js'])
          })
          .state('app.component-datePicker', {
            url: '/component/datePicker',
            templateUrl: 'views/app/component/datePicker.html',
            controller: 'datePickerCtrl',
            resolve: load(['scripts/controllers/component/datePickerCtrl.js'])
          })
          .state('app.component-pager', {
            url: '/component/pager',
            templateUrl: 'views/app/component/pager.html',
            controller: 'pagerCtrl',
            resolve: load(['scripts/controllers/component/pagerCtrl.js'])
          })
          .state('app.component-confirm', {
            url: '/component/confirm',
            templateUrl: 'views/app/component/confirm.html',
            controller: 'confirmCtrl',
            resolve: load(['scripts/controllers/component/confirmCtrl.js'])
          })
          .state('app.component-message', {
            url: '/component/message',
            templateUrl: 'views/app/component/message.html',
            controller: 'messageCtrl',
            resolve: load(['scripts/controllers/component/messageCtrl.js'])
          })
          .state('app.component-switch', {
            url: '/component/switch',
            templateUrl: 'views/app/component/switch.html'
          })
          .state('app.component-upload', {
            url: '/component/upload',
            templateUrl: 'views/app/component/upload.html',
            controller: 'uploadCtrl',
            resolve: load(['angularFileUpload', 'scripts/controllers/component/uploadCtrl.js'])
          })
          .state('app.component-tree', {
            url: '/component/tree',
            templateUrl: 'views/app/component/tree.html',
            controller: 'treeCtrl',
            resolve: load(['treeControl', 'scripts/controllers/component/treeCtrl.js'])
          })
          .state('app.component-slider', {
            url: '/component/slider',
            templateUrl: 'views/app/component/slider.html',
            controller: 'sliderCtrl',
            resolve: load(['vr.directives.slider', 'scripts/controllers/component/sliderCtrl.js'])
          })
          .state('app.component-http', {
            url: '/component/http',
            templateUrl: 'views/app/component/http.html',
            controller: 'httpCtrl',
            resolve: load(['scripts/controllers/component/httpCtrl.js'])
          })
          .state('404', {
            url: '/404',
            templateUrl: 'views/pages/404.html'
          })
          .state('505', {
            url: '/505',
            templateUrl: 'views/pages/505.html'
          })
          .state('access', {
            url: '/access',
            views: {
              '': {
                templateUrl: 'views/access/layout.html'
              },
              'footer': {
                templateUrl: 'views/access/footer.html'
              },
              'loading': {
                templateUrl: 'views/loading.html'
              }
            }
          })
          .state('access.signin', {
            url: '/signin',
            templateUrl: 'views/pages/signin.html'
          })
          .state('access.signup', {
            url: '/signup',
            templateUrl: 'views/pages/signup.html'
          })
          .state('access.forgot-password', {
            url: '/forgot-password',
            templateUrl: 'views/pages/forgot-password.html'
          });

        $httpProvider.interceptors.push('timestampMarker');

        function load(srcs, callback) {
          return {
            deps: ['$ocLazyLoad', '$q', 'MODULE_CONFIG',
              function($ocLazyLoad, $q, MODULE_CONFIG) {
                var deferred = $q.defer();
                var promise = false;
                srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                if (!promise) {
                  promise = deferred.promise;
                }
                angular.forEach(srcs, function(src) {
                  promise = promise.then(function() {
                    var name = '';
                    angular.forEach(MODULE_CONFIG, function(module) {
                      if (module.name == src) {
                        if (!module.module) {
                          name = module.files;
                        } else {
                          name = module.name;
                        }
                      } else {
                        name = src;
                      }
                    });
                    return $ocLazyLoad.load(name);
                  });
                });
                deferred.resolve();
                return callback ? promise.then(function() {
                  return callback();
                }) : promise;
              }
            ]
          }
        }
      }
    ])

.directive('bfdUiSelectRequired', [function() {
    return {
      require: "ngModel",
      link: function(scope, element, attr, ngModel) {
        var validator = function(value) {
          var validity = false;
          for (var k in value) {
            if (value.hasOwnProperty(k)) {
              validity = true;
            }
          }
          ngModel.$setValidity("bfdUiSelectRequired", validity);
          return validity ? value : undefined;
        };
        ngModel.$formatters.push(validator);
        ngModel.$parsers.push(validator);
      }
    };
  }])
  .directive('ucUpload', [function() {
      return {
        restrict: 'A',
        link: function(scope, element, attr) {
          element.find('button').bind('click', function() {
            element.find('input').trigger("click");
          });
        }
      };
    }])
    .directive('folderToggle', ['$timeout', function($timeout) {
      return {
        restrict: 'A',
        link: function($scope, element, attrs) {
          element.on('click', 'i.tree-branch-head', function() {
            var this_ = angular.element(this),
              isOpen = this_.attr('class') === 'tree-branch-head fa fa-caret-right fa-caret-right-remove';
            if (isOpen) {
              this_.next().next().find('.bfd-icon').attr('class', 'fa fa-folder-open bfd-icon');
            } else {
              this_.next().next().find('.bfd-icon').attr('class', 'fa fa-folder bfd-icon');
            }
          });
        }
      };
    }]);