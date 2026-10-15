const r = require("raylib");

function setup() {
    const values = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];

    r.SetTraceLogLevel(r.LOG_NONE);
    const windowWidth = 400;
    const windowHeight = 400;
    const world = {};
    world.data = values;
    world.gap = 2;
    world.x = world.gap;
    world.y = windowHeight;
    world.width = 40;
    r.InitWindow(windowWidth, windowHeight, "Averages");
    r.SetTargetFPS(60);
    return world;
}

function max(data) {
    let tallest = data[0];
    for (let i = 1; i < data.length; i++)
        if (tallest < data[i]) tallest = data[i];
    return tallest;
}

function scaling() {
    return (r.GetScreenHeight() / 100) * 90;
}
function applyScaling(data) {
    return scaling() / max(data);
}

function barHeight(data, i) {
    return data[i] * applyScaling(data);
}

function drawBar(world) {
    let { data, gap, x, y, width } = world;
    for (let i = 0; i < data.length; i++) {
        r.DrawRectangle(
            x,
            y - barHeight(data, i),
            width - gap,
            barHeight(data, i),
            r.DARKBLUE,
        );
        x = x + width;
    }
}

function average(data) {
    let sum = 0;
    for (const value of data) {
        sum += value;
    }
    return sum / data.length;
}

function lineHeight(y, data) {
    return y - average(data) * applyScaling(data);
}

function drawAverageLine(data, y) {
    r.DrawLine(
        0,
        lineHeight(y, data),
        r.GetScreenWidth(),
        lineHeight(y, data),
        r.RED,
    );
}

function drawGraph(world) {
    drawBar(world);
    drawAverageLine(world.data, world.y);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);

    drawGraph(world);

    r.EndDrawing();
}
function loop(world) {
    while (!r.WindowShouldClose()) {
        // no update!
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
    r.CloseWindow();
}
main();
