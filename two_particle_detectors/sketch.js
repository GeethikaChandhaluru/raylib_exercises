const r = require("raylib");

const windowWidth = 600;
const windowHeight = 400;
const FPS = 60;

const particle1X = 180;
const particle1Y = 0;
const particle2X = windowWidth / 2 + 100;
const particle2Y = 0;

const particleWidth = 120;
const particleHeight = windowHeight;
const particle2Width = 10;
const particle2Height = windowHeight;

let scannerX = 0;
let scannerY = 0;
let scanner2X = particle1X + particleWidth;
let scanner2Y = 0;

const scannerWidth = 40;
const scannerHeight = windowHeight;
const scanner2Width = 40;
const scanner2Height = windowHeight;

const speed = 2;
const speed2 = 4;

let direction = 1;
let direction2 = 1;

let color1 = r.WHITE;
let color2 = r.WHITE;

function scanner1() {
    scannerX = scannerX + speed * direction;
    if (scannerX + scannerWidth >= windowWidth / 2) {
        scannerX = windowWidth / 2 - scannerWidth;
        direction = -1;
    }

    if (scannerX <= 0) {
        scannerX = 0;
        direction = 1;
    }
}

function scanner2() {
    scanner2X = scanner2X + speed2 * direction2;
    if (scanner2X + scanner2Width >= windowWidth) {
        scanner2X = windowWidth - scanner2Width;
        direction2 = -1;
    }

    if (scanner2X <= windowWidth / 2) {
        scanner2X = windowWidth / 2;
        direction2 = 1;
    }
}

function overlap() {
    if (
        scannerX + scannerWidth > particle1X &&
        scannerX < particle1X + particleWidth
    )
        color1 = r.RED;
    else color1 = r.WHITE;
    if (
        scanner2X + scanner2Width > particle2X &&
        scanner2X < particle2X + particle2Width
    )
        color2 = r.RED;
    else color2 = r.WHITE;
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Scanner");
    r.SetTargetFPS(FPS);
    // r.SetTraceLogLevel(r.LOG_NONE);
}

function update() {
    scanner1();
    scanner2();

    overlap();
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(
        particle1X,
        particle1Y,
        particleWidth,
        particleHeight,
        r.BLUE,
    );
    r.DrawRectangle(
        particle2X,
        particle2Y,
        particle2Width,
        particle2Height,
        r.BLUE,
    );
    r.DrawRectangle(scannerX, scannerY, scannerWidth, scannerHeight, color1);
    r.DrawRectangle(
        scanner2X,
        scanner2Y,
        scanner2Width,
        scanner2Height,
        color2,
    );

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
