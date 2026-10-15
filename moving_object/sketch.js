const r = require("raylib");

const speed = 2;
const windowWidth = 600;
const windowHeight = 400;
const width = 100;
const height = 80;
let x = 0;
let y = 0;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "Moving Object");
    r.SetTargetFPS(60);
}

function update() {
    if (y === 0) x = x + speed;
    if (x + width === windowWidth) y = y + speed;
    if (y + height === windowHeight) x = x - speed;
    if (x === 0) y = y - speed;
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.WHITE);
    r.DrawRectangle(x, y, width, height, r.BLACK);

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
