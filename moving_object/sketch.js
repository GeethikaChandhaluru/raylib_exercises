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
    r.InitWindow(windowWidth, windowHeight, "Moving Object");
    r.SetTargetFPS(60);
}

function update() {
    if (y === 0) {
        x = x + speed;
        color = r.BLACK;
    }
    if (x + width === windowWidth) {
        y = y + speed;
        color = r.BLUE;
    }
    if (y + height === windowHeight) {
        x = x - speed;
        color = r.GREEN;
    }
    if (x === 0) {
        y = y - speed;
        color = r.PINK;
    }
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.WHITE);
    r.DrawRectangle(x, y, width, height, color);

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