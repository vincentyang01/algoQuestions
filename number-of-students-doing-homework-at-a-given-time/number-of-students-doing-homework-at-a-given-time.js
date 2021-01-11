/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0
    startTime.forEach((s, i) => {
        if (s <= queryTime && endTime[i] >= queryTime) count += 1;
    });
​
    return count
};
