const r = require("raylib");

const x = 0;
const y = 0;

const windowWidth = 600;
const windowHeight = 400;
const FPS = 60;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Scanner");
    r.SetTargetFPS(FPS);
}

function update() {
    // change the state
}
const width = 40;
const height = windowHeight;
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