const r = require("raylib");

const windowWidth = 100;
const windowHeight = 400;
const FPS = 60;

let detectorStart = 0;

const range = windowWidth;
const detectorWidth = 10;
let detectorEnd;

let velocity = 3;

function drawRange() {
    r.DrawRectangle(detectorStart, 0, detectorWidth, windowHeight, r.WHITE);
}

function changeDetectorEnd(start, width) {
    return start + width;
}

function changeDetectorStart(start) {
    return (start += velocity);
}
function outOfRange(start, end) {
    if (end >= range || start <= 0) {
        velocity = -velocity;
    }
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "");
    r.SetTargetFPS(FPS);
    r.SetTraceLogLevel(r.LOG_NONE);
}

function update() {
    detectorStart = changeDetectorStart(detectorStart);
    detectorEnd = changeDetectorEnd(detectorStart, detectorWidth);
    outOfRange(detectorStart, detectorEnd);
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    drawRange();

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
