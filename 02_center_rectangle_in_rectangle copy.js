const windowWidth = 900;
const windowHeight = 400;
const width1 = 600;
const height1 = 300;
const width2 = 400;
const height2 = 200;

function centerRectangle1(windowDimension, rectangle1Dimension) {
    return (windowDimension - rectangle1Dimension) / 2;
}
function centerRectangle2(windowDimension, rectangle2Dimension, rectangle1Dimension) {
    return ((windowDimension - rectangle2Dimension) / 2) + rectangle1Dimension;
}

const r = require("raylib");
r.InitWindow(windowWidth, windowHeight, "Center a Rectangle Inside Another Rectangle");
r.SetTargetFPS(60);
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    const x1 = centerRectangle1(windowWidth, width1)
    const y1 = centerRectangle1(windowHeight, height1)
    const x2 = centerRectangle2(width1, width2, x1)
    const y2 = centerRectangle2(height1, height2, y1)
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x1, y1, width1, height1, r.WHITE);
    r.DrawRectangle(x2, y2, width2, height2, r.RED);
    r.EndDrawing();
}
r.CloseWindow();