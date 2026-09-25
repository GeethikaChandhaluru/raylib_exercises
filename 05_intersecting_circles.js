const r = require("raylib");

const radius1 = 50;
const radius2 = 60;
const x1 = 100;
const y1 = 50;
const x2 = 200;
const y2 = 60;

function square(number) {
    return number ** 2
}
function distanceBetweenCircles() {
    return (square(x2 - x1) + square(y2 - y1)) ** 0.5;
}
function drawRed() {
    r.DrawCircle(x1, y1, radius1, r.RED);
    r.DrawCircle(x2, y2, radius2, r.RED);
}
function drawBlack() {
    r.DrawCircle(x1, y1, radius1, r.BLACK);
    r.DrawCircle(x2, y2, radius2, r.BLACK);
}

function setup() {
    r.InitWindow(700, 600, "Intersecting Circles");
    r.SetTargetFPS(60);
}
function draw() {
    r.BeginDrawing;
    r.ClearBackground(r.WHITE);
    distanceBetweenCircles() >= (radius1 + radius2) ? drawBlack() : drawRed();
    r.EndDrawing();
}
function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}
function main() {
    setup();
    loop();
    r.CloseWindow();
}
main();
