'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Common = void 0;
var Common = (function () {
  function Common() {}
  Common.prototype.aggregate = function (parsedData, aggregateBy) {
    var _this = this;
    if (aggregateBy) {
      var result_1 = [];
      if (aggregateBy === 'sourceAndDay') {
        var distinctSources_1 = new Set();
        parsedData.forEach(function (item) {
          return distinctSources_1.add(item.source);
        });
        distinctSources_1.forEach(function (source) {
          return _this.aggregateData(
            parsedData.filter(function (item) {
              return item.source === source;
            }),
            aggregateBy,
            result_1
          );
        });
      } else {
        this.aggregateData(parsedData, aggregateBy, result_1);
      }
      return result_1;
    } else {
      return parsedData;
    }
  };
  Common.prototype.aggregateData = function (parsedData, aggregateBy, result) {
    var _this = this;
    parsedData.forEach(function (item, i) {
      var previousItem = i === 0 ? null : parsedData[i - 1];
      if (previousItem === null || !_this.isSameAggregationInterval(item, previousItem, aggregateBy)) {
        result.push({
          source: item.source,
          start: item.start,
          end: item.end,
          value: item.value,
        });
      } else {
        result[result.length - 1].value += item.value;
        result[result.length - 1].end = item.end;
      }
    });
  };
  Common.prototype.isSameAggregationInterval = function (item, previousItem, aggregateBy) {
    var isSameDay = item.start.toDateString() === previousItem.start.toDateString();
    if (aggregateBy === 'hour') {
      return isSameDay && item.start.getHours() === previousItem.start.getHours();
    } else if (aggregateBy === 'day' || 'sourceAndDay') {
      return isSameDay;
    } else {
      return false;
    }
  };
  return Common;
})();
exports.Common = Common;
