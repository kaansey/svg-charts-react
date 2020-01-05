/* eslint-disable */
import React, { useState, useCallback } from 'react';
import ReactTooltip from 'react-tooltip';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var COLORS = {
    BLUE: '#4d8af0',
    RED: '#cc3333',
    GREEN: '#2e8f59',
    YELLOW: '#a3a328',
};
//# sourceMappingURL=colors.js.map

var DECIMALS = 4;
var PERCENTAGE_VALUE = 15.91549430919;
//# sourceMappingURL=index.js.map

var transformPiesData = function (data, expandOnHover, hoveredIndex) {
    var filteredData = data
        .filter(function (d) { return d.value > 0; })
        .sort(function (a, b) { return b.value - a.value; });
    var total = data.reduce(function (prev, current) { return current.value + prev; }, 0);
    if (filteredData.length) {
        return expandOnHover
            ? filteredData.map(function (item, index) {
                var percentage = (Number((((item.value / total) * 360 * Math.PI) / 180).toFixed(DECIMALS)) * PERCENTAGE_VALUE).toFixed(2);
                return __assign(__assign({}, item), { hovered: index === hoveredIndex, percentage: percentage });
            })
            : filteredData;
    }
    return filteredData;
};
var getPath = function (_a) {
    var total = _a.total, radius = _a.radius, value = _a.value, center = _a.center;
    var radians = Number((((value / total) * 360 * Math.PI) / 180).toFixed(DECIMALS));
    var x = (center + Math.sin(radians) * radius).toFixed(DECIMALS);
    var y = (center - Math.cos(radians) * radius).toFixed(DECIMALS);
    var la = radians > Math.PI ? 1 : 0;
    var path = "\n          M" + center + " " + center + ",\n          L" + center + " " + (center - radius) + ",\n          A" + radius + " " + radius + ",\n          0 " + la + " 1,\n          " + x + " " + y + "Z";
    return path;
};
var colorToHex = function (color) {
    color = color.toUpperCase();
    return color in COLORS ? COLORS[color] : COLORS.BLUE;
};
var lightenColor = function (color, percent) {
    var num = parseInt(color.replace('#', ''), 16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, B = ((num >> 8) & 0x00ff) + amt, G = (num & 0x0000ff) + amt;
    return ('#' +
        (0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
            (G < 255 ? (G < 1 ? 0 : G) : 255))
            .toString(16)
            .slice(1));
};
var assignPiesColor = function (data, _a) {
    var color = _a.color, _b = _a.diffPercentage, diffPercentage = _b === void 0 ? 3 : _b;
    var colorTone = color.startsWith('#') ? color : colorToHex(color);
    var firstPie = data[0];
    if (!firstPie.color) {
        firstPie.color = colorTone;
        colorTone = lightenColor(colorTone, diffPercentage);
    }
    for (var i = 1; i < data.length; i++) {
        if (!data[i].color) {
            data[i].color = colorTone;
            colorTone = lightenColor(colorTone, diffPercentage);
        }
    }
    return data;
};
//# sourceMappingURL=utils.js.map

var offset = 0;
var Pies = function (_a) {
    var center = _a.center, data = _a.data, onHover = _a.onHover, expandSize = _a.expandSize, strokeWidth = _a.strokeWidth, strokeColor = _a.strokeColor, strokeLinejoin = _a.strokeLinejoin, transitionTimingFunction = _a.transitionTimingFunction, transitionDuration = _a.transitionDuration;
    var total = data.reduce(function (prev, current) { return current.value + prev; }, 0);
    var handleOnHover = function (d, index) { return function (e) {
        onHover(d, index, e);
    }; };
    if (total < 1) {
        return null;
    }
    return data.map(function (d, index) {
        var radius = center + (d.hovered ? expandSize : 0) - strokeWidth / 2;
        var path = getPath({
            total: total,
            radius: radius,
            value: d.value,
            center: center,
        });
        var currentOffset = ((offset / total) * 360).toFixed(DECIMALS);
        offset += d.value;
        var isSinglePie = data.length === 1;
        return (React.createElement("g", { key: 'pie' + index, transform: "rotate(" + currentOffset + ", " + center + ", " + center + ")" }, isSinglePie ? ( // single pie
        React.createElement("circle", { cx: center, cy: center, r: radius, fill: d.color })) : (React.createElement("path", { d: path, fill: d.color, stroke: strokeColor, strokeWidth: strokeWidth, strokeLinejoin: strokeLinejoin, onMouseEnter: handleOnHover(d, index), onMouseLeave: handleOnHover(null, null), onTouchStart: handleOnHover(d, index), onTouchEnd: handleOnHover(null, null), style: {
                transitionProperty: 'all',
                transitionTimingFunction: transitionTimingFunction,
                transitionDuration: transitionDuration,
            } }))));
    });
};
var Pies$1 = React.memo(Pies);

var tooltipTemplate = function (props) {
    return (React.createElement("div", null,
        props.data.title,
        ": ",
        React.createElement("b", null,
            props.data.percentage,
            "%")));
};
var TooltipTemplate = React.memo(tooltipTemplate);
//# sourceMappingURL=TooltipTemplate.js.map

var PieChart = function (props) {
    var data = props.data, viewBoxSize = props.viewBoxSize;
    var _a = useState(), hoveredIndex = _a[0], setHoveredIndex = _a[1];
    var center = props.viewBoxSize / 2;
    var offset = props.expandOnHover ? props.expandSize : 0;
    var piesData = transformPiesData(data, props.expandOnHover, hoveredIndex);
    if (props.colorTone) {
        piesData = assignPiesColor(piesData, props.colorTone);
    }
    var hanldePieHover = function (piesData, index, e) {
        if (props.expandOnHover) {
            setHoveredIndex(index);
        }
        if (props.onPieHover) {
            props.onPieHover(piesData, index, e);
        }
    };
    var getTooltipContent = useCallback(function () {
        if (props.showTooltip && piesData[hoveredIndex]) {
            var pieDetail = piesData[hoveredIndex];
            var CustomTooltipTemplate = props.CustomTooltipTemplate;
            return React.createElement(CustomTooltipTemplate, { data: pieDetail });
        }
        return null;
    }, [hoveredIndex]);
    return piesData && piesData.length > 0 ? (React.createElement(React.Fragment, null,
        React.createElement("svg", { "data-tip": "", "data-for": "tooltip", viewBox: "0 0 " + (viewBoxSize + offset * 2) + " " + (viewBoxSize + offset * 2) },
            React.createElement("g", { transform: "translate(" + offset + ", " + offset + ")" },
                React.createElement(Pies$1, { center: center, data: piesData, onHover: hanldePieHover, expandSize: props.expandSize, strokeColor: props.strokeColor, strokeLinejoin: props.strokeLinejoin, strokeWidth: props.strokeWidth, transitionDuration: props.transitionDuration, transitionTimingFunction: props.transitionTimingFunction }))),
        React.createElement(ReactTooltip, { id: "tooltip", getContent: getTooltipContent }))) : null;
};
PieChart.defaultProps = {
    viewBoxSize: 100,
    expandOnHover: true,
    expandSize: 3,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onPieHover: function () { },
    shrinkOnTouchEnd: false,
    strokeColor: '#fff',
    strokeLinejoin: 'round',
    strokeWidth: 0,
    transitionDuration: '0s',
    transitionTimingFunction: 'ease-out',
    showTooltip: true,
    CustomTooltipTemplate: TooltipTemplate,
};
var PieChart$1 = React.memo(PieChart);

export { PieChart$1 as PieChart };
