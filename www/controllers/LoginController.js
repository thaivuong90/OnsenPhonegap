/**
 * LoginController.js
 *
 * @author nghia.tnh
 */
"use strict";

app.module.controller("LoginController", function($scope) {
    // Current page info
    var _pageInfo = app.getPageInfo($scope);
    _pageInfo.target.onShow = function() {
    };
    
    $scope.id = '';
    $scope.password = '';

    /**
     * Initialize event, event is fired after <ons-page> is attached to DOM.
     */
    $scope.ngInit = function() {
        alert('111');
    };
});