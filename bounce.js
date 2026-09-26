const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;
const width = 100;
const height = 80;
let x = 0;
let y = 0;
let range = width
let range2 = -1

r.InitWindow(windowWidth, windowHeight, "Bounce");
r.SetTargetFPS(80);


while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(x, y, width, height, r.WHITE);
    if (range < windowWidth) {
        x = x + 2
        range = range + 2
    }
    if (range === windowWidth) {
        range = windowWidth + 1
        range2 = windowWidth - width
    }
    if (0 < range2) {
        x = x - 2
        range2 = range2 - 2
    }
    if (range2 === 0) {
        range = width
        range2 = -1
    }
    r.EndDrawing();
}

r.CloseWindow();
