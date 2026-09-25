const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;
const FPS = 60;

let x = 0;
let y = 0;
const width = 40;
const height = windowHeight;
const speed = 2;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Scanner");
    r.SetTargetFPS(FPS);
}

function update() {
    if (x + width < windowWidth)
        x = x + speed;
}
function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK)
    r.DrawRectangle(x, y, width, height, r.WHITE)

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