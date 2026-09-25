const windowWidth = 900;
const windowHeight = 400;
const width = 500;
const height = 200;

function centerRectangle(windowDimension, rectangleDimension) {
    return (windowDimension - rectangleDimension) / 2;
}

const r = require("raylib");
r.InitWindow(windowWidth, windowHeight, "Center a Rectangle");
r.SetTargetFPS(60);
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    const x = centerRectangle(windowWidth, width)
    const y = centerRectangle(windowHeight, height)
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x, y, width, height, r.WHITE)
    r.EndDrawing()
}
r.CloseWindow();