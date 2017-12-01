/**
 * app.js
 *
 * @author nghia.tnh
 * @version 1.0.0
 */
"use strict";

// Check requred library: jQuery
if (typeof $ === "undefined" || typeof jQuery === "undefined" || !($ === jQuery)) {
    throw new Error("The jQuery library is required for app.js: http://jquery.com/download/");
}

/**
 * This function allow define any properies in context parameter.
 *
 * @author nghia.tnh
 * @param {object} context: Object parent
 * @param {string} propName: Name of property
 * @param {any} propValue: Value of property (string, number, function,...)
 */
window.__define__ = function(context, propName, propValue) {
    if (context === null || context === undefined) {
        throw new Error("The property context is requred");
    } else if (propName === null || propName === undefined) {
        throw new Error("The property name is requred");
    } else if (typeof propName !== "string") {
        throw new Error("The property name is not a string");
    }
    Object.defineProperty(context, propName, {
        value: propValue
    });
};

/**
 * Define app pro in window.
 *
 * @author nghia.tnh
 */
window.__define__(window, "app", {
    // Define global variable.
});

/**
 * This function allow define any properies in window.app
 *
 * @author nghia.tnh
 * @param {string} propName: Name of property
 * @param {any} propValue: Value of property (string, number, function,...)
 */
window.__define__(app, "define", function(propName, propValue) {
    window.__define__(app, propName, propValue);
});

/**
 * Log console
 *
 * @author nghia.tnh
 *     2017-07-09: Change from window.console to custom log
 */
app.define("console", window.console);
// app.define("console", {
//     log: function() {
//         return;
//     },
//     error: function() {
//         return;
//     }
// });

/**
 * Alias for jquery.cookie library.
 *
 * @author nghia.tnh
 */
// app.define("cookie", $.cookie);

/**
 * Define const property in window.app
 *
 * @author nghia.tnh
 */
app.define("const", {});

/**
 * Define languages property in window.app
 *
 * @author nghia.tnh
 */
app.define("languages", {});

/**
 * Define ajax property in window.app
 *
 * @author nghia.tnh
 */
app.define("ajax", {});

/**
 * Alias for momentjs.
 *
 * @author nghia.tnh
 */
// app.define("moment", moment);

/**
 * This function allow define const in window.app
 * Constants name is UPPERCASE character.
 *
 * @author nghia.tnh
 * @param {string} constName: Name of method
 * @param {function} constValue: Function
 */
app.define("addConstants", function(constName, constValue) {
    if (constName === null || constName === undefined) {
        throw new Error("The constants name is requred");
    } else if (typeof constName !== "string") {
        throw new Error("The constants name is not a string");
    } else if (constName !== constName.toUpperCase()) {
        throw new Error("The constants name is not a uppercase string");
    }
    window.__define__(app.const, constName, constValue);
});
app.addConstants("CONTENT_TYPE_JSON", "application/json; charset=UTF-8");

/**
 * This function allow define Function in window.app
 *
 * @author nghia.tnh
 * @param {string} funcName: Name of function
 * @param {function} func: Function
 */
app.define("addFunction", function(funcName, func) {
    if (funcName === null || funcName === undefined) {
        throw new Error("The function name is requred");
    } else if (typeof funcName !== "string") {
        throw new Error("The function name is not a string");
    } else if (typeof func !== "function") {
        throw new Error("The function is not a javascript function");
    }
    app.define(funcName, func);
});

/**
 * Trim space character (start, end) of input string.
 *
 * @author nghia.tnh
 * @param {string} value: Value for trim
 * @return {string} String after trim, space start & end is removed
 */
app.addFunction("trim", function(value) {
    return $.trim(value);
});

/**
 * Check string value matched with regular expression.
 *
 * @author nghia.tnh
 * @param {string} expression: Regular expression
 * @param {string} value: Value can check match with regular
 * @return {boolean} if matched return true, otherwise return false.
 */
app.addFunction("isMatch", function(expression, value) {
    return new RegExp(expression).test(value);
});

/**
 * Check string value non matched with regular expression.
 *
 * @author nghia.tnh
 * @param {string} expression: Regular expression
 * @param {string} value: Value can check not match with regular
 * @return {boolean} if matched return true, otherwise return false.
 */
app.addFunction("isNotMatch", function(expression, value) {
    return !app.isMatch(expression, value);
});

/**
 * Check string value is valid URL or non.
 *
 * @author nghia.tnh
 * @param {string} url: Value can check not match with regular
 * @return {boolean} if valid URL return true, otherwise return false.
 */
app.addFunction("isUrl", function(url) {
    return app.isMatch(app.const.REGEXP_URL_PATTERN, url);
});

/**
 * Determine whether the argument is an array.
 *
 * @author nghia.tnh
 * @param {any} obj: Object to test whether or not it is a function.
 * @return {boolean} returns a Boolean indicating whether the object is a JavaScript array
 */
app.addFunction("isArray", function(obj) {
    return $.isArray(obj);
});

/**
 * Determine if the argument passed is a JavaScript function object.
 *
 * @author nghia.tnh
 * @param {any} obj: Object to test whether or not it is an array.
 * @return {boolean} returns a Boolean indicating whether the object is a JavaScript function
 */
app.addFunction("isFunction", function(obj) {
    return $.isFunction(obj);
});

/**
 * Check value is string or non.
 *
 * @author nghia.tnh
 * @param {any} value: The value to be tested.
 * @return {boolean} If data type is string true. Otherwise it returns false.
 */
app.addFunction("isString", function(value) {
    return typeof value === "string";
});

/**
 * Determines whether its argument represents a JavaScript number.
 *
 * @author nghia.tnh
 * @param {any} value: The value to be tested.
 * @return {boolean} method checks whether its argument represents a numeric value.
 * If so, it returns true. Otherwise it returns false.
 */
app.addFunction("isNumeric", function(value) {
    return $.isNumeric(value);
});

/**
 * Check a string is empty or non, if empty then return true, otherwise return false.
 *
 * @author nghia.tnh
 * @param {string} value: Value can check empty
 * @return {boolean} if empty then return true, otherwise return false.
 */
app.addFunction("isEmpty", function(value) {
    return $.trim(value) === "";
});

/**
 * Check a string is empty or non, if not empty then return true, otherwise return false.
 *
 * @author nghia.tnh
 * @param {string} value: Value can check not empty
 * @return {boolean} if not empty then return true, otherwise return false.
 */
app.addFunction("isNotEmpty", function(value) {
    return !app.isEmpty(value);
});

/**
 * Check a value is null or non, if null then return true, otherwise return false.
 *
 * @author nghia.tnh
 * @param {string} value: Value can check null
 * @return {boolean} if null then return true, otherwise return false.
 */
app.addFunction("isNull", function(value) {
    return value === null || value === undefined;
});

/**
 * Check a string is empty or non, if not empty then return true, otherwise return false.
 *
 * @author nghia.tnh
 * @param {string} value: Value can check not empty
 * @return {boolean} if not empty then return true, otherwise return false.
 */
app.addFunction("isNotNull", function(value) {
    return !app.isNull(value);
});

/**
 * Select DOM element, using jQuery selector and return first element.
 *
 * @author nghia.tnh
 * @param {string} selector: using css selector
 * @param {any} container: selector or DOM element or jquery object.
 */
app.addFunction("selector", function(selector, container) {
    if (app.isNull(container)) {
        return $(selector).get(0);
    }
    return $(selector, container).get(0);
});

/**
 * Convert size in bytes to KB, MB, GB or TB
 *
 * @author nghia.tnh
 * @param {bytes} integer: Size convert
 * @return {string} Valud formatted include unit.
 */
app.addFunction("bytesToSize", function(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (app.isNull(bytes) || bytes == 0) {
        return "0 Byte";
    }
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
});

/**
 * Parses a string into an XML document.
 *
 * @author nghia.tnh
 * @param {string} data: a well-formed XML string to be parsed
 * @return {Document} XML Document.
 */
app.addFunction("parseXML", function(data) {
    return $.parseXML(data);
});

/**
 * Takes a well-formed JSON string and returns the resulting JavaScript value.
 *
 * @author nghia.tnh
 * @param {string} json: a well-formed XML string to be parsed
 * @return {object} JavaScript JSON object.
 */
app.addFunction("parseJSON", function(json) {
    return $.parseJSON(json);
});

/**
 * Convert object json to string.
 *
 * @author nghia.tnh
 * @param {object} json: a well-formed XML string to be parsed
 * @return {string} well-formed JSON string.
 */
app.addFunction("stringifyJSON", function(json) {
    return JSON.stringify(json);
});

/**
 * A generic iterator function, which can be used to seamlessly iterate over both obj and arrays.
 *
 * @author nghia.tnh
 * @param {array} array: Any array
 * @return {function} callback: Function callback, handle for each item.
 */
app.addFunction("each", function(array, callback) {
    return $.each(array, callback);
});

/**
 * This function allow define any properies in window.app.ajax
 *
 * @author nghia.tnh
 * @param {string} propName: Name of property
 * @param {any} propValue: Value of property (string, number, function,...)
 */
window.__define__(app.ajax, "define", function(propName, propValue) {
    window.__define__(app.ajax, propName, propValue);
});

/**
 * HTTP (Ajax) request method.
 *
 * @author nghia.tnh
 */
app.ajax.define("method", {
    POST: "POST",
    GET: "GET",
    PUT: "PUT"
});

/**
 * Perform an asynchronous HTTP (Ajax) request.
 *
 * @author nghia.tnh
 * @param {object} settings: Object setting info
 */
app.ajax.define("origin", function(settings) {
    // Init default setting info.
    var defaultSettings = {
        url: window.location.href,
        async: true,
        cache: false,
        data: {},
        dataType: "",
        global: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        timeout: 10 * 1000,
        // type: "POST",
        // contentType: "application/x-www-form-urlencoded",
        beforeSend: function(jqXHR, settings) {}
    };
    settings = settings ? $.extend(defaultSettings, settings) : defaultSettings;

    // Execute jqxhr request.
    return $.ajax(settings.url, settings)
        .always(function(jqXHR, textStatus) {
            // Ajax complete, an alternative construct to the complete callback option
            if (app.isFunction(settings.always)) {
                settings.always(jqXHR, textStatus);
            }
        })
        .done(function(data, textStatus, jqXHR) {
            // Ajax success, an alternative construct to the success callback option
            if (app.isFunction(settings.done)) {
                settings.done(data, textStatus, jqXHR);
            }
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            // Ajax error, an alternative construct to the error callback option
            if (app.isFunction(settings.fail)) {
                settings.fail(jqXHR, textStatus, errorThrown);
            }
        });
});

/**
 * Perform an synchronous HTTP (Ajax) request GET.
 *
 * @author nghia.tnh
 * @param {object} settings: Object setting info
 */
app.ajax.define("get", function(settings) {
    settings = settings ? settings : {};
    settings.method = app.ajax.method.GET;
    settings.async = false;
    return app.ajax.origin(settings);
});

/**
 * Perform an asynchronous HTTP (Ajax) request GET.
 *
 * @author nghia.tnh
 * @param {object} settings: Object setting info
 */
app.ajax.define("getAsync", function(settings) {
    settings = settings ? settings : {};
    settings.method = app.ajax.method.GET;
    settings.async = true;
    return app.ajax.origin(settings);
});

/**
 * Perform an synchronous HTTP (Ajax) request POST.
 *
 * @author nghia.tnh
 * @param {object} settings: Object setting info
 */
app.ajax.define("post", function(settings) {
    settings = settings ? settings : {};
    settings.method = app.ajax.method.POST;
    settings.async = false;
    return app.ajax.origin(settings);
});

/**
 * Perform an asynchronous HTTP (Ajax) request POST.
 *
 * @author nghia.tnh
 * @param {object} settings: Object setting info
 */
app.ajax.define("postAsync", function(settings) {
    settings = settings ? settings : {};
    settings.method = app.ajax.method.POST;
    settings.async = true;
    return app.ajax.origin(settings);
});

/**
 * Get message i18n.
 *
 * @author nghia.tnh
 * @param {string} key: Key of message resource
 * @param {object} params: Object parameter
 * @param {boolean} lowerCase: Auto lowercase result message
 */
app.addFunction("message", function(key, params, lowerCase) {
    var message = app.languages[app.lang][key];
    if (app.isEmpty(message)) {
        return key;
    }
    // Format message.
    if (app.isNotNull(params)) {
        var regExp;
        app.each(params, function(paramKey, paramValue) {
            regExp = new RegExp("\\{" + paramKey + "\\}", "gm");
            message = message.replace(regExp, paramValue);
        });
    }
    if (lowerCase === true) {
        return message.toLowerCase();
    }
    return message;
});

/******************************************************************************
 * Handler for onsenui framework                                              *
 ******************************************************************************/

// Init android view for browser.
// ons.platform.select("android");
// ons.platform.select("ios");

/**
 * Handle progress dialog for this application.
 *
 * @author nghia.tnh
 */
app.define("progressDialog", {});
window.__define__(app.progressDialog, "show", function() {
    var progressDialog = $("#appProgressDialog");
    $(".message", progressDialog).text(app.message("common.progressing"));
    progressDialog.show();
});
window.__define__(app.progressDialog, "hide", function() {
    $("#appProgressDialog").hide();
});

/**
 * Handle alert dialog for this application.
 *
 * @author nghia.tnh
 */
app.define("alertDialog", {});
window.__define__(app.alertDialog, "show", function(options) {
    options = options || {};
    if (app.isEmpty(options.title)) {
        options.title = app.message("common.alert");
    }
    if (app.isEmpty(options.btnClose)) {
        options.btnClose = app.message("common.close");
    }
    var alertDialog = $("#appAlertDialog");
    $(".alert-dialog-title", alertDialog).text(options.title);
    $(".alert-dialog-content", alertDialog).text(options.content);
    $(".alert-dialog-button", alertDialog).text(options.btnClose);
    alertDialog.show();
});
window.__define__(app.alertDialog, "hide", function() {
    $("#appAlertDialog").hide();
});

/**
 * Get page info via appNavigator.
 *
 * @author nghia.tnh
 */
app.define("getPageInfo", function($scope) {
    var page = $scope.appNavigator.topPage;
    var controllerName = $(page).attr("ng-controller");
    return {
        id: page.id,
        target: page,
        data: page.data,
        tag: controllerName,
        controllerName: controllerName
    };
});

/**
 * init: event is fired after <ons-page> is attached to DOM.
 *       Use this event to initialize the code or dynamic content of a page when it is created (before it is shown).
 * destroy: event is fired before <ons-page> is destroyed and prior to DOM detachment.
 *       Use this event to clean up or save anything you need.
 * show: event is fired every time <ons-page> comes into view, i.e. when a new page is created and shown immediately or when an existing page shows up.
 *       Use this event to run code every time a page appears.
 * hide:  event is fired every time <ons-page> disappears from view, i.e. when a visible page is destroyed or is hidden but still exists in the page stack.
 *       Use this event to run code every time a page disappears.
 */
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady()
{
    
}

document.addEventListener(
    "init",
    function(event) {
        var pageId = event.target.id;
        app.console.log("Page: %s initialized.", pageId, event.target.data);
        // alert(1);
        // app.delegate = 'ok';
    },
    false
);
document.addEventListener(
    "show",
    function(event) {
        var pageId = event.target.id;
        app.console.log("Page: %s show.", pageId);
    },
    false
);
document.addEventListener(
    "hide",
    function(event) {
        var pageId = event.target.id;
        app.console.log("Page: %s hide.", pageId);
    },
    false
);
document.addEventListener(
    "destroy",
    function(event) {
        var pageId = event.target.id;
        app.console.log("Page: %s destroyed.", pageId);
    },
    false
);

/**
 * Init onsenui-angularjs for this app
 *
 * @author nghia.tnh
 */
app.define("module", angular.module("TabenaraHandi", ["onsen"]));
app.module.directive('test', function() {
    return {
        delegate: 'EA'
    }
});