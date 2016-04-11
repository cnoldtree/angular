'use strict';var lang_1 = require('angular2/src/facade/lang');
var enums_1 = require('./enums');
var exceptions_1 = require('angular2/src/facade/exceptions');
function normalizeMethodName(method) {
    if (lang_1.isString(method)) {
        var originalMethod = method;
        method = method
            .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
            return g1.toUpperCase() + g2.toLowerCase();
        });
        method = enums_1.RequestMethod[method];
        if (typeof method !== 'number')
            throw exceptions_1.makeTypeError("Invalid request method. The method \"" + originalMethod + "\" is not supported.");
    }
    return method;
}
exports.normalizeMethodName = normalizeMethodName;
exports.isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return;
}
exports.getResponseURL = getResponseURL;
var lang_2 = require('angular2/src/facade/lang');
exports.isJsObject = lang_2.isJsObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cF91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtZjF1UHJ5anMudG1wL2FuZ3VsYXIyL3NyYy9odHRwL2h0dHBfdXRpbHMudHMiXSwibmFtZXMiOlsibm9ybWFsaXplTWV0aG9kTmFtZSIsImdldFJlc3BvbnNlVVJMIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBdUIsMEJBQTBCLENBQUMsQ0FBQTtBQUNsRCxzQkFBNEIsU0FBUyxDQUFDLENBQUE7QUFDdEMsMkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFHN0QsNkJBQW9DLE1BQThCO0lBQ2hFQSxFQUFFQSxDQUFDQSxDQUFDQSxlQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNyQkEsSUFBSUEsY0FBY0EsR0FBR0EsTUFBTUEsQ0FBQ0E7UUFDNUJBLE1BQU1BLEdBQVlBLE1BQU9BO2FBQ1hBLE9BQU9BLENBQUNBLFlBQVlBLEVBQUVBLFVBQUNBLEVBQVVBLEVBQUVBLEVBQVVBLEVBQUVBLEVBQVVBO21CQUMvQkEsRUFBRUEsQ0FBQ0EsV0FBV0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0EsV0FBV0EsRUFBRUE7UUFBbkNBLENBQW1DQSxDQUFDQSxDQUFDQTtRQUM3RUEsTUFBTUEsR0FBa0NBLHFCQUFjQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUMvREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsTUFBTUEsS0FBS0EsUUFBUUEsQ0FBQ0E7WUFDN0JBLE1BQU1BLDBCQUFhQSxDQUNmQSwwQ0FBdUNBLGNBQWNBLHlCQUFxQkEsQ0FBQ0EsQ0FBQ0E7SUFDcEZBLENBQUNBO0lBQ0RBLE1BQU1BLENBQWdCQSxNQUFNQSxDQUFDQTtBQUMvQkEsQ0FBQ0E7QUFaZSwyQkFBbUIsc0JBWWxDLENBQUE7QUFFWSxpQkFBUyxHQUFHLFVBQUMsTUFBYyxJQUFjLE9BQUEsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztBQUV0Rix3QkFBK0IsR0FBUTtJQUNyQ0MsRUFBRUEsQ0FBQ0EsQ0FBQ0EsYUFBYUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDekJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLHFCQUFxQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDekRBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7SUFDaERBLENBQUNBO0lBQ0RBLE1BQU1BLENBQUNBO0FBQ1RBLENBQUNBO0FBUmUsc0JBQWMsaUJBUTdCLENBQUE7QUFFRCxxQkFBeUIsMEJBQTBCLENBQUM7QUFBNUMsdUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1N0cmluZ30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7UmVxdWVzdE1ldGhvZH0gZnJvbSAnLi9lbnVtcyc7XG5pbXBvcnQge21ha2VUeXBlRXJyb3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge1Jlc3BvbnNlfSBmcm9tICcuL3N0YXRpY19yZXNwb25zZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVNZXRob2ROYW1lKG1ldGhvZDogc3RyaW5nIHwgUmVxdWVzdE1ldGhvZCk6IFJlcXVlc3RNZXRob2Qge1xuICBpZiAoaXNTdHJpbmcobWV0aG9kKSkge1xuICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IG1ldGhvZDtcbiAgICBtZXRob2QgPSAoPHN0cmluZz5tZXRob2QpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXFx3KShcXHcqKS9nLCAoZzA6IHN0cmluZywgZzE6IHN0cmluZywgZzI6IHN0cmluZykgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZzEudG9VcHBlckNhc2UoKSArIGcyLnRvTG93ZXJDYXNlKCkpO1xuICAgIG1ldGhvZCA9IDxudW1iZXI+KDx7W2tleTogc3RyaW5nXTogYW55fT5SZXF1ZXN0TWV0aG9kKVttZXRob2RdO1xuICAgIGlmICh0eXBlb2YgbWV0aG9kICE9PSAnbnVtYmVyJylcbiAgICAgIHRocm93IG1ha2VUeXBlRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgcmVxdWVzdCBtZXRob2QuIFRoZSBtZXRob2QgXCIke29yaWdpbmFsTWV0aG9kfVwiIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XG4gIH1cbiAgcmV0dXJuIDxSZXF1ZXN0TWV0aG9kPm1ldGhvZDtcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3VjY2VzcyA9IChzdGF0dXM6IG51bWJlcik6IGJvb2xlYW4gPT4gKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc3BvbnNlVVJMKHhocjogYW55KTogc3RyaW5nIHtcbiAgaWYgKCdyZXNwb25zZVVSTCcgaW4geGhyKSB7XG4gICAgcmV0dXJuIHhoci5yZXNwb25zZVVSTDtcbiAgfVxuICBpZiAoL15YLVJlcXVlc3QtVVJMOi9tLnRlc3QoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSkge1xuICAgIHJldHVybiB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtUmVxdWVzdC1VUkwnKTtcbiAgfVxuICByZXR1cm47XG59XG5cbmV4cG9ydCB7aXNKc09iamVjdH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbiJdfQ==