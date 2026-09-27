const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;
const FPS = 60;

const x1 = 180;
const y1 = 0;
const x2 = 430;
const y2 = 0;
let x3 = 0;
let y3 = 0;
const scannerWidth = 40;
const scannerHeight = windowHeight;
const particleWidth = 120;
const particleHeight = windowHeight;
const particle2Width = 10;
const particle2Height = windowHeight;
const speed = 2;
let direction = 1;
let color = r.WHITE;

function overlap() {
    if (
        (x3 + scannerWidth > x1 && x3 < x1 + particleWidth) ||
        (x3 + scannerWidth > x2 && x3 < x2 + particle2Width)
    )
        color = r.RED;
    else color = r.WHITE;
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
    x3 = x3 + speed * direction;

    if (x3 + scannerWidth >= windowWidth) {
        x3 = windowWidth - scannerWidth;
        direction = -1;
    }

    if (x3 <= 0) {
        x3 = 0;
        direction = 1;
    }
    overlap();
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(x1, y1, particleWidth, particleHeight, r.BLUE);
    r.DrawRectangle(x2, y2, particle2Width, particle2Height, r.BLUE);
    r.DrawRectangle(x3, y3, scannerWidth, scannerHeight, color);

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
