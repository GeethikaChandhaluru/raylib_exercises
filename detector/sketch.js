const r = require("raylib");
const p1 = require("./particle1");
const p2 = require("./particle2");
const p3 = require("./particle3");
const d = require("./detectorFunctions");
// const d1 = require("./detector1");
const d2 = require("./detector2");
const d3 = require("./detector3");

const d1 = {
    start: 0,
    end: 0,
    width: 30,
    velocity: 4,
    color: r.WHITE,
};

const windowWidth = 600;
const windowHeight = 400;
const FPS = 60;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "");
    r.SetTargetFPS(FPS);
}

function update() {
    d1.start = d.changeStart(d1.start, d1.velocity);
    d1.end = d.changeHorizontalEnd(d1.start, d1.width);
    d1.velocity = d.changeDirection(
        d1.start,
        d1.end,
        windowWidth / 2,
        0,
        d1.velocity,
    );

    d2.start = d.changeStart(d2.start, d2.velocity);
    d2.end = d.changeHorizontalEnd(d2.start, d2.width);
    d2.velocity = d.changeDirection(
        d2.start,
        d2.end,
        windowWidth,
        windowWidth / 2,
        d2.velocity,
    );

    d3.start = d.changeStart(d3.start, d3.velocity);
    d3.end = d.changeVerticalEnd(d3.start, d3.height);
    d3.velocity = d.changeDirection(
        d3.start,
        d3.end,
        windowHeight,
        0,
        d3.velocity,
    );

    d1.color = d.changeColor(
        d1.start,
        d1.end,
        p1.start,
        p1.end,
        p2.start,
        p2.end,
    );

    d2.color = d.changeColor(
        d2.start,
        d2.end,
        p1.start,
        p1.end,
        p2.start,
        p2.end,
    );

    d3.color = d.changeColorHorizontal(d3.start, d3.end, p3.y, p3.end);
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(p1.start, p1.y, p1.width, p1.height, r.DARKBLUE);
    r.DrawRectangle(p2.start, p2.y, p2.width, p2.height, r.DARKBLUE);
    r.DrawRectangle(p3.x, p3.y, p3.width, p3.height, r.DARKBLUE);
    r.DrawRectangle(d1.start, 0, d1.width, windowHeight, d1.color);
    r.DrawRectangle(d2.start, 0, d2.width, windowHeight, d2.color);
    r.DrawRectangle(0, d3.start, windowWidth, d3.height, d3.color);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
