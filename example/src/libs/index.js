/* eslint-disable */
import React, { useState } from 'react';

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

var transformPiesData = function (data, expandOnHover, hoveredIndex) {
    var filteredData = data.filter(function (d) { return d.value > 0; });
    if (filteredData.length) {
        return expandOnHover
            ? filteredData.map(function (item, index) { return (__assign(__assign({}, item), { hovered: index === hoveredIndex })); })
            : filteredData;
    }
    return filteredData;
};
var getPath = function (_a) {
    var total = _a.total, radius = _a.radius, value = _a.value, center = _a.center, decimals = _a.decimals;
    var radians = Number((((value / total) * 360 * Math.PI) / 180).toFixed(decimals));
    var x = (center + Math.sin(radians) * radius).toFixed(decimals);
    var y = (center - Math.cos(radians) * radius).toFixed(decimals);
    var la = radians > Math.PI ? 1 : 0;
    var path = "\n          M" + center + " " + center + ",\n          L" + center + " " + (center - radius) + ",\n          A" + radius + " " + radius + ",\n          0 " + la + " 1,\n          " + x + " " + y + "Z";
    return path;
};
//# sourceMappingURL=utils.js.map

var decimals = 4;
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
            decimals: decimals,
        });
        var currentOffset = ((offset / total) * 360).toFixed(decimals);
        offset += d.value;
        var isSinglePie = data.length === 1;
        return (React.createElement("g", { key: 'pie' + index, transform: "rotate(" + currentOffset + ", " + center + ", " + center + ")" }, isSinglePie ? ( // single pie
        React.createElement("circle", { cx: center, cy: center, r: radius, fill: d.color })) : (React.createElement("path", { d: path, fill: d.color, stroke: strokeColor, strokeWidth: strokeWidth, strokeLinejoin: strokeLinejoin, onMouseEnter: handleOnHover(d, index), onMouseLeave: handleOnHover(null, null), onTouchStart: handleOnHover(d, index), onTouchEnd: handleOnHover(null, null), style: {
                transitionProperty: 'all',
                transitionTimingFunction: transitionTimingFunction,
                transitionDuration: transitionDuration,
            } }, d.title && React.createElement("title", null, d.title)))));
    });
};

var PieChart = function (props) {
    var data = props.data, viewBoxSize = props.viewBoxSize;
    var _a = useState(), hoveredIndex = _a[0], setHoveredIndex = _a[1];
    var hanldePieHover = function (data, index, e) {
        if (props.expandOnHover) {
            setHoveredIndex(index);
        }
        if (props.onPieHover) {
            props.onPieHover(data, index, e);
        }
    };
    var center = props.viewBoxSize / 2;
    var offset = props.expandOnHover ? props.expandSize : 0;
    var piesData = transformPiesData(data, props.expandOnHover, hoveredIndex);
    return piesData && piesData.length > 0 ? (React.createElement("svg", { viewBox: "0 0 " + (viewBoxSize + offset * 2) + " " + (viewBoxSize + offset * 2) },
        React.createElement("g", { transform: "translate(" + offset + ", " + offset + ")" },
            React.createElement(Pies, { center: center, data: piesData, onHover: hanldePieHover, expandSize: props.expandSize, strokeColor: props.strokeColor, strokeLinejoin: props.strokeLinejoin, strokeWidth: props.strokeWidth, transitionDuration: props.transitionDuration, transitionTimingFunction: props.transitionTimingFunction })))) : null;
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
};

export { PieChart };
