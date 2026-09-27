function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}
function square(number) {
    return number ** 2
}
function distanceBetweenPoints(x1, y1, x2, y2) {
    return (square(x2 - x1) + square(y2 - y1)) ** 0.5;
}
module.exports = {
    calcOffset, square, distanceBetweenPoints
};