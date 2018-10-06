'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 * Main module of the application.
 */
var app =
    angular.module('app', [
        'common',
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'ngStorage',
        'ngStore',
        'ui.router',
        'ui.utils',
        'ui.bootstrap',
        'ui.load',
        'ui.jp',
        'oc.lazyLoad',
        'angular-loading-bar',
        'chart.js',
        'treeControl'
    ], ['$httpProvider', function($httpProvider) {
        // Use x-www-form-urlencoded Content-Type
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function(obj) {
            var query = '',
                name, value, fullSubName, subName, subValue, innerObj, i;

            for (name in obj) {
                value = obj[name];

                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value !== undefined && value !== null)
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };

        // Override $http service's default transformRequest
        $httpProvider.defaults.transformRequest = [function(data) {
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];
    }])
    .config(
        ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
            function($controllerProvider, $compileProvider, $filterProvider, $provide) {

                // lazy controller, directive and service
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
                app.constant = $provide.constant;
                app.value = $provide.value;
            }
        ])
    .factory('timestampMarker', ["$rootScope", 'serviceHost','$timeout', function($rootScope, serviceHost,$timeout) {
        var timestampMarker = {
            request: function(config) {
                $rootScope.loading = true;
                config.requestTimestamp = new Date().getTime();
                return config;
            },
            response: function(response) {
                if (response.headers("sessionstatus") == "timeOut") {
                    window.location.replace(serviceHost + response.headers("timeOutRedirect"));
                }
                $rootScope.loading = false;
                response.config.responseTimestamp = new Date().getTime();
                $timeout(function() {
                    angular.element('#menu').css({
                        height: angular.element('#container').outerHeight() - angular.element('#header').height() - angular.element('#footer').height() + 'px'
                    });
                });
                return response;
            },
            requestError: function(config) {
                config.requestTimestamp = new Date().getTime();
                return config;
            },
            responseError: function(response) {
                $rootScope.loading = false;
                response.config.responseTimestamp = new Date().getTime();
                return response;
            }
        };
        return timestampMarker;
    }])
    //lazyload config
    .constant('MODULE_CONFIG', [{
        name: 'ui.select',
        module: true,
        files: [
            '../libs/angular/angular-ui-select/dist/select.js',
            '../libs/angular/angular-ui-select/dist/select.min.css'
        ]
    }, {
        name: 'textAngular',
        module: true,
        files: [
            '../libs/angular/textAngular/dist/textAngular-sanitize.min.js',
            '../libs/angular/textAngular/dist/textAngular.min.js'
        ]
    }, {
        name: 'vr.directives.slider',
        module: true,
        files: [
            '../libs/angular/venturocket-angular-slider/build/angular-slider.js',
            '../libs/angular/venturocket-angular-slider/angular-slider.css'
        ]
    }, {
        name: 'angularBootstrapNavTree',
        module: true,
        files: [
            '../libs/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
            '../libs/angular/angular-bootstrap-nav-tree/dist/abn_tree.css'
        ]
    }, {
        name: 'angularFileUpload',
        module: true,
        files: [
            '../libs/angular/angular-file-upload/angular-file-upload.js',
            '../libs/angular/angular-file-upload/angular-file-upload-shim.js'
        ]
    }, {
        name: 'ngImgCrop',
        module: true,
        files: [
            '../libs/angular/ngImgCrop/compile/minified/ng-img-crop.js',
            '../libs/angular/ngImgCrop/compile/minified/ng-img-crop.css'
        ]
    }, {
        name: 'smart-table',
        module: true,
        files: [
            '../libs/angular/angular-smart-table/dist/smart-table.min.js'
        ]
    }, {
        name: 'ui.map',
        module: true,
        files: [
            '../libs/angular/angular-ui-map/ui-map.js'
        ]
    }, {
        name: 'ngGrid',
        module: true,
        files: [
            '../libs/angular/ng-grid/build/ng-grid.min.js',
            '../libs/angular/ng-grid/ng-grid.min.css',
            '../libs/angular/ng-grid/ng-grid.bootstrap.css'
        ]
    }, {
        name: 'ui.grid',
        module: true,
        files: [
            '../libs/angular/angular-ui-grid/ui-grid.min.js',
            '../libs/angular/angular-ui-grid/ui-grid.min.css',
            '../libs/angular/angular-ui-grid/ui-grid.bootstrap.css'
        ]
    }, {
        name: 'xeditable',
        module: true,
        files: [
            '../libs/angular/angular-xeditable/dist/js/xeditable.min.js',
            '../libs/angular/angular-xeditable/dist/css/xeditable.css'
        ]
    }, {
        name: 'smart-table',
        module: true,
        files: [
            '../libs/angular/angular-smart-table/dist/smart-table.min.js'
        ]
    }, {
        name: 'dataTable',
        module: false,
        files: [
            '../libs/jquery/datatables/media/js/jquery.dataTables.min.js',
            '../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
            '../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'
        ]
    }, {
        name: 'footable',
        module: false,
        files: [
            '../libs/jquery/footable/dist/footable.all.min.js',
            '../libs/jquery/footable/css/footable.core.css'
        ]
    }, {
        name: 'easyPieChart',
        module: false,
        files: [
            '../libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'
        ]
    }, {
        name: 'sparkline',
        module: false,
        files: [
            '../libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'
        ]
    }, {
        name: 'plot',
        module: false,
        files: [
            '../libs/jquery/flot/jquery.flot.js',
            '../libs/jquery/flot/jquery.flot.resize.js',
            '../libs/jquery/flot/jquery.flot.pie.js',
            '../libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
            '../libs/jquery/flot-spline/js/jquery.flot.spline.min.js',
            '../libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js'
        ]
    }, {
        name: 'vectorMap',
        module: false,
        files: [
            '../libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
            '../libs/jquery/bower-jvectormap/jquery-jvectormap.css',
            '../libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
            '../libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js'
        ]
    },
    {
        name: 'treeControl',
        module: false,
        files: [
            '../libs/angular/angular-tree-control/css/tree-control-attribute.css',
            '../libs/angular/angular-tree-control/css/tree-control.css'
        ]
    },{
        name: 'moment',
        module: false,
        files: [
            '../libs/jquery/moment/moment.js'
        ]
    }])
    .constant('serviceHost', 'http://sunny586.oicp.io:42554/polls/')
    .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function($ocLazyLoadProvider, MODULE_CONFIG) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: false,
            modules: MODULE_CONFIG
        });
    }]);    
