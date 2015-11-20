'use strict';

angular.module('ui.nested.combobox', [])
    .directive('nestedComboBox', function () {
        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                collection: '=',
                controlClass: '@',
                controlDisabled: '@',
                changeEvent: '&'
            },
            templateUrl: 'select-group.html',
            replace: true,
            link: function(scope, element, attrs, ngModel) {
                scope.isOpen = false;

                scope.$watch('controlDisabled', function (value) {
                    scope.controlDisabled = value;
                });

                scope.toggleOpen = function () {
                    if (scope.controlDisabled === 'true') {
                        return false;
                    }
                    scope.isOpen = ! scope.isOpen;
                };

                scope.selectValue = function (event, member) {
                    // if (scope.currentMember._id === member._id) {
                    //     return;
                    // }
                    scope.currentMember = member;
                    ngModel.$setViewValue(member);

                    scope.changeEvent();
                };

                ngModel.$render = function() {
                    scope.currentMember = ngModel.$viewValue;
                };
            }
        };
    })

    .run(['$templateCache', function($templateCache) {
        $templateCache.put('select-group.html', '\
<div class="custom-select" ng-disabled="controlDisabled==\'true\'" ng-class="controlClass" ng-click="toggleOpen()">\
    <p>{{currentMember.name}}</p>\
    <span><i class="fa fa-sort-down"></i></span>\
    <div class="list" ng-show="isOpen">\
        <ul>\
            <li ng-class="{\'active\':currentMember._id === member._id}" ng-include="\'sub-level.html\'" ng-repeat="member in collection"> </li>\
        </ul>\
    </div>\
</div>');

        $templateCache.put('sub-level.html', '\
<a href="" ng-click="selectValue(e,member)"><span>{{member.name}}</span></a>\
<ul>\
    <li ng-class="{\'active\':currentMember._id === member._id}" ng-repeat="member in member.children" ng-include="\'sub-level.html\'"></li>\
</ul>');
    }]);