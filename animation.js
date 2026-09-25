const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;
const width = 100;
const height = 80;
let x = 0;
let y = 0;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Animation");
    r.SetTargetFPS(80);
}
let color = r.WHITE;
function draw() {
    r.BeginDrawing();

    // r.ClearBackground(r.WHITE);
    r.DrawRectangle(x, y, width, height, color);

    r.EndDrawing();
}
function update() {
    if (y === 0) {
        x++;
        color = r.WHITE;
    }
    if (x + width === windowWidth) {
        y++;
        color = r.BLUE;
    }
    if (y + height === windowHeight) {
        x--;
        color = r.GREEN;
    }
    if (x === 0) {
        y--;
        color = r.PINK;
    }
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
        update();
    }
}
function main() {
    setup();
    loop();
    r.CloseWindow();
}
main();
