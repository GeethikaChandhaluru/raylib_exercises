const windowWidth = 900;
const windowHeight = 400;
const width1 = 300;
const height1 = 200;
const x1 = 20;
const y1 = 40;
const decimalEquivalent = 0.5;
const width2 = width1 * decimalEquivalent;
const height2 = height1 * decimalEquivalent;
const x2 = (width1 - width2) / 2 + x1;
const y2 = (height1 - height2) / 2 + y1;

const r = require("raylib");
r.InitWindow(windowWidth, windowHeight, "Scale and Center");
r.SetTargetFPS(60);
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x1, y1, width1, height1, r.WHITE);
    r.DrawRectangle(x2, y2, width2, height2, r.RED);
    r.EndDrawing();
}
r.CloseWindow();
