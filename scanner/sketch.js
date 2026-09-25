const r = require("raylib");


const windowWidth = 600;
const windowHeight = 400;
const FPS = 60;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "");
    r.SetTargetFPS(FPS);
}

function update() {
    // change the state
}

function draw() {
    r.BeginDrawing();

    // draw the current state

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