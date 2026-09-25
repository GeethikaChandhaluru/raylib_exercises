const r = require("raylib");

const windowWidth = 900;
const windowHeight = 400;
const width = 500;
const height = 200;

function centerRectangle(windowDimension, rectangleDimension) {
    return (windowDimension - rectangleDimension) / 2;
}
exports.centerRectangle = centerRectangle;
function setup() {
    r.InitWindow(windowWidth, windowHeight, "Center a Rectangle");
    r.SetTargetFPS(60);
}
function draw() {
    const x = centerRectangle(windowWidth, width);
    const y = centerRectangle(windowHeight, height);

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x, y, width, height, r.WHITE);
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
