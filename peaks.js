const r = require("raylib");

function isPeak(data, gap) {
    const peak = [];
    let x = 0;
    let y = r.GetScreenHeight();

    for (let i = 0; i < data.length - 1; i++) {
        if (data[i] > data[i - 1] && data[i] > data[i + 1]) {
            peak.push([x, calculateY(data, i, y)]);
        }
        x = x + gap;
    }
    return peak;
}

function setup() {
    const windowgap = 400;
    const windowHeight = 400;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowgap, windowHeight, "Peaks");
    r.SetTargetFPS(60);

    const values = [12, 45, 28, 29, 91, 56, 64, 47, 89, 40];
    const peak = isPeak(values, (gap = 20));

    const world = {
        peak: peak,
        data: values,
        x: 0,
        y: windowHeight,
    };

    return world;
}

function max(data) {
    let tallest = data[0];
    for (let i = 1; i < data.length; i++) tallest = Math.max(tallest, data[i]);
    return tallest;
}

function scaling() {
    return (r.GetScreenHeight() / 100) * 90;
}
function applyScaling(data) {
    return scaling() / max(data);
}

function calculateY(data, i, y) {
    return y - data[i] * applyScaling(data);
}

function drawLines(world) {
    let { data, x, y } = world;
    for (let i = 0; i < data.length - 1; i++) {
        r.DrawLineEx(
            { x: x, y: calculateY(data, i, y) },
            { x: x + gap, y: calculateY(data, i + 1, y) },
            2,
            r.BLACK,
        );
        x = x + gap;
    }
}

function drawPeak(peak) {
    const paleRed = { r: 255, g: 0, b: 0, a: 150 };
    for (let i = 0; i < peak.length; i++) {
        r.DrawCircle(peak[i][0], peak[i][1], 7, paleRed);
    }
}

function drawGraph(world) {
    drawLines(world);
    drawPeak(world.peak);
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
