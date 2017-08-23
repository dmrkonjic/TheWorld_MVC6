// simpleControls.js
(function () {
    "use strict";

    angular.module("simpleControls", [])
        .directive("waitCursor", waitCursos);

    function waitCursor() {
        return {
            scope: {
                show: "=displayWhen"
            },
            restrict: "E",
            templateUrl: "/views/waitCursor.html"
        };
    }

})();