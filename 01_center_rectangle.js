const windowWidth = 900;
const windowHeight = 400;
const width = 300;
const height = 200;
const x = (windowWidth - width) / 2;
const y = (windowHeight - height) / 2;

const r = require("raylib");
r.InitWindow(windowWidth, windowHeight, "Center a Rectangle");
r.SetTargetFPS(60);
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x, y, width, height, r.WHITE)
    r.EndDrawing()
}
r.CloseWindow();