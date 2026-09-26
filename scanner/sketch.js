const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;
const FPS = 60;

let x = 0;
let y = 0;
const width = 40;
const height = windowHeight;
const speed = 2;
let range1 = width;
let range2 = -1;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Scanner");
    r.SetTargetFPS(FPS);
}

function update() {
    if (range1 < windowWidth) {
        x = x + speed;
        range1 = range1 + speed;
    }
    if (range1 === windowWidth) {
        range1 = windowWidth + speed;
        range2 = windowWidth - width;
    }
    if (0 < range2) {
        x = x - speed;
        range2 = range2 - speed;
    }
    if (range2 === 0) {
        range1 = width;
        range2 = -1;
    }
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(x, y, width, height, r.WHITE);

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
