function sumIntervals(intervals) {
    //TODO
    let sum = 0;
    intervals.sort(
        (left, right) => left[0] == right[0] ? 0 :
            left[0] < right[0] ? -1 : 1);
    let second = intervals[0][0];;
    for (let i = 0; i < intervals.length; i++) {
        if (second < intervals[i][0]) {
            second = intervals[i][0];
            if (intervals[i][1] < intervals[i - 1][1]) {
                continue;
            }
        }
        sum += intervals[i][1] - second;
        second = intervals[i][1];
    }
    return sum;
}

console.log(sumIntervals([[1, 4], [77, 100], [30, 500]]))