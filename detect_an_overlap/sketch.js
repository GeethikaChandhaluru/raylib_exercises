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
let direction = 1;
let color = r.WHITE;

function overlap() {
    //code here
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
    x2 = x2 + speed * direction;

    if (x2 + scannerWidth >= windowWidth) {
        x2 = windowWidth - scannerWidth;
        direction = -1;
    }

    if (x2 <= 0) {
        x2 = 0;
        direction = 1;
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
