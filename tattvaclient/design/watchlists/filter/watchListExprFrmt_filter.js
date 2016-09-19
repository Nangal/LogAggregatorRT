//customfilter for watch expression format
angular.module("tattva")
    .filter('watchListExpr', function() {
        return function(wlstdef) {
            var exprtext = "";
            if (wlstdef !== undefined && wlstdef.expressions.length >= 1) {
                wlstdef.expressions.forEach(function(exprData) {
                    if (exprData.watch.lfield.exprAsText) {
                        exprtext += exprData.watch.lfield.exprAsText;
                    }

                    if (exprData.watch.operator) {
                        exprtext += "  " + exprData.watch.operator;
                    }

                    if (exprData.watch.rfield.exprAsText) {
                        exprtext += "  " + exprData.watch.rfield.exprAsText
                    }
                    if (exprtext !== "" && exprData.child !== "") {
                        exprtext += "  AND  ";
                    }
                });
            }
            return exprtext;
        };
    }) //end of customfilter
    .filter('camelcase', function() {
        return function(input) {
            /* input = input || '';*/
            return input.replace(/\w\S*/g, function(text) {
                return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
            });
        };
    });
