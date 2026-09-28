const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;
const FPS = 60;

let detectorStart = 0;
let detectorEnd;
const detectorWidth = 30;

let detector2_Start = 0;
let detector2_End;
const detector2_Width = 30;

let velocity = 4;
let velocity2 = 3;

const particle1Start = 200;
const particle1Y = 0;
const particle1Width = 100;
const particle1Height = windowHeight;
let particle1End = particle1Start + particle1Width;

const particle2Start = 400;
const particle2Y = 0;
const particle2Width = 30;
const particle2Height = windowHeight;
let particle2End = particle2Start + particle2Width;

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
        windowWidth,
        0,
        velocity,
    );

    detector2_Start = changeDetectorStart(detector2_Start, velocity2);
    detector2_End = changeDetectorEnd(detector2_Start, detector2_Width);
    velocity2 = changeDirection(
        detector2_Start,
        detector2_End,
        windowWidth,
        0,
        velocity2,
    );

    color1 = changeColor(
        detectorStart,
        detectorEnd,
        particle1Start,
        particle1End,
        particle2Start,
        particle2End,
    );

    color2 = changeColor(
        detector2_Start,
        detector2_End,
        particle1Start,
        particle1End,
        particle2Start,
        particle2End,
    );
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(
        particle1Start,
        particle1Y,
        particle1Width,
        particle1Height,
        r.DARKBLUE,
    );
    r.DrawRectangle(
        particle2Start,
        particle2Y,
        particle2Width,
        particle2Height,
        r.DARKBLUE,
    );
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
