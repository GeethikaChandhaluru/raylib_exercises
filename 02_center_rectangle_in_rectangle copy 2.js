const windowWidth = 900;
const windowHeight = 400;
const width1 = 600;
const height1 = 300;
const x1 = 80;
const y1 = 90;
const width2 = 400;
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    const x = centerRectangle(windowWidth, width);
    const y = centerRectangle(windowHeight, height);
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x, y, width, height, r.WHITE);
    r.EndDrawing();
}
const height2 = 200;
const x2 = (width1 - width2) / 2 + x1;
const y2 = (height1 - height2) / 2 + y1;

const r = require("raylib");
r.InitWindow(
    windowWidth,
    windowHeight,
    "Center a Rectangle Inside Another Rectangle",
);
r.SetTargetFPS(60);
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x1, y1, width1, height1, r.WHITE);
    r.DrawRectangle(x2, y2, width2, height2, r.RED);
    r.EndDrawing();
}
r.CloseWindow();
