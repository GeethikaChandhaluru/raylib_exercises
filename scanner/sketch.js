const r = require("raylib");


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

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK)
    r.DrawRectangle(0, 0, 40, windowHeight, r.WHITE)

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