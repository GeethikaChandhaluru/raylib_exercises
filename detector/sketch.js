const r = require("raylib");
const p1 = require("./particle1");
const p2 = require("./particle2");

const windowWidth = 600;
const windowHeight = 400;
const FPS = 60;

let detectorStart = 0;
let detectorEnd;
const detectorWidth = 30;

let detector2_Start = windowWidth / 2;
let detector2_End;
const detector2_Width = 30;

let velocity = 4;
let velocity2 = 3;

let color1 = r.WHITE;
let color2 = r.WHITE;

function changeDetectorEnd(start, width) {
    return start + width;
}

function changeDetectorStart(start, velocity) {
    return (start += velocity);
}

function detectsParticle(start, end, range1, range2, range3, range4) {
    return (
        (end >= range1 && start <= range2) || (end >= range3 && start <= range4)
    );
}

function outOfRange(start, end, range1, range2) {
    return end >= range1 || start <= range2;
}

function changeDirection(start, end, width, constant, velocity) {
    return outOfRange(start, end, width, constant) ? -velocity : velocity;
}

function changeColor(start, end, range1, range2, range3, range4) {
    return detectsParticle(start, end, range1, range2, range3, range4)
        ? r.RED
        : r.WHITE;
}
function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "");
    r.SetTargetFPS(FPS);
}

function update() {
    detectorStart = changeDetectorStart(detectorStart, velocity);
    detectorEnd = changeDetectorEnd(detectorStart, detectorWidth);
    velocity = changeDirection(
        detectorStart,
        detectorEnd,
        windowWidth / 2,
        0,
        velocity,
    );

    detector2_Start = changeDetectorStart(detector2_Start, velocity2);
    detector2_End = changeDetectorEnd(detector2_Start, detector2_Width);
    velocity2 = changeDirection(
        detector2_Start,
        detector2_End,
        windowWidth,
        windowWidth / 2,
        velocity2,
    );

    color1 = changeColor(
        detectorStart,
        detectorEnd,
        p1.start,
        p1.end,
        p2.start,
        p2.end,
    );

    color2 = changeColor(
        detector2_Start,
        detector2_End,
        p1.start,
        p1.end,
        p2.start,
        p2.end,
    );
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(p1.start, p1.y, p1.width, p1.height, r.DARKBLUE);
    r.DrawRectangle(p2.start, p2.y, p2.width, p2.height, r.DARKBLUE);
    r.DrawRectangle(detectorStart, 0, detectorWidth, windowHeight, color1);
    r.DrawRectangle(detector2_Start, 0, detector2_Width, windowHeight, color2);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
