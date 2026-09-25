const windowWidth = 900;
const windowHeight = 400;
const targetCircleX = 400;
const targetCircleY = 300;
const x1 = 200;
const y1 = 300;
const x2 = 700;
const y2 = 300;
const radius = 20;

const r = require("raylib");
r.InitWindow(windowWidth, windowHeight, "Find the Closer Target");
r.SetTargetFPS(60);
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircle(targetCircleX, targetCircleY, radius, r.BLUE);
    r.DrawCircle(x1, y1, radius, r.RED);
    r.DrawCircle(x2, y2, radius, r.RED);
    const distanceOfCircle1 =
        ((x1 - targetCircleX) ** 2 + (y1 - targetCircleX) ** 2) ** 0.5;
    const distanceOfCircle2 =
        ((x2 - targetCircleX) ** 2 + (y2 - targetCircleX) ** 2) ** 0.5;
    if (distanceOfCircle1 < distanceOfCircle2)
        r.DrawLine(x1, y1, targetCircleX, targetCircleY, r.BLACK);
    else if (distanceOfCircle1 > distanceOfCircle2)
        r.DrawLine(x2, y2, targetCircleX, targetCircleY, r.BLACK);
    else {
        r.DrawLine(x1, y1, targetCircleX, targetCircleY, r.BLACK);
        r.DrawLine(x2, y2, targetCircleX, targetCircleY, r.BLACK);
    }
    r.EndDrawing();
}
r.CloseWindow();
