const r = require("raylib");
const p1 = require("./particle1");
const p2 = require("./particle2");
const p3 = require("./particle3");
const d = require("./detectors");

const windowWidth = 600;
const windowHeight = 400;
const FPS = 60;

let detectorStart = 0;
let detectorEnd;
const detectorWidth = 30;

let detector2_Start = windowWidth / 2;
let detector2_End;
const detector2_Width = 30;

let detector3_Start = 0;
let detector3_End;
const detector3_Height = 30;

let velocity = 4;
let velocity2 = 3;
let velocity3 = 2;

let color1 = r.WHITE;
let color2 = r.WHITE;
let color3 = r.WHITE;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "");
    r.SetTargetFPS(FPS);
}

function update() {
    detectorStart = d.changeStart(detectorStart, velocity);
    detectorEnd = d.changeHorizontalEnd(detectorStart, detectorWidth);
    velocity = d.changeDirection(
        detectorStart,
        detectorEnd,
        windowWidth / 2,
        0,
        velocity,
    );

    detector2_Start = d.changeStart(detector2_Start, velocity2);
    detector2_End = d.changeHorizontalEnd(detector2_Start, detector2_Width);
    velocity2 = d.changeDirection(
        detector2_Start,
        detector2_End,
        windowWidth,
        windowWidth / 2,
        velocity2,
    );

    detector3_Start = d.changeStart(detector3_Start, velocity3);
    detector3_End = d.changeVerticalEnd(detector3_Start, detector3_Height);
    velocity3 = d.changeDirection(
        detector3_Start,
        detector3_End,
        windowHeight,
        0,
        velocity3,
    );

    color1 = d.changeColor(
        detectorStart,
        detectorEnd,
        p1.start,
        p1.end,
        p2.start,
        p2.end,
    );

    color2 = d.changeColor(
        detector2_Start,
        detector2_End,
        p1.start,
        p1.end,
        p2.start,
        p2.end,
    );

    color3 = d.changeColorHorizontal(
        detector3_Start,
        detector3_End,
        p3.y,
        p3.end,
    );
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(p1.start, p1.y, p1.width, p1.height, r.DARKBLUE);
    r.DrawRectangle(p2.start, p2.y, p2.width, p2.height, r.DARKBLUE);
    r.DrawRectangle(p3.x, p3.y, p3.width, p3.height, r.DARKBLUE);
    r.DrawRectangle(detectorStart, 0, detectorWidth, windowHeight, color1);
    r.DrawRectangle(detector2_Start, 0, detector2_Width, windowHeight, color2);
    r.DrawRectangle(0, detector3_Start, windowWidth, detector3_Height, color3);

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
