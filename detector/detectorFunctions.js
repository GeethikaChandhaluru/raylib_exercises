const r = require("raylib");

function createHorizontalParticle(x, y, width, height) {
    return { x, y, width, height, end: x + width };
}

function createHorizontalDetector(
    start,
    y,
    width,
    height,
    velocity,
    color,
    endRange,
    startRange,
) {
    return {
        start,
        end: start + width,
        y,
        width,
        height,
        velocity,
        color,
        endRange,
        startRange,
    };
}

function createVerticalParticle(x, y, width, height) {
    return { x, y, width, height, end: y + height };
}

function createVerticalDetector(
    start,
    y,
    width,
    height,
    velocity,
    color,
    endRange,
    startRange,
) {
    return {
        start,
        end: start + height,
        y,
        width,
        height,
        velocity,
        color,
        endRange,
        startRange,
    };
}

function drawParticle(p) {
    r.DrawRectangle(p.x, p.y, p.width, p.height, r.DARKBLUE);
}

function drawHorizontalDetector(d) {
    r.DrawRectangle(d.start, d.y, d.width, d.height, d.color);
}

function drawVerticalDetector(d) {
    r.DrawRectangle(d.y, d.start, d.width, d.height, d.color);
}

function calculateValue(x, y) {
    return x + y;
}

function updateHorizontalDetector(d, p1, p2) {
    d.start = calculateValue(d.start, d.velocity);
    d.end = calculateValue(d.start, d.width);
    d.velocity = changeDirection(
        d.start,
        d.end,
        d.endRange,
        d.startRange,
        d.velocity,
    );
    d.color = changeColorHorizontal(d, p1, p2);
}

function updateVerticalDetector(d, p) {
    d.start = calculateValue(d.start, d.velocity);
    d.end = calculateValue(d.start, d.height);
    d.velocity = changeDirection(
        d.start,
        d.end,
        d.endRange,
        d.startRange,
        d.velocity,
    );
    d.color = changeColorVertical(d, p);
}

function outOfRange(start, end, window_start, window_end) {
    return end >= window_start || start <= window_end;
}

function changeDirection(start, end, width, constant, velocity) {
    return outOfRange(start, end, width, constant) ? -velocity : velocity;
}

function detectsHorizontalParticle(d, p1, p2) {
    return (
        (d.end >= p1.x && d.start <= p1.end) ||
        (d.end >= p2.x && d.start <= p2.end)
    );
}

function changeColorHorizontal(d, p1, p2) {
    return detectsHorizontalParticle(d, p1, p2) ? r.RED : r.WHITE;
}

function detectsVerticalParticle(d, p3) {
    return d.end >= p3.y && d.start <= p3.end;
}

function changeColorVertical(d, p3) {
    return detectsVerticalParticle(d, p3) ? r.RED : r.WHITE;
}

module.exports = {
    createVerticalDetector,
    createHorizontalDetector,
    createHorizontalParticle,
    createVerticalParticle,
    updateHorizontalDetector,
    updateVerticalDetector,
    drawParticle,
    drawHorizontalDetector,
    drawVerticalDetector,
};
