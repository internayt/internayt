/*!
 * Font Awesome Pro 5.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
(function () {
    'use strict';

    var _WINDOW = {};
    try {
        if (typeof window !== 'undefined') _WINDOW = window;
    } catch (e) { }

    var _ref = _WINDOW.navigator || {};
    var _ref$userAgent = _ref.userAgent;
    var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

    var WINDOW = _WINDOW;

    var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

    var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';

    var PRODUCTION = function () {
        try {
            return "production" === 'production';
        } catch (e) {
            return false;
        }
    }();

    var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

    var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
        return n + 'x';
    })).concat(oneToTwenty.map(function (n) {
        return 'w-' + n;
    }));

    function bunker(fn) {
        try {
            fn();
        } catch (e) {
            if (!PRODUCTION) {
                throw e;
            }
        }
    }

    var w = WINDOW || {};

    if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
    if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
    if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
    if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

    var namespace = w[NAMESPACE_IDENTIFIER];

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function define(prefix, icons) {
        var normalized = Object.keys(icons).reduce(function (acc, iconName) {
            var icon = icons[iconName];
            var expanded = !!icon.icon;

            if (expanded) {
                acc[icon.iconName] = icon.icon;
            } else {
                acc[iconName] = icon;
            }
            return acc;
        }, {});

        if (typeof namespace.hooks.addPack === 'function') {
            namespace.hooks.addPack(prefix, normalized);
        } else {
            namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
        }

        /**
         * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
         * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
         * for `fas` so we'll easy the upgrade process for our users by automatically defining
         * this as well.
         */
        if (prefix === 'fas') {
            define('fa', icons);
        }
    }

    var icons = {
        "envelope": [512, 512, [], "f0e0", "M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"],
        "facebook": [448, 512, [], "f09a", "M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"],
        "linkedin": [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"],
    };

    bunker(function () {
        define('fal', icons);
    });
}());