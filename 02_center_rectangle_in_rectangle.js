const windowWidth = 900;
const windowHeight = 400;
const width1 = 600;
const height1 = 300;
const x1 = (windowWidth - width1) / 2;
const y1 = (windowHeight - height1) / 2;
const width2 = 400;
const height2 = 200;
const x2 = ((width1 - width2) / 2) + x1;
const y2 = ((height1 - height2) / 2) + y1;

const r = require("raylib");
r.InitWindow(windowWidth, windowHeight, "Center a Rectangle Inside Another Rectangle");
r.SetTargetFPS(60);
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x1, y1, width1, height1, r.WHITE);
    r.DrawRectangle(x2, y2, width2, height2, r.RED);
    r.EndDrawing();
}
r.CloseWindow();