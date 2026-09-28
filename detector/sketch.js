const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;
const FPS = 60;

let detectorStart = 0;
let detectorEnd;
const detectorWidth = 30;

let velocity = 3;

const particleStart = 200;
const particle1Y = 0;
const particle1Width = 100;
const particle1Height = windowHeight;
let particle1End = particleStart + particle1Width;

let color = r.WHITE;
function drawRange() {
    r.DrawRectangle(detectorStart, 0, detectorWidth, windowHeight, color);
}

function changeDetectorEnd(start, width) {
    return start + width;
}

function changeDetectorStart(start) {
    return (start += velocity);
}
function outOfRange(start, end, range1, range2) {
    return end >= range1 || start <= range2;
}

function detectsParticle(start, end, range1, range2) {
    return end >= range1 && start <= range2;
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
    detectorStart = changeDetectorStart(detectorStart);
    detectorEnd = changeDetectorEnd(detectorStart, detectorWidth);
    velocity = outOfRange(detectorStart, detectorEnd, windowWidth, 0)
        ? -velocity
        : velocity;

    color = detectsParticle(
        detectorStart,
        detectorEnd,
        particleStart,
        particle1End,
    )
        ? r.RED
        : r.WHITE;
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(
        particleStart,
        particle1Y,
        particle1Width,
        particle1Height,
        r.DARKBLUE,
    );
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
