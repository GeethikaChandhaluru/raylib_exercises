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
const particleWidth = 120;
const particleHeight = windowHeight;
const speed = 2;
let scannerRange1 = scannerWidth;
let scannerRange2 = -1;
let color = r.WHITE;

function overlap() {
    // if (scannerRange1 - scannerWidth > x1 + particleWidth)
    //     return (color = r.WHITE);
    // if (x1 < scannerRange1) return (color = r.RED);
    if (scannerRange1 < x1) return (color = r.WHITE);
    if (scannerRange1 - scannerWidth < x1 + particleWidth)
        return (color = r.RED);
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Scanner");
    r.SetTargetFPS(FPS);
    // r.SetTraceLogLevel(r.LOG_NONE);
}

function update() {
    if (scannerRange1 < windowWidth) {
        x2 = x2 + speed;
        scannerRange1 = scannerRange1 + speed;
    }
    if (scannerRange1 === windowWidth) {
        scannerRange1 = windowWidth + 1;
        scannerRange2 = windowWidth - scannerWidth;
    }
    if (0 < scannerRange2) {
        x2 = x2 - speed;
        scannerRange2 = scannerRange2 - speed;
    }
    if (scannerRange2 === 0) {
        scannerRange1 = scannerWidth;
        scannerRange2 = -1;
    }
    overlap();
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(x1, y1, particleWidth, particleHeight, r.BLUE);
    r.DrawRectangle(x2, y2, scannerWidth, scannerHeight, color);

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
