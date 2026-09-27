const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;
const FPS = 60;

const x1 = 180;
const y1 = 0;
let x2 = 0;
let y2 = 0;
const scannerWidth = 40;
const scannerHeight = windowHeight;
const particleWidth = 100;
const particleHeight = windowHeight;
const speed = 2;
let range1 = scannerWidth;
let range2 = -1;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Scanner");
    r.SetTargetFPS(FPS);
    // r.SetTraceLogLevel(r.LOG_NONE);
}

function update() {
    if (range1 < windowWidth) {
        x2 = x2 + speed;
        range1 = range1 + speed;
    }
    if (range1 === windowWidth) {
        range1 = windowWidth + speed;
        range2 = windowWidth - scannerWidth;
    }
    if (0 < range2) {
        x2 = x2 - speed;
        range2 = range2 - speed;
    }
    if (range2 === 0) {
        range1 = scannerWidth;
        range2 = -1;
    }
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(x1, y1, particleWidth, particleHeight, r.BLUE);
    r.DrawRectangle(x2, y2, scannerWidth, scannerHeight, r.WHITE);

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
